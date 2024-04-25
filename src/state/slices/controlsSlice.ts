/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { PayloadAction, createSelector, createSlice, original } from '@reduxjs/toolkit';
import {
  IndicatorName,
  ProfessionName,
  ProfessionOrSpecializationName,
} from '../../utils/gw2-data';
import { Character } from '../optimizer/optimizerCore';
import { OptimizerStatus, RUNNING, WAITING } from '../optimizer/status';
import type { RootState } from '../store';

const roundThree = (num: number) => Math.round(num * 1000) / 1000;

const logAttributeDiff = (newCharacter: Character | null, oldCharacter: Character | null) => {
  if (
    oldCharacter?.attributes &&
    oldCharacter?.baseAttributes &&
    newCharacter?.attributes &&
    newCharacter?.baseAttributes
  ) {
    console.groupCollapsed('Selected Character Comparison');
    const baseAttributeComparisonEntries = Object.keys(newCharacter.baseAttributes)
      .map(
        (key) =>
          [
            key,
            {
              value: roundThree(
                newCharacter.baseAttributes[key] - oldCharacter.baseAttributes[key],
              ),
              percent: roundThree(
                ((newCharacter.baseAttributes[key] - oldCharacter.baseAttributes[key]) /
                  oldCharacter.baseAttributes[key]) *
                  100,
              ),
            },
          ] as const,
      )
      .filter(([_key, value]) => value.value);
    console.log('Base attributes changed (not including modifiers):');
    console.table(Object.fromEntries(baseAttributeComparisonEntries));
    const attributeComparisonEntries = Object.keys(newCharacter.attributes)
      .map(
        (key) =>
          [
            key,
            {
              value: roundThree(newCharacter.attributes[key] - oldCharacter.attributes[key]),
              percent: roundThree(
                ((newCharacter.attributes[key] - oldCharacter.attributes[key]) /
                  oldCharacter.attributes[key]) *
                  100,
              ),
            },
          ] as const,
      )
      .filter(([_key, value]) => value.value);
    console.log('Final attributes changed:');
    console.table(Object.fromEntries(attributeComparisonEntries));
    console.groupEnd();
  }
};

export type FilterMode =
  | 'None'
  | 'Combinations'
  | 'Sigils'
  | 'Runes'
  | 'Relics'
  | 'Nourishment'
  | 'Enhancement';

export type ExtraFilterMode = 'Sigils' | 'Runes' | 'Relics' | 'Nourishment' | 'Enhancement';

type DisplayAttributes = ('Toughness' | 'Boon Duration' | 'Health' | 'Critical Chance')[];

const initialState: {
  list: Character[];
  filteredList: Character[];
  extraFilteredLists: Record<ExtraFilterMode, Character[]>;
  saved: Character[];
  compareByPercent: boolean;
  tallTable: boolean;
  filterMode: FilterMode;
  displayAttributes: DisplayAttributes;
  progress: number;
  selectedCharacter: Character | null;
  selectedTemplate: string;
  status: OptimizerStatus;
  profession: ProfessionName | '';
  selectedSpecialization: ProfessionOrSpecializationName | '';
  multicore: boolean;
  hwThreads: number;
  heuristics: boolean;
  error: string;
} = {
  list: [],
  filteredList: [],
  extraFilteredLists: {
    Sigils: [],
    Runes: [],
    Relics: [],
    Nourishment: [],
    Enhancement: [],
  },
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
  selectedSpecialization: '',
  multicore: false,
  hwThreads: navigator.hardwareConcurrency || 4, // 4 seems to be a sensible default
  heuristics: false,
  error: '',
};

