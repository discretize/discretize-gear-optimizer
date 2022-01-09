import { Table, TableBody, TableCell, TableRow, Typography } from '@mui/material';
import { Trans } from 'gatsby-plugin-react-i18next';
import { Boon, Condition } from 'gw2-ui-bulk';
import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { damagingConditions } from '../../../utils/gw2-data';

const useStyles = makeStyles()((theme) => ({
  root: {
    width: '100%',
  },
  gw2Item: {
    fontSize: '20px',
    color: '#AAAAAA',
  },
}));

const SpecialDurations = ({ data }) => {
  const { classes } = useStyles();

  const cleanedData = Object.keys(data).filter(
    (damageType) =>
      damageType.includes('Duration') &&
      !damageType.includes('Boon') &&
      !damageType.includes('Condition'),
  );

  if (cleanedData.length === 0) return null;

  return (
    <>
      <Typography variant="h6">
        <Trans>Special Durations</Trans>
      </Typography>

      <Table padding="none">
        <TableBody>
          {cleanedData.map((duration) => (
            <TableRow hover key={duration}>
              {damagingConditions.includes(duration.split(' ')[0]) ? (
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

export default SpecialDurations;
