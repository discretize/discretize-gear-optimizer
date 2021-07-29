import { Grid, TextField, Typography, withStyles } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import classNames from "classnames";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeForcedSlot, getGeneric } from "../state/gearOptimizerSlice";
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
  textField: {},
  root: {
    marginBottom: theme.spacing(2)
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

  let SLOTS = FORCED_SLOTS;
  if (!dualWielded) {
    SLOTS = FORCED_SLOTS.slice(0, 13);
  }

  const handleChange = (index) => (event, newInput) => {
    dispatch(changeForcedSlot({ index: index, value: newInput }));
  };

  const input2 = (name, index, offset) => {
    return (
      <Grid item xs={6} md={2} sm={4} key={name}>
        <Autocomplete
          options={AFFIXES}
          value={value[index + offset]}
          id={name}
          clearOnEscape
          onChange={handleChange(index + offset)}
          renderInput={(params) => (
            <TextField
              {...params}
              className={classNames(classes.textField, classes.dense)}
              label={name}
              margin="dense"
            />
          )}
        />
      </Grid>
    );
  };
  return (
    <div className={classes.root}>
      <Typography variant="h5">Force Gear Slots </Typography>

      <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start">
        {SLOTS.slice(0, 6).map((s, index) => input2(s.short, index, 0))}
        {SLOTS.slice(6, 10).map((s, index) => input2(s.short, index, 6))}
        {SLOTS.slice(10).map((s, index) => input2(s.short, index, 10))}
      </Grid>
    </div>
  );
};
export default withStyles(styles)(ForcedSlots);
