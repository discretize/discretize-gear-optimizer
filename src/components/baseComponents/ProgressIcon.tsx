import { Box, CircularProgress, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { getHeuristicsProgress, getProgress } from '../../state/slices/controlsSlice';

interface ProgressIconProps {
  className: string;
}

const ProgressIcon = ({ className }: ProgressIconProps) => {
  const progress = useSelector(getProgress);
  const heuristicsProgress = useSelector(getHeuristicsProgress);

  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" value={progress} className={className} />{' '}
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="caption" color="textSecondary">
          {heuristicsProgress ? `(${Math.round(heuristicsProgress)}%)` : `${Math.round(progress)}%`}
        </Typography>
      </Box>
    </Box>
  );
};
export default ProgressIcon;
