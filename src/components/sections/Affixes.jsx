import { firstUppercase } from '@discretize/react-discretize-components';
import { Chip, TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { Item } from 'gw2-ui-bulk';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from 'tss-react/mui';
import { changePriority, getPriority } from '../../state/slices/priorities';
import { Affix } from '../../utils/gw2-data';

const AFFIXES = Object.keys(Affix);

const useStyles = makeStyles()((theme) => ({
  text: {
    color: '#ddd !important',
  },
  textfield: {
    minWidth: 180,
  },
}));

const Affixes = () => {
  const { classes } = useStyles();

  const dispatch = useDispatch();
  const affixes = useSelector(getPriority('affixes'));
  const { t } = useTranslation();
  return (
    <Autocomplete
      multiple
      disableCloseOnSelect
      id="tags-standard"
      options={AFFIXES}
      getOptionLabel={(option) => firstUppercase(option)}
      value={affixes}
      onChange={(event, value) => dispatch(changePriority({ key: 'affixes', value }))}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="standard"
          label={t('Affixes')}
          placeholder={t('Select Affixes')}
          className={classes.textfield}
        />
      )}
      renderOption={(prop, option) => (
        <li {...prop}>
          <Item
            stat={firstUppercase(option)}
            type="Ring"
            disableLink
            text={
              // i18next-extract-mark-context-next-line {{affix}}
              firstUppercase(t('affix', { context: option }))
            }
            className={classes.text}
          />
        </li>
      )}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <Chip
            key={option}
            variant="outlined"
            label={
              // i18next-extract-mark-context-next-line {{affix}}
              firstUppercase(t('affix', { context: option }))
            }
            {...getTagProps({ index })}
          />
        ))
      }
    />
  );
};

export default Affixes;
