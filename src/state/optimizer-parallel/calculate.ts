import { STOPPED } from '../optimizer/status';
import {
  changeFilteredLists,
  changeList,
  changeProgress,
  changeStatus,
  getHeuristics,
} from '../slices/controlsSlice';
import type { AppDispatch, RootState } from '../store';
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

const terminateActiveWorkers = () => {
  createdWorkers.forEach((workerObj, i) => {
    if (workerObj.status !== 'idle') {
      workerObj.worker.terminate();
      createdWorkers[i] = createWorker();
    }
  });
};

export function calculateParallel(reduxState: RootState, dispatch: AppDispatch): WorkerWrapper[] {
  const selectedMaxThreads = reduxState.optimizer.control.hwThreads;

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
  const workers: WorkerWrapper[] = [...Array(selectedMaxThreads)].map((_, index) => {
    createdWorkers[index] ??= createWorker();
    return createdWorkers[index];
  });

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

  return workers;
}

export function stopCalculationParallel(dispatch: AppDispatch) {
  terminateActiveWorkers();
  dispatch(changeStatus(STOPPED));
}
