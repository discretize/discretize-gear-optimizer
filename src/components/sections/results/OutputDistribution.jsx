import { Table, TableBody, TableCell, TableRow, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { Attribute, Condition } from 'gw2-ui-bulk';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  gw2Item: {
    fontSize: '20px',
    color: '#AAAAAA',
  },
}));

const OutputDistribution = ({ title, data }) => {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h6">{title}</Typography>
      <Table padding="none">
        <TableBody>
          {data.map((damageType) => (
            <TableRow hover key={damageType.name}>
              <TableCell>
                {damageType.name === 'Power' ? (
                  <Attribute name="Power" className={classes.gw2Item} />
                ) : (
                  <Condition name={damageType.name} className={classes.gw2Item} />
                )}
              </TableCell>
              <TableCell>{damageType.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default OutputDistribution;
