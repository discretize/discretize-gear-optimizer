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

import { Item, Attribute } from "gw2-ui";
import HelperIcon from "./HelperIcon";

const styles = (theme) => ({
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

class ARinput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ar: "162"
    };
  }

  handleChange = (event) => {
    if (event.target.value.match("^[0-9]*$")) {
      this.setState({ ar: event.target.value });
      this.props.ar(event.target.value);
    }
  };

  render() {
    const { selected } = this.state;

    return (
      <>
        <Typography variant="h5">
          <Attribute name="Agony Resistance" />{" "}
        </Typography>

        <Grid container justify="center" alignItems="center">
          <Grid item xs={12} sm={6}>
            <Typography className={this.props.classes.box}>
              Include <Item id={79722} />{" "}
              <HelperIcon text="Adds 150% of your Agony Resistance to Precision, Toughness and Concentration." />
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl className={this.props.classes.margin}>
              <InputLabel htmlFor="input-with-icon-adornment">Agony Resistance</InputLabel>
              <Input
                id="input-with-icon-adornment"
                value={this.state.ar}
                endAdornment={
                  <InputAdornment position="end">
                    <Attribute name="Agony Resistance" disableLink disableText />
                  </InputAdornment>
                }
                onChange={this.handleChange}
              />
            </FormControl>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default withStyles(styles)(ARinput);
