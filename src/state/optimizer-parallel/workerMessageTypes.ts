import { Character } from '../optimizer/optimizerCore';
import { ResultProperties } from './entry';
import { Combination, Settings } from './optimizerSetup';
import type { Combination as CombinationOld } from '../optimizer/optimizerSetup';

const SETUP = 'SETUP';
const START = 'START';
const FINISHED = 'FINISHED';
const PROGRESS = 'PROGRESS';
const RESUME = 'RESUME';
const STOP = 'STOP';
const ERROR = 'ERROR';
const START_HEURISTICS = 'START_HEURISTICS';
const FINISHED_HEURISTICS = 'FINISHED_HEURISTICS';

export {
  SETUP,
  START,
  FINISHED,
  PROGRESS,
  RESUME,
  STOP,
  ERROR,
  START_HEURISTICS,
  FINISHED_HEURISTICS,
};

export type MessageType =
  | StartMessage
  | FinishMessage
  | ProgressMessage
  | ErrorMessage
  | StartHeuristicsMessage
  | FinishHeuristicsMessage;

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
  reduxState: any;
  settings: Settings;
}
export interface FinishMessage {
  type: typeof FINISHED;
  data: Character[];
}
export interface FinishHeuristicsMessage {
  type: typeof FINISHED_HEURISTICS;
  data: [Combination, CombinationOld][];
}
export interface ProgressMessage {
  type: typeof PROGRESS;
  new: number;
  total: number;
}
export interface ErrorMessage {
  type: typeof ERROR;
  data: string;
}

export function isStartMessage(message: MessageType): message is StartMessage {
  return message.type === START;
}
export function isFinishMessage(message: MessageType): message is FinishMessage {
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
): message is FinishHeuristicsMessage {
  return message.type === FINISHED_HEURISTICS;
}
