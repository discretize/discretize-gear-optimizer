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
import HelperIcon from "./HelperIcon";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import {
  changeDistribution,
  changeDistributionVersion,
  changeAllDistributions,
  getDistribution,
  getDistributionVersion,
  getTextBoxes,
  changeTextBoxes
} from "../state/gearOptimizerSlice";

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
  sliderNew: {
    "& div": {
      "& .noUi-connects": {
        "& .noUi-connect": {
          background: "#00cccc !important"
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
  { name: "Power", min: 0.001, max: 5, step: 0.001, color: "#b1b1b5" },
  { name: "Burning", min: 0, max: 50, step: 0.1 },
  { name: "Bleeding", min: 0, max: 50, step: 0.1 },
  { name: "Poisoned", min: 0, max: 50, step: 0.1 },
  { name: "Torment", min: 0, max: 50, step: 0.1 },
  { name: "Confusion", min: 0, max: 50, step: 0.1 }
];

const DamageDistribution = ({ classes }) => {
  const dispatch = useDispatch();
  const version = useSelector(getDistributionVersion);
  const distribution = useSelector(getDistribution); // actual real selected damage distribution at any time

  // locally displayed in the text boxes. Text boxes might contain a string that is not a real number (yet), so we need to store those separately
  const textBoxes = useSelector(getTextBoxes);

  const onUpdateOld = (render, handle, value, un, percent) => {
    // console.log(value);
    const distributionNew = [];
    let prev = 0;
    for (let i = 0; i < value.length; i++) {
      distributionNew.push(value[i] - prev);
      prev = value[i];
    }
    distributionNew.push(100 - prev);
    // console.log(distributionNew);

    dispatch(changeAllDistributions(distributionNew));
  };

  const SliderOld = () => {
    return (
      <>
        <Nouislider
          className={classNames(classes.sliderOld, classes.slider)}
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
          onSlide={onUpdateOld}
        />
        <Grid container>
          {DISTRIBUTION_NAMES.map((d, index) => (
            <Grid item xs={12} sm={6} md={2}>
              <Typography>
                {d.name === "Power" ? (
                  <Attribute name="Power" />
                ) : (
                  <Condition name={d.name} disableLink />
                )}{" "}
                {distribution[index]}%
              </Typography>
            </Grid>
          ))}
        </Grid>
      </>
    );
  };

  const onUpdateNew = (num) => (render, handle, value, un, percent) => {
    dispatch(changeTextBoxes({ index: num, value: value }));
    dispatch(changeDistribution({ index: num, value: value }));
  };

  const handleChangeTextNew = (num) => (e) => {
    let value = e.target.value;
    let distributionNew = [...distribution];
    if (value.match("^[-+]?[0-9]*.?[0-9]+([eE][-+]?[0-9]+)?$")) {
      // only update the actual slider when the number entered is a valid string. The regex matches for integer or floats.
      distributionNew = distributionNew.map((n, index) => (num === index ? value : n));
    }

    dispatch(changeTextBoxes({ index: num, value: value }));
    dispatch(changeDistribution({ index: num, value: value }));
  };

  const SlidersNew = () => {
    return (
      <Grid container>
        {DISTRIBUTION_NAMES.map((d, index) => (
          <React.Fragment key={"distriNew_" + index}>
            <Grid item xs={12} sm={4}>
              <FormControl className={classes.margin}>
                <InputLabel htmlFor={"input-with-icon-adornment-" + index}>
                  {d.name === "Power" ? (
                    <Attribute name="Power" text="Power Coefficient" />
                  ) : (
                    <Condition name={d.name} text={"Avg. " + d.name + " stacks"} />
                  )}
                </InputLabel>
                <Input
                  id={"input-with-icon-adornment-" + index}
                  value={textBoxes[index]}
                  endAdornment={
                    <InputAdornment position="end">
                      {d.name === "Power" ? (
                        <Attribute name="Power" disableLink disableText />
                      ) : (
                        <Condition name={d.name} disableLink disableText />
                      )}
                    </InputAdornment>
                  }
                  onChange={handleChangeTextNew(index)}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Nouislider
                className={classNames(classes.sliderNew, classes.slider)}
                start={distribution[index]}
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
                onSlide={onUpdateNew(index)}
              />
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    );
  };

  return (
    <div className={classes.root}>
      <div className={classes.box}>
        <Typography variant="h5">Damage Source Distribution </Typography>
        <HelperIcon text="Damage distribution according to an optimal golem log." />
      </div>
      <FormControlLabel
        control={
          <Switch
            checked={version === 1 ? true : false}
            onChange={(e) => dispatch(changeDistributionVersion(e.target.checked ? 1 : 2))}
            name="checked"
            color="primary"
          />
        }
        label="Switch to %-wise damage distribution"
      />
      {version === 1 ? SliderOld() : SlidersNew()}
    </div>
  );
};

export default withStyles(styles)(DamageDistribution);
