import { Item } from '@discretize/gw2-ui-new';
import CheckIcon from '@mui/icons-material/Check';
import { Box, Chip, Divider, ListItemText, TextField, Typography } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import classNames from 'classnames';
import { useI18next, useTranslation } from 'gatsby-plugin-react-i18next';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from 'tss-react/mui';
import { changeExtra, getExtra } from '../../state/slices/extras';

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

const ExtrasSelect = ({ type, label, modifierData, modifierDataById: data }) => {
  const { classes } = useStyles();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { language } = useI18next();
  const isChinese = language === 'zh';

  const currentValue = useSelector(getExtra(type)) || [];

  const allIds = React.useMemo(
    () => modifierData.flatMap(({ items }) => items.map((item) => item.id)),
    [modifierData],
  );

  return (
    <Autocomplete
      multiple
      disableCloseOnSelect
      options={allIds}
      getOptionLabel={(id) =>
        `${id} ${data[id]?.text} ${
          data[id]?.subText ? t('extraSubText', { context: data[id]?.subText }) : ''
        }`
      }
      groupBy={(id) => data[id]?.section}
      value={currentValue}
      onChange={(event, value) => dispatch(changeExtra({ key: type, value }))}
      renderInput={(params) => (
        <TextField {...params} variant="standard" label={label} margin="dense" />
      )}
      renderGroup={({ group, children }) => (
        <React.Fragment key={group}>
          <Typography variant="caption" className={classes.group}>
            {group}
          </Typography>
          {children}
          <Divider sx={{ marginTop: 1, marginBottom: 0 }} />
        </React.Fragment>
      )}
      renderOption={({ className, ...prop }, id) => (
        <li {...prop} className={classNames(classes.option, className)}>
          <Box sx={{ width: 32 }}>
            {currentValue.includes(id) && <CheckIcon sx={{ fontSize: '1rem' }} />}
          </Box>
          <ListItemText
            primary={
              <>
                <Item
                  id={data[id]?.gw2id}
                  disableLink
                  {...(!isChinese && { text: data[id]?.text.replace('Superior ', '') })}
                />
                {data[id]?.subText && (
                  <Typography variant="caption" sx={{ marginLeft: 1, fontWeight: 200 }}>
                    {t('extraSubText', { context: data[id]?.subText })}
                  </Typography>
                )}
              </>
            }
          />
        </li>
      )}
      renderTags={(value, getTagProps) =>
        value.map((id, index) => (
          <Chip
            variant="outlined"
            label={
              <Item
                id={data[id]?.gw2id}
                disableLink
                {...(!isChinese && {
                  text: data[id]?.text
                    .replace('Superior ', '')
                    .replace('Rune of the', '')
                    .replace('Rune of ', '')
                    .replace('Bowl of ', '')
                    .replace('Plate of ', '')
                    .replace(' Sharpening', '')
                    .replace('Superior ', '')
                    .replace(' Maintenance', '')
                    .replace(' Focusing', '')
                    .replace(' Tuning', '')
                    .replace('Holographic ', '')
                    .replace(' Masterful', ''),
                })}
                // disableText={currentValue.length > 4}
              />
            }
            {...getTagProps({ index })}
          />
        ))
      }
    />
  );
};

export default ExtrasSelect;
