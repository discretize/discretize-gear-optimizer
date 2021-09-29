import elementalist from './elementalist.yaml';
import engineer from './engineer.yaml';
import guardian from './guardian.yaml';
import mesmer from './mesmer.yaml';
import necromancer from './necromancer.yaml';
import ranger from './ranger.yaml';
import revenant from './revenant.yaml';
import thief from './thief.yaml';
import warrior from './warrior.yaml';

import food from './food.yaml';
import utility from './utility.yaml';
import runes from './runes.yaml';
import sigils from './sigils.yaml';

export { default as buffModifiers } from './buffs.yaml';

// combines items in all sections into one object
const flattenSections = (modifiers) =>
  modifiers.reduce((prev, section) => Object.assign(prev, section.items), {});

// flattens each entry in a group
const flattenAll = (group) =>
  Object.fromEntries(Object.entries(group).map(([key, value]) => [key, flattenSections(value)]));

export const classModifiers = {
  elementalist,
  engineer,
  guardian,
  mesmer,
  necromancer,
  ranger,
  revenant,
  thief,
  warrior,
};
export const classModifiersFlat = flattenAll(classModifiers);

export const extrasModifiers = {
  food,
  utility,
  runes,
  sigils,
};
export const extrasModifiersFlat = flattenAll(extrasModifiers);

export const allExtrasModifiers = {
  ...extrasModifiersFlat.food,
  ...extrasModifiersFlat.utility,
  ...extrasModifiersFlat.runes,
  ...extrasModifiersFlat.sigils,
};

// export { default as foodModifiers } from './food.yaml';
// export { default as utilityModifiers } from './utility.yaml';
// export { default as runeModifiers } from './runes.yaml';
// export { default as sigilModifiers } from './sigils.yaml';

/*
import {
  classModifiers,
  classModifiersFlat,
  buffModifiers,
  extrasModifiers,
  extrasModifiersFlat,
  allExtrasModifiers
} from '../../../assets/modifierdata';
*/
