import { getSharedModifiersInfo } from '../../components/baseComponents/ScenarioInfo';
import { STOPPED } from '../optimizer/utils/status';
import type { AppThunk } from '../redux-hooks';
import {
  changeFilteredLists,
  changeList,
  changeProgress,
  changeStatus,
  getHeuristics,
  getHwThreads,
} from '../slices/controlsSlice';
import runCalcHeuristics from './modes/heuristics';
import runCalcNormal from './modes/normal';
import { createCalculationSettings, setupNormal } from './optimizerSetup';

export interface WorkerWrapper {
  status: 'idle' | 'running' | 'finished' | 'running_heuristics' | 'finished_heuristics';
  worker: globalThis.Worker;
}

const createdWorkers: WorkerWrapper[] = [];

const createWorker = (): WorkerWrapper => ({
  status: 'idle',
  worker: new Worker(new URL('./worker/worker.ts', import.meta.url), { type: 'module' }),
});

const createWorkers = (count: number) => {
  while (createdWorkers.length < count) {
    createdWorkers.push(createWorker());
  }
  return createdWorkers.slice(0, count);
};

const terminateActiveWorkers = () => {
  createdWorkers.forEach((workerObj, i) => {
    if (workerObj.status !== 'idle') {
      workerObj.worker.terminate();
      createdWorkers[i] = createWorker();
    }
  });
};

export const calculateParallel: AppThunk = (dispatch, getState) => {
  const reduxState = getState();
  const selectedMaxThreads = getHwThreads(reduxState);

  if (getSharedModifiersInfo(reduxState).count !== '1') {
    const error =
      'Experimental Rust/WebAssembly mode is currently incompatible with advanced uptime simulation.' +
      '\n\n' +
      'Disable it for this calculation, or set all modifiers with a blue advanced uptime indicator to 0% or 100% uptime.';
    // eslint-disable-next-line no-alert
    alert(error);
    throw new Error(error);
  }

  dispatch(changeList([]));
  dispatch(
    changeFilteredLists({
      Combinations: [],
      Sigils: [],
      Runes: [],
      Relics: [],
      Nourishment: [],
      Enhancement: [],
    }),
  );
  dispatch(changeProgress(0));

  console.info('Parallel Optimizer');
  console.info('State', reduxState);

  const withHeuristics = getHeuristics(reduxState);
  const settings = createCalculationSettings(reduxState);

  terminateActiveWorkers();

  console.log(`Creating ${selectedMaxThreads} threads`);
  // create all threads. later on we may or may not use them depending on the presented problem
  const workers = createWorkers(selectedMaxThreads);

  // select calculation mode - at the moment there are only two modes
  if (withHeuristics) {
    runCalcHeuristics(reduxState, dispatch, workers, settings, selectedMaxThreads);
  } else {
    // get the extra combinations from the redux state
    const { combinations, extrasCombinationEntries } = setupNormal(reduxState);

    if (combinations.length === 0) {
      console.error('No combinations found');
      return [];
    }

    runCalcNormal(
      reduxState,
      dispatch,
      workers,
      combinations,
      extrasCombinationEntries,
      settings,
      selectedMaxThreads,
      false,
    );
  }
};

export const stopCalculationParallel: AppThunk = (dispatch) => {
  terminateActiveWorkers();
  dispatch(changeStatus(STOPPED));
};
