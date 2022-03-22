import { decompress } from '@discretize/object-compression';
import { channel } from 'redux-saga';
import { all, put, take, takeLeading } from 'redux-saga/effects';
import { changeBuildPage } from '../slices/buildPage';
import SagaTypes from './sagaTypes';

/*
function* exportStateCharacter({ onSuccess }) {
  const reduxState = yield select();

  const { selectedLines: lines, selectedTraits: selected } = reduxState.optimizer.form.traits;
  const { weapons, skills, character } = reduxState.optimizer.buildPage;

  const exportData = {
    character,
    weapons,
    skills,
    traits: {
      lines,
      selected,
    },
  };
  console.log(exportData);

  console.time('Created template in:');
  const compressed = yield lib.compress(exportData);
  console.timeEnd('Created template in:');

  onSuccess(compressed);
}

function* watchExportStateCharacter() {
  yield takeLeading('EXPORT_STATE_CHARACTER', exportStateCharacter);
}
*/

// channels solve the problem "how to get value out of callback"
// https://stackoverflow.com/questions/43031832/how-to-yield-put-in-redux-saga-within-a-callback
const decompressChannel = channel();
function* importStateCharacter({ buildUrl: input, version }) {
  if (!input) {
    console.error('SAGA: No url parameter supplied');
    return;
  }
  if (typeof version === 'undefined') {
    console.error('SAGA: No version parameter supplied');
    return;
  }

  try {
    // load build state from url
    const { BuildPageSchema: schema } = yield import(
      `../../components/url-state/schema/BuildPageSchema_v${version}`
    );

    decompress({
      string: input,
      schema,
      onSuccess: (result) => decompressChannel.put({ type: 'STATE_DECOMPRESS_FINISHED', result }),
    });

    const { result } = yield take(decompressChannel);

    yield put(changeBuildPage(result));
  } catch (e) {
    console.log('Problem restoring template!');
    console.log(e);
  }
}

function* watchImportStateCharacter() {
  yield takeLeading(SagaTypes.ImportBuildPageState, importStateCharacter);
}
export default function* rootSaga() {
  yield all([
    // watchExportStateCharacter(),
    watchImportStateCharacter(),
  ]);
}
