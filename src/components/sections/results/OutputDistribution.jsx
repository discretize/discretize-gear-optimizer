import { Attribute, Condition } from '@discretize/gw2-ui-new';
import { Table, TableBody, TableCell, TableRow, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { makeStyles } from 'tss-react/mui';
import { damagingConditions } from '../../../utils/gw2-data';
import useAlternativeDamage from '../../baseComponents/useAlternativeDamage';

const useStyles = makeStyles()((theme) => ({
  root: {
    width: '100%',
  },
  gw2Item: {
    fontSize: '20px',
    color: '#AAAAAA',
  },
}));

const OutputDistribution = ({ title, data }) => {
  const { classes } = useStyles();
  const { t } = useTranslation();
  const [alternativeDamageLabel] = useAlternativeDamage();

  const damageLabels = {
    Power2: alternativeDamageLabel,
    Siphon: t('Life Siphon'),
  };

  return (
    <>
      <Typography variant="h6">{title}</Typography>
      <Table padding="none">
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
              <TableCell align="right">
                {damageType.value.toFixed?.(2) ?? damageType.value}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default OutputDistribution;
