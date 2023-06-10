/* eslint-disable camelcase */
import init, { calculate, calculate_with_heuristics } from 'wasm_module';
import { ERROR } from '../optimizer/status';
import { Combination, Settings } from './optimizerSetup';
import {
  combinationsToWorkerString,
  enhanceResults,
  getAffixId,
  settingsToWorkerString,
} from './utils';
import { FINISHED, SETUP, START, STOP } from './workerMessageTypes';
import { ResultProperties } from './entry';

let chunks: number[][];
let combinations: Combination[];
let settings: Settings;
// let threadNum = -1;
// let totalThreads = -1;
let resultProperties: ResultProperties;

onmessage = (e) => {
  console.log('worker received message', e.data);

  switch (e.data.type) {
    case SETUP:
      chunks = e.data.data.chunks.map((chunk: string[]) => chunk.map(getAffixId));
      combinations = e.data.data.combinations;
      settings = e.data.data.settings;
      // threadNum = e.data.data.thread_num;
      // totalThreads = e.data.data.total_threads;
      resultProperties = e.data.data.resultProperties;
      break;

    case START:
      console.log('Worker start', chunks);
      start(e.data.data.withHeuristics);
      break;

    case STOP:
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

  try {
    // also adjust the settings to be usable by rust (we use c-like enums there)
    const data = calcFn(
      JSON.stringify(chunks),
      settingsToWorkerString(settings),
      combinationsToWorkerString(combinations),
    );

    console.log('Wasm calculation finished in', performance.now() - now, 'ms');

    console.log(JSON.parse(data || '[]'));

    postMessage({
      type: FINISHED,
      data: enhanceResults(JSON.parse(data || '[]'), settings, combinations, resultProperties),
    });
  } catch (e) {
    postMessage({
      type: ERROR,
      data: e,
    });
  }
}
