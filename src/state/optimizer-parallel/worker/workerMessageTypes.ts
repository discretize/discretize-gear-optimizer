import type { ExtrasCombinationEntry } from '../../optimizer/types/optimizerSetupTypes';
import type { RootState } from '../../store';
import type { CalculationSettings, CombinationSettings } from '../optimizerSetup';

// All messages exchanged between the main thread and the worker threads are typed here

export const SETUP = 'SETUP';
export const START = 'START';
export const FINISHED = 'FINISHED';
export const PROGRESS = 'PROGRESS';
export const RESUME = 'RESUME';
export const STOP = 'STOP';
export const ERROR = 'ERROR';
export const START_HEURISTICS = 'START_HEURISTICS';
export const FINISHED_HEURISTICS = 'FINISHED_HEURISTICS';

export type MessageType =
  | StartMessage
  | FinishedMessage
  | ProgressMessage
  | ErrorMessage
  | StartHeuristicsMessage
  | FinishedHeuristicsMessage;

export interface StartMessage {
  type: typeof START;
  index: number;
  chunks: string[][];
  combinations: CombinationSettings[];
  settings: CalculationSettings;
  withHeuristics: boolean;
}
export interface StartHeuristicsMessage {
  type: typeof START_HEURISTICS;
  index: number;
  chunks: string[][];
  extrasIds: string[][];
  reduxState: RootState;
  settings: CalculationSettings;
}
export interface FinishedMessage {
  type: typeof FINISHED;
  results: unknown[];
}
export interface FinishedHeuristicsMessage {
  type: typeof FINISHED_HEURISTICS;
  data: [CombinationSettings, ExtrasCombinationEntry][];
}
export interface ProgressMessage {
  type: typeof PROGRESS;
  new: number;
  total: number;
  results: unknown[];
}
export interface ErrorMessage {
  type: typeof ERROR;
  data: unknown;
}

export function isStartMessage(message: MessageType): message is StartMessage {
  return message.type === START;
}
export function isFinishMessage(message: MessageType): message is FinishedMessage {
  return message.type === FINISHED;
}
export function isProgressMessage(message: MessageType): message is ProgressMessage {
  return message.type === PROGRESS;
}
export function isErrorMessage(message: MessageType): message is ErrorMessage {
  return message.type === ERROR;
}
export function isStartHeuristicsMessage(message: MessageType): message is StartHeuristicsMessage {
  return message.type === START_HEURISTICS;
}
export function isFinishHeuristicsMessage(
  message: MessageType,
): message is FinishedHeuristicsMessage {
  return message.type === FINISHED_HEURISTICS;
}
