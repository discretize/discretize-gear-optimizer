import { Dispatch } from 'react';
import { Character, OptimizerCoreSettings } from '../optimizer/optimizerCore';
import { ERROR, RUNNING } from '../optimizer/status';
import { getBuffsModifiers } from '../slices/buffs';
import {
  changeList,
  changeProgress,
  changeSelectedCharacter,
  changeStatus,
  getHeuristics,
} from '../slices/controlsSlice';
import { getExtraModifiersModifiers } from '../slices/extraModifiers';
import { getInfusionsModifiers } from '../slices/infusions';
import { getSkillsModifiers } from '../slices/skills';
import { getTraitsModifiers } from '../slices/traits';
import {
  AppliedModifier,
  Combination,
  ResultData,
  Settings,
  createSettings,
  setupNormal,
} from './optimizerSetup';
import { getLayerCombinations, getLayerNumber } from './tree';
import { getExtrasIdsCombinations, getTotalCombinations } from './utils';
import {
  FINISHED,
  MessageType,
  START,
  START_HEURISTICS,
  StartHeuristicsMessage,
  isErrorMessage,
  isFinishHeuristicsMessage,
  isFinishMessage,
  isProgressMessage,
} from './workerMessageTypes';

interface Worker {
  status: 'created' | 'running' | 'stopped' | 'finished' | 'error' | 'finished_heuristics';
  workerId: number;
  worker: globalThis.Worker;
}

let dispatch: Dispatch<any>;
const PROGRESS_UPDATE_INTERVALL = 1000000;
let currentProgress = 0;

// fuck typing redux
function calculate(reduxState: any, dispatchMethod: Dispatch<any>) {
  const NUM_THREADS = reduxState.optimizer.control.hwThreads;
  dispatch = dispatchMethod;

  dispatch(changeStatus(RUNNING));
  dispatch(changeProgress(0));

  console.log('Parallel Optimizer');
  console.log('State', reduxState);

  const withHeuristics: boolean = getHeuristics(reduxState);

  const settings: Settings = createSettings(reduxState);
  let combinations: Combination[] = [];
  let resultData: ResultData[] = [];

  console.log(`Creating ${NUM_THREADS} threads`);
  const workers: Worker[] = [...Array(NUM_THREADS)].map((_, index) => {
    return {
      status: 'created',
      workerId: index,
      worker: new Worker(new URL('./worker.ts', import.meta.url), { type: 'module' }),
    };
  });

  // setup combinations
  if (!withHeuristics) {
    // get the extra combinations from the redux state
    const [_combinations, _resultData] = setupNormal(reduxState);

    if (_combinations.length === 0) {
      console.error('No combinations found');
      return;
    }

    combinations = _combinations;
    resultData = _resultData;

    runCalc(reduxState, workers, combinations, resultData, settings, NUM_THREADS, false);
  } else {
    const extrasIds = getExtrasIdsCombinations(reduxState);
    const actualThreadNumber = Math.min(NUM_THREADS, getTotalCombinations(extrasIds, 1));

    const layer = getLayerNumber(extrasIds, actualThreadNumber);
    const layerCombinations = getLayerCombinations(extrasIds, layer);
    const chunks = splitCombinations(layerCombinations, actualThreadNumber);

    workers.forEach((workerObj, index) => {
      workerObj.worker.onmessage = (e) => {
        console.log('Message from worker', e.data);
        if (isFinishHeuristicsMessage(e.data)) {
          workerObj.status = 'finished_heuristics';
          // check if all workers are finished
          const allFinished = workers.every(
            (locWorker) => locWorker.status === 'finished_heuristics',
          );
          const combs = e.data.data.map((c) => c[0]);
          const res = e.data.data.map((c) => c[1]);
          combinations.push(...combs);
          resultData.push(...res);

          if (allFinished) {
            console.log("All workers finished heuristics, let's start the real calculation");
            console.log('Combinations', resultData);
            runCalc(reduxState, workers, combinations, resultData, settings, NUM_THREADS, true);
          }
        }
      };
      if (index >= actualThreadNumber) {
        workerObj.status = 'finished_heuristics';
      } else {
        const message: StartHeuristicsMessage = {
          type: START_HEURISTICS,
          chunks: chunks[index],
          extrasIds,
          reduxState,
          settings,
        };
        workerObj.worker.postMessage(message);
      }
    });

    return;
  }

  return workers;
}

let results = [] as Character[][];

