import { Typography, withStyles } from '@material-ui/core';
import { Skill } from 'gw2-ui-bulk';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addSkill, getSkills, removeSkill } from '../../../state/gearOptimizerSlice';
import CheckboxComponent from '../../baseComponents/CheckboxComponent';

const styles = (theme) => ({
  text: {
    color: '#ddd !important',
  },
  label: {
    display: 'flex',
  },
  subText: {
    fontWeight: 200,
  },
  skill: {
    marginRight: theme.spacing(1),
  },
  checkbox: {},
});

const Skills = ({ classes, data }) => {
  const dispatch = useDispatch();
  const skills = useSelector(getSkills);

  const onChange = (skill) => (e) => {
    if (e.target.checked) {
      dispatch(addSkill({ value: skill.id }));
    } else {
      dispatch(removeSkill(skill.id));
    }
  };

  if (!data || data.length < 1) {
    return 'This class does not appear to have skills with extra buffs';
  }

  return data.map((skill) => (
    <div key={skill.id}>
      <CheckboxComponent
        value={skill.id}
        checked={skills.indexOf(skill.id) > -1}
        className={classes.checkbox}
        label={
          <div className={classes.label}>
            <Skill id={skill.gw2_id} disableLink className={classes.skill} />
            {skill.subText && <Typography className={classes.subText}>{skill.subText}</Typography>}
          </div>
        }
        onChange={onChange(skill)}
      />
    </div>
  ));
};

export default withStyles(styles)(Skills);
