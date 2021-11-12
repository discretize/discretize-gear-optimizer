import { Typography } from '@material-ui/core';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import React from 'react';
import { useDispatch } from 'react-redux';
import { changeSelectedCharacter } from '../../../state/slices/resultsSlice';

const ResultTableRow = ({ character, selected, mostCommonAffix, underlineClass }) => {
  const dispatch = useDispatch();

  return (
    <TableRow
      selected={selected}
      style={selected ? { backgroundColor: 'rgba(0, 204, 204, 0.2)' } : null}
      onClick={(e) => dispatch(changeSelectedCharacter(character))}
      hover
      className={underlineClass}
    >
      <TableCell scope="row">{character.results.value.toFixed(2)}</TableCell>
      {character.gear.map((element, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <TableCell align="center" key={element + index} padding="none">
          <Typography
            style={
              mostCommonAffix && mostCommonAffix !== element
                ? { fontWeight: 300, fontSize: '1rem', color: '#00cccc' }
                : { fontWeight: 300, fontSize: '1rem' }
            }
          >
            {element.slice(0, 4)}
          </Typography>
        </TableCell>
      ))}
      {character.infusions
        ? Object.values(character.infusions).map((element, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <TableCell align="center" key={`infu${index}`} padding="none">
              {element}
            </TableCell>
          ))
        : null}
    </TableRow>
  );
};

export default React.memo(ResultTableRow);
