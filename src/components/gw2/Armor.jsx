import { List, ListItem, ListItemText, withStyles } from '@material-ui/core';
import { Item } from 'gw2-ui-bulk';
import React from 'react';
import { ARMOR_IDS } from '../../utils/gw2-data';

const styles = (theme) => ({
  listItem: {
    lineHeight: 0,
    justifyContent: 'center',
    paddingTop: theme.spacing.unit * 0.5,
    paddingBottom: theme.spacing.unit * 0.5,
    '& > *:first-child': {
      width: '45%',
      textAlign: 'right',
    },
    '& > *:last-child': {
      width: '55%',
      textAlign: 'left',
    },
  },
  listItemText: {
    flexGrow: 0,
    marginLeft: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 2,
    borderLeft: `1px solid ${theme.palette.divider}`,
    lineHeight: '0',
  },
  gw2Item: {
    fontSize: '60px',
    lineHeight: '0 !important',
  },
});

const Armor = ({
  classes,
  weight,
  helmRuneId,
  helmInfusionId,
  helmRuneCount,
  helmAffix,
  helmRune,
  shouldersRuneId,
  shouldersInfusionId,
  shouldersRuneCount,
  shouldersAffix,
  shouldersRune,
  coatRuneId,
  coatInfusionId,
  coatRuneCount,
  coatAffix,
  coatRune,
  glovesRuneId,
  glovesInfusionId,
  glovesRuneCount,
  glovesAffix,
  glovesRune,
  leggingsRuneId,
  leggingsInfusionId,
  leggingsRuneCount,
  leggingsAffix,
  leggingsRune,
  bootsRuneId,
  bootsInfusionId,
  bootsRuneCount,
  bootsAffix,
  bootsRune,
}) => {
  const ids = ARMOR_IDS[weight.toUpperCase()];
  return (
    <List disablePadding dense>
      <ListItem className={classes.listItem}>
        <Item
          id={ids[0]}
          stat={helmAffix}
          upgrades={
            helmInfusionId
              ? [helmInfusionId, [helmRuneId, helmRuneCount]]
              : [[helmRuneId, helmRuneCount]]
          }
          disableText
          className={classes.gw2Item}
        />
        <ListItemText primary={helmAffix} secondary={helmRune} className={classes.listItemText} />
      </ListItem>

      <ListItem disableGutters className={classes.listItem}>
        <Item
          id={ids[1]}
          stat={shouldersAffix}
          upgrades={
            shouldersInfusionId
              ? [shouldersInfusionId, [shouldersRuneId, shouldersRuneCount]]
              : [[shouldersRuneId, shouldersRuneCount]]
          }
          disableText
          className={classes.gw2Item}
        />
        <ListItemText
          primary={shouldersAffix}
          secondary={shouldersRune}
          className={classes.listItemText}
        />
      </ListItem>

      <ListItem disableGutters className={classes.listItem}>
        <Item
          id={ids[2]}
          stat={coatAffix}
          upgrades={
            coatInfusionId
              ? [coatInfusionId, [coatRuneId, coatRuneCount]]
              : [[coatRuneId, coatRuneCount]]
          }
          disableText
          className={classes.gw2Item}
        />
        <ListItemText primary={coatAffix} secondary={coatRune} className={classes.listItemText} />
      </ListItem>

      <ListItem disableGutters className={classes.listItem}>
        <Item
          id={ids[3]}
          stat={glovesAffix}
          upgrades={
            glovesInfusionId
              ? [glovesInfusionId, [glovesRuneId, glovesRuneCount]]
              : [[glovesRuneId, glovesRuneCount]]
          }
          disableText
          className={classes.gw2Item}
        />
        <ListItemText
          primary={glovesAffix}
          secondary={glovesRune}
          className={classes.listItemText}
        />
      </ListItem>

      <ListItem disableGutters className={classes.listItem}>
        <Item
          id={ids[4]}
          stat={leggingsAffix}
          upgrades={
            leggingsInfusionId
              ? [leggingsInfusionId, [leggingsRuneId, leggingsRuneCount]]
              : [[leggingsRuneId, leggingsRuneCount]]
          }
          disableText
          className={classes.gw2Item}
        />
        <ListItemText
          primary={leggingsAffix}
          secondary={leggingsRune}
          className={classes.listItemText}
        />
      </ListItem>

      <ListItem disableGutters className={classes.listItem}>
        <Item
          id={ids[5]}
          stat={bootsAffix}
          upgrades={
            bootsInfusionId
              ? [bootsInfusionId, [bootsRuneId, bootsRuneCount]]
              : [[bootsRuneId, bootsRuneCount]]
          }
          disableText
          className={classes.gw2Item}
          text={bootsAffix + ' Shoes'}
        />
        <ListItemText primary={bootsAffix} secondary={bootsRune} className={classes.listItemText} />
      </ListItem>
    </List>
  );
};

export default withStyles(styles)(Armor);
