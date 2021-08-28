import { Table, TableBody, TableCell, TableRow, Typography, withStyles } from '@material-ui/core';
import { Item } from 'gw2-ui-bulk';
import React from 'react';
import { INFUSIONS } from '../../../utils/gw2-data';

const styles = (theme) => ({
  gw2Item: {
    fontSize: '20px',
    color: '#AAAAAA',
  },
});

const OutputInfusions = ({ classes, data }) => {
  const infusions = Object.keys(data).map((d) => ({
    ...INFUSIONS.find((infu) => infu.attribute === d),
    count: data[d],
  }));
  return (
    <>
      <Typography variant="h6">Infusions</Typography>
      <Table padding="none">
        <TableBody>
          {infusions.map((infu) => (
            <TableRow hover key={infu.attribute}>
              <TableCell>
                <Item id={infu.id} className={classes.gw2Item} />
              </TableCell>
              <TableCell>{infu.count}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default withStyles(styles)(OutputInfusions);
