import type { WorkerWrapper } from '../calculate';
import { Combination, ResultData, Settings } from '../optimizerSetup';
import { getLayerCombinations, getLayerNumber } from '../tree';
import { getExtrasIdsCombinations, getTotalCombinations, splitCombinations } from '../utils';
import {
  START_HEURISTICS,
  StartHeuristicsMessage,
  isFinishHeuristicsMessage,
} from '../worker/workerMessageTypes';
import runCalcNormal from './normal';
import { AppDispatch, RootState } from '../../store';

export default function runCalcHeuristics(
  reduxState: RootState,
  dispatch: AppDispatch,
  workers: WorkerWrapper[],
  settings: Settings,
  maxThreads: number,
) {
  const extrasIds = getExtrasIdsCombinations(reduxState);
  // for a particular problem it might not be possible to split work efficiently into effectiveThreads chunks
  const effectiveThreads = Math.min(maxThreads, getTotalCombinations(extrasIds, 1));

  const layer = getLayerNumber(extrasIds, effectiveThreads);
  const layerCombinations = getLayerCombinations(extrasIds, layer);
  const chunks = splitCombinations(layerCombinations, effectiveThreads);

  const combinations: Combination[] = [];
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
          runCalcNormal(
            reduxState,
            dispatch,
            workers,
            combinations,
            resultData,
            settings,
            maxThreads,
            true,
          );
        }
      }
    };
    const message: StartHeuristicsMessage = {
      type: START_HEURISTICS,
      chunks: chunks[index],
      extrasIds,
      reduxState,
      settings,
    };
    workerObj.worker.postMessage(message);
  });
}
