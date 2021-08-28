import { Box, Paper, Typography, useMediaQuery, useTheme, withStyles } from '@material-ui/core';
import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import Armor from './Armor';
import Attributes from './Attributes';
import BackAndTrinkets from './BackAndTrinkets';
import Weapons from './Weapons';

const styles = (theme) => ({
  container: { maxHeight: '600px' },
  bgImage: {},
  sectionDelimiter: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  section: {
    padding: theme.spacing(2),
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
  const theme = useTheme();
  const big = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box display="flex" flexWrap="wrap" justifyContent="space-between">
      <Box flex="0 0 250px">
        <Paper elevation={5} className={classes.section}>
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
        </Paper>

        <div className={classes.sectionDelimiter}>
          <Paper elevation={5} className={classes.section}>
            <Weapons {...weapons} />
          </Paper>
        </div>
      </Box>

      {big && (
        <Box flex="1 0 300px" alignSelf="center">
          <GatsbyImage
            layout="constrained"
            image={image}
            alt="Profession Image"
            className={classes.bgImage}
          />
        </Box>
      )}

      <Box flex="0 0 250px">
        <Paper elevation={5} className={classes.section}>
          <Typography variant="h6">Attributes</Typography>
          <Attributes profession={profession} data={character.attributes} />
        </Paper>

        <div className={classes.sectionDelimiter}>
          <Paper elevation={5} className={classes.section}>
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
          </Paper>
        </div>
      </Box>
    </Box>
  );
};

export default withStyles(styles)(Character);
