import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import React from 'react';

export default function URLStateSnackbar({ state, setState }) {
  return (
    <Snackbar
      open={state.open}
      autoHideDuration={3000}
      onClose={() => setState({ ...state, open: false })}
    >
      <Alert
        onClose={() => setState({ ...state, open: false })}
        severity={state.success ? 'success' : 'error'}
      >
        {state.message}
      </Alert>
    </Snackbar>
  );
}
