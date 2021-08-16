import { Table, TableCell, TableRow, withStyles } from '@material-ui/core';
import { Boon, Condition } from 'gw2-ui-bulk';
import React from 'react';
import { Condition as ConditionList } from '../../utils/gw2-data';

const styles = (theme) => ({
  root: {
    width: '100%',
  },
  gw2Item: {
    fontSize: '20px',
    color: '#AAAAAA',
  },
});

const SpecialDurations = ({ classes, data }) => {
  const cleanedData = Object.keys(data).filter(
    (d) => d.includes('Duration') && !d.includes('Boon') && !d.includes('Condition'),
  );

  return (
    <Table padding="none">
      {cleanedData.map((duration) => (
        <TableRow hover>
          {ConditionList[duration.split(' ')[0]] !== undefined ? (
            <TableCell>
              <Condition
                name={duration.split(' ')[0]}
                text={duration}
                className={classes.gw2Item}
              />
            </TableCell>
          ) : (
            <TableCell>
              <Boon name={duration.split(' ')[0]} text={duration} className={classes.gw2Item} />
            </TableCell>
          )}
          <TableCell>{data[duration]}%</TableCell>
        </TableRow>
      ))}
    </Table>
  );
};

export default withStyles(styles)(SpecialDurations);
