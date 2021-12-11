import { IconButton } from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';
import { Tooltip } from 'gw2-ui-bulk';
import React from 'react';
import { useDispatch } from 'react-redux';
import URLStateSnackbar from './URLStateSnackbar';

const URLStateExport = () => {
  const dispatch = useDispatch();

  // State for snackbar, which indicates the result of url load action
  const [snackbarState, setSnackbarState] = React.useState({
    open: false,
    success: true,
    message: '',
  });

  // URL state loading logic
  /// const [_, setBuildUrl] = useQueryParam('data', StringParam);

  const onExportSuccess = React.useCallback((data) => {
    const prefixUrl = typeof window !== 'undefined' ? window.location.href : '';
    const url = `${prefixUrl}?data=${data}`;

    setSnackbarState((state) => ({
      ...state,
      open: true,
      success: true,
      message: 'Copied link to clipboard!',
    }));

    navigator.clipboard.writeText(url);

    // setBuildUrl would trigger an update in the useEffects method of URLState... which is not what we want
    // setBuildUrl(data);
  }, []);

  return (
    <>
      <Tooltip content="Copy sharable link to clipboard">
        <IconButton onClick={() => dispatch({ type: 'EXPORT_STATE', onSuccess: onExportSuccess })}>
          <ShareIcon />
        </IconButton>
      </Tooltip>
      <URLStateSnackbar state={snackbarState} setState={setSnackbarState} />
    </>
  );
};

export default URLStateExport;
