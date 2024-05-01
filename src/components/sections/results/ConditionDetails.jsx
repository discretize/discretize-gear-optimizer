import { Condition } from '@discretize/gw2-ui-new';
import { Table, TableBody, TableCell, TableRow, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { damagingConditions } from '../../../utils/gw2-data';

const useStyles = makeStyles()((theme) => ({
  root: {
    width: '100%',
  },
  gw2Item: {
    fontSize: '20px',
    color: '#AAAAAA',
  },
}));

const ConditionDetails = ({ data: attributes, title, mode }) => {
  const { classes } = useStyles();

  const conditionEntries = damagingConditions
    .map((name) => `${name} ${mode}`)
    .map((name) => [name, attributes[name]]);

  return (
    <>
      <Typography variant="h6">{title}</Typography>
      <Table padding="none">
        <TableBody>
          {conditionEntries.map(([attribute, value]) => (
            <TableRow hover key={attribute}>
              <TableCell>
                <Condition
                  name={attribute.split(' ')[0].replace('Poison', 'Poisoned')}
                  text={attribute}
                  className={classes.gw2Item}
                />
              </TableCell>
              <TableCell align="right">{value.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default ConditionDetails;
