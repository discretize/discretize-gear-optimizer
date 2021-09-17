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
  },
  reducers: {
    changeProfession: (state, action) => {
      if (state.profession !== action.payload) {
        state.profession = action.payload;

        // reset
        state.control = {
          ...state.control,
          list: [],
          progress: 0,
          selectedCharacter: null,
          selectedTemplate: '',
          selectedSpecialization: firstUppercase(action.payload),
          status: WAITING,
        };
      }
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
  },
});

export const getModifiers = (state) => [
  ...state.extras.modifiers,
  ...state.buffs.modifiers,
  ...state.extraModifiers.modifiers,
  ...state.omnipotion.modifiers,
  ...state.skills.modifiers,
  ...state.traits.modifiers,
];

export const getProfession = (state) => state.control.profession;
export const getControl = (key) => (state) => state.control[key];
export const getList = (state) => state.control.list;
export const getSelectedCharacter = (state) => state.control.selectedCharacter;

export const {
  reset,
  changeProfession,
  changeExpertMode,
  changeControl,
  changeList,
  setModifiers,
  setBuildTemplate,
  changeSelectedCharacter,
} = controlSlice.actions;

export default controlSlice.reducer;
