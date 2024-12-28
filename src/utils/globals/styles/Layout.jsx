import { Box, Container, useMediaQuery, useTheme } from '@mui/material';

const Layout = ({ children, ContainerProps, disableContainer = false }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  return (
    (!disableContainer && !isMobile && (
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
    )) || <Box sx={{ p: 2 }}>{children}</Box>
  );
};

export default Layout;
