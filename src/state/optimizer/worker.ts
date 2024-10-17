import type { Combination } from './optimizer';
import { OptimizerCore } from './optimizerCore';

let i = 0;
let combinations: Combination[] = [];

let nextPromise: ReturnType<typeof iterate>;

export const setup = (input: Combination[]) => {
  i = 0;
  combinations = input;

  combinations.forEach((combination) => {
    const core = new OptimizerCore(combination.settings);
    combination.calculation = core.calculate();
  });

  nextPromise = iterate();
};

export const setupHeuristic = (input: Combination[], split: number) => {
  i = 0;
  combinations = input;

  combinations.forEach((combination) => {
    const core = new OptimizerCore({
      ...combination.settings,
      maxResults: 1,
    });
    combination.calculation = core.calculateHeuristic(split);
  });

  nextPromise = iterate();
};

const iterate = async () => {
  await new Promise((resolve) => {
    setTimeout(resolve);
  });
  const combination = combinations[i];
  i = (i + 1) % combinations.length;

  return { combinationIndex: combination.index, result: combination.calculation!.next() };
};

export const next = async () => {
  const current = nextPromise;
  nextPromise = iterate();
  return current;
};
