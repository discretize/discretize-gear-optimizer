import { Skill } from '@discretize/gw2-ui-new';
import { NoSelection } from '@discretize/react-discretize-components';
import { MenuItem, Select } from '@mui/material';
import { useDispatch } from 'react-redux';
import { makeStyles } from 'tss-react/mui';
import { changeSkill } from '../../../../state/slices/buildPage';

const useStyles = makeStyles()((theme) => ({
  skillSelect: {
    width: 60,
    height: 60,
    marginRight: theme.spacing(0.5),
  },
}));

export default function SkillSelect({ name, value, skillList }) {
  const dispatch = useDispatch();
  const { classes } = useStyles();

  const handleChangeSkill = (e) => {
    dispatch(changeSkill({ key: e.target.name, value: e.target.value }));
  };

  return (
    <Select
      variant="standard"
      value={value}
      name={name}
      onChange={handleChangeSkill}
      className={classes.skillSelect}
      renderValue={(skill) =>
        skill === '' ? (
          <div style={{ fontSize: 60, lineHeight: 0 }}>
            <NoSelection />
          </div>
        ) : (
          <Skill id={skill} disableText style={{ fontSize: 60, lineHeight: 0 }} />
        )
      }
      displayEmpty
    >
      {skillList.map((skill) => (
        <MenuItem value={skill.id} key={skill.id}>
          <Skill
            id={skill.id}
            disableLink
            disableText
            style={{ marginRight: 4, fontSize: '1.2rem' }}
          />
          <Skill id={skill.id} disableLink disableTooltip disableIcon />
        </MenuItem>
      ))}
    </Select>
  );
}
