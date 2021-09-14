/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-console */
import React from 'react';
import { Box, Grid, Typography, withStyles } from '@material-ui/core';
import { graphql, StaticQuery } from 'gatsby';

import { useSelector } from 'react-redux';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { getControl, getProfession } from '../state/gearOptimizerSlice';

import ARSection from './sections/ar/ARSection';
import Controls from './sections/controls/Controls';
import SkillsSection from './sections/skills/SkillsSection';
import TraitsSection from './sections/traits/TraitsSection';
import DistributionSection from './sections/distribution/DistributionSection';
import ExtrasSection from './sections/extras/ExtrasSection';
import BuffsSection from './sections/buffs/BuffsSection';
import InfusionsSection from './sections/infusions/InfusionsSection';
import ExtraModifiersSection from './sections/extramodifiers/ExtraModifiersSection';
import ForcedSlotsSection from './sections/forcedslots/ForcedSlotsSection';
import PrioritiesSection from './sections/priorities/PrioritiesSection';

import NavBar from './nav/NavBar';
import ResultDetails from './sections/results/ResultDetails';
import ResultTable from './sections/results/ResultTable';

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
              {profession !== '' && <TraitsSection profession={profession} data={data} />}

              <SkillsSection profession={profession} data={data} />

              <ExtrasSection data={data} />

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

        <Controls classes={classes} profession={profession} data={data} />

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
          warrior: allWarrior {
            edges {
              node {
                list {
                  section
                  id
                  items {
                    gw2_id
                    subText
                    text
                    id
                    modifiers
                    minor
                  }
                }
              }
            }
          }
          revenant: allRevenant {
            edges {
              node {
                list {
                  section
                  id
                  items {
                    gw2_id
                    subText
                    text
                    id
                    modifiers
                    minor
                  }
                }
              }
            }
          }
          guardian: allGuardian {
            edges {
              node {
                list {
                  section
                  id
                  items {
                    gw2_id
                    subText
                    text
                    id
                    modifiers
                    minor
                  }
                }
              }
            }
          }
          ranger: allRanger {
            edges {
              node {
                list {
                  section
                  id
                  items {
                    gw2_id
                    subText
                    text
                    id
                    modifiers
                    minor
                  }
                }
              }
            }
          }
          engineer: allEngineer {
            edges {
              node {
                list {
                  section
                  id
                  items {
                    gw2_id
                    subText
                    text
                    id
                    modifiers
                    minor
                  }
                }
              }
            }
          }
          elementalist: allElementalist {
            edges {
              node {
                list {
                  section
                  id
                  items {
                    gw2_id
                    subText
                    text
                    id
                    modifiers
                    minor
                  }
                }
              }
            }
          }
          mesmer: allMesmer {
            edges {
              node {
                list {
                  section
                  id
                  items {
                    gw2_id
                    subText
                    text
                    id
                    modifiers
                    minor
                  }
                }
              }
            }
          }
          necromancer: allNecromancer {
            edges {
              node {
                list {
                  section
                  id
                  items {
                    gw2_id
                    subText
                    text
                    id
                    modifiers
                    minor
                  }
                }
              }
            }
          }
          thief: allThief {
            edges {
              node {
                list {
                  section
                  id
                  items {
                    gw2_id
                    subText
                    text
                    id
                    modifiers
                    minor
                  }
                }
              }
            }
          }
          runes: runes {
            id
            list {
              items {
                text
                gw2_id
                subText
                id
                modifiers
              }
              section
            }
          }
          sigils: sigils {
            id
            list {
              items {
                text
                gw2_id
                subText
                id
                modifiers
              }
              section
            }
          }
          nourishment: food {
            id
            list {
              items {
                text
                gw2_id
                subText
                id
                modifiers
              }
              section
            }
          }
          enhancement: utility {
            id
            list {
              items {
                text
                gw2_id
                id
                modifiers
              }
              section
            }
          }
          buffs: buffs {
            list {
              section
              items {
                text
                modifiers
                gw2_id
                subText
                id
                type
                text
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
      render={(data) => <MainComponent classes={classes} data={data} />}
    />
  );
};

export default withStyles(styles)(GearOptimizer);
