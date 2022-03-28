import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import { Box, Paper, Typography } from '@mui/material';
import React from 'react';

export default function Info({ children, direction = 'column' }) {
  return (
    <Paper sx={{ mt: 0.5, mb: 1 }} elevation={0}>
      <Box sx={{ p: 1, display: 'flex', flexDirection: direction }}>
        <Box sx={{ mr: 1 }}>
          <LiveHelpIcon />
        </Box>
        <Typography variant="caption" paragraph sx={{ mb: 0 }}>
          {children}
        </Typography>
      </Box>
    </Paper>
  );
}
