import { Item } from '@discretize/gw2-ui-new';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import { Typography } from '@mui/material';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import React from 'react';
import { useDispatch } from 'react-redux';
import { allExtrasModifiersById } from '../../../../assets/modifierdata';
import { percents } from '../../../../assets/modifierdata/metadata';
import { changeSelectedCharacter, toggleSaved } from '../../../../state/slices/controlsSlice';
import { extrasTypes } from '../../../../state/slices/extras';

const roundTwo = (num) => Math.round(num * 100) / 100;

const ResultTableRow = ({
  character,
  selected,
  saved = false,
  mostCommonAffix,
  mostCommonRarity,
  underlineClass,
  selectedValue,
  compareByPercent,
  displayExtras,
  displayAttributes,
}) => {
  const dispatch = useDispatch();

  const { value } = character.results;
  const comparisonValue = selectedValue ? value - selectedValue : 0;

  const comparisonText = comparisonValue
    ? ` ${comparisonValue > 0 ? '+' : '-'}${
        compareByPercent
          ? `${((100 * Math.abs(comparisonValue)) / selectedValue).toFixed(1)}%`
          : Math.round(Math.abs(comparisonValue))
      }`
    : '';
  const exoticRarity = (affix, index) =>
    character.settings.cachedFormState.priorities?.exotics.data?.[affix]?.[index];
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
      {character.gear.map((affix, index) => {
        let textDecoration;
        if (exoticRarity(affix, index) && mostCommonRarity !== 'exotic')
          textDecoration = 'underline dotted #ffa405';
        if (!exoticRarity(affix, index) && mostCommonRarity !== 'ascended')
          textDecoration = 'underline dotted #fb3e8d';
        return (
          // eslint-disable-next-line react/no-array-index-key
          <TableCell align="center" key={affix + index} padding="none">
            <Typography
              style={{
                fontWeight: 300,
                fontSize: '1rem',
                textDecoration,
                color: mostCommonAffix && mostCommonAffix !== affix ? '#00cccc' : 'inherit',
              }}
            >
              {affix.slice(0, 4)}
            </Typography>
          </TableCell>
        );
      })}
      {character.infusions
        ? Object.values(character.infusions).map((element, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <TableCell align="center" key={`infu${index}`} padding="none">
              {element}
            </TableCell>
          ))
        : null}
      {extrasTypes
        .filter((type) => displayExtras[type])
        .map((key, index) => {
          const extra = character.settings.extrasCombination[key];
          return (
            // eslint-disable-next-line react/no-array-index-key
            <TableCell align="center" key={`extras${index}`} padding="none">
              {extra ? (
                <Item
                  id={allExtrasModifiersById[extra]?.gw2id}
                  disableText
                  disableLink
                  style={{ fontSize: 23 }}
                />
              ) : null}
            </TableCell>
          );
        })}

      {displayAttributes.map((attribute, index) => (
        <TableCell
          // eslint-disable-next-line react/no-array-index-key
          key={`attrs${index}`}
          align="center"
          padding="none"
        >
          <Typography variant="caption">
            {roundTwo(
              (character.attributes[attribute] ?? 0) * (percents.includes(attribute) ? 100 : 1),
            )}
          </Typography>
        </TableCell>
      ))}
    </TableRow>
  );
};

export default React.memo(ResultTableRow);
