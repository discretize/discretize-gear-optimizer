import SettingsIcon from '@mui/icons-material/Settings';
import { Box, FormControlLabel, IconButton, Popover, Switch, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from 'tss-react/mui';
import {
  changeCompareByPercent,
  changeFilterByExtras,
  getCompareByPercent,
  getFilterByExtras,
} from '../../../state/slices/controlsSlice';

const useStyles = makeStyles()((theme) => ({
  comparisonLabel: {
    fontSize: '1rem',
  },
}));

/**
 * Settings component that displays settings on click for adjusting the table
 */
export default function Settings() {
  const { classes } = useStyles();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  /*
   * Hide the settings popover as soon as the user scrolls.
   * Related mui issue (to disableScrollLock): https://github.com/mui/material-ui/issues/17353#issuecomment-1007275913
   */
  useEffect(() => {
    window.addEventListener('scroll', handleClose);
    return () => {
      window.removeEventListener('scroll', handleClose);
    };
  }, []);

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const compareByPercent = useSelector(getCompareByPercent);
  const filterByExtras = useSelector(getFilterByExtras);

  return (
    <>
      <IconButton aria-label="settings" size="medium" onClick={handleClick}>
        <SettingsIcon fontSize="inherit" />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        disableScrollLock
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Box sx={{ padding: 2 }}>
          <Typography>Settings</Typography>

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
        </Box>
      </Popover>
    </>
  );
}
