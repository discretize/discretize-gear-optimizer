import { Table, TableBody, TableCell, TableRow, Typography } from '@mui/material';
import { Trans } from 'react-i18next';

const AffixesStats = ({ data }) => {
  return (
    <>
      <Typography variant="h6">
        <Trans>Indicators</Trans>
      </Typography>
      <Table padding="none">
        <TableBody>
          {Object.keys(data).map((indicator) => (
            <TableRow hover key={indicator}>
              <TableCell>
                <Typography
                  sx={{
                    fontSize: '20px',
                    color: '#AAAAAA',
                  }}
                >
                  {indicator}{' '}
                </Typography>
              </TableCell>
              <TableCell align="right">{data[indicator].toFixed?.(2) ?? data[indicator]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default AffixesStats;
