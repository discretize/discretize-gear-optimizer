import { Table, TableCell, TableRow, TableBody, withStyles, Typography } from '@material-ui/core';
import { Condition, Attribute } from 'gw2-ui-bulk';
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

const AffixesStats = ({ classes, data }) => {
  return (
    <>
      <Typography variant="h6">Effective Distribution</Typography>
      <Table padding="none">
        <TableBody>
          {data.map((d) => (
            <TableRow hover key={d.name}>
              <TableCell>
                {d.name === 'Power' ? (
                  <Attribute name="Power" className={classes.gw2Item} />
                ) : (
                  <Condition name={d.name} className={classes.gw2Item} />
                )}
              </TableCell>
              <TableCell>{d.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default withStyles(styles)(AffixesStats);
