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

import buffs from './buffs.yaml';

// combines items in all sections into one object
const byId = (sections) => {
  const sectionsFlat = sections.flatMap(
    (section) => section.items?.map(({ id, ...rest }) => [id, { ...rest }]) || [],
  );
  return Object.fromEntries(sectionsFlat);
};
// combines items in all sections in all entries into one object
const allById = (group) =>
  Object.assign({}, ...Object.values(group).map((category) => byId(category)));

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
export const classModifiersById = allById(classModifiers);

const traitSectionsArray = Object.values(classModifiers)
  .flat()
  .filter((section) => section.id);

export const traitSectionsById = Object.fromEntries(
  traitSectionsArray.map((section) => [section.id, section]),
);

export const extrasModifiers = {
  food,
  utility,
  runes,
  sigils,
};
export const extrasModifiersById = allById(extrasModifiers);

export const buffModifiers = buffs;
export const buffModifiersById = byId(buffs);
