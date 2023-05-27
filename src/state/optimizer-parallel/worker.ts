import { descendSubtreeDFS } from './affixTree';
import { FINISHED, SETUP, START } from './workerMessageTypes';

let chunks: number[][];
let affixArray: number[][];

onmessage = (e) => {
  console.log('worker received message', e.data);

  switch (e.data.type) {
    case SETUP:
      chunks = e.data.data.chunks;
      affixArray = e.data.data.affixArray;
      break;

    case START:
      console.log('Worker start', chunks);
      start(e.data.data.isWasm);
      break;
    default:
      throw new Error('Unknown message type', e.data.type);
  }
};

async function start(wasm = false) {
  if (wasm) {
    // this doesnt currently work
    const starttime = performance.now();
    await wasm_bindgen('/pkg/wasm_module_bg.wasm');
    const data = calculate(JSON.stringify(chunks), JSON.stringify(affixArray));
    const time = performance.now() - starttime;
    return { time, data };
  }

  let counter = 0;
  chunks.forEach((chunk) => {
    descendSubtreeDFS(affixArray, chunk, (leaf) => {
      // do something for the leaf node
      counter++;
    });
  });

  postMessage({
    type: FINISHED,
    data: { leafnodes: counter },
  });
}
