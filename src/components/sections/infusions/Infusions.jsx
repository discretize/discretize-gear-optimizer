import {
  FormControl,
  Grid,
  Input,
  InputLabel,
  InputAdornment,
  TextField,
  MenuItem,
  Select,
  withStyles,
} from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { Attribute, Item } from 'gw2-ui-bulk';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import {
  changeAR,
  changeOmnipotion,
  getAR,
  getOmniPotion,
  changeInfusion,
  getInfusions,
} from '../../../state/slices/infusions';
import { parseAmount } from '../../../state/optimizer/optimizerCore';
import CheckboxComponent from '../../baseComponents/CheckboxComponent';
import HelperIcon from '../../baseComponents/HelperIcon';
import { INFUSION_IDS } from '../../../utils/gw2-data';

const styles = (theme) => ({
  formControl: {
    width: 200,
    marginRight: theme.spacing(3),
  },
  formControl2: {
    width: 80,
  },
  item: { lineHeight: '1 !important' },
});

const Infusions = ({ classes }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const ar = useSelector(getAR);
  const omnipotion = useSelector(getOmniPotion);
  const infusions = useSelector(getInfusions);

  const handleARChange = React.useCallback((_e, value) => dispatch(changeAR(value)), [dispatch]);

  const { error: arError } = parseAmount(ar);

  const dropdown = (name, varName, infusion) => {
    return (
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor={name}>{name}</InputLabel>
        <Select
          value={typeof infusion === 'undefined' ? '' : infusion.toString()}
          input={<Input name={name} id={name} />}
          onChange={(e) =>
            dispatch(
              changeInfusion({
                key: varName,
                value: e.target.value,
              }),
            )
          }
          renderValue={(value) => (
            <Item id={INFUSION_IDS[value]} disableLink className={classes.item} />
          )}
        >
          <MenuItem value="">{t('None')} </MenuItem>
          {Object.entries(INFUSION_IDS).map(([attribute, id]) => (
            <MenuItem value={attribute} key={attribute}>
              <Item id={id} disableLink />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  };

  const input = (name, varName, value, className) => {
    const { error } = parseAmount(value);
    return (
      <FormControl className={className}>
        <InputLabel htmlFor={`${varName}_input-with-icon-adornment`}>{name}</InputLabel>
        <Input
          id={`${varName}_input-with-icon-adornment`}
          value={value}
          onChange={(e) => dispatch(changeInfusion({ key: varName, value: e.target.value }))}
          autoComplete="off"
          error={error}
        />
      </FormControl>
    );
  };

  return (
    <Grid container spacing={2}>
      <Grid container item spacing={2} alignItems="center" justifyContent="flex-start">
        <Grid item xs={12} sm>
          <CheckboxComponent
            value={omnipotion}
            checked={omnipotion}
            label={
              <>
                <Trans>Include </Trans>
                <Item id={79722} />
                <HelperIcon
                  text={t(
                    'Adds 150% of your Agony Resistance to Precision, Toughness, and Concentration.',
                  )}
                  size="small"
                />
              </>
            }
            onChange={(e) => dispatch(changeOmnipotion(e.target.checked))}
          />
        </Grid>
        <Grid item xs={12} sm>
          <Autocomplete
            className={classes.formControl}
            freeSolo
            disableClearable
            options={['150', '162', '222']}
            renderInput={(params) => (
              <TextField
                {...params}
                error={arError}
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <InputAdornment position="end">
                      <Attribute name="Agony Resistance" disableLink disableText />
                    </InputAdornment>
                  ),
                }}
                label={t('Agony Resistance')}
              />
            )}
            id="ar_input-with-icon-adornment"
            value={ar}
            onInputChange={handleARChange}
          />
        </Grid>
      </Grid>
      <Grid
        container
        item
        spacing={2}
        justifyContent="flex-start"
        direction="row"
        alignItems="center"
      >
        <Grid item xs={12}>
          {input('# Stat Infusions', 'maxInfusions', infusions.maxInfusions)}
        </Grid>

        <Grid item xs={12}>
          {dropdown(t('Infusion Type #1'), 'primaryInfusion', infusions.primaryInfusion)}
          {input(
            t('Max #'),
            'primaryMaxInfusions',
            infusions.primaryMaxInfusions,
            classes.formControl2,
          )}
        </Grid>

        <Grid item xs={12}>
          {dropdown(t('Infusion Type #2'), 'secondaryInfusion', infusions.secondaryInfusion)}
          {input(
            t('Max #'),
            'secondaryMaxInfusions',
            infusions.secondaryMaxInfusions,
            classes.formControl2,
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Infusions);
