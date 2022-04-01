import { TextDivider } from '@discretize/react-discretize-components';
import { Grid } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { buffModifiers } from '../../../assets/modifierdata';
import { getSelectedCharacter } from '../../../state/slices/controlsSlice';
import ErrorBoundary from '../../baseComponents/ErrorBoundary';
import AffixesStats from './AffixesStats';
import AppliedModifiers from './AppliedModifiers';
import Indicators from './Indicators';
import OutputDistribution from './OutputDistribution';
import OutputInfusions from './OutputInfusions';
import ResultCharacter from './ResultCharacter';
import SpecialDurations from './SpecialDurations';
import TemplateHelperSections from './TemplateHelperSections';

const ResultDetails = ({ data }) => {
  const { t } = useTranslation();

  const character = useSelector(getSelectedCharacter);
  if (!character) {
    return null;
  }

  // eslint-disable-next-line no-console
  console.log('Selected Character Data:', character);

  // Replace the names to match gw2-ui names
  const damageBreakdown = Object.keys(character.results.effectiveDamageDistribution).map(
    (damageType) => ({
      name: damageType === 'Poison Damage' ? 'Poisoned' : damageType.replace('Damage', '').trim(),
      value: character.results.damageBreakdown[damageType],
    }),
  );

  const effectiveDistribution = Object.keys(character.results.effectiveDamageDistribution).map(
    (damageType) => ({
      name: damageType === 'Poison Damage' ? 'Poisoned' : damageType.replace('Damage', '').trim(),
      value: character.results.effectiveDamageDistribution[damageType],
    }),
  );

  const assumedBuffs = buffModifiers
    .flatMap((buff) => buff.items)
    .filter((buff) => character.settings.cachedFormState.buffs.buffs[buff.id]);

  return (
    <ErrorBoundary location="ResultDetails" resetKeys={[character]}>
      <TextDivider text="Result Character" />

      <ResultCharacter data={data} character={character} assumedBuffs={assumedBuffs} />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <SpecialDurations data={character.attributes} />
          <Indicators data={character.results.indicators} />
          <AffixesStats data={character.gearStats} title={t('Stats from affixes')} />
          {character.infusions && <OutputInfusions data={character.infusions} />}
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <OutputDistribution title={t('Damage Breakdown')} data={damageBreakdown} />
          <OutputDistribution title={t('Effective Distribution')} data={effectiveDistribution} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <AffixesStats
            data={character.results.effectivePositiveValues}
            title={t('Damage increase from +5 of attribute')}
          />
          <AffixesStats
            data={character.results.effectiveNegativeValues}
            title={t('Damage loss from -5 of attribute')}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} />
      </Grid>
      <AppliedModifiers data={character?.settings?.appliedModifiers} />
      <TemplateHelperSections character={character} />
    </ErrorBoundary>
  );
};

export default React.memo(ResultDetails);
