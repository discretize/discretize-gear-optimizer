import { List, ListItem, ListItemText, withStyles } from '@material-ui/core';
import { Item } from 'gw2-ui-bulk';
import React from 'react';
import { resolveArmor } from '../../utils/map-gw2-ids';

const styles = (theme) => ({
  listItem: {
    lineHeight: 0,
    justifyContent: 'center',
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
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
    marginLeft: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    borderLeft: `1px solid ${theme.palette.divider}`,
    lineHeight: '0',
  },
  gw2Item: {
    fontSize: '60px',
    lineHeight: '1 !important',
  },
});

const Armor = ({ classes, weight, ...rest }) => {
  const {
    helmId,
    helmRuneId,
    helmInfusionId,
    helmRuneCount,
    helmAffix,
    helmRune,
    shouldersId,
    shouldersRuneId,
    shouldersInfusionId,
    shouldersRuneCount,
    shouldersAffix,
    shouldersRune,
    coatId,
    coatRuneId,
    coatInfusionId,
    coatRuneCount,
    coatAffix,
    coatRune,
    glovesId,
    glovesRuneId,
    glovesInfusionId,
    glovesRuneCount,
    glovesAffix,
    glovesRune,
    leggingsId,
    leggingsRuneId,
    leggingsInfusionId,
    leggingsRuneCount,
    leggingsAffix,
    leggingsRune,
    bootsId,
    bootsRuneId,
    bootsInfusionId,
    bootsRuneCount,
    bootsAffix,
    bootsRune,
  } = resolveArmor({ weight, ...rest });

  return (
    <List disablePadding>
      <ListItem disableGutters className={classes.listItem}>
        <Item
          id={helmId}
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
          id={shouldersId}
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
          id={coatId}
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
          id={glovesId}
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
          id={leggingsId}
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
          id={bootsId}
          upgrades={
            bootsInfusionId
              ? [bootsInfusionId, [bootsRuneId, bootsRuneCount]]
              : [[bootsRuneId, bootsRuneCount]]
          }
          disableText
          className={classes.gw2Item}
        />
        <ListItemText primary={bootsAffix} secondary={bootsRune} className={classes.listItemText} />
      </ListItem>
    </List>
  );
};

export default withStyles(styles)(Armor);
