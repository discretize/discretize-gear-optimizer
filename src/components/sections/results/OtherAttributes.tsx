import { Table, TableBody, TableCell, TableRow, Typography } from '@mui/material';
import { Trans, useTranslation } from 'react-i18next';
import { type Character } from '../../../state/optimizer/optimizerCore';

const roundOne = (num: number) => Math.round(num * 10) / 10;

const OtherAttributes = ({ character }: { character: Character }) => {
  const { t } = useTranslation();

  const { attributes } = character;

  const entries = (
    [
      [t('Effective Power'), attributes['Effective Power']],
      [t('Phantasm Effective Power'), attributes['Phantasm Effective Power']],
    ] as const
  ).filter(([_key, value]) => value);

  return (
    <>
      <Typography variant="h6">
        <Trans>Calculated Attributes</Trans>
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
              <TableCell align="right">{roundOne(value)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default OtherAttributes;
