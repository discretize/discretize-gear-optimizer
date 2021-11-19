import { createSlice, createSelector } from '@reduxjs/toolkit';
import { omnipotionModifiers, infusionIds } from '../../utils/gw2-data';
import { parseAmount } from '../optimizer/optimizerCore';

export const infusionsSlice = createSlice({
  name: 'infusions',
  initialState: {
    omnipotion: true,
    ar: '162',
    maxInfusions: '18',
    primaryInfusion: '',
    secondaryInfusion: '',
    primaryMaxInfusions: '',
    secondaryMaxInfusions: '',
    helperData: {
      enabled: false,
      slots: 18,
      impedence: 0,
      attunement: 0,
      singularity: false,
      tear: false,
      freeWvW: true,
    },
  },
  reducers: {
    changeAR: (state, action) => {
      state.ar = action.payload;
    },
    changeOmnipotion: (state, action) => {
      state.omnipotion = action.payload;
    },
    changeMaxInfusions: (state, action) => {
      state.maxInfusions = action.payload;
    },
    changeInfusion: (state, action) => {
      state[action.payload.key] = action.payload.value;
    },
    changeInfusions: (state, action) => {
      return { ...state, ...action.payload };
    },
    changeHelperEnabled: (state, action) => {
      state.helperData.enabled = action.payload;
    },
    changeSlots: (state, action) => {
      state.helperData.slots = action.payload;
    },
    changeImpedence: (state, action) => {
      state.helperData.impedence = action.payload;
    },
    changeAttunement: (state, action) => {
      state.helperData.attunement = action.payload;
    },
    changeSingularity: (state, action) => {
      state.helperData.singularity = action.payload;
    },
    changeTear: (state, action) => {
      state.helperData.tear = action.payload;
    },
    changeFreeWvW: (state, action) => {
      state.helperData.freeWvW = action.payload;
    },
  },
});

// export const getMaxInfusions = (state) => state.optimizer.form.infusions.maxInfusions;
export const getInfusions = (state) => state.optimizer.form.infusions;
export const getAR = (state) => state.optimizer.form.infusions.ar;
export const getOmniPotion = (state) => state.optimizer.form.infusions.omnipotion;

export const getHelperData = (state) => state.optimizer.form.infusions.helperData;

export const getInfusionsModifiers = (state) => {
  const { infusions } = state.optimizer.form;
  const result = [];

  if (infusions.ar) {
    const { value } = parseAmount(infusions.ar);
    result.push({
      id: 'agony-resistance',
      modifiers: {
        attributes: {
          'Agony Resistance': [value || 0, 'converted'],
        },
      },
    });
  }
  if (infusions.omnipotion) {
    result.push({
      id: 'omnipotion',
      modifiers: omnipotionModifiers,
    });
  }

  return result;
};

const calcAgonyInfusions = (slots, ar) => {
  if (slots === 0) return { agonyCost: 0, agonyText: '', agonyArray: [] };
  // eslint-disable-next-line no-param-reassign
  if (ar < 0) ar = 0;

  const lowerType = Math.floor(ar / slots);
  const higherType = lowerType + 1;
  const higherCount = ar % slots;
  const lowerCount = slots - higherCount;

  // AR infusion cost is about 1g for +7; doubles with each additional
  const lowerCost = lowerType
    ? infusionIds[`+${lowerType} agony`]?.cost / 10000 || 2 ** (lowerType - 7)
    : 0;
  const higherCost = infusionIds[`+${higherType} agony`]?.cost / 10000 || 2 ** (higherType - 7);
  const agonyCost = lowerCount * lowerCost + higherCount * higherCost;

  const agonyArray = [
    ...Array(lowerCount).fill(lowerType ? `+${lowerType} agony` : 'empty'),
    ...Array(higherCount).fill(`+${higherType} agony`),
  ];

  const agonyText = [];
  if (lowerCount) agonyText.push(`${lowerCount}x +${lowerType} agony`);
  if (higherCount) agonyText.push(`${higherCount}x +${higherType} agony`);

  return { agonyCost, agonyText, agonyArray };
};

export const getHelperResult = createSelector(
  getAR,
  getInfusions,
  getHelperData,
  (arData, infusionsData, helperData) => {
    const ar = arData;
    const {
      maxInfusions,
      primaryInfusion,
      secondaryInfusion,
      primaryMaxInfusions,
      secondaryMaxInfusions,
    } = infusionsData;

    const { impedence, attunement, singularity, tear, slots, freeWvW } = helperData;

    let ARFromGear = ar - impedence - attunement - (singularity ? 5 : 0) - (tear ? 15 : 0);

    if (ARFromGear < 0) {
      ARFromGear = 0;
    }

    const statSlots = Math.min(
      (primaryInfusion ? primaryMaxInfusions || 18 : 0) +
        (secondaryInfusion ? secondaryMaxInfusions || 18 : 0),
      maxInfusions,
    );

    const agonySlots = slots - statSlots;

    if (agonySlots < 0) {
      return { error: 'More stat infusions selected than slots!' };
    }

    if (ARFromGear > 30 * agonySlots + 9 * statSlots) {
      return { error: 'Target AR is too high!' };
    }

    let nine = statSlots;
    let seven = 0;
    let five = 0;
    let zero = 0;

    const createResult = () => {
      const statsAR = five * 5 + seven * 7 + nine * 9;
      if (!agonySlots && statsAR < ARFromGear) return null;

      const statsCost = five * 15 + seven * 32 + nine * 70;

      const agony = calcAgonyInfusions(agonySlots, ARFromGear - statsAR);
      const { agonyCost } = agony;
      const cost = statsCost + agonyCost;

      return { cost, zero, five, seven, nine, agony };
    };

    let bestResult = createResult();

    const test = () => {
      const testResult = createResult();
      if (!testResult) return;
      if (!bestResult || testResult.cost <= bestResult.cost) {
        bestResult = testResult;
      }
    };

    while (nine > 0) {
      nine--;
      seven++;
      test();
    }

    while (seven > 0) {
      seven--;
      five++;
      test();
    }

    if (freeWvW) {
      while (five > 0) {
        five--;
        zero++;
        test();
      }
    }

    if (!bestResult) {
      return { error: 'Target AR is too high!' };
    }

    const statText = [];

    if (bestResult.zero) statText.push(`${bestResult.zero}x WvW stat`);
    if (bestResult.five) statText.push(`${bestResult.five}x +5 stat`);
    if (bestResult.seven) statText.push(`${bestResult.seven}x +7 stat`);
    if (bestResult.nine) statText.push(`${bestResult.nine}x +9 stat`);

    const resultText = `\n${[...statText, ...bestResult.agony.agonyText].join(', ')}`;

    const resultArray = [
      ...Array(bestResult.zero).fill(`WvW stat`),
      ...Array(bestResult.five).fill(`+5 stat`),
      ...Array(bestResult.seven).fill(`+7 stat`),
      ...Array(bestResult.nine).fill(`+9 stat`),
      ...bestResult.agony.agonyArray,
    ];

    const { cost } = bestResult;

    return { resultText, resultArray, cost };
  },
);

export const {
  changeAR,
  changeOmnipotion,
  changeMaxInfusions,
  changeInfusion,
  changeInfusions,
  changeHelperEnabled,
  changeSlots,
  changeImpedence,
  changeAttunement,
  changeSingularity,
  changeTear,
  changeFreeWvW,
} = infusionsSlice.actions;
