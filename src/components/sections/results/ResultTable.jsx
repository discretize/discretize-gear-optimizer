import { Box } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import React from 'react';
import { TextDivider } from 'react-discretize-components';
import { useSelector } from 'react-redux';
import {
  getCompareByPercent,
  getList,
  getSaved,
  getSelectedCharacter,
} from '../../../state/slices/controlsSlice';
import ResultTableHeaderRow from './ResultTableHeaderRow';
import ResultTableRow from './ResultTableRow';

const useStyles = makeStyles()((theme) => ({
  container: {
    maxHeight: 440,
    borderColor: theme.palette.background.paper,
    border: '1px solid',
  },
  tablehead: {
    backgroundColor: theme.palette.background.paper,
  },
  tableCollapse: {
    borderCollapse: 'collapse !important',
  },
  underline: {
    borderBottom: `5px solid ${theme.palette.divider}`,
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

const StickyHeadTable = () => {
  const classes = useStyles();

  const { t } = useTranslation();
  const selectedCharacter = useSelector(getSelectedCharacter);
  const list = useSelector(getList) || [];
  const saved = useSelector(getSaved) || [];
  const compareByPercent = useSelector(getCompareByPercent);

  let mostCommonAffix = null;
  if (/* status !== RUNNING && */ list[0]) {
    mostCommonAffix = mode(list[0].gear);
  }

  const firstCharacter = list[0];
  const weaponType = firstCharacter?.settings?.weaponType;
  const infusions = firstCharacter?.infusions;
  const rankBy = firstCharacter?.settings?.rankby;

  const selectedValue = selectedCharacter?.results?.value;

  return (
    <>
      <Box boxShadow={8}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table" className={classes.tableCollapse}>
            <TableHead>
              <ResultTableHeaderRow
                classes={classes}
                weaponType={weaponType}
                infusions={infusions}
                rankBy={rankBy}
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
          <TextDivider text={t('Saved Results')} style={{ marginTop: 20 }} />
          <Box boxShadow={8}>
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
