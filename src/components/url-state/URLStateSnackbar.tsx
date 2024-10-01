import { Alert, Snackbar } from '@mui/material';

interface State {
  open: boolean;
  success: boolean;
  message: string;
}

interface URLStateSnackbarProps {
  state: State;
  setState: (state: State) => void;
}

export default function URLStateSnackbar({ state, setState }: URLStateSnackbarProps) {
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
