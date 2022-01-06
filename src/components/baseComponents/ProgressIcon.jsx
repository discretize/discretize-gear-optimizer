import EqualizerRoundedIcon from '@mui/icons-material/EqualizerRounded';
import React from 'react';
import { useSelector } from 'react-redux';
import { getControl } from '../../state/slices/controlsSlice';
import CircularProgressWithLabel from './CircularProgressWithLabel';

const ProgressIcon = () => {
  const progress = useSelector(getControl('progress'));

  return (
    <>
      {progress < 100 && progress !== 0 ? (
        <CircularProgressWithLabel variant="determinate" value={progress} />
      ) : (
        <EqualizerRoundedIcon />
      )}
    </>
  );
};
export default ProgressIcon;
