export const WAITING = 'WAITING';
export const RUNNING = 'RUNNING';
export const STOPPED = 'STOPPED';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';

export type OptimizerStatus =
  | typeof WAITING
  | typeof RUNNING
  | typeof STOPPED
  | typeof SUCCESS
  | typeof ERROR;
