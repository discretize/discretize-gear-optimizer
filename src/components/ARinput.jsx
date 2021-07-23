import React from "react";
import {
  Input,
  FormControl,
  InputLabel,
  InputAdornment,
  Select,
  withStyles
} from "@material-ui/core";

import { Item, Attribute } from "gw2-ui";

const styles = (theme) => ({
  margin: {
    width: 170,
    margin: theme.spacing.unit
  }
});

class ARinput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ar: ""
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
    );
  }
}

export default withStyles(styles)(ARinput);