export const controlSlice = createSlice({
  name: 'control',
  initialState,
  reducers: {
    changeAll: (state, action) => {
      return { ...state, ...action.payload?.control };
    },
    changeProfession: (state, action: PayloadAction<ProfessionName>) => {
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
    changeStatus: (state, action: PayloadAction<OptimizerStatus>) => {
      state.status = action.payload;
    },
    changeProgress: (state, action: PayloadAction<number>) => {
      state.progress = action.payload;
    },
    changeList: (state, action: PayloadAction<Character[]>) => {
      return { ...state, list: action.payload };
    },
    addToList: (state, action: PayloadAction<{ rankby: IndicatorName; data: Character[] }>) => {
      // insert all characters of payload such that the order of the list is kept
      // slice to 100 characters
      const newList = [...state.list, ...action.payload.data];
      newList.sort(
        (a, b) => b.attributes[action.payload.rankby] - a.attributes[action.payload.rankby],
      );

      return { ...state, list: newList.slice(0, 100) };
    },
    changeFilteredList: (state, action: PayloadAction<Character[]>) => {
      return { ...state, filteredList: action.payload };
    },
    changeExtraFilteredLists: (
      state,
      action: PayloadAction<Record<ExtraFilterMode, Character[]>>,
    ) => {
      return { ...state, ...action.payload };
    },
    updateResults: (
      state,
      action: PayloadAction<{
        list?: Character[];
        filteredList?: Character[];
        extraFilteredLists?: Record<ExtraFilterMode, Character[]>;
        progress: number;
      }>,
    ) => {
      const { list, filteredList, extraFilteredLists, progress } = action.payload;
      state.progress = progress;
      if (list) state.list = list;
      if (filteredList) state.filteredList = filteredList;
      if (extraFilteredLists) state.extraFilteredLists = extraFilteredLists;
    },
    toggleSaved: (state, action: PayloadAction<Character>) => {
      // required to use reference equality check with immer.js
      const originalSaved = original(state.saved)!;

      if (originalSaved.includes(action.payload)) {
        state.saved = originalSaved.filter((character) => character !== action.payload);
      } else {
        state.saved.push(action.payload);
      }
    },
    changeCompareByPercent: (state, action: PayloadAction<boolean>) => {
      state.compareByPercent = action.payload;
    },
    changeFilterMode: (state, action: PayloadAction<FilterMode>) => {
      state.filterMode = action.payload;
    },
    changeDisplayAttributes: (state, action: PayloadAction<DisplayAttributes>) => {
      state.displayAttributes = action.payload;
    },
    changeTallTable: (state, action: PayloadAction<boolean>) => {
      state.tallTable = action.payload;
    },
    changeSelectedCharacter: (state, action: PayloadAction<Character | null>) => {
      const oldCharacter = state.selectedCharacter ? original(state.selectedCharacter)! : null;
      const newCharacter = action.payload;
      logAttributeDiff(newCharacter, oldCharacter);

      state.selectedCharacter = action.payload;
    },
    changeError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    changeHwThreads: (state, action: PayloadAction<number>) => {
      state.hwThreads = action.payload;
    },
    changeMulticore: (state, action: PayloadAction<boolean>) => {
      state.multicore = action.payload;
    },
    changeHeuristics: (state, action: PayloadAction<boolean>) => {
      state.heuristics = action.payload;
    },
  },
});

export const getProfession = (state: RootState) => state.optimizer.control.profession;
export const getSelectedTemplate = (state: RootState) => state.optimizer.control.selectedTemplate;
export const getHwThreads = (state: RootState) => state.optimizer.control.hwThreads;
export const getProgress = (state: RootState) => state.optimizer.control.progress;
export const getSelectedSpecialization = (state: RootState) =>
  state.optimizer.control.selectedSpecialization;
export const getStatus = (state: RootState) => state.optimizer.control.status;
export const getList = (state: RootState) => state.optimizer.control.list;
export const getFilteredList = (state: RootState) => state.optimizer.control.filteredList;
export const getExtraFilteredLists = (state: RootState) =>
  state.optimizer.control.extraFilteredLists;
export const getSaved = (state: RootState) => state.optimizer.control.saved;
export const getCompareByPercent = (state: RootState) => state.optimizer.control.compareByPercent;
export const getFilterMode = (state: RootState) => state.optimizer.control.filterMode;
export const getDisplayAttributes = (state: RootState) => state.optimizer.control.displayAttributes;
export const getTallTable = (state: RootState) => state.optimizer.control.tallTable;
export const getSelectedCharacter = (state: RootState) => state.optimizer.control.selectedCharacter;
export const getError = (state: RootState) => state.optimizer.control.error;
export const getMulticore = (state: RootState) => state.optimizer.control.multicore;
export const getHeuristics = (state: RootState) => state.optimizer.control.heuristics;

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
  changeExtraFilteredLists,
  updateResults,
  changeFilterMode,
  changeDisplayAttributes,
  changeTallTable,
  toggleSaved,
  changeCompareByPercent,
  setBuildTemplate,
  changeSelectedCharacter,
  changeError,
  changeHwThreads,
  changeMulticore,
  changeHeuristics,
  addToList,
} = controlSlice.actions;

export default controlSlice.reducer;
