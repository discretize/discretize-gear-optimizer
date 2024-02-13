import rawbuffs from './buffs.yaml';
import rawElementalist from './elementalist.yaml';
import rawEngineer from './engineer.yaml';
import rawfood from './food.yaml';
import rawGuardian from './guardian.yaml';
import rawMesmer from './mesmer.yaml';
import rawNecromancer from './necromancer.yaml';
import rawRanger from './ranger.yaml';
import rawrelics from './relics.yaml';
import rawRevenant from './revenant.yaml';
import rawrunes from './runes.yaml';
import rawsigils from './sigils.yaml';
import rawThief from './thief.yaml';
import { type ModiferData } from './types';
import rawutility from './utility.yaml';
import rawWarrior from './warrior.yaml';

// files are type checked in ../testSchema.ts
const buffs = rawbuffs as ModiferData;
const Elementalist = rawElementalist as ModiferData;
const Engineer = rawEngineer as ModiferData;
const food = rawfood as ModiferData;
const Guardian = rawGuardian as ModiferData;
const Mesmer = rawMesmer as ModiferData;
const Necromancer = rawNecromancer as ModiferData;
const Ranger = rawRanger as ModiferData;
const relics = rawrelics as ModiferData;
const Revenant = rawRevenant as ModiferData;
const runes = rawrunes as ModiferData;
const sigils = rawsigils as ModiferData;
const Thief = rawThief as ModiferData;
const utility = rawutility as ModiferData;
const Warrior = rawWarrior as ModiferData;

// combines items in all sections into one object
const byId = (sections: ModiferData[number][]) => {
  const sectionsFlat = sections.flatMap(({ section, items }) =>
    items.map(({ id, ...rest }) => [id, { ...rest, section }] as const),
  );
  return Object.fromEntries(sectionsFlat);
};
// combines items in all sections in all entries into one object
const allById = (group: Record<string, ModiferData>) => {
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
