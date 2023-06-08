/* eslint-disable camelcase */
import init, { calculate, calculate_with_heuristics } from 'wasm_module';
import { Combination } from '../optimizer/optimizerSetup';
import { getAffixId, modifyCombinations, transformResults } from './utils';
import { FINISHED, SETUP, START } from './workerMessageTypes';

let chunks: number[][];
let combinations: Combination[];
let thread_num = -1;
let total_threads = -1;

onmessage = (e) => {
  console.log('worker received message', e.data);

  switch (e.data.type) {
    case SETUP:
      chunks = e.data.data.chunks.map((chunk: string[]) => chunk.map(getAffixId));
      combinations = e.data.data.combinations;
      thread_num = e.data.data.thread_num;
      total_threads = e.data.data.total_threads;
      break;

    case START:
      console.log('Worker start', chunks);
      start(e.data.data.withHeuristics);
      break;
    default:
      throw new Error('Unknown message type', e.data.type);
  }
};

async function start(withHeurisics = false) {
  let now = performance.now();
  // await wasm module initialization
  await init();

  console.log('Wasm module initialized in', performance.now() - now, 'ms');

  now = performance.now();

  const calcFn = withHeurisics ? calculate_with_heuristics : calculate;

  // console.log(JSON.stringify(modifyCombinations(combinations)));
  // call wasm function with chunks and affixArray
  const data = calcFn(
    JSON.stringify(chunks),
    JSON.stringify(
      // also adjust the settings to be usable by rust (we use c-like enums there)
      modifyCombinations(combinations),
    ),
  );

  console.log('Wasm calculation finished in', performance.now() - now, 'ms');

  postMessage({
    type: FINISHED,
    data: transformResults(JSON.parse(data || '[]'), combinations),
  });
}
