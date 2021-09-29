import { createSlice } from '@reduxjs/toolkit';
import { changeProfession, setBuildTemplate, setModifiers } from '../gearOptimizerSlice';

import { classModifiersById } from '../../assets/modifierdata';

export const skillsSlice = createSlice({
  name: 'skills',
  initialState: {
    skills: [],
    modifiers: [],
  },
  reducers: {
    addSkill: (state, action) => {
      return { ...state, skills: state.skills.concat(action.payload) };
    },
    removeSkill: (state, action) => {
      return { ...state, skills: state.skills.filter((v) => v !== action.payload) };
    },
  },
  extraReducers: {
    [changeProfession]: (state, action) => {
      if (state.profession !== action.payload) {
        return {
          ...state,
          skills: [],
          modifiers: [],
        };
      }
    },
    [setBuildTemplate]: (state, action) => {
      const { build } = action.payload;

      const traitState = JSON.parse(build.traits);
      return { ...state, skills: traitState.skills };
    },
    [setModifiers]: (state, action) => {
      const { profession } = action.payload;

      const enabledModifiers = state.skills;

      state.modifiers = enabledModifiers.map((id) => {
        const { modifiers, gw2id } = classModifiersById[profession.toLowerCase()][id];
        return { id, modifiers, gw2id };
      });
    },
  },
});

export const getSkills = (state) => state.skills.skills;

export const { addSkill, removeSkill } = skillsSlice.actions;
