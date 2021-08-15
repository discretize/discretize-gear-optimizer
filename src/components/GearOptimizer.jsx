/* eslint-disable no-console */
import { Button, Divider, Typography, withStyles } from '@material-ui/core';
import { Cancel, Functions } from '@material-ui/icons';
import { graphql, StaticQuery } from 'gatsby';
import { ConsumableEffect, Item } from 'gw2-ui-bulk';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getBuffs,
  getControl,
  getExtras,
  getGeneric,
  getProfession,
  getTraitModifiers,
  setModifiers,
} from '../state/gearOptimizerSlice';
import { PROFESSIONS } from '../utils/gw2-data';
import ARinput from './ARinput';
import { LinearProgressWithLabel } from './baseComponents/LinearProgressWithLabel';
import Buffs from './Buffs';
import DamageDistribution from './DamageDistribution';
import ForcedSlots from './ForcedSlots';
import GW2Select from './GW2Select';
import Infusions from './Infusions';
import NavBar from './NavBar';
import Priorities from './priorities/Priorities';
import ResultTable from './ResultTable';
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
  icon: {
    fontSize: 18,
  },
  margin: {
    marginBottom: theme.spacing(2),
  },
});

/**
 * Contains the main UI for the optimizer. All the components are being put together here.
 *
 * @param {classes, data} styles and data fetched by graphiql
 * @returns the main ui
 */
const MainComponent = ({ classes, data }) => {
  const expertMode = useSelector(getControl('expertMode'));
  const profession = useSelector(getProfession);
  const dualWielded = useSelector(getGeneric('weaponType'));
  const progress = useSelector(getControl('percentageDone'));
  const buffs = useSelector(getBuffs);
  const extras = useSelector(getExtras);
  const traitModifiers = useSelector(getTraitModifiers);

  const dispatch = useDispatch();

  function onStartCalculate(e) {
    console.log('calculate');

    const modifiers = [];

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

    data.buffs.list
      .flatMap((d) => d.items)
      .filter((elem) => buffs[elem.id])
      .forEach((elem) =>
        modifiers.push({ id: elem.id, modifiers: elem.modifiers, gw2_id: elem.gw2_id }),
      );

    // map id to modifier. We dont store modifier values in the state!
    const elementalist = data.elementalist.edges[0].node.list.flatMap((el) => el.items);
    // const necromancer = data.necromancer.edges[0].node.list.flatMap((el) => el.items);
    const mesmer = data.mesmer.edges[0].node.list.flatMap((el) => el.items);
    const ranger = data.ranger.edges[0].node.list.flatMap((el) => el.items);
    // const thief = data.thief.edges[0].node.list.flatMap((el) => el.items);
    const engineer = data.engineer.edges[0].node.list.flatMap((el) => el.items);
    const warrior = data.warrior.edges[0].node.list.flatMap((el) => el.items);
    const guardian = data.guardian.edges[0].node.list.flatMap((el) => el.items);
    const revenant = data.revenant.edges[0].node.list.flatMap((el) => el.items);

    const allTraits = [].concat(
      elementalist,
      // necromancer,
      mesmer,
      ranger,
      // thief,
      engineer,
      warrior,
      guardian,
      revenant,
    );

    const matchedTraitModifiers = traitModifiers.map((traitModifier) =>
      allTraits.find((trait) => trait.id === traitModifier.id),
    );

    modifiers.push(...matchedTraitModifiers);
    dispatch(setModifiers(modifiers));

    console.log(modifiers);

    dispatch({
      type: 'START',
    });
  }

  function onCancelCalculate(e) {
    // TODO do cancel calc
    console.log('cancel calculate');
  }

  return (
    <div className={classes.root}>
      <NavBar
        data={data.presetTraits.list}
        buffPresets={data.presetBuffs.list}
        prioritiesPresets={data.presetAffixes.list}
      />

      {/* TODO add template selection here */}
      {profession !== '' && (
        <>
          {expertMode && (
            <>
              <Divider />

              <Typography variant="h5">Traits</Typography>

              {PROFESSIONS.map((p) => p.profession)
                .filter((p) => p === profession)
                .map((p) => {
                  const traitData = data[p.toLocaleLowerCase()].edges[0].node.list.slice(1);
                  const skillData = data[p.toLowerCase()].edges[0].node.list.filter(
                    (d) => d.section === 'Skills',
                  );
                  return (
                    <React.Fragment key={`TaS_${p}`}>
                      <Traits data={traitData.filter((line) => line.id > 0)} />
                      <Divider />
                      <Skills profession={p} data={skillData[0] ? skillData[0].items : []} />
                    </React.Fragment>
                  );
                })}
            </>
          )}

          {expertMode && (
            <div className={classes.margin}>
              <Divider />
              <Typography variant="h5">Runes & Sigils & Food</Typography>

              <GW2Select
                name="Runes"
                label={<Item id={24836} disableLink disableTooltip text="Rune" />}
                data={data.runes.list}
              />
              <GW2Select
                name="Sigil1"
                label={<Item id={24615} disableLink disableTooltip text="Sigil 1" />}
                data={data.sigils.list}
              />
              <GW2Select
                name="Sigil2"
                label={<Item id={24868} disableLink disableTooltip text="Sigil 2" />}
                data={data.sigils.list}
              />
              <br />
              <GW2Select
                name="Nourishment"
                label={<ConsumableEffect name="Nourishment" />}
                data={data.nourishment.list}
              />
              <GW2Select
                name="Enhancement"
                label={<ConsumableEffect name="Enhancement" data={data.sigils.list} />}
                data={data.enhancement.list}
              />
            </div>
          )}

          {expertMode && (
            <>
              <Divider />
              <Buffs data={data.buffs.list} presets={data.presetBuffs.list} />
            </>
          )}

          {expertMode && (
            <>
              <Divider />
              <Infusions />
            </>
          )}

          {expertMode && (
            <>
              <Divider />
              <ForcedSlots dualWielded={dualWielded === 'dualWielded'} />
            </>
          )}

          <Divider />
          <ARinput />

          {expertMode && (
            <>
              <Divider />
              <Priorities presets={data.presetAffixes.list} />
            </>
          )}

          {expertMode && (
            <>
              <Divider />
              <DamageDistribution presets={data.presetDistribution.list} />
            </>
          )}

          <Divider />

          <Button
            variant="outlined"
            color="primary"
            className={classes.button}
            onClick={onStartCalculate}
          >
            <Functions className={classes.icon}></Functions> Calculate
          </Button>
          <Button
            variant="outlined"
            color="primary"
            className={classes.button}
            onClick={onCancelCalculate}
          >
            <Cancel className={classes.icon}></Cancel> Stop
          </Button>

          <Divider />
          <LinearProgressWithLabel value={progress} />

          <ResultTable />
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
