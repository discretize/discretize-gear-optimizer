import { Classes, Defense } from './gw2-data';

function firstUppercase(text) {
  if (typeof text === 'undefined' || text === null || text === '') return '';

  const toUpper = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  return text.split(' ').map(toUpper).join(' ').trim();
}

/**
 * Parses a string to a number, treating non-parsable strings like empty inputs but indicating an
 * error so text boxes can display the error validation state
 *
 * @param {*} text - the string to be parsed
 * @param {object} settings
 * @param {?number} settings.defaultValue - the value to return if the string is empty or unparsable
 * @param {boolean} settings.integerMode - toggles parsing as integerMode instead of float
 * @returns {{ value: ?number, error: boolean}} result
 *   result.value - the resulting number, or null
 *   result.error - whether the input was invalid
 */
const parseNumber = (text, { defaultValue, integerMode }) => {
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
};

export const parseAmount = (text) => parseNumber(text, { defaultValue: null, integerMode: false });
export const parseAr = (text) => parseNumber(text, { defaultValue: 0, integerMode: true });
export const parseInfusionCount = (text) =>
  parseNumber(text, { defaultValue: 18, integerMode: true });
export const parseDistribution = (text) =>
  parseNumber(text, { defaultValue: 0, integerMode: false });
export const parsePriority = (text) =>
  parseNumber(text, { defaultValue: null, integerMode: false });
export const parseBoss = (text) => parseNumber(text, { defaultValue: null, integerMode: false });

export const getWeight = (profession) => {
  // Calculate weight class
  const { defense } = Classes[firstUppercase(profession)];
  let weight = 'Light';
  if (defense === Defense.HEAVY) {
    weight = 'Heavy';
  } else if (defense === Defense.MEDIUM) {
    weight = 'medium';
  }
  return weight;
};

/**
 * Like Array.prototype.map(), but for key-value objects.
 * Creates a new key-value object containing the key-value pairs of the input object, except the
 * values are transformed by the input function.
 *
 * @param {object} obj - initial object
 * @param {Function} callbackFn - function to transform the values
 * @returns {object} - transformed object
 */
export const mapValues = (obj, callbackFn) =>
  Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, callbackFn(value)]));

/**
 * Like Array.prototype.map(), but for key-value objects.
 * Creates a new key-value object containing the key-value pairs of the input object, except the
 * keys and values are transformed by the input function.
 *
 * @param {object} obj - initial object
 * @param {Function} callbackFn - function to transform the key-value pairs
 * @returns {object} - transformed object
 */
export const mapEntries = (obj, callbackFn) =>
  Object.fromEntries(Object.entries(obj).map(callbackFn));
