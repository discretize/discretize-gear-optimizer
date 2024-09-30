/* eslint-disable id-length */
/* eslint-disable import/prefer-default-export */

// warning: not optimized
function binomialCoefficient(n: number, k: number) {
  let result = 1;
  for (let i = 1; i <= k; i++) {
    result *= (n + 1 - i) / i;
  }
  return Math.round(result);
}

/**
 * Generates every integer partition of n of exactly length k.
 * Also known as the stars and bars problem.
 *
 * @example
 * console.log([...iteratePartitions(5, 3)])
 *
 * // [
 * //   [0, 0, 5],
 * //   [0, 1, 4],
 * //   [0, 2, 3],
 * //   ...
 * //   [4, 1, 0],
 * //   [5, 0, 0]
 * // ]
 *
 * @param {number} ballsN - total items to partition (n)
 * @param {number} cupsK - partitions (k)
 * @param {boolean} mutate - whether to repeatedly yield references to the same mutated array (faster)
 * @yields {number[]}
 */
export function* iteratePartitions(
  ballsN: number,
  cupsK: number,
  mutate = false,
): Generator<number[], void, void> {
  if (cupsK < 1) throw new Error('invalid iteratePartitions input');

  const current: number[] = new Array(cupsK).fill(0);

  function* inner(currentCup: number, currentBalls: number): Generator<number[], void, void> {
    if (currentCup === cupsK - 1) {
      current[currentCup] = currentBalls;
      yield mutate ? current : [...current];
    } else {
      for (let i = 0; i <= currentBalls; i++) {
        current[currentCup] = i;
        yield* inner(currentCup + 1, currentBalls - i);
      }
    }
  }

  yield* inner(0, ballsN);
}

export function iteratePartitionCount(n: number, k: number) {
  return binomialCoefficient(k + n - 1, n);
}
