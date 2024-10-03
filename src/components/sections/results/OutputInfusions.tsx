import { Item } from '@discretize/gw2-ui-new';
import { Table, TableBody, TableCell, TableRow, Typography } from '@mui/material';
import { Trans } from 'react-i18next';
import { makeStyles } from 'tss-react/mui';
import type { Character } from '../../../state/optimizer/optimizerCore';
import { INFUSION_IDS } from '../../../utils/gw2-data';
import { objectEntries } from '../../../utils/usefulFunctions';

const useStyles = makeStyles()((theme) => ({
  gw2Item: {
    fontSize: '20px',
    color: '#AAAAAA',
  },
}));

const OutputInfusions = ({ data }: { data: Character['infusions'] }) => {
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
          {objectEntries(data).map(([attribute, count]) => (
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
