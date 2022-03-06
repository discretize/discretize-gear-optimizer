import { Boon, CommonEffect, Condition, Skill, Trait, TraitLine } from '@discretize/gw2-ui-new';
import { decompress } from '@discretize/object-compression';
import { firstUppercase, TextDivider } from '@discretize/react-discretize-components';
import { Box, Paper, Typography } from '@mui/material';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from 'tss-react/mui';
import { NumberParam, StringParam, useQueryParam } from 'use-query-params';
import { buffModifiers, classModifiers } from '../assets/modifierdata';
import {
  changeBuildPage,
  getBuffs,
  getCharacter,
  getSkills,
  getTraits,
  getWeapons,
} from '../state/slices/buildPage';
import HelperIcon from './baseComponents/HelperIcon';
import ResultCharacter from './sections/results/ResultCharacter';

const useStyles = makeStyles()((theme) => ({
  headline: {
    paddingBottom: theme.spacing(2),
  },
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
    zIndex: 9999,
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

  const [buildUrl] = useQueryParam('data', StringParam);
  const [versionParam] = useQueryParam('v', NumberParam);

  // if no version is present, default to version 0
  const version = versionParam || 0;

  React.useEffect(() => {
    if (!buildUrl) {
      console.error('No url parameter supplied');
      return;
    }

    // load build state from url
    import(`./url-state/schema/BuildPageSchema_v${version}`).then(({ BuildPageSchema: schema }) =>
      decompress({
        string: buildUrl,
        schema,
        onSuccess: (result) => dispatch(changeBuildPage(result)),
      }),
    );

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

  const AssumedBuffs = () => {
    // filter buffs that are not applied
    const appliedBuffs = buffModifiers
      .flatMap((buff) => buff.items)
      .filter((buff) => buffs[buff.id]);

    return (
      <>
        {appliedBuffs.map(({ id, type, gw2id }) => {
          switch (type) {
            case 'Boon':
              return (
                <Boon
                  name={firstUppercase(id)}
                  disableText
                  key={id}
                  className={classes.gw2component}
                />
              );
            case 'Condition':
              return (
                <Condition
                  name={firstUppercase(id)}
                  disableText
                  key={id}
                  className={classes.gw2component}
                />
              );
            case 'Skill':
              return <Skill id={gw2id} disableText key={id} className={classes.gw2component} />;
            case 'Trait':
              return <Trait id={gw2id} disableText key={id} className={classes.gw2component} />;
            case 'CommonEffect':
              return (
                <CommonEffect
                  name={firstUppercase(id)}
                  disableText
                  key={id}
                  className={classes.gw2component}
                />
              );
            default:
              return null;
          }
        })}
      </>
    );
  };

  return (
    <>
      <TextDivider text="Equipment" />
      <Box display="flex" justifyContent="flex-end">
        <HelperIcon text="Assumed buffs for this build" />
        <AssumedBuffs />
      </Box>
      {character && (
        <ResultCharacter data={data} character={character} weapons={weapons} skills={skills} />
      )}

      <TextDivider text="Traits" />
      {lines[0] && <Traits id={parseInt(lines[0], 10)} selected={selected[0]} />}
      {lines[1] && <Traits id={parseInt(lines[1], 10)} selected={selected[1]} />}
      {lines[2] && <Traits id={parseInt(lines[2], 10)} selected={selected[2]} />}
    </>
  );
};

export default BuildPage;
