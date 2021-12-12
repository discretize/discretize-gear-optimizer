import buffs from './buffs.yaml';
import Elementalist from './elementalist.yaml';
import Engineer from './engineer.yaml';
import food from './food.yaml';
import Guardian from './guardian.yaml';
import Mesmer from './mesmer.yaml';
import Necromancer from './necromancer.yaml';
import Ranger from './ranger.yaml';
import Revenant from './revenant.yaml';
import runes from './runes.yaml';
import sigils from './sigils.yaml';
import Thief from './thief.yaml';
import utility from './utility.yaml';
import Warrior from './warrior.yaml';

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
  Elementalist,
  Engineer,
  Guardian,
  Mesmer,
  Necromancer,
  Ranger,
  Revenant,
  Thief,
  Warrior,
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
