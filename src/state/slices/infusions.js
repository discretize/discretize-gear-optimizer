import { createSlice } from '@reduxjs/toolkit';
import { omnipotionModifiers } from '../../utils/gw2-data';
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
} = infusionsSlice.actions;
