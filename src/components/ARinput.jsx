import React from "react";
import {
  Input,
  FormControl,
  InputLabel,
  InputAdornment,
  Typography,
  Grid,
  withStyles
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { changeAR, getAR } from "../state/gearOptimizerSlice";

import { Item, Attribute } from "gw2-ui";
import HelperIcon from "./HelperIcon";

const styles = (theme) => ({
  root: {
    marginBottom: theme.spacing.unit * 2
  },
  margin: {
    width: 190,
    margin: theme.spacing.unit
  },
  box: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "space-evenly"
  }
});

const ARinput = ({ classes }) => {
  const dispatch = useDispatch();
  const ar = useSelector(getAR);

  function handleChange(event) {
    const value = event.target.value;
    if (value.match("^[0-9]*$")) {
      dispatch(changeAR(value), [dispatch]);
    }
  }

  return (
    <div className={classes.root}>
      <Typography variant="h5">
        <Attribute name="Agony Resistance" />
      </Typography>

      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} sm={6}>
          <Typography className={classes.box}>
            Include <Item id={79722} />{" "}
            <HelperIcon text="Adds 150% of your Agony Resistance to Precision, Toughness and Concentration." />
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl className={classes.margin}>
            <InputLabel htmlFor="input-with-icon-adornment">Agony Resistance</InputLabel>
            <Input
              id="input-with-icon-adornment"
              value={ar}
              endAdornment={
                <InputAdornment position="end">
                  <Attribute name="Agony Resistance" disableLink disableText />
                </InputAdornment>
              }
              onChange={handleChange}
            />
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(ARinput);
