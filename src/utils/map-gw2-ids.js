/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const startCase = require('lodash/startCase');

const itemMapping = require('./mapping/items.json');
const skillMapping = require('./mapping/skills.json');
const traitMapping = require('./mapping/traits.json');
const itemstatMapping = require('./mapping/itemstats.json');
const specializationMapping = require('./mapping/specializations.json');

const stripRuneName = (name) => name.replace(/(Superior|Rune|of|the)/g, '');

const stripSigilName = (name) => name.replace(/(Superior|Sigil|of|the)/g, '');

const normalize = (string) =>
  string === undefined
    ? string
    : string
        .replace(/[^A-Za-z]/g, '')
        .toLowerCase()
        .trim();

const findMatch = ({
  tag,
  id,
  name: uName,
  profession: uProfession,
  type: uType,
  affix: uAffix,
  weight: uWeight,
  position = 1,
}) => {
  const profession = normalize(uProfession);
  const type = normalize(uType);
  const affix = normalize(uAffix);
  const weight = normalize(uWeight);

  let counter = 0;
  switch (tag) {
    case 'Item': {
      let preName;
      if (type === 'rune') {
        preName = stripRuneName(uName);
      } else if (type === 'sigil') {
        preName = stripSigilName(uName);
      } else {
        preName = uName;
      }

      const name = normalize(preName);

      return itemMapping.find(
        ({ id: itemId, name: itemName, type: itemType, affix: itemAffix, weight: itemWeight }) => {
          const match =
            // Match either id
            id === itemId ||
            // or any of the props (if they are defined)
            ((name === undefined || name === itemName) &&
              (type === undefined || type === itemType) &&
              (affix === undefined || affix === itemAffix) &&
              (weight === undefined || weight === itemWeight) &&
              // but at least one has to be defined
              (name !== undefined ||
                type !== undefined ||
                affix !== undefined ||
                weight !== undefined));

          if (match) {
            counter += 1;
            if (counter !== position) {
              return false;
            }

            return true;
          }

          return false;
        },
      );
    }

    case 'Skill': {
      const name = normalize(uName);

      return skillMapping.find(({ id: skillId, name: skillName, profession: skillProfession }) => {
        const match =
          id === skillId ||
          (name === skillName && (profession === undefined || skillProfession === profession));

        if (match) {
          counter += 1;
          if (counter !== position) {
            return false;
          }

          return true;
        }

        return false;
      });
    }

    case 'Trait': {
      const name = normalize(uName);

      return traitMapping.find(({ id: traitId, name: traitName, profession: traitProfession }) => {
        const match =
          id === traitId ||
          (name === traitName && (profession === undefined || traitProfession === profession));

        if (match) {
          counter += 1;
          if (counter !== position) {
            return false;
          }

          return true;
        }

        return false;
      });
    }

    case 'Specialization': {
      const name = normalize(uName);

      return specializationMapping.find(
        ({
          id: specializationId,
          name: specializationName,
          profession: specializationProfession,
        }) => {
          const match =
            id === specializationId ||
            (name === specializationName &&
              (profession === undefined || specializationProfession === profession));

          if (match) {
            counter += 1;
            if (counter !== position) {
              return false;
            }

            return true;
          }

          return false;
        },
      );
    }

    default:
      return undefined;
  }
};

const fallbacks = {
  'Back item': 79837,
  Amulet: 79980,
  Ring: 80793,
  Accessory: 80002,
};

const pofAffixes = [
  'harrier',
  'grieving',
  'marshal',
  'swashbuckler',
  'avatar',
  'wizard',
  'plaguedoctor',
];

const findMatchWithFallback = (props) => {
  const match = findMatch(props);

  const { tag, id, affix: uAffix, type } = props;
  const affix = normalize(uAffix);
  if (
    tag !== 'Item' ||
    match !== undefined ||
    id !== undefined ||
    affix === undefined ||
    type === undefined
  ) {
    return match;
  }

  const fallback = type === 'Back item' && pofAffixes.includes(affix) ? 82982 : fallbacks[type];
  if (fallback !== undefined) {
    const statsId = itemstatMapping.find(({ name }) => name === affix).ids || {};
    if (statsId !== undefined) {
      const sid = statsId[0];
      return {
        id: fallback,
        sid,
        affix,
        type,
      };
    }

    return undefined;
  }

  return undefined;
};

const resolveComponent = (tag) => (props) => {
  // Only enrich id and profession for Skill/Trait
  if (
    props.id !== undefined &&
    ((tag !== 'Skill' && tag !== 'Trait') || props.profession !== undefined)
  ) {
    return props;
  }

  const match = findMatchWithFallback({ tag, ...props });

  if (match === undefined) {
    if (tag !== 'Skill' && props.id !== undefined) {
      console.log(`Could not resolve component ${tag}`, {
        ...props,
      });
    }
    return props;
  }

  return {
    ...props,
    id: match.id,
    ...(tag === 'Skill' || tag === 'Trait' ? { profession: match.profession } : {}),
    ...(match.statsId !== undefined ? { statsId: match.statsId } : {}),
  };
};

