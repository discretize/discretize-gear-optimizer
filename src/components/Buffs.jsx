import {
  Chip,
  FormControl,
  FormGroup,
  FormLabel,
  Grid,
  Typography,
  withStyles
} from "@material-ui/core";
import { Boon, CommonEffect, Condition, Skill, Trait } from "gw2-ui";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addModifier,
  changeGeneric,
  getGeneric,
  removeModifier
} from "../state/gearOptimizerSlice";
import { firstUppercase } from "../utils/usefulFunctions";
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

const Buffs = ({ classes, data, presets }) => {
  const dispatch = useDispatch();

  const handleChange = (buff) => (event) => {
    // handle the modifier
    if (event.target.checked) {
      dispatch(
        addModifier({
          id: buff.id,
          modifiers: buff.modifiers
        })
      );
    } else {
      dispatch(removeModifier(buff.id));
    }

    // change the value
    dispatch(changeGeneric({ toChange: buff.id, value: event.target.checked }));
  };

  const handleTemplateClick = (index) => (event) => {
    // set all the buffs to disabled
    [].concat
      .apply(
        [],
        data.map((d) => d.items)
      )
      .forEach((elem) => dispatch(changeGeneric({ toChange: elem.id, value: false })));

    // apply the preset
    if (presets[index].buffs)
      presets[index].buffs.forEach((b) => dispatch(changeGeneric({ toChange: b, value: true })));
  };

  // Dynamic component creation for buffs from a string
  const components = {
    Boon: Boon,
    Trait: Trait,
    Skill: Skill,
    CommonEffect: CommonEffect,
    Condition: Condition
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
        {data.map((section) => (
          <Grid key={section.section} item xs={12} sm={6} md={4}>
            <FormControl component="fieldset" className={classes.formControl}>
              <FormLabel component="legend">
                <div dangerouslySetInnerHTML={{ __html: section.section }}></div>
              </FormLabel>
              <FormGroup>
                {section.items.map((buff) => {
                  let Component, name;

                  switch (buff.armory_type) {
                    case "Text":
                      return (
                        <CheckboxComponent
                          key={buff.id}
                          value={buff.id}
                          checked={useSelector(getGeneric(buff.id))}
                          label={
                            <>
                              <Typography>{buff.text}</Typography>
                              <Typography variant="caption" className={classes.tinyNote}>
                                {buff.subText}
                              </Typography>
                            </>
                          }
                          onChange={handleChange(buff)}
                        />
                      );

                      break;
                    case "Boon":
                    case "Condition":
                    case "CommonEffect":
                      name = buff.id.toLowerCase();
                      name = firstUppercase(name);
                    default:
                      Component = components[buff.armory_type];
                  }

                  return (
                    <CheckboxComponent
                      key={buff.id}
                      value={buff.id}
                      checked={useSelector(getGeneric(buff.id))}
                      label={
                        <Component
                          id={buff.gw2_id}
                          name={name}
                          disableLink
                          className={classes.boon}
                        />
                      }
                      onChange={handleChange(buff)}
                    />
                  );
                })}
              </FormGroup>
            </FormControl>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default withStyles(styles)(Buffs);
