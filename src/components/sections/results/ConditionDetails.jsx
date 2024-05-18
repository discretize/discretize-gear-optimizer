import { Condition } from '@discretize/gw2-ui-new';
import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
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

const ConditionDetails = ({ character }) => {
  const { classes } = useStyles();
  const { t } = useTranslation();

  const { attributes } = character;

  const conditionEntries = damagingConditions
    .map((attribute) => ({
      attribute,
      tick: attributes[`${attribute} Damage Tick`],
      stacks: attributes[`${attribute} Stacks`],
    }))
    .filter(({ stacks }) => stacks);

  if (!conditionEntries.length) {
    return;
  }

  return (
    <>
      <Typography variant="h6">{t('Condi Details')}</Typography>
      <Table padding="none" sx={{ marginTop: '-0.7em' }}>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell align="right">{t('avg stacks')}</TableCell>
            <TableCell align="right">{t('dmg/stack')}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {conditionEntries.map(({ attribute, tick, stacks }) => (
            <TableRow hover key={attribute}>
              <TableCell>
                <Condition
                  name={attribute.split(' ')[0].replace('Poison', 'Poisoned')}
                  text={attribute}
                  className={classes.gw2Item}
                />
              </TableCell>
              <TableCell align="right">{stacks.toFixed(2)}</TableCell>
              <TableCell align="right">{tick.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default ConditionDetails;
