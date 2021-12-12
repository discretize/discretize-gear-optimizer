import { Chip, TextField, withStyles } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Item } from 'gw2-ui-bulk';
import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { changePriority, getPriority } from '../../state/slices/priorities';
import { firstUppercase } from 'react-discretize-components';
import { Affix } from '../../utils/gw2-data';

const AFFIXES = Object.keys(Affix);

const styles = (theme) => ({
  text: {
    color: '#ddd !important',
  },
  textfield: {
    minWidth: 180,
  },
});

const Affixes = ({ classes }) => {
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
      renderOption={(option) => (
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

export default withStyles(styles)(Affixes);
