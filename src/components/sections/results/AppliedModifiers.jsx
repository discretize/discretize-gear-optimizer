import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Trans } from 'gatsby-plugin-react-i18next';
// import { Boon, CommonEffect, Condition, Skill, Trait } from 'gw2-ui-bulk';
import React from 'react';
import { scaleValue } from '../../../state/optimizer/optimizerCore';
import { parseAmount } from '../../../utils/usefulFunctions';

const useStyles = makeStyles()((theme) => ({
  root: {
    width: '100%',
  },
  gw2Item: {
    fontSize: '20px',
    color: '#AAAAAA',
  },
}));

// Dynamic component creation for buffs from a string
// const components = {
//   Boon,
//   Trait,
//   Skill,
//   CommonEffect,
//   Condition,
// };

const roundTwo = (num) => Math.round(num * 100) / 100;

const AppliedModifiers = ({ data }) => {
  const { classes } = useStyles();

  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            <Trans>Applied Modifers</Trans>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Table padding="none">
            <TableBody>
              {data.map(({ type, id, modifiers, amount, amountData }) => {
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

export default AppliedModifiers;
