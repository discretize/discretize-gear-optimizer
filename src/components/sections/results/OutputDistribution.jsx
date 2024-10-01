import { Attribute, Condition } from '@discretize/gw2-ui-new';
import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { makeStyles } from 'tss-react/mui';
import { damagingConditions } from '../../../utils/gw2-data';
import { useAlternativeDamage2 } from '../../baseComponents/useAlternativeDamage';

const useStyles = makeStyles()((theme) => ({
  root: {
    width: '100%',
  },
  gw2Item: {
    fontSize: '20px',
    color: '#AAAAAA',
  },
}));

const OutputDistribution = ({ character }) => {
  const { classes } = useStyles();
  const { t } = useTranslation();
  const [alternativeDamageLabel] = useAlternativeDamage2(character.settings.profession);

  const damageLabels = {
    Power2: alternativeDamageLabel,
    Siphon: t('Life Siphon'),
  };

  const { damageBreakdown = {} } = character.results;

  const data = Object.keys(damageBreakdown)
    .filter((damageType) => damageBreakdown[damageType])
    .map((damageType) => ({
      // Replace the names to match gw2-ui names
      name: damageType === 'Poison' ? 'Poisoned' : damageType.replace('Damage', '').trim(),
      value: damageBreakdown[damageType],
      percent: (damageBreakdown[damageType] / character.attributes.Damage) * 100,
    }));

  return (
    <>
      <Typography variant="h6">{t('Damage Distribution')}</Typography>
      <Table padding="none" sx={{ marginTop: '-0.7em' }}>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell align="right">{t('damage')}</TableCell>
            <TableCell align="right">{t('percent')}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((damageType) => (
            <TableRow hover key={damageType.name}>
              <TableCell>
                {[...damagingConditions, 'Poisoned'].includes(damageType.name) ? (
                  <Condition name={damageType.name} className={classes.gw2Item} />
                ) : (
                  <Attribute
                    name="Power"
                    className={classes.gw2Item}
                    text={damageLabels[damageType.name] ?? damageType.name}
                  />
                )}
              </TableCell>
              <TableCell align="right">{damageType.value.toFixed(1)}</TableCell>
              <TableCell align="right">{damageType.percent.toFixed(1)}%</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default OutputDistribution;
