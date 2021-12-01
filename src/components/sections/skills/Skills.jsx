import { Typography, withStyles } from '@material-ui/core';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { Skill } from 'gw2-ui-bulk';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSkills, toggleSkill } from '../../../state/slices/skills';
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
  const skillState = useSelector(getSkills);

  const { t } = useTranslation();

  const handleCheckboxChange = (id) => (e) => {
    dispatch(toggleSkill({ id, enabled: e.target.checked }));
  };

  if (!data || data.length < 1) {
    return t('This class does not appear to have skills with extra buffs');
  }

  return data.map((skill) => (
    <div key={skill.id}>
      <CheckboxComponent
        value={skill.id}
        checked={Boolean(skillState[skill.id])}
        className={classes.checkbox}
        label={
          <div className={classes.label}>
            <Skill id={skill.gw2id} disableLink className={classes.skill} />
            {skill.subText && (
              <Typography className={classes.subText}>
                {
                  // i18next-extract-mark-context-next-line {{skillSubText}}
                  t('skillSubText', { context: skill.subText })
                }
              </Typography>
            )}
          </div>
        }
        onChange={handleCheckboxChange(skill.id)}
      />
    </div>
  ));
};

export default withStyles(styles)(Skills);
