import React from "react";
import {
  TextField,
  FormControl,
  TableCell,
  TableHead,
  TableRow,
  withStyles,
  Typography,
  TableBody
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { changeForcedSlot, getGeneric } from "../state/gearOptimizerSlice";

import { Item } from "gw2-ui";
import classNames from "classnames";

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
    width: 62
  },
  root: {
    marginBottom: theme.spacing.unit * 2
  }
});

const ForcedSlots = ({ classes, dualWielded }) => {
  const dispatch = useDispatch();
  const value = useSelector(getGeneric("forcedSlots"));

  const handleChange = (index) => (event) => {
    dispatch(changeForcedSlot({ index: index, value: event.target.value }));
  };

  let SLOTS = FORCED_SLOTS;
  if (!dualWielded) {
    SLOTS = FORCED_SLOTS.slice(0, 13);
  }

  return (
    <div className={classes.root}>
      <Typography variant="h5">Force Gear Slots </Typography>

      {SLOTS.map((s, index) => (
        <TextField
          key={s.short}
          value={value[index]}
          label={s.short}
          className={classNames(classes.textField, classes.dense)}
          margin="dense"
          onChange={handleChange(index)}
        />
      ))}

      {/* TODO add preview of the matched affix */}
    </div>
  );
};
export default withStyles(styles)(ForcedSlots);
