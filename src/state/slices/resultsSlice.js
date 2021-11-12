import { createSlice } from '@reduxjs/toolkit';

export const resultsSlice = createSlice({
  name: 'results',
  initialState: {
    profession: '',
    list: [],
    selectedCharacter: null,
    traitsTemplate: null,
    allSelectedModifiers: null,
    optimizerSettings: null,
  },
  reducers: {
    changeResults: (state, action) => {
      return { ...state, ...action.payload };
    },
    changeList: (state, action) => {
      state.list = action.payload;
    },
    changeSelectedCharacter: (state, action) => {
      state.selectedCharacter = action.payload;
    },
  },
});

export const getProfession = (state) => state.optimizer.results.profession;
export const getList = (state) => state.optimizer.results.list;
export const getSelectedCharacter = (state) => state.optimizer.results.selectedCharacter;
export const getTraitsTemplate = (state) => state.optimizer.results.traitsTemplate;
export const getAllSelectedModifiers = (state) => state.optimizer.results.allSelectedModifiers;
export const getOptimizerSettings = (state) => state.optimizer.results.optimizerSettings;

export const { changeResults, changeList, changeSelectedCharacter } = resultsSlice.actions;

export default resultsSlice.reducer;
