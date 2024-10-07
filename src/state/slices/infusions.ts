import type { PayloadAction } from '@reduxjs/toolkit';
import { createSelector, createSlice } from '@reduxjs/toolkit';
import type { InfusionName } from '../../utils/gw2-data';
import { agonyInfusionIds, omnipotionModifiers } from '../../utils/gw2-data';
import { parseAmount, parseAr, parseInfusionCount } from '../../utils/usefulFunctions';
import type { AppliedModifier } from '../optimizer/optimizerSetup';
import type { RootState } from '../store';
import { changeAll } from './controlsSlice';
import { changeGameMode, loadedSettings } from './userSettings';

const isFractal = loadedSettings.gameMode === 'fractals';

const initialState: {
  omnipotion: boolean;
  ar: string;
  maxInfusions: string;
  primaryInfusion: InfusionName | '';
  secondaryInfusion: InfusionName | '';
  primaryMaxInfusions: string;
  secondaryMaxInfusions: string;
  helperData: {
    enabled: boolean;
    slots: number;
    impedence: number;
    attunement: number;
    singularity: boolean;
    tear: boolean;
    freeWvW: boolean;
    ownedMatrix: number;
  };
} = {
  omnipotion: isFractal,
  ar: isFractal ? '162' : '',
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
    ownedMatrix: 0,
  },
};

