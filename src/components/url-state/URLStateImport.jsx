import React from 'react';
import { useDispatch } from 'react-redux';
import { StringParam, useQueryParam } from 'use-query-params';
import URLStateSnackbar from './URLStateSnackbar';

const URLStateImport = () => {
  const dispatch = useDispatch();

  // State for snackbar, which indicates the result of url load action
  const [snackbarState, setSnackbarState] = React.useState({
    open: false,
    success: true,
    message: '',
  });

  // data, which is provided by a query parameter to the url
  // in this case we are looking for any ?data=buildUrl occurences so that we can access buildUrl without needing to parse the query parameters on our own.
  const [buildUrl, setBuildUrl] = useQueryParam('data', StringParam);

  // Sets the url back to the original state, in case the loading of the state was successful
  const onLoadSuccess = React.useCallback(() => {
    setBuildUrl(undefined);
    setSnackbarState((state) => ({
      ...state,
      open: true,
      success: true,
      message: 'Template successfully loaded!',
    }));
    // console.log('success');
  }, [setBuildUrl]);

  // Callback in case an error occurs when trying to load the state from the url
  const onLoadError = React.useCallback(() => {
    setSnackbarState((state) => ({
      ...state,
      open: true,
      success: false,
      message: 'There was an error loading this template!',
    }));
    // console.log('An error occured!');
  }, []);

  React.useEffect(() => {
    if (buildUrl) {
      console.log('Imported URL data:', buildUrl);
      dispatch({ type: 'IMPORT_STATE', buildUrl, onSuccess: onLoadSuccess, onError: onLoadError });
    }
    return () => {};
  }, [buildUrl, onLoadError, onLoadSuccess, dispatch]);

  return <URLStateSnackbar state={snackbarState} setState={setSnackbarState} />;
};

export default URLStateImport;
