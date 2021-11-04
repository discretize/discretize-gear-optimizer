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
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';
import { Item } from 'gw2-ui-bulk';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeExtra, getExtra } from '../../../state/slices/extras';

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

const GW2Select = ({ classes, name, label, modifierData, modifierDataById }) => {
  const dispatch = useDispatch();
  const bigValue = useSelector(getExtra(name));

  const { t } = useTranslation();

  const handleChange = (event) => {
    if (event.target.value !== undefined)
      dispatch(changeExtra({ key: event.target.name, value: event.target.value }));
  };

  const userLang = navigator.language || navigator.userLanguage;
  const isChinese = userLang.includes('zh');
  // return an array in the select: https://github.com/mui-org/material-ui/issues/16181
  // Fragments are not supported as children!
  return (
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <Select
        value={bigValue || ''}
        input={<Input name={name} id={name} />}
        onChange={handleChange}
        renderValue={(selected) => {
          const item = modifierDataById[selected];
          return (
            <Item
              id={item.gw2id}
              disableLink
              {...(!isChinese && { text: item.text.replace('Superior ', '') })}
              className={classes.item}
            />
          );
        }}
      >
        [
        <MenuItem value="">
          <em>
            <Trans>None</Trans>
          </em>
        </MenuItem>
        ,
        {modifierData.map((category) => {
          return [
            <ListSubheader disableSticky>
              {
                // i18next-extract-mark-context-next-line {{extraSection}}
                t('extraSection', { context: category.section })
              }
            </ListSubheader>,
            category.items.map((item) => (
              <MenuItem key={item.id} value={item.id} className={classes.menuItem}>
                <ListItemText
                  primary={
                    <Item
                      id={item.gw2id}
                      disableLink
                      {...(!isChinese && { text: item.text.replace('Superior ', '') })}
                    />
                  }
                  secondary={
                    <Typography className={classes.subText}>
                      {
                        // i18next-extract-mark-context-next-line {{extraSubText}}
                        t('extraSubText', { context: item.subText })
                      }
                    </Typography>
                  }
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
