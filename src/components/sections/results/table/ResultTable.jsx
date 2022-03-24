import { TextDivider } from '@discretize/react-discretize-components';
import { Box } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from 'tss-react/mui';
import {
  getCompareByPercent,
  getFilteredList,
  getFilterMode,
  getList,
  getSaved,
  getSelectedCharacter,
} from '../../../../state/slices/controlsSlice';
import ResultTableHeaderRow from './ResultTableHeaderRow';
import ResultTableRow from './ResultTableRow';

const useStyles = makeStyles()((theme) => ({
  container: {
    maxHeight: 440,
    borderColor: theme.palette.background.paper,
    border: '1px solid inherit',
  },
  tablehead: {
    backgroundColor: theme.palette.background.paper,
  },
  tableCollapse: {
    borderCollapse: 'collapse !important',
    marginBottom: '0px !important',
  },
  underline: {
    borderBottom: `5px solid ${theme.palette.divider}`,
  },
  gearColumn: {
    minWidth: '3em',
  },
  infusionColumn: {
    minWidth: '1.8em',
  },
  extrasColumn: {
    minWidth: '2.2em',
  },
}));

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

const emptyArray = [];

const StickyHeadTable = () => {
  const { classes } = useStyles();

  const { t } = useTranslation();
  const selectedCharacter = useSelector(getSelectedCharacter);
  const normalList = useSelector(getList) || emptyArray;
  const rawFilteredList = useSelector(getFilteredList) || emptyArray;
  const saved = useSelector(getSaved) || emptyArray;
  const compareByPercent = useSelector(getCompareByPercent);
  const filterMode = useSelector(getFilterMode);

  const list = React.useMemo(() => {
    if (filterMode === 'None') {
      return normalList;
    }
    if (filterMode === 'Combinations') {
      return rawFilteredList;
    }
    if (filterMode === 'Sigils') {
      return rawFilteredList.filter((character, i) => {
        const isWorse = rawFilteredList.slice(0, i).some((prevChar) => {
          const sameSigils =
            prevChar.settings.extrasCombination.Sigil1 ===
              character.settings.extrasCombination.Sigil1 &&
            prevChar.settings.extrasCombination.Sigil2 ===
              character.settings.extrasCombination.Sigil2;
          return sameSigils && prevChar.results.value > character.results.value;
        });
        return !isWorse;
      });
    }
    return rawFilteredList.filter((character, i) => {
      const isWorse = rawFilteredList.slice(0, i).some((prevChar) => {
        const sameExtra =
          prevChar.settings.extrasCombination[filterMode] ===
          character.settings.extrasCombination[filterMode];
        return sameExtra && prevChar.results.value > character.results.value;
      });
      return !isWorse;
    });
  }, [filterMode, normalList, rawFilteredList]);

  let mostCommonAffix = null;
  if (/* status !== RUNNING && */ list[0]) {
    mostCommonAffix = mode(list[0].gear);
  }

  const firstCharacter = list[0];
  const weaponType = firstCharacter?.settings?.weaponType;
  const infusions = firstCharacter?.infusions;
  const rankBy = firstCharacter?.settings?.rankby;

  const selectedValue = selectedCharacter?.results?.value;

  // display extra types if any displayed character has the flag set to true
  const shouldDisplay = (type) =>
    firstCharacter?.settings?.shouldDisplayExtras?.[type] ||
    saved.some((character) => character?.settings?.shouldDisplayExtras?.[type]);

  // this code looks awful but a working useMemo is very important here (rerendering every row = bad)
  const displaySigils = shouldDisplay('Sigil1') || shouldDisplay('Sigil2');
  const displayRunes = shouldDisplay('Runes');
  const displayNourishment = shouldDisplay('Nourishment');
  const displayEnhancement = shouldDisplay('Enhancement');
  const displayExtras = React.useMemo(
    () => ({
      Sigil1: displaySigils,
      Sigil2: displaySigils,
      Runes: displayRunes,
      Nourishment: displayNourishment,
      Enhancement: displayEnhancement,
    }),
    [displaySigils, displayRunes, displayNourishment, displayEnhancement],
  );

  return (
    <>
      <Box boxShadow={8} mb={3}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table" className={classes.tableCollapse}>
            <TableHead>
              <ResultTableHeaderRow
                classes={classes}
                weaponType={weaponType}
                infusions={infusions}
                rankBy={rankBy}
                displayExtras={displayExtras}
              />
            </TableHead>
            <TableBody
              sx={{
                cursor: 'pointer',
              }}
            >
              {/* {saved.length
              ? saved.map((character, i) => {
                  return (
                    <ResultTableRow
                      character={character}
                      key={character.id}
                      selected={character === selectedCharacter}
                      saved={saved.includes(character)}
                      mostCommonAffix={mostCommonAffix}
                      underlineClass={i === saved.length - 1 ? classes.bigUnderline : null}
                      compareByPercent={compareByPercent}
                    />
                  );
                })
              : null} */}
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
                    selected={character === selectedCharacter}
                    saved={saved.includes(character)}
                    mostCommonAffix={mostCommonAffix}
                    underlineClass={underline ? classes.underline : null}
                    selectedValue={selectedValue}
                    compareByPercent={compareByPercent}
                    displayExtras={displayExtras}
                  />
                );
              })}
            </TableBody>
            {/* <TableFooter style={{ position: 'sticky', bottom: '0', zIndex: '2' }}>
            {saved.map((character) => {
              return (
                <ResultTableRow
                  character={character}
                  key={character.id}
                  selected={character === selectedCharacter}
                  saved={saved.includes(character)}
                  mostCommonAffix={mostCommonAffix}
                  compareByPercent={compareByPercent}
                />
              );
            })}
          </TableFooter> */}
          </Table>
        </TableContainer>
      </Box>

      {saved.length ? (
        <>
          <TextDivider text={t('Saved Results')} />
          <Box boxShadow={8} mb={3}>
            <TableContainer className={classes.container}>
              <Table
                stickyHeader
                aria-label="saved results table"
                className={classes.tableCollapse}
              >
                <TableHead style={{ visibility: 'collapse' }}>
                  <ResultTableHeaderRow
                    classes={classes}
                    weaponType={weaponType}
                    infusions={infusions}
                    rankBy={rankBy}
                    displayExtras={displayExtras}
                  />
                </TableHead>
                <TableBody
                  sx={{
                    cursor: 'pointer',
                  }}
                >
                  {saved.map((character, i) => {
                    return (
                      <ResultTableRow
                        character={character}
                        key={character.id}
                        selected={character === selectedCharacter}
                        saved={saved.includes(character)}
                        mostCommonAffix={mostCommonAffix}
                        underlineClass={i === saved.length - 1 ? classes.bigUnderline : null}
                        selectedValue={selectedValue}
                        compareByPercent={compareByPercent}
                        displayExtras={displayExtras}
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
