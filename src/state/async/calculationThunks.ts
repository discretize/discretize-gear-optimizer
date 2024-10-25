/* eslint-disable no-loop-func */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-console */
import { freeze } from '@reduxjs/toolkit';
import type { Character } from '../optimizer/optimizerCore';
import { ERROR, RUNNING, STOPPED, SUCCESS, WAITING } from '../optimizer/status';
import type { AppThunk } from '../redux-hooks';
import type { ExtraFilterMode } from '../slices/controlsSlice';
import {
  changeError,
  changeProgress,
  changeSelectedCharacter,
  changeStatus,
  getHwThreads,
  getJsHeuristicsEnabled,
  getSelectedCharacter,
  getStatus,
  updateResults,
} from '../slices/controlsSlice';
import { getParsedJsHeuristicsTarget } from '../slices/extras';

let resume: (() => void) | undefined;

const worker = new ComlinkWorker<typeof import('../optimizer/optimizer')>(
  new URL('../optimizer/optimizer.ts', import.meta.url),
);

export const startCalc: AppThunk = async (dispatch, getState) => {
  const reduxState = getState();

  if (getStatus(reduxState) === RUNNING) {
    return;
  }

  let currentList: Character[] = [];
  let currentFilteredLists: Record<ExtraFilterMode, Character[]> = {
    Combinations: [],
    Sigils: [],
    Runes: [],
    Relics: [],
    Nourishment: [],
    Enhancement: [],
  };
  let currentPercent = 0;
  try {
    dispatch(changeStatus(RUNNING));
    dispatch(changeProgress(0));

    const originalSelectedCharacter = getSelectedCharacter(reduxState);
    const jsHeuristicsEnabled = getJsHeuristicsEnabled(reduxState);
    const { value: jsHeuristicsTarget } = getParsedJsHeuristicsTarget(reduxState);
    const threads = getHwThreads(reduxState);

    let elapsed = 0;
    let timer = performance.now();

    await worker.setup(reduxState, jsHeuristicsEnabled, jsHeuristicsTarget, threads);

    let nextPromise = worker.next();

    // eslint-disable-next-line no-constant-condition
    while (true) {
      const result = await nextPromise;

      const { percent, heuristicsPercent, isChanged, list, filteredLists } = result.value;
      currentPercent = percent;

      if (isChanged) {
        // shallow freeze as a performance optimization; immer freezes recursively instead by default
        freeze(list, false);
        freeze(filteredLists, false);

        currentList = list;
        currentFilteredLists = filteredLists;
      }

      if (result.done) {
        dispatch(
          updateResults({
            list: currentList,
            filteredLists: currentFilteredLists,
            progress: currentPercent,
            heuristicsProgress: heuristicsPercent,
          }),
        );
        break;
      }

      // concurrency: send next request to worker thread before rendering current on main thread
      nextPromise = worker.next();

      dispatch(
        updateResults({
          list: currentList,
          filteredLists: currentFilteredLists,
          progress: currentPercent,
          heuristicsProgress: heuristicsPercent,
        }),
      );

      // check if calculation stopped
      const status = getStatus(getState());
      if (status !== RUNNING) {
        elapsed += performance.now() - timer;
        console.log(`Stopped at ${currentPercent}% in ${elapsed} ms`);

        // block until resume button pressed
        await new Promise<void>((resolve) => {
          resume = resolve;
        });

        timer = performance.now();
        dispatch(changeStatus(RUNNING));
      }
    }

    elapsed += performance.now() - timer;
    console.log(`Finished calculation in ${elapsed} ms`);
    console.time('Render Result');
    if (currentList.length > 0) {
      dispatch(changeStatus(SUCCESS));
    } else {
      dispatch(changeStatus(ERROR));
      dispatch(
        changeError(
          'No result could be generated for the provided input. Please check your constraints (min boon duration, ...)!',
        ),
      );
    }

    // automatically select the top result unless the user clicked one during the calculation
    const selectedCharacter = getSelectedCharacter(getState());
    if (
      currentList &&
      (!selectedCharacter || selectedCharacter.id === originalSelectedCharacter?.id)
    ) {
      dispatch(changeSelectedCharacter(currentList[0]));
    }

    console.timeEnd('Render Result');
  } catch (e) {
    console.groupEnd();
    // eslint-disable-next-line no-alert
    alert(`There was an error in the calculation!\n\n${e}`);
    console.log(e);
    console.log('state:', reduxState.optimizer);
    console.log('list:', currentList);
    dispatch(changeStatus(WAITING));
  }
};

export const stopCalc: AppThunk = (dispatch, getState) => {
  const status = getStatus(getState());
  if (status === RUNNING) {
    dispatch(changeStatus(STOPPED));
  }
};

export const resumeCalc = () => resume?.();
