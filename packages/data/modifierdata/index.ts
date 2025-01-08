import buffs from './buffs.yaml';
import Elementalist from './elementalist.yaml';
import Engineer from './engineer.yaml';
import food from './food.yaml';
import Guardian from './guardian.yaml';
import Mesmer from './mesmer.yaml';
import type { ModifierData, Section } from './metadata';
import Necromancer from './necromancer.yaml';
import Ranger from './ranger.yaml';
import relics from './relics.yaml';
import Revenant from './revenant.yaml';
import runes from './runes.yaml';
import sigils from './sigils.yaml';
import Thief from './thief.yaml';
import utility from './utility.yaml';
import Warrior from './warrior.yaml';

export * from './metadata';

// combines items in all sections into one object
const byId = (sections: Section[]) => {
  const sectionsFlat = sections.flatMap(({ section, items }) =>
    items.map(({ id, ...rest }) => [id, { ...rest, section }] as const),
  );
  return Object.fromEntries(sectionsFlat);
};
// combines items in all sections in all entries into one object
const allById = (group: Record<string, ModifierData>) => {
  const sections = Object.values(group).flat();
  return byId(sections);
};

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
export const allClassModifiersById = allById(classModifiers);

const traitSectionsArray = Object.values(classModifiers)
  .flat()
  .filter((section) => section.id);

export const traitSectionsById = Object.fromEntries(
  traitSectionsArray.map((section) => [String(section.id), section]),
);

export const extrasModifiers = {
  food,
  utility,
  runes,
  relics,
  sigils,
};
export const allExtrasModifiersById = allById(extrasModifiers);

export const buffModifiers = buffs;
export const buffModifiersById = byId(buffs);

// item used to represent nothing
export const placeholderItem = 77359; // no reward

// export const placeholderItem = 68761; // ???
// export const placeholderItem = 68390; // pile of glittery garbage
// export const placeholderItem = 78005; // bloodstone bisque
// export const placeholderItem = 39223; // unidentified object
// export const placeholderItem = 84449; // lentil-like stone
