import { TextDivider } from '@discretize/react-discretize-components';
import { Box, Divider, FormControlLabel, Grid, Switch } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { buffModifiers } from '../../../assets/modifierdata';
import { getSelectedCharacter } from '../../../state/slices/controlsSlice';
import { getGameMode } from '../../../state/slices/userSettings';
import { createAssumedBuffs } from '../../../utils/toLazyToType-usefulFunctions';
import ErrorBoundary from '../../baseComponents/ErrorBoundary';
import AffixesStats from './AffixesStats';
import AppliedModifiers from './AppliedModifiers';
import Bonuses from './Bonuses';
import EffectiveGainLoss from './EffectiveGainLoss';
import Indicators from './Indicators';
import OutputDistribution from './OutputDistribution';
import OutputInfusions from './OutputInfusions';
import ResultCharacter from './ResultCharacter';
import SpecialDurations from './SpecialDurations';
import TemplateHelperSections from './TemplateHelperSections';
import ConditionDetails from './ConditionDetails';
import EffectiveAttributes from './EffectiveAttributes';
import MultiplierBreakdown from './MultiplierBreakdown';

const roundTwo = (num) => Math.round(num * 100) / 100;

const ResultDetails = () => {
  const { t } = useTranslation();

  const [showMore, setShowMore] = useState(false);

  const character = useSelector(getSelectedCharacter);
  const gameMode = useSelector(getGameMode);

  if (!character) {
    return null;
  }

  // eslint-disable-next-line no-console
  console.log('Selected Character Data:', character);

  let assumedBuffs = buffModifiers
    .flatMap((buff) => buff.items)
    .filter((buff) => character.settings.cachedFormState.buffs.buffs[buff.id]);
  // gamemode is technically not correct since the gamemode is not tied to a character at the moment.
  assumedBuffs = createAssumedBuffs({ buffsRaw: assumedBuffs, character, gameMode });

  const bonuses = {};
  Object.entries({
    'Outgoing Healing': t('Outgoing Healing'),
    'Clone Critical Chance': t('Clone Critical Chance'),
    'Phantasm Critical Chance': t('Phantasm Critical Chance'),
    'Phantasm Critical Damage': t('Phantasm Critical Damage'),
    'Alternative Critical Chance': t('Alternative Critical Chance'),
    'Alternative Critical Damage': t('Alternative Critical Damage'),
  }).forEach(([attribute, label]) => {
    if (character.attributes[attribute]) {
      bonuses[label] = `${roundTwo(character.attributes[attribute] * 100)}%`;
    }
  });

  return (
    <ErrorBoundary location="ResultDetails" resetKeys={[character]}>
      <TextDivider text="Result Character" />

      <ResultCharacter character={character} assumedBuffs={assumedBuffs} />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <SpecialDurations data={character.attributes} />
          {Object.keys(bonuses).length ? <Bonuses data={bonuses} title={t('Bonuses')} /> : null}
          <Indicators data={character.results.indicators} />
          {character.infusions && <OutputInfusions data={character.infusions} />}
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <OutputDistribution character={character} />
          <EffectiveAttributes data={character.attributes} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <AffixesStats data={character.gearStats} title={t('Stats from Affixes')} />
        </Grid>
      </Grid>

      <Divider>
        <FormControlLabel
          control={
            <Switch
              checked={showMore}
              onChange={(e) => setShowMore(e.target.checked)}
              name="checked"
              color="primary"
            />
          }
          label={t('More data...')}
        />
      </Divider>
      {showMore && (
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <ConditionDetails
              title={t('Condition Damage Ticks')}
              data={character.attributes}
              mode="Damage Tick"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ConditionDetails
              title={t('Condition Stack Average')}
              data={character.attributes}
              mode="Stacks"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <EffectiveGainLoss
              data={character.results.effectivePositiveValues}
              title={t('Damage increase from +5 of attribute')}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={4} order={{ md: 1000 }}>
            <EffectiveGainLoss
              data={character.results.effectiveNegativeValues}
              title={t('Damage loss from -5 of attribute')}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={8}>
            <MultiplierBreakdown data={character.settings.modifiers.damageMultiplierBreakdown} />
          </Grid>
        </Grid>
      )}

      <AppliedModifiers character={character} />
      <TemplateHelperSections character={character} />
    </ErrorBoundary>
  );
};

export default React.memo(ResultDetails);
