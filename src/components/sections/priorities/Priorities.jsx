import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Input,
  InputLabel,
  Radio,
  RadioGroup,
  withStyles,
} from '@material-ui/core';
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import { Attribute } from 'gw2-ui-bulk';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changePriority, getPriority } from '../../../state/slices/priorities';
import HelperIcon from '../../baseComponents/HelperIcon';
import Affixes from '../Affixes';
import { parsePriority } from '../../../utils/usefulFunctions';

const styles = (theme) => ({
  text: {
    color: '#ddd !important',
  },
  templateChip: {
    margin: theme.spacing(1),
    marginBottom: theme.spacing(2),
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
  helper: {
    fontSize: 10,
  },
});

const OPTIMIZATION_GOALS = ['Damage', 'Survivability', 'Healing'];

const Priorities = ({ classes }) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const optimizeFor = useSelector(getPriority('optimizeFor'));
  const weaponType = useSelector(getPriority('weaponType'));
  const minBoonDuration = useSelector(getPriority('minBoonDuration'));
  const minHealingPower = useSelector(getPriority('minHealingPower'));
  const minToughness = useSelector(getPriority('minToughness'));
  const maxToughness = useSelector(getPriority('maxToughness'));

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
        <Affixes />
      </Grid>

      <Grid item xs={12} sm={6}>
        <div className={classes.box}>
          <FormControl className={classes.formControl}>
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
          <FormControl className={classes.formControl}>
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
          <FormControl className={classes.formControl}>
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
          <FormControl className={classes.formControl}>
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
    </Grid>
  );
};

export default withStyles(styles)(Priorities);
