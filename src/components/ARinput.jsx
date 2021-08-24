import { FormControl, Grid, Input, InputAdornment, InputLabel } from '@material-ui/core';
import { Attribute, Item } from 'gw2-ui-bulk';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeAR, changeOmnipotion, getAR, getOmniPotion } from '../state/gearOptimizerSlice';
import CheckboxComponent from './baseComponents/CheckboxComponent';

const ARinput = () => {
  const dispatch = useDispatch();
  const ar = useSelector(getAR);
  const omnipotion = useSelector(getOmniPotion);

  function handleChange(event) {
    const { value } = event.target;
    if (value.match('^[0-9]*$')) {
      dispatch(changeAR(value), [dispatch]);
    }
  }

  return (
    <Grid container spacing={2} alignItems="center" justifyContent="flex-start">
      <Grid item xs={12}>
        <CheckboxComponent
          value={omnipotion}
          checked={omnipotion}
          label={
            <>
              Include <Item id={79722} />
            </>
          }
          onChange={(e) => dispatch(changeOmnipotion(e.target.checked))}
        />
      </Grid>
      <Grid item xs={12}>
        <FormControl>
          <InputLabel htmlFor="ar_input-with-icon-adornment">Agony Resistance</InputLabel>
          <Input
            id="ar_input-with-icon-adornment"
            value={ar}
            endAdornment={
              <InputAdornment position="end">
                <Attribute name="Agony Resistance" disableLink disableText />
              </InputAdornment>
            }
            onChange={handleChange}
          />
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default ARinput;
