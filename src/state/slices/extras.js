import { createSelector, createSlice, original } from '@reduxjs/toolkit';
import { allExtrasModifiersById } from '../../assets/modifierdata';
import { mapValues } from '../../utils/usefulFunctions';
import { changeAll, setBuildTemplate } from './controlsSlice';

export const extrasTypes = ['Sigil1', 'Sigil2', 'Runes', 'Nourishment', 'Enhancement'];

export const extrasSlice = createSlice({
  name: 'extras',
  initialState: {
    Sigil1: {},
    Sigil2: {},
    Runes: {},
    Nourishment: {},
    Enhancement: {},
  },
  reducers: {
    changeExtraIds: (state, action) => {
      const { type, ids } = action.payload;
      const previousState = original(state[type]);
      state[type] = Object.fromEntries(ids.map((key) => [key, previousState[key] || {}]));
    },
    changeExtraAmount: (state, action) => {
      const { type, id, amount } = action.payload;
      state[type][id].amount = amount;
    },
    changeExtras: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
  extraReducers: {
    [changeAll]: (state, action) => {
      // best effort conversion of old data from before multiple selection
      const input = action.payload?.form?.extras;
      const convertedInput = mapValues(input, (data) => {
        if (data === '') {
          return {};
        }
        if (typeof data === 'string') {
          return { [data]: {} };
        }
        if (Array.isArray(data)) {
          return Object.fromEntries(data.map((key) => [key, {}]));
        }
        return data;
      });

      return { ...state, ...convertedInput };
    },
    [setBuildTemplate]: (state, action) => {
      const { extrasPreset = {} } = action.payload;
      return { ...state, ...extrasPreset };
    },
  },
});

export const getExtrasData = (state) => state.optimizer.form.extras;
export const getExtrasIds = createSelector(getExtrasData, (data) => mapValues(data, Object.keys));

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

export const getExtrasCombinationsAndModifiers = createSelector(
  getExtrasIds,
  getExtrasData,
  (ids, data) => {
    const allExtrasCombinations = findCombinations(ids);
    const extrasCombinations = allExtrasCombinations.filter(({ Sigil1, Sigil2 }) => {
      // remove duplicate sigils
      if (Sigil1 === Sigil2) return false;

      if (ids.Sigil1.includes(Sigil2) && ids.Sigil2.includes(Sigil1)) {
        // potential duplicate; deduplicate in arbitrary order
        if (Sigil1 > Sigil2) return false;
      }
      return true;
    });

    console.log('extrasCombinations', extrasCombinations);

    const getModifiers = (extrasCombination) =>
      Object.entries(extrasCombination)
        .filter(([_, id]) => id)
        .map(([type, id]) => {
          if (!allExtrasModifiersById[id]) throw new Error(`missing data for extras id: ${id}`);
          const itemData = allExtrasModifiersById[id];

          return { id, ...itemData, amount: data[type][id]?.amount };
        });

    return extrasCombinations.map((extrasCombination) => ({
      extrasCombination,
      extrasModifiers: getModifiers(extrasCombination),
    }));
  },
);

export const { changeExtraIds, changeExtraAmount, changeExtras } = extrasSlice.actions;
