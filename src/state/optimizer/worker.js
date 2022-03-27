import * as Comlink from 'comlink';
import { OptimizerCore } from './optimizerCore';

let generator;

Comlink.expose({
  setup: (...args) => {
    const core = new OptimizerCore(...args);
    console.log('HEY', core);
    generator = core.calculate();
  },
  next: () => generator.next(),
});
