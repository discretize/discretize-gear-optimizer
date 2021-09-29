import { createSlice } from '@reduxjs/toolkit';
import { changeProfession, setBuildTemplate, setModifiers } from '../gearOptimizerSlice';

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
      // passed data from GraphQL
      const { data, profession } = action.payload;

      // all selected modifiers will be collected in this array
      const modifiers = [];

      // map id to modifier. We dont store modifier values in the state!
      const allSkillsAndTraits = data[profession.toLowerCase()].edges[0].node.list.flatMap(
        (el) => el.items,
      );
      const matchedSkillModifiers = state.skills.map((skill) =>
        allSkillsAndTraits.filter((t) => t !== null).find((s) => s.id === skill),
      );

      modifiers.push(...matchedSkillModifiers);

      state.modifiers = modifiers;
    },
  },
});

export const getSkills = (state) => state.skills.skills;

export const { addSkill, removeSkill } = skillsSlice.actions;
