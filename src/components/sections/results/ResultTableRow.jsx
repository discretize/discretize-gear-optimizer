import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { useDispatch } from 'react-redux';
import { changeSelectedCharacter } from '../../../state/gearOptimizerSlice';

const ResultTableRow = React.memo(({ character, selected }) => {
  const dispatch = useDispatch();
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
          {element.slice(0, 4)}
        </TableCell>
      ))}
    </TableRow>
  );
});

export default ResultTableRow;
