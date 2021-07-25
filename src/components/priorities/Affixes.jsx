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
  "BERSERKER",
  "ZEALOT",
  "SOLDIER",
  "FORSAKEN",
  "VALKYRIE",
  "HARRIER",
  "PALADIN",
  "COMMANDER",
  "DEMOLISHER",
  "SWASHBUCKLER",
  "MARAUDER",
  "AVATAR",
  "DESTROYER",
  "VIGILANT",
  "CRUSADER",
  "WANDERER",
  "DIVINER",
  "WIZARD",
  "VIPER",
  "GRIEVING",
  "SAGE",
  "MARSHAL",
  "CAPTAIN",
  "RAMPAGER",
  "ASSASSIN",
  "SERAPH",
  "KNIGHT",
  "CAVALIER",
  "NOMAD",
  "SETTLER",
  "GIVER",
  "TRAILBLAZER",
  "MINSTREL",
  "GIVER",
  "SENTINEL",
  "SHAMAN",
  "SINISTER",
  "GIVER",
  "CARRION",
  "RABID",
  "DIRE",
  "APOSTATE",
  "PLAGUEDOCTOR",
  "BRINGER",
  "CLERIC",
  "MAGI",
  "APOTHECARY",
  "CELESTIAL"
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
      {AFFIXES.map((a) => {
        const name = a.charAt(0).toUpperCase() + a.slice(1).toLowerCase();

        return (
          <FormControlLabel
            key={a}
            control={
              <Checkbox
                checked={affixes.indexOf(a) > -1}
                value={a}
                color="primary"
                onChange={handleChange(a)}
              />
            }
            className={classes.checkbox}
            label={
              <Item stat={name} type="Ring" disableLink text={name} className={classes.text} />
            }
          />
        );
      })}
    </FormGroup>
  );
};

export default withStyles(styles)(Affixes);
