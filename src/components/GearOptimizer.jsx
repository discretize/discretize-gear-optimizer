import React from "react";
import { withStyles, Switch, FormControlLabel, Divider, Button } from "@material-ui/core";

import ClassSelection from "./ClassSelection";
import Traits from "./Traits";
import GW2Select from "./GW2Select";
import Buffs from "./Buffs";
import ARinput from "./ARinput";
import Priorities from "./priorities/Priorities";

import { ConsumableEffect, Item, Skill } from "gw2-ui";
import DamageDistribution from "./slider/DamageDistribution";
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

class GearOptimizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expertMode: true,
      profession: undefined,
      traits: [],
      buffs: {}
    };
  }

  onStartCalculate = (e) => {
    // TODO do calc
    console.log("calculate");
  };

  onCancelCalculate = (e) => {
    // TODO do cancel calc
    console.log("cancel calculate");
  };

  render() {
    const { expertMode, profession, traits } = this.state;
    return (
      <div className={this.props.classes.root}>
        <FormControlLabel
          control={
            <Switch
              checked={expertMode}
              onChange={(e) => this.setState({ ...this.state, expertMode: e.target.checked })}
              name="checked"
              color="primary"
            />
          }
          label="Expert Mode"
        />

        <ClassSelection
          specialization={(prof) => this.setState({ ...this.state, profession: prof })}
        />

        {/* TODO add template selection here */}

        {expertMode &&
          PROFESSIONS.map((p) => (
            <React.Fragment key={"traits_" + p}>
              {profession === p ? (
                <Traits
                  profession={p}
                  traits={(traits) => this.setState({ ...this.state, traits: traits })}
                />
              ) : null}
            </React.Fragment>
          ))}

        {/* TODO add skill selection here */}
        {expertMode && (
          <>
            <GW2Select
              name="Runes"
              label={
                <>
                  <Item id={24836} disableLink disableText disableTooltip /> Rune
                </>
              }
            />
            <GW2Select
              name="Sigil1"
              label={
                <>
                  <Item id={24615} disableLink disableText disableTooltip /> Sigil 1
                </>
              }
            />
            <GW2Select
              name="Sigil2"
              label={
                <>
                  <Item id={24868} disableLink disableText disableTooltip /> Sigil 2
                </>
              }
            />
            <GW2Select name="Nourishment" label={<ConsumableEffect name="Nourishment" />} />
            <GW2Select name="Enhancement" label={<ConsumableEffect name="Enhancement" />} />
          </>
        )}

        {expertMode && (
          <>
            <Divider />
            <Buffs buffs={(buffs) => this.setState({ ...this.state, buffs: buffs })} />
          </>
        )}

        <Divider />
        <ARinput ar={(ar) => this.setState({ ...this.state, ar: ar })} />

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
          className={this.props.classes.button}
          onClick={this.onStartCalculate}
        >
          <Functions className={this.props.classes.icon}></Functions> Calculate
        </Button>
        <Button
          variant="outlined"
          color="primary"
          className={this.props.classes.button}
          onClick={this.onCancelCalculate}
        >
          <Cancel className={this.props.classes.icon}></Cancel> Stop
        </Button>
      </div>
    );
  }
}

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
