import { Grid, Typography, withStyles } from '@material-ui/core';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import Armor from './Armor';
import Attributes from './Attributes';
import BackAndTrinkets from './BackAndTrinkets';
import Weapons from './Weapons';

const styles = (theme) => ({
  container: { maxHeight: '600px' },
  bgImage: {
    height: '100%',
  },
  weapons: {
    marginTop: theme.spacing(8),
  },
});
const Character = ({
  classes,
  profession,
  weight,
  character,
  runeId,
  runeName,
  image,
  infusions,
  weapons,
}) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={3}>
        <Armor
          weight={weight}
          helmAffix={character.gear[0]}
          helmRuneId={runeId}
          helmRune={runeName}
          helmRuneCount={6}
          helmInfusionId={infusions[0]}
          shouldersAffix={character.gear[1]}
          shouldersRuneId={runeId}
          shouldersRune={runeName}
          shouldersRuneCount={6}
          shouldersInfusionId={infusions[1]}
          coatAffix={character.gear[2]}
          coatRuneId={runeId}
          coatRune={runeName}
          coatRuneCount={6}
          coatInfusionId={infusions[2]}
          glovesAffix={character.gear[3]}
          glovesRuneId={runeId}
          glovesRune={runeName}
          glovesRuneCount={6}
          glovesInfusionId={infusions[3]}
          leggingsAffix={character.gear[4]}
          leggingsRuneId={runeId}
          leggingsRune={runeName}
          leggingsRuneCount={6}
          leggingsInfusionId={infusions[4]}
          bootsAffix={character.gear[5]}
          bootsRuneId={runeId}
          bootsRune={runeName}
          bootsRuneCount={6}
          bootsInfusionId={infusions[5]}
        />

        <div className={classes.weapons}>
          <Weapons {...weapons} />
        </div>
      </Grid>
      <Grid item xs={12} sm={6} md={6} className={classes.container}>
        <GatsbyImage
          layout="constrained"
          image={image}
          alt="Profession Image"
          className={classes.bgImage}
        />
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Typography variant="h6">Attributes</Typography>
        <Attributes profession={profession} data={character.attributes} />
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
    </Grid>
  );
};

export default withStyles(styles)(Character);
