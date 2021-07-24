import React, { useState } from "react";
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
import { useSelector, useDispatch } from "react-redux";
import { changeGeneric, getGeneric } from "../../state/gearOptimizerSlice";

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

const Affixes = ({ classes }) => {
  const dispatch = useDispatch();
  const affixes = useSelector(getGeneric("affixes"));

  const handleChange = (name) => (event) => {
    let selectedNew = [...affixes];
    if (event.target.checked) {
      selectedNew.push(name);
    } else {
      selectedNew = selectedNew.filter((o) => o !== name);
    }
    dispatch(changeGeneric({ toChange: "affixes", value: selectedNew }));
  };

  return (
    <FormGroup row>
      {AFFIXES.map((a) => (
        <FormControlLabel
          control={
            <Checkbox
              checked={affixes.indexOf(a) > -1}
              value={a}
              color="primary"
              onChange={handleChange(a)}
            />
          }
          className={classes.checkbox}
          label={<Item stat={a} type="Ring" disableLink text={a} className={classes.text} />}
        />
      ))}
    </FormGroup>
  );
};

export default withStyles(styles)(Affixes);
