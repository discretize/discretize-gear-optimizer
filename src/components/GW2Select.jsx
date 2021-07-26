import {
  FormControl,
  Input,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  Typography,
  withStyles
} from "@material-ui/core";
import { Item } from "gw2-ui";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addModifier,
  changeGeneric,
  getGeneric,
  removeModifierWithSource
} from "../state/gearOptimizerSlice";

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
  const bigValue = useSelector(getGeneric(name));

  const allItems = [].concat.apply(
    [],
    data.map((d) => d.items)
  );

  const handleChange = (event) => {
    // Remove old modifier
    console.log(allItems);
    console.log(event.target.value);
    dispatch(removeModifierWithSource(event.target.name));
    dispatch(
      addModifier({
        id: event.target.value,
        modifiers: allItems.filter((a) => a.id === event.target.value)[0].modifiers,
        source: event.target.name
      })
    );

    dispatch(changeGeneric({ toChange: event.target.name, value: event.target.value }));
  };

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
        onChange={handleChange}
        renderValue={(selected) => {
          const item = values.filter((v) => v.id === selected)[0];
          return (
            <Item id={item.gw2_id} disableLink text={item.text.replace("Superior ", "")}></Item>
          );
        }}
      >
        {values.map((v) => {
          return v.type === "section" ? (
            <Typography key={v.text} className={classes.sectionText}>
              {v.text}
            </Typography>
          ) : (
            <MenuItem key={v.id} value={v.id} className={classes.menuItem}>
              <ListItemText
                primary={<Item id={v.gw2_id} disableLink text={v.text.replace("Superior ", "")} />}
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
