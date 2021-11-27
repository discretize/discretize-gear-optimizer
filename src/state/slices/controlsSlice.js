import { createSlice } from '@reduxjs/toolkit';
import { WAITING } from '../optimizer/status';

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
    changeAll: (state, action) => {
      return /* { ...initialState, ... */ action.payload?.control /* } */;
    },
    changeProfession: (state, action) => {
      if (state.profession !== action.payload) {
        // reset state on profession change
        return {
          ...state,
          profession: action.payload,
          progress: 0,
          selectedTemplate: '',
          selectedSpecialization: action.payload,
          status: WAITING,
          error: '',
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
        progress: 0,
        status: WAITING,
        error: '',
      };
    },
    setBuildTemplate: (state, action) => {
      const { build, specialization, profession } = action.payload;

      return {
        ...state,
        progress: 0,
        selectedTemplate: build.name,
        selectedSpecialization: specialization,
        status: WAITING,
        profession,
        error: '',
      };
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

export const getProfession = (state) => state.optimizer.control.profession;
export const getControl = (key) => (state) => state.optimizer.control[key];
export const getList = (state) => state.optimizer.control.list;
export const getSelectedCharacter = (state) => state.optimizer.control.selectedCharacter;
export const getError = (state) => state.optimizer.control.error;

export const {
  changeAll,
  reset,
  changeProfession,
  changeExpertMode,
  changeControl,
  changeList,
  setBuildTemplate,
  changeSelectedCharacter,
  changeError,
} = controlSlice.actions;

export default controlSlice.reducer;
