import { createSlice } from '@reduxjs/toolkit';

export const buildPageSlice = createSlice({
  name: 'buildPage',
  initialState: {
    character: null,
  },
  reducers: {
    changeCharacter: (state, action) => {
      state.character = action.payload;
    },
  },
});

export const getCharacter = (state) => state.optimizer.buildPage.character;

export const { changeCharacter } = buildPageSlice.actions;
