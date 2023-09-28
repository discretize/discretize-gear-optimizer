import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
  AffixData,
  AffixNameOrCustom,
  IndicatorName,
  WeaponTypes,
  WeaponTypesValue,
} from '../../utils/gw2-data';
import { changeAll, setBuildTemplate } from './controlsSlice';
import { RootState } from '../store';

type Data = Partial<Record<AffixNameOrCustom, boolean[]>>;

const fillAffix = (data: Data, affix: AffixNameOrCustom, value = false) => {
  data[affix] = Array(14).fill(value);
};
const pick = (object: Record<string, any>, keysToPick: string[]) =>
  Object.fromEntries(keysToPick.filter((key) => key in object).map((key) => [key, object[key]]));

const initialState: {
  optimizeFor: IndicatorName;
  weaponType: WeaponTypesValue;
  minBoonDuration: string;
  minHealingPower: string;
  minToughness: string;
  maxToughness: string;
  minHealth: string;
  minCritChance: string;
  minDamage: string;
  minHealing: string;
  minSurvivability: string;
  minOutgoingHealing: string;
  minQuicknessDuration: string;
  affixes: AffixNameOrCustom[];
  exclusions: {
    enabled: boolean;
    data: Data;
  };
  exotics: {
    enabled: boolean;
    data: Data;
  };
  customAffix: Partial<AffixData>;
  customAffixTextBox: string;
  customAffixError: string;
} = {
  optimizeFor: 'Damage',
  weaponType: WeaponTypes.dualWield,
  minBoonDuration: '',
  minHealingPower: '',
  minToughness: '',
  maxToughness: '',
  minHealth: '',
  minCritChance: '',
  minDamage: '',
  minHealing: '',
  minSurvivability: '',
  minOutgoingHealing: '',
  minQuicknessDuration: '',
  affixes: [],
  exclusions: {
    enabled: false,
    data: {},
  },
  exotics: {
    enabled: false,
    data: {},
  },
  customAffix: {},
  customAffixTextBox: '',
  customAffixError: '',
};

export const prioritiesSlice = createSlice({
  name: 'priorities',
  initialState,
  reducers: {
    changePriority: (state, action) => {
      state[action.payload.key] = action.payload.value;
    },
    changeExclusion: (
      state,
      action: PayloadAction<{ affix: AffixNameOrCustom; index: number; value: boolean }>,
    ) => {
      const { affix, index, value } = action.payload;
      if (!state.exclusions.data[affix]) fillAffix(state.exclusions.data, affix);
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      state.exclusions.data[affix]![index] = Boolean(value);
    },
    changeExotic: (
      state,
      action: PayloadAction<{ affix: AffixNameOrCustom; index: number; value: boolean }>,
    ) => {
      const { affix, index, value } = action.payload;
      if (!state.exotics.data[affix]) fillAffix(state.exotics.data, affix);
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      state.exotics.data[affix]![index] = Boolean(value);
    },
    changeAllExotic: (state, action: PayloadAction<{ value: boolean }>) => {
      const { value } = action.payload;
      state.affixes.forEach((affix) => {
        fillAffix(state.exotics.data, affix, value);
      });
    },
    changeExclusionsEnabled: (state, action: PayloadAction<boolean>) => {
      state.exclusions.enabled = action.payload;
      if (!action.payload) {
        state.exclusions.data = {};
      }
    },
    changeExoticsEnabled: (state, action: PayloadAction<boolean>) => {
      state.exotics.enabled = action.payload;
      if (!action.payload) {
        state.exotics.data = {};
      }
    },
  },

  extraReducers: (builder) => {
    builder.addCase(changeAll, (state, action) => {
      return { ...state, ...action.payload?.form?.priorities };
    });

    builder.addCase(setBuildTemplate, (state, action) => {
      const {
        prioritiesPreset = {},
        build: { weaponType },
      } = action.payload;
      return { ...state, ...prioritiesPreset, ...(weaponType ? { weaponType } : {}) };
    });
  },
});

export const getPriority = (key) => (state: RootState) => state.optimizer.form.priorities[key];
export const getExclusionsEnabled = (state: RootState) =>
  state.optimizer.form.priorities.exclusions.enabled;
export const getExoticsEnabled = (state: RootState) =>
  state.optimizer.form.priorities.exotics.enabled;
export const getExclusionData = (state: RootState) =>
  state.optimizer.form.priorities.exclusions.data;
export const getExoticsData = (state: RootState) => state.optimizer.form.priorities.exotics.data;
export const getUsedExoticsData = (state: RootState) =>
  pick(state.optimizer.form.priorities.exotics.data, state.optimizer.form.priorities.affixes);

export const getCustomAffixData = (state: RootState) => {
  const { customAffix } = state.optimizer.form.priorities;

  const type = customAffix?.type || 'triple';
  const major = customAffix?.bonuses?.major || [];
  const minor = customAffix?.bonuses?.minor || [];

  return { type, bonuses: { major, minor } };
};

export const {
  changePriority,
  changeExclusion,
  changeExclusionsEnabled,
  changeExotic,
  changeAllExotic,
  changeExoticsEnabled,
} = prioritiesSlice.actions;
