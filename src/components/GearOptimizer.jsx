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
import { Cancel } from '@material-ui/icons';
import classNames from 'classnames';
import { graphql, StaticQuery } from 'gatsby';
import { Attribute, ConsumableEffect, Item } from 'gw2-ui-bulk';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import DoneAllIcon from '@material-ui/icons/DoneAll';
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
import ARinput from './ARinput';
import ProgressIcon from './ProgressIcon';
import Presets from './baseComponents/Presets';
import Section from './baseComponents/Section';
import Buffs from './Buffs';
import DamageDistribution from './DamageDistribution';
import ExtraModifiers from './ExtraModifiers';
import ForcedSlots from './ForcedSlots';
import GW2Select from './GW2Select';
import Infusions from './Infusions';
import NavBar from './NavBar';
import Priorities from './priorities/Priorities';
import ResultDetails from './results/ResultDetails';
import ResultTable from './results/ResultTable';
import Skills from './Skills';
import Traits from './Traits';

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
});

/**
 * Contains the main UI for the optimizer. All the components are being put together here.
 *
 * @param {classes, data} styles and data fetched by graphiql
 * @returns the main ui
 */
const MainComponent = ({ classes, data }) => {
  const dispatch = useDispatch();

  // Query variables from redux store that should have a global scope
  const expertMode = useSelector(getControl('expertMode'));
  const profession = useSelector(getProfession);
  const status = useSelector(getControl('status'));
  const distributionVersion = useSelector(getDistributionVersion);

  const skillsData = profession
    ? data[profession.toLowerCase()].edges[0].node.list.find((d) => d.section === 'Skills')
    : null;

  const distributionPresets =
    profession !== ''
      ? data.presetDistribution.list.filter(
          (preset) =>
            PROFESSIONS.find((p) => p.profession === profession).eliteSpecializations.includes(
              preset.profession,
            ) || preset.profession === null,
        )
      : null;

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

  const handleTemplateClickBuffs = React.useCallback(
    (index) => (event) => {
      const state = JSON.parse(data.presetBuffs.list[index].value);
      dispatch(replaceBuffs(state));
    },
    [data.presetBuffs.list, dispatch],
  );

  const handleTemplateClickPriorities = React.useCallback(
    (index) => (event) => {
      const state = JSON.parse(data.presetAffixes.list[index].value);
      Object.keys(state).forEach((key) => dispatch(changePriority({ key, value: state[key] })));
    },
    [data.presetAffixes.list, dispatch],
  );

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
    <div className={classes.root}>
      <NavBar
        data={data.presetTraits.list}
        buffPresets={data.presetBuffs.list}
        prioritiesPresets={data.presetAffixes.list}
      />

      {profession !== '' && (
        <>
          <Grid container>
            {expertMode && (
              <>
                <Section
                  first
                  title="Traits"
                  helpText="Select your traits here. Remember to also select the corresponding checkbox
                    below each traitline. This is necessary, because many traits grant conditionally
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

                {skillsData ? (
                  <Section
                    title="Skills"
                    content={<Skills profession={profession} data={skillsData.items} />}
                  />
                ) : null}

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

                <Section
                  title="Buffs & Boons"
                  extraInfo={
                    <Presets data={data.presetBuffs.list} handleClick={handleTemplateClickBuffs} />
                  }
                  content={<Buffs data={data.buffs.list} />}
                />

                <Section
                  title="Extra Modifiers"
                  helpText={
                    <>
                      Allows adding arbitrary extra modifiers. The textbox expects valid JSON
                      formatting. For multiple modifiers please use a list. For more information
                      visit the github repository.
                    </>
                  }
                  content={<ExtraModifiers />}
                />

                <Section title="Stat Infusions" content={<Infusions />} />

                <Section title="Forced Slots" content={<ForcedSlots />} />

                <Section
                  title="Priorities"
                  content={<Priorities />}
                  extraInfo={
                    <Presets
                      data={data.presetAffixes.list}
                      handleClick={handleTemplateClickPriorities}
                    />
                  }
                />
                <Section
                  title="Damage Distribution"
                  content={<DamageDistribution />}
                  extraInfo={
                    <>
                      <FormControlLabel
                        control={
                          <Switch
                            checked={distributionVersion === 1}
                            onChange={(e) =>
                              dispatch(changeDistributionVersion(e.target.checked ? 1 : 2))
                            }
                            name="checked"
                            color="primary"
                          />
                        }
                        label="Switch to %-wise damage distribution"
                      />

                      <Presets
                        data={distributionPresets}
                        handleClick={onTemplateClickDistribution}
                      />
                    </>
                  }
                />
              </>
            )}

            <Section
              title={
                <>
                  <Attribute name="Agony Resistance" disableLink disableText /> Agony Resistance
                </>
              }
              first={!expertMode}
              helpText="Adds 150% of your Agony Resistance to Precision, Toughness and Concentration."
              content={<ARinput />}
            />
          </Grid>

          <Box display="flex">
            <Box>
              <Button
                variant="outlined"
                color="primary"
                className={classes.button}
                onClick={onStartCalculate}
                classes={{ label: classes.label }}
                disabled={status === RUNNING}
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
                      <DoneAllIcon fontSize="small" />
                    ) : status === WAITING || status === RUNNING ? (
                      <HourglassEmptyIcon fontSize="small" />
                    ) : null}
                  </>
                }
                color={status !== ABORTED ? 'primary' : 'secondary'}
                className={status === SUCCESS ? { color: 'green' } : { color: 'blue' }}
              />
            </Box>
          </Box>

          <ResultTable />
          <Box m={3} />
          <ResultDetails data={data} buffData={data.buffs.list} />
        </>
      )}
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
