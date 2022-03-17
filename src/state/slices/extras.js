import { createSelector, createSlice } from '@reduxjs/toolkit';
import { allExtrasModifiersById } from '../../assets/modifierdata';
import { mapValues } from '../../utils/usefulFunctions';
import { changeAll, setBuildTemplate } from './controlsSlice';

export const extrasTypes = ['Sigil1', 'Sigil2', 'Runes', 'Nourishment', 'Enhancement'];

export const extrasSlice = createSlice({
  name: 'extras',
  initialState: {
    extras: {
      Sigil1: '',
      Sigil2: '',
      Runes: [],
      Nourishment: [],
      Enhancement: [],
    },
    amounts: {},
  },
  reducers: {
    changeExtra: (state, action) => {
      state.extras[action.payload.key] = action.payload.value;
    },
    changeExtraAmount: (state, action) => {
      state.extras[action.payload.key] = action.payload.value;
    },
    changeExtras: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
  extraReducers: {
    [changeAll]: (state, action) => {
      // best effort conversion of old data from before multiple selection
      const input = action.payload?.form?.extras;
      if (!input.extras) {
        return {
          ...state,
          ...{
            extras: mapValues(input, (value) => (Array.isArray(value) ? value : [value])),
            amounts: {},
          },
        };
      }
      return { ...state, ...input };
    },
    [setBuildTemplate]: (state, action) => {
      const { extrasPreset = {} } = action.payload;
      return { ...state, ...extrasPreset };
    },
  },
});

export const getExtra = (key) => (state) => state.optimizer.form.extras.extras[key];
export const getExtras = (state) => state.optimizer.form.extras.extras;

// todo: document and clean this up and maybe move it elsewhere?
/**
 *
 * example input: { "color": ["red", "blue"], "shape": ["circle", "triangle"] }
 * example output: [
 *   { "color": "red", "shape": "circle" },
 *   { "color": "red", "shape": "triangle" },
 *   { "color": "blue", "shape": "circle" },
 *   { "color": "blue", "shape": "triangle" }
 * ]
 *
 * Note: Mathematically, this is neither a "combination" nor a "permutation."
 *
 * @param {object.<string, string[]>} data - dictionary of arrays of valid values for each key
 * @returns {object.<string, string>[]} - array of every possible dictionary where one value is chosen for each key
 */
const findCombinations = (data) => {
  // convert an empty array to a single array of null; no selection is still one possibility!
  const entries = Object.entries(data).map(([key, value]) => {
    const fixedValue = Array.isArray(value) && value.length > 0 ? value : [''];
    return [key, fixedValue];
  });

  const combinations = [];
  const recursivelyFindCombinations = (prev = {}, i = 0) => {
    const [type, options] = entries[i];
    if (entries[i + 1]) {
      for (const option of options) {
        recursivelyFindCombinations({ ...prev, [type]: option }, i + 1);
      }
    } else {
      for (const option of options) {
        combinations.push({ ...prev, [type]: option });
      }
    }
  };
  recursivelyFindCombinations();
  return combinations;
};

export const getExtrasCombinationsAndModifiers = createSelector(getExtras, (extras) => {
  const extrasCombinations = findCombinations(extras);

  const getModifiers = (extrasCombination) =>
    Object.entries(extrasCombination)
      .filter(([_, id]) => id)
      .map(([key, id]) => {
        if (!allExtrasModifiersById[id]) throw new Error(`missing data for extras id: ${id}`);
        const { modifiers } = allExtrasModifiersById[id];
        return { id, modifiers, source: key };
      });

  return extrasCombinations.map((extrasCombination) => ({
    extrasCombination,
    extrasModifiers: getModifiers(extrasCombination),
  }));
});

export const { changeExtra, changeExtras } = extrasSlice.actions;
