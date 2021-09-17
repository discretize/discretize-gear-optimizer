import { Grid, Typography, withStyles } from '@material-ui/core';
import { getImage } from 'gatsby-plugin-image';
import React from 'react';
import { useSelector, useStore } from 'react-redux';
import {
  getModifiers,
  getProfession,
  getSelectedCharacter,
} from '../../../state/gearOptimizerSlice';
import { updateAttributes } from '../../../state/optimizer/optimizerCore';
import { getExtra, getExtras } from '../../../state/slices/extras';
import { getPriority } from '../../../state/slices/priorities';
import { getTraitLines } from '../../../state/slices/traits';
import { Classes, Defense, INFUSIONS, PROFESSIONS } from '../../../utils/gw2-data';
import { firstUppercase } from '../../../utils/usefulFunctions';
import Character from '../../gw2/Character';
import { CopyTemplateButton } from '../controls/CopyTemplateButton';
import AffixesStats from './AffixesStats';
import AppliedModifiers from './AppliedModifiers';
import Indicators from './Indicators';
import OutputDistribution from './OutputDistribution';
import OutputInfusions from './OutputInfusions';
import SpecialDurations from './SpecialDurations';

const ResultDetails = ({ data }) => {
  const store = useStore();
  const profession = useSelector(getProfession);

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

  const infusions =
    'infusions' in character
      ? Object.keys(character.infusions)
          .map((key) =>
            // eslint-disable-next-line no-undef
            _.times(
              character.infusions[key],
              () => INFUSIONS.find((infu) => infu.attribute === key).id,
            ),
          )
          .flatMap((e) => e)
      : [];

  const foodId = data.nourishment.list.flatMap((l) => l.items).find((f) => f.id === food)?.gw2_id;
  const utilityId = data.enhancement.list
    .flatMap((l) => l.items)
    .find((f) => f.id === utility)?.gw2_id;
  const sigil1Id = data.sigils.list.flatMap((l) => l.items).find((f) => f.id === sigil1)?.gw2_id;
  const sigil2Id = data.sigils.list.flatMap((l) => l.items).find((f) => f.id === sigil2)?.gw2_id;
  const rune = runeStringId
    ? data.runes.list.flatMap((r) => r.items).find((r) => r.id === runeStringId)
    : '';
  const runeName = runeStringId ? rune.text.split(' ')[rune.text.split(' ').length - 1] : '';

  // Calculate the props for the weapons component
  let wea1, wea2, weapData;
  if (priority === 'Dual wield') {
    wea1 = classData.mainHand.find((d) => d.type === 'one-handed');
    [wea2] = classData.offHand;
    weapData = {
      weapon1MainId: wea1.gw2_id,
      weapon1MainAffix: character.gear[12],
      weapon1MainInfusion1Id: infusions ? infusions[16] : null,
      weapon1MainSigil1Id: sigil1Id,
      weapon1MainSigil1: firstUppercase(sigil1),
      weapon1OffId: wea2.gw2_id,
      weapon1OffAffix: character.gear[13],
      weapon1OffInfusionId: infusions ? infusions[17] : null,
      weapon1OffSigilId: sigil2Id,
      weapon1OffSigil: firstUppercase(sigil2),
    };
  } else {
    wea1 = classData.mainHand.find((d) => d.type === 'two-handed');
    weapData = {
      weapon1MainId: wea1.gw2_id,
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
    .map((t) => Number(t))
    .map((trait) =>
      data[profession.toLowerCase()].edges[0].node.list
        .filter((d) => d.id !== null)
        .find((t) => t.id === trait),
    )
    .filter((s) => s !== undefined)
    .map((s) => s.section);

  // currently selected specialization. In case multiple elite specializations are selected, only the first one is counted.
  // In case no specialization is selected, the variable defaults to the core profession
  const currentSpecialization =
    selectedTraitLinesNames.find((s) => eliteSpecializations.includes(s.toUpperCase())) ||
    profession;

  const imageRaw = data.images.edges
    .flatMap((image) => image.node)
    .find((image) => image.original.src.includes(currentSpecialization.toLowerCase()));
  const image = getImage(imageRaw);

  // Replace the names to match gw2-ui names
  const damageBreakdown = Object.keys(character.results.effectiveDamageDistribution).map((d) => ({
    name: d === 'Poison Damage' ? 'Poisoned' : d.replace('Damage', '').trim(),
    value: character.results.damageBreakdown[d],
  }));

  const effectiveDistribution = Object.keys(character.results.effectiveDamageDistribution).map(
    (d) => ({
      name: d === 'Poison Damage' ? 'Poisoned' : d.replace('Damage', '').trim(),
      value: character.results.effectiveDamageDistribution[d],
    }),
  );

  return (
    <div>
      <Typography variant="h5">Character</Typography>
      <Character
        weight={weight}
        gear={character.gear}
        attributes={character.attributes}
        profession={profession}
        infusions={infusions}
        runeId={rune.gw2_id}
        runeName={runeName}
        image={image}
        weapons={weapData}
      />

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <SpecialDurations data={character.attributes} />
          <Indicators data={character.results.indicators} />
          <AffixesStats data={character.gearStats} title="Stats from affixes" />
          {character.infusions && <OutputInfusions data={character.infusions} />}
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <OutputDistribution title="Damage Breakdown" data={damageBreakdown} />
          <OutputDistribution title="Effective Distribution" data={effectiveDistribution} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <AffixesStats
            data={character.results.effectivePositiveValues}
            title="Damage increase from +5 of attribute"
          />
          <AffixesStats
            data={character.results.effectiveNegativeValues}
            title="Damage loss from -5 of attribute"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}></Grid>
      </Grid>

      <AppliedModifiers data={modifiers} buffData={data.buffs.list} />

      <CopyTemplateButton
        extras={{ utilityId, foodId, sigil1Id, sigil2Id }}
        data={character}
        infusions={infusions}
        weight={weight}
        runeId={rune.gw2_id}
        runeName={runeName}
      />
    </div>
  );
};

export default React.memo(ResultDetails);
