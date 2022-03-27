/* eslint-disable no-console */
import { all, put, select, take, takeEvery, takeLatest } from 'redux-saga/effects';
import { calculate } from '../optimizer/optimizer';
import { ERROR, RUNNING, STOPPED, SUCCESS, WAITING } from '../optimizer/status';
import {
  changeControl,
  changeError,
  changeFilteredList,
  changeList,
  changeSelectedCharacter,
  getControl,
  getSelectedCharacter,
} from '../slices/controlsSlice';
import SagaTypes from './sagaTypes';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function* runCalc() {
  let state;
  let currentList;
  let currentFilteredList;
  let currentPercent;
  try {
    yield put(changeControl({ key: 'status', value: RUNNING }));
    yield put(changeControl({ key: 'progress', value: 0 }));
    yield delay(0);

    const reduxState = yield select();
    state = reduxState.optimizer;

    const originalSelectedCharacter = yield select(getSelectedCharacter);

    const resultGenerator = calculate(reduxState);
    let done = false;
    let value;

    let elapsed = 0;
    let timer = performance.now();

    // render list updates on a trailing throttle
    // back-to-back(to-back) list updates will only be rendered once
    let listRenderCounter = 3;
    const listThrottle = 3;

    while (true) {
      ({ value, done } = yield resultGenerator.next());
      const { percent, isChanged, list, filteredList } = value;
      currentList = list;
      currentFilteredList = filteredList;
      currentPercent = percent;
      if (done) break;

      if (isChanged) {
        if (listRenderCounter > listThrottle) {
          listRenderCounter = 0;
        }
      }
      if (listRenderCounter === listThrottle) {
        yield delay(0);
        yield put(changeList(currentList));
        yield put(changeFilteredList(currentFilteredList));
      }
      yield put(changeControl({ key: 'progress', value: currentPercent }));
      listRenderCounter++;

      yield delay(0);

      const status = yield select(getControl('status'));
      if (status !== RUNNING) {
        elapsed += performance.now() - timer;
        console.log(`Stopped at ${currentPercent}% in ${elapsed} ms`);

        yield take(SagaTypes.Resume);

        timer = performance.now();
        yield put(changeControl({ key: 'status', value: RUNNING }));
      }
    }

    yield delay(0);
    yield put(changeList(currentList));
    yield put(changeFilteredList(currentFilteredList));
    yield put(changeControl({ key: 'progress', value: currentPercent }));

    elapsed += performance.now() - timer;
    console.log(`Finished calculation in ${elapsed} ms`);
    console.time('Render Result');
    if (currentList.length > 0) {
      yield put(changeControl({ key: 'status', value: SUCCESS }));
    } else {
      yield put(changeControl({ key: 'status', value: ERROR }));
      yield put(
        changeError(
          'No result could be generated for the provided input. Please check your constraints (min boon duration, ...)!',
        ),
      );
    }

    // automatically select the top result unless the user clicked one during the calculation
    const selectedCharacter = yield select(getSelectedCharacter);
    if (currentList && (!selectedCharacter || selectedCharacter === originalSelectedCharacter)) {
      yield put(changeSelectedCharacter(currentList[0]));
    }

    console.timeEnd('Render Result');
  } catch (e) {
    console.groupEnd();
    // eslint-disable-next-line no-alert
    alert(`There was an error in the calculation!\n\n${e}`);
    console.log(e);
    console.log('state:', { ...state });
    console.log('list:', { ...currentList });
    yield put(changeControl({ key: 'status', value: WAITING }));
  }
}

function* stopCalc() {
  yield put(changeControl({ key: 'status', value: STOPPED }));
}

function* watchStart() {
  yield takeLatest(SagaTypes.Start, runCalc);
  yield takeEvery(SagaTypes.Stop, stopCalc);
}

export default function* rootSaga() {
  yield all([watchStart()]);
}
