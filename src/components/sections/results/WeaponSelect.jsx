import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeControl, getControl, getProfession } from '../../../state/slices/controlsSlice';
import { Classes } from '../../../utils/gw2-data';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  gw2Item: {
    fontSize: '20px',
    color: '#AAAAAA',
  },
  formControl: {
    width: 100,
  },
}));

const WeaponSelect = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const profession = useSelector(getProfession);
  const wea1mh = useSelector(getControl('wea1mh'));
  const wea1oh = useSelector(getControl('wea1oh'));

  const classData = Classes[profession];

  // const canOffhand1 =
  //   classData.weapons.mainHand.find((w) => w.name === wea1mh).type !== 'twoHanded';

  return (
    <>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">1. Wea MH</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={wea1mh || ''}
          onChange={(e) => dispatch(changeControl({ key: 'wea1mh', value: e.target.value }))}
        >
          {classData.weapons.mainHand.map((wea) => (
            <MenuItem value={wea.name}>{wea.name}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">1. Wea OH</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={wea1oh || ''}
          onChange={(e) => dispatch(changeControl({ key: 'wea1oh', value: e.target.value }))}
        >
          {classData.weapons.offHand.map((wea) => (
            <MenuItem value={wea.name}>{wea.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default WeaponSelect;
