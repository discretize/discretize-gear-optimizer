import { Container, Paper, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import injectSheet from 'react-jss';
import 'typeface-fira-mono';
import 'typeface-menomonia';
import 'typeface-muli';
import 'typeface-raleway';
import withRoot from '../../hocs/withRoot';
import globals from '../../styles/globals';

const styles = (theme) => ({
  paper: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.default,
  },
});

class Layout extends Component {
  // state = { open: false };

  render = () => {
    const { classes, children, ContainerProps, disableContainer = false } = this.props;

    return (
      <>
        {(!disableContainer && (
          <Container maxWidth="lg" {...ContainerProps}>
            <Paper elevation={8} className={classes.paper}>
              {children}
            </Paper>
          </Container>
        )) ||
          children}
      </>
    );
  };
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default withRoot(injectSheet(globals)(withStyles(styles)(Layout)));
