import { Item } from '@discretize/gw2-ui-new';
import { Table, TableBody, TableCell, TableRow, Typography } from '@mui/material';
import { Trans } from 'react-i18next';
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

  if (!Object.entries(data).length) {
    return;
  }

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
              <TableCell align="right">{count}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default OutputInfusions;
