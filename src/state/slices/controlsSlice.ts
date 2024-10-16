/* eslint-disable @typescript-eslint/no-non-null-assertion */
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSelector, createSlice, original } from '@reduxjs/toolkit';
import type { getBuildTemplateData } from '../../assets/presetdata/templateTransform';
import type { ProfessionName, ProfessionOrSpecializationName } from '../../utils/gw2-data';
import type { Character } from '../optimizer/optimizerCore';
import type { OptimizerStatus } from '../optimizer/status';
import { RUNNING, RUNNING_HEURISTICS, WAITING } from '../optimizer/status';
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

export type ExtraFilterMode =
  | 'Combinations'
  | 'Sigils'
  | 'Runes'
  | 'Relics'
  | 'Nourishment'
  | 'Enhancement';

type DisplayAttributes = ('Toughness' | 'Boon Duration' | 'Health' | 'Critical Chance')[];

export const emptyFilteredLists = {
  Combinations: [],
  Sigils: [],
  Runes: [],
  Relics: [],
  Nourishment: [],
  Enhancement: [],
};

const initialState: {
  list: Character[];
  filteredLists: Record<ExtraFilterMode, Character[]>;
  saved: Character[];
  compareByPercent: boolean;
  highlightDiffering: boolean;
  tallTable: boolean;
  filterMode: FilterMode;
  displayAttributes: DisplayAttributes;
  progress: number;
  heuristicsProgress: number | undefined;
  selectedCharacter: Character | null;
  selectedTemplate: string;
  status: OptimizerStatus;
  profession: ProfessionName | '';
  selectedSpecialization: ProfessionOrSpecializationName | '';
  jsHeuristicsEnabled: boolean;
  jsHeuristicsTarget: string;
  multicore: boolean;
  hwThreads: number;
  heuristics: boolean;
  error: string;
} = {
  list: [],
  filteredLists: emptyFilteredLists,
  saved: [],
  compareByPercent: true,
  highlightDiffering: false,
  tallTable: false,
  filterMode: 'None',
  displayAttributes: [],
  progress: 0,
  heuristicsProgress: undefined,
  selectedCharacter: null,
  selectedTemplate: '',
  status: WAITING,
  profession: '',
  selectedSpecialization: '',
  jsHeuristicsEnabled: false,
  jsHeuristicsTarget: '',
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
      if (action.payload?.control) {
        return { ...state, ...action.payload.control };
      }
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
    setBuildTemplate: (state, action: PayloadAction<ReturnType<typeof getBuildTemplateData>>) => {
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
    changeFilteredLists: (state, action: PayloadAction<Record<ExtraFilterMode, Character[]>>) => {
      return { ...state, ...action.payload };
    },
    updateResults: (
      state,
      action: PayloadAction<{
        list?: Character[];
        filteredLists?: Record<ExtraFilterMode, Character[]>;
        progress: number;
        heuristicsProgress?: number;
      }>,
    ) => {
      const { list, filteredLists, progress, heuristicsProgress } = action.payload;
      state.progress = progress;
      state.heuristicsProgress = heuristicsProgress;
      if (list) state.list = list;
      if (filteredLists) state.filteredLists = filteredLists;
    },
    toggleSaved: (state, action: PayloadAction<Character>) => {
      if (state.saved.some(({ id }) => action.payload.id === id)) {
        state.saved = state.saved.filter((character) => character.id !== action.payload.id);
      } else {
        state.saved.push(action.payload);
      }
    },
    addToSaved: (state, action: PayloadAction<Character>) => {
      state.saved.push(action.payload);
    },
    removeFromSaved: (state, action: PayloadAction<Character>) => {
      state.saved = state.saved.filter((character) => character.id !== action.payload.id);
    },
    changeCompareByPercent: (state, action: PayloadAction<boolean>) => {
      state.compareByPercent = action.payload;
    },
    changeHighlightDiffering: (state, action: PayloadAction<boolean>) => {
      state.highlightDiffering = action.payload;
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
      console.log('Selected Character Data:', action.payload);

      const oldCharacter = state.selectedCharacter ? original(state.selectedCharacter)! : null;
      const newCharacter = action.payload;
      logAttributeDiff(newCharacter, oldCharacter);

      state.selectedCharacter = action.payload;
    },
    changeError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    changeJsHeuristicsEnabled: (state, action: PayloadAction<boolean>) => {
      state.jsHeuristicsEnabled = action.payload;
    },
    changeJsHeuristicsTarget: (state, action: PayloadAction<string>) => {
      state.jsHeuristicsTarget = action.payload;
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
export const getHeuristicsProgress = (state: RootState) =>
  state.optimizer.control.heuristicsProgress;
export const getSelectedSpecialization = (state: RootState) =>
  state.optimizer.control.selectedSpecialization;
export const getStatus = (state: RootState) => state.optimizer.control.status;
export const getList = (state: RootState) => state.optimizer.control.list;
export const getFilteredLists = (state: RootState) => state.optimizer.control.filteredLists;
export const getSaved = (state: RootState) => state.optimizer.control.saved;
export const getCompareByPercent = (state: RootState) => state.optimizer.control.compareByPercent;
export const getHighlightDiffering = (state: RootState) =>
  state.optimizer.control.highlightDiffering;
export const getFilterMode = (state: RootState) => state.optimizer.control.filterMode;
export const getDisplayAttributes = (state: RootState) => state.optimizer.control.displayAttributes;
export const getTallTable = (state: RootState) => state.optimizer.control.tallTable;
export const getSelectedCharacter = (state: RootState) => state.optimizer.control.selectedCharacter;
export const getError = (state: RootState) => state.optimizer.control.error;
export const getJsHeuristicsEnabled = (state: RootState) =>
  state.optimizer.control.jsHeuristicsEnabled;
export const getJsHeuristicsTarget = (state: RootState) =>
  state.optimizer.control.jsHeuristicsTarget;
export const getMulticore = (state: RootState) => state.optimizer.control.multicore;
export const getHeuristics = (state: RootState) => state.optimizer.control.heuristics;

export const getPageTitle = createSelector(getStatus, getProgress, (status, progress) => {
  if (status === RUNNING) return `${progress}% - Discretize Gear Optimizer`;
  if (status === RUNNING_HEURISTICS) return `0% (${progress}%) - Discretize Gear Optimizer`;

  return 'Discretize Gear Optimizer';
});

export const {
  changeAll,
  changeProfession,
  changeStatus,
  changeProgress,
  changeList,
  changeFilteredLists,
  updateResults,
  changeFilterMode,
  changeDisplayAttributes,
  changeTallTable,
  toggleSaved,
  addToSaved,
  removeFromSaved,
  changeCompareByPercent,
  changeHighlightDiffering,
  setBuildTemplate,
  changeSelectedCharacter,
  changeError,
  changeJsHeuristicsEnabled,
  changeJsHeuristicsTarget,
  changeHwThreads,
  changeMulticore,
  changeHeuristics,
} = controlSlice.actions;

export default controlSlice.reducer;
