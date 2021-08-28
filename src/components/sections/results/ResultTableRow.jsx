import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { useDispatch } from 'react-redux';
import { Typography, withStyles } from '@material-ui/core';
import { changeSelectedCharacter, getPriority } from '../../../state/gearOptimizerSlice';
import { useSelector } from 'react-redux';

const styles = (theme) => ({
  cell: {
    cursor: 'pointer',
  },
  highlight: { fontWeight: 200, fontSize: '1rem' },
});

const ResultTableRow = React.memo(({ classes, character, selected }) => {
  const dispatch = useDispatch();
  const affixes = useSelector(getPriority('affixes'));
  console.log(affixes);
  return (
    <TableRow
      className={classes.cell}
      selected={selected}
      style={selected ? { backgroundColor: 'rgba(0, 204, 204, 0.2)' } : null}
      onClick={(e) => dispatch(changeSelectedCharacter(character))}
      hover
    >
      <TableCell scope="row">{character.attributes.Damage.toFixed(2)}</TableCell>
      {character.gear.map((element, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <TableCell align="center" key={element + index} padding="none">
          <Typography
            style={
              affixes[0] !== element.toUpperCase()
                ? { fontWeight: 300, fontSize: '1rem', color: '#00cccc' }
                : { fontWeight: 300, fontSize: '1rem' }
            }
          >
            {element.slice(0, 4)}
          </Typography>
        </TableCell>
      ))}
    </TableRow>
  );
});

export default withStyles(styles)(ResultTableRow);
