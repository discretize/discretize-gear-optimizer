import { Box, withStyles } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import TextDivider from '../../baseComponents/TextDivider';
import {
  getList,
  getSelectedCharacter,
  getSaved,
  getCompareByPercent,
} from '../../../state/slices/controlsSlice';
import ResultTableRow from './ResultTableRow';
import ResultTableHeaderRow from './ResultTableHeaderRow';

const styles = (theme) => ({
  container: {
    maxHeight: 440,
    borderColor: theme.palette.background.paper,
    border: '1px solid',
  },
  pointer: {
    cursor: 'pointer',
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
  marginTop: {
    marginTop: 20,
  },
});

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

const StickyHeadTable = ({ classes }) => {
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
            <TableBody className={classes.pointer}>
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
          <TextDivider text={t('Saved Results')} className={classes.marginTop} />
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
                <TableBody className={classes.pointer}>
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

export default React.memo(withStyles(styles)(StickyHeadTable));
