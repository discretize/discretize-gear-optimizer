import type { PayloadAction } from '@reduxjs/toolkit';
import { createSelector, createSlice } from '@reduxjs/toolkit';
import type { InfusionName } from '../../utils/gw2-data';
import {
  agonyInfusionIds,
  MAX_INFUSIONS,
  mistAttunementData,
  omnipotionModifiers,
} from '../../utils/gw2-data';
import {
  parseAmount,
  parseAr,
  parseInfusionCount,
  parseSpecificInfusionCount,
} from '../../utils/usefulFunctions';
import type { AppliedModifier } from '../optimizer/types/optimizerSetupTypes';
import type { RootState } from '../store';
import { changeAll, setBuildTemplate } from './controlsSlice';
import { loadedLocalUserSettings } from './localUserSettings';
import { changeGameMode, loadedSettings } from './userSettings';

const isFractal = loadedSettings.gameMode === 'fractals';

export type InfusionOptions = { type: InfusionName | ''; count: string }[];
export type ValidInfusionOptions = { type: InfusionName; count: string }[];

const initialState: {
  omnipotion: boolean;
  mistAttunement: number;
  ar: string;
  maxInfusions: string;
  infusionOptions: InfusionOptions;
  helperData: {
    enabled: boolean;
    slots: number;
    impedence: number;
    singularity: boolean;
    tear: boolean;
    freeWvW: boolean;
    ownedMatrix: number;
  };
} = {
  omnipotion: isFractal,
  mistAttunement: 0,
  ar: isFractal ? '162' : '',
  maxInfusions: loadedLocalUserSettings.defaultStatInfusions,
  infusionOptions: [
    { type: '', count: '' },
    { type: '', count: '' },
    { type: '', count: '' },
  ],
  helperData: {
    enabled: false,
    slots: MAX_INFUSIONS,
    impedence: 0,
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
    changeMistAttunement: (state, action: PayloadAction<number>) => {
      state.mistAttunement = action.payload;
    },
    changeMaxInfusions: (state, action: PayloadAction<string>) => {
      state.maxInfusions = action.payload;
    },
    changeInfusionOptionType: (
      state,
      action: PayloadAction<{ index: number; type: InfusionName | '' }>,
    ) => {
      if (state.infusionOptions[action.payload.index]) {
        state.infusionOptions[action.payload.index].type = action.payload.type;
      }
    },
    changeInfusionOptionCount: (state, action: PayloadAction<{ index: number; count: string }>) => {
      if (state.infusionOptions[action.payload.index]) {
        state.infusionOptions[action.payload.index].count = action.payload.count;
      }
    },
    changeInfusionOptions: (state, action: PayloadAction<InfusionOptions>) => {
      state.infusionOptions = state.infusionOptions.map(
        (_, i) => action.payload[i] ?? { type: '', count: '' },
      );
    },
    addInfusionOption: (state) => {
      state.infusionOptions.push({ type: '', count: '' });
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
        // best effort conversion of old data
        if (action.payload.form.infusions.primaryInfusion) {
          const { primaryInfusion, secondaryInfusion, primaryMaxInfusions, secondaryMaxInfusions } =
            action.payload.form.infusions;
          return {
            ...state,
            infusionOptions: [
              { type: primaryInfusion, count: primaryMaxInfusions },
              { type: secondaryInfusion, count: secondaryMaxInfusions },
            ],
          };
        }

        action.payload.form.mistAttunement ??= 0;

        return { ...state, ...action.payload.form.infusions };
      }
    });

    builder.addCase(setBuildTemplate, (state, action) => {
      const { infusionsPreset } = action.payload;

      if (infusionsPreset) {
        state.infusionOptions = state.infusionOptions.map(
          (_, i) => infusionsPreset[i] ?? { type: '', count: '' },
        );
      }
    });

    builder.addCase(changeGameMode, (state, action) => {
      if (action.payload === 'fractals') {
        return { ...state, omnipotion: true, ar: '162', mistAttunement: 0 };
      }
      return { ...state, omnipotion: false, ar: '0', mistAttunement: 0 };
    });
  },
});

export const getAR = (state: RootState) => state.optimizer.form.infusions.ar;
export const getOmniPotion = (state: RootState) => state.optimizer.form.infusions.omnipotion;
export const getMistAttunement = (state: RootState) =>
  state.optimizer.form.infusions.mistAttunement;
export const getMaxInfusions = (state: RootState) => state.optimizer.form.infusions.maxInfusions;
export const getInfusionOptions = (state: RootState) =>
  state.optimizer.form.infusions.infusionOptions;

export const getValidInfusionOptions = createSelector(
  getInfusionOptions,
  (infusionOptions) =>
    infusionOptions.filter(
      ({ type, count }, i) =>
        type &&
        parseSpecificInfusionCount(count).value > 0 &&
        // ignore duplicates
        infusionOptions.findIndex((entry) => entry.type === type) === i,
    ) as ValidInfusionOptions,
);
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

  if (infusions.mistAttunement) {
    const { id, modifiers } = mistAttunementData[infusions.mistAttunement];
    result.push({
      id,
      modifiers,
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
    ...(Array(lowerCount).fill(
      lowerType ? `+${lowerType} Agony Infusion` : '(empty slot)',
    ) as string[]),
    ...(Array(higherCount).fill(`+${higherType} Agony Infusion`) as string[]),
  ];

  const agonyText = [];
  if (lowerCount)
    agonyText.push(`${lowerCount}x ${lowerType ? `+${lowerType} Agony` : 'Empty Slot'}`);
  if (higherCount) agonyText.push(`${higherCount}x +${higherType} Agony`);

  return { agonyCost, agonyText, agonyArray };
};

export const getMistAttunementAR = createSelector(
  getMistAttunement,
  (mistAttunement) => mistAttunementData[mistAttunement].ar,
);

export const getHelperResult = createSelector(
  getAR,
  getMaxInfusions,
  getValidInfusionOptions,
  getHelperData,
  getMistAttunementAR,
  (arString, maxInfusionsString, infusionOptions, helperData, attunement) => {
    const ar = parseAr(arString).value;
    const maxInfusions = parseInfusionCount(maxInfusionsString).value;

    const { impedence, singularity, tear, slots, freeWvW, ownedMatrix } = helperData;

    let ARFromGear = ar - impedence - attunement - (singularity ? 5 : 0) - (tear ? 15 : 0);

    if (ARFromGear < 0) {
      ARFromGear = 0;
    }

    const statSlots = Math.min(
      infusionOptions
        .filter(({ type }) => type)
        .reduce((prev, { count }) => prev + parseSpecificInfusionCount(count).value, 0),
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
      ...(Array(bestResult.zero).fill(`WvW Stat Infusion`) as string[]),
      ...(Array(bestResult.five).fill(`+5 Stat Infusion`) as string[]),
      ...(Array(bestResult.seven).fill(`+7 Stat Infusion`) as string[]),
      ...(Array(bestResult.nine).fill(`+9 Stat Infusion`) as string[]),
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
  changeMistAttunement,
  changeMaxInfusions,
  changeInfusionOptionType,
  changeInfusionOptionCount,
  changeInfusionOptions,
  addInfusionOption,
  changeHelperEnabled,
  changeSlots,
  changeImpedence,
  changeSingularity,
  changeTear,
  changeFreeWvW,
  changeOwnedMatrix,
} = infusionsSlice.actions;
