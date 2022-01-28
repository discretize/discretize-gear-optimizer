import { muiTheme } from '@discretize/react-discretize-components';
import { LinearProgress, ThemeProvider } from '@mui/material';
import React from 'react';

export default function LoadingScreen() {
  return (
    <div
      id="outer"
      style={{
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#2f3136',
      }}
    >
      <div
        id="content-wrapper"
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <img src="/logo.png" style={{ width: 200, height: 200 }} />
        <ThemeProvider theme={muiTheme}>
          <LinearProgress />
        </ThemeProvider>
      </div>
    </div>
  );
}
