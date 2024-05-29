import { Character } from '../../optimizer/optimizerCore';
import type { ExtrasCombinationEntry } from '../../optimizer/optimizerSetup';
import { RootState } from '../../store';
import { Combination, Settings } from '../optimizerSetup';
import { ResultProperties } from '../results';

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
  chunks: string[][];
  combinations: Combination[];
  settings: Settings;
  resultProperties: ResultProperties;
  withHeuristics: boolean;
}
export interface StartHeuristicsMessage {
  type: typeof START_HEURISTICS;
  chunks: string[][];
  extrasIds: string[][];
  reduxState: RootState;
  settings: Settings;
}
export interface FinishedMessage {
  type: typeof FINISHED;
  data: Character[];
}
export interface FinishedHeuristicsMessage {
  type: typeof FINISHED_HEURISTICS;
  data: [Combination, ExtrasCombinationEntry][];
}
export interface ProgressMessage {
  type: typeof PROGRESS;
  new: number;
  total: number;
  results: Character[];
  combinations: Combination[];
}
export interface ErrorMessage {
  type: typeof ERROR;
  data: any;
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
