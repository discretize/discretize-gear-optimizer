import { MAX_INFUSIONS } from './gw2-data';

export type ValueOf<T> = T[keyof T];

export function firstUppercase(text: string | undefined | null): string {
  if (typeof text === 'undefined' || text === null || text === '') return '';

  const toUpper = (str: string) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  return text.split(' ').map(toUpper).join(' ').trim();
}

/*
 * Parses a string to a number, treating non-parsable strings like empty inputs but indicating an
 * error so text boxes can display the error validation state
 */
export function parseNumber<Default>(
  input: number | string | null | undefined,
  defaultValue: Default,
  integerMode: boolean, // if true, parse as integer instead of float
): { value: number | Default; error: boolean } {
  if (input === '' || input === null || input === undefined) {
    return { value: defaultValue, error: false };
  }
  const text = String(input).replace('%', '');

  const value = integerMode ? parseInt(text, 10) : parseFloat(text);

  // this covers quirks like parseFloat('1hello') being 1
  const isPlainNumber = value === Number(text);

  if (!isPlainNumber || value < 0) {
    return { value: defaultValue, error: true };
  }
  return { value, error: false };
}

export type ParseFunction<Default> = (text: number | string | null | undefined) => {
  value: number | Default;
  error: boolean;
};

export const parseAmount: ParseFunction<null> = (text) => parseNumber(text, null, false);
export const parseAr: ParseFunction<number> = (text) => parseNumber(text, 0, true);
export const parseInfusionCount: ParseFunction<number> = (text) => parseNumber(text, 0, true);
export const parseSpecificInfusionCount: ParseFunction<number> = (text) =>
  parseNumber(text, MAX_INFUSIONS, true);
export const parseDistribution: ParseFunction<number> = (text) => parseNumber(text, 0, false);
export const parsePriority: ParseFunction<undefined> = (text) =>
  parseNumber(text, undefined, false);
export const parseBoss: ParseFunction<undefined> = (text) => parseNumber(text, undefined, false);

export const objectEntries = Object.entries as <Type extends object>(
  value: Type,
) => [keyof Type, NonNullable<Type[keyof Type]>][];

export const objectKeys = Object.keys as <Type extends object>(value: Type) => (keyof Type)[];

/*
 * Like Array.prototype.map(), but for key-value objects.
 * Creates a new key-value object containing the key-value pairs of the input object, except the
 * values are transformed by the input function.
 */
export function mapValues<Key extends string, In, Out>(
  obj: Record<Key, In>,
  callbackFn: (v: In) => Out,
) {
  return Object.fromEntries(
    objectEntries(obj).map(([key, value]) => [key, callbackFn(value)]),
  ) as Record<Key, Out>;
}

/*
 * Like Array.prototype.map(), but for key-value objects.
 * Creates a new key-value object containing the key-value pairs of the input object, except the
 * keys and values are transformed by the input function.
 */
export function mapEntries<In, Out>(
  obj: Record<string, In>,
  callbackFn: (v: [string, In]) => [string, Out],
): Record<string, Out> {
  return Object.fromEntries(Object.entries(obj).map(callbackFn));
}

export function chunkArray(arr: unknown[], size = 0) {
  if (size < 1) throw new Error('Invalid chunk size');
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

/*
 * For enum-like arrays, array.include() is too strict on the types.
 * Example:
 * const arr = ['A', 'B'] as const;
 * arr.includes('C') <- does not typecheck
 *
 * This helper function sidesteps the issue by (safely) downcasting the array to readonly string[] first.
 * enumArrayIncludes('C') <- will now typecheck
 * enumArrayIncludes(42) <- still fails
 *
 * As a bonus, the return value is marked as a type guard, and the type of the value will be narrowed to 'A' | 'B'.
 *
 * Warning: don't call this on anything that's not a strictly typed const array!
 * When passing a string[] as the first parameter, the typeguard may claim that your string is not a string.
 */
export function enumArrayIncludes<T extends readonly string[]>(
  arr: T,
  value: string,
): value is T[number] {
  return arr.includes(value);
}

export const pick = (object: Record<string, unknown>, keysToPick: string[]) =>
  Object.fromEntries(keysToPick.filter((key) => key in object).map((key) => [key, object[key]]));

export type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] };

// useful for improving intellisense during development
// https://stackoverflow.com/a/57683652
export type ExpandRecursively<T> = T extends object
  ? T extends infer O
    ? { [K in keyof O]: ExpandRecursively<O[K]> }
    : never
  : T;
