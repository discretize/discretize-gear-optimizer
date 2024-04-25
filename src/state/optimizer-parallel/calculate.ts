import { RUNNING } from '../optimizer/status';
import {
  changeFilteredList,
  changeList,
  changeProgress,
  changeSelectedCharacter,
  changeStatus,
  getHeuristics,
} from '../slices/controlsSlice';
import type { AppDispatch, RootState } from '../store';
import runCalcHeuristics from './modes/heuristics';
import runCalcNormal from './modes/normal';
import { createSettings, setupNormal } from './optimizerSetup';

export interface WorkerWrapper {
  status: 'created' | 'running' | 'stopped' | 'finished' | 'error' | 'finished_heuristics';
  workerId: number;
  worker: globalThis.Worker;
}

const createdWorkers: globalThis.Worker[] = [];

export default function calculate(reduxState: RootState, dispatch: AppDispatch): WorkerWrapper[] {
  const selectedMaxThreads = reduxState.optimizer.control.hwThreads;

  dispatch(changeStatus(RUNNING));
  dispatch(changeList([]));
  dispatch(changeFilteredList([]));
  dispatch(changeProgress(0));
  dispatch(changeSelectedCharacter(null));

  console.log('Parallel Optimizer');
  console.log('State', reduxState);

  const withHeuristics = getHeuristics(reduxState);
  const settings = createSettings(reduxState);

  console.log(`Creating ${selectedMaxThreads} threads`);
  // create all threads. later on we may or may not use them depending on the presented problem
  const workers: WorkerWrapper[] = [...Array(selectedMaxThreads)].map((_, index) => {
    createdWorkers[index] ??= new Worker(new URL('./worker/worker.ts', import.meta.url), {
      type: 'module',
    });
    return {
      status: 'created',
      workerId: index,
      worker: createdWorkers[index],
    };
  });

  // select calculation mode - at the moment there are only two modes
  if (withHeuristics) {
    runCalcHeuristics(reduxState, dispatch, workers, settings, selectedMaxThreads);
  } else {
    // get the extra combinations from the redux state
    const [_combinations, _resultData] = setupNormal(reduxState);

    if (_combinations.length === 0) {
      console.error('No combinations found');
      return [];
    }

    runCalcNormal(
      reduxState,
      dispatch,
      workers,
      _combinations,
      _resultData,
      settings,
      selectedMaxThreads,
      false,
    );
  }

  return workers;
}
