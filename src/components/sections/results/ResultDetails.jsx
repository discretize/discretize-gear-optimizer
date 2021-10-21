import { Grid } from '@material-ui/core';
import { getImage } from 'gatsby-plugin-image';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import React from 'react';
import { useSelector, useStore } from 'react-redux';
import { getModifiers, getProfession, getSelectedCharacter } from '../../../state/controlsSlice';
import { updateAttributes } from '../../../state/optimizer/optimizerCore';
import { getExtras } from '../../../state/slices/extras';
import { getPriority } from '../../../state/slices/priorities';
import { getTraitLines } from '../../../state/slices/traits';
import { Classes, Defense, INFUSIONS, PROFESSIONS } from '../../../utils/gw2-data';
import { firstUppercase } from '../../../utils/usefulFunctions';
import Character from '../../gw2/Character';
import CopyTemplateButton from '../controls/CopyTemplateButton';
import TemplateHelper from '../controls/TemplateHelper';
import AffixesStats from './AffixesStats';
import AppliedModifiers from './AppliedModifiers';
import Indicators from './Indicators';
import OutputDistribution from './OutputDistribution';
import OutputInfusions from './OutputInfusions';
import SpecialDurations from './SpecialDurations';

import { classModifiers, extrasModifiersById } from '../../../assets/modifierdata';

const ResultDetails = ({ data }) => {
  const store = useStore();
  const profession = useSelector(getProfession);

  const { t } = useTranslation();

  const extras = useSelector(getExtras);
  const {
    Sigil1: sigil1,
    Sigil2: sigil2,
    Enhancement: utility,
    Nourishment: food,
    Runes: runeStringId,
  } = extras;

  const priority = useSelector(getPriority('weaponType'));
  const traits = useSelector(getTraitLines);

  // its good enough to query this value once since modifiers remain the same accross all characters
  const modifiers = getModifiers(store.getState());
  const charRaw = useSelector(getSelectedCharacter);
  if (!charRaw) {
    return null;
  }

  // Fetch additional result values from the optimizer core (on demand)
  const character = { ...charRaw };
  updateAttributes(character);

  // eslint-disable-next-line no-console
  console.log('Selected Character Data:', character);

  const classData = Classes[profession.toLowerCase()].weapons;

  const { defense } = Classes[profession.toLowerCase()];
  let weight = 'Light';
  if (defense === Defense.HEAVY) {
    weight = 'Heavy';
  } else if (defense === Defense.MEDIUM) {
    weight = 'medium';
  }

  let infusions = [...Array(18).fill(49432)];

  if (character.infusions) {
    infusions = Object.keys(character.infusions).flatMap((key) =>
      // eslint-disable-next-line no-undef
      _.times(character.infusions[key], () => INFUSIONS.find((infu) => infu.attribute === key).id),
    );
    // fill up the remaining slots with generic +9 Agony Infusions
    infusions = [
      ...infusions,
      // eslint-disable-next-line no-undef, id-length
      ..._.times(18 - Object.values(character.infusions).reduce((p, c) => p + c), () => 49432),
    ];
  }

  const foodId = extrasModifiersById[food]?.gw2id;
  const utilityId = extrasModifiersById[utility]?.gw2id;
  const sigil1Id = extrasModifiersById[sigil1]?.gw2id;
  const sigil2Id = extrasModifiersById[sigil2]?.gw2id;
  const rune = runeStringId ? extrasModifiersById[runeStringId] : '';
  const runeName = runeStringId ? rune.text.replace(/(Superior|Rune|of|the)/g, '') : '';

  // Calculate the props for the weapons component
  let wea1;
  let wea2;
  let weapData;

  if (priority === 'Dual wield') {
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
      weapon1MainId: wea1.gw2_id,
      weapon1MainAffix: character.gear[12],
      weapon1MainInfusion1Id: infusions[16],
      weapon1MainSigil1Id: sigil1Id,
      weapon1MainInfusion2Id: infusions[17],
      weapon1MainSigil2Id: sigil2Id,
      weapon1MainSigil1: firstUppercase(sigil1),
      weapon1MainSigil2: firstUppercase(sigil2),
    };
  }

  // find the right image for the selected elite specialization
  const { eliteSpecializations } = PROFESSIONS.find(
    (prof) => prof.profession === profession.toUpperCase(),
  );
  // contains the names of the selected trait lines
  const selectedTraitLinesNames = traits
    .map((id) =>
      classModifiers[profession.toLowerCase()].find((section) => section?.id === Number(id)),
    )
    .filter((section) => section !== undefined)
    .map((section) => section.section);

  // currently selected specialization. In case multiple elite specializations are selected, only the first one is counted.
  // In case no specialization is selected, the variable defaults to the core profession
  const currentSpecialization =
    selectedTraitLinesNames.find((spec) => eliteSpecializations.includes(spec.toUpperCase())) ||
    profession;

  const imageRaw = data.images.edges
    .flatMap((image) => image.node)
    .find((image) => image.original.src.includes(currentSpecialization.toLowerCase()));
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

      <AppliedModifiers data={modifiers} />

      <CopyTemplateButton
        extras={{ utilityId, foodId, sigil1Id, sigil2Id }}
        data={character}
        infusions={infusions}
        weight={weight}
        runeId={rune.gw2id}
        runeName={runeName}
      />

      <TemplateHelper character={character} />
    </>
  );
};

export default React.memo(ResultDetails);
