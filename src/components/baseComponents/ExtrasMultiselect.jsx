import { Item } from '@discretize/gw2-ui-new';
import CheckIcon from '@mui/icons-material/Check';
import { Box, Chip, Divider, ListItemText, TextField, Typography } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import classNames from 'classnames';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from 'tss-react/mui';
import { allExtrasModifiersById } from '../../assets/modifierdata';
import {
  changeExtraAmount,
  changeExtraIds,
  getExtrasData,
  getExtrasIds,
} from '../../state/slices/extras';
import AmountInput from './AmountInput';

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
  // const { language } = useI18next();
  // const isChinese = language === 'zh';
  // todo: replace this once dual sigils are not hardcoded with fake ids
  const isChinese = false;

  const currentIds = useSelector(getExtrasIds)[type] || [];

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
      value={currentIds}
      onChange={(event, value) => dispatch(changeExtraIds({ type, ids: value }))}
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
            {currentIds.includes(id) && <CheckIcon sx={{ fontSize: '1rem' }} />}
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

// separate component for now is mostly just for git diff reasons
const ExtrasSelectWithMediocreAmounts = (props) => {
  const { type } = props;
  const dispatch = useDispatch();
  const { t } = useTranslation();
  // const { language } = useI18next();
  // const isChinese = language === 'zh';
  // todo: replace this once dual sigils are not hardcoded with fake ids
  const isChinese = false;

  const handleAmountChange = (id) => (e) => {
    dispatch(changeExtraAmount({ type, id, amount: e.target.value }));
  };

  const currentIds = useSelector(getExtrasIds)[type] || [];
  const extrasData = useSelector(getExtrasData);

  return (
    <>
      <ExtrasSelect {...props} />
      {currentIds
        .filter((id) => allExtrasModifiersById[id].amountData)
        .map((id) => {
          const { gw2id, text, subText, amountData } = allExtrasModifiersById[id];
          const amount = extrasData[type][id]?.amount || '';
          return (
            <Box key={id} justifyContent="space-between" display="flex" maxWidth="648px">
              <Box>
                <Item
                  id={gw2id}
                  disableLink
                  {...(!isChinese && { text: text.replace('Superior ', '') })}
                />
                {subText && (
                  <Typography
                    sx={{
                      fontWeight: 100,
                      fontSize: '0.8rem',
                      textAlign: 'right',
                    }}
                  >
                    {
                      // i18next-extract-mark-context-next-line {{extraSubText}}
                      t('extraSubText', { context: subText })
                    }
                  </Typography>
                )}
              </Box>

              <Box>
                <AmountInput
                  placeholder={amountData.default}
                  // i18next-extract-mark-context-next-line {{amountLabel}}
                  endLabel={t('amountLabel', { context: amountData.label })}
                  handleAmountChange={handleAmountChange(id)}
                  value={amount}
                  maxWidth={32}
                />
              </Box>
            </Box>
          );
        })}
    </>
  );
};

export default React.memo(ExtrasSelectWithMediocreAmounts);
