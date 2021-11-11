import { Box, withStyles } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import React from 'react';
import { useSelector } from 'react-redux';
import { getList, getSelectedCharacter } from '../../../state/slices/controlsSlice';
import ResultTableRow from './ResultTableRow';
import ResultTableHeaderRow from './ResultTableHeaderRow';

const styles = (theme) => ({
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
    paddingRight: theme.spacing(1),
  },
  tableCollapse: {
    borderCollapse: 'collapse !important',
  },
  underline: {
    borderBottom: `5px solid ${theme.palette.divider}`,
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
        <Table stickyHeader aria-label="sticky table" className={classes.tableCollapse}>
          <TableHead>
            <ResultTableHeaderRow classes={classes} />
          </TableHead>
          <TableBody className={classes.pointer}>
            {list.map((character, i) => {
              // underline under the set of equivalent, optimal results
              const firstResult = list[0]?.results.value;
              const thisResult = list[i]?.results.value;
              const nextResult = list[i + 1]?.results.value;
              const underline = thisResult === firstResult && thisResult !== nextResult;

              return (
                <ResultTableRow
                  character={character}
                  key={character.id}
                  selected={character === selectedCharacter}
                  mostCommonAffix={mostCommonAffix}
                  underlineClass={underline ? classes.underline : null}
                />
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default React.memo(withStyles(styles)(StickyHeadTable));
