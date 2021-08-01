import {
  FormControl,
  Input,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  Typography,
  withStyles,
} from '@material-ui/core';
import { Item } from 'gw2-ui';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeExtras, getExtra } from '../state/gearOptimizerSlice';

const styles = (theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: 250,
  },
  sectionText: {
    fontWeight: 200,
    textAlign: 'center',
    marginTop: theme.spacing(1),
  },
  subText: {
    fontWeight: 100,
    textAlign: 'right',
  },
  menuItem: {
    whiteSpace: 'normal',
  },
});

const GW2Select = ({ classes, name, label, data }) => {
  const dispatch = useDispatch();
  const bigValue = useSelector(getExtra(name));

  const handleChange = (event) => {
    dispatch(changeExtras({ key: event.target.name, value: event.target.value }));
  };

  const values = [];
  for (const elem of data) {
    values.push({ type: 'section', text: elem.section });
    for (const item of elem.items) {
      values.push({ type: 'item', ...item });
    }
  }

  return (
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <Select
        value={bigValue}
        input={<Input name={name} id={name} />}
        onChange={handleChange}
        renderValue={(selected) => {
          const item = values.filter((v) => v.id === selected)[0];
          return (
            <Item id={item.gw2_id} disableLink text={item.text.replace('Superior ', '')}></Item>
          );
        }}
      >
        {values.map((v) => {
          return v.type === 'section' ? (
            <Typography key={v.text} className={classes.sectionText}>
              {v.text}
            </Typography>
          ) : (
            <MenuItem key={v.id} value={v.id} className={classes.menuItem}>
              <ListItemText
                primary={<Item id={v.gw2_id} disableLink text={v.text.replace('Superior ', '')} />}
                secondary={<Typography className={classes.subText}>{v.subText}</Typography>}
              />
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};
export default withStyles(styles)(GW2Select);
