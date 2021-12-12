import { Table, TableBody, TableCell, TableRow, Typography, withStyles } from '@material-ui/core';
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

const AffixesStats = ({ classes, data, title }) => {
  return (
    <>
      <Typography variant="h6">{title}</Typography>
      <Table padding="none">
        <TableBody>
          {Object.keys(data).map((attribute) => (
            <TableRow hover key={attribute}>
              <TableCell>
                <Attribute name={attribute} className={classes.gw2Item} />
              </TableCell>
              <TableCell>{data[attribute]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default withStyles(styles)(AffixesStats);
