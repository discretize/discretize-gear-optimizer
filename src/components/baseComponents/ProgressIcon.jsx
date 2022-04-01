import React from 'react';
import { useSelector } from 'react-redux';
import { getProgress } from '../../state/slices/controlsSlice';
import CircularProgressWithLabel from './CircularProgressWithLabel';

const ProgressIcon = ({ className }) => {
  const progress = useSelector(getProgress);

  return <CircularProgressWithLabel variant="determinate" value={progress} className={className} />;
};
export default ProgressIcon;
