/* eslint-disable no-console */
import {
  Box,
  Button,
  Chip,
  FormControlLabel,
  Grid,
  Switch,
  Typography,
  withStyles,
} from '@material-ui/core';
import Cancel from '@material-ui/icons/Cancel';
import classNames from 'classnames';
import { graphql, StaticQuery } from 'gatsby';
import { Attribute, ConsumableEffect, Item } from 'gw2-ui-bulk';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import {
  changeAllDistributionsNew,
  changeAllDistributionsOld,
  changeAllTextBoxes,
  replaceBuffs,
  changeControl,
  changeDistributionVersion,
  changePriority,
  getControl,
  getDistributionVersion,
  getProfession,
  setModifiers,
} from '../state/gearOptimizerSlice';
import { ABORTED, RUNNING, SUCCESS, WAITING } from '../state/optimizer/status';
import { PROFESSIONS } from '../utils/gw2-data';
import { firstUppercase } from '../utils/usefulFunctions';
import ARinput from './sections/ARinput';
import ProgressIcon from './baseComponents/ProgressIcon';
import Presets from './baseComponents/Presets';
import Section from './baseComponents/Section';
import Buffs from './sections/Buffs';
import DamageDistribution from './sections/DamageDistribution';
import ExtraModifiers from './sections/ExtraModifiers';
import ForcedSlots from './sections/ForcedSlots';
import GW2Select from './sections/GW2Select';
import Infusions from './sections/Infusions';
import NavBar from './nav/NavBar';
import Priorities from './sections/Priorities';
import ResultDetails from './sections/results/ResultDetails';
import ResultTable from './sections/results/ResultTable';
import Skills from './sections/Skills';
import Traits from './sections/Traits';

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

const TraitsSection = ({ profession, data }) => {
  return (
    <Section
      first
      title="Traits"
      helpText="Select your traits here. Remember to also select the corresponding checkbox
                    below each traitline. This is necessary, because many traits grant conditional
                    bonus stats and you might get different results with different conditional
                    traits."
      content={
        <Traits
          data={data[profession.toLowerCase()].edges[0].node.list
            .slice(1)
            .filter((line) => line.id > 0)}
        />
      }
    />
  );
};
const TraitsSectionMemo = React.memo(TraitsSection);

const DistributionSection = ({ profession, data }) => {
  const dispatch = useDispatch();
  const distributionVersion = useSelector(getDistributionVersion);

  const distributionPresets =
    profession !== ''
      ? data.presetDistribution.list.filter(
          (preset) =>
            PROFESSIONS.find((p) => p.profession === profession).eliteSpecializations.includes(
              preset.profession,
            ) || preset.profession === null,
        )
      : null;

  const onTemplateClickDistribution = React.useCallback(
    (index) => (event) => {
      const state = JSON.parse(distributionPresets[index].value);

      dispatch(changeAllDistributionsOld(state.values1));
      dispatch(changeAllDistributionsNew(state.values2));
      dispatch(changeAllTextBoxes(state.values2));
    },
    [dispatch, distributionPresets],
  );

  return (
    <Section
      title="Skill Coefficients"
      content={<DamageDistribution />}
      extraInfo={
        <>
          <FormControlLabel
            control={
              <Switch
                checked={distributionVersion === 1}
                onChange={(e) => dispatch(changeDistributionVersion(e.target.checked ? 1 : 2))}
                name="checked"
                color="primary"
              />
            }
            label="Switch to %-wise damage distribution"
          />

          {profession !== '' && (
            <Presets data={distributionPresets} handleClick={onTemplateClickDistribution} />
          )}
        </>
      }
      helpText={
        distributionVersion === 2 ? (
          <>
            <p>
              This data represents your rotation. If we don't supply a template for a build, you can
              move these sliders until the results match a golem log, or calculate them manually.
            </p>
            <p>
              To do so, calculate and sum the [power coefficient * weapon strength] and [condition
              stacks * duration] of each skill you use, then divide by total time.
            </p>
            <p>For more information, ask in Discord!</p>
          </>
        ) : (
          <>
            <p>
              This data represents your rotation. If we don't supply a template for a build, you can
              move these sliders until the results match a golem log, or calculate them manually.
            </p>
            <p>
              To do so, perform your rotation on a golem with no gear, traits, or other modifiers,
              then enter the distribution here.
            </p>
          </>
        )
      }
    />
  );
};

const SkillsSection = ({ profession, data }) => {
  const skillsData = profession
    ? data[profession.toLowerCase()].edges[0].node.list.find((d) => d.section === 'Skills')
    : null;

  return skillsData ? (
    <Section title="Skills" content={<Skills profession={profession} data={skillsData.items} />} />
  ) : null;
};

const RuneSigilFoodSection = ({ data }) => {
  return (
    <Section
      title="Runes & Sigils & Food"
      content={
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <GW2Select
              name="Sigil1"
              label={<Item id={24615} disableLink disableTooltip text="Sigil 1" />}
              data={data.sigils.list}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <GW2Select
              name="Sigil2"
              label={<Item id={24868} disableLink disableTooltip text="Sigil 2" />}
              data={data.sigils.list}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <GW2Select
              name="Runes"
              label={<Item id={24836} disableLink disableTooltip text="Rune" />}
              data={data.runes.list}
            />
          </Grid>
          <Grid item md={6} />
          <Grid item xs={12} md={6}>
            <GW2Select
              name="Nourishment"
              label={<ConsumableEffect name="Nourishment" />}
              data={data.nourishment.list}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <GW2Select
              name="Enhancement"
              label={<ConsumableEffect name="Enhancement" data={data.sigils.list} />}
              data={data.enhancement.list}
            />
          </Grid>
        </Grid>
      }
    />
  );
};
const RuneSigilFoodSectionMemo = React.memo(RuneSigilFoodSection);

