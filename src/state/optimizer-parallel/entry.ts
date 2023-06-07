import { Dispatch } from 'react';
import { Character } from '../optimizer/optimizerCore';
import { setupCombinations } from '../optimizer/optimizerSetup';
import { RUNNING } from '../optimizer/status';
import {
  changeList,
  changeProgress,
  changeSelectedCharacter,
  changeStatus,
} from '../slices/controlsSlice';
import { getAffixCombinations, getLayerNumber } from './affixTree';
import { FINISHED, PROGRESS, SETUP, START } from './workerMessageTypes';
import { getTotalCombinations, transformResults } from './utils';

let dispatch: Dispatch<any>;
const PROGRESS_UPDATE_INTERVALL = 1000000;

// fuck typing redux
function calculate(reduxState: any, dispatchMethod: Dispatch<any>) {
  const NUM_THREADS = reduxState.optimizer.control.hwThreads;
  dispatch = dispatchMethod;

  dispatch(changeStatus(RUNNING));
  dispatch(changeProgress(0));
  console.log('Parallel Optimizer');
  console.log('State', reduxState);

  // get the extra combinations from the redux state
  const combinations = setupCombinations(reduxState);
  const totalCombinations = getTotalCombinations(combinations);
  if (combinations.length === 0) {
    console.error('No combinations found');
    return;
  }

  const affixArray = combinations[0].settings?.affixesArray;
  const maxResults = combinations[0].settings?.maxResults;

  if (!affixArray) {
    console.error('No affixes found');
    return;
  }

  const layer = getLayerNumber(affixArray, NUM_THREADS);

  console.log(`Creating ${NUM_THREADS} threads to calculate ${layer} layers`);
  const workers = [...Array(NUM_THREADS)].map((_, index) => {
    return {
      status: 'created',
      workerId: index,
      worker: new Worker(new URL('./worker.ts', import.meta.url), { type: 'module' }),
    };
  });

  const affixcombinations = getAffixCombinations(affixArray, layer);

  // split work into NUM_THREADS chunks, each chunk getting a number of subtrees to calculate
  const chunks = splitCombinations(affixcombinations, NUM_THREADS);

  let currentProgress = 0;

  // send chunks to workers
  workers.forEach(({ worker }, index) => {
    worker.postMessage({
      type: SETUP,
      data: {
        chunks: chunks[index],
        combinations,
        thread_num: index,
        total_threads: NUM_THREADS,
      },
    });
  });

  // attach listener
  const results: any[][] = [];
  workers.forEach(({ worker }, index) => {
    worker.onmessage = (e) => {
      let message = e.data;
      if (typeof e.data === 'string') {
        message = JSON.parse(e.data);
      }

      switch (message.type) {
        case FINISHED:
          results.push(message.data);
          workers[index].status = FINISHED;

          // check if all workers finished
          if (workers.every(({ status }) => status === FINISHED)) {
            const endTime = performance.now();
            console.log('Time', endTime - startTime, 'ms');

            const sortedResults = results
              .flat(1)
              .sort((a, b) => b.attributes[b.settings.rankby] - a.attributes[a.settings.rankby])
              .slice(0, maxResults);

            onFinish(sortedResults);
          }
          break;

        case PROGRESS:
          currentProgress += message.data.new;

          // eslint-disable-next-line no-case-declarations
          const progress = Math.round((currentProgress / totalCombinations) * 100);
          // dispatch as a percentage of total combinations
          console.log('Progress', currentProgress, '/', totalCombinations, '=', progress, '%');

          // only update the list for the first thread that sends an update
          if (currentProgress % (NUM_THREADS * PROGRESS_UPDATE_INTERVALL) === 0) {
            dispatch(changeProgress(progress));
            dispatch(changeList(transformResults(message.data.results, combinations)));
          }

          break;
        default:
          throw new Error('Unknown message type ', message.type);
      }
    };
  });

  const startTime = performance.now();

  // start workers
  workers.forEach(({ worker }) => {
    worker.postMessage({
      type: START,
    });
  });

  return workers;
}

function onFinish(results: Character[]) {
  console.log('All workers finished');
  console.log('Results', results);

  if (!dispatch) {
    throw new Error('Dispatch not set');
  }

  dispatch(changeStatus(FINISHED));
  dispatch(changeList(results));
  dispatch(changeSelectedCharacter(results[0]));
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

export default calculate;
