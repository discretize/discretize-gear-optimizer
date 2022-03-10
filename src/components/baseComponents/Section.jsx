import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import { Box, Divider, Grid, Paper, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';

// First disables the delimiting line above!
const Section = ({ first, title, helpText, extraInfo, content }) => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('md'));

  const SectionInfo = ({ children }) => (
    <>
      <Typography variant="h5">{title}</Typography>
      {children && (
        <Paper mt={0.5} mb={1} elevation={0}>
          <Box p={1}>
            <div>
              <LiveHelpIcon />
            </div>
            <Typography variant="caption">{children}</Typography>
          </Box>
        </Paper>
      )}
    </>
  );

  return (
    <Grid item container spacing={2} mb={2} sx={{ borderColor: 'primary.main' }}>
      {!first && (
        <Grid item xs={12}>
          <Divider />
        </Grid>
      )}
      <Grid item xs={12} sm={3}>
        <SectionInfo>{helpText}</SectionInfo>
        {extraInfo}
        {isSmall && extraInfo && <Divider sx={{ marginTop: 2 }} />}
      </Grid>

      <Grid item xs={12} sm={9}>
        {content}
      </Grid>
    </Grid>
  );
};

export default Section;
