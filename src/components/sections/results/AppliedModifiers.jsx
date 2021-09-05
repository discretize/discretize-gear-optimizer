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
import { Boon, CommonEffect, Condition, Skill, Trait } from 'gw2-ui-bulk';
import React from 'react';

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
const components = {
  Boon: Boon,
  Trait: Trait,
  Skill: Skill,
  CommonEffect: CommonEffect,
  Condition: Condition,
};

const AffixesStats = ({ classes, data, buffData }) => {
  const allBuffs = buffData.flatMap((d) => d.items);

  const appliedData = data.map((d) => {
    const allData = allBuffs.find((a) => a.id === d.id);
    if (allData) return { ...allData };
    return d;
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
                  <TableRow hover key={modifier.id + Math.random()}>
                    <TableCell>
                      <Typography className={classes.gw2Item}> {modifier.id} </Typography>
                    </TableCell>
                    <TableCell>{modifier.modifiers}</TableCell>
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

export default withStyles(styles)(AffixesStats);
