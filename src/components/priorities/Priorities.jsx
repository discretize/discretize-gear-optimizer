import React, { forwardRef } from "react";
import {
  InputLabel,
  MenuItem,
  FormControl,
  Chip,
  Select,
  withStyles,
  Typography,
  Grid,
  Input,
  InputAdornment
} from "@material-ui/core";

import { HelpOutline } from "@material-ui/icons";

import Affixes from "./Affixes";

import { Tooltip, Attribute } from "gw2-ui";

const styles = (theme) => ({
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
  }
});

const HelperIcon = ({ text }) => {
  return (
    <Tooltip content={text}>
      <span>
        <Typography>
          <HelpOutline />
        </Typography>
      </span>
    </Tooltip>
  );
};

class Priorities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      optimizeFor: "damage",
      weaponType: "dualWielded",
      minBoonDuration: "",
      minHealingPower: "",
      minToughness: "1000",
      maxToughness: ""
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const {
      optimizeFor,
      weaponType,
      minBoonDuration,
      minHealingPower,
      minToughness,
      maxToughness
    } = this.state;

    return (
      <>
        <Typography variant="h5">Priorities </Typography>
        <Chip
          label="Template name"
          variant="outlined"
          onClick={(e) => this.handleTemplateClick}
          className={this.props.classes.templateChip}
        />
        <Affixes />

        <Grid container>
          <Grid item xs={12} sm={6} md={4}>
            <div className={this.props.classes.box}>
              <FormControl className={this.props.classes.formControl}>
                <InputLabel htmlFor="optimizeFor">Optimize for</InputLabel>
                <Select
                  value={optimizeFor}
                  onChange={this.handleChange}
                  inputProps={{
                    name: "optimizeFor",
                    id: "optimizeFor"
                  }}
                >
                  <MenuItem value="damage">Damage</MenuItem>
                  <MenuItem value="survival">Survivability</MenuItem>
                  <MenuItem value="healing">Healing</MenuItem>
                </Select>
              </FormControl>
              <HelperIcon text="What to optimize the results for. 'Damage' includes power and condition damage according to the distribution below." />
            </div>

            <div className={this.props.classes.box}>
              <FormControl className={this.props.classes.formControl}>
                <InputLabel htmlFor="weaponType">Weapon Type</InputLabel>
                <Select
                  value={weaponType}
                  onChange={this.handleChange}
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
            <div className={this.props.classes.box}>
              <FormControl className={this.props.classes.formControl}>
                <InputLabel htmlFor="minBoon-input-with-icon-adornment">
                  Min. <Attribute name="Boon Duration" disableLink />
                </InputLabel>
                <Input
                  id="minBoon-input-with-icon-adornment"
                  value={minBoonDuration}
                  onChange={this.handleChange}
                />
              </FormControl>
              <HelperIcon text="Only show results that fulfill a certain amount of Boon Duration." />
            </div>
            <div className={this.props.classes.box}>
              <FormControl className={this.props.classes.formControl}>
                <InputLabel htmlFor="minHeal-input-with-icon-adornment">
                  Min. <Attribute name="Healing Power" disableLink />
                </InputLabel>
                <Input
                  id="minHeal-input-with-icon-adornment"
                  value={minHealingPower}
                  onChange={this.handleChange}
                />
              </FormControl>
              <HelperIcon text="Only show results that fulfill a certain amount of Healing Power." />
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div className={this.props.classes.box}>
              <FormControl className={this.props.classes.formControl}>
                <InputLabel htmlFor="minToughness-input-with-icon-adornment">
                  Min. <Attribute name="Toughness" disableLink />
                </InputLabel>
                <Input
                  id="minToughness-input-with-icon-adornment"
                  value={minToughness}
                  onChange={this.handleChange}
                />
              </FormControl>
              <HelperIcon text="Only show results that fulfill a minimum amount of Toughness." />
            </div>
            <div className={this.props.classes.box}>
              <FormControl className={this.props.classes.formControl}>
                <InputLabel htmlFor="maxToughness-input-with-icon-adornment">
                  Max. <Attribute name="Toughness" disableLink />
                </InputLabel>
                <Input
                  id="maxToughness-input-with-icon-adornment"
                  value={maxToughness}
                  onChange={this.handleChange}
                />
              </FormControl>
              <HelperIcon text="Only show results that fulfill a maximum amount of Toughness." />
            </div>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default withStyles(styles)(Priorities);
