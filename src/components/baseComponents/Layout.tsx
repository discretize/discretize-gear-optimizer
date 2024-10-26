import { Box, Container } from '@mui/material';
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  ContainerProps?: Partial<React.ComponentProps<typeof Container>>;
  disableContainer?: boolean;
}

const Layout = ({ children, ContainerProps, disableContainer = false }: LayoutProps) =>
  disableContainer ? (
    <Box sx={{ p: 2 }}>{children}</Box>
  ) : (
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
  );

export default Layout;
