/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-console */
import { Box, Grid, Typography, withStyles } from '@material-ui/core';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import { useSelector } from 'react-redux';
import { getControl, getProfession } from '../state/gearOptimizerSlice';
import NavBar from './nav/NavBar';
import ARSection from './sections/ar/ARSection';
import BuffsSection from './sections/buffs/BuffsSection';
import Controls from './sections/controls/Controls';
import DistributionSection from './sections/distribution/DistributionSection';
import ExtraModifiersSection from './sections/extramodifiers/ExtraModifiersSection';
import ExtrasSection from './sections/extras/ExtrasSection';
import ForcedSlotsSection from './sections/forcedslots/ForcedSlotsSection';
import InfusionsSection from './sections/infusions/InfusionsSection';
import PrioritiesSection from './sections/priorities/PrioritiesSection';
import ResultDetails from './sections/results/ResultDetails';
import ResultTable from './sections/results/ResultTable';
import SkillsSection from './sections/skills/SkillsSection';
import TraitsSection from './sections/traits/TraitsSection';

const styles = (theme) => ({
  root: {
    // adds padding on bigger (non smartphone) screens
    [theme.breakpoints.up('sm')]: {
      paddingLeft: 20,
      paddingRight: 20,
    },
  },
  button: {
    margin: theme.spacing(1),
  },
  label: {
    height: 40,
  },
  icon: {
    fontSize: 40,
  },
  containerItem: {
    // borderBottom: `3px solid ${theme.palette.primary.dark}`,
    marginBottom: theme.spacing(2),
    // borderRadius: 20,
    borderColor: theme.palette.primary.main,
  },
  chipIcon: { marginBottom: '-6px !important' },
});

/**
 * Contains the main UI for the optimizer. All the components are being put together here.
 *
 * @param {classes, data} styles and data fetched by graphiql
 * @returns the main ui
 */
const MainComponent = ({ classes, data }) => {
  // Query variables from redux store that should have a global scope
  const expertMode = useSelector(getControl('expertMode'));
  const profession = useSelector(getProfession);

  return (
    <div className={classes.root}>
      <NavBar
        data={data.presetTraits.list}
        buffPresets={data.presetBuffs.list}
        prioritiesPresets={data.presetAffixes.list}
        distributionPresets={data.presetDistribution.list}
      />

      {profession === '' && (
        <Typography style={{ marginBottom: 8 }}>
          <ExpandLessIcon />
          <i>Select {expertMode && <>a class or</>} a build template from the menu above!</i>{' '}
          <ExpandLessIcon />
        </Typography>
      )}

      <div style={profession === '' ? { opacity: 0.5 } : { opacity: 1.0 }}>
        <Grid container>
          {expertMode ? (
            <>
              {profession !== '' && <TraitsSection profession={profession} />}

              <SkillsSection profession={profession} />

              <ExtrasSection />

              <BuffsSection data={data} />

              <ExtraModifiersSection />

              <InfusionsSection />

              <ForcedSlotsSection />

              <PrioritiesSection data={data} />

              <DistributionSection profession={profession} data={data} />

              <ARSection />
            </>
          ) : (
            <>
              <InfusionsSection first />

              <PrioritiesSection data={data} />

              <ARSection />
            </>
          )}
        </Grid>

        <Controls classes={classes} profession={profession} />

        <ResultTable />
        <Box m={3} />
        <ResultDetails data={data} />
      </div>
    </div>
  );
};

/**
 * Wrapper around the main component. GraphQL is queried here.
 *
 * @param {*} param0
 * @returns
 */
const GearOptimizer = ({ classes }) => {
  return (
    <StaticQuery
      query={graphql`
        query myEpicQuery {
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
          presetBuffs: presetBuffs {
            list {
              name
              value
            }
          }
          presetAffixes: presetAffixes {
            list {
              name
              value
            }
          }
          presetDistribution: presetDistribution {
            list {
              name
              value
              profession
            }
          }
          presetTraits {
            id
            list {
              class
              builds {
                id
                name
                traits
                specialization
                boons
                priority
                distribution
              }
            }
          }
        }
      `}
      render={(data) => <MainComponent classes={classes} modifierData={data} />}
    />
  );
};

export default withStyles(styles)(GearOptimizer);
