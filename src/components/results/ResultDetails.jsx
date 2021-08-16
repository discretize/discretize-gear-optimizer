import React from 'react';
import { useSelector } from 'react-redux';
import { withStyles, Grid, Typography } from '@material-ui/core';
import { getControl, getExtras, getProfession } from '../../state/gearOptimizerSlice';
import Armor from '../gw2/Armor';
import BackAndTrinkets from '../gw2/BackAndTrinkets';
import { Classes, Defense, INFUSIONS } from '../../utils/gw2-data';
import Attributes from './Attributes';
import SpecialDurations from './SpecialDurations';
import AffixesStats from './AffixesStats';

const styles = (theme) => ({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

const ResultDetails = ({ classes, data }) => {
  const selected = useSelector(getControl('selected'));
  const character = useSelector(getControl('list'))[selected];
  const extras = useSelector(getExtras);
  const profession = useSelector(getProfession);
  if (selected === '' || character === undefined) {
    return null;
  }

  const { defense } = Classes[profession.toLowerCase()];
  const weight =
    defense === Defense.HEAVY ? 'Heavy' : defense === Defense.MEDIUM ? 'Medium' : 'Light';

  console.log(character);
  console.log(data);

  const rune = extras.Runes
    ? data.runes.list.flatMap((r) => r.items).find((r) => r.id === extras.Runes)
    : '';
  const runeName = extras.Runes ? rune.text.split(' ')[rune.text.split(' ').length - 1] : '';

  const infusions =
    'infusions' in character
      ? Object.keys(character.infusions)
          .map((key) =>
            _.times(
              character.infusions[key],
              () => INFUSIONS.find((infu) => infu.attribute === key).id,
            ),
          )
          .flatMap((e) => e)
      : [];

  return (
    <div className={classes.root}>
      <Typography variant="h5">Character</Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={3}>
          <Armor
            weight={weight}
            helmAffix={character.gear[0]}
            helmRuneId={rune.gw2_id}
            helmRune={runeName}
            helmRuneCount={6}
            helmInfusionId={infusions[0]}
            shouldersAffix={character.gear[1]}
            shouldersRuneId={rune.gw2_id}
            shouldersRune={runeName}
            shouldersRuneCount={6}
            shouldersInfusionId={infusions[1]}
            coatAffix={character.gear[2]}
            coatRuneId={rune.gw2_id}
            coatRune={runeName}
            coatRuneCount={6}
            coatInfusionId={infusions[2]}
            glovesAffix={character.gear[3]}
            glovesRuneId={rune.gw2_id}
            glovesRune={runeName}
            glovesRuneCount={6}
            glovesInfusionId={infusions[3]}
            leggingsAffix={character.gear[4]}
            leggingsRuneId={rune.gw2_id}
            leggingsRune={runeName}
            leggingsRuneCount={6}
            leggingsInfusionId={infusions[4]}
            bootsAffix={character.gear[5]}
            bootsRuneId={rune.gw2_id}
            bootsRune={runeName}
            bootsRuneCount={6}
            bootsInfusionId={infusions[5]}
          />
          // TODO weapons
        </Grid>
        <Grid item xs={12} sm={3} />

        <Grid item xs={12} sm={3}>
          <Typography variant="h6">Attributes</Typography>
          <Attributes data={character.attributes} />
          <BackAndTrinkets
            backItemAffix={character.gear[11]}
            backItemInfusion1Id={infusions[6]}
            backItemInfusion2Id={infusions[7]}
            amuletAffix={character.gear[6]}
            ring1Affix={character.gear[7]}
            ring1Infusion1Id={infusions[8]}
            ring1Infusion2Id={infusions[9]}
            ring1Infusion3Id={infusions[10]}
            ring2Affix={character.gear[8]}
            ring2Infusion1Id={infusions[11]}
            ring2Infusion2Id={infusions[12]}
            ring2Infusion3Id={infusions[13]}
            accessory1Affix={character.gear[9]}
            accessory1InfusionId={infusions[14]}
            accessory2Affix={character.gear[10]}
            accessory2InfusionId={infusions[15]}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Typography variant="h6">Special Durations</Typography>
          <SpecialDurations data={character.attributes} />

          <Typography variant="h6">Stats from affixes</Typography>
          <AffixesStats data={character.gearStats} />
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(ResultDetails);
