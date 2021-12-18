import { Grid, IconButton } from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSelectedCharacter } from '../../../state/slices/controlsSlice';
import AffixesStats from './AffixesStats';
import AppliedModifiers from './AppliedModifiers';
import Indicators from './Indicators';
import OutputDistribution from './OutputDistribution';
import OutputInfusions from './OutputInfusions';
import ResultCharacter from './ResultCharacter';
import SpecialDurations from './SpecialDurations';

const ResultDetails = ({ data }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

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

  return (
    <>
      Open this character in a new tab:
      <IconButton
        onClick={() =>
          dispatch({
            type: 'EXPORT_STATE_CHARACTER',
            onSuccess: (res) => {
              window.open(`/build?data=${res}`, '_blank');
            },
          })
        }
      >
        <ShareIcon />
      </IconButton>
      <ResultCharacter data={data} character={character} />
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
      {/*
      <TemplateHelperSections
        character={character}
        otherData={{
          utilityId,
          foodId,
          sigil1Id,
          sigil2Id,
          infusions,
          weight,
          rune: rune.gw2id,
          runeName,
        }}
      / >

      */}
    </>
  );
};

export default React.memo(ResultDetails);
