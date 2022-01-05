import { makeStyles } from '@material-ui/core';
import { HelpOutline } from '@material-ui/icons';
import { Tooltip } from 'gw2-ui-bulk';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  icon: {
    color: theme.palette.primary.dark,
  },
}));

const HelperIcon = ({ text, size, fontSize }) => {
  const classes = useStyles();

  return (
    <Tooltip content={text}>
      <span>
        <HelpOutline className={classes.icon} fontSize={size} style={{ fontSize }} />
      </span>
    </Tooltip>
  );
};
export default HelperIcon;
