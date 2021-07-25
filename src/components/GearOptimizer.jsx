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

const Selects = () => {
  return (
    <StaticQuery
      query={graphql`
        query myEpicQuery {
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
      render={(data) => (
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
      )}
    />
  );
};

const GearOptimizer = ({ classes }) => {
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

      {expertMode &&
        PROFESSIONS.filter((p) => p === profession).map((p) => <Traits profession={p} />)}

      {/* TODO add skill selection here */}

      {expertMode && (
        <>
          <Divider />
          <Selects />
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
    </div>
  );
};

export const PROFESSIONS = [
  "Warrior",
  "Revenant",
  "Guardian",
  "Ranger",
  "Engineer",
  "Elementalist",
  "Mesmer"
];

export default withStyles(styles)(GearOptimizer);
