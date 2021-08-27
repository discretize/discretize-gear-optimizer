import React from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { useSelector, useDispatch } from 'react-redux';
import { Box, withStyles } from '@material-ui/core';
import { getList, getPriority, changeControl, getControl } from '../../state/gearOptimizerSlice';
import { Slots } from '../../utils/gw2-data';

const styles = (theme) => ({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
    borderColor: theme.palette.background.paper,
    border: '1px solid',
  },
  cell: {
    cursor: 'pointer',
  },
  tablehead: {
    backgroundColor: theme.palette.background.paper,
  },
});

const StickyHeadTable = ({ classes }) => {
  const wield = useSelector(getPriority('weaponType'));
  const selected = useSelector(getControl('selected'));

  const list = useSelector(getList) || [];
  const dispatch = useDispatch();

  return (
    <Box boxShadow={8}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.tablehead}>Damage</TableCell>
              {Slots[wield].map((slot) => (
                <TableCell
                  className={classes.tablehead}
                  key={slot.name}
                  align="center"
                  padding="none"
                >
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
                selected={i === selected}
                style={i === selected ? { backgroundColor: 'rgba(0, 204, 204, 0.2)' } : null}
                hover
              >
                <TableCell scope="row">{character.attributes.Damage.toFixed(2)}</TableCell>
                {character.gear.map((element, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <TableCell align="center" key={element + index} padding="none">
                    {element.slice(0, 4)}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default withStyles(styles)(StickyHeadTable);
