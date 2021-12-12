import { IconButton } from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';
import axios from 'axios';
import { Tooltip } from 'gw2-ui-bulk';
import React from 'react';
import { useDispatch } from 'react-redux';
import URLStateSnackbar from './URLStateSnackbar';

// hard coded temporarily!
const version = 0;

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
    const url = `${prefixUrl}?version=${version}&data=${data}`.replace('&', '%26');
    console.log(`Exported long URL (${url.length} characters):`, url);

    // get request to create a new short-url
    // this url points to a cloudflare worker, which acts as a url shortener
    // Source for the shortener: https://gist.github.com/gw2princeps/dc88d11e6b2378db35bcb2dd3726c7c6
    axios.get(`https://go.princeps.biz/?new=${url}`).then((res) => {
      if (res?.data?.Status === 200) {
        setSnackbarState((state) => ({
          ...state,
          open: true,
          success: true,
          message: 'Copied link to clipboard!',
        }));

        console.log('Exported short URL:', res.data.ShortUrl);
        navigator.clipboard.writeText(res.data.ShortUrl);
      }
    });

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
