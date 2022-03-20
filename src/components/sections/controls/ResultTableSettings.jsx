import { Box, FormControlLabel, Switch, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from 'tss-react/mui';
import {
  changeCompareByPercent,
  changeFilterByExtras,
  getCompareByPercent,
  getFilterByExtras,
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
  const filterByExtras = useSelector(getFilterByExtras);

  return (
    <Settings>
      <Typography sx={{ fontWeight: 700 }}>Result Settings:</Typography>

      <Box>
        <FormControlLabel
          control={
            <Switch
              checked={filterByExtras}
              onChange={(e) => dispatch(changeFilterByExtras(e.target.checked))}
              name="checked"
              color="primary"
            />
          }
          label={t('Only show one of each extra combination')}
          classes={{ label: classes.comparisonLabel }}
        />
      </Box>

      <Box>
        <FormControlLabel
          control={
            <Switch
              checked={compareByPercent}
              onChange={(e) => dispatch(changeCompareByPercent(e.target.checked))}
              name="checked"
              color="primary"
            />
          }
          label={t('% Comparison')}
          classes={{ label: classes.comparisonLabel }}
        />
      </Box>
    </Settings>
  );
}