const armorTypes = ['Helm', 'Shoulders', 'Coat', 'Gloves', 'Leggings', 'Boots'];

export const resolveArmor = ({ weight, ...rest }) => {
  const tag = 'Item';
  const props = { weight, ...rest };

  const runeCounts = {};

  armorTypes.forEach((type) => {
    const lowerCaseType = type.toLowerCase();

    const idKey = `${lowerCaseType}Id`;
    const affixKey = `${lowerCaseType}Affix`;

    const id = props[idKey];
    const affix = props[affixKey];

    if ((id === undefined && affix !== undefined) || (id !== undefined && affix === undefined)) {
      const search = { tag, affix, type, weight };
      const { id: newId, affix: newAffix } = findMatch(search) || {};

      if (newId === undefined) {
        console.log(`Could not resolve ${type} id`, search);
      } else {
        props[idKey] = newId;
        props[affixKey] = newAffix;
      }
    }
    props[affixKey] = startCase(props[affixKey]);

    const runeIdKey = `${lowerCaseType}RuneId`;
    const runeKey = `${lowerCaseType}Rune`;

    const runeId = props[runeIdKey];
    const rune = props[runeKey];

    if (
      (runeId === undefined && rune !== undefined) ||
      (runeId !== undefined && rune !== undefined)
    ) {
      const search = {
        tag,
        name: rune,
        type: 'Rune',
      };
      const { id: newRuneId, name: newUnstrippedRune } = findMatch(search) || {};
      const newRune = newUnstrippedRune && stripRuneName(newUnstrippedRune);

      if (newRuneId === undefined) {
        console.log(`Could not resolve ${type} rune id`, search);
      } else {
        props[runeIdKey] = newRuneId;
        props[runeKey] = newRune;
      }
    }
    props[runeKey] = startCase(props[runeKey]);

    if (props[runeKey]) {
      runeCounts[props[runeKey]] = !runeCounts[props[runeKey]] ? 1 : runeCounts[props[runeKey]] + 1;
    }
  });

  armorTypes.forEach((type) => {
    const lowerCaseType = type.toLowerCase();
    props[`${lowerCaseType}RuneCount`] = runeCounts[props[`${lowerCaseType}Rune`]];
  });

  return props;
};

const weaponSlots = ['weapon1Main', 'weapon1Off', 'weapon2Main', 'weapon2Off'];
const sigilSlots = ['Sigil1', 'Sigil2', 'Sigil'];

const resolveWeapons = ({ ...rest }) => {
  const tag = 'Item';
  const props = { ...rest };

  weaponSlots.forEach((slot) => {
    const idKey = `${slot}Id`;
    const affixKey = `${slot}Affix`;
    const typeKey = `${slot}Type`;

    const id = props[idKey];
    const affix = props[affixKey];
    const type = props[typeKey];

    if (
      (id === undefined && affix !== undefined && type !== undefined) ||
      (id !== undefined && (affix === undefined || type === undefined))
    ) {
      const search = { tag, affix, type };
      const { id: newId, affix: newAffix, type: newType } = findMatch(search) || {};

      if (newId === undefined) {
        console.log(`Could not resolve ${type} id`, search);
      } else {
        props[idKey] = newId;
        props[affixKey] = newAffix;
        props[typeKey] = newType;
      }
    }
    props[affixKey] = startCase(props[affixKey]);
    props[typeKey] = startCase(props[typeKey]);

    sigilSlots.forEach((sigilSlot) => {
      const sigilIdKey = `${slot}${sigilSlot}Id`;
      const sigilKey = `${slot}${sigilSlot}`;

      const sigilId = props[sigilIdKey];
      const sigil = props[sigilKey];

      if (
        (sigilId === undefined && sigil !== undefined) ||
        (sigilId !== undefined && sigil === undefined)
      ) {
        const search = {
          tag,
          name: sigil,
          type: 'Sigil',
        };
        const { id: newSigilId, name: newUnstrippedSigil } = findMatch(search) || {};
        const newSigil = newUnstrippedSigil && stripSigilName(newUnstrippedSigil);

        if (newSigilId === undefined) {
          console.log(`Could not resolve ${type} ${sigilSlot} sigil id`, search);
        } else {
          props[sigilIdKey] = newSigilId;
          props[sigilKey] = newSigil;
        }
        props[sigilKey] = startCase(props[sigilKey]);
      }
    });
  });

  return props;
};

const backAndTrinkets = [
  {
    slot: 'backItem',
    type: 'Back item',
  },
  {
    slot: 'accessory1',
    type: 'Accessory',
  },
  {
    slot: 'accessory2',
    type: 'Accessory',
  },
  {
    slot: 'amulet',
    type: 'Amulet',
  },
  {
    slot: 'ring1',
    type: 'Ring',
  },
  {
    slot: 'ring2',
    type: 'Ring',
  },
];

