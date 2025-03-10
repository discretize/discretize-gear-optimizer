import { TextDivider } from '@discretize/react-discretize-components';
import { Box } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { makeStyles } from 'tss-react/mui';
import type { Character } from '../../../../state/optimizer/types/optimizerTypes';
import {
  getCompareByPercent,
  getDisplayAttributes,
  getFilterMode,
  getFilteredLists,
  getHighlightDiffering,
  getList,
  getSaved,
  getSavedHeader,
  getSelectedCharacter,
  getTallTable,
} from '../../../../state/slices/controlsSlice';
import type { ExtrasType } from '../../../../state/slices/extras';
import type { AffixName } from '../../../../utils/gw2-data';
import { maxSlotsLength } from '../../../../utils/gw2-data';
import ResultTableHeaderRow from './ResultTableHeaderRow';
import ResultTableRow from './ResultTableRow';

const useStyles = makeStyles()((theme) => ({
  container: {
    borderColor: theme.palette.background.paper,
    border: '1px solid inherit',
  },
  shortTable: {
    maxHeight: 440,
    overflowY: 'scroll',
  },
  tallTable: {
    maxHeight: '90vh',
  },
  tableCollapse: {
    borderCollapse: 'collapse !important' as 'collapse',
    marginBottom: '0px !important',
  },
  underline: {
    borderBottom: `5px solid ${theme.palette.divider}`,
  },
}));

// finds the most common element in an array
const mode = <T extends string | number>(array: T[]) => {
  const counters: Partial<Record<T, number>> = {};
  let highestCounter = 0;
  let best: T | undefined;
  for (const element of array) {
    counters[element] = (counters[element] || 0) + 1;
    if (counters[element]! > highestCounter) {
      highestCounter = counters[element];
      best = element;
    }
  }
  return best;
};

const emptyList: Character[] = [];

