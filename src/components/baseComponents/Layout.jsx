import { Box, Container, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';

const Layout = ({ children, ContainerProps, disableContainer = false }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  return (
    <>
      {(!disableContainer && !isMobile && (
        <Container maxWidth="lg" {...ContainerProps}>
          <Box
            sx={{
              padding: 2,
              backgroundColor: 'background.default',
              boxShadow: 5,
            }}
          >
            {children}
          </Box>
        </Container>
      )) || <Box p={2}>{children}</Box>}
    </>
  );
};

export default Layout;
