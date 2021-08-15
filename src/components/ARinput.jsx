import {
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  Typography,
  withStyles,
  Grid,
} from '@material-ui/core';
import { Attribute, Item } from 'gw2-ui-bulk';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeAR, getAR, changeOmnipotion, getOmniPotion } from '../state/gearOptimizerSlice';
import HelperIcon from './HelperIcon';
import CheckboxComponent from './baseComponents/CheckboxComponent';

const styles = (theme) => ({
  root: {
    marginBottom: theme.spacing(2),
  },
  margin: {
    width: 190,
    margin: theme.spacing(1),
  },
  grid: {
    justifyContent: 'center',
  },
});

const ARinput = ({ classes }) => {
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
    <div className={classes.root}>
      <Typography variant="h5">
        <Attribute name="Agony Resistance" disableLink disableText /> Agony Resistance{' '}
        <HelperIcon text="Adds 150% of your Agony Resistance to Precision, Toughness and Concentration." />
      </Typography>
      <Grid container alignItems="center" justifyContent="flex-start">
        <Grid item xs>
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
        <Grid item xs>
          <FormControl className={classes.margin}>
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
        <Grid item xs={12} md={4} />
      </Grid>
    </div>
  );
};

export default withStyles(styles)(ARinput);
