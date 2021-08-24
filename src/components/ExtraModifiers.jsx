import { TextField, Typography, withStyles } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeExtraModifiers, getExtraModifiers } from '../state/gearOptimizerSlice';
import HelperIcon from './HelperIcon';

const styles = (theme) => ({
  root: {
    marginBottom: theme.spacing(2),
  },
  text: {
    width: '100%',
  },
  textWrapper: {
    padding: theme.spacing(1),
  },
});

function isJson(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

const ExtraModifiers = ({ classes }) => {
  const dispatch = useDispatch();
  const error = useSelector(getExtraModifiers('error'));
  const text = useSelector(getExtraModifiers('textBox'));

  const handleChange = (e) => {
    const val = e.target.value;
    dispatch(changeExtraModifiers({ key: 'textBox', value: val }));

    if (isJson(val)) {
      const stringified = JSON.stringify(JSON.parse(val));
      dispatch(changeExtraModifiers({ key: 'extraModifiers', value: stringified }));
      dispatch(changeExtraModifiers({ key: 'error', value: '' }));
    } else {
      dispatch(changeExtraModifiers({ key: 'error', value: 'Invalid Format' }));
    }
  };
  return (
    <div className={classes.root}>
      <Typography variant="h5">
        Extra modifiers
        <HelperIcon text='Allows adding arbitrary extra modifiers. The textbox expects valid JSON formatting. For multiple modifiers please use a list. For more information visit the github repository. Example: [{ "buff": { "Power": 750, "Condition Damage": 750 } }, { "buff": { "Precision": 750 } } ]' />
      </Typography>
      <div className={classes.textWrapper}>
        <TextField
          label="Extra Modifiers"
          className={classes.text}
          multiline
          value={text}
          error={error !== ''}
          helperText={error}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default withStyles(styles)(ExtraModifiers);
