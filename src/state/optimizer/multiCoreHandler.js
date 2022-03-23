import { characterLT, createOptimizerCore } from './optimizerCore';

// eslint-disable-next-line id-length
const isArrayDifferent = (a, b) => {
  if (a.length !== b.length) return true;
  return a.some((_, i) => a[i] !== b[i]);
};

// todo: convert this file to a web worker handler

// eslint-disable-next-line import/prefer-default-export
export function* calculate(inputCombinations) {
  // do not mutate input; it will be reused if the same calculation is run twice
  const combinations = inputCombinations.map((combination) => ({ ...combination }));

  console.groupCollapsed('More debug Info:');

  for (const combination of combinations) {
    combination.core = createOptimizerCore(combination.input);
    combination.calculation = combination.core.calculate();
  }

  console.groupEnd();

  const { rankby, runsAfterThisSlot } = combinations[0].core.settings;
  const globalCalculationTotal = runsAfterThisSlot[0] * combinations.length;

  let i = 0;
  let globalList = [];
  let globalFilteredList = [];
  while (combinations.some((combination) => !combination.done)) {
    const combination = combinations[i];

    const currentIndex = i;
    i = (i + 1) % combinations.length;

    if (combination.done) continue;

    const { value: { isChanged, calculationRuns, newList } = {}, done } =
      combination.calculation.next();

    if (done) {
      combination.done = true;
      continue;
    }

    if (isChanged) {
      combination.list = newList;

      // avoid pushing different arrays with the same contents, as this breaks react memoization

      const newGlobalList = combinations
        .flatMap(({ list }) => list || [])
        // eslint-disable-next-line id-length
        .sort((a, b) => characterLT(a, b, rankby))
        .slice(0, 50);

      if (isArrayDifferent(globalList, newGlobalList)) {
        globalList = newGlobalList;
      }

      const newGlobalFilteredList = combinations
        .map(({ list }) => list?.[0])
        .filter(Boolean)
        // eslint-disable-next-line id-length
        .sort((a, b) => characterLT(a, b, rankby));

      if (isArrayDifferent(globalFilteredList, newGlobalFilteredList)) {
        globalFilteredList = newGlobalFilteredList;
      }
    }

    console.log(`option ${currentIndex} progress: ${calculationRuns} / ${runsAfterThisSlot[0]}`);

    combination.calculationRuns = calculationRuns;

    const globalCalculationRuns = combinations.reduce(
      (prev, cur) => prev + (cur.calculationRuns ?? 0),
      0,
    );
    console.log(`total progress: ${globalCalculationRuns} / ${globalCalculationTotal}`);

    yield {
      percent: Math.floor((globalCalculationRuns * 100) / globalCalculationTotal),
      isChanged,
      newList: globalList,
      newFilteredList: globalFilteredList,
    };
  }
}
