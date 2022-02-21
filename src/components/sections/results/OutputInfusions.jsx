import { Table, TableBody, TableCell, TableRow, Typography } from '@mui/material';
import { Trans } from 'gatsby-plugin-react-i18next';
import { Item } from 'gw2-ui-new';
import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { INFUSION_IDS } from '../../../utils/gw2-data';

const useStyles = makeStyles()((theme) => ({
  gw2Item: {
    fontSize: '20px',
    color: '#AAAAAA',
  },
}));

const OutputInfusions = ({ data }) => {
  const { classes } = useStyles();

  return (
    <>
      <Typography variant="h6">
        <Trans>Infusions</Trans>
      </Typography>
      <Table padding="none">
        <TableBody>
          {Object.entries(data).map(([attribute, count]) => (
            <TableRow hover key={attribute}>
              <TableCell>
                <Item id={INFUSION_IDS[attribute]} className={classes.gw2Item} />
              </TableCell>
              <TableCell>{count}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default OutputInfusions;
