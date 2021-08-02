import { Grid, TextField, Typography, withStyles } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import classNames from 'classnames';
import Item from 'gw2-ui/lib/Item';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeForcedSlot, getGeneric } from '../state/gearOptimizerSlice';
import { GEAR_SLOTS } from '../utils/gw2-data';
import { firstUppercase } from '../utils/usefulFunctions';
import { AFFIXES } from './priorities/Affixes';

const styles = (theme) => ({
  textField: {},
  root: {
    marginBottom: theme.spacing(2),
  },
  nowrap: {
    display: 'inline',
    whiteSpace: 'nowrap',
  },
  helperText: {
    fontSize: 12,
  },
});

const ForcedSlots = ({ classes, dualWielded }) => {
  const dispatch = useDispatch();
  const value = useSelector(getGeneric('forcedSlots'));

  let SLOTS = GEAR_SLOTS;
  if (!dualWielded) {
    SLOTS = GEAR_SLOTS.slice(0, 13);
  }

  const handleChange = (index) => (event, newInput) => {
    dispatch(changeForcedSlot({ index: index, value: newInput }));
  };

  const input2 = (name, index, offset) => {
    return (
      <Grid item xs={6} md={2} sm={4} key={name}>
        <Autocomplete
          options={AFFIXES}
          value={value[index + offset]}
          id={name}
          clearOnEscape
          onChange={handleChange(index + offset)}
          renderOption={(option) => (
            <Item
              stat={firstUppercase(option)}
              type="Ring"
              disableLink
              text={firstUppercase(option)}
              className={classes.text}
            />
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              className={classNames(classes.textField, classes.dense)}
              label={firstUppercase(name)}
              margin="dense"
            />
          )}
        />
      </Grid>
    );
  };
  return (
    <div className={classes.root}>
      <Typography variant="h5">Force Gear Slots </Typography>

      <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start">
        {SLOTS.slice(0, 6).map((s, index) => input2(s.name, index, 0))}
        {SLOTS.slice(6, 10).map((s, index) => input2(s.name, index, 6))}
        {SLOTS.slice(10).map((s, index) => input2(s.name, index, 10))}
      </Grid>
    </div>
  );
};
export default withStyles(styles)(ForcedSlots);
