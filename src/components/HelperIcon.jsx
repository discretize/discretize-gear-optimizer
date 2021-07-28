import { Typography, withStyles } from "@material-ui/core";
import { HelpOutline } from "@material-ui/icons";
import { Tooltip } from "gw2-ui";
import React from "react";

const styles = (theme) => ({
  icon: {
    color: theme.palette.primary.dark
  }
});

const HelperIcon = ({ classes, text }) => {
  return (
    <Tooltip content={text}>
      <span>
        <HelpOutline className={classes.icon} />
      </span>
    </Tooltip>
  );
};
export default withStyles(styles)(HelperIcon);
