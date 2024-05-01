import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import { Trans, useTranslation } from 'react-i18next';

const roundFour = (num) => Math.round(num * 10000) / 10000;

const MultiplierBreakdown = ({ data }) => {
  const { t } = useTranslation();

  const entries = Object.entries(data).filter(([_, breakdown]) =>
    Object.values(breakdown).some((val) => val !== 1),
  );

  const modes = [
    { title: t('Multiplicative'), key: 'mult' },
    { title: t('Additive'), key: 'add' },
    { title: t('Target-Based'), key: 'target' },
    { title: t('Total'), key: 'total' },
  ];
  return (
    <>
      <Typography variant="h6">
        <Trans>Multiplier Summary</Trans>
      </Typography>

      <Table padding="none" sx={{ marginTop: '-0.7em' }}>
        <TableHead>
          <TableCell padding="none" />
          {modes.map(({ title, key }) => (
            <TableCell align="left" padding="none" key={key}>
              {title}
            </TableCell>
          ))}
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
                  {attribute}{' '}
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
