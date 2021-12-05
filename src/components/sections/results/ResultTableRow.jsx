import { Typography, makeStyles } from '@material-ui/core';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import React from 'react';
import { useDispatch } from 'react-redux';
import { changeSelectedCharacter, togglePinned } from '../../../state/slices/controlsSlice';

const useStyles = makeStyles((theme) => ({
  comparisonText: {
    color: theme.palette.text.secondary,
  },
  unselectedStar: {
    opacity: '0.2',
    '&:hover': {
      opacity: '1',
      color: theme.palette.primary.dark,
    },
  },
  selectedStar: {
    color: theme.palette.primary.dark,
  },
}));

const ResultTableRow = ({
  character,
  selected,
  pinned = false,
  mostCommonAffix,
  underlineClass,
  selectedValue,
}) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const { value } = character.results;
  const comparisonValue = selectedValue ? value - selectedValue : 0;

  // using toLocaleString to display a minus sign on negative zero
  const comparisonText = comparisonValue
    ? ` ${comparisonValue > 0 ? '+' : ''}${Math.round(comparisonValue).toLocaleString()}`
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
          className={pinned ? classes.selectedStar : classes.unselectedStar}
          onClick={(e) => {
            dispatch(togglePinned(character));
            e.stopPropagation();
          }}
        />
      </TableCell>
      <TableCell scope="row">
        {value.toFixed(2)}
        {comparisonText ? (
          <Typography variant="caption" className={classes.comparisonText}>
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
