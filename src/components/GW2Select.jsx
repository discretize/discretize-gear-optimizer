import React from "react";
import {
  ListItemText,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  withStyles,
  Typography,
  Input
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { changeGeneric, getGeneric } from "../state/gearOptimizerSlice";

import { Item } from "gw2-ui";

const styles = (theme) => ({
  formControl: {
    margin: theme.spacing.unit,
    width: 250
  },
  sectionText: {
    fontWeight: 200,
    textAlign: "center",
    marginTop: theme.spacing.unit
  },
  subText: {
    fontWeight: 100,
    textAlign: "right"
  },
  menuItem: {
    whiteSpace: "normal"
  }
});

const GW2Select = ({ classes, name, label, data }) => {
  const dispatch = useDispatch();
  const bigValue = useSelector((state) => state.gearOptimizer[name]);

  function handleChange(event, name) {
    dispatch(changeGeneric({ toChange: name, value: event.target.value }));
  }

  const values = [];
  for (let elem in data) {
    values.push({ type: "section", text: data[elem].section });
    for (let item in data[elem].items) {
      values.push({ type: "item", ...data[elem].items[item] });
    }
  }

  return (
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <Select
        value={bigValue}
        input={<Input name={name} id={name} />}
        onChange={(e) => handleChange(e, name)}
        renderValue={(selected) => (
          <Item id={values.filter((v) => v.id === selected)[0].gw2_id} disableLink></Item>
        )}
      >
        {values.map((v) => {
          return v.type === "section" ? (
            <Typography key={v.text} className={classes.sectionText}>
              {v.text}
            </Typography>
          ) : (
            <MenuItem key={v.id} value={v.id} className={classes.menuItem}>
              <ListItemText
                primary={<Item id={v.gw2_id} disableLink text={v.text} />}
                secondary={<Typography className={classes.subText}>{v.subText}</Typography>}
              />
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};
export default withStyles(styles)(GW2Select);
