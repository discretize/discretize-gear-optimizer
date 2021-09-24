import { TextField, withStyles } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeExtraModifiers,
  changeExtraModifiersError,
  getExtraModifiers,
} from '../../../state/slices/extraModifiers';

const styles = (theme) => ({
  text: {
    width: '100%',
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
      dispatch(changeExtraModifiersError(''));
    } else {
      dispatch(
        changeExtraModifiersError(
          'Invalid Format. Example: [{ "buff": { "Power": 750, "Condition Damage": 750 } }, { "buff": { "Precision": 750 } } ]',
        ),
      );
    }
  };
  return (
    <TextField
      label="Extra Modifiers"
      className={classes.text}
      multiline
      rows={6}
      value={text}
      error={error !== ''}
      helperText={error}
      onChange={handleChange}
    />
  );
};

export default withStyles(styles)(ExtraModifiers);
