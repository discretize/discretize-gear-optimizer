import { Table, TableBody, TableCell, TableRow, Typography } from '@mui/material';
import { Trans } from 'gatsby-plugin-react-i18next';
import React from 'react';

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
              <TableCell>{data[indicator]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default AffixesStats;
