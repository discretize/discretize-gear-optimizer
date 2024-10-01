import SettingsIcon from '@mui/icons-material/Settings';
import { ClickAwayListener, Grow, IconButton, Paper, Popper } from '@mui/material';
import React from 'react';

interface SettingsProps {
  children: React.ReactNode;
  maxWidth: React.CSSProperties['maxWidth'];
}

export default function Settings({ children, maxWidth = 'unset' }: SettingsProps) {
  const anchorRef = React.useRef<HTMLButtonElement | null>(null);

  const [open, setOpen] = React.useState(false);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: MouseEvent | TouchEvent) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as Node)) {
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
        // onClose={handleClose}
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
