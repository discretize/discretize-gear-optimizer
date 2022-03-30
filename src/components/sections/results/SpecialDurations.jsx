import { Boon, Condition } from '@discretize/gw2-ui-new';
import { Table, TableBody, TableCell, TableRow, Typography } from '@mui/material';
import { Trans } from 'react-i18next';
import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { boons, damagingConditions } from '../../../assets/modifierdata/metadata';

const conditionDurations = damagingConditions.map((name) => `${name} Duration`);
const boonDurations = boons.map((name) => `${name} Duration`);

const roundTwo = (num) => Math.round(num * 100) / 100;

const useStyles = makeStyles()((theme) => ({
  root: {
    width: '100%',
  },
  gw2Item: {
    fontSize: '20px',
    color: '#AAAAAA',
  },
}));

const SpecialDurations = ({ data: attributes }) => {
  const { classes } = useStyles();

  const conditionEntries = Object.entries(attributes).filter(([attribute]) =>
    conditionDurations.includes(attribute),
  );

  const boonEntries = Object.entries(attributes).filter(([attribute]) =>
    boonDurations.includes(attribute),
  );

  if (boonEntries.length === 0 && conditionEntries.length === 0) return null;

  return (
    <>
      <Typography variant="h6">
        <Trans>Special Durations</Trans>
      </Typography>

      <Table padding="none">
        <TableBody>
          {conditionEntries.map(([attribute, value]) => (
            <TableRow hover key={attribute}>
              <TableCell>
                <Condition
                  name={attribute.split(' ')[0].replace('Poison', 'Poisoned')}
                  text={attribute}
                  className={classes.gw2Item}
                />
              </TableCell>
              <TableCell>
                {roundTwo((value + (attributes['Condition Duration'] || 0)) * 100)}%
              </TableCell>
            </TableRow>
          ))}
          {boonEntries.map(([attribute, value]) => (
            <TableRow hover key={attribute}>
              <TableCell>
                <Boon name={attribute.split(' ')[0]} text={attribute} className={classes.gw2Item} />
              </TableCell>
              <TableCell>{roundTwo((value + (attributes['Boon Duration'] || 0)) * 100)}%</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default SpecialDurations;
