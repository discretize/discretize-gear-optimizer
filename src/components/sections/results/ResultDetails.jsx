import { Grid } from '@material-ui/core';
import { getImage } from 'gatsby-plugin-image';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import React from 'react';
import { useSelector } from 'react-redux';
import times from 'lodash/times';
import { getSelectedCharacter } from '../../../state/slices/controlsSlice';
import { updateAttributes } from '../../../state/optimizer/optimizerCore';
import { Classes, Defense, INFUSION_IDS } from '../../../utils/gw2-data';
import { firstUppercase } from '../../../utils/usefulFunctions';
import Character from '../../gw2/Character';
import TemplateHelperSections from './TemplateHelperSections';
import AffixesStats from './AffixesStats';
import AppliedModifiers from './AppliedModifiers';
import Indicators from './Indicators';
import OutputDistribution from './OutputDistribution';
import OutputInfusions from './OutputInfusions';
import SpecialDurations from './SpecialDurations';

import { extrasModifiersById } from '../../../assets/modifierdata';

const ResultDetails = ({ data }) => {
  const { t } = useTranslation();

  const charRaw = useSelector(getSelectedCharacter);
  if (!charRaw) {
    return null;
  }

  // Fetch additional result values from the optimizer core (on demand)
  const character = { ...charRaw };
  updateAttributes(character);

  // eslint-disable-next-line no-console
  console.log('Selected Character Data:', character);

  const { profession, weaponType } = character.settings;

  const { extras } = character.settings.cachedFormState;
  const {
    Sigil1: sigil1,
    Sigil2: sigil2,
    Enhancement: utility,
    Nourishment: food,
    Runes: runeStringId,
  } = extras;

  const classData = Classes[profession].weapons;

  const { defense } = Classes[profession];
  let weight = 'Light';
  if (defense === Defense.HEAVY) {
    weight = 'Heavy';
  } else if (defense === Defense.MEDIUM) {
    weight = 'medium';
  }

  let infusions = [...Array(18).fill(49432)];

  if (character.infusions) {
    infusions = Object.keys(character.infusions).flatMap((key) =>
      times(character.infusions[key], () => INFUSION_IDS[key]),
    );
    // fill up the remaining slots with generic +9 Agony Infusions
    infusions = [
      ...infusions,
      // eslint-disable-next-line id-length
      ...times(18 - Object.values(character.infusions).reduce((p, c) => p + c), () => 49432),
    ];
  }

  const foodId = extrasModifiersById[food]?.gw2id;
  const utilityId = extrasModifiersById[utility]?.gw2id;
  const sigil1Id = extrasModifiersById[sigil1]?.gw2id;
  const sigil2Id = extrasModifiersById[sigil2]?.gw2id;
  const rune = runeStringId ? extrasModifiersById[runeStringId] : '';
  const runeName = runeStringId ? rune.text.replace(/(Superior|Rune|of|the)/g, '').trim() : '';

  // Calculate the props for the weapons component
  let wea1;
  let wea2;
  let weapData;

  if (weaponType === 'Dual wield') {
    wea1 = classData.mainHand.find((item) => item.type === 'one-handed');
    [wea2] = classData.offHand;
    weapData = {
      weapon1MainId: wea1.gw2id,
      weapon1MainAffix: character.gear[12],
      weapon1MainInfusion1Id: infusions ? infusions[16] : null,
      weapon1MainSigil1Id: sigil1Id,
      weapon1MainSigil1: firstUppercase(sigil1),
      weapon1OffId: wea2.gw2id,
      weapon1OffAffix: character.gear[13],
      weapon1OffInfusionId: infusions ? infusions[17] : null,
      weapon1OffSigilId: sigil2Id,
      weapon1OffSigil: firstUppercase(sigil2),
    };
  } else {
    wea1 = classData.mainHand.find((item) => item.type === 'two-handed');
    weapData = {
      weapon1MainId: wea1.gw2id,
      weapon1MainAffix: character.gear[12],
      weapon1MainInfusion1Id: infusions[16],
      weapon1MainSigil1Id: sigil1Id,
      weapon1MainInfusion2Id: infusions[17],
      weapon1MainSigil2Id: sigil2Id,
      weapon1MainSigil1: firstUppercase(sigil1),
      weapon1MainSigil2: firstUppercase(sigil2),
    };
  }

  const imageRaw = data.images.edges
    .flatMap((image) => image.node)
    .find((image) => image.original.src.includes(character.settings.specialization.toLowerCase()));
  const image = getImage(imageRaw);

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
      <Character
        weight={weight}
        gear={character.gear}
        attributes={character.attributes}
        profession={profession}
        infusions={infusions}
        runeId={rune.gw2id}
        runeName={runeName}
        image={image}
        weapons={weapData}
      />

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
      />
    </>
  );
};

export default React.memo(ResultDetails);
