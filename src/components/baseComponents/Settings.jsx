import SettingsIcon from '@mui/icons-material/Settings';
import { Box, IconButton, Popover } from '@mui/material';
import React, { useEffect } from 'react';

export default function Settings({ children }) {
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
        <Box sx={{ padding: 2 }}>{children}</Box>
      </Popover>
    </>
  );
}
