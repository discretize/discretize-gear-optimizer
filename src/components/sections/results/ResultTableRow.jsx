import StarRoundedIcon from '@mui/icons-material/StarRounded';
import { Typography } from '@mui/material';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import React from 'react';
import { useDispatch } from 'react-redux';
import { changeSelectedCharacter, toggleSaved } from '../../../state/slices/controlsSlice';

const ResultTableRow = ({
  character,
  selected,
  saved = false,
  mostCommonAffix,
  underlineClass,
  selectedValue,
  compareByPercent,
}) => {
  const dispatch = useDispatch();

  const { value } = character.results;
  const comparisonValue = selectedValue ? value - selectedValue : 0;

  const comparisonText = comparisonValue
    ? ` ${comparisonValue > 0 ? '+' : ''}${
        compareByPercent
          ? `${((100 * comparisonValue) / selectedValue).toFixed(1)}%`
          : // using toLocaleString to display a minus sign on negative zero
            Math.round(comparisonValue).toLocaleString()
      }`
    : '';

  return (
    <TableRow
      selected={selected}
      style={selected ? { backgroundColor: 'rgba(0, 204, 204, 0.2)' } : null}
      onClick={(e) => dispatch(changeSelectedCharacter(character))}
      hover
      className={underlineClass}
    >
      <TableCell scope="row" align="center" padding="none">
        <StarRoundedIcon
          sx={
            saved
              ? {
                  color: 'star',
                }
              : {
                  opacity: '0.2',
                  '&:hover': {
                    opacity: '1',
                    color: 'star',
                  },
                }
          }
          onClick={(e) => {
            dispatch(toggleSaved(character));
            e.stopPropagation();
          }}
        />
      </TableCell>
      <TableCell scope="row">
        {value.toFixed(0)}
        {comparisonText ? (
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            {comparisonText}
          </Typography>
        ) : null}
      </TableCell>
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
