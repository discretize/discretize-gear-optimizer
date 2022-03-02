import CheckIcon from '@mui/icons-material/Check';
import { Box, Chip, Divider, TextField, Typography } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import classNames from 'classnames';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { CreateItem } from '@discretize/gw2-ui-new';
import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { Affix } from '../../utils/gw2-data';

const augumentAffixState = (array) =>
  array
    .filter((affix) => !!affix)
    .map((affix) => ({
      label: affix,
      category: Affix[affix].category,
    }));
const order = ['Power DPS', 'Condi DPS', 'Support', 'Hybrid', 'Open World', 'Custom'];
const AFFIXES = augumentAffixState(Object.keys(Affix))
  // eslint-disable-next-line id-length
  .sort((a, b) => {
    const aVal = order.indexOf(a.category);
    const bVal = order.indexOf(b.category);
    if (aVal === bVal) return 0;
    if (aVal > bVal) return 1;
    return -1;
  });

const useStyles = makeStyles()((theme) => ({
  input: {
    height: 40,
  },
  text: {
    color: '#ddd !important',
  },
  textfield: {
    minWidth: 180,
  },
  option: {
    paddingLeft: theme.spacing(5),
  },
  group: {
    fontWeight: 300,
    marginLeft: theme.spacing(2),
  },
}));

const AffixesSelect = ({ name, multiple, onChange, value: affixes }) => {
  const { classes } = useStyles();

  const { t } = useTranslation();

  return (
    <Autocomplete
      {...(multiple && { multiple: true, disableCloseOnSelect: true })}
      options={AFFIXES}
      isOptionEqualToValue={(option, value) => {
        return option.label === value.label;
      }}
      getOptionLabel={(option) => t('affix', { context: option.label })}
      groupBy={(option) => option.category}
      value={multiple ? augumentAffixState(affixes) : augumentAffixState([affixes])[0] || null}
      classes={{ inputRoot: classes.input }}
      onChange={onChange}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="standard"
          label={name || t('Affixes')}
          placeholder={t('Select Affixes')}
          margin="dense"
        />
      )}
      renderGroup={({ group, children }) => (
        <React.Fragment key={group}>
          <Typography variant="caption" className={classes.group}>
            {group}
          </Typography>
          {children}
          <Divider />
        </React.Fragment>
      )}
      renderOption={({ className, ...prop }, option) => (
        <li {...prop} className={classNames({ [classes.option]: multiple, [className]: true })}>
          {multiple && (
            <Box sx={{ width: 32 }}>
              {affixes.find((affix) => affix === option.label) && (
                <CheckIcon sx={{ fontSize: '1rem' }} />
              )}
            </Box>
          )}
          <CreateItem
            stat={option.label}
            type="Ring"
            disableLink
            text={
              // i18next-extract-mark-context-next-line {{affix}}
              t('affix', { context: option.label })
            }
            className={classes.text}
          />
        </li>
      )}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <Chip
            key={option.label}
            variant="outlined"
            label={
              // i18next-extract-mark-context-next-line {{affix}}
              t('affix', { context: option.label })
            }
            {...getTagProps({ index })}
          />
        ))
      }
    />
  );
};

export default AffixesSelect;
