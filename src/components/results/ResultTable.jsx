import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { useSelector, useDispatch } from 'react-redux';
import { getList, getPriority, changeControl } from '../../state/gearOptimizerSlice';
import { Slots } from '../../utils/gw2-data';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
  cell: {
    cursor: 'pointer',
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const wield = useSelector(getPriority('weaponType'));
  const list = useSelector(getList) || [];
  const dispatch = useDispatch();

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>Damage</TableCell>
              {Slots[wield].map((slot) => (
                <TableCell key={slot.name} align="center" padding="none">
                  {slot.short}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {list.map((character, i) => (
              <TableRow
                key={character.id}
                onClick={(e) => dispatch(changeControl({ key: 'selected', value: i }))}
                className={classes.cell}
              >
                <TableCell component="th" scope="row">
                  {character.attributes.Damage.toFixed(2)}
                </TableCell>
                {character.gear.map((element, index) => (
                  <TableCell align="center" key={element + index} padding="none">
                    {element.slice(0, 4)}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
