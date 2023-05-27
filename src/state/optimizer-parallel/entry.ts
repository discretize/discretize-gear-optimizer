import { Affix } from '../../utils/gw2-data';
import { getAffixCombinations, getLayerNumber } from './affixTree';
import { FINISHED, SETUP, START } from './workerMessageTypes';

const getAffixId = (affix: string) => Object.keys(Affix).indexOf(affix);

// should make this a settings variable or something
const NUM_THREADS = 16;

function calculate(reduxState: any) {
  console.log('Parallel Optimizer');
  console.log('State', reduxState);

  // prepare affixes
  const affixes = reduxState.optimizer.form.priorities.affixes;
  const forcedSlots = reduxState.optimizer.form.forcedSlots.slots;

  // merge affixes with forced slots to create an array of affixes for each slot
  const affixArray = forcedSlots.map((slot: string, index: number) => {
    if (!slot) {
      return affixes.map(getAffixId);
    } else {
      return [getAffixId(slot)];
    }
  });

  const layer = getLayerNumber(affixArray, NUM_THREADS);

  console.log('Creating ' + NUM_THREADS + ' threads to calculate ' + layer + ' layers');
  const workers = [...Array(NUM_THREADS)].map((_, index) => {
    return {
      status: 'created',
      workerId: index,
      worker: new Worker(new URL('./worker.ts', import.meta.url), { type: 'module' }),
    };
  });

  const combinations = getAffixCombinations(affixArray, layer);
  console.log('Combinations', combinations);

  // split work into NUM_THREADS chunks, each chunk getting a number of subtrees to calculate
  const chunks = splitCombinations(combinations);
  console.log('Chunks', chunks);

  // send chunks to workers
  workers.forEach(({ worker }, index) => {
    worker.postMessage({
      type: SETUP,
      data: {
        affixArray,
        chunks: chunks[index],
      },
    });
  });

  const startTime = performance.now();
  // attach listener
  let leafnodes = 0;
  workers.forEach(({ worker }, index) => {
    worker.onmessage = (e) => {
      console.log('Worker message', e.data);
      if (e.data.type === 'FINISHED') {
        console.log('Worker finished', e.data.data);
        leafnodes += e.data.data.leafnodes;

        workers[index].status = FINISHED;

        // check if all workers finished
        if (workers.every(({ status }) => status === FINISHED)) {
          console.log('All workers finished');
          console.log('Leafnodes', leafnodes);
          const endTime = performance.now();
          console.log('Time', endTime - startTime, 'ms');
        }
      }
    };
  });

  // start workers
  workers.forEach(({ worker }) => {
    worker.postMessage({
      type: START,
    });
  });
}

/**
 * Splits the work into NUM_THREADS chunks, each chunk getting an array of subtrees to calculate
 * combinations are split in a round-robin fashion
 *
 * @param combinations all possible affix combinations
 */
function splitCombinations(combinations: number[][]) {
  const chunks = [...Array(NUM_THREADS)].map(() => [] as number[][]);

  let chunkIndex = 0;
  combinations.forEach((combination) => {
    chunks[chunkIndex].push(combination);
    chunkIndex = (chunkIndex + 1) % NUM_THREADS;
  });

  return chunks;
}

export default calculate;