const BuffsSection = ({ data }) => {
  const dispatch = useDispatch();

  const handleTemplateClickBuffs = React.useCallback(
    (index) => (event) => {
      const state = JSON.parse(data.presetBuffs.list[index].value);
      dispatch(replaceBuffs(state));
    },
    [data.presetBuffs.list, dispatch],
  );

  return (
    <Section
      title="Buffs & Boons"
      extraInfo={<Presets data={data.presetBuffs.list} handleClick={handleTemplateClickBuffs} />}
      content={<Buffs data={data.buffs.list} />}
    />
  );
};
const BuffsSectionMemo = React.memo(BuffsSection);

const InfusionsSection = () => {
  return (
    <Section
      title="Stat Infusions"
      content={<Infusions />}
      helpText={
        <>Select up to 2 types of stat infusions, and optionally limit the quantity allowed.</>
      }
    />
  );
};
const InfusionsSectionMemo = React.memo(InfusionsSection);

const ExtraModifiersSection = () => {
  return (
    <Section
      title="Extra Modifiers"
      helpText={
        <>
          Allows adding arbitrary extra modifiers. The textbox expects valid JSON formatting. For
          multiple modifiers please use a list. For more information visit the github repository.
        </>
      }
      content={<ExtraModifiers />}
    />
  );
};
const ExtraModifiersSectionMemo = React.memo(ExtraModifiersSection);

const ForcedSlotsSection = () => {
  return <Section title="Forced Slots" content={<ForcedSlots />} />;
};
const ForcedSlotsSectionMemo = React.memo(ForcedSlotsSection);

const PrioritiesSection = ({ data }) => {
  const dispatch = useDispatch();

  const handleTemplateClickPriorities = React.useCallback(
    (index) => (event) => {
      const state = JSON.parse(data.presetAffixes.list[index].value);
      Object.keys(state).forEach((key) => dispatch(changePriority({ key, value: state[key] })));
    },
    [data.presetAffixes.list, dispatch],
  );

  return (
    <Section
      title="Priorities"
      content={<Priorities />}
      extraInfo={
        <Presets data={data.presetAffixes.list} handleClick={handleTemplateClickPriorities} />
      }
    />
  );
};
const PrioritiesSectionMemo = React.memo(PrioritiesSection);

const ARSection = ({ first }) => {
  return (
    <Section
      title={
        <>
          <Attribute name="Agony Resistance" disableLink disableText /> Agony Resistance
        </>
      }
      first={first}
      helpText="Adds 150% of your Agony Resistance to Precision, Toughness, and Concentration."
      content={<ARinput />}
    />
  );
};
const ARSectionMemo = React.memo(ARSection);

const ControlsBox = ({ classes, profession, data }) => {
  const dispatch = useDispatch();

  const status = useSelector(getControl('status'));

  const onStartCalculate = React.useCallback(
    (e) => {
      console.log('calculate');

      // pass data from GraphQL
      dispatch(setModifiers(data));

      dispatch(changeControl({ key: 'status', value: RUNNING }));
      dispatch({
        type: 'START',
      });
    },
    [data, dispatch],
  );

  const onCancelCalculate = React.useCallback(
    (e) => {
      dispatch({
        type: 'CANCEL',
      });
      dispatch(changeControl({ key: 'status', value: ABORTED }));
      console.log('cancel button pressed');
    },
    [dispatch],
  );

  return (
    <Box display="flex" flexWrap="wrap">
      <Box>
        <Button
          variant="outlined"
          color="primary"
          className={classes.button}
          onClick={onStartCalculate}
          classes={{ label: classes.label }}
          disabled={status === RUNNING || profession === ''}
        >
          <ProgressIcon />
          <Typography>Calculate</Typography>
        </Button>
      </Box>
      <Box flexGrow={1}>
        <Button
          variant="outlined"
          color="primary"
          className={classes.button}
          onClick={onCancelCalculate}
          disabled={status !== RUNNING}
        >
          <Cancel className={classNames(classes.icon)}></Cancel>
          <Typography style={{ marginLeft: 8 }}>Abort</Typography>
        </Button>
      </Box>
      <Box alignSelf="center">
        <Chip
          label={
            <>
              Status: {firstUppercase(status)}{' '}
              {status === SUCCESS ? (
                <DoneAllIcon fontSize="small" classes={{ root: classes.chipIcon }} />
              ) : status === WAITING || status === RUNNING ? (
                <HourglassEmptyIcon fontSize="small" classes={{ root: classes.chipIcon }} />
              ) : null}
            </>
          }
          color={status !== ABORTED ? 'primary' : 'secondary'}
        />
      </Box>
    </Box>
  );
};

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
              {profession !== '' && <TraitsSectionMemo profession={profession} data={data} />}

              <SkillsSection profession={profession} data={data} />

              <RuneSigilFoodSectionMemo data={data} />

              <BuffsSectionMemo data={data} />

              <ExtraModifiersSectionMemo />

              <InfusionsSectionMemo />

              <ForcedSlotsSectionMemo />

              <PrioritiesSectionMemo data={data} />

              <DistributionSection profession={profession} data={data} />

              <ARSectionMemo />
            </>
          ) : (
            <>
              <InfusionsSectionMemo first />

              <PrioritiesSectionMemo data={data} />

              <ARSectionMemo />
            </>
          )}
        </Grid>

        <ControlsBox classes={classes} profession={profession} data={data} />

        <ResultTable />
        <Box m={3} />
        <ResultDetails data={data} buffData={data.buffs.list} />
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
