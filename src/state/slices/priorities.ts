import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type {
  AffixDataEntry,
  AffixName,
  IndicatorName,
  WeaponHandednessType,
} from '../../utils/gw2-data';
import { weaponTypes } from '../../utils/gw2-data';
import type { RootState } from '../store';
import { changeAll, setBuildTemplate } from './controlsSlice';

type Data = Partial<Record<AffixName, boolean[]>>;

const fillAffix = (data: Data, affix: AffixName, value = false) => {
  data[affix] = Array(14).fill(value);
};

export interface PrioritiesSlice {
  optimizeFor: IndicatorName;
  weaponType: WeaponHandednessType;
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
  affixes: AffixName[];
  exclusions: {
    enabled: boolean;
    data: Data;
  };
  exotics: {
    enabled: boolean;
    data: Data;
  };
  customAffix: Partial<AffixDataEntry>;
  customAffixTextBox: string;
  customAffixError: string;
}

const initialState: PrioritiesSlice = {
  optimizeFor: 'Damage',
  weaponType: weaponTypes.dualWield,
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

type ConstraintKey =
  | 'minBoonDuration'
  | 'minHealingPower'
  | 'minToughness'
  | 'maxToughness'
  | 'minHealth'
  | 'minCritChance'
  | 'minDamage'
  | 'minHealing'
  | 'minSurvivability'
  | 'minOutgoingHealing'
  | 'minQuicknessDuration';

export const prioritiesSlice = createSlice({
  name: 'priorities',
  initialState,
  reducers: {
    changeConstraint: (state, action: PayloadAction<{ key: ConstraintKey; value: string }>) => {
      state[action.payload.key] = action.payload.value;
    },
    changePriorities: (state, action: PayloadAction<Partial<PrioritiesSlice>>) => {
      return { ...state, ...action.payload };
    },
    changeOptimizeFor: (state, action: PayloadAction<IndicatorName>) => {
      state.optimizeFor = action.payload;
    },
    changeWeaponType: (state, action: PayloadAction<WeaponHandednessType>) => {
      state.weaponType = action.payload;
    },
    changeAffixes: (state, action: PayloadAction<AffixName[]>) => {
      state.affixes = action.payload;
    },
    changeExclusion: (
      state,
      action: PayloadAction<{ affix: AffixName; index: number; value: boolean }>,
    ) => {
      const { affix, index, value } = action.payload;
      if (!state.exclusions.data[affix]) fillAffix(state.exclusions.data, affix);
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      state.exclusions.data[affix]![index] = Boolean(value);
    },
    changeExotic: (
      state,
      action: PayloadAction<{ affix: AffixName; index: number; value: boolean }>,
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
    changeCustomAffixTextBox: (state, action: PayloadAction<string>) => {
      state.customAffixTextBox = action.payload;
    },
    changeCustomAffix: (state, action: PayloadAction<Partial<AffixDataEntry>>) => {
      state.customAffix = action.payload;
    },
    changeCustomAffixError: (state, action: PayloadAction<string>) => {
      state.customAffixError = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(changeAll, (state, action) => {
      if (action.payload?.form?.priorities) {
        return { ...state, ...action.payload?.form?.priorities };
      }
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

export const getConstraint = (key: ConstraintKey) => (state: RootState) =>
  state.optimizer.form.priorities[key];

export const getOptimizeFor = (state: RootState) => state.optimizer.form.priorities.optimizeFor;
export const getAffixes = (state: RootState) => state.optimizer.form.priorities.affixes;
export const getWeaponType = (state: RootState) => state.optimizer.form.priorities.weaponType;

export const getExclusionsEnabled = (state: RootState) =>
  state.optimizer.form.priorities.exclusions.enabled;
export const getExoticsEnabled = (state: RootState) =>
  state.optimizer.form.priorities.exotics.enabled;
export const getExclusionData = (state: RootState) =>
  state.optimizer.form.priorities.exclusions.data;
export const getExoticsData = (state: RootState) => state.optimizer.form.priorities.exotics.data;

export const getCustomAffixText = (state: RootState) =>
  state.optimizer.form.priorities.customAffixTextBox;
export const getCustomAffixError = (state: RootState) =>
  state.optimizer.form.priorities.customAffixError;
export const getCustomAffixData = (state: RootState) => {
  const { customAffix } = state.optimizer.form.priorities;

  const type = customAffix?.type || 'triple';
  const major = customAffix?.bonuses?.major || [];
  const minor = customAffix?.bonuses?.minor || [];
  const jewelMajor = customAffix?.bonuses?.jewelMajor || [];
  const jewelMinor = customAffix?.bonuses?.jewelMinor || [];

  return { type, bonuses: { major, minor, jewelMajor, jewelMinor }, ...customAffix };
};

export const {
  changeConstraint,
  changePriorities,
  changeOptimizeFor,
  changeWeaponType,
  changeAffixes,
  changeExclusion,
  changeExclusionsEnabled,
  changeExotic,
  changeAllExotic,
  changeExoticsEnabled,
  changeCustomAffixTextBox,
  changeCustomAffix,
  changeCustomAffixError,
} = prioritiesSlice.actions;
