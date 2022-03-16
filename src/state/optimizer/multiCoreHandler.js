import { characterLT, createOptimizerCore } from './optimizerCore';

// todo: convert this file to a web worker handler

// eslint-disable-next-line import/prefer-default-export
export function* calculate(inputCombinations) {
  // do not mutate input; it will be reused if the same calculation is run twice
  const combinations = inputCombinations.map((combination) => ({ ...combination }));

  for (const combination of combinations) {
    combination.core = createOptimizerCore(combination.input);
    combination.calculation = combination.core.calculate();
  }

  const { rankby, runsAfterThisSlot } = combinations[0].core.settings;
  const globalCalculationTotal = runsAfterThisSlot[0] * combinations.length;

  let i = 0;
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

    console.log(`option ${currentIndex} progress: ${calculationRuns} / ${runsAfterThisSlot[0]}`);

    combination.list = newList;
    combination.calculationRuns = calculationRuns;

    const globalNewList = isChanged
      ? combinations
          .flatMap(({ list }) => list || [])
          // eslint-disable-next-line id-length
          .sort((a, b) => characterLT(a, b, rankby))
          .slice(0, 50)
      : null;

    const globalCalculationRuns = combinations.reduce(
      (prev, cur) => prev + (cur.calculationRuns ?? 0),
      0,
    );

    console.log(`total progress: ${globalCalculationRuns} / ${globalCalculationTotal}`);

    yield {
      percent: Math.floor((globalCalculationRuns * 100) / globalCalculationTotal),
      isChanged,
      newList: globalNewList,
    };
  }
}
