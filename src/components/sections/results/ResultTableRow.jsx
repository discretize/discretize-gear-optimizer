import { Typography } from '@material-ui/core';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeSelectedCharacter, getPriority } from '../../../state/gearOptimizerSlice';

const ResultTableRow = React.memo(({ character, selected }) => {
  const dispatch = useDispatch();
  const affixes = useSelector(getPriority('affixes'));

  return (
    <TableRow
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

export default ResultTableRow;
