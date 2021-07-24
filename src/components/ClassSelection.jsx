import React from "react";
import { Button, withStyles } from "@material-ui/core";

import { Profession } from "gw2-ui";
import { PROFESSIONS } from "./GearOptimizer";

const styles = (theme) => ({
  [theme.breakpoints.up("970")]: {
    buttonGroup: {
      borderRadius: 0,
      "&> *:last-child": {
        borderRadius: "0px 5px 5px 0",
        borderLeft: 0
      },
      "&> *:first-child": {
        borderRadius: "5px 0 0 5px",
        borderRight: 0
      },
      "&> *:not(:first-child):not(:last-child)": {
        borderLeft: 0,
        borderRight: 0
      }
    }
  },
  button: {
    borderRadius: 0,
    paddingLeft: theme.spacing.unit * 1.5,
    paddingRight: theme.spacing.unit * 1.5
  },
  [theme.breakpoints.down("970")]: {
    button: {
      width: 160
    }
  }
});

class ClassSelection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      specialization: ""
    };
  }

  setSpecialization = (val) => {
    this.setState({
      specialization: val
    });
    // set callback ref in parent component
    this.props.specialization(val);
  };

  render() {
    return (
      <div className={this.props.classes.buttonGroup}>
        {PROFESSIONS.map((elem) => (
          <Button
            variant="outlined"
            color="primary"
            size="medium"
            style={
              elem === this.state.specialization
                ? { backgroundColor: "currentcolor" }
                : { borderColor: "inherit" }
            }
            className={this.props.classes.button}
            onClick={() => this.setSpecialization(elem)}
            key={elem}
          >
            <Profession name={elem} disableLink />
          </Button>
        ))}
      </div>
    );
  }
}

export default withStyles(styles)(ClassSelection);
