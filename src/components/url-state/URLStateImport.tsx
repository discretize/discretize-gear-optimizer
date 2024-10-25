import axios from 'axios';
import React from 'react';
import { useAppDispatch } from '../../state/redux-hooks';
import { importFormState } from '../../state/sagas/formStateSaga';
import { PARAMS, setQueryParm, useQueryParam } from '../../utils/queryParam';
import URLStateSnackbar from './URLStateSnackbar';

interface URLStateImportProps {
  clearUrlOnSuccess: boolean;
}

const URLStateImport = ({ clearUrlOnSuccess }: URLStateImportProps) => {
  const dispatch = useAppDispatch();

  // State for snackbar, which indicates the result of url load action
  const [snackbarState, setSnackbarState] = React.useState({
    open: false,
    success: true,
    message: '',
  });

  // query param in case the site gets called with the shortener param.
  // Must be unshortend then, check useEffects
  const shortenerKey = useQueryParam({ key: PARAMS.SHORTENER_KEY });

  // data, which is provided by a query parameter to the url
  // in this case we are looking for any ?data=buildUrl occurences so that we can access buildUrl without needing to parse the query parameters on our own.
  const jsonUrlData = useQueryParam({ key: PARAMS.DATA });

  const rawJSONData = useQueryParam({ key: PARAMS.RAW });

  // Sets the url back to the original state, in case the loading of the state was successful
  const onLoadSuccess = React.useCallback(() => {
    if (clearUrlOnSuccess) {
      setQueryParm({ key: PARAMS.DATA, value: undefined });
      setQueryParm({ key: PARAMS.VERSION, value: undefined });
      setQueryParm({ key: PARAMS.SHORTENER_KEY, value: undefined });
      setQueryParm({ key: PARAMS.RAW, value: undefined });
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
    if (shortenerKey && shortenerKey.endsWith('v1')) {
      // found shortened link, resolve the data.
      // cf-function can be found in /functions/share/load.ts
      const key = shortenerKey.slice(0, -2);
      axios
        .get(`share/load?${PARAMS.SHORTENER_KEY}=${key}`, { responseType: 'arraybuffer' })
        .then((response) => {
          const binaryData = new Uint8Array(response.data);
          console.log(binaryData);

          dispatch(importFormState({ binaryData, onSuccess: onLoadSuccess, onError: onLoadError }));
        });
    }

    // unshortened data found, for example when someone copy pasts the long url.
    if (jsonUrlData) {
      console.log('Imported URL data:', jsonUrlData);
      dispatch(importFormState({ jsonUrlData, onSuccess: onLoadSuccess, onError: onLoadError }));
    }

    if (rawJSONData) {
      console.log('Imported URL data:', rawJSONData);
      dispatch(importFormState({ rawJSONData, onSuccess: onLoadSuccess, onError: onLoadError }));
    }
    return () => {
      // do nothing
    };
  }, [jsonUrlData, onLoadError, onLoadSuccess, dispatch, shortenerKey, rawJSONData]);

  return <URLStateSnackbar state={snackbarState} setState={setSnackbarState} />;
};

export default URLStateImport;
