import { Attribute } from '@discretize/gw2-ui-new';
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
import { Trans, useTranslation } from 'react-i18next';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from 'tss-react/mui';
import { getProfession } from '../../../state/slices/controlsSlice';
import { changePriority, getPriority } from '../../../state/slices/priorities';
import { parsePriority } from '../../../utils/usefulFunctions';
import AffixesSelect from '../../baseComponents/AffixesSelect';
import CustomAffix from './CustomAffix';

const useStyles = makeStyles()((theme) => ({
  text: {
    color: '#ddd !important',
  },
  formControl: {
    margin: theme.spacing(1),
    width: 160,
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
  const affixes = useSelector(getPriority('affixes'));
  const profession = useSelector(getProfession);

  const customSelected = affixes.includes('Custom');

  const minCritChanceValue = parsePriority(minCritChance).value;
  const showWarning = profession !== 'Warrior' && minCritChanceValue && minCritChanceValue >= 99.9;

  const handleChange = (event) => {
    dispatch(changePriority({ key: event.target.name, value: event.target.value }));
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
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
                key={goal}
                value={goal}
                control={<Radio color="primary" />}
                // i18next-extract-mark-context-next-line ["Damage","Survivability","Survivability (WIP)","Healing"]
                label={t('priorityGoal', {
                  context: goal,
                })}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item xs={12} sm={6}>
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
              value="Dual wield"
              control={<Radio color="primary" />}
              label={t('Dual wielded')}
            />
            <FormControlLabel
              value="Two-handed"
              control={<Radio color="primary" />}
              label={t('Two-handed')}
            />
          </RadioGroup>
        </FormControl>
      </Grid>

      <Grid item xs={12}>
        <AffixesSelect
          multiple
          onChange={(event, value) => {
            dispatch(
              changePriority({ key: 'affixes', value: value.map((option) => option.label) }),
            );
          }}
          value={affixes}
        />
      </Grid>

      <Grid item xs={6} md={4} className={classes.box}>
        <FormControl className={classes.formControl} variant="standard">
          <InputLabel htmlFor="minToughness-input-with-icon-adornment">
            <Trans>Min.</Trans> <Attribute name="Toughness" disableLink />
          </InputLabel>
          <Input
            id="minToughness-input-with-icon-adornment"
            value={minToughness}
            onChange={handleChange}
            name="minToughness"
            error={parsePriority(minToughness).error}
            autoComplete="off"
          />
        </FormControl>
        <HelperIcon text={t('Only show results that fulfill a minimum amount of Toughness.')} />
      </Grid>
      <Grid item xs={6} md={4} className={classes.box}>
        <FormControl className={classes.formControl} variant="standard">
          <InputLabel htmlFor="maxToughness-input-with-icon-adornment">
            <Trans>Max.</Trans> <Attribute name="Toughness" disableLink />
          </InputLabel>
          <Input
            id="maxToughness-input-with-icon-adornment"
            value={maxToughness}
            onChange={handleChange}
            name="maxToughness"
            error={parsePriority(maxToughness).error}
            autoComplete="off"
          />
        </FormControl>
        <HelperIcon text={t('Only show results that fulfill a maximum amount of Toughness.')} />
      </Grid>
      <Grid item xs={6} md={4} className={classes.box}>
        <FormControl className={classes.formControl} variant="standard">
          <InputLabel htmlFor="minBoon-input-with-icon-adornment">
            <Trans>Min.</Trans> <Attribute name="Boon Duration" disableLink />
          </InputLabel>
          <Input
            id="minBoon-input-with-icon-adornment"
            value={minBoonDuration}
            onChange={handleChange}
            name="minBoonDuration"
            error={parsePriority(minBoonDuration).error}
            autoComplete="off"
          />
        </FormControl>
        <HelperIcon text={t('Only show results that fulfill a certain amount of Boon Duration.')} />
      </Grid>
      <Grid item xs={6} md={4} className={classes.box}>
        <FormControl className={classes.formControl} variant="standard">
          <InputLabel htmlFor="minHeal-input-with-icon-adornment">
            <Trans>Min.</Trans> <Attribute name="Healing Power" disableLink />
          </InputLabel>
          <Input
            id="minHeal-input-with-icon-adornment"
            value={minHealingPower}
            onChange={handleChange}
            name="minHealingPower"
            error={parsePriority(minHealingPower).error}
            autoComplete="off"
          />
        </FormControl>
        <HelperIcon text={t('Only show results that fulfill a certain amount of Healing Power.')} />
      </Grid>
      <Grid item xs={6} md={4} className={classes.box}>
        <FormControl className={classes.formControl} variant="standard">
          <InputLabel htmlFor="minHealth-input-with-icon-adornment">
            <Trans>Min.</Trans> <Attribute name="Health" disableLink />
          </InputLabel>
          <Input
            id="minHealth-input-with-icon-adornment"
            value={minHealth}
            onChange={handleChange}
            name="minHealth"
            error={parsePriority(minHealth).error}
            autoComplete="off"
          />
        </FormControl>
        <HelperIcon text={t('Only show results that fulfill a certain amount of Health.')} />
      </Grid>
      <Grid item xs={6} md={4} className={classes.box}>
        <FormControl className={classes.formControl} variant="standard">
          <InputLabel htmlFor="minCritChance-input-with-icon-adornment">
            <Trans>Min.</Trans> <Attribute name="Critical Chance" disableLink />
          </InputLabel>
          <Input
            id="minCritChance-input-with-icon-adornment"
            value={minCritChance}
            onChange={handleChange}
            name="minCritChance"
            error={parsePriority(minCritChance).error}
            autoComplete="off"
          />
        </FormControl>
        <HelperIcon
          text={t('Only show results that fulfill a certain amount of Critical Chance.')}
        />
      </Grid>

      {showWarning ? (
        <Grid item xs={12}>
          <MuiAlert elevation={6} variant="filled" severity="warning">
            <Trans>
              Forcing 100% critical chance is not recommended in most cases. If capping critical
              chance is optimal, the optimizer will do so automatically, and if it is not, forcing
              it will lead to a worse result!
            </Trans>
          </MuiAlert>
        </Grid>
      ) : null}

      {customSelected ? (
        <Grid item xs={12}>
          <CustomAffix />
        </Grid>
      ) : null}
    </Grid>
  );
};

export default Priorities;
