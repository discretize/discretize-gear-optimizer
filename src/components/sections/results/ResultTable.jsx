import { Box, withStyles } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import React from 'react';
import { useSelector } from 'react-redux';
import { Item } from 'gw2-ui-bulk';
import {
  getList,
  getPriority,
  getSelectedCharacter,
  getInfusions,
} from '../../../state/gearOptimizerSlice';
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
  const wield = useSelector(getPriority('weaponType'));
  const selectedCharacter = useSelector(getSelectedCharacter);
  const list = useSelector(getList) || [];
  const infusions = useSelector(getInfusions);

  let mostCommonAffix = null;
  if (/* status !== RUNNING && */ list[0]) {
    mostCommonAffix = mode(list[0].gear);
  }

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
              {infusions.primaryInfusion && (
                <>
                  <TableCell
                    className={classes.tablehead}
                    key="primaryInfusion"
                    align="center"
                    padding="none"
                  >
                    <Item id={infusions.primaryInfusion} disableText disableLink />
                  </TableCell>
                </>
              )}
              {infusions.secondaryInfusion && (
                <>
                  <TableCell
                    className={classes.tablehead}
                    key="secondaryInfusion"
                    align="center"
                    padding="none"
                  >
                    <Item id={infusions.secondaryInfusion} disableText disableLink />
                  </TableCell>
                </>
              )}
            </TableRow>
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
