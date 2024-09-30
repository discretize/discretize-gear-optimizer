import { Item } from '@discretize/gw2-ui-new';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import { Typography } from '@mui/material';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import React, { Fragment } from 'react';
import isEqual from 'react-fast-compare';
import { useDispatch } from 'react-redux';
import { allExtrasModifiersById, placeholderItem } from '../../../../assets/modifierdata';
import { percents } from '../../../../assets/modifierdata/metadata';
import { changeSelectedCharacter, toggleSaved } from '../../../../state/slices/controlsSlice';
import { extrasTypes } from '../../../../state/slices/extras';
import { maxSlotsLength } from '../../../../utils/gw2-data';

const roundTwo = (num) => Math.round(num * 100) / 100;

const ResultTableRow = ({
  character,
  selected,
  saved = false,
  unhighlightedAffixes,
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

  const emptyCell = <TableCell align="center" padding="none" />;
  const padCellArray = (minLength, array) => {
    const resultArray =
      array.length < minLength
        ? [...array, ...Array(minLength - array.length).fill(emptyCell)]
        : array;

    // eslint-disable-next-line react/no-array-index-key
    return resultArray.map((element, i) => <Fragment key={i}>{element}</Fragment>);
  };

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
        {value?.toFixed(0)}
        {comparisonText ? (
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            {comparisonText}
          </Typography>
        ) : null}
      </TableCell>
      {character.gearDescription ? (
        <TableCell align="center" padding="none" colSpan={maxSlotsLength}>
          <Typography
            style={{
              fontWeight: 300,
              fontSize: '1rem',
            }}
          >
            {character.gearDescription}
          </Typography>
        </TableCell>
      ) : (
        padCellArray(
          maxSlotsLength,
          character.gear.map((affix, index) => {
            let textDecoration;
            if (exoticRarity(affix, index) && mostCommonRarity !== 'exotic')
              textDecoration = 'underline dotted #ffa405';
            if (!exoticRarity(affix, index) && mostCommonRarity !== 'ascended')
              textDecoration = 'underline dotted #fb3e8d';

            const color =
              unhighlightedAffixes?.[index] && unhighlightedAffixes?.[index] !== affix
                ? '#00cccc'
                : 'inherit';

            const affixFragments = affix
              .split(/(?=[A-Z])/)
              .filter((fragment) => fragment !== 'And');
            const multiWordAffix = affixFragments.length > 1;

            const shortAffix = affixFragments
              .map((fragment) => fragment.slice(0, multiWordAffix ? 3 : 4))
              .join('');

            return (
              <TableCell align="center" padding="none">
                <Typography
                  style={{
                    fontWeight: 300,
                    fontSize: '1rem',
                    textDecoration,
                    color,
                  }}
                >
                  {shortAffix}
                </Typography>
              </TableCell>
            );
          }),
        )
      )}
      {padCellArray(
        2,
        Object.values(character.infusions ?? {}).map((element) => (
          <TableCell align="center" padding="none">
            {element}
          </TableCell>
        )),
      )}
      {padCellArray(
        extrasTypes.length,
        extrasTypes
          .filter((type) => displayExtras[type])
          .map((key) => {
            const extra = character.settings.extrasCombination[key];
            const { gw2id: id, textOverride } = allExtrasModifiersById[extra] ?? {};
            return (
              <TableCell align="center" padding="none">
                {extra ? (
                  <Item
                    id={id ?? placeholderItem}
                    disableText
                    disableLink
                    {...(textOverride
                      ? {
                          tooltipProps: {
                            content: textOverride,
                          },
                        }
                      : {})}
                    style={{ fontSize: 23 }}
                  />
                ) : null}
              </TableCell>
            );
          }),
      )}

      {displayAttributes.map((attribute) => (
        <TableCell align="center" padding="none">
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

export default React.memo(ResultTableRow, isEqual);
