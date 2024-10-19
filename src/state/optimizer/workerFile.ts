import * as Comlink from 'comlink';
import * as worker from './worker';

Comlink.expose(worker);
