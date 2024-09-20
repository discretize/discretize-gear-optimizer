import { Character, characterLT } from '../../optimizer/optimizerCore';
import { ERROR, SUCCESS } from '../../optimizer/status';
import {
  addToList,
  changeList,
  changeProgress,
  changeSelectedCharacter,
  changeStatus,
} from '../../slices/controlsSlice';
import type { AppDispatch, RootState } from '../../store';
import type { WorkerWrapper } from '../calculate';
import { Combination, ResultData, Settings } from '../optimizerSetup';
import { enhanceResults, getResultProperties } from '../results';
import { getLayerCombinations, getLayerNumber } from '../tree';
import { getTotalCombinations, splitCombinations } from '../utils';
import {
  MessageType,
  START,
  StartMessage,
  isErrorMessage,
  isFinishMessage,
  isProgressMessage,
} from '../worker/workerMessageTypes';

const PROGRESS_UPDATE_INTERVALL = 2000000;
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
 * @param {Combination[]} combinations
 * @param {ResultData[]} resultData
 * @param {Settings} settings
 * @param {number} maxThreads
 * @param {boolean} withHeuristics
 */
export default function runCalcNormal(
  reduxState: RootState,
  dispatch: AppDispatch,
  workers: WorkerWrapper[],
  combinations: Combination[],
  resultData: ResultData[],
  settings: Settings,
  maxThreads: number,
  withHeuristics: boolean,
) {
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
      results.push(
        enhanceResults(
          message.results,
          settings,
          combinations,
          getResultProperties(reduxState, resultData),
        ),
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
      console.log('Raw Results', message.results);
      dispatch(changeProgress(progress));

      // only update the list for the first thread that sends an update
      if (currentProgress % (effectiveThreads * PROGRESS_UPDATE_INTERVALL) === 0) {
        // update result table
        if (message.results.length > 0)
          dispatch(
            addToList({
              rankby: settings.rankby,
              data: enhanceResults(
                message.results,
                settings,
                combinations,
                getResultProperties(reduxState, resultData),
              ),
            }),
          );
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
      chunks: chunks[index],
      settings,
      combinations,
      withHeuristics,
    };
    workerObj.status = 'running';
    workerObj.worker.postMessage(message);
  });
}
