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
import { parseAmount, scaleValue } from '../../../state/optimizer/optimizerCore';

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

const roundTwo = (num) => Math.round(num * 100) / 100;

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
              {appliedData.map(({ type, id, modifiers, amount, amountData }) => {
                const { value: amountInput } = parseAmount(amount);
                const multiplierNote = amountData
                  ? `${roundTwo(scaleValue(1, amountInput, amountData))}x`
                  : '';
                return (
                  <TableRow hover key={`${type} ${id}`}>
                    <TableCell>
                      <Typography className={classes.gw2Item}> {id} </Typography>
                    </TableCell>
                    <TableCell style={{ paddingRight: 8 }}>
                      <Typography variant="body2">{multiplierNote}</Typography>
                    </TableCell>
                    <TableCell>{JSON.stringify(modifiers)}</TableCell>
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
