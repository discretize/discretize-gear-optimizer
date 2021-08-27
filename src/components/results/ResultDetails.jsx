import { Grid, Typography, withStyles } from '@material-ui/core';
import { getImage } from 'gatsby-plugin-image';
import React from 'react';
import { useSelector } from 'react-redux';
import {
  getControl,
  getExtra,
  getExtras,
  getModifiers,
  getPriority,
  getProfession,
  getSelectedCharacter,
} from '../../state/gearOptimizerSlice';
import { updateAttributes } from '../../state/optimizer/optimizerCore';
import { Classes, Defense, INFUSIONS } from '../../utils/gw2-data';
import { firstUppercase } from '../../utils/usefulFunctions';
import Character from '../gw2/Character';
import AffixesStats from './AffixesStats';
import AppliedModifiers from './AppliedModifiers';
import Indicators from './Indicators';
import OutputDistribution from './OutputDistribution';
import SpecialDurations from './SpecialDurations';

const styles = (theme) => ({});

const ResultDetails = ({ classes, data, buffData }) => {
  const extras = useSelector(getExtras);
  const profession = useSelector(getProfession);
  const sigil1 = useSelector(getExtra('Sigil1'));
  const sigil2 = useSelector(getExtra('Sigil2'));
  const priority = useSelector(getPriority('weaponType'));
  const modifiers = useSelector(getModifiers);

  const charRaw = useSelector(getSelectedCharacter);
  if (!charRaw) {
    return null;
  }

  // Fetch additional result values from the optimizer core (on demand)
  const character = { ...charRaw };
  updateAttributes(character);
  // eslint-disable-next-line no-console
  console.log('result character', character);

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

  const sigilData = data.sigils.list.flatMap((l) => l.items);
  let sigil1Id = sigilData.find((d) => d.id === sigil1);
  sigil1Id = sigil1Id ? sigil1Id.gw2_id : undefined;
  let sigil2Id = sigilData.find((d) => d.id === sigil2);
  sigil2Id = sigil2Id ? sigil2Id.gw2_id : undefined;

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

  const rune = extras.Runes
    ? data.runes.list.flatMap((r) => r.items).find((r) => r.id === extras.Runes)
    : '';
  const runeName = extras.Runes ? rune.text.split(' ')[rune.text.split(' ').length - 1] : '';

  const image = getImage(data[`${profession.toLowerCase()}Picture`]);

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
        character={character}
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
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <OutputDistribution title="Damage Breakdown" data={damageBreakdown} />
          <OutputDistribution title="Effective Distribution" data={effectiveDistribution} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <AffixesStats
            data={character.results.effectivePositiveValues}
            title="Damage loss from -5 of attribute"
          />
          <AffixesStats
            data={character.results.effectiveNegativeValues}
            title="Damage loss from -5 of attribute"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}></Grid>
      </Grid>

      <AppliedModifiers data={modifiers} buffData={buffData} />
    </div>
  );
};

export default withStyles(styles)(ResultDetails);
