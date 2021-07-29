import {
  FormControl,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  withStyles
} from "@material-ui/core";
import { Item } from "gw2-ui";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeGeneric, getGeneric } from "../state/gearOptimizerSlice";

const styles = (theme) => ({
  root: {
    marginBottom: theme.spacing(2)
  },
  formControl: {
    width: 200,
    margin: theme.spacing(1),
    marginRight: theme.spacing(3)
  },
  formControl2: {
    width: 55,
    margin: theme.spacing(1)
  },
  grid: {
    justifyContent: "flex-start"
  },
  gridItem: {
    marginBottom: theme.spacing(2)
  }
});

const INFUSIONS = [
  37131, // power
  37132, // precision
  37130, // condi
  86113, // expertise
  86180, // concentration
  37125, // healing power
  37135, // toughness
  37136 // vitality
];

const Infusions = ({ classes }) => {
  const dispatch = useDispatch();
  const primaryInfusion = useSelector(getGeneric("primaryInfusion"));
  const secondaryInfusion = useSelector(getGeneric("secondaryInfusion"));
  const primaryMaxInfusions = useSelector(getGeneric("primaryMaxInfusions"));
  const secondaryMaxInfusions = useSelector(getGeneric("secondaryMaxInfusions"));

  const dropdown = (name, varName, infusion) => {
    return (
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor={name}>{name}</InputLabel>
        <Select
          value={typeof infusion === "undefined" ? "" : infusion.toString()}
          input={<Input name={name} id={name} />}
          onChange={(e) =>
            dispatch(changeGeneric({ toChange: varName, value: Number(e.target.value) }))
          }
        >
          <MenuItem value="">None </MenuItem>
          {INFUSIONS.map((i) => (
            <MenuItem value={i} key={i}>
              <Item id={i} disableLink />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  };

  const input = (name, varName, maxInfusions) => {
    return (
      <FormControl className={classes.formControl2}>
        <InputLabel htmlFor={varName + "_input-with-icon-adornment"}>{name}</InputLabel>
        <Input
          id={varName + "_input-with-icon-adornment"}
          value={maxInfusions}
          onChange={(e) =>
            dispatch(changeGeneric({ toChange: varName, value: Number(e.target.value) }))
          }
        />
      </FormControl>
    );
  };

  return (
    <div className={classes.root}>
      <Typography variant="h5">Stat Infusions</Typography>
      <Grid container className={classes.grid} direction="row" alignItems="center">
        <Grid item xs={12} sm={8} className={classes.gridItem}>
          {dropdown("Primary Infusion", "primaryInfusion", primaryInfusion)}
          {input("Max #", "primaryMaxInfusions", primaryMaxInfusions)}
        </Grid>

        <Grid item xs={12} sm={8}>
          {dropdown("Secondary Infusion", "secondaryInfusion", secondaryInfusion)}
          {input("Max #", "secondaryMaxInfusions", secondaryMaxInfusions)}
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(Infusions);
