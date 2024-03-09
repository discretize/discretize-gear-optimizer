import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { allClassModifiersById } from '../../assets/modifierdata';
import { changeAll, changeProfession, setBuildTemplate } from './controlsSlice';
import type { RootState } from '../store';
import type { AppliedModifier } from '../optimizer/optimizerSetup';

interface SkillValue {
  amount?: string;
}

// todo: specify skills keys
type SkillsValues = Record<string, SkillValue>;

const initialState: {
  skills: SkillsValues;
} = {
  skills: {},
};

export const skillsSlice = createSlice({
  name: 'skills',
  initialState,
  reducers: {
    toggleSkill: (state, action: PayloadAction<{ id: string; enabled: boolean }>) => {
      const { id, enabled } = action.payload;

      if (enabled) {
        const itemData = allClassModifiersById[id];
        state.skills[id] = itemData?.amountData
          ? { amount: itemData?.amountData?.defaultInput ?? '' }
          : {};
      } else {
        delete state.skills[id];
      }
    },
    setSkillAmount: (state, action: PayloadAction<{ id: string; amount: string }>) => {
      const { id, amount } = action.payload;

      state.skills[id] = { ...state.skills[id], amount };
    },
    changeSkills: (state, action) => {
      return { ...state, ...action.payload };
    },
  },

  extraReducers: (builder) => {
    builder.addCase(changeAll, (state, action) => {
      return { ...state, ...action.payload?.form?.skills };
    });

    builder.addCase(changeProfession, (state, _action) => ({
      ...state,
      skills: {},
    }));

    builder.addCase(setBuildTemplate, (state, action) => {
      const { skillsPreset = {} } = action.payload;
      return { ...state, ...skillsPreset };
    });
  },
});

export const getSkills = (state: RootState) => state.optimizer.form.skills.skills;

export const getSkillsModifiers = (state: RootState): AppliedModifier[] => {
  const { skills } = state.optimizer.form;

  const result: any[] = [];
  Object.entries(skills.skills).forEach(([id, value]) => {
    const itemData = allClassModifiersById[id];
    if (!itemData) return;

    result.push({ id, ...itemData, amount: value?.amount });
  });
  return result;
};

export const { toggleSkill, setSkillAmount, changeSkills } = skillsSlice.actions;
