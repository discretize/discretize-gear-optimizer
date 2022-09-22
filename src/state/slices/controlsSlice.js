import { createSelector, createSlice, original } from '@reduxjs/toolkit';
import { RUNNING, WAITING } from '../optimizer/status';

const roundThree = (num) => Math.round(num * 1000) / 1000;

const logAttributeDiff = (newCharacter, oldCharacter) => {
  if (
    oldCharacter?.attributes &&
    oldCharacter?.baseAttributes &&
    newCharacter?.attributes &&
    newCharacter?.baseAttributes
  ) {
    console.groupCollapsed('Selected Character Comparison');
    const baseAttributeComparisonEntries = Object.keys(newCharacter.baseAttributes)
      .map((key) => [
        key,
        {
          value: roundThree(newCharacter.baseAttributes[key] - oldCharacter.baseAttributes[key]),
          percent: roundThree(
            ((newCharacter.baseAttributes[key] - oldCharacter.baseAttributes[key]) /
              oldCharacter.baseAttributes[key]) *
              100,
          ),
        },
      ])
      .filter(([_key, value]) => value.value);
    console.log('Base attributes changed (not including modifiers):');
    console.table(Object.fromEntries(baseAttributeComparisonEntries));
    const attributeComparisonEntries = Object.keys(newCharacter.attributes)
      .map((key) => [
        key,
        {
          value: roundThree(newCharacter.attributes[key] - oldCharacter.attributes[key]),
          percent: roundThree(
            ((newCharacter.attributes[key] - oldCharacter.attributes[key]) /
              oldCharacter.attributes[key]) *
              100,
          ),
        },
      ])
      .filter(([_key, value]) => value.value);
    console.log('Final attributes changed:');
    console.table(Object.fromEntries(attributeComparisonEntries));
    console.groupEnd();
  }
};

export const controlSlice = createSlice({
  name: 'control',
  initialState: {
    list: [],
    filteredList: [],
    saved: [],
    compareByPercent: false,
    tallTable: false,
    filterMode: 'None',
    displayAttributes: [],
    progress: 0,
    selectedCharacter: null,
    selectedTemplate: '',
    status: WAITING,
    profession: '',
  },
  reducers: {
    changeAll: (state, action) => {
      return { ...state, ...action.payload?.control };
    },
    changeProfession: (state, action) => {
      if (state.profession !== action.payload) {
        // reset state on profession change
        return {
          ...state,
          profession: action.payload,
          selectedTemplate: '',
          selectedSpecialization: action.payload,
        };
      }
      return state;
    },
    setBuildTemplate: (state, action) => {
      const { build, specialization, profession } = action.payload;

      return {
        ...state,
        selectedTemplate: build.name,
        selectedSpecialization: specialization,
        profession,
      };
    },
    changeStatus: (state, action) => {
      state.status = action.payload;
    },
    changeProgress: (state, action) => {
      state.progress = action.payload;
    },
    changeList: (state, action) => {
      return { ...state, list: action.payload };
    },
    changeFilteredList: (state, action) => {
      return { ...state, filteredList: action.payload };
    },
    updateResults: (state, action) => {
      const { list, filteredList, progress } = action.payload;
      state.progress = progress;
      if (list) state.list = list;
      if (filteredList) state.filteredList = filteredList;
    },
    toggleSaved: (state, action) => {
      // required to use reference equality check with immer.js
      const originalSaved = original(state.saved);

      if (originalSaved.includes(action.payload)) {
        state.saved = originalSaved.filter((character) => character !== action.payload);
      } else {
        state.saved.push(action.payload);
      }
    },
    changeCompareByPercent: (state, action) => {
      state.compareByPercent = action.payload;
    },
    changeFilterMode: (state, action) => {
      state.filterMode = action.payload;
    },
    changeDisplayAttributes: (state, action) => {
      state.displayAttributes = action.payload;
    },
    changeTallTable: (state, action) => {
      state.tallTable = action.payload;
    },
    changeSelectedCharacter: (state, action) => {
      const oldCharacter = state.selectedCharacter ? original(state.selectedCharacter) : null;
      const newCharacter = action.payload;
      logAttributeDiff(newCharacter, oldCharacter);

      state.selectedCharacter = action.payload;
    },
    changeError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const getProfession = (state) => state.optimizer.control.profession;
export const getSelectedTemplate = (state) => state.optimizer.control.selectedTemplate;
export const getProgress = (state) => state.optimizer.control.progress;
export const getSelectedSpecialization = (state) => state.optimizer.control.selectedSpecialization;
export const getStatus = (state) => state.optimizer.control.status;
export const getList = (state) => state.optimizer.control.list;
export const getFilteredList = (state) => state.optimizer.control.filteredList;
export const getSaved = (state) => state.optimizer.control.saved;
export const getCompareByPercent = (state) => state.optimizer.control.compareByPercent;
export const getFilterMode = (state) => state.optimizer.control.filterMode;
export const getDisplayAttributes = (state) => state.optimizer.control.displayAttributes;
export const getTallTable = (state) => state.optimizer.control.tallTable;
export const getSelectedCharacter = (state) => state.optimizer.control.selectedCharacter;
export const getError = (state) => state.optimizer.control.error;

export const getPageTitle = createSelector(getStatus, getProgress, (status, progress) =>
  status === RUNNING ? `${progress}% - Discretize Gear Optimizer` : 'Discretize Gear Optimizer',
);

export const {
  changeAll,
  changeProfession,
  changeStatus,
  changeProgress,
  changeList,
  changeFilteredList,
  updateResults,
  changeFilterMode,
  changeDisplayAttributes,
  changeTallTable,
  toggleSaved,
  changeCompareByPercent,
  setBuildTemplate,
  changeSelectedCharacter,
  changeError,
} = controlSlice.actions;

export default controlSlice.reducer;
