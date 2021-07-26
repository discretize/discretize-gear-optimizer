import { Grid, TextField, Typography, withStyles } from "@material-ui/core";
import classNames from "classnames";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeForcedSlot, getGeneric } from "../state/gearOptimizerSlice";
import { firstUppercase } from "../utils/usefulFunctions";
import { AFFIXES } from "./priorities/Affixes";

export const FORCED_SLOTS = [
  {
    name: "Helm",
    short: "Helm"
  },
  {
    name: "Shoulders",
    short: "Shld"
  },
  {
    name: "Coat",
    short: "Coat"
  },
  {
    name: "Gloves",
    short: "Glov"
  },
  {
    name: "Leggings",
    short: "Legs"
  },
  {
    name: "Boots",
    short: "Boot"
  },
  {
    name: "Amulet",
    short: "Amul"
  },
  {
    name: "Ring 1",
    short: "Rng1"
  },
  {
    name: "Ring 2",
    short: "Rng2"
  },
  {
    name: "Accessory 1",
    short: "Acc1"
  },
  {
    name: "Accessory 2",
    short: "Acc2"
  },
  {
    name: "Back Item",
    short: "Back"
  },
  {
    name: "Weapon 1",
    short: "Wep1"
  },
  {
    name: "Weapon 2",
    short: "Wep2"
  }
];

const styles = (theme) => ({
  textField: {
    width: 80
  },
  root: {
    marginBottom: theme.spacing.unit * 2
  },
  nowrap: {
    display: "inline",
    whiteSpace: "nowrap"
  },
  helperText: {
    fontSize: 12
  }
});

const ForcedSlots = ({ classes, dualWielded }) => {
  const dispatch = useDispatch();
  const value = useSelector(getGeneric("forcedSlots"));

  const handleChange = (index) => (event) => {
    const input = event.target.value.toLowerCase();
    if (!input.match(".*[0-9].*") && input !== "") {
      // contains number, cant be matched
      const possibleMatches = AFFIXES.filter((a) => a.toLowerCase().startsWith(input));
      if (possibleMatches.length > 0)
        dispatch(changeForcedSlot({ index: index, value: possibleMatches[0] }));
      // Reset the affix in every other occasion
      else dispatch(changeForcedSlot({ index: index, value: "" }));
    } else {
      dispatch(changeForcedSlot({ index: index, value: "" }));
    }
  };

  let SLOTS = FORCED_SLOTS;
  if (!dualWielded) {
    SLOTS = FORCED_SLOTS.slice(0, 13);
  }

  const input = (name, index, offset) => {
    return (
      <TextField
        key={name}
        label={name}
        className={classNames(classes.textField, classes.dense)}
        margin="dense"
        onChange={handleChange(index + offset)}
        helperText={firstUppercase(value[index + offset])}
        FormHelperTextProps={{ className: classes.helperText }}
      />
    );
  };

  return (
    <div className={classes.root}>
      <Typography variant="h5">Force Gear Slots </Typography>

      <Grid container>
        <Grid item xs={12} sm={12}>
          {SLOTS.slice(0, 6).map((s, index) => input(s.short, index, 0))}
        </Grid>
        <Grid item xs={12} sm={12}>
          {SLOTS.slice(6).map((s, index) => input(s.short, index, 6))}
        </Grid>
      </Grid>
    </div>
  );
};
export default withStyles(styles)(ForcedSlots);
