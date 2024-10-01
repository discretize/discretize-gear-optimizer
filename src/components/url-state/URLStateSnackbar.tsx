import { Alert, Snackbar } from '@mui/material';

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
