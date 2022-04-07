import { useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import fractalImg from '../../assets/images/background/fractals.jpg';
import raidImg from '../../assets/images/background/raids.jpg';

export default function BackgroundImage({ gameMode }) {
  const theme = useTheme();
  const showImage = useMediaQuery(theme.breakpoints.up('lg'));
  // only show the image for larger screens
  if (!showImage) return null;

  return (
    <img
      src={gameMode === 'fractals' ? fractalImg : raidImg}
      style={{
        objectFit: 'cover',
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        left: 0,
        bottom: 0,
        opacity: 0.7,
        zIndex: -1,
      }}
      loading="lazy"
      decoding="async"
      alt="Background"
    />
  );
}
