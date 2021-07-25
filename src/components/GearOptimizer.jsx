import React, { useState } from "react";
import { StaticQuery, graphql } from "gatsby";
import { withStyles, Switch, FormControlLabel, Divider, Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { getProfession } from "../state/gearOptimizerSlice";

import ClassSelection from "./ClassSelection";
import Traits from "./Traits";
import GW2Select from "./GW2Select";
import Buffs from "./Buffs";
import ARinput from "./ARinput";
import Skills from "./Skills";
import Priorities from "./priorities/Priorities";

import { ConsumableEffect, Item, Skill } from "gw2-ui";
import DamageDistribution from "./DamageDistribution";
import { Cancel, Functions } from "@material-ui/icons";

const styles = (theme) => ({
  root: {
    // adds padding on bigger (non smartphone) screens
    [theme.breakpoints.up("sm")]: {
      paddingLeft: 20,
      paddingRight: 20
    }
  },
  button: {
    margin: theme.spacing.unit
  },
  icon: {
    fontSize: 18
  }
});

export const PROFESSIONS = [
  "Warrior",
  "Revenant",
  "Guardian",
  "Ranger",
  "Engineer",
  "Elementalist",
  "Mesmer"
];

/**
 * Contains the 5 Selects: Rune, Sigil1, Sigil2, Nourishment and Enhancement.
 *
 * @param {data} data from graphiql
 * @returns five selects
 */
const Selects = (data) => {
  return (
    <>
      <GW2Select
        name="Runes"
        label={
          <>
            <Item id={24836} disableLink disableText disableTooltip /> Rune
          </>
        }
        data={data.runes.list}
      />
      <GW2Select
        name="Sigil1"
        label={
          <>
            <Item id={24615} disableLink disableText disableTooltip /> Sigil 1
          </>
        }
        data={data.sigils.list}
      />
      <GW2Select
        name="Sigil2"
        label={
          <>
            <Item id={24868} disableLink disableText disableTooltip /> Sigil 2
          </>
        }
        data={data.sigils.list}
      />
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
    </>
  );
};

/**
 * Contains the main UI for the optimizer. All the components are being put together here.
 *
 * @param {classes, data} styles and data fetched by graphiql
 * @returns the main ui
 */
const MainComponent = ({ classes, data }) => {
  const [expertMode, setExpertMode] = useState(true);
  const profession = useSelector(getProfession);

  function onStartCalculate(e) {
    // TODO do calc
    console.log("calculate");
  }

  function onCancelCalculate(e) {
    // TODO do cancel calc
    console.log("cancel calculate");
  }

  return (
    <div className={classes.root}>
      <FormControlLabel
        control={
          <Switch
            checked={expertMode}
            onChange={(e) => setExpertMode(e.target.checked)}
            name="checked"
            color="primary"
          />
        }
        label="Expert Mode"
      />

      <ClassSelection />

      {/* TODO add template selection here */}
      {profession !== "" && (
        <>
          {expertMode &&
            PROFESSIONS.filter((p) => p === profession).map((p) => {
              const skillData = data[p.toLowerCase()].edges[0].node.list.filter(
                (d) => d.section === "Skills"
              );
              return (
                <React.Fragment key={"TaS_" + p}>
                  <Traits profession={p} />
                  <Skills profession={p} data={skillData[0] ? skillData[0].items : []} />
                </React.Fragment>
              );
            })}

          {expertMode && (
            <>
              <Divider />
              {Selects(data)}
            </>
          )}

          {expertMode && (
            <>
              <Divider />
              <Buffs />
            </>
          )}

          <Divider />
          <ARinput />

          {expertMode && (
            <>
              <Divider />
              <Priorities />
            </>
          )}

          {expertMode && (
            <>
              <Divider />
              <DamageDistribution />
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
                  items {
                    gw2_id
                    subText
                    text
                    id
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
                  items {
                    gw2_id
                    subText
                    text
                    id
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
                  items {
                    gw2_id
                    subText
                    text
                    id
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
                  items {
                    gw2_id
                    subText
                    text
                    id
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
                  items {
                    gw2_id
                    subText
                    text
                    id
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
                  items {
                    gw2_id
                    subText
                    text
                    id
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
                  items {
                    gw2_id
                    subText
                    text
                    id
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
              }
              section
            }
          }
        }
      `}
      render={(data) => <MainComponent classes={classes} data={data} />}
    />
  );
};

export default withStyles(styles)(GearOptimizer);
