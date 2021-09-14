import { createSlice } from '@reduxjs/toolkit';
import { setBuildTemplate, setModifiers } from '../gearOptimizerSlice';

export const prioritiesSlice = createSlice({
  name: 'priorities',
  initialState: {
    optimizeFor: 'Damage',
    weaponType: 'Dual wield',
    minBoonDuration: '',
    minHealingPower: '',
    minToughness: '',
    maxToughness: '',
    affixes: [],
  },
  reducers: {
    changePriority: (state, action) => {
      state[action.payload.key] = action.payload.value;
    },
  },
  extraReducers: {
    [setBuildTemplate]: (state, action) => {
      const { prioritiesPreset } = action.payload;
      return { ...state, ...prioritiesPreset };
    },
  },
});

export const getPriority = (key) => (state) => state.priorities[key];

export const { changePriority } = prioritiesSlice.actions;
