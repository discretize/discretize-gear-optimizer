import { Chip, TextField, withStyles } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Item } from 'gw2-ui-bulk';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changePriority, getPriority } from '../../state/slices/priorities';
import { firstUppercase } from '../../utils/usefulFunctions';

const styles = (theme) => ({
  text: {
    color: '#ddd !important',
  },
  textfield: {
    minWidth: 180,
  },
});

export const AFFIXES = [
  'BERSERKER',
  'ZEALOT',
  'SOLDIER',
  // 'FORSAKEN',  exotic
  'VALKYRIE',
  'HARRIER',
  // 'PALADIN', PVP
  'COMMANDER',
  // 'DEMOLISHER', PVP
  // 'SWASHBUCKLER', PVP
  'MARAUDER',
  // 'AVATAR', PVP
  // 'DESTROYER', PVP
  'VIGILANT',
  'CRUSADER',
  'WANDERER',
  'DIVINER',
  // 'WIZARD', PVP
  'VIPER',
  'GRIEVING',
  // 'SAGE', PVP
  'MARSHAL',
  // 'CAPTAIN', exotic
  'RAMPAGER',
  'ASSASSIN',
  'SERAPH',
  'KNIGHT',
  'CAVALIER',
  'NOMAD',
  'SETTLER',
  'GIVER',
  'TRAILBLAZER',
  'MINSTREL',
  'SENTINEL',
  'SHAMAN',
  'SINISTER',
  'CARRION',
  'RABID',
  'DIRE',
  // 'APOSTATE', exotic
  'PLAGUEDOCTOR',
  'BRINGER',
  'CLERIC',
  'MAGI',
  'APOTHECARY',
  'CELESTIAL',
];

const Affixes = ({ classes }) => {
  const dispatch = useDispatch();
  const affixes = useSelector(getPriority('affixes'));

  return (
    <Autocomplete
      multiple
      disableCloseOnSelect
      id="tags-standard"
      options={AFFIXES}
      getOptionLabel={(option) => firstUppercase(option)}
      value={affixes}
      onChange={(event, value) => dispatch(changePriority({ key: 'affixes', value: value }))}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="standard"
          label="Affixes"
          placeholder="Select Affixes"
          className={classes.textfield}
        />
      )}
      renderOption={(option) => (
        <Item
          stat={firstUppercase(option)}
          type="Ring"
          disableLink
          text={firstUppercase(option)}
          className={classes.text}
        />
      )}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <Chip
            key={option}
            variant="outlined"
            label={firstUppercase(option)}
            {...getTagProps({ index })}
          />
        ))
      }
    />
  );
};

export default withStyles(styles)(Affixes);