export const infusionsSlice = createSlice({
  name: 'infusions',
  initialState,
  reducers: {
    changeAR: (state, action: PayloadAction<string>) => {
      state.ar = action.payload;
    },
    changeOmnipotion: (state, action: PayloadAction<boolean>) => {
      state.omnipotion = action.payload;
    },
    changeMaxInfusions: (state, action: PayloadAction<string>) => {
      state.maxInfusions = action.payload;
    },
    changeInfusion: (
      state,
      action: PayloadAction<{ key: 'primaryInfusion' | 'secondaryInfusion'; value: InfusionName }>,
    ) => {
      state[action.payload.key] = action.payload.value;
    },
    changeInfusionMax: (
      state,
      action: PayloadAction<{
        key: 'maxInfusions' | 'primaryMaxInfusions' | 'secondaryMaxInfusions';
        value: string;
      }>,
    ) => {
      state[action.payload.key] = action.payload.value;
    },
    changeInfusions: (state, action) => {
      return { ...state, ...action.payload };
    },
    changeHelperEnabled: (state, action: PayloadAction<boolean>) => {
      state.helperData.enabled = action.payload;
    },
    changeSlots: (state, action: PayloadAction<number>) => {
      state.helperData.slots = action.payload;
      if (Number(state.maxInfusions) > state.helperData.slots) {
        state.maxInfusions = String(action.payload);
      }
    },
    changeImpedence: (state, action: PayloadAction<number>) => {
      state.helperData.impedence = action.payload;
    },
    changeAttunement: (state, action: PayloadAction<number>) => {
      state.helperData.attunement = action.payload;
    },
    changeSingularity: (state, action: PayloadAction<boolean>) => {
      state.helperData.singularity = action.payload;
    },
    changeTear: (state, action: PayloadAction<boolean>) => {
      state.helperData.tear = action.payload;
    },
    changeFreeWvW: (state, action: PayloadAction<boolean>) => {
      state.helperData.freeWvW = action.payload;
    },
    changeOwnedMatrix: (state, action: PayloadAction<number>) => {
      state.helperData.ownedMatrix = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(changeAll, (state, action) => {
      if (action.payload?.form?.infusions) {
        return { ...state, ...action.payload.form.infusions };
      }
    });

    builder.addCase(changeGameMode, (state, action) => {
      if (action.payload === 'fractals') {
        return { ...state, omnipotion: true, ar: '162' };
      }
      return { ...state, omnipotion: false, ar: '0' };
    });
  },
});

export const getAR = (state: RootState) => state.optimizer.form.infusions.ar;
export const getOmniPotion = (state: RootState) => state.optimizer.form.infusions.omnipotion;
export const getMaxInfusions = (state: RootState) => state.optimizer.form.infusions.maxInfusions;
export const getPrimaryInfusion = (state: RootState) =>
  state.optimizer.form.infusions.primaryInfusion;
export const getSecondaryInfusion = (state: RootState) =>
  state.optimizer.form.infusions.secondaryInfusion;
export const getPrimaryMaxInfusions = (state: RootState) =>
  state.optimizer.form.infusions.primaryMaxInfusions;
export const getSecondaryMaxInfusions = (state: RootState) =>
  state.optimizer.form.infusions.secondaryMaxInfusions;
export const getHelperData = (state: RootState) => state.optimizer.form.infusions.helperData;

export const getInfusionsModifiers = (state: RootState): AppliedModifier[] => {
  const { infusions } = state.optimizer.form;

  const result = [];

  if (infusions.ar) {
    const { value } = parseAmount(infusions.ar);
    result.push({
      id: 'agony-resistance',
      modifiers: {
        attributes: {
          'Agony Resistance': [value || 0, 'converted'] as [number, 'converted'],
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

const calcAgonyInfusions = (slots: number, ar: number) => {
  if (slots === 0) return { agonyCost: 0, agonyText: '', agonyArray: [] };
  // eslint-disable-next-line no-param-reassign
  if (ar < 0) ar = 0;

  const lowerType = Math.floor(ar / slots);
  const higherType = lowerType + 1;
  const higherCount = ar % slots;
  const lowerCount = slots - higherCount;

  const getInfusionCost = (type: number) => {
    const costCopper = agonyInfusionIds[`+${lowerType} Agony Infusion`]?.cost;

    return costCopper
      ? costCopper / 10000
      : // AR infusion cost is about 1g for +7; doubles with each additional
        2 ** (type - 7);
  };

  const lowerCost = lowerType ? getInfusionCost(lowerType) : 0;
  const higherCost = getInfusionCost(higherType);
  const agonyCost = lowerCount * lowerCost + higherCount * higherCost;

  const agonyArray = [
    ...Array(lowerCount).fill(lowerType ? `+${lowerType} Agony Infusion` : '(empty slot)'),
    ...Array(higherCount).fill(`+${higherType} Agony Infusion`),
  ];

  const agonyText = [];
  if (lowerCount)
    agonyText.push(`${lowerCount}x ${lowerType ? `+${lowerType} Agony` : 'Empty Slot'}`);
  if (higherCount) agonyText.push(`${higherCount}x +${higherType} Agony`);

  return { agonyCost, agonyText, agonyArray };
};

export const getHelperResult = createSelector(
  getAR,
  getMaxInfusions,
  getPrimaryInfusion,
  getSecondaryInfusion,
  getPrimaryMaxInfusions,
  getSecondaryMaxInfusions,
  getHelperData,
  (
    arString,
    maxInfusionsString,
    primaryInfusion,
    secondaryInfusion,
    primaryMaxInfusionsString,
    secondaryMaxInfusionsString,
    helperData,
  ) => {
    const ar = parseAr(arString).value;
    const maxInfusions = parseInfusionCount(maxInfusionsString).value;
    const primaryMaxInfusions = parseInfusionCount(primaryMaxInfusionsString).value;
    const secondaryMaxInfusions = parseInfusionCount(secondaryMaxInfusionsString).value;

    const { impedence, attunement, singularity, tear, slots, freeWvW, ownedMatrix } = helperData;

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

    // if (ARFromGear > 30 * agonySlots + 9 * statSlots) {
    //   return { error: 'Target AR is too high!' };
    // }

    let nine = statSlots;
    let seven = 0;
    let five = 0;
    let zero = 0;

    const infusionCost = (num: number) => 2 ** (num - 7);
    const fiveCost = 3 * infusionCost(5);
    const fiveMatrix = 5;
    const sevenCost = 3 * infusionCost(7);
    const sevenMatrix = 10;
    const nineCost = 3 * infusionCost(9);
    const nineMatrix = 20;

    const createResult = () => {
      const statsAR = five * 5 + seven * 7 + nine * 9;
      if (!agonySlots && statsAR < ARFromGear) return null;

      const statsCostInfusions = five * fiveCost + seven * sevenCost + nine * nineCost;
      const requiredMatrix = five * fiveMatrix + seven * sevenMatrix + nine * nineMatrix;
      const statsCostMatrix = Math.max(requiredMatrix - ownedMatrix, 0) * 3;

      const agony = calcAgonyInfusions(agonySlots, ARFromGear - statsAR);
      const { agonyCost } = agony;
      const cost = statsCostInfusions + statsCostMatrix + agonyCost;
      const costWithoutMatrix = statsCostInfusions + agonyCost;

      return { cost, zero, five, seven, nine, agony, costWithoutMatrix, requiredMatrix };
    };

    let bestResult = createResult();
    let bestResultWithoutMatrix = bestResult;

    const test = () => {
      const testResult = createResult();
      if (!testResult) return;
      if (!bestResult || testResult.cost <= bestResult.cost) {
        bestResult = testResult;
      }
      if (
        !bestResultWithoutMatrix ||
        testResult.costWithoutMatrix <= bestResultWithoutMatrix.costWithoutMatrix
      ) {
        bestResultWithoutMatrix = testResult;
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

    if (!bestResult || !bestResultWithoutMatrix) {
      return { error: 'Target AR is too high!' };
    }

    const statText = [];

    if (bestResult.zero) statText.push(`${bestResult.zero}x WvW Stat`);
    if (bestResult.five) statText.push(`${bestResult.five}x +5 Stat`);
    if (bestResult.seven) statText.push(`${bestResult.seven}x +7 Stat`);
    if (bestResult.nine) statText.push(`${bestResult.nine}x +9 Stat`);

    const resultText = `\n${[...statText, ...bestResult.agony.agonyText].join(', ')}`;

    const resultArray = [
      ...Array(bestResult.zero).fill(`WvW Stat Infusion`),
      ...Array(bestResult.five).fill(`+5 Stat Infusion`),
      ...Array(bestResult.seven).fill(`+7 Stat Infusion`),
      ...Array(bestResult.nine).fill(`+9 Stat Infusion`),
      ...bestResult.agony.agonyArray,
    ];

    const { cost } = bestResult;

    const maxRequiredMatrix = bestResultWithoutMatrix.requiredMatrix;

    return { resultText, resultArray, cost, maxRequiredMatrix };
  },
);

export const {
  changeAR,
  changeOmnipotion,
  changeMaxInfusions,
  changeInfusion,
  changeInfusionMax,
  changeInfusions,
  changeHelperEnabled,
  changeSlots,
  changeImpedence,
  changeAttunement,
  changeSingularity,
  changeTear,
  changeFreeWvW,
  changeOwnedMatrix,
} = infusionsSlice.actions;
