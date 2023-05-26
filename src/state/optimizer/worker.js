import * as Comlink from 'comlink';
import { calculate } from './optimizer';

let resultGenerator;

Comlink.expose({
  setup: (reduxState) => {
    resultGenerator = calculate(reduxState);
  },
  next: () => resultGenerator.next(),
});
