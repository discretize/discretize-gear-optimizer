import { TraitLine } from '@discretize/gw2-ui-new';
import { TextDivider } from '@discretize/react-discretize-components';
import { Box, Paper, Typography } from '@mui/material';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from 'tss-react/mui';
import { buffModifiers, classModifiers } from '../../packages/data/modifierdata';
import type { ModifierItem } from '../../packages/data/modifierdata/metadata';
import { importStateCharacter } from '../state/async/buildPageThunks';
import { useAppDispatch } from '../state/redux-hooks';
import {
  getBuffs,
  getCharacter,
  getSkills,
  getTraits,
  getWeapons,
} from '../state/slices/buildPage';
import { JADE_BOT_CORE_IDS } from '../utils/gw2-data';
import { PARAMS, useQueryParam } from '../utils/queryParam';
import ResultCharacter from './sections/results/ResultCharacter';

const useStyles = makeStyles()((theme) => ({
  traitlineText: {
    textOrientation: 'mixed',
    fontWeight: 250,
    textAlign: 'end',
    overflowWrap: 'break-word',
  },
  traitlineRoot: {
    padding: theme.spacing(1),
    borderTopStyle: 'solid',
    borderColor: theme.palette.primary.main,
    position: 'absolute',
    zIndex: 2,
    maxHeight: 133,
  },
  gw2component: {
    fontSize: 20,
  },
}));

interface TraitsProps {
  id: number;
  selected: number[];
  traitLookup: Record<number, string>;
}

// Component for a trait line, augmented with the name of the trait line
// TODO maybe move this into react-discretize-components
function Traits({ id, selected: selectedTraits, traitLookup }: TraitsProps) {
  const { classes } = useStyles();

  return (
    <Box sx={{ display: 'flex', mb: 1 }}>
      <Paper elevation={0} className={classes.traitlineRoot}>
        <Typography variant="body1" className={classes.traitlineText}>
          {traitLookup[id]}
        </Typography>
      </Paper>
      <TraitLine id={id} defaultSelected={selectedTraits} selectable={false} />
    </Box>
  );
}

const BuildPage = () => {
  const dispatch = useAppDispatch();

  // selectors from buildPage slice, will be loaded from url
  const character = useSelector(getCharacter);
  const weapons = useSelector(getWeapons);
  const skills = useSelector(getSkills);
  const { lines, selected } = useSelector(getTraits);
  const buffs = useSelector(getBuffs);

  // migrate to own implementation
  const buildData = useQueryParam({ key: PARAMS.DATA });
  const versionParam = useQueryParam({ key: PARAMS.VERSION });

  // if no version is present, default to version 0
  const version = parseInt(versionParam ?? '0', 10);

  React.useEffect(() => {
    dispatch(importStateCharacter({ version, buildUrl: buildData }));
    return () => {
      // do nothing
    };
  }, [buildData, dispatch, version]);

  // lookup table for specialization id -> trait line name
  const traitLookup: Record<number, string> = {};
  Object.values(classModifiers)
    .flat()
    .filter((item) => item.section !== 'Skills')
    .forEach((traitLine) => {
      traitLookup[traitLine.id!] = traitLine.section;
    });

  let assumedBuffs = buffModifiers.flatMap((buff) => buff.items).filter((buff) => buffs[buff.id]);

  if (assumedBuffs.find((buff) => buff.id.includes('jade-bot-')))
    assumedBuffs = assumedBuffs.concat({
      type: 'Item',
      id: 'jade-bot',
      gw2id: JADE_BOT_CORE_IDS[9], // TODO hard coded level 10 at the moment until we encode the jade bot tier into the url (-> next schema upgrade)
    } as ModifierItem);
  const ar = character && character.attributes['Agony Resistance'];
  // TODO this condition is also technically not correct. would need to transmit the game mode
  if (ar > 0)
    assumedBuffs = assumedBuffs.concat({
      type: 'Item',
      id: 'omnipotion',
      gw2id: 79722,
    } as ModifierItem);

  return (
    <>
      <TextDivider text="Equipment" />

      {character && (
        <ResultCharacter
          character={character}
          weapons={weapons}
          skills={skills}
          assumedBuffs={assumedBuffs}
        />
      )}

      <TextDivider text="Traits" />
      {lines[0] && (
        <Traits id={parseInt(lines[0], 10)} selected={selected[0]} traitLookup={traitLookup} />
      )}
      {lines[1] && (
        <Traits id={parseInt(lines[1], 10)} selected={selected[1]} traitLookup={traitLookup} />
      )}
      {lines[2] && (
        <Traits id={parseInt(lines[2], 10)} selected={selected[2]} traitLookup={traitLookup} />
      )}
    </>
  );
};

export default BuildPage;
