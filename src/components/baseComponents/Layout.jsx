import React, { Component } from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import { withStyles } from "@material-ui/core";
import withWidth from "@material-ui/core/withWidth";

import "typeface-raleway";
import "typeface-muli";
import "typeface-fira-mono";
import "typeface-menomonia";

import globals from "../../styles/globals";

import withRoot from "../../hocs/withRoot";
import Container from "./Container";

const styles = (theme) => ({
  image: {
    position: "fixed !important",
    width: "100vw",
    height: "100vh",
    left: 0,
    bottom: 0,
    opacity: 0.7,
    zIndex: -1
  },
  navigationFab: {
    position: "fixed",
    zIndex: theme.zIndex.drawer,
    backgroundColor: theme.palette.background.paper,
    border: `1px solid ${theme.palette.divider}`,
    boxShadow: theme.shadows[8],
    transition: `${theme.transitions.create(["background-color", "box-shadow", "transform"], {
      duration: theme.transitions.duration.shorter
    })} !important`,
    "&:hover": {
      backgroundColor: theme.palette.background.default,
      boxShadow: theme.shadows[16]
    }
  }
});

class Layout extends Component {
  state = { open: false };

  render = () => {
    const { children, ContainerProps, disableContainer = false } = this.props;

    return (
      <>
        {(!disableContainer && <Container {...ContainerProps}>{children}</Container>) || children}
      </>
    );
  };
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default withRoot(injectSheet(globals)(withStyles(styles)(withWidth()(Layout))));
