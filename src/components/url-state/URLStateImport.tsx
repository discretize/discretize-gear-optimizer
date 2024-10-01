import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import { PARAMS, setQueryParm, useQueryParam } from '../../utils/queryParam';
import URLStateSnackbar from './URLStateSnackbar';

interface URLStateImportProps {
  sagaType: string;
  clearUrlOnSuccess: boolean;
}

const URLStateImport = ({ sagaType, clearUrlOnSuccess }: URLStateImportProps) => {
  const dispatch = useDispatch();

  // State for snackbar, which indicates the result of url load action
  const [snackbarState, setSnackbarState] = React.useState({
    open: false,
    success: true,
    message: '',
  });

  // query param in case the site gets called with the shortener param.
  // Must be unshortend then, check useEffects
  const shortie = useQueryParam({ key: PARAMS.SHORTENER });

  // data, which is provided by a query parameter to the url
  // in this case we are looking for any ?data=buildUrl occurences so that we can access buildUrl without needing to parse the query parameters on our own.
  const jsonUrlData = useQueryParam({ key: PARAMS.BUILD });

  // Sets the url back to the original state, in case the loading of the state was successful
  const onLoadSuccess = React.useCallback(() => {
    if (clearUrlOnSuccess) {
      setQueryParm({ key: PARAMS.BUILD, value: undefined });
      setQueryParm({ key: PARAMS.VERSION, value: undefined });
      setQueryParm({ key: PARAMS.SHORTENER, value: undefined });
    }

    setSnackbarState((state) => ({
      ...state,
      open: true,
      success: true,
      message: 'Template successfully loaded!',
    }));
    // console.log('success');
  }, [clearUrlOnSuccess]);

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
    if (shortie && shortie.endsWith('v1')) {
      // found shortened link, resolve the data.
      // cf-function can be found in /functions/share/load.ts
      const key = shortie.slice(0, -2);
      axios
        .get(`share/load?${PARAMS.SHORTENER}=${key}`, { responseType: 'arraybuffer' })
        .then((response) => {
          const binaryData = new Uint8Array(response.data);
          console.log(binaryData);

          dispatch({
            type: sagaType,
            binaryData,
            onSuccess: onLoadSuccess,
            onError: onLoadError,
          });
        });
    }

    // unshortened data found, for example when someone copy pasts the long url.
    if (jsonUrlData) {
      console.log('Imported URL data:', jsonUrlData);
      dispatch({ type: sagaType, jsonUrlData, onSuccess: onLoadSuccess, onError: onLoadError });
    }
    return () => {
      // do nothing
    };
  }, [jsonUrlData, onLoadError, onLoadSuccess, dispatch, sagaType, shortie]);

  return <URLStateSnackbar state={snackbarState} setState={setSnackbarState} />;
};

export default URLStateImport;
