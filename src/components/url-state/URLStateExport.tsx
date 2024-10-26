import { Tooltip } from '@discretize/gw2-ui-new';
import ShareIcon from '@mui/icons-material/Share';
import { IconButton } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { exportFormState } from '../../state/async/formStateThunks';
import { useAppDispatch } from '../../state/redux-hooks';
import URLStateSnackbar from './URLStateSnackbar';

const URLStateExport = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const [loading, setLoading] = React.useState(false);

  // State for snackbar, which indicates the result of url load action
  const [snackbarState, setSnackbarState] = React.useState({
    open: false,
    success: true,
    message: '',
  });

  // URL state loading logic
  /// const [_, setBuildUrl] = useQueryParam('data', StringParam);

  const onSuccess = React.useCallback((message: string) => {
    setSnackbarState((state) => ({
      ...state,
      open: true,
      success: true,
      message,
    }));
    setLoading(false);
  }, []);

  const onFailure = React.useCallback((message: string) => {
    setSnackbarState((state) => ({
      ...state,
      open: true,
      success: false,
      message,
    }));
    setLoading(false);
  }, []);

  return (
    <>
      <Tooltip content={t('Copy Settings to clipboard')}>
        <IconButton
          onClick={() => {
            setLoading(true);
            dispatch(exportFormState({ t, onSuccess, onFailure }));
          }}
          size="large"
          disabled={loading}
        >
          <ShareIcon />
        </IconButton>
      </Tooltip>
      <URLStateSnackbar state={snackbarState} setState={setSnackbarState} />
    </>
  );
};

export default URLStateExport;
