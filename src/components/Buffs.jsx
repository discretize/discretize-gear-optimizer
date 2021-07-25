import React from "react";
import {
  Avatar,
  Button,
  Checkbox,
  Chip,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  withStyles
} from "@material-ui/core";
import { Skill, Boon, Condition, Trait, Profession, CommonEffect } from "gw2-ui";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { changeGeneric, getGeneric } from "../state/gearOptimizerSlice";
import CheckboxComponent from "./baseComponents/CheckboxComponent";

const styles = (theme) => ({
  formControl: {
    margin: theme.spacing.unit * 3
  },
  boon: {
    fontSize: 18
  },
  tinyNote: {
    fontWeight: 200
  },
  templateChip: {
    margin: theme.spacing.unit
  }
});

const Buffs = ({ classes, presets }) => {
  const dispatch = useDispatch();
  const might = useSelector(getGeneric("might"));
  const fury = useSelector(getGeneric("fury"));
  const protection = useSelector(getGeneric("protection"));
  const vulnerability = useSelector(getGeneric("vulnerability"));

  const bannerOfStrength = useSelector(getGeneric("bannerOfStrength"));
  const bannerOfDiscipline = useSelector(getGeneric("bannerOfDiscipline"));
  const bannerOfTactics = useSelector(getGeneric("bannerOfTactics"));
  const bannerOfDefense = useSelector(getGeneric("bannerOfDefense"));

  const spotter = useSelector(getGeneric("spotter"));
  const frostSpirit = useSelector(getGeneric("frostSpirit"));
  const pinpointDistribution = useSelector(getGeneric("pinpointDistribution"));
  const assassinsPresence = useSelector(getGeneric("assassinsPresence"));
  const facetOfNature = useSelector(getGeneric("facetOfNature"));
  const riteDwarf = useSelector(getGeneric("riteDwarf"));
  const strengthInNumbers = useSelector(getGeneric("strengthInNumbers"));

  const baneSignet = useSelector(getGeneric("baneSignet"));
  const signetOfJudgment = useSelector(getGeneric("signetOfJudgment"));
  const signetOfMercy = useSelector(getGeneric("signetOfMercy"));
  const signetOfWrath = useSelector(getGeneric("signetOfWrath"));

  const exposed = useSelector(getGeneric("exposed"));
  const lightArmor = useSelector(getGeneric("lightArmor"));

  const handleChange = (name) => (event) => {
    dispatch(changeGeneric({ toChange: name, value: event.target.checked }));
  };

  const handleTemplateClick = (index) => (event) => {
    dispatch(changeGeneric({ toChange: "might", value: false }));
    dispatch(changeGeneric({ toChange: "fury", value: false }));
    dispatch(changeGeneric({ toChange: "protection", value: false }));
    dispatch(changeGeneric({ toChange: "vulnerability", value: false }));
    dispatch(changeGeneric({ toChange: "bannerOfStrength", value: false }));
    dispatch(changeGeneric({ toChange: "bannerOfDiscipline", value: false }));
    dispatch(changeGeneric({ toChange: "bannerOfTactics", value: false }));
    dispatch(changeGeneric({ toChange: "bannerOfDefense", value: false }));
    dispatch(changeGeneric({ toChange: "spotter", value: false }));
    dispatch(changeGeneric({ toChange: "might", value: false }));
    dispatch(changeGeneric({ toChange: "frostSpirit", value: false }));
    dispatch(changeGeneric({ toChange: "pinpointDistribution", value: false }));
    dispatch(changeGeneric({ toChange: "assassinsPresence", value: false }));
    dispatch(changeGeneric({ toChange: "facetOfNature", value: false }));
    dispatch(changeGeneric({ toChange: "riteDwarf", value: false }));
    dispatch(changeGeneric({ toChange: "strengthInNumbers", value: false }));
    dispatch(changeGeneric({ toChange: "baneSignet", value: false }));
    dispatch(changeGeneric({ toChange: "signetOfJudgment", value: false }));
    dispatch(changeGeneric({ toChange: "signetOfMercy", value: false }));
    dispatch(changeGeneric({ toChange: "signetOfWrath", value: false }));
    dispatch(changeGeneric({ toChange: "exposed", value: false }));
    dispatch(changeGeneric({ toChange: "lightArmor", value: false }));
    if (presets[index].buffs)
      presets[index].buffs.forEach((b) => dispatch(changeGeneric({ toChange: b, value: true })));
  };

  return (
    <>
      <Typography variant="h5">Boons & Buffs </Typography>
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

      <Grid container>
        <Grid item xs={12} sm={6} md={4}>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Class specific buffs</FormLabel>
            <FormGroup>
              <CheckboxComponent
                value="spotter"
                checked={spotter}
                label={<Trait id={1016} disableLink className={classes.boon} />}
                onChange={handleChange("spotter")}
              />
              <CheckboxComponent
                value="frostSpirit"
                checked={frostSpirit}
                label={<Skill id={12497} disableLink className={classes.boon} />}
                onChange={handleChange("frostSpirit")}
              />
              <CheckboxComponent
                value="pinpointDistribution"
                checked={pinpointDistribution}
                label={<Trait id={1984} disableLink className={classes.boon} />}
                onChange={handleChange("pinpointDistribution")}
              />
              <CheckboxComponent
                value="assassinsPresence"
                checked={assassinsPresence}
                label={<Trait id={1786} disableLink className={classes.boon} />}
                onChange={handleChange("assassinsPresence")}
              />
              <CheckboxComponent
                value="facetOfNature"
                checked={facetOfNature}
                label={<Skill id={29371} disableLink className={classes.boon} />}
                onChange={handleChange("facetOfNature")}
              />
              <CheckboxComponent
                value="riteDwarf"
                checked={riteDwarf}
                label={<Skill id={27975} disableLink className={classes.boon} />}
                onChange={handleChange("riteDwarf")}
              />
              <CheckboxComponent
                value="strengthInNumbers"
                checked={strengthInNumbers}
                label={<Trait id={584} disableLink className={classes.boon} />}
                onChange={handleChange("strengthInNumbers")}
              />
            </FormGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Boons</FormLabel>
            <FormGroup>
              <CheckboxComponent
                value="might"
                checked={might}
                label={<Boon name="Might" count={25} disableLink className={classes.boon} />}
                onChange={handleChange("might")}
              />
              <CheckboxComponent
                value="fury"
                checked={fury}
                label={<Boon name="Fury" disableLink className={classes.boon} />}
                onChange={handleChange("fury")}
              />
              <CheckboxComponent
                value="protection"
                checked={protection}
                label={<Boon name="Protection" disableLink className={classes.boon} />}
                onChange={handleChange("protection")}
              />
              <CheckboxComponent
                value="vulnerability"
                checked={vulnerability}
                label={<Condition name="Vulnerability" disableLink className={classes.boon} />}
                onChange={handleChange("vulnerability")}
              />
            </FormGroup>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">
              <Profession name="Warrior" /> banners
            </FormLabel>
            <FormGroup>
              <CheckboxComponent
                value="bannerOfStrength"
                checked={bannerOfStrength}
                label={<Skill id={14405} disableLink className={classes.boon} />}
                onChange={handleChange("bannerOfStrength")}
              />
              <CheckboxComponent
                value="bannerOfDiscipline"
                checked={bannerOfDiscipline}
                label={<Skill id={14407} disableLink className={classes.boon} />}
                onChange={handleChange("bannerOfDiscipline")}
              />
              <CheckboxComponent
                value="bannerOfTactics"
                checked={bannerOfTactics}
                label={<Skill id={14408} disableLink className={classes.boon} />}
                onChange={handleChange("bannerOfTactics")}
              />
              <CheckboxComponent
                value="bannerOfDefense"
                checked={bannerOfDefense}
                label={<Skill id={14528} disableLink className={classes.boon} />}
                onChange={handleChange("bannerOfDefense")}
              />
            </FormGroup>
          </FormControl>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12} sm={6} md={4}>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">
              <Profession name="Guardian" /> signets
            </FormLabel>
            <FormGroup>
              <CheckboxComponent
                value="baneSignet"
                checked={baneSignet}
                label={<Skill id={9093} disableLink className={classes.boon} />}
                onChange={handleChange("baneSignet")}
              />
              <CheckboxComponent
                value="signetOfJudgment"
                checked={signetOfJudgment}
                label={<Skill id={9150} disableLink className={classes.boon} />}
                onChange={handleChange("signetOfJudgment")}
              />
              <CheckboxComponent
                value="signetOfMercy"
                checked={signetOfMercy}
                label={<Skill id={9163} disableLink className={classes.boon} />}
                onChange={handleChange("signetOfMercy")}
              />
              <CheckboxComponent
                value="signetOfWrath"
                checked={signetOfWrath}
                label={<Skill id={9151} disableLink className={classes.boon} />}
                onChange={handleChange("signetOfWrath")}
              />
            </FormGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Special effects</FormLabel>
            <FormGroup>
              <CheckboxComponent
                value="exposed"
                checked={exposed}
                label={<CommonEffect name="Exposed" disableLink className={classes.boon} />}
                onChange={handleChange("exposed")}
              />
              <CheckboxComponent
                value="lightArmor"
                checked={lightArmor}
                label={
                  <>
                    <Typography>Low boss armor (VG, KC)</Typography>
                    <Typography variant="caption" className={classes.tinyNote}>
                      1910 vs 2597{" "}
                    </Typography>
                  </>
                }
                onChange={handleChange("lightArmor")}
              />
            </FormGroup>
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
};

export default withStyles(styles)(Buffs);
