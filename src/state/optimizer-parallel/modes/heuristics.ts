import { RUNNING_HEURISTICS } from '../../optimizer/status';
import { changeStatus } from '../../slices/controlsSlice';
import type { AppDispatch, RootState } from '../../store';
import type { WorkerWrapper } from '../calculate';
import { CombinationSettings, ResultData, CalculationSettings } from '../optimizerSetup';
import { getLayerCombinations, getLayerNumber } from '../tree';
import { getExtrasIdsCombinations, getTotalCombinations, splitCombinations } from '../utils';
import {
  START_HEURISTICS,
  StartHeuristicsMessage,
  isFinishHeuristicsMessage,
} from '../worker/workerMessageTypes';
import runCalcNormal from './normal';

export default function runCalcHeuristics(
  reduxState: RootState,
  dispatch: AppDispatch,
  workers: WorkerWrapper[],
  settings: CalculationSettings,
  maxThreads: number,
) {
  dispatch(changeStatus(RUNNING_HEURISTICS));

  const extrasIds = getExtrasIdsCombinations(reduxState);
  // for a particular problem it might not be possible to split work efficiently into effectiveThreads chunks
  const effectiveThreads = Math.min(maxThreads, getTotalCombinations(extrasIds, 1));

  const layer = getLayerNumber(extrasIds, effectiveThreads);
  const layerCombinations = getLayerCombinations(extrasIds, layer);
  const chunks = splitCombinations(layerCombinations, effectiveThreads);

  const combinations: CombinationSettings[] = [];
  const resultData: ResultData[] = [];

  workers.forEach((workerObj, index) => {
    if (index >= effectiveThreads) {
      return;
    }

    workerObj.worker.onmessage = (e) => {
      if (isFinishHeuristicsMessage(e.data)) {
        workerObj.status = 'finished_heuristics';
        // check if all workers are finished
        const allFinished = workers
          .slice(0, effectiveThreads)
          .every((locWorker) => locWorker.status === 'finished_heuristics');
        const combs = e.data.data.map((chunk) => chunk[0]);
        const res = e.data.data.map((chunk) => chunk[1]);
        combinations.push(...combs);
        resultData.push(...res);

        if (allFinished) {
          console.log("All workers finished heuristics, let's start the real calculation");
          console.log(
            'Heuristics chosen combinations:',
            resultData.map(({ extrasCombination }) => extrasCombination),
          );

          runCalcNormal(
            reduxState,
            dispatch,
            workers,
            combinations,
            resultData,
            settings,
            maxThreads,
            // note: change this back to true to enable per-thread combination heuristics
            false,
          );
        }
      }
    };
    const message: StartHeuristicsMessage = {
      type: START_HEURISTICS,
      index,
      chunks: chunks[index],
      extrasIds,
      reduxState,
      settings,
    };
    workerObj.status = 'running_heuristics';
    workerObj.worker.postMessage(message);
  });
}