function onMessage(
  e: MessageEvent<MessageType>,
  index: number,
  workers: Worker[],
  maxResults: number,
  numThreads: number,
) {
  console.log('Message', e.data);

  let message = e.data;
  if (typeof e.data === 'string') {
    message = JSON.parse(e.data);
  }

  if (isFinishMessage(message)) {
    results.push(message.data);
    workers[index].status = 'finished';

    // check if all workers finished
    if (workers.every(({ status }) => status === 'finished')) {
      const sortedResults = results
        .flat(1)
        .sort((a, b) => b.attributes[b.settings.rankby] - a.attributes[a.settings.rankby])
        .slice(0, maxResults);

      console.log('All workers finished');
      console.log('Results', sortedResults);

      if (!dispatch) {
        throw new Error('Dispatch not set');
      }

      dispatch(changeStatus(FINISHED));
      dispatch(changeList(sortedResults));
      dispatch(changeSelectedCharacter(sortedResults[0]));
    }
  } else if (isProgressMessage(message)) {
    currentProgress += message.new;

    // eslint-disable-next-line no-case-declarations
    const progress = Math.round((currentProgress / message.total) * 100);
    // dispatch as a percentage of total combinations
    console.log('Progress', currentProgress, '/', message.total, '=', progress, '%');

    // only update the list for the first thread that sends an update
    if (currentProgress % (numThreads * PROGRESS_UPDATE_INTERVALL) === 0) {
      dispatch(changeProgress(progress));
      // if (message.data.results.length > 0)
      //  dispatch(changeList(transformResults(message.data.results, combinations)));
    }
  } else if (isErrorMessage(message)) {
    console.error('Error', message.data);
    dispatch(changeStatus(ERROR));
  } else {
    console.error('Unknown message', message);
  }
}

/**
 * Splits the work into NUM_THREADS chunks, each chunk getting an array of subtrees to calculate
 * combinations are split in a round-robin fashion
 *
 * @param combinations all possible affix combinations
 * @param NUM_THREADS number of threads to use
 */
function splitCombinations<T>(combinations: T[][], NUM_THREADS = 4) {
  const chunks = [...Array(NUM_THREADS)].map(() => [] as T[][]);

  let chunkIndex = 0;
  combinations.forEach((combination) => {
    chunks[chunkIndex].push(combination);
    chunkIndex = (chunkIndex + 1) % NUM_THREADS;
  });

  return chunks;
}

export type ResultProperties = {
  cachedFormState: OptimizerCoreSettings['cachedFormState'];
  sharedModifiers: AppliedModifier[];
  allExtrasData: {
    extrasModifiers: AppliedModifier[];
    extrasCombination: Record<string, string>;
  }[];
};

const getResultProperties: (reduxState: any, resultData: ResultData[]) => ResultProperties = (
  reduxState: any,
  resultData,
) => {
  const state = reduxState.optimizer;

  const sharedModifiers: AppliedModifier[] = [
    ...(getBuffsModifiers(reduxState) || []),
    ...(getExtraModifiersModifiers(reduxState) || []),
    ...(getInfusionsModifiers(reduxState) || []),
    ...(getSkillsModifiers(reduxState) || []),
    ...(getTraitsModifiers(reduxState) || []),
  ];

  return {
    cachedFormState: {
      traits: state.form.traits,
      skills: state.form.skills,
      extras: state.form.extras,
      buffs: state.form.buffs, // buffs are also needed to share a build and display the assumed buffs for the result
      priorities: state.form.priorities,
    },
    sharedModifiers,
    allExtrasData: resultData,
  };
};

function runCalc(
  reduxState: any,
  workers: Worker[],
  combinations: Combination[],
  resultData: ResultData[],
  settings: Settings,
  NUM_THREADS: number,
  withHeuristics: boolean,
) {
  const affixArray = settings?.affixesArray;
  if (!affixArray) {
    console.error('No affixes found');
    return;
  }
  const layer = getLayerNumber(affixArray, NUM_THREADS);
  const affixcombinations = getLayerCombinations(affixArray, layer);

  // split work into NUM_THREADS chunks, each chunk getting a number of subtrees to calculate
  const chunks = splitCombinations(affixcombinations, NUM_THREADS);

  const maxResults = settings?.maxResults;
  // attach listener
  workers.forEach(({ worker }, index) => {
    worker.onmessage = (e: MessageEvent<MessageType>) =>
      onMessage(e, index, workers, maxResults, NUM_THREADS);
  });

  currentProgress = 0;
  results = [];
  // start workers
  workers.forEach(({ worker }, index) => {
    worker.postMessage({
      type: START,
      chunks: chunks[index],
      settings,
      combinations,
      thread_num: index,
      total_threads: NUM_THREADS,
      resultProperties: getResultProperties(reduxState, resultData),
      withHeuristics,
    });
  });
}
export default calculate;
