import JsonUrl from 'json-url';
import pako from 'pako';
import { all, put, select, takeLeading } from 'redux-saga/effects';
// import { changeBuildPage } from '../slices/buildPage';
import { changeAll } from '../slices/controlsSlice';
import SagaTypes from './sagaTypes';

const lib = JsonUrl('lzma');

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

  let modifiedSelectedCharacter = null;
  if (optimizerState.control.selectedCharacter) {
    modifiedSelectedCharacter = JSON.parse(
      JSON.stringify(optimizerState.control.selectedCharacter),
    );
    modifiedSelectedCharacter.settings.appliedModifiers = [];
  }

  const exportData = {
    // listSettings,
    optimizerState: {
      ...optimizerState,
      control: {
        ...optimizerState.control,
        list: [],
        filteredList: [],
        saved: [],
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

function* exportState({ onSuccess, onError }) {
  try {
    const reduxState = yield select();

    const exportData = modifyState(reduxState.optimizer);
    console.log(exportData);

    console.time('Created template in:');
    const jsonUrlCompressed = yield lib.compress(exportData);
    console.timeEnd('Created template in:');

    console.time('Created binary template in:');
    const binaryCompressed = pako.deflate(JSON.stringify(exportData));
    console.timeEnd('Created binary template in:');

    onSuccess(jsonUrlCompressed, binaryCompressed);
  } catch (e) {
    console.log('Problem saving and sharing state!');
    console.log(e);
    onError();
  }
}

function* watchExportState() {
  yield takeLeading(SagaTypes.ExportFormState, exportState);
}

function* importState({ jsonUrlData, binaryData, onSuccess, onError }) {
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
