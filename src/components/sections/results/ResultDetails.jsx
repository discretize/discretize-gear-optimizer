import { TextDivider } from '@discretize/react-discretize-components';
import { Grid2 as Grid } from '@mui/material';
import React from 'react';
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
import ConditionDetails from './ConditionDetails';
import EffectiveGainLoss from './EffectiveGainLoss';
import Indicators from './Indicators';
import MultiplierBreakdown from './MultiplierBreakdown';
import OtherAttributes from './OtherAttributes';
import OutputDistribution from './OutputDistribution';
import OutputInfusions from './OutputInfusions';
import ResultCharacter from './ResultCharacter';
import SpecialDurations from './SpecialDurations';
import TemplateHelperSections from './TemplateHelperSections';

const roundTwo = (num) => Math.round(num * 100) / 100;

const ResultDetails = () => {
  const { t } = useTranslation();

  const character = useSelector(getSelectedCharacter);
  const gameMode = useSelector(getGameMode);

  if (!character) {
    return null;
  }

  let assumedBuffs = buffModifiers
    .flatMap((buff) => buff.items)
    .filter((buff) => character.settings.cachedFormState.buffs.buffs[buff.id]);
  // gamemode is technically not correct since the gamemode is not tied to a character at the moment.
  assumedBuffs = createAssumedBuffs({ buffsRaw: assumedBuffs, character, gameMode });

  const bonuses = {};
  Object.entries({
    'Outgoing Healing': t('Outgoing Healing'),
    'Player Critical Damage': t('Player Critical Damage'),
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
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <SpecialDurations data={character.attributes} />
          {Object.keys(bonuses).length ? <Bonuses data={bonuses} title={t('Bonuses')} /> : null}
          <Indicators data={character.results.indicators} />
          <AffixesStats data={character.gearStats} title={t('Stats from Affixes')} />
          {character.infusions && <OutputInfusions data={character.infusions} />}
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <OutputDistribution character={character} />
          <ConditionDetails character={character} />
          <OtherAttributes character={character} />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
          <EffectiveGainLoss character={character} />
          <MultiplierBreakdown character={character} />
        </Grid>
      </Grid>
      <AppliedModifiers character={character} />
      <TemplateHelperSections character={character} />
    </ErrorBoundary>
  );
};

export default React.memo(ResultDetails);
