import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import React from 'react';

function CircularProgressWithLabel(props) {
  const { value } = props;
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress variant="determinate" {...props} />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="caption" color="textSecondary">{`${Math.round(value)}%`}</Typography>
      </Box>
    </Box>
  );
}
export default CircularProgressWithLabel;
