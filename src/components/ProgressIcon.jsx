import React from 'react';
import { useSelector } from 'react-redux';
import EqualizerRoundedIcon from '@material-ui/icons/EqualizerRounded';
import { withStyles } from '@material-ui/core';
import { getControl } from '../state/gearOptimizerSlice';
import CircularProgressWithLabel from './baseComponents/CircularProgressWithLabel';

const styles = (theme) => ({
  icon: {
    fontSize: 40,
  },
});

const ProgressIcon = ({ classes }) => {
  const progress = useSelector(getControl('progress'));

  return (
    <>
      {progress < 100 && progress !== 0 ? (
        <CircularProgressWithLabel variant="determinate" value={progress} />
      ) : (
        <EqualizerRoundedIcon className={classes.icon}></EqualizerRoundedIcon>
      )}
    </>
  );
};
export default withStyles(styles)(ProgressIcon);