const StickyHeadTable = () => {
  const { classes, cx } = useStyles();

  const { t } = useTranslation();
  const selectedCharacter = useSelector(getSelectedCharacter);
  const normalList = useSelector(getList);
  const filteredLists = useSelector(getFilteredLists);
  const saved = useSelector(getSaved) || emptyList;
  const compareByPercent = useSelector(getCompareByPercent);
  const highlightDiffering = useSelector(getHighlightDiffering);
  const filterMode = useSelector(getFilterMode);
  const tallTable = useSelector(getTallTable);
  const savedHeader = useSelector(getSavedHeader);

  const list = {
    None: normalList,
    ...filteredLists,
  }[filterMode];

  let mostCommonAffix: AffixName | undefined;
  let mostCommonRarity: 'exotic' | 'ascended' | undefined;
  if (/* status !== RUNNING && */ list[0]) {
    mostCommonAffix = mode(list[0].gear);
    const [exo, asc] = Object.entries(
      list[0].settings.cachedFormState.priorities?.exotics?.data || {},
    ).reduce(
      (sum, [, value]) => {
        sum[0] += value.filter((isExotic) => isExotic).length;
        sum[1] += value.filter((isExotic) => !isExotic).length;
        return sum;
      },
      [0, 0],
    );
    mostCommonRarity = exo > asc ? 'exotic' : 'ascended';
  }

  const unhighlightedAffixes = React.useMemo(
    () =>
      highlightDiffering
        ? selectedCharacter?.gear
        : (Array(maxSlotsLength).fill(mostCommonAffix) as (typeof mostCommonAffix)[]),
    [highlightDiffering, mostCommonAffix, selectedCharacter],
  );

  const firstCharacter = list[0];
  const weaponType = firstCharacter?.settings?.weaponType;
  const infusions = firstCharacter?.infusions;
  const rankBy = firstCharacter?.settings?.rankby;

  const selectedValue = selectedCharacter?.results?.value;

  const shouldDisplay = (type: ExtrasType) => {
    // display extras in a column if any displayed character was run in multiselect mode
    if (
      firstCharacter?.settings?.shouldDisplayExtras?.[type] ||
      saved.some((character) => character?.settings?.shouldDisplayExtras?.[type])
    ) {
      return true;
    }

    // ...or if the user saved a build, then ran the same profession with a different extra
    const variations = new Set();
    [...list.slice(0, 1), ...saved]
      .filter((character) => character.settings.profession === firstCharacter?.settings?.profession)
      .forEach((character) => variations.add(character.settings.extrasCombination[type]));
    return variations.size > 1;
  };

  // this code looks awful but a working useMemo is very important here (rerendering every row = bad)
  const displaySigil1 = shouldDisplay('Sigil1');
  const displaySigil2 = shouldDisplay('Sigil2');
  const displayRunes = shouldDisplay('Runes');
  const displayRelics = shouldDisplay('Relics');
  const displayNourishment = shouldDisplay('Nourishment');
  const displayEnhancement = shouldDisplay('Enhancement');
  const displayExtras = React.useMemo(
    () => ({
      Sigil1: displaySigil1,
      Sigil2: displaySigil2,
      Runes: displayRunes,
      Relics: displayRelics,
      Nourishment: displayNourishment,
      Enhancement: displayEnhancement,
    }),
    [
      displaySigil1,
      displaySigil2,
      displayRunes,
      displayRelics,
      displayNourishment,
      displayEnhancement,
    ],
  );

  const displayAttributes = useSelector(getDisplayAttributes);

  return (
    <>
      <Box sx={{ boxShadow: 8, mb: 3 }}>
        <TableContainer
          className={cx(classes.container, tallTable ? classes.tallTable : classes.shortTable)}
        >
          <Table stickyHeader aria-label="sticky table" className={classes.tableCollapse}>
            <TableHead>
              <ResultTableHeaderRow
                weaponType={weaponType}
                infusions={infusions}
                rankBy={rankBy}
                displayExtras={displayExtras}
                displayAttributes={displayAttributes}
              />
            </TableHead>
            <TableBody
              sx={{
                cursor: 'pointer',
              }}
            >
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
                    selected={character.id === selectedCharacter?.id}
                    saved={saved.some(({ id }) => character.id === id)}
                    unhighlightedAffixes={unhighlightedAffixes}
                    mostCommonRarity={mostCommonRarity}
                    underlineClass={underline ? classes.underline : undefined}
                    selectedValue={selectedValue}
                    compareByPercent={compareByPercent}
                    displayExtras={displayExtras}
                    displayAttributes={displayAttributes}
                  />
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {saved.length ? (
        <>
          <TextDivider text={t('Saved Results')} />
          <Box sx={{ boxShadow: 8, mb: 3 }}>
            <TableContainer
              className={cx(classes.container, tallTable ? classes.tallTable : classes.shortTable)}
            >
              <Table
                stickyHeader
                aria-label="saved results table"
                className={classes.tableCollapse}
              >
                <TableHead style={savedHeader ? {} : { visibility: 'collapse' }}>
                  <ResultTableHeaderRow
                    weaponType={weaponType}
                    infusions={infusions}
                    rankBy={rankBy}
                    displayExtras={displayExtras}
                    displayAttributes={displayAttributes}
                  />
                </TableHead>
                <TableBody
                  sx={{
                    cursor: 'pointer',
                  }}
                >
                  {saved.map((character) => {
                    return (
                      <ResultTableRow
                        character={character}
                        key={character.id}
                        selected={character.id === selectedCharacter?.id}
                        saved={saved.some(({ id }) => character.id === id)}
                        unhighlightedAffixes={unhighlightedAffixes}
                        mostCommonRarity={mostCommonRarity}
                        selectedValue={selectedValue}
                        compareByPercent={compareByPercent}
                        displayExtras={displayExtras}
                        displayAttributes={displayAttributes}
                      />
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </>
      ) : null}
    </>
  );
};

export default React.memo(StickyHeadTable);
