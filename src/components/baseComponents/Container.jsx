import React from "react";
import PropTypes from "prop-types";
import { Paper, withStyles } from "@material-ui/core";
import withWidth, { isWidthDown } from "@material-ui/core/withWidth";

const styles = theme => ({
  root: {
    [theme.breakpoints.up("lg")]: {
      marginLeft: 240
    },
    // 1200 + 2 * 240
    "@media (min-width: 1680px)": {
      maxWidth: `calc(100vw - ${2 * 240 + 2 * theme.spacing.unit * 2}px)`,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  wrapper: {
    marginTop: theme.spacing.unit * 4,
    marginBottom: theme.spacing.unit * 4,
    marginLeft: "auto",
    marginRight: "auto",
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    [theme.breakpoints.up("lg")]: {
      marginTop: theme.spacing.unit * 5,
      marginBottom: theme.spacing.unit * 5,
      maxWidth: 960
    },
    [theme.breakpoints.up("xl")]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      maxWidth: 1200
    }
  },
  paper: {
    padding: theme.spacing.unit * 2,
    backgroundColor: theme.palette.background.default
  }
});

const Container = ({ classes, width, paper = true, children }) => (
  <div className={classes.root}>
    <div className={classes.wrapper}>
      {!paper || isWidthDown("xs", width) ? (
        children
      ) : (
        <Paper elevation={8} className={classes.paper}>
          {children}
        </Paper>
      )}
    </div>
  </div>
);

Container.propTypes = {
  children: PropTypes.node.isRequired
};

export default withStyles(styles)(withWidth()(Container));