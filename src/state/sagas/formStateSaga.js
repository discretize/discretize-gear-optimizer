import JsonUrl from 'json-url';
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
  // eslint-disable-next-line no-unused-vars
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

function* exportState({ onSuccess }) {
  const reduxState = yield select();

  const exportData = modifyState(reduxState.optimizer);
  console.log(exportData);

  console.time('Created template in:');
  const compressed = yield lib.compress(exportData);
  console.timeEnd('Created template in:');

  onSuccess(compressed);
}

function* watchExportState() {
  yield takeLeading(SagaTypes.ExportFormState, exportState);
}

function* importState({ buildUrl: input, onSuccess, onError }) {
  try {
    if (!input) return;

    console.time('Decompressed template in:');
    const importData = yield lib.decompress(input);
    console.timeEnd('Decompressed template in:');

    console.log(importData);
    const optimizerState = unModifyState(importData);

    console.time('Applied state in:');
    yield put(changeAll(optimizerState));
    console.timeEnd('Applied state in:');

    // execute success callback
    onSuccess();
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
