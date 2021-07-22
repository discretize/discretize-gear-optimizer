import React from "react";
import {
  Button,
  Checkbox,
  FormControl, FormControlLabel, FormGroup, FormHelperText,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select, Typography,
  withStyles
} from "@material-ui/core";
import { Skill, Boon, Condition, Trait, Profession, CommonEffect } from "gw2-ui";

const styles = (theme) => ({
  formControl: {
    margin: theme.spacing.unit * 3
  },
  boon: {
    fontSize: 18
  },
  tinyNote: {
    fontWeight: 200
  }
});


const CheckboxComponent = ({ checked, value, label, onChange, ...rest }) => (
  <FormControlLabel
    control={
      <Checkbox color={"primary"} checked={checked} onChange={onChange} value={value} {...rest} />
    }
    label={label}
  />
);

class GW2Select extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
    this.props.buffs(this.state);
  };

  render() {
    const {
      might,
      fury,
      vulnerability,
      protection,
      bannerOfStrength,
      bannerOfDiscipline,
      bannerOfTactics,
      bannerOfDefense,
      spotter,
      frostspirit,
      pinpointdistribution,
      assassinspresence,
      facetofnature,
      ritedwarf,
      strengthinnumbers,
      banesignet,
      signetofjudgment,
      signetofmercy,
      signetofwrath,
      exposed,
      lightarmor
    } = this.state;

    return (
      <>
        <Grid container>
          <Grid item xs={12} sm={6} md={4}>
            <FormControl component="fieldset" className={this.props.classes.formControl}>
              <FormLabel component="legend">Class specific buffs</FormLabel>
              <FormGroup>
                <CheckboxComponent value="spotter" checked={spotter}
                                   label={<Trait id={1016} disableLink className={this.props.classes.boon} />}
                                   onChange={this.handleChange("spotter")}
                />
                <CheckboxComponent value="frostspirit" checked={frostspirit}
                                   label={<Skill id={12497} disableLink className={this.props.classes.boon} />}
                                   onChange={this.handleChange("frostspirit")}
                />
                <CheckboxComponent value="pinpointdistribution" checked={pinpointdistribution}
                                   label={<Trait id={1984} disableLink className={this.props.classes.boon} />}
                                   onChange={this.handleChange("pinpointdistribution")}
                />
                <CheckboxComponent value="assassinspresence" checked={assassinspresence}
                                   label={<Trait id={1786} disableLink className={this.props.classes.boon} />}
                                   onChange={this.handleChange("assassinspresence")}
                />
                <CheckboxComponent value="facetofnature" checked={facetofnature}
                                   label={<Skill id={29371} disableLink className={this.props.classes.boon} />}
                                   onChange={this.handleChange("facetofnature")}
                />
                <CheckboxComponent value="ritedwarf" checked={ritedwarf}
                                   label={<Skill id={27975} disableLink className={this.props.classes.boon} />}
                                   onChange={this.handleChange("ritedwarf")}
                />
                <CheckboxComponent value="strengthinnumbers" checked={strengthinnumbers}
                                   label={<Trait id={584} disableLink className={this.props.classes.boon} />}
                                   onChange={this.handleChange("strengthinnumbers")}
                />

              </FormGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FormControl component="fieldset" className={this.props.classes.formControl}>
              <FormLabel component="legend">Boons</FormLabel>
              <FormGroup>
                <CheckboxComponent value="might" checked={might}
                                   label={<Boon name="Might" count={25} disableLink
                                                className={this.props.classes.boon} />}
                                   onChange={this.handleChange("might")}
                />
                <CheckboxComponent value="fury" checked={fury}
                                   label={<Boon name="Fury" disableLink className={this.props.classes.boon} />}
                                   onChange={this.handleChange("fury")}
                />
                <CheckboxComponent value="protection" checked={protection}
                                   label={<Boon name="Protection" disableLink className={this.props.classes.boon} />}
                                   onChange={this.handleChange("protection")}
                />
                <CheckboxComponent value="vulnerability" checked={vulnerability}
                                   label={<Condition name="Vulnerability" disableLink
                                                     className={this.props.classes.boon} />}
                                   onChange={this.handleChange("vulnerability")}
                />

              </FormGroup>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <FormControl component="fieldset" className={this.props.classes.formControl}>
              <FormLabel component="legend"><Profession name="Warrior" /> banners</FormLabel>
              <FormGroup>
                <CheckboxComponent value="bannerOfStrength" checked={bannerOfStrength}
                                   label={<Skill id={14405} disableLink className={this.props.classes.boon} />}
                                   onChange={this.handleChange("bannerOfStrength")}
                />
                <CheckboxComponent value="bannerOfDiscipline" checked={bannerOfDiscipline}
                                   label={<Skill id={14407} disableLink className={this.props.classes.boon} />}
                                   onChange={this.handleChange("bannerOfDiscipline")}
                />
                <CheckboxComponent value="bannerOfTactics" checked={bannerOfTactics}
                                   label={<Skill id={14408} disableLink className={this.props.classes.boon} />}
                                   onChange={this.handleChange("bannerOfTactics")}
                />
                <CheckboxComponent value="bannerOfDefense" checked={bannerOfDefense}
                                   label={<Skill id={14528} disableLink className={this.props.classes.boon} />}
                                   onChange={this.handleChange("bannerOfDefense")}
                />

              </FormGroup>
            </FormControl>
          </Grid>


        </Grid>


        <Grid container>
          <Grid item xs={12} sm={6} md={4}>
            <FormControl component="fieldset" className={this.props.classes.formControl}>
              <FormLabel component="legend"><Profession name="Guardian" /> signets</FormLabel>
              <FormGroup>
                <CheckboxComponent value="banesignet" checked={banesignet}
                                   label={<Skill id={9093} disableLink className={this.props.classes.boon} />}
                                   onChange={this.handleChange("banesignet")}
                />
                <CheckboxComponent value="signetofjudgment" checked={signetofjudgment}
                                   label={<Skill id={9150} disableLink className={this.props.classes.boon} />}
                                   onChange={this.handleChange("signetofjudgment")}
                />
                <CheckboxComponent value="signetofmercy" checked={signetofmercy}
                                   label={<Skill id={9163} disableLink className={this.props.classes.boon} />}
                                   onChange={this.handleChange("signetofmercy")}
                />
                <CheckboxComponent value="signetofwrath" checked={signetofwrath}
                                   label={<Skill id={9151} disableLink className={this.props.classes.boon} />}
                                   onChange={this.handleChange("signetofwrath")}
                />
              </FormGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FormControl component="fieldset" className={this.props.classes.formControl}>
              <FormLabel component="legend">Special effects</FormLabel>
              <FormGroup>
                <CheckboxComponent value="exposed" checked={exposed}
                                   label={<CommonEffect name="Exposed" disableLink
                                                        className={this.props.classes.boon} />}
                                   onChange={this.handleChange("exposed")}
                />
                <CheckboxComponent value="lightarmor" checked={lightarmor}
                                   label={<>
                                     <Typography variant="body1">Low boss armor (VG, KC)</Typography>
                                     <Typography variant="caption" className={this.props.classes.tinyNote}>1910 vs
                                       2597 </Typography>
                                   </>}
                                   onChange={this.handleChange("lightarmor")}
                />
              </FormGroup>
            </FormControl>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default withStyles(styles)(GW2Select);