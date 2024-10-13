import axios from 'axios';
import JsonUrl from 'json-url';
import pako from 'pako';
import { all, put, select, takeLeading } from 'redux-saga/effects';
import { PARAMS } from '../../utils/queryParam';
// import { changeBuildPage } from '../slices/buildPage';
import { changeAll, emptyFilteredLists } from '../slices/controlsSlice';
import SagaTypes from './sagaTypes';

const lib = JsonUrl('lzma');

// hard coded temporarily!
const version = 0;

const modifyState = (optimizerState) => {
  // const list = optimizerState?.control?.list.slice(0, 6) || [];
  // let modifiedList = list;

  // // extract settings object from characters (should be identical)
  // let listSettings = null;
  // if (list[0]?.settings) {
  //   listSettings = list[0].settings;
  //   modifiedList = list.map((character) => {
  //     // eslint-disable-next-line no-unused-vars
  //     const { settings, ...rest } = character;
  //     return { ...rest };
  //   });
  // }

  const { selectedCharacter, list, saved } = optimizerState.control;

  // remove appliedModifiers from selected character
  let modifiedSelectedCharacter = null;
  if (optimizerState.control.selectedCharacter) {
    modifiedSelectedCharacter = JSON.parse(
      JSON.stringify(optimizerState.control.selectedCharacter),
    );
    modifiedSelectedCharacter.settings.appliedModifiers = [];
  }

  // remove all list entries that are not selected character
  const modifiedList =
    selectedCharacter && list.some(({ id }) => selectedCharacter.id === id)
      ? [modifiedSelectedCharacter]
      : [];
  const modifiedSaved =
    selectedCharacter && saved.some(({ id }) => selectedCharacter.id === id)
      ? [modifiedSelectedCharacter]
      : [];

  const filteredLists = emptyFilteredLists;

  const exportData = {
    // listSettings,
    optimizerState: {
      ...optimizerState,
      control: {
        ...optimizerState.control,
        list: modifiedList,
        filteredLists,
        saved: modifiedSaved,
        selectedCharacter: modifiedSelectedCharacter,
      },
    },
  };

  return exportData;
};

const unModifyState = (importData) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { optimizerState, listSettings } = importData;

  // // replace settings objects in characters
  // if (Array.isArray(optimizerState?.control?.list) && listSettings) {
  //   optimizerState.control.list = optimizerState.control.list.map((character) => ({
  //     ...character,
  //     settings: listSettings,
  //   }));
  // }

  return optimizerState;
};

const getShortUrl = async (exportData) => {
  console.time('Compressed binary data in:');
  const binaryData = pako.deflate(JSON.stringify(exportData));
  console.timeEnd('Compressed binary data in:');

  const response = await axios.post(`share/create`, binaryData).catch(console.error);
  if (response?.data?.Status !== 200) {
    console.log(
      `URL shortener returned status ${response?.data?.Status}! Falling back to long URL.`,
    );
    throw new Error('failure');
  }
  const { Key } = response.data;

  const urlObject = new URL(window.location.href);
  urlObject.searchParams.set(PARAMS.SHORTENER_KEY, `${Key}v1`);
  urlObject.searchParams.delete(PARAMS.GAMEMODE);
  const shortUrl = urlObject.href;

  console.log('Exported short URL:', shortUrl);
  return shortUrl;
};

const getLongUrl = async (exportData, onFailure, t) => {
  console.time('Compressed json-url data in:');
  const jsonUrlData = await lib.compress(exportData);
  console.timeEnd('Compressed json-url data in:');

  const urlObject = new URL(window.location.href);
  urlObject.searchParams.set(PARAMS.VERSION, version);
  urlObject.searchParams.set(PARAMS.DATA, jsonUrlData);
  const longUrl = urlObject.href;

  if (longUrl.length > 8000) {
    console.log(`URL is too long! (${longUrl.length} characters):`, longUrl);
    onFailure(t('Error: too much data!'));

    // copy nothing to the clipboard by never settling this promise
    return new Promise(() => {});
  }

  console.log(`Exported long URL (${longUrl.length} characters):`, longUrl);
  return longUrl;
};

function* exportState({ t, onSuccess, onFailure }) {
  if (typeof window === 'undefined') return;
  try {
    const reduxState = yield select();

    const exportData = modifyState(reduxState.optimizer);
    console.log(exportData);

    let successMessage = import.meta.env.VITE_HAS_CF
      ? t('Copied link to clipboard!')
      : t('Copied long link to clipboard! (Link shortener requires cloudflare environment.)');

    const urlPromise = import.meta.env.VITE_HAS_CF
      ? getShortUrl(exportData).catch((e) => {
          // fall back to long URL on link shortner failure
          successMessage = t('Copied long link to clipboard! (Link shortener failed.)');
          return getLongUrl(exportData, onFailure, t);
        })
      : getLongUrl(exportData, onFailure, t);

    // iOS browsers and desktop Safari require the use of the async clipboard API, calling
    // navigator.clipboard.write synchronously and passing it a Promise
    // (see: https://web.dev/async-clipboard/).
    // Firefox does not support this API but allows writing to the clipboard in a callback.
    // Chrome doesn't care.
    const urlBlobPromise = urlPromise.then((url) => new Blob([url], { type: 'text/plain' }));
    const clipboardPromise =
      typeof ClipboardItem !== 'undefined'
        ? // eslint-disable-next-line no-undef
          navigator.clipboard.write([new ClipboardItem({ 'text/plain': urlBlobPromise })])
        : urlPromise.then((url) => navigator.clipboard.writeText(url));

    clipboardPromise
      .then(() => onSuccess(successMessage))
      .catch(() => onFailure(t('Failed to copy link to clipboard!')));
  } catch (e) {
    console.log('Problem saving and sharing state!');
    console.error(e);
    onFailure(t('There was an error exporting the state!'));
  }
}

function* watchExportState() {
  yield takeLeading(SagaTypes.ExportFormState, exportState);
}

function* importState({ jsonUrlData, binaryData, rawJSONData, onSuccess, onError }) {
  yield new Promise(requestAnimationFrame);
  try {
    if (binaryData) {
      const decompressed = pako.inflate(binaryData, { to: 'string' });
      const importData = JSON.parse(decompressed);
      console.log(importData);

      const optimizerState = unModifyState(importData);

      console.time('Applied state in:');
      yield put(changeAll(optimizerState));
      console.timeEnd('Applied state in:');

      // execute success callback
      onSuccess();
    } else if (jsonUrlData) {
      console.time('Decompressed template in:');
      const importData = yield lib.decompress(jsonUrlData);
      console.timeEnd('Decompressed template in:');

      console.log(importData);
      const optimizerState = unModifyState(importData);

      console.time('Applied state in:');
      yield put(changeAll(optimizerState));
      console.timeEnd('Applied state in:');

      // execute success callback
      onSuccess();
    } else if (rawJSONData) {
      const decoded = decodeURIComponent(rawJSONData);
      const importData = JSON.parse(decoded);
      console.log(importData);

      const optimizerState = unModifyState(importData);

      console.time('Applied state in:');
      yield put(changeAll(optimizerState));
      console.timeEnd('Applied state in:');

      // execute success callback
      onSuccess();
    }
  } catch (e) {
    console.log('Problem restoring template!');
    console.log(e);
    onError();
  }
}

function* watchImportState() {
  yield takeLeading(SagaTypes.ImportFormState, importState);
}

export default function* rootSaga() {
  yield all([watchExportState(), watchImportState()]);
}
