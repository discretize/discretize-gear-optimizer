import { Table, TableBody, TableCell, TableRow, Typography, withStyles } from '@material-ui/core';
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
      <Typography variant="h6">Indicators</Typography>
      <Table padding="none">
        <TableBody>
          {Object.keys(data).map((indicator) => (
            <TableRow hover key={indicator}>
              <TableCell>
                <Typography className={classes.gw2Item}>{indicator} </Typography>
              </TableCell>
              <TableCell>{data[indicator]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default withStyles(styles)(AffixesStats);
