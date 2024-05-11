import { Attribute } from '@discretize/gw2-ui-new';
import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const EffectiveGainLoss = ({ character }) => {
  const { t } = useTranslation();

  const positive = character.results.effectivePositiveValues;
  const negative = character.results.effectiveNegativeValues;

  return (
    <>
      <Typography variant="h6">{t('Damage Change from ±5 Stat:')}</Typography>
      <Table padding="none">
        <TableHead>
          <TableCell />
          <TableCell align="right">{t('+5 stat')}</TableCell>
          <TableCell align="right">{t('-5 stat')}</TableCell>
        </TableHead>
        <TableBody>
          {Object.keys(positive).map((attribute) => (
            <TableRow hover key={attribute}>
              <TableCell>
                <Attribute name={attribute} style={{ fontSize: '20px', color: '#AAAAAA' }} />
              </TableCell>
              <TableCell align="right">
                {positive[attribute].toFixed?.(2) ?? positive[attribute]}
              </TableCell>
              <TableCell align="right">
                {negative[attribute].toFixed?.(2) ?? negative[attribute]}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default EffectiveGainLoss;
