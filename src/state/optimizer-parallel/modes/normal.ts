import type { Character } from '../../optimizer/optimizerCore';
import { characterLT } from '../../optimizer/optimizerCore';
import type { ExtrasCombinationEntry } from '../../optimizer/optimizerSetup';
import { ERROR, RUNNING, SUCCESS } from '../../optimizer/status';
import {
  changeList,
  changeProgress,
  changeSelectedCharacter,
  changeStatus,
} from '../../slices/controlsSlice';
import type { AppDispatch, RootState } from '../../store';
import type { WorkerWrapper } from '../calculate';
import type { CalculationSettings, CombinationSettings } from '../optimizerSetup';
import { enhanceResults, getResultProperties } from '../results';
import { getLayerCombinations, getLayerNumber } from '../tree';
import { getTotalCombinations, splitCombinations } from '../utils';
import type { MessageType, StartMessage } from '../worker/workerMessageTypes';
import {
  START,
  isErrorMessage,
  isFinishMessage,
  isProgressMessage,
} from '../worker/workerMessageTypes';

const PROGRESS_UPDATE_INTERVALL = 1000000;
let currentProgress = 0;
let results: Character[][] = [];

/**
 * Performs the calculation in normal mode. This means that the calculation is split into chunks of work
 * based on the affix tree structure. Each chunk is then calculated by a separate thread.
 * All extras combinations are evaluated by each thread.
 *
 * Optionally, heuristics can be used to speed up the calculation. This option will only use Rust based heuristics.
 * Each thread performs their own heuristics. Therefore, the same calculation will run on all threads, leading to some
 * power inefficiency.
 * Shouldnt be used for a lot (hundreds, thousands) of combinations.
 *
 * @param {RootState} reduxState
 * @param {AppDispatch} dispatch
 * @param {WorkerWrapper[]} workers
 * @param {CombinationSettings[]} combinations
 * @param {ExtrasCombinationEntry[]} extrasCombinationEntries
 * @param {CalculationSettings} settings
 * @param {number} maxThreads
 * @param {boolean} withHeuristics
 */
export default function runCalcNormal(
  reduxState: RootState,
  dispatch: AppDispatch,
  workers: WorkerWrapper[],
  combinations: CombinationSettings[],
  extrasCombinationEntries: ExtrasCombinationEntry[],
  settings: CalculationSettings,
  maxThreads: number,
  withHeuristics: boolean,
) {
  dispatch(changeStatus(RUNNING));

  const affixArray = settings?.affixesArray;
  if (!affixArray) {
    console.error('No affixes found');
    return;
  }
  const effectiveThreads = Math.min(maxThreads, getTotalCombinations(affixArray, 1));

  const layer = getLayerNumber(affixArray, effectiveThreads);
  const affixcombinations = getLayerCombinations(affixArray, layer);

  // split work into effectiveThreads chunks, each chunk getting a number of subtrees to calculate
  const chunks = splitCombinations(affixcombinations, effectiveThreads);

  const maxResults = settings?.maxResults;

  function onMessage(e: MessageEvent<MessageType>, index: number) {
    let message = e.data;
    if (typeof e.data === 'string') {
      message = JSON.parse(e.data) as any;
    }

    if (isFinishMessage(message)) {
      results[index] = enhanceResults(
        message.results,
        settings,
        combinations,
        getResultProperties(reduxState, extrasCombinationEntries),
      );
      workers[index].status = 'finished';

      // check if all workers finished
      if (workers.slice(0, effectiveThreads).every(({ status }) => status === 'finished')) {
        workers.forEach((workerObj) => {
          workerObj.status = 'idle';
        });
        const sortedResults = results
          .flat(1)
          .sort((a, b) => characterLT(a, b, settings.rankby))
          .slice(0, maxResults);

        console.log('All workers finished');
        console.log('Results', sortedResults);

        if (!dispatch) {
          throw new Error('Dispatch not set');
        }

        dispatch(changeStatus(SUCCESS));
        dispatch(changeList(sortedResults));
        dispatch(changeSelectedCharacter(sortedResults[0]));
      }
    } else if (isProgressMessage(message)) {
      currentProgress += message.new;

      // eslint-disable-next-line no-case-declarations
      const progress = Math.round((currentProgress / message.total) * 100);
      // dispatch as a percentage of total combinations
      console.log('Progress', currentProgress, '/', message.total, '=', progress, '%');
      console.info(index, 'Raw Results', message.results);
      dispatch(changeProgress(progress));

      if (message.results.length > 0) {
        results[index] = enhanceResults(
          message.results,
          settings,
          combinations,
          getResultProperties(reduxState, extrasCombinationEntries),
        );

        const sortedResults = results
          .flat(1)
          .sort((a, b) => characterLT(a, b, settings.rankby))
          .slice(0, maxResults);

        // only render the table for the first thread that sends an update
        if (currentProgress % (effectiveThreads * PROGRESS_UPDATE_INTERVALL) === 0) {
          dispatch(changeList(sortedResults));
        }
      }
    } else if (isErrorMessage(message)) {
      console.error('Error', message.data);
      dispatch(changeStatus(ERROR));
    } else {
      console.error('Unknown message', message);
    }
  }

  // attach listener
  workers.forEach(({ worker }, index) => {
    if (index >= effectiveThreads) {
      return;
    }
    results[index] = [];
    worker.onmessage = (e: MessageEvent<MessageType>) => onMessage(e, index);
  });

  currentProgress = 0;
  results = [];
  // start workers
  workers.forEach((workerObj, index) => {
    if (index >= effectiveThreads) {
      return;
    }
    const message: StartMessage = {
      type: START,
      index,
      chunks: chunks[index],
      settings,
      combinations,
      withHeuristics,
    };
    workerObj.status = 'running';
    workerObj.worker.postMessage(message);
  });
}
