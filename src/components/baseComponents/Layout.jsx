import { Box, Container, makeStyles, Paper, useMediaQuery, useTheme } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import injectSheet from 'react-jss';
import 'typeface-fira-mono';
import 'typeface-menomonia';
import 'typeface-muli';
import 'typeface-raleway';
import withRoot from '../../hocs/withRoot';
import globals from '../../styles/globals';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.default,
  },
}));

const Layout = ({ children, ContainerProps, disableContainer = false }) => {
  const classes = useStyles();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  return (
    <>
      {(!disableContainer && !isMobile && (
        <Container maxWidth="lg" {...ContainerProps}>
          <Paper elevation={8} className={classes.paper}>
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

export default withRoot(injectSheet(globals)(Layout));
