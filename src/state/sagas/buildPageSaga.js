import { compress, decompress } from '@discretize/object-compression';
import { channel } from 'redux-saga';
import { all, put, select, take, takeLeading } from 'redux-saga/effects';
import {
  BuildPageSchema,
  version as schemaVersion,
} from '../../components/url-state/schema/BuildPageSchema_v2';
import { buffsDict } from '../../components/url-state/schema/SchemaDicts';
import { changeBuildPage, changeCharacter, changeCompression } from '../slices/buildPage';
import SagaTypes from './sagaTypes';

// channels solve the problem "how to get value out of callback"
// https://stackoverflow.com/questions/43031832/how-to-yield-put-in-redux-saga-within-a-callback
const compressChannel = channel();
function* exportStateCharacter({ onSuccess }) {
  const { optimizer } = yield select();
  const { buildPage, control } = optimizer;
  // extract all variables
  const { selectedCharacter: character, profession } = control;
  const lines = character.settings.cachedFormState.traits.selectedLines;
  const selected = character.settings.cachedFormState.traits.selectedTraits;
  const { buffs } = character.settings.cachedFormState.buffs;
  const { skills, weapons } = buildPage;

  const { attributes: allAttributes, gear, settings, infusions, id } = character;
  const { specialization, weaponType, extrasCombination } = settings;

  // filter out unnecessary attributes
  const attributes = {};
  Object.keys(BuildPageSchema.character.attributes).forEach((key) => {
    attributes[key] = allAttributes[key];
  });

  // since we cant use the compression library for object where the layout of keys is unknown, we stringify it.
  const minimalCharacter = {
    attributes,
    gear,
    infusions: JSON.stringify(infusions) || '',
    settings: {
      extrasCombination,
      profession,
      specialization,
      weaponType,
    },
  };

  yield put(changeCharacter(minimalCharacter));

  // create bit map for buffs
  const conv = (val) => (val ? 1 : 0);
  const buffsInteger = buffsDict.reduce(
    // eslint-disable-next-line no-bitwise
    (acc, curr) => (acc + conv(buffs[curr])) << 1,
    conv(buffs[0]),
  );

  const object = {
    character: minimalCharacter,
    skills,
    traits: { lines, selected },
    weapons,
    buffs: buffsInteger,
  };

  compress({
    object,
    schema: BuildPageSchema,
    onSuccess: (result) => compressChannel.put({ type: 'STATE_COMPRESS_FINISHED', result }),
  });

  const { result } = yield take(compressChannel);
  const url = `/build?v=${schemaVersion}&data=${result}`;
  // TODO where should we put this url ideally?
  yield put(changeCompression({ id, error: '', url }));
  onSuccess(url);
}

function* watchExportStateCharacter() {
  yield takeLeading(SagaTypes.ExportBuildPageState, exportStateCharacter);
}

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
  yield all([watchExportStateCharacter(), watchImportStateCharacter()]);
}
