import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { AppliedModifier } from '../optimizer/optimizerSetup';
import type { RootState } from '../store';
import { changeAll } from './controlsSlice';

const initialState: {
  error: string;
  extraModifiers: any[];
  textBox: string;
} = {
  error: '',
  extraModifiers: [],
  textBox: '',
};

export const extraModifiersSlice = createSlice({
  name: 'extraModifiers',
  initialState,
  reducers: {
    changeExtraModifiers: (state, action: PayloadAction<any[]>) => {
      state.extraModifiers = action.payload;
    },
    changeExtraModifiersText: (state, action: PayloadAction<string>) => {
      state.textBox = action.payload;
    },
    changeExtraModifiersError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(changeAll, (state, action) => {
      return { ...state, ...action.payload?.form?.extraModifiers };
    });
  },
});

export const getExtraModifiersError = (state: RootState) =>
  state.optimizer.form.extraModifiers.error;
export const getExtraModifiersTextBox = (state: RootState) =>
  state.optimizer.form.extraModifiers.textBox;

export const getExtraModifiersModifiers = (state: RootState): AppliedModifier[] => {
  const { extraModifiers } = state.optimizer.form;
  return extraModifiers.extraModifiers.map((data, index) => ({
    id: `extraModifier ${index + 1}`,
    modifiers: data,
  }));
};

export const { changeExtraModifiers, changeExtraModifiersText, changeExtraModifiersError } =
  extraModifiersSlice.actions;
