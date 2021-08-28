import { createSlice } from '@reduxjs/toolkit';
import { WAITING } from './optimizer/status';

export const gearOptimizerSlice = createSlice({
  name: 'go',
  initialState: {
    control: {
      expertMode: true,
      list: [],
      progress: 0,
      selectedCharacter: null,
      STATUS: WAITING,
    },
    profession: '',
    traits: {
      lines: ['', '', ''],
      selected: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ],
      modifiers: [],
    },
    skills: [],
    extras: {
      Runes: '',
      Sigil1: '',
      Sigil2: '',
      Enhancement: '',
      Nourishment: '',
    },
    extraModifiers: {
      error: '',
      extraModifiers: [],
      textBox: '',
    },
    buffs: {
      might: false,
      fury: false,
      protection: false,
      vulnerability: false,
      bannerOfStrength: false,
      bannerOfDiscipline: false,
      bannerOfTactics: false,
      bannerOfDefense: false,
      spotter: false,
      frostSpirit: false,
      empowerAllies: false,
      pinpointDistribution: false,
      assassinsPresence: false,
      facetOfNature: false,
      riteDwarf: false,
      strengthInNumbers: false,
      baneSignet: false,
      signetOfJudgment: false,
      signetOfMercy: false,
      signetOfWrath: false,
      exposed: false,
      lightArmor: false,
    },
    infusions: {
      primaryInfusion: '',
      secondaryInfusion: '',
      primaryMaxInfusions: '',
      secondaryMaxInfusions: '',
    },
    forcedSlots: [null, null, null, null, null, null, null, null, null, null, null, null, null],
    ar: 162,
    omnipotion: true,
    priorities: {
      optimizeFor: 'Damage',
      weaponType: 'Dual wield',
      minBoonDuration: '',
      minHealingPower: '',
      minToughness: '1000',
      maxToughness: '',
      affixes: [],
    },
    distribution: {
      version: 2,
      values1: {
        Power: 100,
        Burning: 0,
        Bleeding: 0,
        Poisoned: 0,
        Torment: 0,
        Confusion: 0,
      },
      values2: {
        Power: 2,
        Burning: 0,
        Bleeding: 0,
        Poisoned: 0,
        Torment: 0,
        Confusion: 0,
      },
      textBoxes: {
        Power: '2',
        Burning: '0',
        Bleeding: '0',
        Poisoned: '0',
        Torment: '0',
        Confusion: '0',
      },
    },
    modifiers: [],
  },
  reducers: {
    reset: (state, action) => {
      state.modifiers = [];
      state.traits = {
        lines: ['', '', ''],

        selected: [
          [0, 0, 0],
          [0, 0, 0],
          [0, 0, 0],
        ],
        modifiers: [],
      };
      state.control = {
        ...state.control,
        list: [],
        progress: 0,
        selectedCharacter: null,
        status: WAITING,
      };
      state.skills = [];
    },
    changeProfession: (state, action) => {
      state.profession = action.payload;
    },
    changeAR: (state, action) => {
      state.ar = action.payload;
    },
    changeTraitLine: (state, action) => {
      state.traits.lines[action.payload.index] = action.payload.value;
    },
    changeTraits: (state, action) => {
      state.traits.selected[action.payload.index] = action.payload.selected;
    },
    changeGeneric: (state, action) => {
      state[action.payload.toChange] = action.payload.value;
    },
    changeDistributionVersion: (state, action) => {
      state.distribution.version = action.payload;
    },
    changeDistributionNew: (state, action) => {
      state.distribution = {
        ...state.distribution,
        values2: { ...state.distribution.values2, [action.payload.index]: action.payload.value },
      };
    },
    changeTextBoxes: (state, action) => {
      state.distribution = {
        ...state.distribution,
        textBoxes: {
          ...state.distribution.textBoxes,
          [action.payload.index]: action.payload.value,
        },
      };
    },
    changeAllTextBoxes: (state, action) => {
      state.distribution.textBoxes = action.payload;
    },
    changeExtraModifiers: (state, action) => {
      state.extraModifiers[action.payload.key] = action.payload.value;
    },
    changeAllDistributionsOld: (state, action) => {
      state.distribution.values1 = action.payload;
    },
    changeAllDistributionsNew: (state, action) => {
      state.distribution.values2 = action.payload;
    },
    addSkill: (state, action) => {
      state.skills = state.skills.concat(action.payload.value);
    },
    removeSkill: (state, action) => {
      state.skills = state.skills.filter((v) => v !== action.payload);
    },
    changeForcedSlot: (state, action) => {
      state.forcedSlots[action.payload.index] = action.payload.value;
    },
    addModifier: (state, action) => {
      state.modifiers = state.modifiers.concat(action.payload);
    },
    setBuildTemplate: (state, action) => {
      const data = action.payload;

      // enable the buff template
      const { buffs } = state;
      const buffsNew = {};
      [...Object.keys(buffs)].forEach((key) => {
        buffsNew[key] = false;
        if (key in data.buffPreset) buffsNew[key] = data.buffPreset[key];
      });

      const traitState = JSON.parse(data.build.traits);

      return {
        ...state,
        ...traitState,
        modifiers: [],
        control: {
          ...state.control,
          list: [],
          progress: 0,
          selectedCharacter: null,
          status: WAITING,
        },
        buffs: buffsNew,
        priorities: {
          ...state.priorities,
          ...data.prioritiesPreset,
        },
      };
    },
    setModifiers: (state, action) => {
      // passed data from GraphQL
      const data = action.payload;

      const { extras, buffs, skills, traits, extraModifiers, profession } = state;

      // all selected modifiers will be collected in this array
      const modifiers = [];

      // Applies runes, sigils, food modifiers
      const extrasData = [
        { id: 'Runes', list: data.runes.list },
        { id: 'Sigil1', list: data.sigils.list },
        { id: 'Sigil2', list: data.sigils.list },
        { id: 'Enhancement', list: data.enhancement.list },
        { id: 'Nourishment', list: data.nourishment.list },
      ];

      extrasData
        .filter((extra) => extras[extra.id] !== '')
        .filter((extra) => extras[extra.id] !== undefined)
        .forEach((extra) => {
          modifiers.push({
            id: extras[extra.id],
            modifiers: extra.list.flatMap((d) => d.items).find((a) => a.id === extras[extra.id])
              .modifiers,
            source: extra.id,
          });
        });

      // Apply "buffs" modifiers
      data.buffs.list
        .flatMap((d) => d.items)
        .filter((elem) => buffs[elem.id])
        .forEach((elem) =>
          modifiers.push({ id: elem.id, modifiers: elem.modifiers, gw2_id: elem.gw2_id }),
        );

      // map id to modifier. We dont store modifier values in the state!
      const allSkillsAndTraits = data[profession.toLowerCase()].edges[0].node.list.flatMap(
        (el) => el.items,
      );
      const matchedTraitModifiers = traits.modifiers.map((traitModifier) =>
        allSkillsAndTraits.filter((t) => t !== null).find((trait) => trait.id === traitModifier.id),
      );
      const matchedSkillModifiers = skills.map((skill) =>
        allSkillsAndTraits.filter((t) => t !== null).find((s) => s.id === skill),
      );
      modifiers.push(...matchedTraitModifiers);
      modifiers.push(...matchedSkillModifiers);

      // Apply extra (manual) modifiers
      if (extraModifiers.length > 0) {
        modifiers.push(
          ...JSON.parse(extraModifiers).map((modi, index) => {
            return { id: `extraModifier${index}`, modifiers: JSON.stringify(modi) };
          }),
        );
      }

      state.modifiers = modifiers;

      // clear result details
      state.control.selectedCharacter = null;
    },
    addTraitModifier: (state, action) => {
      state.traits.modifiers = state.traits.modifiers.concat(action.payload);
    },
    removeModifier: (state, action) => {
      state.modifiers = state.modifiers.filter((m) => m.id !== action.payload);
    },
    removeTraitModifier: (state, action) => {
      state.traits.modifiers = state.traits.modifiers.filter((m) => m.id !== action.payload);
    },
    removeTraitModifierWithGW2id: (state, action) => {
      state.traits.modifiers = state.traits.modifiers.filter((m) => m.gw2_id !== action.payload);
    },
    removeModifierWithSource: (state, action) => {
      state.modifiers = state.modifiers.filter((m) => m.source !== action.payload);
    },
    removeTraitModifierWithSource: (state, action) => {
      state.traits.modifiers = state.traits.modifiers.filter((m) => m.source !== action.payload);
    },
    changeExtras: (state, action) => {
      state.extras[action.payload.key] = action.payload.value;
    },
    changeControl: (state, action) => {
      state.control[action.payload.key] = action.payload.value;
    },
    changeBuff: (state, action) => {
      state.buffs[action.payload.key] = action.payload.value;
    },
    replaceBuffs: (state, action) => {
      state.buffs = Object.fromEntries(
        Object.keys(state.buffs).map((key) => [key, Boolean(action.payload[key])]),
      );
    },
    changeInfusions: (state, action) => {
      state.infusions[action.payload.key] = action.payload.value;
    },
    changePriority: (state, action) => {
      state.priorities[action.payload.key] = action.payload.value;
    },
    changeList: (state, action) => {
      state.control.list = action.payload;
    },
    changeOmnipotion: (state, action) => {
      state.omnipotion = action.payload;
    },
    changeState: (state, action) => {
      return { ...state, ...action.payload };
    },
    changeSelectedCharacter: (state, action) => {
      state.control.selectedCharacter = action.payload;
    },
  },
});

