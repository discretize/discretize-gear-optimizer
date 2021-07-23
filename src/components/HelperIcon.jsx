import React from "react";
import { HelpOutline } from "@material-ui/icons";
import {
  InputLabel,
  MenuItem,
  FormControl,
  Chip,
  Select,
  withStyles,
  Typography,
  Grid,
  Input,
  InputAdornment
} from "@material-ui/core";
import { Tooltip, Attribute } from "gw2-ui";

const styles = (theme) => ({
  icon: {
    color: theme.palette.primary.dark
  }
});

const HelperIcon = ({ classes, text }) => {
  return (
    <Tooltip content={text}>
      <span>
        <Typography>
          <HelpOutline className={classes.icon} />
        </Typography>
      </span>
    </Tooltip>
  );
};
export default withStyles(styles)(HelperIcon);
