/* eslint-disable no-console */
import { freeze } from '@reduxjs/toolkit';
import { call, put, select, take, takeEvery, takeLatest } from 'typed-redux-saga';
import type { Character } from '../optimizer/optimizerCore';
import { ERROR, RUNNING, STOPPED, SUCCESS, WAITING } from '../optimizer/status';
import {
  ExtraFilterMode,
  changeError,
  changeProgress,
  changeSelectedCharacter,
  changeStatus,
  getSelectedCharacter,
  getStatus,
  updateResults,
} from '../slices/controlsSlice';
import type { RootState } from '../store';
import SagaTypes from './sagaTypes';

const resultGenerator = new ComlinkWorker<typeof import('../optimizer/worker')>(
  new URL('../optimizer/worker.ts', import.meta.url),
  {
    type: 'module',
  },
);

function* runCalc() {
  const reduxState: RootState = yield* select();
  const state = reduxState.optimizer;

  let currentList: Character[] = [];
  let currentFilteredList: Character[] = [];
  let currentExtrasFilteredLists: Record<ExtraFilterMode, Character[]> = {
    Sigils: [],
    Runes: [],
    Relics: [],
    Nourishment: [],
    Enhancement: [],
  };
  let currentPercent = 0;
  try {
    yield* put(changeStatus(RUNNING));
    yield* put(changeProgress(0));

    const originalSelectedCharacter = yield* select(getSelectedCharacter);

    let elapsed = 0;
    let timer = performance.now();

    yield resultGenerator.setup(reduxState);

    let nextPromise = resultGenerator.next();

    while (true) {
      // eslint-disable-next-line no-loop-func
      const result = yield* call(() => nextPromise);

      const { percent, isChanged, list, filteredList, extraFilteredLists } = result.value;
      if (isChanged) {
        // shallow freeze as a performance optimization; immer freezes recursively instead by default
        freeze(list, false);
        freeze(filteredList, false);
        freeze(currentExtrasFilteredLists, false);

        currentList = list;
        currentFilteredList = filteredList;
        currentExtrasFilteredLists = extraFilteredLists;
        currentPercent = percent;
      }

      if (!result.done) {
        // concurrency: send next request to worker thread before rendering current on main thread
        nextPromise = resultGenerator.next();
      }

      yield* put(
        updateResults({
          list: currentList,
          filteredList: currentFilteredList,
          extraFilteredLists: currentExtrasFilteredLists,
          progress: currentPercent,
        }),
      );

      if (result.done) {
        break;
      }

      // check if calculation stopped
      const status = yield* select(getStatus);
      if (status !== RUNNING) {
        elapsed += performance.now() - timer;
        console.log(`Stopped at ${currentPercent}% in ${elapsed} ms`);

        // block until resume button pressed
        // (takeLatest cancels any previous runCalc() so this is not a memory leak)
        yield* take(SagaTypes.Resume);

        timer = performance.now();
        yield* put(changeStatus(RUNNING));
      }
    }

    elapsed += performance.now() - timer;
    console.log(`Finished calculation in ${elapsed} ms`);
    console.time('Render Result');
    if (currentList.length > 0) {
      yield* put(changeStatus(SUCCESS));
    } else {
      yield* put(changeStatus(ERROR));
      yield* put(
        changeError(
          'No result could be generated for the provided input. Please check your constraints (min boon duration, ...)!',
        ),
      );
    }

    // automatically select the top result unless the user clicked one during the calculation
    const selectedCharacter = yield* select(getSelectedCharacter);
    if (
      currentList &&
      (!selectedCharacter || selectedCharacter.id === originalSelectedCharacter?.id)
    ) {
      yield* put(changeSelectedCharacter(currentList[0]));
    }

    console.timeEnd('Render Result');
  } catch (e) {
    console.groupEnd();
    // eslint-disable-next-line no-alert
    alert(`There was an error in the calculation!\n\n${e}`);
    console.log(e);
    console.log('state:', state);
    console.log('list:', currentList);
    yield* put(changeStatus(WAITING));
  }
}

function* stopCalc() {
  const status = yield* select(getStatus);
  if (status === RUNNING) {
    yield* put(changeStatus(STOPPED));
  }
}

export default function* rootSaga() {
  yield* takeLatest(SagaTypes.Start, runCalc);
  yield* takeEvery(SagaTypes.Stop, stopCalc);
}
