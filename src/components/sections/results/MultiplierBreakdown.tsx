import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import { Trans, useTranslation } from 'react-i18next';
import type { Character } from '../../../state/optimizer/optimizerCore';

const roundFour = (num: number) => Math.round(num * 10000) / 10000;

const MultiplierBreakdown = ({ character }: { character: Character }) => {
  const { t } = useTranslation();

  const data = character.settings.modifiers.damageMultiplierBreakdown;
  const entries = Object.entries(data).filter(
    ([attribute, breakdown]) =>
      attribute.startsWith('Outgoing ') && Object.values(breakdown).some((val) => val !== 1),
  );

  const modes = [
    { title: t('mult'), key: 'mult' },
    { title: t('add'), key: 'add' },
    { title: t('target'), key: 'target' },
    { title: t('total'), key: 'total' },
  ] as const;
  return (
    <>
      <Typography variant="h6">
        <Trans>Total Damage Multipliers</Trans>
      </Typography>

      <Table padding="none">
        <TableHead>
          <TableRow>
            <TableCell />
            {modes.map(({ title, key }) => (
              <TableCell align="left" key={key}>
                {title}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {entries.map(([attribute, breakdown]) => (
            <TableRow hover key={attribute}>
              <TableCell>
                <Typography
                  sx={{
                    fontSize: '20px',
                    color: '#AAAAAA',
                  }}
                >
                  {attribute.replace(/^Outgoing /, '').replace(/ Damage$/, '')}{' '}
                </Typography>
              </TableCell>
              {modes.map(({ key }) => (
                <TableCell align="left" key={key}>
                  {roundFour(breakdown[key] ?? 0)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default MultiplierBreakdown;
