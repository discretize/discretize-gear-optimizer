import React from "react";
import { withStyles } from "@material-ui/core";

import ClassSelection from "./ClassSelection";
import Traits from "./Traits";

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
      profession: undefined,
      traits: []
    };
  }

  render() {
    return (
      <div className={this.props.classes.root}>
        <ClassSelection specialization={(prof) => this.setState({ ...this.state, profession: prof })} />
        {PROFESSIONS.map((p) =>
          <>
            {this.state.profession === p &&
            <Traits profession={p} traits={(traits) => this.setState({ ...this.state, traits: traits })} />}
          </>
        )}
      </div>
    );
  }

}

export const PROFESSIONS = [
  "Warrior",
  "Revenant",
  "Guardian",
  "Ranger",
  "Engineer",
  "Elementalist",
  "Mesmer"
];


export default withStyles(styles)(GearOptimizer);

