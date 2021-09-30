import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  withStyles,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import { Boon, CommonEffect, Condition, Skill, Trait } from 'gw2-ui-bulk';
import React from 'react';

import { buffModifiersById } from '../../../assets/modifierdata';

const styles = (theme) => ({
  root: {
    width: '100%',
  },
  gw2Item: {
    fontSize: '20px',
    color: '#AAAAAA',
  },
});

// Dynamic component creation for buffs from a string
// const components = {
//   Boon,
//   Trait,
//   Skill,
//   CommonEffect,
//   Condition,
// };

const AppliedModifiers = ({ classes, data }) => {
  const appliedData = data.map((item) => {
    const allData = buffModifiersById[item.id];
    if (allData) return { id: item.id, ...allData };
    return item;
  });
  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Applied Modifers</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Table padding="none">
            <TableBody>
              {appliedData.map((modifier) => {
                return (
                  <TableRow hover key={modifier.id}>
                    <TableCell>
                      <Typography className={classes.gw2Item}> {modifier.id} </Typography>
                    </TableCell>
                    <TableCell>{JSON.stringify(modifier.modifiers)}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default withStyles(styles)(AppliedModifiers);
