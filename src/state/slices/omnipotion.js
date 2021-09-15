import { createSlice } from '@reduxjs/toolkit';
import { Omnipotion } from '../../utils/gw2-data';
import { changeExpertMode, setBuildTemplate, setModifiers } from '../gearOptimizerSlice';

export const omnipotionSlice = createSlice({
  name: 'omnipotion',
  initialState: {
    enable: true,
    ar: 162,
    modifiers: [],
  },
  reducers: {
    changeAR: (state, action) => {
      state.ar = action.payload;
    },
    changeOmnipotion: (state, action) => {
      state.enable = action.payload;
    },
  },
  extraReducers: {
    [setModifiers]: (state, action) => {
      // all selected modifiers will be collected in this array
      const modifiers = [];

      // Apply AR and omnipotion
      if (state.ar) {
        modifiers.push({
          id: 'agony-resistance',
          modifiers: JSON.stringify({
            flat: {
              'Agony Resistance': state.ar,
            },
          }),
        });
      }
      if (state.enable) {
        modifiers.push({
          id: 'omnipotion',
          modifiers: JSON.stringify(Omnipotion),
        });
      }

      state.modifiers = modifiers;
    },
  },
});

export const getAR = (state) => state.omnipotion.ar;
export const getOmniPotion = (state) => state.omnipotion.enable;

export const { changeAR, changeOmnipotion } = omnipotionSlice.actions;
