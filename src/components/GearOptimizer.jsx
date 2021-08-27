/* eslint-disable no-console */
import {
  Box,
  Button,
  FormControlLabel,
  Grid,
  Switch,
  Typography,
  withStyles,
} from '@material-ui/core';
import { Cancel } from '@material-ui/icons';
import EqualizerRoundedIcon from '@material-ui/icons/EqualizerRounded';
import classNames from 'classnames';
import { graphql, StaticQuery } from 'gatsby';
import { Attribute, ConsumableEffect, Item } from 'gw2-ui-bulk';
import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import {
  changeAllDistributionsNew,
  changeAllDistributionsOld,
  changeAllTextBoxes,
  changeBuff,
  changeControl,
  changeDistributionVersion,
  changePriority,
  getControl,
  getDistributionVersion,
  getProfession,
  setModifiers,
} from '../state/gearOptimizerSlice';
import { PROFESSIONS } from '../utils/gw2-data';
import ARinput from './ARinput';
import CircularProgressWithLabel from './baseComponents/CircularProgressWithLabel';
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
  const store = useStore();
  const dispatch = useDispatch();

  // Query variables from redux store that should have a global scope
  const expertMode = useSelector(getControl('expertMode'));
  const profession = useSelector(getProfession);
  const progress = useSelector(getControl('percentageDone'));
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

  function onStartCalculate(e) {
    console.log('calculate');
    const { extras, buffs, skills, traits, extraModifiers } = store.getState().gearOptimizer;

    // all selected modifiers will be collected in this array
    const modifiers = [];

    // Applies runes, sigils, food modifiers
    const extrasData = [
      { id: 'Runes', list: data.runes.list },
      { id: 'Sigil1', list: data.sigils.list },
      { id: 'Sigil2', list: data.sigils.list },
      { id: 'Enhancement', list: data.enhancement.list },
      { id: 'Nourishment', list: data.nourishment.list },
    ];
    extrasData
      .filter((extra) => extras[extra.id] !== '')
      .forEach((extra) => {
        modifiers.push({
          id: extras[extra.id],
          modifiers: extra.list.flatMap((d) => d.items).find((a) => a.id === extras[extra.id])
            .modifiers,
          source: extra.id,
        });
      });

    // Apply "buffs" modifiers
    data.buffs.list
      .flatMap((d) => d.items)
      .filter((elem) => buffs[elem.id])
      .forEach((elem) =>
        modifiers.push({ id: elem.id, modifiers: elem.modifiers, gw2_id: elem.gw2_id }),
      );

    // map id to modifier. We dont store modifier values in the state!
    const allSkillsAndTraits = data[profession.toLowerCase()].edges[0].node.list.flatMap(
      (el) => el.items,
    );
    const matchedTraitModifiers = traits.modifiers.map((traitModifier) =>
      allSkillsAndTraits.filter((t) => t !== null).find((trait) => trait.id === traitModifier.id),
    );
    const matchedSkillModifiers = skills.map((skill) =>
      allSkillsAndTraits.filter((t) => t !== null).find((s) => s.id === skill),
    );
    modifiers.push(...matchedTraitModifiers);
    modifiers.push(...matchedSkillModifiers);

    // Apply extra (manual) modifiers
    if (extraModifiers.length > 0) {
      modifiers.push(
        ...JSON.parse(extraModifiers).map((modi, index) => {
          return { id: `extraModifier${index}`, modifiers: JSON.stringify(modi) };
        }),
      );
    }

    dispatch(setModifiers(modifiers));

    dispatch({
      type: 'START',
    });
  }

  function onCancelCalculate(e) {
    dispatch({
      type: 'CANCEL',
    });
    dispatch(changeControl({ key: 'percentageDone', value: 0 }));
    console.log('cancel button pressed');
  }

  const handleTemplateClickBuffs = (index) => (event) => {
    // set all the buffs to disabled
    Object.keys(store.getState().gearOptimizer.buffs).forEach((elem) =>
      dispatch(changeBuff({ key: elem, value: false })),
    );

    // apply the preset
    const state = JSON.parse(data.presetBuffs.list[index].value);
    Object.keys(state).forEach((key) => dispatch(changeBuff({ key, value: state[key] })));
  };

  const handleTemplateClickPriorities = (index) => (event) => {
    const state = JSON.parse(data.presetAffixes.list[index].value);
    Object.keys(state).forEach((key) => dispatch(changePriority({ key, value: state[key] })));
  };

  const onTemplateClickDistribution = (index) => (event) => {
    const state = JSON.parse(distributionPresets[index].value);

    dispatch(changeAllDistributionsOld(state.values1));
    dispatch(changeAllDistributionsNew(state.values2));
    dispatch(changeAllTextBoxes(state.values2));
  };

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

          <Button
            variant="outlined"
            color="primary"
            className={classes.button}
            onClick={onStartCalculate}
            classes={{ label: classes.label }}
            disabled={progress < 100 && progress !== 0}
          >
            {progress < 100 && progress !== 0 ? (
              <CircularProgressWithLabel variant="determinate" value={progress} />
            ) : (
              <EqualizerRoundedIcon className={classes.icon}></EqualizerRoundedIcon>
            )}
            <Typography>Calculate</Typography>
          </Button>
          <Button
            variant="outlined"
            color="primary"
            className={classes.button}
            onClick={onCancelCalculate}
          >
            <Cancel className={classNames(classes.icon)}></Cancel>
            <Typography style={{ marginLeft: 8 }}>Abort</Typography>
          </Button>

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
          thiefPicture: file(relativePath: { eq: "professions/thief.png" }) {
            childImageSharp {
              gatsbyImageData(width: 2000)
            }
          }
          guardianPicture: file(relativePath: { eq: "professions/guardian.png" }) {
            childImageSharp {
              gatsbyImageData(width: 2000)
            }
          }
          warriorPicture: file(relativePath: { eq: "professions/warrior.png" }) {
            childImageSharp {
              gatsbyImageData(width: 2000)
            }
          }
          revenantPicture: file(relativePath: { eq: "professions/revenant.png" }) {
            childImageSharp {
              gatsbyImageData(width: 2000)
            }
          }
          engineerPicture: file(relativePath: { eq: "professions/engineer.png" }) {
            childImageSharp {
              gatsbyImageData(width: 2000)
            }
          }
          rangerPicture: file(relativePath: { eq: "professions/ranger.png" }) {
            childImageSharp {
              gatsbyImageData(width: 2000)
            }
          }
          elementalistPicture: file(relativePath: { eq: "professions/elementalist.png" }) {
            childImageSharp {
              gatsbyImageData(width: 2000)
            }
          }
          necromancerPicture: file(relativePath: { eq: "professions/necromancer.png" }) {
            childImageSharp {
              gatsbyImageData(width: 2000)
            }
          }
          mesmerPicture: file(relativePath: { eq: "professions/mesmer.png" }) {
            childImageSharp {
              gatsbyImageData(width: 2000)
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
