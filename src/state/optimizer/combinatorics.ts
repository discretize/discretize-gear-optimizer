import * as $C from 'js-combinatorics';

/* eslint-disable id-length */

const range = (end: number): number[] =>
  Array(end)
    .fill(0)
    .map((_, i) => i);

const combToPartitions = (combination: number[], n: number, k: number) =>
  range(k).map((i) => (combination[i] ?? n + k - 1) - (combination[i - 1] ?? -1) - 1);

const Partitions = function* (total: number, groups: number, samples: number) {
  const n = total;
  const k = groups;
  const combGenerator = new $C.Combination(range(total + groups - 1), groups - 1);

  console.log(combGenerator.length);

  if (samples >= combGenerator.length) {
    // give them all
    for (const res of combGenerator) {
      yield combToPartitions(res, n, k);
    }
  } else {
    for (let i = 0; i < samples; i++) {
      yield combToPartitions(combGenerator.sample()!, n, k);
    }
  }
};

console.time('partition');

const p = Partitions(28, 6, 100_000);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
for (const par of p) {
  // console.log(par);
}

console.timeEnd('partition');

/*
const range = (end: number): number[] =>
  Array(end)
    .fill(0)
    .map((_, i) => i);

class Partitions {
  n: number;
  k: number;
  combGenerator: $C.Combination<number>;

  constructor(total: number, groups: number) {
    this.n = total;
    this.k = groups;
    this.combGenerator = new $C.Combination(range(total + groups - 1), groups - 1);
  }

  #combToPartitions(combination: number[]) {
    const { n, k } = this;
    return range(k).map((i) => (combination[i] ?? n + k - 1) - (combination[i - 1] ?? -1) - 1);
  }

  total() {
    return $C.combination(this.n + this.k - 1, this.k - 1);
  }

  all() {
    return [...this.combGenerator].map(this.#combToPartitions, this);
  }

  sample(count: number) {
    if (this.total() <= count) {
      return this.all();
    }
    return Array(count)
      .fill(undefined as unknown as any[])
      .map(() => this.#combToPartitions(this.combGenerator.sample()!));
  }
}

console.time();

const p = new Partitions(28, 8);
console.log(p.total());
// console.log(p.all());
console.log(p.sample(1_000_000));

console.timeEnd();
*/

/*
const range = (end: number): number[] =>
  Array(end)
    .fill(0)
    .map((_, i) => i);

const generatePartitions = (total: number, groups: number) => {
  const gen = new Combination(range(total + groups - 1), groups - 1);
  const transform = (combination: number[]) =>
    range(groups).map(
      (i) => (combination[i] ?? total + groups - 1) - (combination[i - 1] ?? -1) - 1,
    );

  console.log([...gen].map(transform));

  for (let i = 0; i < 10; i++) {
    console.log(transform(gen.sample()!));
  }
};

generatePartitions(100, 4);
*/
