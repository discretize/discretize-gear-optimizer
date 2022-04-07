import SettingsIcon from '@mui/icons-material/Settings';
import { ClickAwayListener, Grow, IconButton, Paper, Popper } from '@mui/material';
import React from 'react';

export default function Settings({ children, maxWidth = 'unset' }) {
  const anchorRef = React.useRef();

  const [open, setOpen] = React.useState(false);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <IconButton aria-label="settings" size="medium" onClick={handleToggle} ref={anchorRef}>
        <SettingsIcon fontSize="inherit" />
      </IconButton>

      <Popper
        style={{ zIndex: 99 }}
        open={open}
        anchorEl={anchorRef.current}
        onClose={handleClose}
        placement="bottom-end"
        transition
        role={undefined}
        disablePortal
      >
        {({ TransitionProps }) => (
          <Grow {...TransitionProps}>
            <Paper sx={{ padding: 2, maxWidth }} elevation={6}>
              <ClickAwayListener onClickAway={handleClose}>
                <div>{children}</div>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
}
