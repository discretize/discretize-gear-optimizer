import { Table, TableCell, TableRow, TableBody, withStyles, Typography } from '@material-ui/core';
import { Boon, Condition } from 'gw2-ui-bulk';
import React from 'react';
import { Condition as ConditionList } from '../../../utils/gw2-data';

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
    (damageType) =>
      damageType.includes('Duration') &&
      !damageType.includes('Boon') &&
      !damageType.includes('Condition'),
  );

  if (cleanedData.length === 0) return null;

  return (
    <>
      <Typography variant="h6">Special Durations</Typography>

      <Table padding="none">
        <TableBody>
          {cleanedData.map((duration) => (
            <TableRow hover key={duration}>
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
              <TableCell>{data[duration] * 100}%</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default withStyles(styles)(SpecialDurations);
