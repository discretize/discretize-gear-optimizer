import React from "react";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import {
  withStyles,
  Grid,
  Typography,
  FormControlLabel,
  FormControl,
  InputLabel,
  Switch,
  Input,
  InputAdornment
} from "@material-ui/core";
import "nouislider/distribute/nouislider.css";
import { Condition, Attribute, Skill } from "gw2-ui";
import HelperIcon from "../HelperIcon";
import classNames from "classnames";

const styles = (theme) => ({
  root: {
    marginBottom: theme.spacing.unit * 2
  },
  slider: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 6
  },
  sliderOld: {
    "& div": {
      "& .noUi-connects": {
        "& .noUi-connect:nth-child(1)": {
          background: "#b1b1b5 !important"
        },
        "& .noUi-connect:nth-child(2)": {
          background: "#e25822 !important"
        },
        "& .noUi-connect:nth-child(3)": {
          background: "#d2351e !important"
        },
        "& .noUi-connect:nth-child(4)": {
          background: "#48631f !important"
        },
        "& .noUi-connect:nth-child(5)": {
          background: "orange !important"
        },
        "& .noUi-connect:nth-child(6)": {
          background: "#a25aca !important"
        }
      }
    }
  },
  sliderNew0: {
    "& div": {
      "& .noUi-connects": {
        "& .noUi-connect": {
          background: "#b1b1b5 !important"
        }
      }
    }
  },
  box: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap"
  }
});

const DISTRIBUTION_NAMES = [
  { name: "Power", min: 0.001, max: 5, step: 0.001 },
  { name: "Burning", min: 0, max: 50, step: 0.1 },
  { name: "Bleeding", min: 0, max: 50, step: 0.1 },
  { name: "Poisoned", min: 0, max: 50, step: 0.1 },
  { name: "Torment", min: 0, max: 50, step: 0.1 },
  { name: "Confusion", min: 0, max: 50, step: 0.1 }
];

class DamageDistribution extends React.Component {
  state = {
    distribution: [100, 0, 0, 0, 0, 0],
    enableOld: false
  };

  onUpdateOld = (render, handle, value, un, percent) => {
    // console.log(value);
    const distribution = [];
    let prev = 0;
    for (let i = 0; i < value.length; i++) {
      distribution.push(value[i] - prev);
      prev = value[i];
    }
    distribution.push(100 - prev);
    // console.log(distribution);

    this.setState({ ...this.state, distribution: distribution });
  };

  onUpdateNew = (render, handle, value, un, percent, num) => {
    const distribution = this.state.distribution;
    distribution[num] = value;
    this.setState({ ...this.state, distribution: distribution });
  };

  handleChangeTextNew = (e, num) => {
    const val = e.target.value === "" ? "0" : e.target.value;
    if (val.match("[+]?([0-9]*[.])?[0-9]+")) {
      this.state.distribution[num] = val;
      this.setState({ ...this.state, distribution: this.state.distribution });
    }
  };

  SliderOld = () => {
    const { distribution } = this.state;

    return (
      <>
        <Nouislider
          className={classNames(this.props.classes.sliderOld, this.props.classes.slider)}
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
            density: 5
          }}
          onUpdate={this.onUpdateOld}
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
  };

  SlidersNew = () => {
    const { distribution } = this.state;

    return (
      <>
        <Grid container>
          {DISTRIBUTION_NAMES.map((d, index) => (
            <React.Fragment key={"distriNew_" + index}>
              <Grid item xs={12} sm={4}>
                <FormControl className={this.props.classes.margin}>
                  <InputLabel htmlFor={"input-with-icon-adornment-" + index}>
                    {d.name === "Power" ? (
                      <Attribute name="Power" text="Power Coefficient" />
                    ) : (
                      <Condition name={d.name} text={"Avg. " + d.name + " stacks"} />
                    )}
                  </InputLabel>
                  <Input
                    id={"input-with-icon-adornment-" + index}
                    value={distribution[index]}
                    endAdornment={
                      <InputAdornment position="end">
                        {d.name === "Power" ? (
                          <Attribute name="Power" disableLink disableText />
                        ) : (
                          <Condition name={d.name} disableLink disableText />
                        )}
                      </InputAdornment>
                    }
                    onChange={(e) => this.handleChangeTextNew(e, index)}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={8}>
                <Nouislider
                  className={classNames(this.props.classes.sliderNew1, this.props.classes.slider)}
                  start={[distribution[index]]}
                  connect={[true, false]}
                  range={{
                    min: [d.min],
                    max: [d.max]
                  }}
                  step={d.step}
                  pips={{
                    mode: "values",
                    values: [
                      0,
                      d.max - (4 * d.max) / 5,
                      d.max - (3 * d.max) / 5,
                      d.max - (2 * d.max) / 5,
                      d.max - d.max / 5,
                      d.max
                    ],
                    density: 5
                  }}
                  onUpdate={(render, handle, value, un, percent) =>
                    this.onUpdateNew(render, handle, value, un, percent, index)
                  }
                />
              </Grid>
            </React.Fragment>
          ))}
        </Grid>
      </>
    );
  };

  render() {
    const { distribution, enableOld } = this.state;
    return (
      <div className={this.props.classes.root}>
        <div className={this.props.classes.box}>
          <Typography variant="h5">Damage Source Distribution </Typography>
          <HelperIcon text="Damage distribution according to an optimal golem log." />
        </div>
        <FormControlLabel
          control={
            <Switch
              checked={enableOld}
              onChange={(e) => this.setState({ ...this.state, enableOld: e.target.checked })}
              name="checked"
              color="primary"
            />
          }
          label="Switch to %-wise damage distribution"
        />
        {enableOld ? this.SliderOld() : this.SlidersNew()}
      </div>
    );
  }
}

export default withStyles(styles)(DamageDistribution);