export const getProfession = (state) => state.gearOptimizer.profession;
export const getAR = (state) => state.gearOptimizer.ar;
export const getTraitLines = (state) => state.gearOptimizer.traits.lines;
export const getTraits = (state) => state.gearOptimizer.traits.selected;
export const getGeneric = (key) => (state) => state.gearOptimizer[key];
export const getExtraModifiers = (key) => (state) => state.gearOptimizer.extraModifiers[key];
export const getDistributionVersion = (state) => state.gearOptimizer.distribution.version;
export const getDistributionOld = (state) => state.gearOptimizer.distribution.values1;
export const getDistributionNew = (state) => state.gearOptimizer.distribution.values2;
export const getTextBoxes = (state) => state.gearOptimizer.distribution.textBoxes;
export const getSkills = (state) => state.gearOptimizer.skills;
export const getModifiers = (state) => state.gearOptimizer.modifiers;
export const getTraitModifiers = (state) => state.gearOptimizer.traits.modifiers;
export const getExtra = (key) => (state) => state.gearOptimizer.extras[key];
export const getControl = (key) => (state) => state.gearOptimizer.control[key];
export const getBuffs = (state) => state.gearOptimizer.buffs;
export const getInfusions = (state) => state.gearOptimizer.infusions;
export const getPriority = (key) => (state) => state.gearOptimizer.priorities[key];
export const getExtras = (state) => state.gearOptimizer.extras;
export const getList = (state) => state.gearOptimizer.control.list;
export const getOmniPotion = (state) => state.gearOptimizer.omnipotion;
export const getSelectedCharacter = (state) => state.gearOptimizer.control.selectedCharacter;

export const {
  reset,
  changeProfession,
  changeAR,
  changeTraitLine,
  changeTraits,
  changeGeneric,
  changeDistributionVersion,
  changeDistributionNew,
  changeTextBoxes,
  changeAllTextBoxes,
  changeAllDistributionsOld,
  changeAllDistributionsNew,
  addSkill,
  removeSkill,
  changeForcedSlot,
  addModifier,
  removeModifier,
  removeTraitModifierWithGW2id,
  removeModifierWithSource,
  changeExtras,
  changeExtraModifiers,
  changeControl,
  changeBuff,
  replaceBuffs,
  changeInfusions,
  changePriority,
  changeList,
  addTraitModifier,
  removeTraitModifier,
  removeTraitModifierWithSource,
  setModifiers,
  setBuildTemplate,
  changeOmnipotion,
  changeState,
  changeSelectedCharacter,
} = gearOptimizerSlice.actions;

export default gearOptimizerSlice.reducer;
