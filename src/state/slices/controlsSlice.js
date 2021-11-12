import { createSlice } from '@reduxjs/toolkit';
import { WAITING } from '../optimizer/status';
import { firstUppercase } from '../../utils/usefulFunctions';

export const controlSlice = createSlice({
  name: 'control',
  initialState: {
    expertMode: true,
    progress: 0,
    selectedTemplate: '',
    status: WAITING,
    profession: '',
  },
  reducers: {
    changeProfession: (state, action) => {
      if (state.profession !== action.payload) {
        // reset state on profession change
        return {
          ...state,
          profession: action.payload,
          progress: 0,
          selectedTemplate: '',
          selectedSpecialization: firstUppercase(action.payload),
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
    changeError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const getProfession = (state) => state.optimizer.control.profession;
export const getControl = (key) => (state) => state.optimizer.control[key];
export const getError = (state) => state.optimizer.control.error;

export const {
  reset,
  changeProfession,
  changeExpertMode,
  changeControl,
  setBuildTemplate,
  changeError,
} = controlSlice.actions;

export default controlSlice.reducer;
