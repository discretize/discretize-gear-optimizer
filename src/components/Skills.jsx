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
import { addSkill, removeSkill, getSkills } from "../state/gearOptimizerSlice";
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

  const onChange = (skillId) => (e) => {
    if (e.target.checked) {
      dispatch(addSkill({ value: skillId }));
    } else {
      dispatch(removeSkill({ value: skillId }));
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
          onChange={onChange(skill.id)}
        ></CheckboxComponent>
      ))}
    </div>
  );
};

export default withStyles(styles)(Skills);