export const resolveBackAndTrinkets = ({ ...rest }) => {
  const tag = 'Item';
  const props = { ...rest };

  const usedCombinations = {};

  backAndTrinkets.forEach(({ slot, type }) => {
    const idKey = `${slot}Id`;
    const affixKey = `${slot}Affix`;

    const id = props[idKey];
    const affix = props[affixKey];

    if ((id === undefined && affix !== undefined) || (id !== undefined && affix === undefined)) {
      const search = {
        tag,
        affix,
        type,
        ...(affix && usedCombinations[type] && usedCombinations[type].includes(affix)
          ? { position: 2 }
          : {}),
      };
      const {
        id: newId,
        affix: newAffix,
        statsId: newStatsId,
      } = findMatchWithFallback(search) || {};

      if (newId === undefined) {
        console.log(`Could not resolve ${type} id`, search);
      } else {
        props[idKey] = newId;
        props[affixKey] = newAffix;
        if (newStatsId !== undefined) {
          props[`${slot}StatsId`] = newStatsId;
        }
      }
    }
    props[affixKey] = startCase(props[affixKey]);

    (usedCombinations[type] || (usedCombinations[type] = [])).push(props[affixKey]);
  });

  return props;
};

const consumableTypes = ['Food', 'Utility', 'Infusion'];

const resolveConsumables = ({ ...rest }) => {
  const tag = 'Item';
  const props = { ...rest };

  consumableTypes.forEach((type) => {
    const lowerCaseType = type.toLowerCase();

    const idKey = `${lowerCaseType}Id`;
    const key = lowerCaseType;

    const id = props[idKey];
    const name = props[key];

    if (id === undefined && name !== undefined) {
      const search = {
        tag,
        name,
        type,
      };
      const { id: newId } = findMatch(search) || {};

      if (newId === undefined) {
        console.log(`Could not resolve ${type} id`, search);
      } else {
        props[idKey] = newId;
      }
    }
  });

  return props;
};

const skillSlots = ['heal', 'utility1', 'utility2', 'utility3', 'elite'];

const resolveSkills = ({ ...rest }) => {
  const tag = 'Skill';
  const props = { ...rest };

  skillSlots.forEach((slot) => {
    const idKey = `${slot}Id`;
    const key = slot;

    const id = props[idKey];
    const name = props[key];

    if (id === undefined && name !== undefined) {
      const search = {
        tag,
        name,
      };
      const { id: newId } = findMatch(search) || {};

      if (newId === undefined) {
        console.log(`Could not resolve ${slot} skill id`, search);
      } else {
        props[idKey] = newId;
      }
    }
  });

  return props;
};

const traitSlots = ['traits1', 'traits2', 'traits3'];

const resolveTraits = ({ ...rest }) => {
  const props = { ...rest };

  traitSlots.forEach((slot) => {
    const idKey = `${slot}Id`;
    const key = slot;

    const id = props[idKey];
    const name = props[key];

    let profession;
    if ((id === undefined && name !== undefined) || (id !== undefined && name === undefined)) {
      const search = {
        tag: 'Specialization',
        id,
        name,
      };
      const { id: newId, name: newName, profession: newProfession } = findMatch(search) || {};

      if (newId === undefined) {
        console.log(`Could not resolve ${slot} specialization id`, search);
      } else {
        props[idKey] = newId;
        props[key] = newName;
        profession = newProfession;
      }
    }
    props[key] = startCase(props[key]);

    const selectedIdsKey = `${slot}SelectedIds`;
    const selectedKey = `${slot}Selected`;

    const selectedIds = props[selectedIdsKey];
    const selected = props[selectedKey];

    if (selectedIds === undefined && selected !== undefined && selected.length > 0) {
      const newSelectedIds = selected
        .map((selectedTrait, index) => {
          const search = {
            tag: 'Trait',
            name: selectedTrait,
            profession,
          };

          const { id: newId } = findMatch(search) || {};

          if (newId === undefined) {
            console.log(`Could not resolve ${slot} selected trait ${index} id`, search);
            return undefined;
          }
          return newId;
        })
        .filter((value) => value !== undefined);

      if (newSelectedIds === undefined) {
        console.log(`Could not resolve ${slot} selected trait ids`, selected);
      } else {
        props[selectedIdsKey] = newSelectedIds;
      }
    }
  });

  return props;
};

const resolveBoss = ({ ...rest }) => {
  const props = { ...rest };

  let res;
  res = resolveWeapons(props);
  res = resolveSkills(res);
  return res;
};

const components = {
  Item: resolveComponent('Item'),
  Skill: resolveComponent('Skill'),
  Trait: resolveComponent('Trait'),
  Armor: resolveArmor,
  Weapons: resolveWeapons,
  BackAndTrinkets: resolveBackAndTrinkets,
  Consumables: resolveConsumables,
  Skills: resolveSkills,
  Traits: resolveTraits,
  Boss: resolveBoss,
};

// module.exports = (type, props) => (type && components[type] ? components[type](props) : props);
