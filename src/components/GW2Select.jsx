import {
  FormControl,
  Input,
  InputLabel,
  ListItemText,
  ListSubheader,
  MenuItem,
  Select,
  Typography,
  withStyles,
} from '@material-ui/core';
import { Item } from 'gw2-ui-bulk';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeExtras, getExtra } from '../state/gearOptimizerSlice';

const styles = (theme) => ({
  formControl: {
    width: '100%',
  },
  sectionText: {
    fontWeight: 200,
    textAlign: 'left',
    marginTop: theme.spacing(1),
  },
  subText: {
    fontWeight: 100,
    textAlign: 'right',
  },
  menuItem: {
    whiteSpace: 'normal',
  },
  item: { lineHeight: '1 !important' },
});

const GW2Select = ({ classes, name, label, data }) => {
  const dispatch = useDispatch();
  const bigValue = useSelector(getExtra(name));

  const handleChange = (event) => {
    if (event.target.value !== undefined)
      dispatch(changeExtras({ key: event.target.name, value: event.target.value }));
  };

  // return an array in the select: https://github.com/mui-org/material-ui/issues/16181
  // Fragments are not supported as children!
  return (
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <Select
        value={bigValue}
        input={<Input name={name} id={name} />}
        onChange={handleChange}
        renderValue={(selected) => {
          const item = data
            .flatMap((category) => category.items)
            .filter((v) => v.id === selected)[0];
          return (
            <Item
              id={item.gw2_id}
              disableLink
              text={item.text.replace('Superior ', '')}
              className={classes.item}
            ></Item>
          );
        }}
      >
        [
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        ,
        {data.map((category) => {
          return [
            <ListSubheader disableSticky>{category.section}</ListSubheader>,
            category.items.map((item) => (
              <MenuItem key={item.id} value={item.id} className={classes.menuItem}>
                <ListItemText
                  primary={
                    <Item id={item.gw2_id} disableLink text={item.text.replace('Superior ', '')} />
                  }
                  secondary={<Typography className={classes.subText}>{item.subText}</Typography>}
                />
              </MenuItem>
            )),
          ];
        })}
        ]
      </Select>
    </FormControl>
  );
};
export default withStyles(styles)(GW2Select);
