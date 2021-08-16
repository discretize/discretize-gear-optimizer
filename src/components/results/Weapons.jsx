import { List, ListItem, ListItemText, MenuItem, withStyles } from '@material-ui/core';
import { Item } from 'gw2-ui-bulk';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProfession, getExtra, getControl, getPriority } from '../../state/gearOptimizerSlice';
import { Classes } from '../../utils/gw2-data';
import { firstUppercase } from '../../utils/usefulFunctions';

const styles = (theme) => ({
  root: {
    width: '100%',
  },
  gw2Item: {
    fontSize: '60px',
    lineHeight: '1 !important',
  },
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
});

const Weapons = ({ classes, data, affix1, affix2, infusion1Id, infusion2Id }) => {
  const profession = useSelector(getProfession);
  const sigil1 = useSelector(getExtra('Sigil1'));
  const sigil2 = useSelector(getExtra('Sigil2'));
  const priority = useSelector(getPriority('weaponType'));
  const classData = Classes[profession.toLowerCase()].weapons;

  let wea1, wea2;

  if (priority === 'Dual wield') {
    wea1 = classData.mainHand.find((d) => d.type === 'one-handed').name;
    wea2 = classData.offHand[0].name;
  } else {
    wea1 = classData.mainHand.find((d) => d.type === 'two-handed').name;
  }

  let sigil1Id = data.find((d) => d.id === sigil1);
  sigil1Id = sigil1Id ? sigil1Id.gw2_id : undefined;
  let sigil2Id = data.find((d) => d.id === sigil2);
  sigil2Id = sigil2Id ? sigil2Id.gw2_id : undefined;

  return (
    <>
      <List disablePadding>
        {priority === 'Dual wield' ? (
          <>
            <ListItem disableGutters className={classes.listItem}>
              <Item
                type={wea1}
                stat={affix1}
                upgrades={[sigil1Id, infusion1Id].filter((d) => d !== undefined)}
                disableText
                className={classes.gw2Item}
              />
              <ListItemText
                primary={affix1}
                secondary={firstUppercase(sigil1) || '-'}
                className={classes.listItemText}
              />
            </ListItem>
            <ListItem disableGutters className={classes.listItem}>
              <Item
                type={wea2}
                stat={affix2}
                upgrades={[sigil2Id, infusion2Id].filter((d) => d !== undefined)}
                disableText
                className={classes.gw2Item}
              />
              <ListItemText
                primary={affix2}
                secondary={firstUppercase(sigil2) || '-'}
                className={classes.listItemText}
              />
            </ListItem>
          </>
        ) : (
          <ListItem disableGutters className={classes.listItem}>
            <Item
              type={wea1}
              stat={affix1}
              upgrades={[infusion1Id, infusion2Id, sigil1Id, sigil2Id].filter(
                (d) => d !== undefined,
              )}
              disableText
              className={classes.gw2Item}
            />
            <ListItemText
              primary={affix1}
              secondary={`${firstUppercase(sigil1) || '-'} / ${firstUppercase(sigil2) || '-'}`}
              className={classes.listItemText}
            />
          </ListItem>
        )}
      </List>
    </>
  );
};

export default withStyles(styles)(Weapons);
