import { Icon, List, ListItem, ListItemText, withStyles } from '@material-ui/core';
import { Item } from 'gw2-ui-bulk';
import React from 'react';
import TextDivider from '../baseComponents/TextDivider';

const styles = (theme) => ({
  listItem: {
    lineHeight: 0,
    justifyContent: 'center',
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    '& > *:first-child': {
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
    lineHeight: 0,
    overflowWrap: 'break-word',
  },
  divider: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  gw2Item: {
    fontSize: '60px',
    lineHeight: '1 !important',
  },
});

/* eslint-disable no-unused-vars */
const Weapons = ({
  classes,
  weapon1MainId,
  weapon1MainSigil1Id,
  weapon1MainSigil2Id,
  weapon1MainType,
  weapon1MainAffix,
  weapon1MainSigil1,
  weapon1MainSigil2,
  weapon1MainInfusion1Id,
  weapon1MainInfusion2Id,
  weapon1OffId,
  weapon1OffSigilId,
  weapon1OffType,
  weapon1OffAffix,
  weapon1OffSigil,
  weapon1OffInfusionId,
  weapon2MainId,
  weapon2MainSigil1Id,
  weapon2MainSigil2Id,
  weapon2MainType,
  weapon2MainAffix,
  weapon2MainSigil1,
  weapon2MainSigil2,
  weapon2MainInfusion1Id,
  weapon2MainInfusion2Id,
  weapon2OffId,
  weapon2OffSigilId,
  weapon2OffType,
  weapon2OffAffix,
  weapon2OffSigil,
  weapon2OffInfusionId,
}) => (
  /* eslint-enable no-unused-vars */
  <>
    <List disablePadding>
      <ListItem disableGutters className={classes.listItem}>
        {weapon1MainId ? (
          <>
            <Item
              id={weapon1MainId}
              stat={weapon1MainAffix}
              className={classes.gw2Item}
              upgrades={[
                weapon1MainSigil1Id,
                weapon1MainSigil2Id,
                weapon1MainInfusion1Id,
                weapon1MainInfusion2Id,
              ].filter((id) => id !== undefined)}
              disableText
            />
            <ListItemText
              primary={`${weapon1MainAffix}`}
              secondary={weapon1MainSigil1 + (weapon1MainSigil2 ? `, ${weapon1MainSigil2}` : '')}
              className={classes.listItemText}
            />
          </>
        ) : (
          <>
            <Icon name="NoSelection" />
            <ListItemText className={classes.listItemText} primary="Empty" />
          </>
        )}
      </ListItem>

      {weapon1OffId && (
        <ListItem disableGutters className={classes.listItem}>
          <Item
            id={weapon1OffId}
            stat={weapon1OffAffix}
            className={classes.gw2Item}
            upgrades={[weapon1OffSigilId, weapon1OffInfusionId].filter((id) => id !== undefined)}
            disableText
          />
          <ListItemText
            primary={`${weapon1OffAffix}`}
            secondary={weapon1OffSigil}
            className={classes.listItemText}
          />
        </ListItem>
      )}
      {!weapon1OffId && !weapon1MainSigil2Id && (
        <ListItem disableGutters className={classes.listItem}>
          <Icon name="NoSelection" />
          <ListItemText className={classes.listItemText} primary="Empty" />
        </ListItem>
      )}
    </List>

    {(weapon2MainId || weapon2OffId) && (
      <>
        <TextDivider className={classes.divider}>
          <Icon name="WeaponSwap" style={{ fontSize: 32 }} />
        </TextDivider>

        <List dense disablePadding>
          {weapon2MainId ? (
            <ListItem disableGutters className={classes.listItem}>
              <Item
                id={weapon2MainId}
                stat={weapon2MainAffix}
                className={classes.gw2Item}
                upgrades={[
                  weapon2MainSigil1Id,
                  weapon2MainSigil2Id,
                  weapon2MainInfusion1Id,
                  weapon2MainInfusion2Id,
                ].filter((id) => id !== undefined)}
                disableText
              />
              <ListItemText
                primary={`${weapon2MainAffix}`}
                secondary={weapon2MainSigil1 + (weapon2MainSigil2 ? `, ${weapon2MainSigil2}` : '')}
                className={classes.listItemText}
              />
            </ListItem>
          ) : (
            <ListItem disableGutters className={classes.listItem}>
              <Icon name="NoSelection" />
              <ListItemText className={classes.listItemText} primary="Empty" />
            </ListItem>
          )}

          {weapon2OffId && (
            <ListItem disableGutters className={classes.listItem}>
              <Item
                id={weapon2OffId}
                stat={weapon2OffAffix}
                className={classes.gw2Item}
                upgrades={[weapon2OffSigilId, weapon2OffInfusionId].filter(
                  (id) => id !== undefined,
                )}
                disableText
              />
              <ListItemText
                primary={`${weapon2OffAffix}`}
                secondary={weapon2OffSigil}
                className={classes.listItemText}
              />
            </ListItem>
          )}
          {!weapon2OffId && !weapon2MainSigil2Id && (
            <ListItem disableGutters className={classes.listItem}>
              <Icon name="NoSelection" />
              <ListItemText className={classes.listItemText} primary="Empty" />
            </ListItem>
          )}
        </List>
      </>
    )}
  </>
);

export default withStyles(styles)(Weapons);
