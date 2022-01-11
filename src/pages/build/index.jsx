import { decompress } from '@discretize/object-compression';
import { Box, makeStyles, Paper, Typography } from '@material-ui/core';
import { graphql } from 'gatsby';
import { Trans } from 'gatsby-plugin-react-i18next';
import { Boon, CommonEffect, Condition, Skill, Trait, TraitLine } from 'gw2-ui-bulk';
import * as React from 'react';
import { firstUppercase, TextDivider } from 'react-discretize-components';
import { useDispatch, useSelector } from 'react-redux';
import { StringParam, useQueryParam } from 'use-query-params';
import { buffModifiers, classModifiers } from '../../assets/modifierdata';
import HelperIcon from '../../components/baseComponents/HelperIcon';
import LanguageSelection from '../../components/baseComponents/LanguageSelection';
import ResultCharacter from '../../components/sections/results/ResultCharacter';
import { BuildPageSchema } from '../../components/url-state/BuildPageSchema';
import withLayout from '../../hocs/withLayout';
import {
  changeBuildPage,
  getBuffs,
  getCharacter,
  getSkills,
  getTraits,
  getWeapons,
} from '../../state/slices/buildPage';

const useStyles = makeStyles((theme) => ({
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

// markup
const IndexPage = ({ data }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  // selectors from buildPage slice, will be loaded from url
  const character = useSelector(getCharacter);
  const weapons = useSelector(getWeapons);
  const skills = useSelector(getSkills);
  const { lines, selected } = useSelector(getTraits);
  const buffs = useSelector(getBuffs);

  const [buildUrl] = useQueryParam('data', StringParam);

  React.useEffect(() => {
    // load build state from url
    decompress({
      string: buildUrl,
      schema: BuildPageSchema,
      onSuccess: (result) => dispatch(changeBuildPage(result)),
    });

    return () => {};
  }, [buildUrl, dispatch]);

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
        <Paper elevation={4} className={classes.traitlineRoot}>
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
      <LanguageSelection />
      <Typography variant="h3" className={classes.headline}>
        <Trans>Shared Build</Trans>
      </Typography>

      <TextDivider text="Equipment" />
      <Box display="flex" justifyContent="flex-end">
        <HelperIcon text="Assumed buffs for this build" />
        <AssumedBuffs />
      </Box>
      {character && (
        <ResultCharacter data={data} character={character} weapons={weapons} skills={skills} />
      )}

      <TextDivider text="Traits" />
      {lines[0] && <Traits id={lines[0]} selected={selected[0]} />}
      {lines[1] && <Traits id={lines[1]} selected={selected[1]} />}
      {lines[2] && <Traits id={lines[2]} selected={selected[2]} />}
    </>
  );
};
export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }

    images: allImageSharp {
      edges {
        node {
          gatsbyImageData
          original {
            src
          }
        }
      }
    }
  }
`;

export default withLayout({ disableContainer: false })(IndexPage);
