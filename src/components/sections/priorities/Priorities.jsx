import { Attribute } from '@discretize/gw2-ui-new';
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
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from 'tss-react/mui';
import { changePriority, getPriority } from '../../../state/slices/priorities';
import { parsePriority } from '../../../utils/usefulFunctions';
import AffixesSelect from '../../baseComponents/AffixesSelect';
import HelperIcon from '../../baseComponents/HelperIcon';
import CustomAffix from './CustomAffix';

const useStyles = makeStyles()((theme) => ({
  text: {
    color: '#ddd !important',
  },
  formControl: {
    margin: theme.spacing(1),
    width: 180,
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
  const affixes = useSelector(getPriority('affixes'));

  const customSelected = affixes.includes('Custom');

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

      <Grid item xs={12} sm={6}>
        <div className={classes.box}>
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
          <HelperIcon
            text={t('Only show results that fulfill a certain amount of Boon Duration.')}
          />
        </div>
        <div className={classes.box}>
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
          <HelperIcon
            text={t('Only show results that fulfill a certain amount of Healing Power.')}
          />
        </div>
      </Grid>
      <Grid item xs={12} sm={6}>
        <div className={classes.box}>
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
        </div>
        <div className={classes.box}>
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
        </div>
      </Grid>

      {customSelected ? (
        <Grid item xs={12}>
          <CustomAffix />
        </Grid>
      ) : null}
    </Grid>
  );
};

export default Priorities;
