import { Box, Grid, Typography, withStyles } from '@material-ui/core';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { graphql, StaticQuery } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getControl, getProfession } from '../state/slices/controlsSlice';
import NavBar from './nav/NavBar';
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
import BossSection from './sections/boss/BossSection';

const useTemplateLoadOnMount = (location) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (location?.search) {
      const searchParams = new URLSearchParams(location.search);
      // const versionString = searchParams.get('version');
      const stateString = searchParams.get('SECRET_ALPHA_RESTORE_STATE_FROM_URL');
      if (stateString) {
        console.log('dispatching state import');
        dispatch({ type: 'IMPORT_STATE', payload: stateString });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

const styles = (theme) => ({
  root: {
    // adds padding on bigger (non smartphone) screens
    [theme.breakpoints.up('sm')]: {
      paddingLeft: 20,
      paddingRight: 20,
    },
  },
});

/**
 * Contains the main UI for the optimizer. All the components are being put together here.
 *
 * @param {{classes, data}} styles and data fetched by graphiql
 */

const MainComponent = ({ classes, data, location }) => {
  // Query variables from redux store that should have a global scope
  const expertMode = useSelector(getControl('expertMode'));
  const profession = useSelector(getProfession);

  const { t } = useTranslation();

  useTemplateLoadOnMount(location);

  const classOrBuildText = t('Select a class or a build template from the menu above!');
  const classText = t('Select a build template from the menu above!');

  return (
    <div className={classes.root}>
      <NavBar
        data={data.templates.list}
        buffPresets={data.presetBuffs.list}
        prioritiesPresets={data.presetAffixes.list}
        distributionPresets={data.presetDistribution.list}
        extrasPresets={data.presetExtras.list}
        traitPresets={data.presetTraits.list}
      />

      {profession === '' && (
        <Typography style={{ marginBottom: 8 }}>
          <ExpandLessIcon />
          <i>{expertMode ? classOrBuildText : classText}</i> <ExpandLessIcon />
        </Typography>
      )}

      <div style={profession === '' ? { opacity: 0.5 } : { opacity: 1.0 }}>
        <Grid container>
          {expertMode ? (
            <>
              <TraitsSection profession={profession} data={data} />

              <SkillsSection profession={profession} />

              <ExtrasSection profession={profession} data={data} />

              <BuffsSection data={data} />

              <ExtraModifiersSection />

              <InfusionsSection data={data} />

              <ForcedSlotsSection />

              <PrioritiesSection data={data} />

              <DistributionSection profession={profession} data={data} />

              <BossSection />
            </>
          ) : (
            <>
              <ExtrasSection profession={profession} data={data} />

              <BuffsSection first data={data} />

              <InfusionsSection data={data} />

              <PrioritiesSection data={data} />

              <BossSection />
            </>
          )}
        </Grid>

        <Controls profession={profession} />

        <ResultTable />
        <Box m={3} />
        <ResultDetails data={data} />
      </div>
    </div>
  );
};

// Wrapper around the main component. GraphQL is queried here.
const GearOptimizer = ({ classes, ...rest }) => {
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
          presetTraits: presetTraits {
            list {
              name
              traits
              skills
              profession
            }
          }
          presetExtras: presetExtras {
            list {
              name
              value
              profession
            }
          }
          presetDistribution: presetDistribution {
            list {
              name
              value
              profession
            }
          }
          templates {
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
                extras
              }
            }
          }
          presetInfusions {
            list {
              name
              value
            }
          }
        }
      `}
      render={(data) => <MainComponent classes={classes} data={data} {...rest} />}
    />
  );
};

export default withStyles(styles)(GearOptimizer);
