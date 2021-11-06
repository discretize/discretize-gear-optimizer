import { Box, Paper, useMediaQuery, useTheme, withStyles } from '@material-ui/core';
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
  gear,
  attributes,
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
            helmAffix={gear[0]}
            helmRuneId={runeId}
            helmRune={runeName}
            helmRuneCount={6}
            helmInfusionId={infusions[0]}
            shouldersAffix={gear[1]}
            shouldersRuneId={runeId}
            shouldersRune={runeName}
            shouldersRuneCount={6}
            shouldersInfusionId={infusions[1]}
            coatAffix={gear[2]}
            coatRuneId={runeId}
            coatRune={runeName}
            coatRuneCount={6}
            coatInfusionId={infusions[2]}
            glovesAffix={gear[3]}
            glovesRuneId={runeId}
            glovesRune={runeName}
            glovesRuneCount={6}
            glovesInfusionId={infusions[3]}
            leggingsAffix={gear[4]}
            leggingsRuneId={runeId}
            leggingsRune={runeName}
            leggingsRuneCount={6}
            leggingsInfusionId={infusions[4]}
            bootsAffix={gear[5]}
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
          <Attributes profession={profession} data={attributes} />
        </Paper>

        <div className={classes.sectionDelimiter}>
          <Paper elevation={5} className={classes.section}>
            <BackAndTrinkets
              backItemAffix={gear[11]}
              backItemInfusion1Id={infusions[6]}
              backItemInfusion2Id={infusions[7]}
              amuletAffix={gear[6]}
              ring1Affix={gear[7]}
              ring1Infusion1Id={infusions[8]}
              ring1Infusion2Id={infusions[9]}
              ring1Infusion3Id={infusions[10]}
              ring2Affix={gear[8]}
              ring2Infusion1Id={infusions[11]}
              ring2Infusion2Id={infusions[12]}
              ring2Infusion3Id={infusions[13]}
              accessory1Affix={gear[9]}
              accessory1InfusionId={infusions[14]}
              accessory2Affix={gear[10]}
              accessory2InfusionId={infusions[15]}
            />
          </Paper>
        </div>
      </Box>
    </Box>
  );
};

export default withStyles(styles)(Character);
