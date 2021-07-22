import React from "react";
import { withStyles } from "@material-ui/core";

import ClassSelection from "./ClassSelection";

const styles = (theme) => ({
  root: {
    // adds padding on bigger (non smartphone) screens
    [theme.breakpoints.up("sm")]: {
      paddingLeft: 20,
      paddingRight: 20
    }
  }
});

class GearOptimizer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      specialization: ""
    };
  }

  render() {
    return (
      <div className={this.props.classes.root}>
        <ClassSelection specialization={(spec) => this.state.specialization = spec} />
      </div>
    );
  }
}


export default withStyles(styles)(GearOptimizer);