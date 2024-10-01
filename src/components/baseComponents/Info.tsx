import { Box, Paper, Typography } from '@mui/material';
import React from 'react';

interface InfoProps {
  children: React.ReactNode;
  direction?: React.CSSProperties['flexDirection'];
  variant?: React.ComponentProps<typeof Typography>['variant'];
  icon?: React.ReactNode;
}

export default function Info({
  children,
  direction = 'row',
  variant = 'caption',
  icon,
}: InfoProps) {
  return (
    <Paper sx={{ mt: 0.5, mb: 1 }} elevation={0}>
      <Box sx={{ p: 1, display: 'flex', flexDirection: direction }}>
        <Box sx={{ mr: 1 }}>{icon}</Box>
        <Typography variant={variant} sx={{ mb: 0 }}>
          {children}
        </Typography>
      </Box>
    </Paper>
  );
}
