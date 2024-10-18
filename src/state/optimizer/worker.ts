import type { Combination } from './optimizer';
import type { CalculateGenerator } from './optimizerCore';
import { OptimizerCore } from './optimizerCore';

type WorkerCombination = Combination & {
  calculation: CalculateGenerator;
};

let i = 0;
let combinations: WorkerCombination[] = [];

export const setup = (input: Combination[]) => {
  i = 0;
  combinations = input.map((combination) => {
    const core = new OptimizerCore(combination.settings);
    return {
      ...combination,
      calculation: core.calculate(),
    };
  });
};

export const setupHeuristic = (input: Combination[], split: number) => {
  i = 0;
  combinations = input.map((combination) => {
    const core = new OptimizerCore({
      ...combination.settings,
      maxResults: 1,
    });
    return {
      ...combination,
      calculation: core.calculateHeuristic(split),
    };
  });
};

export const next = async () => {
  const combination = combinations[i];
  i = (i + 1) % combinations.length;

  return { combinationIndex: combination.index, result: combination.calculation!.next() };
};
