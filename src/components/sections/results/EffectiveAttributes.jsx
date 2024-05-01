import { Table, TableBody, TableCell, TableRow, Typography } from '@mui/material';
import { Trans, useTranslation } from 'react-i18next';

const EffectiveAttributes = ({ data: attributes }) => {
  const { t } = useTranslation();
  const entries = [
    [t('Effective Power'), attributes['Effective Power']],
    [t('Phantasm Effective Power'), attributes['Phantasm Effective Power']],
  ].filter(([_key, value]) => value);

  return (
    <>
      <Typography variant="h6">
        <Trans>Effective Attributes</Trans>
      </Typography>

      <Table padding="none">
        <TableBody>
          {entries.map(([attribute, value]) => (
            <TableRow hover key={attribute}>
              <TableCell>
                <Typography
                  sx={{
                    fontSize: '20px',
                    color: '#AAAAAA',
                  }}
                >
                  {attribute}{' '}
                </Typography>
              </TableCell>
              <TableCell align="right">{Math.round(value)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default EffectiveAttributes;
