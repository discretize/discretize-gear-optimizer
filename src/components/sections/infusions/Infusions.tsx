import { Attribute, Item } from '@discretize/gw2-ui-new';
import { HelperIcon } from '@discretize/react-discretize-components';
import { FormControl, Grid2 as Grid, Input, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from 'tss-react/mui';
import {
  changeAR,
  changeInfusion,
  changeOmnipotion,
  getAR,
  getMaxInfusions,
  getOmniPotion,
  getPrimaryInfusion,
  getPrimaryMaxInfusions,
  getSecondaryInfusion,
  getSecondaryMaxInfusions,
} from '../../../state/slices/infusions';
import { getGameMode } from '../../../state/slices/userSettings';
import { INFUSION_IDS } from '../../../utils/gw2-data';
import { parseAr, parseInfusionCount } from '../../../utils/usefulFunctions';
import { AmountInputAuto } from '../../baseComponents/AmountInput';
import CheckboxComponent from '../../baseComponents/CheckboxComponent';
import InfusionHelper from './InfusionHelper';

const arOptionLabels = {
  '150': '150',
  '162': '162',
  '203': '203 (DH Radiance)',
  '222': '222',
  '244': '244 (Soulbeast)',
  '245': '245 (Weaver)',
  '343': '343 (DH Virtues)',
};
const arOptions = Object.keys(arOptionLabels);

const useStyles = makeStyles()((theme) => ({
  formControl: {
    width: 200,
    marginRight: theme.spacing(3),
  },
  formControl2: {
    width: 80,
  },
}));

const Infusions = () => {
  const { classes } = useStyles();

  const dispatch = useDispatch();
  const { t } = useTranslation();
  const ar = useSelector(getAR);
  const omnipotion = useSelector(getOmniPotion);

  const maxInfusions = useSelector(getMaxInfusions);
  const primaryInfusion = useSelector(getPrimaryInfusion);
  const secondaryInfusion = useSelector(getSecondaryInfusion);
  const primaryMaxInfusions = useSelector(getPrimaryMaxInfusions);
  const secondaryMaxInfusions = useSelector(getSecondaryMaxInfusions);

  const gameMode = useSelector(getGameMode);

  const handleARChange = React.useCallback((_e, value) => dispatch(changeAR(value)), [dispatch]);

  const dropdown = (name, varName, infusion) => {
    return (
      <FormControl className={classes.formControl} variant="standard">
        <InputLabel id={`dropdown_${name}`}>{name}</InputLabel>
        <Select
          labelId={`dropdown_${name}`}
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
          renderValue={(value) => <Item id={INFUSION_IDS[value]} disableLink />}
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
      <FormControl className={className} variant="standard">
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
      {gameMode === 'fractals' && (
        <Grid
          container
          size={12}
          spacing={2}
          sx={{ alignItems: 'center', justifyContent: 'flex-start' }}
        >
          <Grid size={{ xs: 12, sm: 'grow' }}>
            <CheckboxComponent
              value={omnipotion}
              checked={omnipotion}
              label={
                <>
                  <Trans>Include </Trans>
                  <Item id={79722} disableLink />
                  <HelperIcon
                    text={t(
                      'Adds 150% of your Agony Resistance to Vitality, Toughness, and Concentration.',
                    )}
                    size="small"
                  />
                </>
              }
              onChange={(e) => dispatch(changeOmnipotion(e.target.checked))}
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 'grow' }}>
            <AmountInputAuto
              className={classes.formControl}
              parseFn={parseAr}
              handleAmountChange={handleARChange}
              label={t('Agony Resistance')}
              endLabel={<Attribute name="Agony Resistance" disableLink disableText />}
              autoCompleteProps={{
                options: arOptions,
                renderOption: (props, option) => <li {...props}>{arOptionLabels[option]}</li>,
              }}
              value={ar}
            />
          </Grid>
        </Grid>
      )}
      <Grid
        container
        size={12}
        spacing={2}
        direction="row"
        sx={{ justifyContent: 'flex-start', alignItems: 'center' }}
      >
        <Grid size={12}>{input('# Stat Infusions', 'maxInfusions', maxInfusions)}</Grid>

        <Grid size={12}>
          {dropdown(t('Infusion Type #1'), 'primaryInfusion', primaryInfusion)}
          {input(t('Max #'), 'primaryMaxInfusions', primaryMaxInfusions, classes.formControl2)}
        </Grid>

        <Grid size={12}>
          {dropdown(t('Infusion Type #2'), 'secondaryInfusion', secondaryInfusion)}
          {input(t('Max #'), 'secondaryMaxInfusions', secondaryMaxInfusions, classes.formControl2)}
        </Grid>
      </Grid>

      {gameMode === 'fractals' && (
        <Grid size={12}>
          <InfusionHelper />
        </Grid>
      )}
    </Grid>
  );
};

export default Infusions;
