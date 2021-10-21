import { createSlice } from '@reduxjs/toolkit';
import { WAITING } from './optimizer/status';
import { firstUppercase } from '../utils/usefulFunctions';

export const controlSlice = createSlice({
  name: 'control',
  initialState: {
    expertMode: true,
    list: [],
    progress: 0,
    selectedCharacter: null,
    selectedTemplate: '',
    status: WAITING,
    profession: '',
    traitsTemplate: null,
  },
  reducers: {
    changeProfession: (state, action) => {
      if (state.profession !== action.payload) {
        // reset state on profession change
        return {
          ...state,
          profession: action.payload,
          list: [],
          progress: 0,
          selectedCharacter: null,
          selectedTemplate: '',
          selectedSpecialization: firstUppercase(action.payload),
          status: WAITING,
          error: '',
          traitsTemplate: null,
        };
      }
      return state;
    },
    changeExpertMode: (state, action) => {
      if (action.payload) {
        // just change expertMode to true
        return {
          ...state,
          expertMode: action.payload,
        };
      }
      // wipe state and force usr to select a template
      return {
        ...state,
        expertMode: action.payload,
        list: [],
        progress: 0,
        selectedCharacter: null,
        status: WAITING,
        error: '',
        traitsTemplate: null,
      };
    },
    setBuildTemplate: (state, action) => {
      const { build, specialization, profession } = action.payload;

      return {
        ...state,
        list: [],
        progress: 0,
        selectedCharacter: null,
        selectedTemplate: build.name,
        selectedSpecialization: specialization,
        status: WAITING,
        profession,
        error: '',
      };
    },
    setModifiers: (state, action) => {
      return state;
    },
    changeControl: (state, action) => {
      state[action.payload.key] = action.payload.value;
    },
    changeList: (state, action) => {
      state.list = action.payload;
    },
    changeSelectedCharacter: (state, action) => {
      state.selectedCharacter = action.payload;
    },
    changeError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const getModifiers = (state) => [
  ...(state.optimizer.extras.modifiers || []),
  ...(state.optimizer.buffs.modifiers || []),
  ...(state.optimizer.extraModifiers.modifiers || []),
  ...(state.optimizer.omnipotion.modifiers || []),
  ...(state.optimizer.skills.modifiers || []),
  ...(state.optimizer.traits.modifiers || []),
];

export const getProfession = (state) => state.optimizer.control.profession;
export const getControl = (key) => (state) => state.optimizer.control[key];
export const getList = (state) => state.optimizer.control.list;
export const getSelectedCharacter = (state) => state.optimizer.control.selectedCharacter;
export const getError = (state) => state.optimizer.control.error;

export const {
  reset,
  changeProfession,
  changeExpertMode,
  changeControl,
  changeList,
  setModifiers,
  setBuildTemplate,
  changeSelectedCharacter,
  changeError,
} = controlSlice.actions;

export default controlSlice.reducer;
