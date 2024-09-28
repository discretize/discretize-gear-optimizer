export const WAITING = 'WAITING';
export const RUNNING = 'RUNNING';
export const RUNNING_HEURISTICS = 'RUNNING HEURISTICS';
export const STOPPED = 'STOPPED';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';

export type OptimizerStatus =
  | typeof WAITING
  | typeof RUNNING
  | typeof RUNNING_HEURISTICS
  | typeof STOPPED
  | typeof SUCCESS
  | typeof ERROR;
