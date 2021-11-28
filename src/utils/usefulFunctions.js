/* eslint-disable import/prefer-default-export */

export function firstUppercase(text) {
  if (typeof text === 'undefined' || text === null || text === '') return '';
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

/**
 * Parses a string to a number, treating non-parsable strings like empty inputs but indicating an
 * error so text boxes can display the error validaton state
 *
 * @param {*} text - the string to be parsed
 * @returns {{ value: ?number, error: boolean}} result
 *   result.value - the resulting number, or null
 *   result.error - whether the input was invalid
 */
 export function parseAmount(text) {
  if (text === '' || text === null || text === undefined) {
    return { value: null, error: false };
  }
  const value = Number(text);
  if (Number.isNaN(value) || value < 0) {
    return { value: null, error: true };
  }
  return { value, error: false };
}
