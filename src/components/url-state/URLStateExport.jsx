import { Tooltip } from '@discretize/gw2-ui-new';
import ShareIcon from '@mui/icons-material/Share';
import { IconButton } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import SagaTypes from '../../state/sagas/sagaTypes';
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
    if (typeof window === 'undefined') return;

    const urlObject = new URL(window.location.href);
    urlObject.searchParams.set('v', version);
    urlObject.searchParams.set('data', data);
    const longUrl = urlObject.href;

    if (longUrl.length > 8000) {
      console.log(`URL is too long! (${longUrl.length} characters):`, longUrl);
      setSnackbarState((state) => ({
        ...state,
        open: true,
        success: false,
        message: 'Error: too much data!',
      }));
      return;
    }
    console.log(`Exported long URL (${longUrl.length} characters):`, longUrl);

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
          onClick={() => dispatch({ type: SagaTypes.ExportFormState, onSuccess: onExportSuccess })}
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
