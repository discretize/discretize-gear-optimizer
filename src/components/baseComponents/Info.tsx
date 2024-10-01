import { Box, Paper, Typography } from '@mui/material';

export default function Info({ children, direction = 'row', variant = 'caption', icon }) {
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
