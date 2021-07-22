import React from "react";
import { Button, FormControl, InputLabel, MenuItem, Select, withStyles } from "@material-ui/core";

const styles = (theme) => ({
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  }
});


class GW2Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: ""
    };
  }

  render() {
    const { selected } = this.state;

    return (
      <FormControl className={this.props.classes.formControl}>
        <InputLabel htmlFor={this.props.name}>{this.props.name}</InputLabel>
        <Select
          value={selected}
          onChange={(e) => this.setState({ ...this.state, selected: e.target.value })}
          inputProps={{
            name: this.props.name,
            id: this.props.name,
          }}
        >

          <MenuItem value={1}>data</MenuItem>
        </Select>
      </FormControl>
    );
  }
}

export default withStyles(styles)(GW2Select);