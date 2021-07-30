import { Button, Divider, Typography, withStyles } from "@material-ui/core";
import { Cancel, Functions } from "@material-ui/icons";
import { graphql, StaticQuery } from "gatsby";
import { ConsumableEffect, Item } from "gw2-ui";
import React from "react";
import { useSelector } from "react-redux";
import {
  getDistributionNew,
  getDistributionOld,
  getGeneric,
  getModifiers,
  getProfession
} from "../state/gearOptimizerSlice";
import { PROFESSIONS } from "../utils/gw2-data";
import ARinput from "./ARinput";
import Buffs from "./Buffs";
import DamageDistribution from "./DamageDistribution";
import ForcedSlots from "./ForcedSlots";
import GW2Select from "./GW2Select";
import Infusions from "./Infusions";
import NavBar from "./NavBar";
import Priorities from "./priorities/Priorities";
import Skills from "./Skills";
import Traits from "./Traits";

const styles = (theme) => ({
  root: {
    // adds padding on bigger (non smartphone) screens
    [theme.breakpoints.up("sm")]: {
      paddingLeft: 20,
      paddingRight: 20
    }
  },
  button: {
    margin: theme.spacing(1)
  },
  icon: {
    fontSize: 18
  },
  margin: {
    marginBottom: theme.spacing(2)
  }
});

/**
 * Contains the main UI for the optimizer. All the components are being put together here.
 *
 * @param {classes, data} styles and data fetched by graphiql
 * @returns the main ui
 */
const MainComponent = ({ classes, data }) => {
  const expertMode = useSelector(getGeneric("expertMode"));
  const profession = useSelector(getProfession);
  const dualWielded = useSelector(getGeneric("weaponType"));

  function onStartCalculate(e) {
    // TODO do calc
    console.log("calculate");
    const input = {
      modifiers: useSelector(getModifiers),
      tags: undefined,
      profession: useSelector(getProfession),
      weapontype: useSelector(getGeneric("weaponType")),
      affixes: useSelector(getGeneric("affixes")),
      forcedAffixes: useSelector(getGeneric("forcedSlots")),
      rankby: useSelector(getGeneric("optimizeFor")),
      minBoonDuration: useSelector(getGeneric("minBoonDuration")),
      minHealingPower: useSelector(getGeneric("minHealingPower")),
      minToughness: useSelector(getGeneric("minToughness")),
      maxToughness: useSelector(getGeneric("maxToughness")),
      maxResults: 50, // TODO MAX RESULTS
      primaryInfusion: useSelector(getGeneric("primaryInfusion")),
      secondaryInfusion: useSelector(getGeneric("secondaryInfusion")),
      primaryMaxInfusions: useSelector(getGeneric("primaryMaxInfusions")),
      secondaryMaxInfusions: useSelector(getGeneric("secondaryMaxInfusions")),
      percentDistribution: useSelector(getDistributionOld),
      distribution: useSelector(getDistributionNew)
    };
  }

  function onCancelCalculate(e) {
    // TODO do cancel calc
    console.log("cancel calculate");
  }

  return (
    <div className={classes.root}>
      <NavBar />

      {/* TODO add template selection here */}
      {profession !== "" && (
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
                    (d) => d.section === "Skills"
                  );
                  return (
                    <React.Fragment key={"TaS_" + p}>
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
              <ForcedSlots dualWielded={dualWielded === "dualWielded"} />
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
        }
      `}
      render={(data) => <MainComponent classes={classes} data={data} />}
    />
  );
};

export default withStyles(styles)(GearOptimizer);
