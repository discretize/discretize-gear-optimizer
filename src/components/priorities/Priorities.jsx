import {
  Chip,
  FormControl,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  withStyles
} from "@material-ui/core";
import { Attribute } from "gw2-ui";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeGeneric, getGeneric } from "../../state/gearOptimizerSlice";
import HelperIcon from "../HelperIcon";
import Affixes from "./Affixes";

const styles = (theme) => ({
  root: {
    marginBottom: theme.spacing.unit * 2
  },
  text: {
    color: "#ddd !important"
  },
  templateChip: {
    marginBottom: theme.spacing.unit * 2
  },
  formControl: {
    margin: theme.spacing.unit,
    width: 180
  },
  box: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap"
  },
  templateChip: {
    margin: theme.spacing.unit
  }
});

const Priorities = ({ classes, presets }) => {
  const dispatch = useDispatch();
  const optimizeFor = useSelector(getGeneric("optimizeFor"));
  const weaponType = useSelector(getGeneric("weaponType"));
  const minBoonDuration = useSelector(getGeneric("minBoonDuration"));
  const minHealingPower = useSelector(getGeneric("minHealingPower"));
  const minToughness = useSelector(getGeneric("minToughness"));
  const maxToughness = useSelector(getGeneric("maxToughness"));

  const handleChange = (event) => {
    dispatch(changeGeneric({ toChange: event.target.name, value: event.target.value }));
  };

  const handleTemplateClick = (index) => (event) => {
    dispatch(changeGeneric({ toChange: "affixes", value: [] }));
    dispatch(changeGeneric({ toChange: "minBoonDuration", value: 0 }));

    dispatch(changeGeneric({ toChange: "optimizeFor", value: presets[index].type }));

    if (presets[index].affixes)
      dispatch(changeGeneric({ toChange: "affixes", value: presets[index].affixes }));
    if (presets[index].restrictions)
      dispatch(
        changeGeneric({
          toChange: "minBoonDuration",
          value: presets[index].restrictions.minBoonDuration
        })
      );
  };

  return (
    <div className={classes.root}>
      <Typography variant="h5">Priorities </Typography>
      {presets.map((preset, index) => (
        <Chip
          id={preset.id}
          key={preset.id}
          label={preset.name}
          variant="outlined"
          onClick={handleTemplateClick(index)}
          className={classes.templateChip}
        />
      ))}
      <Affixes />

      <Grid container>
        <Grid item xs={12} sm={6} md={4}>
          <div className={classes.box}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="optimizeFor">Optimize for</InputLabel>
              <Select
                value={optimizeFor}
                onChange={handleChange}
                inputProps={{
                  name: "optimizeFor",
                  id: "optimizeFor"
                }}
              >
                <MenuItem value="Damage">Damage</MenuItem>
                <MenuItem value="Survivability">Survivability</MenuItem>
                <MenuItem value="Healing">Healing</MenuItem>
              </Select>
            </FormControl>
            <HelperIcon text="What to optimize the results for. 'Damage' includes power and condition damage according to the distribution below." />
          </div>

          <div className={classes.box}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="weaponType">Weapon Type</InputLabel>
              <Select
                value={weaponType}
                onChange={handleChange}
                inputProps={{
                  name: "weaponType",
                  id: "weaponType"
                }}
              >
                <MenuItem value="dualWielded">Dual wielded</MenuItem>
                <MenuItem value="twoHanded">Two-handed</MenuItem>
              </Select>
            </FormControl>
            <HelperIcon text="Select 'Dual wield' if you're using weapons in both hands or 'Two-handed' when using a two-handed weapon." />
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div className={classes.box}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="minBoon-input-with-icon-adornment">
                Min. <Attribute name="Boon Duration" disableLink />
              </InputLabel>
              <Input
                id="minBoon-input-with-icon-adornment"
                value={minBoonDuration}
                onChange={handleChange}
                name="minBoonDuration"
              />
            </FormControl>
            <HelperIcon text="Only show results that fulfill a certain amount of Boon Duration." />
          </div>
          <div className={classes.box}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="minHeal-input-with-icon-adornment">
                Min. <Attribute name="Healing Power" disableLink />
              </InputLabel>
              <Input
                id="minHeal-input-with-icon-adornment"
                value={minHealingPower}
                onChange={handleChange}
                name="minHealingPower"
              />
            </FormControl>
            <HelperIcon text="Only show results that fulfill a certain amount of Healing Power." />
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <div className={classes.box}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="minToughness-input-with-icon-adornment">
                Min. <Attribute name="Toughness" disableLink />
              </InputLabel>
              <Input
                id="minToughness-input-with-icon-adornment"
                value={minToughness}
                onChange={handleChange}
                name="minToughness"
              />
            </FormControl>
            <HelperIcon text="Only show results that fulfill a minimum amount of Toughness." />
          </div>
          <div className={classes.box}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="maxToughness-input-with-icon-adornment">
                Max. <Attribute name="Toughness" disableLink />
              </InputLabel>
              <Input
                id="maxToughness-input-with-icon-adornment"
                value={maxToughness}
                onChange={handleChange}
                name="maxToughness"
              />
            </FormControl>
            <HelperIcon text="Only show results that fulfill a maximum amount of Toughness." />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(Priorities);
