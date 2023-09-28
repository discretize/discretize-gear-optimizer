import { createSlice, original } from '@reduxjs/toolkit';
import { allExtrasModifiersById } from '../../assets/modifierdata';
import { mapValues } from '../../utils/usefulFunctions';
import { changeAll, setBuildTemplate } from './controlsSlice';

export const extrasTypes = ['Sigil1', 'Sigil2', 'Runes', 'Relics', 'Nourishment', 'Enhancement'];

export const lifestealData = {
  id: 'food-lifesteal-effect',
  amountData: {
    label: '/10s',
    default: 4.3,
    quantityEntered: 10,
  },
  modifiers: {
    attributes: {
      'Siphon Base Coefficient': 325,
    },
  },
};

export const extrasSlice = createSlice({
  name: 'extras',

  initialState: {
    extras: {
      Sigil1: {},
      Sigil2: {},
      Runes: {},
      Relics: {},
      Nourishment: {},
      Enhancement: {},
    },
    lifestealAmount: '',
  },

  reducers: {
    changeExtraIds: (state, action) => {
      const { type, ids } = action.payload;
      const previousState = original(state.extras[type]);
      state.extras[type] = Object.fromEntries(ids.map((key) => [key, previousState[key] || {}]));
    },
    changeExtraAmount: (state, action) => {
      const { type, id, amount } = action.payload;
      state.extras[type][id].amount = amount;
    },
    changeExtras: (state, action) => {
      return { ...state, ...action.payload };
    },
    changeLifestealAmount: (state, action) => {
      state.lifestealAmount = action.payload;
    },
    copySigils: (state) => {
      const previousSigil1 = original(state.extras.Sigil1);
      const previousSigil2 = original(state.extras.Sigil2);
      const merged = { ...previousSigil1, ...previousSigil2 };

      state.extras.Sigil1 = merged;
      state.extras.Sigil2 = merged;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(changeAll, (state, action) => {
      // best effort conversion of old data from before multiple selection
      if (action.payload?.form?.extras?.Runes) {
        const convertedExtras = mapValues(action.payload.form.extras, (data) => {
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

        return { ...state, extras: convertedExtras };
      }

      return { ...state, ...action.payload?.form?.extras };
    });

    builder.addCase(setBuildTemplate, (state, action) => {
      const { extrasPreset = {} } = action.payload;
      return { ...state, ...extrasPreset };
    });
  },
});

export const getExtrasData = (state) => state.optimizer.form.extras.extras;
export const getExtrasIds = (state) => mapValues(getExtrasData(state), Object.keys);

export const getLifestealAmount = (state) => state.optimizer.form.extras.lifestealAmount;

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
 * @param {{[key: string]: string[]}} data - dictionary of arrays of valid values for each key
 * @returns {{[key: string]: string[]}} - array of every possible dictionary where one value is chosen for each key
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

export const allowedDuplicateSigils = [
  'impact/night/slaying-both',
  'impact/night/slaying-only-3',
  'no-item-sigil',
  'ruby-orb',
  'platinum-doubloon',
];

export const getExtrasCombinationsAndModifiers = (state) => {
  const ids = getExtrasIds(state);
  const data = getExtrasData(state);
  const lifestealAmount = getLifestealAmount(state);

  const allExtrasCombinations = findCombinations(ids);
  const extrasCombinations = allExtrasCombinations.filter(({ Sigil1, Sigil2 }) => {
    // remove duplicate sigils
    if (Sigil1 && Sigil2 && Sigil1 === Sigil2 && !allowedDuplicateSigils.includes(Sigil1))
      return false;

    if (ids.Sigil1.includes(Sigil2) && ids.Sigil2.includes(Sigil1)) {
      // potential duplicate; deduplicate in arbitrary order
      if (Sigil1 > Sigil2) return false;
    }
    return true;
  });

  console.log('extrasCombinations', extrasCombinations);

  const getModifiers = (extrasCombination) => {
    const allModifiers = Object.entries(extrasCombination)
      .filter(([_, id]) => id)
      .map(([type, id]) => {
        if (!allExtrasModifiersById[id]) throw new Error(`missing data for extras id: ${id}`);
        const itemData = allExtrasModifiersById[id];

        return { id, ...itemData, amount: data[type][id]?.amount };
      });
    if (allExtrasModifiersById?.[extrasCombination?.Nourishment]?.hasLifesteal) {
      allModifiers.push({ ...lifestealData, amount: lifestealAmount });
    }
    return allModifiers;
  };

  return extrasCombinations.map((extrasCombination) => ({
    extrasCombination,
    extrasModifiers: getModifiers(extrasCombination),
  }));
};

export const {
  changeExtraIds,
  changeExtraAmount,
  changeExtras,
  changeLifestealAmount,
  copySigils,
} = extrasSlice.actions;
