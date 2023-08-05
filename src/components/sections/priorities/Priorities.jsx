import { Attribute, Boon } from '@discretize/gw2-ui-new';
import { HelperIcon } from '@discretize/react-discretize-components';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Input,
  InputLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from 'tss-react/mui';
import { getProfession } from '../../../state/slices/controlsSlice';
import { changePriority, getPriority } from '../../../state/slices/priorities';
import { WeaponTypes } from '../../../utils/gw2-data';
import { parsePriority } from '../../../utils/usefulFunctions';

const useStyles = makeStyles()((theme) => ({
  text: {
    color: '#ddd !important',
  },
  formControl: {
    margin: theme.spacing(1),
    width: 190,
  },
  box: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
}));

const OPTIMIZATION_GOALS = ['Damage', 'Survivability', 'Healing'];

const Priorities = () => {
  const { classes } = useStyles();
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const optimizeFor = useSelector(getPriority('optimizeFor'));
  const weaponType = useSelector(getPriority('weaponType'));
  const minBoonDuration = useSelector(getPriority('minBoonDuration'));
  const minHealingPower = useSelector(getPriority('minHealingPower'));
  const minToughness = useSelector(getPriority('minToughness'));
  const maxToughness = useSelector(getPriority('maxToughness'));
  const minHealth = useSelector(getPriority('minHealth'));
  const minCritChance = useSelector(getPriority('minCritChance'));
  const minDamage = useSelector(getPriority('minDamage'));
  const minHealing = useSelector(getPriority('minHealing'));
  const minOutgoingHealing = useSelector(getPriority('minOutgoingHealing'));
  const minQuicknessDuration = useSelector(getPriority('minQuicknessDuration'));
  const minSurvivability = useSelector(getPriority('minSurvivability'));
  const profession = useSelector(getProfession);

  const minCritChanceValue = parsePriority(minCritChance).value;
  const showWarning = profession !== 'Warrior' && minCritChanceValue && minCritChanceValue >= 99.9;

  const handleChange = (event) => {
    dispatch(changePriority({ key: event.target.name, value: event.target.value }));
  };

  const optimizeForControl = (
    <Grid item xs={6}>
      <FormControl component="fieldset">
        <FormLabel component="legend">
          <Trans>Optimize for:</Trans>{' '}
          <HelperIcon
            text={t(
              "What to optimize the results for. 'Damage' includes power and condition damage according to the distribution below.",
            )}
            size="small"
          />
        </FormLabel>
        <RadioGroup
          aria-label="optimizeFor"
          name="optimizeFor"
          value={optimizeFor}
          onChange={handleChange}
        >
          {OPTIMIZATION_GOALS.map((goal) => (
            <FormControlLabel
              key={`goal_${goal}`}
              value={goal}
              control={<Radio color="primary" />}
              // i18next-extract-mark-context-next-line ["Damage","Survivability","Healing"]
              label={t('priorityGoal', { context: goal })}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </Grid>
  );

  const weaponTypeControl = (
    <Grid item xs={6}>
      <FormControl component="fieldset">
        <FormLabel component="legend">
          <Trans>Weapon type:</Trans>{' '}
          <HelperIcon
            text={t(
              "Select 'Dual wield' if you're using weapons in both hands or 'Two-handed' when using a two-handed weapon.",
            )}
            size="small"
          />
        </FormLabel>
        <RadioGroup
          aria-label="weaponType"
          name="weaponType"
          value={weaponType}
          onChange={handleChange}
        >
          <FormControlLabel
            value={WeaponTypes.dualWield}
            control={<Radio color="primary" />}
            label={t('Dual wielded')}
          />
          <FormControlLabel
            value={WeaponTypes.twoHanded}
            control={<Radio color="primary" />}
            label={t('Two-handed')}
          />
        </RadioGroup>
      </FormControl>
    </Grid>
  );

  const resultConstraints = [
    {
      type: 'minDamage',
      value: minDamage,
      label: [<Trans key="rc_1">Min.</Trans>, ' ', t('Damage')],
    },
    {
      type: 'minHealing',
      value: minHealing,
      label: [<Trans key="rc_2">Min.</Trans>, ' ', t('Healing')],
    },
    {
      type: 'minSurvivability',
      value: minSurvivability,
      label: [<Trans key="rc_3">Min.</Trans>, ' ', t('Survivability')],
    },
  ].map(({ type, label, value }) => {
    return (
      <Grid key={`resultConstraints${type}`} item xs={6} md={4} className={classes.box}>
        <FormControl className={classes.formControl} variant="standard">
          <InputLabel htmlFor={`${type}-input-with-icon-adornment`}>{label}</InputLabel>
          <Input
            id={`${type}-input-with-icon-adornment`}
            value={value}
            onChange={handleChange}
            name={`${type}`}
            error={parsePriority(value).error}
            autoComplete="off"
          />
        </FormControl>
      </Grid>
    );
  });

  const statConstraints = [
    {
      type: 'minToughness',
      value: minToughness,
      label: [
        <Trans key="sC_1">Min.</Trans>,
        ' ',
        <Attribute key="sC_3" name="Toughness" disableLink />,
      ],
    },
    {
      type: 'maxToughness',
      value: maxToughness,
      label: [
        <Trans key="sC_1">Max.</Trans>,
        ' ',
        <Attribute key="sC_3" name="Toughness" disableLink />,
      ],
    },
    {
      type: 'minBoonDuration',
      value: minBoonDuration,
      label: [
        <Trans key="sC_1">Min.</Trans>,
        ' ',
        <Attribute key="sC_3" name="Boon Duration" disableLink />,
      ],
    },
    {
      type: 'minHealingPower',
      value: minHealingPower,
      label: [
        <Trans key="sC_1">Min.</Trans>,
        ' ',
        <Attribute key="sC_3" name="Healing Power" disableLink />,
      ],
    },
    {
      type: 'minHealth',
      value: minHealth,
      label: [
        <Trans key="sC_1">Min.</Trans>,
        ' ',
        <Attribute key="sC_3" name="Health" disableLink />,
      ],
    },
    {
      type: 'minCritChance',
      value: minCritChance,
      label: [
        <Trans key="sC_1">Min.</Trans>,
        ' ',
        <Attribute key="sC_3" name="Critical Chance" disableLink />,
      ],
    },
    {
      type: 'minOutgoingHealing',
      value: minOutgoingHealing,
      label: [<Trans key="sC_1">Min.</Trans>, ' ', t('% Outgoing Healing')],
    },
    {
      type: 'minQuicknessDuration',
      value: minQuicknessDuration,
      label: [
        <Trans key="sC_1">Min.</Trans>,
        ' ',
        <React.Fragment key="sC_3">
          <Boon name="Quickness" disableLink />
          {t(' duration')}
        </React.Fragment>,
      ],
    },
  ].map(({ type, label, value }) => {
    return (
      <Grid key={`statsConstraints${type}`} item xs={6} md={4} className={classes.box}>
        <FormControl className={classes.formControl} variant="standard">
          <InputLabel htmlFor={`${type}-input-with-icon-adornment`}>{label}</InputLabel>
          <Input
            id={`${type}-input-with-icon-adornment`}
            value={value}
            onChange={handleChange}
            name={`${type}`}
            error={parsePriority(value).error}
            autoComplete="off"
          />
        </FormControl>
      </Grid>
    );
  });

  return (
    <>
      <Grid container m={1}>
        {optimizeForControl}
        {weaponTypeControl}
      </Grid>

      <Grid container>{statConstraints}</Grid>

      <Grid container>{resultConstraints}</Grid>

      {showWarning ? (
        <MuiAlert elevation={6} variant="filled" severity="warning">
          <Trans>
            Forcing 100% critical chance is not recommended in most cases. If capping critical
            chance is optimal, the optimizer will do so automatically, and if it is not, forcing it
            will lead to a worse result!
          </Trans>
        </MuiAlert>
      ) : null}
    </>
  );
};

export default Priorities;
