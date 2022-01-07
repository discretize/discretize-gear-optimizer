import { Table, TableBody, TableCell, TableRow, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { Trans } from 'gatsby-plugin-react-i18next';
import React from 'react';

const useStyles = makeStyles()((theme) => ({
  root: {
    width: '100%',
  },
  gw2Item: {
    fontSize: '20px',
    color: '#AAAAAA',
  },
}));

const AffixesStats = ({ data }) => {
  const classes = useStyles();

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
                <Typography className={classes.gw2Item}>{indicator} </Typography>
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
