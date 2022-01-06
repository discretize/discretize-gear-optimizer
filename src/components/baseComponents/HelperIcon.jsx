import makeStyles from '@mui/styles/makeStyles';
import { HelpOutline } from '@mui/icons-material';
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
