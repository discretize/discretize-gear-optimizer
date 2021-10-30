import { createSlice } from '@reduxjs/toolkit';
import { changeProfession, setBuildTemplate, setModifiers } from '../controlsSlice';

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
      return { ...state, skills: state.skills.filter((skill) => skill !== action.payload) };
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
      const { skillsPreset = {} } = action.payload;
      return { ...state, ...skillsPreset };
    },
    [setModifiers]: (state, action) => {
      const enabledModifiers = state.skills;

      state.modifiers = enabledModifiers.map((id) => {
        const { modifiers, gw2id } = classModifiersById[id];
        return { id, modifiers, gw2id };
      });
    },
  },
});

export const getSkills = (state) => state.optimizer.skills.skills;

export const { addSkill, removeSkill } = skillsSlice.actions;
