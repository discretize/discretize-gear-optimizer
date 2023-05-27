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
      start();
      break;
    default:
      throw new Error('Unknown message type', e.data.type);
  }
};

function start() {
  // time the calculation

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
