import React from "react";
import {
  Input,
  FormControlLabel,
  FormGroup,
  Checkbox,
  Select,
  withStyles,
  Typography
} from "@material-ui/core";

import { Item, Attribute } from "gw2-ui";

const styles = (theme) => ({
  text: {
    color: "#ddd !important"
  },
  checkbox: {
    width: 130
  }
});

export const AFFIXES = [
  "Berserker",
  "Zealot",
  "Soldier",
  "Forsaken",
  "Valkyrie",
  "Harrier",
  "Paladin",
  "Commander",
  "Demolisher",
  "Swashbuckler",
  "Marauder",
  "Avatar",
  "Destroyer",
  "Vigilant",
  "Crusader",
  "Wanderer",
  "Diviner",
  "Wizard",
  "Viper",
  "Grieving",
  "Sage",
  "Marshal",
  "Captain",
  "Rampager",
  "Assassin",
  "Seraph",
  "Knight",
  "Cavalier",
  "Nomad",
  "Settler",
  "Giver",
  "Trailblazer",
  "Minstrel",
  "Giver",
  "Sentinel",
  "Shaman",
  "Sinister",
  "Giver",
  "Carrion",
  "Rabid",
  "Dire",
  "Apostate",
  "Plaguedoctor",
  "Bringer",
  "Cleric",
  "Magi",
  "Apothecary",
  "Celestial"
];

class ARinput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      affixes: []
    };
  }

  handleChange = (name) => (event) => {
    let newSelected = this.state.affixes;

    if (event.target.checked) {
      newSelected.push(name);
    } else {
      newSelected = newSelected.filter((o) => o !== name);
    }
    this.setState({ affixes: newSelected });
  };

  render() {
    const { affixes } = this.state;

    return (
      <>
        <FormGroup row>
          {AFFIXES.map((a) => (
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.checkedA}
                  value={a}
                  color="primary"
                  onChange={this.handleChange(a)}
                />
              }
              className={this.props.classes.checkbox}
              label={
                <Item
                  stat={a}
                  type="Ring"
                  disableLink
                  text={a}
                  className={this.props.classes.text}
                />
              }
            />
          ))}
        </FormGroup>
      </>
    );
  }
}

export default withStyles(styles)(ARinput);
