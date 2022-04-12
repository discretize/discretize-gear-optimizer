import { Box, Container } from '@mui/material';
import React from 'react';

const Layout = ({ children, ContainerProps, disableContainer = false }) => {
  return (
    <>
      {(!disableContainer && (
        <Container disableGutters maxWidth="lg" {...ContainerProps}>
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
