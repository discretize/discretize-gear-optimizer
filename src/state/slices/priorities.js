import { createSlice } from '@reduxjs/toolkit';
import { changeAll, setBuildTemplate } from './controlsSlice';

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
    [changeAll]: (state, action) => {
      return /* { ...initialState, ... */ action.payload?.form?.priorities /* } */;
    },
    [setBuildTemplate]: (state, action) => {
      const { prioritiesPreset = {} } = action.payload;
      return { ...state, ...prioritiesPreset };
    },
  },
});

export const getPriority = (key) => (state) => state.optimizer.form.priorities[key];

export const { changePriority } = prioritiesSlice.actions;
