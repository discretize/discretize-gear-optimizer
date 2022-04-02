import { Classes, Defense } from './gw2-data';
import type { ProfessionName } from './gw2-data';

function firstUppercase(text: string | undefined | null): string {
  if (typeof text === 'undefined' || text === null || text === '') return '';

  const toUpper = (str: string) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  return text.split(' ').map(toUpper).join(' ').trim();
}

/*
 * Parses a string to a number, treating non-parsable strings like empty inputs but indicating an
 * error so text boxes can display the error validation state
 */
function parseNumber<Default>(
  text: string | null | undefined,
  defaultValue: Default,
  integerMode: boolean, // if true, parse as integer instead of float
): { value: number | Default; error: boolean } {
  if (text === '' || text === null || text === undefined) {
    return { value: defaultValue, error: false };
  }
  const value = integerMode ? parseInt(text, 10) : parseFloat(text);

  // this covers quirks like parseFloat('1hello') being 1
  const isPlainNumber = value === Number(text);

  if (!isPlainNumber || value < 0) {
    return { value: defaultValue, error: true };
  }
  return { value, error: false };
}

export const parseAmount = (text: string) => parseNumber(text, null, false);
export const parseAr = (text: string) => parseNumber(text, 0, true);
export const parseInfusionCount = (text: string) => parseNumber(text, 18, true);
export const parseDistribution = (text: string) => parseNumber(text, 0, false);
export const parsePriority = (text: string) => parseNumber(text, null, false);
export const parseBoss = (text: string) => parseNumber(text, null, false);

export const getWeight = (profession: ProfessionName) => {
  // Calculate weight class
  const { defense } = Classes[firstUppercase(profession) as ProfessionName];
  if (defense === Defense.HEAVY) {
    return 'Heavy';
  }
  if (defense === Defense.MEDIUM) {
    return 'Medium';
  }
  return 'Light';
};

/*
 * Like Array.prototype.map(), but for key-value objects.
 * Creates a new key-value object containing the key-value pairs of the input object, except the
 * values are transformed by the input function.
 */
export function mapValues<In, Out>(
  obj: Record<string, In>,
  callbackFn: (v: In) => Out,
): Record<string, Out> {
  return Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, callbackFn(value)]));
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
