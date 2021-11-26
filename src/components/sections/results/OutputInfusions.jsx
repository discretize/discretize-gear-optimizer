import { Table, TableBody, TableCell, TableRow, Typography, withStyles } from '@material-ui/core';
import { Trans } from 'gatsby-plugin-react-i18next';
import { Item } from 'gw2-ui-bulk';
import React from 'react';
import { INFUSION_IDS } from '../../../utils/gw2-data';

const styles = (theme) => ({
  gw2Item: {
    fontSize: '20px',
    color: '#AAAAAA',
  },
});

const OutputInfusions = ({ classes, data }) => {
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

export default withStyles(styles)(OutputInfusions);
