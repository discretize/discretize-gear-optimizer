import { Attribute, Condition } from '@discretize/gw2-ui-new';
import { Table, TableBody, TableCell, TableRow, Typography } from '@mui/material';
import React from 'react';
import { makeStyles } from 'tss-react/mui';
import useAlternativeDamage from '../../baseComponents/useAlternativeDamage';

const useStyles = makeStyles()((theme) => ({
  root: {
    width: '100%',
  },
  gw2Item: {
    fontSize: '20px',
    color: '#AAAAAA',
  },
}));

const OutputDistribution = ({ title, data }) => {
  const { classes } = useStyles();
  const [alternativeDamageLabel] = useAlternativeDamage();

  return (
    <>
      <Typography variant="h6">{title}</Typography>
      <Table padding="none">
        <TableBody>
          {data.map((damageType) => (
            <TableRow hover key={damageType.name}>
              <TableCell>
                {damageType.name.startsWith('Power') ? (
                  <Attribute
                    name="Power"
                    className={classes.gw2Item}
                    text={damageType.name === 'Power2' ? alternativeDamageLabel : undefined}
                  />
                ) : (
                  <Condition name={damageType.name} className={classes.gw2Item} />
                )}
              </TableCell>
              <TableCell align="right">
                {damageType.value.toFixed?.(2) ?? damageType.value}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default OutputDistribution;
