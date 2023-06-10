import { Dispatch } from 'react';
import { Character, OptimizerCoreSettings } from '../optimizer/optimizerCore';
import { AppliedModifier, setupCombinations } from './optimizerSetup';
import { ERROR, RUNNING } from '../optimizer/status';
import {
  changeList,
  changeProgress,
  changeSelectedCharacter,
  changeStatus,
} from '../slices/controlsSlice';
import { getAffixCombinations, getLayerNumber } from './affixTree';
import { FINISHED, PROGRESS, SETUP, START } from './workerMessageTypes';
import { getBuffsModifiers } from '../slices/buffs';
import { getExtraModifiersModifiers } from '../slices/extraModifiers';
import { getInfusionsModifiers } from '../slices/infusions';
import { getSkillsModifiers } from '../slices/skills';
import { getTraitsModifiers } from '../slices/traits';

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
  const [settings, combinations, resultData] = setupCombinations(reduxState);
  console.log('Settings ', settings);
  console.log('Combinations ', combinations);

  if (combinations.length === 0) {
    console.error('No combinations found');
    return;
  }

  const affixArray = settings?.affixesArray;
  const maxResults = settings?.maxResults;

  if (!affixArray) {
    console.error('No affixes found');
    return;
  }

  const layer = getLayerNumber(affixArray, NUM_THREADS);
  const affixcombinations = getAffixCombinations(affixArray, layer);

  // split work into NUM_THREADS chunks, each chunk getting a number of subtrees to calculate
  const chunks = splitCombinations(affixcombinations, NUM_THREADS);

  console.log(`Creating ${NUM_THREADS} threads to calculate ${layer} layers`);
  const workers = [...Array(NUM_THREADS)].map((_, index) => {
    return {
      status: 'created',
      workerId: index,
      worker: new Worker(new URL('./worker.ts', import.meta.url), { type: 'module' }),
    };
  });

  let currentProgress = 0;
  // send chunks to workers
  workers.forEach(({ worker }, index) => {
    worker.postMessage({
      type: SETUP,
      data: {
        chunks: chunks[index],
        settings,
        combinations,
        thread_num: index,
        total_threads: NUM_THREADS,
        resultProperties: getResultProperties(reduxState, resultData),
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
        case ERROR:
          console.error('Error', message.data);
          dispatch(changeStatus(ERROR));
          break;
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
          const progress = Math.round((currentProgress / message.data.total) * 100);
          // dispatch as a percentage of total combinations
          console.log('Progress', currentProgress, '/', message.data.total, '=', progress, '%');

          // only update the list for the first thread that sends an update
          if (currentProgress % (NUM_THREADS * PROGRESS_UPDATE_INTERVALL) === 0) {
            dispatch(changeProgress(progress));
            // if (message.data.results.length > 0)
            //  dispatch(changeList(transformResults(message.data.results, combinations)));
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
      data: {
        withHeuristics: reduxState.optimizer.control.heuristics,
      },
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

export type ResultProperties = {
  cachedFormState: OptimizerCoreSettings['cachedFormState'];
  sharedModifiers: AppliedModifier[];
  allExtrasData: {
    extrasModifiers: AppliedModifier[];
    extrasCombination: Record<string, string>;
  }[];
};

const getResultProperties: (
  reduxState: any,
  resultData: {
    extrasModifiers: AppliedModifier[];
    extrasCombination: Record<string, string>;
  }[],
) => ResultProperties = (reduxState: any, resultData) => {
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

export default calculate;
