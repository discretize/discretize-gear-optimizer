import React from 'react';
import { useSelector } from 'react-redux';
import { withStyles } from '@material-ui/core';
import { getControl, getExtras, getProfession } from '../../state/gearOptimizerSlice';
import Armor from '../gw2/Armor';
import { Classes, Defense } from '../../utils/gw2-data';

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
  if (selected === '') {
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

  return (
    <div className={classes.root}>
      <Armor
        weight={weight}
        helmAffix={character.gear[0]}
        helmRuneId={rune.gw2_id}
        helmRune={runeName}
        helmRuneCount={6}
        shouldersAffix={character.gear[1]}
        shouldersRuneId={rune.gw2_id}
        shouldersRune={runeName}
        shouldersRuneCount={6}
        coatAffix={character.gear[2]}
        coatRuneId={rune.gw2_id}
        coatRune={runeName}
        coatRuneCount={6}
        glovesAffix={character.gear[3]}
        glovesRuneId={rune.gw2_id}
        glovesRune={runeName}
        glovesRuneCount={6}
        leggingsAffix={character.gear[4]}
        leggingsRuneId={rune.gw2_id}
        leggingsRune={runeName}
        leggingsRuneCount={6}
        bootsAffix={character.gear[5]}
        bootsRuneId={rune.gw2_id}
        bootsRune={runeName}
        bootsRuneCount={6}
      />
    </div>
  );
};

export default withStyles(styles)(ResultDetails);
