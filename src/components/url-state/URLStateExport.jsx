import ShareIcon from '@mui/icons-material/Share';
import { IconButton } from '@mui/material';
import axios from 'axios';
import { Tooltip } from 'gw2-ui-new';
import React from 'react';
import { useDispatch } from 'react-redux';
import URLStateSnackbar from './URLStateSnackbar';

// hard coded temporarily!
const version = 0;

// eslint-disable-next-line no-unused-vars
const URLStateExport = ({ type }) => {
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
    const longUrl = `${prefixUrl}?v=${version}&data=${data}`;
    console.log(`Exported long URL (${longUrl.length} characters):`, longUrl);

    if (longUrl.length > 8000) {
      setSnackbarState((state) => ({
        ...state,
        open: true,
        success: false,
        message: 'Error: too much data!',
      }));
      return;
    }

    // get request to create a new short-url
    // this url points to a cloudflare worker, which acts as a url shortener
    // Source for the shortener: https://gist.github.com/gw2princeps/dc88d11e6b2378db35bcb2dd3726c7c6
    const shortenPromise = axios
      .get(`https://go.princeps.biz/?new=${longUrl.replace('&', '%26')}`)
      .then((res) => {
        if (res?.data?.Status === 200) {
          console.log('Exported short URL:', res.data.ShortUrl);
          return res.data.ShortUrl;
        }
        console.log(`URL shortener returned status ${res?.data?.Status}!`);
        return longUrl;
      });
    const timeoutPromise = new Promise((resolve) => setTimeout(resolve, 3000, longUrl));

    Promise.any([shortenPromise, timeoutPromise]).then((url) => {
      setSnackbarState((state) => ({
        ...state,
        open: true,
        success: true,
        message: 'Copied link to clipboard!',
      }));
      navigator.clipboard.writeText(url);
    });

    // setBuildUrl would trigger an update in the useEffects method of URLState... which is not what we want
    // setBuildUrl(data);
  }, []);

  return (
    <>
      <Tooltip content="Copy sharable link to clipboard (note: results are not currently included)">
        <IconButton
          onClick={() => dispatch({ type: 'EXPORT_STATE', onSuccess: onExportSuccess })}
          size="large"
        >
          <ShareIcon />
        </IconButton>
      </Tooltip>
      <URLStateSnackbar state={snackbarState} setState={setSnackbarState} />
    </>
  );
};

export default URLStateExport;
