import React, { useState } from "react";
import {
  Input,
  FormControlLabel,
  FormGroup,
  Checkbox,
  Select,
  withStyles,
  Typography
} from "@material-ui/core";

import { Skill, Attribute } from "gw2-ui";
import { useSelector, useDispatch } from "react-redux";
import { addSkill, removeSkill, getSkills, addModifier } from "../state/gearOptimizerSlice";
import CheckboxComponent from "./baseComponents/CheckboxComponent";

const styles = (theme) => ({
  text: {
    color: "#ddd !important"
  },
  label: {
    display: "flex"
  },
  subText: {
    fontWeight: 200
  },
  skill: {
    marginRight: theme.spacing.unit
  },
  checkbox: {}
});

const Skills = ({ classes, data }) => {
  const dispatch = useDispatch();
  const skills = useSelector(getSkills);

  const onChange = (skill) => (e) => {
    if (e.target.checked) {
      dispatch(addSkill({ value: skill.id }));
      dispatch(
        addModifier({
          id: skill.id,
          modifiers: skill.modifiers,
          gw2_id: skill.gw2_id
        })
      );
    } else {
      dispatch(removeSkill({ value: skill.id }));
    }
  };

  if (data.length < 1) {
    return null;
  }

  return (
    <div className={classes.root}>
      <Typography variant="h5">Skills </Typography>
      {data.map((skill) => (
        <CheckboxComponent
          key={skill.id}
          value={skill.id}
          checked={skills.indexOf(skill.id) > -1}
          className={classes.checkbox}
          label={
            <div className={classes.label}>
              <Skill id={skill.gw2_id} disableLink className={classes.skill} />
              {skill.subText && (
                <Typography className={classes.subText}>{skill.subText}</Typography>
              )}
            </div>
          }
          onChange={onChange(skill)}
        ></CheckboxComponent>
      ))}
    </div>
  );
};

export default withStyles(styles)(Skills);
