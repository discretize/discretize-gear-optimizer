import { Box, withStyles } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import React from 'react';
import { useSelector } from 'react-redux';
import { getList, getPriority, getSelectedCharacter } from '../../../state/gearOptimizerSlice';
import { Slots } from '../../../utils/gw2-data';
import ResultTableRow from './ResultTableRow';

const styles = (theme) => ({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
    borderColor: theme.palette.background.paper,
    border: '1px solid',
  },
  pointer: {
    cursor: 'pointer',
  },
  tablehead: {
    backgroundColor: theme.palette.background.paper,
  },
});

const StickyHeadTable = ({ classes }) => {
  const wield = useSelector(getPriority('weaponType'));
  const selectedCharacter = useSelector(getSelectedCharacter);

  const list = useSelector(getList) || [];

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
          <TableBody className={classes.pointer}>
            {list.map((character) => (
              <ResultTableRow
                character={character}
                key={character.id}
                selected={character === selectedCharacter}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default withStyles(styles)(StickyHeadTable);
