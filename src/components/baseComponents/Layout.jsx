import { makeStyles } from 'tss-react/mui';
import { Box, Container, Paper, useMediaQuery, useTheme } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import 'typeface-fira-mono';
import 'typeface-menomonia';
import 'typeface-muli';
import 'typeface-raleway';

const useStyles = makeStyles()((theme) => ({
  paper: {
    padding: theme.spacing(2),
    backgroundColor: 'inherit',
  },
}));

const Layout = ({ children, ContainerProps, disableContainer = false }) => {
  const classes = useStyles();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  return (
    <>
      {(!disableContainer && !isMobile && (
        <Container maxWidth="lg" {...ContainerProps}>
          <Paper elevation={24} className={classes.paper}>
            {children}
          </Paper>
        </Container>
      )) || <Box p={2}>{children}</Box>}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
