import { TraitLine } from '@discretize/gw2-ui-new';
import { TextDivider } from '@discretize/react-discretize-components';
import { Box, Paper, Typography } from '@mui/material';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from 'tss-react/mui';
import { buffModifiers, classModifiers } from '../assets/modifierdata';
import SagaTypes from '../state/sagas/sagaTypes';
import {
  getBuffs,
  getCharacter,
  getSkills,
  getTraits,
  getWeapons,
} from '../state/slices/buildPage';
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

const BuildPage = ({ data }) => {
  const { classes } = useStyles();
  const dispatch = useDispatch();

  // selectors from buildPage slice, will be loaded from url
  const character = useSelector(getCharacter);
  const weapons = useSelector(getWeapons);
  const skills = useSelector(getSkills);
  const { lines, selected } = useSelector(getTraits);
  const buffs = useSelector(getBuffs);

  // migrate to own implementation
  const [buildUrl] = useQueryParam('data', StringParam);
  const [versionParam] = useQueryParam('v', NumberParam);

  // if no version is present, default to version 0
  const version = versionParam || 0;

  React.useEffect(() => {
    dispatch({ type: SagaTypes.ImportBuildPageState, version, buildUrl });
    return () => {};
  }, [buildUrl, dispatch, version]);

  // lookup table for specialization id -> trait line name
  const traitLookup = [];
  []
    .concat(...Object.values(classModifiers))
    .filter((item) => item.section !== 'Skills')
    .forEach((traitLine) => {
      traitLookup[traitLine.id] = traitLine.section;
    });

  // Component for a trait line, augmented with the name of the trait line
  // TODO maybe move this into react-discretize-components
  const Traits = ({ id, selected: selectedTraits }) => {
    return (
      <Box display="flex" mb={1}>
        <Paper elevation={0} className={classes.traitlineRoot}>
          <Typography variant="body1" className={classes.traitlineText}>
            {traitLookup[id]}
          </Typography>
        </Paper>
        <TraitLine id={id} defaultSelected={selectedTraits} selectable={false} />
      </Box>
    );
  };

  const assumedBuffs = buffModifiers.flatMap((buff) => buff.items).filter((buff) => buffs[buff.id]);

  return (
    <>
      <TextDivider text="Equipment" />

      {character && (
        <ResultCharacter
          data={data}
          character={character}
          weapons={weapons}
          skills={skills}
          assumedBuffs={assumedBuffs}
        />
      )}

      <TextDivider text="Traits" />
      {lines[0] && <Traits id={parseInt(lines[0], 10)} selected={selected[0]} />}
      {lines[1] && <Traits id={parseInt(lines[1], 10)} selected={selected[1]} />}
      {lines[2] && <Traits id={parseInt(lines[2], 10)} selected={selected[2]} />}
    </>
  );
};

export default BuildPage;
