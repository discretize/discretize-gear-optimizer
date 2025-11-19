import type { Scenario, ScenarioTemplate } from '../types/optimizerTypes';

/**
 * Scales a modifier value linearly up or down by a user-specified amount, in accordance with the
 * amountData from the modifier data YAML.
 *
 * If amountInput is null (the user did not type into the amount box), the amountData.default value
 * is used (this should be the placeholder in the text box).
 *
 * If there is no amountData, the value is retutned unmodified.
 *
 * @example
 * // returns 10
 * scaleValue(10, 100, { quantityEntered: 100, ... })        // amountInput equals quantityEntered
 *
 * @example
 * // returns 8
 * scaleValue(10, 80, { quantityEntered: 100, ... })         // amountInput < quantityEntered
 *
 * @example
 * // returns 20
 * scaleValue(10, 2, { quantityEntered: 1, ... })            // amountInput > quantityEntered
 *
 * @example
 * // returns 50
 * scaleValue(10, null, { quantityEntered: 1, default: 5 })  // no amountInput
 *
 * @example
 * // returns 10
 * scaleValue(10, null, undefined)                           // does nothing
 *
 * @param {number} value - modifier value to scale
 * @param {?number} amountInput - user-input amount (e.g. number of stacks selected)
 * @param {?object} amountData
 * @param {number} amountData.quantityEntered -
 * @param {number} amountData.default
 * @returns {number} result
 */
export function scaleValue(
  value: number,
  amountInput?: number | null,
  amountData?: { default: number; quantityEntered: number },
): number {
  return amountData
    ? (value * (amountInput ?? amountData.default)) / amountData.quantityEntered
    : value;
}

/**
 * Rounds, tie-breaking exact halves to the nearest even integer. Apparently used by GW2
 * conversions according to ingame testing by Cat.
 * https://discord.com/channels/301270513093967872/842629146857177098/864564894128275468
 *
 * @param {number} number
 * @returns {number} result - the input number rounded to the nearest integer
 */
export const roundEven = (number: number): number => {
  if (number % 1 === 0.5) {
    const floor = Math.floor(number);
    if (floor % 2 === 0) {
      return floor;
    }

    return floor + 1;
  }

  return Math.round(number);
};

export const clamp = (input: number, min: number, max: number): number => {
  if (input < min) return min;
  if (input > max) return max;
  return input;
};

export const cloneScenarioTemplate = (scenarioTemplate: ScenarioTemplate) => ({
  fraction: scenarioTemplate.fraction,
  baseAttributes: { ...scenarioTemplate.baseAttributes },
  appliedModifiers: [...scenarioTemplate.appliedModifiers],
});

export const cloneScenario = (scenario: Scenario) => ({
  fraction: scenario.fraction,
  baseAttributes: { ...scenario.baseAttributes },
  modifiers: scenario.modifiers, // passed by reference; we (hopefully) don't modify these
});
