import { createSlice } from '@reduxjs/toolkit';
import { omnipotionModifiers } from '../../utils/gw2-data';
import { setModifiers } from '../controlsSlice';

export const infusionsSlice = createSlice({
  name: 'infusions',
  initialState: {
    omnipotion: true,
    ar: 162,
    modifiers: [],
    primaryInfusion: '',
    secondaryInfusion: '',
    primaryMaxInfusions: '',
    secondaryMaxInfusions: '',
  },
  reducers: {
    changeAR: (state, action) => {
      state.ar = action.payload;
    },
    changeOmnipotion: (state, action) => {
      state.omnipotion = action.payload;
    },
    changeInfusion: (state, action) => {
      state[action.payload.key] = action.payload.value;
    },
    changeInfusions: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
  extraReducers: {
    [setModifiers]: (state) => {
      // all selected modifiers will be collected in this array
      const modifiers = [];

      // Apply AR and omnipotion
      if (state.ar) {
        modifiers.push({
          id: 'agony-resistance',
          modifiers: {
            attributes: {
              'Agony Resistance': [state.ar, 'converted'],
            },
          },
        });
      }
      if (state.omnipotion) {
        modifiers.push({
          id: 'omnipotion',
          modifiers: omnipotionModifiers,
        });
      }

      state.modifiers = modifiers;
    },
  },
});

export const getInfusions = (state) => state.optimizer.infusions;
export const getAR = (state) => state.optimizer.infusions.ar;
export const getOmniPotion = (state) => state.optimizer.infusions.omnipotion;

export const { changeAR, changeOmnipotion, changeInfusion, changeInfusions } =
  infusionsSlice.actions;
