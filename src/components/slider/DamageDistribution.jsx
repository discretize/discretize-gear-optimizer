import React from "react";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import { withStyles, Grid, Typography, Divider } from "@material-ui/core";
import "nouislider/distribute/nouislider.css";
import { Condition, Attribute, Skill } from "gw2-ui";
import HelperIcon from "../HelperIcon";
//import "./slider.css";

const styles = (theme) => ({
  slider: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 6
  },
  box: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap"
  }
});

const DISTRIBUTION_NAMES = ["Power", "Burning", "Bleeding", "Poisoned", "Torment", "Confusion"];

class DamageDistribution extends React.Component {
  state = {
    distribution: [100, 0, 0, 0, 0, 0]
  };

  onUpdate = (render, handle, value, un, percent) => {
    //console.log(value);
    const distribution = [];
    let prev = 0;
    for (let i = 0; i < value.length; i++) {
      distribution.push(value[i] - prev);
      prev = value[i];
    }
    distribution.push(100 - prev);
    console.log(distribution);

    this.setState({ distribution: distribution });
  };

  render() {
    const { distribution } = this.state;
    return (
      <>
        <div className={this.props.classes.box}>
          <Typography variant="h5">Damage Source Distribution </Typography>
          <HelperIcon text="Damage distribution according to an optimal golem log." />
        </div>
        <Nouislider
          className={this.props.classes.slider}
          start={[100, 100, 100, 100, 100]}
          connect={[true, true, true, true, true, true]}
          range={{
            min: [0],
            max: [100]
          }}
          step={1}
          pips={{
            mode: "values",
            values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
            density: 1
          }}
          onUpdate={this.onUpdate}
        />
        <Grid container>
          {DISTRIBUTION_NAMES.map((name, index) => (
            <Grid item xs={12} sm={6} md={2}>
              <Typography>
                {name === "Power" ? (
                  <Attribute name="Power" />
                ) : (
                  <Condition name={name} disableLink />
                )}{" "}
                {distribution[index]}%
              </Typography>
            </Grid>
          ))}
        </Grid>
      </>
    );
  }
}

export default withStyles(styles)(DamageDistribution);
