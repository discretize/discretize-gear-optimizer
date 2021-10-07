import { Box, withStyles } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import React from 'react';
import { useSelector } from 'react-redux';
import { getList, getSelectedCharacter } from '../../../state/controlsSlice';
import ResultTableRow from './ResultTableRow';
import ResultTableHeaderRow from './ResultTableHeaderRow';

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

// finds the most common element in an array
const mode = (array) => {
  const counters = {};
  let highestCounter = 0;
  let best = null;
  for (const element of array) {
    counters[element] = (counters[element] || 0) + 1;
    if (counters[element] > highestCounter) {
      highestCounter = counters[element];
      best = element;
    }
  }
  return best;
};

const StickyHeadTable = ({ classes }) => {
  const selectedCharacter = useSelector(getSelectedCharacter);
  const list = useSelector(getList) || [];

  let mostCommonAffix = null;
  if (/* status !== RUNNING && */ list[0]) {
    mostCommonAffix = mode(list[0].gear);
  }

  return (
    <Box boxShadow={8}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <ResultTableHeaderRow classes={classes} />
          </TableHead>
          <TableBody className={classes.pointer}>
            {list.map((character) => (
              <ResultTableRow
                character={character}
                key={character.id}
                selected={character === selectedCharacter}
                mostCommonAffix={mostCommonAffix}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default React.memo(withStyles(styles)(StickyHeadTable));
