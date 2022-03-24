import {
  Box,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
  Switch,
  Typography,
} from '@mui/material';
import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from 'tss-react/mui';
import {
  changeCompareByPercent,
  changeFilterMode,
  getCompareByPercent,
  getFilterMode,
} from '../../../state/slices/controlsSlice';
import Settings from '../../baseComponents/Settings';

const useStyles = makeStyles()((theme) => ({
  comparisonLabel: {
    fontSize: '1rem',
  },
}));

/**
 * Settings component that displays settings on click for adjusting the table
 */
export default function ResultTableSettings() {
  const { classes } = useStyles();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const compareByPercent = useSelector(getCompareByPercent);
  const filterMode = useSelector(getFilterMode);

  return (
    <Settings>
      <Typography sx={{ fontWeight: 700 }}>
        <Trans>Result Display Settings:</Trans>
      </Typography>

      <Box sx={{ mt: 1.5 }}>
        <FormControlLabel
          control={
            <Switch
              checked={compareByPercent}
              onChange={(e) => dispatch(changeCompareByPercent(e.target.checked))}
              name="checked"
              color="primary"
            />
          }
          label={t('Compare by percentage')}
          classes={{ label: classes.comparisonLabel }}
        />
      </Box>

      <Box sx={{ mt: 1.5 }}>
        <FormControl>
          <FormLabel id="filter-button-group">
            <Trans>Filter results:</Trans>
          </FormLabel>

          <RadioGroup
            aria-labelledby="filter-button-group"
            value={filterMode}
            onChange={(e) => dispatch(changeFilterMode(e.target.value))}
            name="checked"
            color="primary"
          >
            {[
              ['None', t('No Filtering')],
              ['Combinations', t('All Combinations')],
              ['Sigils', t('Sigils')],
              ['Runes', t('Runes')],
              ['Nourishment', t('Food')],
              ['Enhancement', t('Utility')],
            ].map(([value, label]) => (
              <FormControlLabel
                key={value}
                value={value}
                control={<Radio />}
                label={label}
                classes={{ label: classes.comparisonLabel }}
              />
            ))}
          </RadioGroup>

          <FormHelperText sx={{ maxWidth: 320 }}>
            <Trans>
              Displays only the top result for each rune, sigil, food, or utility option or each
              combination of all of the above (up to 100 results).
            </Trans>
          </FormHelperText>
        </FormControl>
      </Box>
    </Settings>
  );
}
