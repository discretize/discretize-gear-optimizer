import { useMediaQuery, useTheme } from '@mui/material';
import fractalImg from '../../assets/images/background/fractals.jpg';
import raidImg from '../../assets/images/background/raids.jpg';
import wvwImg from '../../assets/images/background/wvw.jpg';
import { type GameMode } from '../../state/slices/userSettings';

const images = {
  'fractals': fractalImg,
  'raids': raidImg,
  'wvw': wvwImg,
};

export default function BackgroundImage({ gameMode }: { gameMode: GameMode }) {
  const theme = useTheme();
  const showImage = useMediaQuery(theme.breakpoints.up('lg'));
  // only show the image for larger screens
  if (!showImage) return null;

  return (
    <img
      src={images[gameMode] ?? raidImg}
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
