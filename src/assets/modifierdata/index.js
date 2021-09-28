import elementalist from './elementalist.yaml';
import engineer from './engineer.yaml';
import guardian from './guardian.yaml';
import mesmer from './mesmer.yaml';
import necromancer from './necromancer.yaml';
import ranger from './ranger.yaml';
import revenant from './revenant.yaml';
import thief from './thief.yaml';
import warrior from './warrior.yaml';

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

export { default as buffModifiers } from './buffs.yaml';
export { default as foodModifiers } from './food.yaml';
export { default as utilityModifiers } from './utility.yaml';
export { default as runeModifiers } from './runes.yaml';
export { default as sigilModifiers } from './sigils.yaml';
