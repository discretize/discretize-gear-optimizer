import { Table, TableCell, TableRow, withStyles } from '@material-ui/core';
import { Attribute } from 'gw2-ui-bulk';
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
    <Table padding="none">
      {Object.keys(data).map((attribute) => (
        <TableRow hover>
          <TableCell>
            <Attribute name={attribute} className={classes.gw2Item} />
          </TableCell>
          <TableCell>{data[attribute]}</TableCell>
        </TableRow>
      ))}
    </Table>
  );
};

export default withStyles(styles)(AffixesStats);
