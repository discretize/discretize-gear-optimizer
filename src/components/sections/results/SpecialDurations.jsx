import { Boon, Condition } from '@discretize/gw2-ui-new';
import { Table, TableBody, TableCell, TableRow, Typography } from '@mui/material';
import { Trans } from 'react-i18next';
import { makeStyles } from 'tss-react/mui';
import { boons, damagingConditions } from '../../../assets/modifierdata/metadata';

// const boonDurations = boons.map((name) => `${name} Duration`);

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

  // show if relevant and non zero
  const relevantConditions = damagingConditions.filter((name) => attributes[`${name} DPS`]);
  const conditionEntries = relevantConditions
    .map((name) => [
      `${name} Duration`,
      (attributes[`${name} Duration`] ?? 0) + (attributes['Condition Duration'] ?? 0),
    ])
    .filter(([_key, value]) => value);

  // show only if specific !== general
  const boonEntries = boons
    .filter((name) => attributes[`${name} Duration`])
    .map((name) => [
      `${name} Duration`,
      (attributes[`${name} Duration`] ?? 0) + (attributes['Boon Duration'] ?? 0),
    ]);

  if (boonEntries.length === 0 && conditionEntries.length === 0) return null;

  return (
    <>
      <Typography variant="h6">
        <Trans>Specific Durations</Trans>
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
              <TableCell align="right">{roundTwo(value * 100)}%</TableCell>
            </TableRow>
          ))}
          {boonEntries.map(([attribute, value]) => (
            <TableRow hover key={attribute}>
              <TableCell>
                <Boon name={attribute.split(' ')[0]} text={attribute} className={classes.gw2Item} />
              </TableCell>
              <TableCell align="right">{roundTwo(value * 100)}%</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default SpecialDurations;
