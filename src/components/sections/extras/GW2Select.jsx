import { Item } from '@discretize/gw2-ui-new';
import {
  Box,
  FormControl,
  Input,
  InputLabel,
  ListItemText,
  ListSubheader,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import { Trans, useI18next, useTranslation } from 'gatsby-plugin-react-i18next';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeExtra, getExtra } from '../../../state/slices/extras';
import AmountInput from '../../baseComponents/AmountInput';

const GW2Select = ({ name, label, modifierData, modifierDataById }) => {
  const dispatch = useDispatch();
  const bigValue = useSelector(getExtra(name));

  const { amountData } = modifierDataById[bigValue] || {};

  const { language } = useI18next();
  const { t } = useTranslation();

  const handleChange = (event) => {
    if (event.target.value !== undefined)
      dispatch(changeExtra({ key: event.target.name, value: event.target.value }));
  };

  const isChinese = language === 'zh';
  // return an array in the select: https://github.com/mui-org/material-ui/issues/16181
  // Fragments are not supported as children!
  return (
    <Box justifyContent="space-between" display="flex" maxWidth="648px" mb={2}>
      <Box>
        <FormControl sx={{ width: '100%' }} variant="standard">
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
                  style={{ lineHeight: '1 !important' }}
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
                  <MenuItem
                    key={item.id}
                    value={item.id}
                    sx={{
                      whiteSpace: 'normal',
                    }}
                  >
                    <ListItemText
                      primary={
                        <Item
                          id={item.gw2id}
                          disableLink
                          {...(!isChinese && { text: item.text.replace('Superior ', '') })}
                        />
                      }
                      secondary={
                        <Typography
                          sx={{
                            fontWeight: 100,
                            fontSize: '0.8rem',
                            textAlign: 'right',
                          }}
                        >
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
      </Box>
      <Box>
        {amountData ? (
          <AmountInput
            placeholder={amountData.default}
            // i18next-extract-mark-context-next-line {{amountLabel}}
            endLabel={t('amountLabel', { context: amountData.label })}
            // handleAmountChange={handleAmountChange(id)}
            // value={amount}
            maxWidth={32}
          />
        ) : null}
      </Box>
    </Box>
  );
};
export default GW2Select;
