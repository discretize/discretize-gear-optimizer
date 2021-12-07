import {
  FormControl,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  Select,
  withStyles,
} from '@material-ui/core';
import { Attribute, Item } from 'gw2-ui-bulk';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import {
  getAR,
  getOmniPotion,
  getMaxInfusions,
  getPrimaryInfusion,
  getSecondaryInfusion,
  getPrimaryMaxInfusions,
  getSecondaryMaxInfusions,
  changeAR,
  changeOmnipotion,
  changeInfusion,
} from '../../../state/slices/infusions';
import { parseAr, parseInfusionCount } from '../../../utils/usefulFunctions';
import CheckboxComponent from '../../baseComponents/CheckboxComponent';
import AmountInput from '../../baseComponents/AmountInput';
import InfusionHelper from './InfusionHelper';
import HelperIcon from '../../baseComponents/HelperIcon';
import { INFUSION_IDS } from '../../../utils/gw2-data';

const arOptionLabels = {
  '150': '150',
  '203': '203 (DH Radiance)',
  '222': '222',
  '243': '243 (Soulbeast)',
  '245': '245 (Weaver)',
  '343': '343 (DH Virtues)',
};
const arOptions = Object.keys(arOptionLabels);

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

  const maxInfusions = useSelector(getMaxInfusions);
  const primaryInfusion = useSelector(getPrimaryInfusion);
  const secondaryInfusion = useSelector(getSecondaryInfusion);
  const primaryMaxInfusions = useSelector(getPrimaryMaxInfusions);
  const secondaryMaxInfusions = useSelector(getSecondaryMaxInfusions);

  const handleARChange = React.useCallback((_e, value) => dispatch(changeAR(value)), [dispatch]);

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
    const { error } = parseInfusionCount(value);
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
    <Grid container spacing={4}>
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
          <AmountInput
            className={classes.formControl}
            useAutoComplete
            parseFn={parseAr}
            handleAmountChange={handleARChange}
            label={t('Agony Resistance')}
            endLabel={<Attribute name="Agony Resistance" disableLink disableText />}
            autoCompleteProps={{
              options: arOptions,
              renderOption: (option) => arOptionLabels[option],
            }}
            value={ar}
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
          {input('# Stat Infusions', 'maxInfusions', maxInfusions)}
        </Grid>

        <Grid item xs={12}>
          {dropdown(t('Infusion Type #1'), 'primaryInfusion', primaryInfusion)}
          {input(t('Max #'), 'primaryMaxInfusions', primaryMaxInfusions, classes.formControl2)}
        </Grid>

        <Grid item xs={12}>
          {dropdown(t('Infusion Type #2'), 'secondaryInfusion', secondaryInfusion)}
          {input(t('Max #'), 'secondaryMaxInfusions', secondaryMaxInfusions, classes.formControl2)}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <InfusionHelper />
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Infusions);
