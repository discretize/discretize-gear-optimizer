import { Tooltip } from '@discretize/gw2-ui-new';
import ShareIcon from '@mui/icons-material/Share';
import { IconButton } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import SagaTypes from '../../state/sagas/sagaTypes';
import URLStateSnackbar from './URLStateSnackbar';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const URLStateExport = ({ type }) => {
  const dispatch = useDispatch();
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

  const onSuccess = React.useCallback((message) => {
    setSnackbarState((state) => ({
      ...state,
      open: true,
      success: true,
      message,
    }));
    setLoading(false);
  }, []);

  const onFailure = React.useCallback((message) => {
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
            dispatch({
              type: SagaTypes.ExportFormState,
              t,
              onSuccess,
              onFailure,
            });
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
