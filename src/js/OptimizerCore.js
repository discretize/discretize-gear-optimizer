/**
 * ------------------------------------------------------------------------
 * GW2 Data
 * ------------------------------------------------------------------------
 */
const Affix = Object.freeze({
  Berserker: {
    type: 'triple',
    bonuses: {
      major: ['Power'],
      minor: ['Precision', 'Ferocity']
    }
  },
  Assassin: {
    type: 'triple',
    bonuses: {
      major: ['Precision'],
      minor: ['Power', 'Ferocity']
    }
  },
  Harrier: {
    type: 'triple',
    bonuses: {
      major: ['Power'],
      minor: ['Concentration', 'Healing Power']
    }
  },
  Commander: {
    type: 'quadruple',
    bonuses: {
      major: ['Power', 'Precision'],
      minor: ['Toughness', 'Concentration']
    }
  },
  Minstrel: {
    type: 'quadruple',
    bonuses: {
      major: ['Toughness', 'Healing Power'],
      minor: ['Vitality', 'Concentration']
    }
  },
  Magi: {
    type: 'triple',
    bonuses: {
      major: ['Healing Power'],
      minor: ['Vitality', 'Precision']
    }
  },
  Marauder: {
    type: 'quadruple',
    bonuses: {
      major: ['Power', 'Precision'],
      minor: ['Vitality', 'Ferocity']
    }
  },
  Cleric: {
    type: 'triple',
    bonuses: {
      major: ['Healing Power'],
      minor: ['Power', 'Toughness']
    }
  },
  Nomad: {
    type: 'triple',
    bonuses: {
      major: ['Toughness'],
      minor: ['Vitality', 'Healing Power']
    }
  },
  Zealot: {
    type: 'triple',
    bonuses: {
      major: ['Power'],
      minor: ['Precision', 'Healing Power']
    }
  },
  Viper: {
    type: 'quadruple',
    bonuses: {
      major: ['Power', 'Condition Damage'],
      minor: ['Precision', 'Expertise']
    }
  },
  Sinister: {
    type: 'triple',
    bonuses: {
      major: ['Condition Damage'],
      minor: ['Power', 'Precision']
    }
  },
  Grieving: {
    type: 'quadruple',
    bonuses: {
      major: ['Power', 'Condition Damage'],
      minor: ['Precision', 'Ferocity']
    }
  },
  Seraph: {
    type: 'quadruple',
    bonuses: {
      major: ['Precision', 'Condition Damage'],
      minor: ['Healing Power', 'Concentration']
    }
  },
  Marshal: {
    type: 'quadruple',
    bonuses: {
      major: ['Power', 'Healing Power'],
      minor: ['Precision', 'Condition Damage']
    }
  },
  Giver: {
    type: 'triple',
    bonuses: {
      major: ['Toughness'],
      minor: ['Healing Power', 'Concentration']
    }
  },
  Knight: {
    type: 'triple',
    bonuses: {
      major: ['Toughness'],
      minor: ['Power', 'Precision']
    }
  },
  Trailblazer: {
    type: 'quadruple',
    bonuses: {
      major: ['Toughness', 'Condition Damage'],
      minor: ['Vitality', 'Expertise']
    }
  },
  Plaguedoctor: {
    type: 'quadruple',
    bonuses: {
      major: ['Vitality', 'Condition Damage'],
      minor: ['Healing Power', 'Concentration']
    }
  },
  Carrion: {
    type: 'triple',
    bonuses: {
      major: ['Condition Damage'],
      minor: ['Power', 'Vitality']
    }
  },
  Rabid: {
    type: 'triple',
    bonuses: {
      major: ['Condition Damage'],
      minor: ['Toughness', 'Precision']
    }
  },
  Dire: {
    type: 'triple',
    bonuses: {
      major: ['Condition Damage'],
      minor: ['Toughness', 'Vitality']
    }
  },
  Vigilant: {
    type: 'quadruple',
    bonuses: {
      major: ['Power', 'Toughness'],
      minor: ['Concentration', 'Expertise']
    }
  },
  Valkyrie: {
    type: 'triple',
    bonuses: {
      major: ['Power'],
      minor: ['Vitality', 'Ferocity']
    }
  },
  Cavalier: {
    type: 'triple',
    bonuses: {
      major: ['Toughness'],
      minor: ['Power', 'Ferocity']
    }
  },
  'Berserker+Valkyrie': {
    type: 'bervalk',
    bonuses: {
      major: ['Power'],
      minor: ['Vitality', 'Ferocity']
    }
  },
  Celestial: {
    type: 'celestial',
    bonuses: {
      major: ['Power', 'Precision', 'Toughness', 'Vitality'],
      minor: ['Ferocity', 'Condition Damage', 'Expertise', 'Concentration', 'Healing Power']
    }
  },
  Diviner: {
    type: 'quadruple',
    bonuses: {
      major: ['Power', 'Concentration'],
      minor: ['Precision', 'Ferocity']
    }
  },
  Soldier: {
    type: 'triple',
    bonuses: {
      major: ['Power'],
      minor: ['Toughness', 'Vitality']
    }
  },
  Sentinel: {
    type: 'triple',
    bonuses: {
      major: ['Vitality'],
      minor: ['Power', 'Toughness']
    }
  },
  Wanderer: {
    type: 'quadruple',
    bonuses: {
      major: ['Power', 'Vitality'],
      minor: ['Toughness', 'Concentration']
    }
  },
  Apothecary: {
    type: 'triple',
    bonuses: {
      major: ['Healing Power'],
      minor: ['Condition Damage', 'Toughness']
    }
  },
  Shaman: {
    type: 'triple',
    bonuses: {
      major: ['Vitality'],
      minor: ['Condition Damage', 'Healing Power']
    }
  },
  Crusader: {
    type: 'quadruple',
    bonuses: {
      major: ['Power', 'Toughness'],
      minor: ['Ferocity', 'Healing Power']
    }
  },
  Rampager: {
    type: 'triple',
    bonuses: {
      major: ['Precision'],
      minor: ['Condition Damage', 'Power']
    }
  },
  Settler: {
    type: 'triple',
    bonuses: {
      major: ['Toughness'],
      minor: ['Condition Damage', 'Healing Power']
    }
  },
  Bringer: {
    type: 'triple',
    bonuses: {
      major: ['Expertise'],
      minor: ['Precision', 'Vitality']
    }
  }
});

const Item = Object.freeze({
  HELM: {
    triple: {
      major: 63,
      minor: 45
    },
    quadruple: {
      major: 54,
      minor: 30
    },
    celestial: {
      major: 30,
      minor: 30
    }
  },
  SHOULDERS: {
    triple: {
      major: 47,
      minor: 34
    },
    quadruple: {
      major: 40,
      minor: 22
    },
    celestial: {
      major: 22,
      minor: 22
    }
  },
  CHEST: {
    triple: {
      major: 141,
      minor: 101
    },
    quadruple: {
      major: 121,
      minor: 67
    },
    celestial: {
      major: 67,
      minor: 67
    }
  },
  GLOVES: {
    triple: {
      major: 47,
      minor: 34
    },
    quadruple: {
      major: 40,
      minor: 22
    },
    celestial: {
      major: 22,
      minor: 22
    }
  },
  LEGGINGS: {
    triple: {
      major: 94,
      minor: 67
    },
    quadruple: {
      major: 81,
      minor: 44
    },
    celestial: {
      major: 44,
      minor: 44
    }
  },
  BOOTS: {
    triple: {
      major: 47,
      minor: 34
    },
    quadruple: {
      major: 40,
      minor: 22
    },
    celestial: {
      major: 22,
      minor: 22
    }
  },
  AMULET: {
    triple: {
      major: 157,
      minor: 108
    },
    quadruple: {
      major: 133,
      minor: 71
    },
    celestial: {
      major: 72,
      minor: 72
    }
  },
  RING: {
    triple: {
      major: 126,
      minor: 85
    },
    quadruple: {
      major: 106,
      minor: 56
    },
    celestial: {
      major: 57,
      minor: 57
    }
  },
  ACCESSORY: {
    triple: {
      major: 110,
      minor: 74
    },
    quadruple: {
      major: 92,
      minor: 49
    },
    celestial: {
      major: 50,
      minor: 50
    }
  },
  BACK_ITEM: {
    triple: {
      major: 63,
      minor: 40
    },
    quadruple: {
      major: 52,
      minor: 27
    },
    celestial: {
      major: 28,
      minor: 28
    }
  },
  ONEHANDED_WEAPON: {
    triple: {
      major: 125,
      minor: 90
    },
    quadruple: {
      major: 108,
      minor: 59
    },
    celestial: {
      major: 59,
      minor: 59
    }
  },
  TWOHANDED_WEAPON: {
    triple: {
      major: 251,
      minor: 179
    },
    quadruple: {
      major: 215,
      minor: 118
    },
    celestial: {
      major: 118,
      minor: 118
    }
  }
});

const Slots = Object.freeze({
  'Dual wield': [
    {
      name: 'Helm',
      short: 'Helm',
      item: Item.HELM
    },
    {
      name: 'Shoulders',
      short: 'Shld',
      item: Item.SHOULDERS
    },
    {
      name: 'Coat',
      short: 'Coat',
      item: Item.CHEST
    },
    {
      name: 'Gloves',
      short: 'Glov',
      item: Item.GLOVES
    },
    {
      name: 'Leggings',
      short: 'Legs',
      item: Item.LEGGINGS
    },
    {
      name: 'Boots',
      short: 'Boot',
      item: Item.BOOTS
    },
    {
      name: 'Amulet',
      short: 'Amul',
      item: Item.AMULET
    },
    {
      name: 'Ring 1',
      short: 'Rng1',
      item: Item.RING
    },
    {
      name: 'Ring 2',
      short: 'Rng2',
      item: Item.RING
    },
    {
      name: 'Accessory 1',
      short: 'Acc1',
      item: Item.ACCESSORY
    },
    {
      name: 'Accessory 2',
      short: 'Acc2',
      item: Item.ACCESSORY
    },
    {
      name: 'Back Item',
      short: 'Back',
      item: Item.BACK_ITEM
    },
    {
      name: 'Mainhand',
      short: 'Wep1',
      item: Item.ONEHANDED_WEAPON
    },
    {
      name: 'Offhand',
      short: 'Wep2',
      item: Item.ONEHANDED_WEAPON
    }
  ],
  'Two-handed': [
    {
      name: 'Helm',
      short: 'Helm',
      item: Item.HELM
    },
    {
      name: 'Shoulders',
      short: 'Shld',
      item: Item.SHOULDERS
    },
    {
      name: 'Coat',
      short: 'Coat',
      item: Item.CHEST
    },
    {
      name: 'Gloves',
      short: 'Glov',
      item: Item.GLOVES
    },
    {
      name: 'Leggings',
      short: 'Legs',
      item: Item.LEGGINGS
    },
    {
      name: 'Boots',
      short: 'Boot',
      item: Item.BOOTS
    },
    {
      name: 'Amulet',
      short: 'Amul',
      item: Item.AMULET
    },
    {
      name: 'Ring 1',
      short: 'Rng1',
      item: Item.RING
    },
    {
      name: 'Ring 2',
      short: 'Rng2',
      item: Item.RING
    },
    {
      name: 'Accessory 1',
      short: 'Acc1',
      item: Item.ACCESSORY
    },
    {
      name: 'Accessory 2',
      short: 'Acc2',
      item: Item.ACCESSORY
    },
    {
      name: 'Back Item',
      short: 'Back',
      item: Item.BACK_ITEM
    },
    {
      name: 'Weapon',
      short: 'Weap',
      item: Item.TWOHANDED_WEAPON
    }
  ]
});

// used for forcing slots to a certain affix
const ForcedSlots = [
  'helm', // 0
  'shld', // 1
  'coat', // 2
  'glov', // 3
  'legs', // 4
  'boot', // 5
  'amul', // 6
  'rng1', // 7
  'rng2', // 8
  'acc1', // 9
  'acc2', // 10
  'back', // 11
  'wep1', // 12
  'wep2' // 13
];

const Health = Object.freeze({
  LOW: 1645,
  MEDIUM: 5922,
  HIGH: 9212
});

const Defense = Object.freeze({
  LIGHT: 967,
  MEDIUM: 1118,
  HEAVY: 1271
});

const Classes = Object.freeze({
  warrior: { health: Health.HIGH, defense: Defense.HEAVY },
  necromancer: { health: Health.HIGH, defense: Defense.LIGHT },
  revenant: { health: Health.MEDIUM, defense: Defense.HEAVY },
  engineer: { health: Health.MEDIUM, defense: Defense.MEDIUM },
  ranger: { health: Health.MEDIUM, defense: Defense.MEDIUM },
  mesmer: { health: Health.MEDIUM, defense: Defense.LIGHT },
  guardian: { health: Health.LOW, defense: Defense.HEAVY },
  thief: { health: Health.LOW, defense: Defense.MEDIUM },
  elementalist: { health: Health.LOW, defense: Defense.LIGHT }
});

const Condition = Object.freeze({
  Burning: {
    baseDamage: 131,
    factor: 0.155
  },
  Bleeding: {
    baseDamage: 22,
    factor: 0.06
  },
  Poison: {
    baseDamage: 33.5,
    factor: 0.06
  },
  Torment: {
    baseDamage: 31.8,
    factor: 0.09
  },
  Confusion: {
    baseDamage: 22,
    factor: 0.06
  }
});

const Attributes = Object.freeze({
  PRIMARY: [
    'Power',
    'Precision',
    'Toughness',
    'Vitality'
  ],

  SECONDARY: [
    'Ferocity',
    'Condition Damage',
    'Expertise',
    'Concentration',
    'Healing Power',
    'Agony Resistance'
  ],

  DERIVED: [
    'Critical Chance',
    'Critical Damage',
    'Condition Duration',
    'Boon Duration',
    'Health',
    'Armor'
  ],

  BOON_DURATION: [
    'Aegis Duration',
    'Fury Duration',
    'Might Duration',
    'Protection Duration',
    'Quickness Duration',
    'Regeneration Duration',
    'Resistance Duration',
    'Resolution Duration',
    'Retaliation Duration',
    'Stability Duration',
    'Swiftness Duration',
    'Vigor Duration'
  ],

  CONDITION_DURATION: [
    'Bleeding Duration',
    'Blind Duration',
    'Burning Duration',
    'Chilled Duration',
    'Confusion Duration',
    'Crippled Duration',
    'Fear Duration',
    'Immobile Duration',
    'Poison Duration',
    'Slow Duration',
    'Taunt Duration',
    'Torment Duration',
    'Vulnerability Duration',
    'Weakness Duration'
  ],

  CONDITION: Object.keys(Condition),

  CONDITION_DAMAGE: Object.keys(Condition)
    .map(condition => `${condition} Damage`),

  EFFECTIVE: [
    'Effective Power',
    'Effective Health',
    'Effective Healing'
  ],

  INDICATORS: [
    'Damage',
    'Survivability',
    'Healing'
  ]
});

const MAX_INFUSIONS = 18;
const INFUSION_BONUS = 5;

/**
 * ------------------------------------------------------------------------
 * Core Optimizer Logic
 * ------------------------------------------------------------------------
 */

let worstScoreContainer;
let insertCharacter;

let applyInfusionsFunction;

/**
 * A generator function that iterates synchronously through all possible builds, calling
 *  insertCharacter(character)
 * on each character. Yields periodically to allow UI to be updated or cancelled.
 *
 * @param {Object} input
 * @param {Object[]} input.modifiers - array of modifier objects
 * @param {String[]} input.tags - array of HTML tags representing modifiers
 * @param {String} input.profession
 * @param {String} input.weapontype
 * @param {String[]} input.affixes - all selected gear affixes to iterate over
 * @param {String[]} input.forcedAffixes - array of '' or specific affix names
 * @param {String} input.rankby - "Damage"/"Survivability"/"Healing"
 * @param {Number} input.minBoonDuration
 * @param {Number} input.minHealingPower
 * @param {Number} input.minToughness
 * @param {Number} input.maxToughness
 * @param {Number} input.maxResults
 * @param {?String} input.primaryInfusion
 * @param {?String} input.secondaryInfusionInput
 * @param {?Number} input.primaryMaxInfusions
 * @param {?Number} input.secondaryMaxInfusions
 * @param {Object.<String, Number>} input.distribution
 * @param {String[]} input.relevantConditions - I should remove this tbh
 *
 * @param {Function} insertCharacterFunction
 *
 * @yields {(Object|Number)} - settings object on the first next() call (to set initial UI);
 *                             subsequently the progress percentage
 */
export function * calculate (input, insertCharacterFunction, worstScoreContainerInput) {
  insertCharacter = insertCharacterFunction;
  worstScoreContainer = worstScoreContainerInput;

  const {
    modifiers: modifiersInput,
    primaryInfusion: primaryInfusionInput,
    secondaryInfusion: secondaryInfusionInput,
    primaryMaxInfusions: primaryMaxInfusionsInput,
    secondaryMaxInfusions: secondaryMaxInfusionsInput,
    infusionNoDuplicates,
    ...others
  } = input;

  const settings = { ...others };
  console.debug('settings:', settings);

  /* Base Attributes */

  settings.baseAttributes = {};
  settings.baseAttributes.Health = Classes[settings.profession].health;
  settings.baseAttributes.Armor = Classes[settings.profession].defense;

  for (const attribute of Attributes.PRIMARY) {
    settings.baseAttributes[attribute] = 1000;
  }
  for (const attribute of Attributes.SECONDARY) {
    settings.baseAttributes[attribute] = 0;
  }

  settings.baseAttributes['Condition Duration'] = 0;
  settings.baseAttributes['Boon Duration'] = 0;
  settings.baseAttributes['Critical Chance'] = 5;
  settings.baseAttributes['Critical Damage'] = 150;

  /* Modifiers */

  settings.modifiers = {
    multiplier: {
      'Effective Power': 1,
      'Effective Condition Damage': 1,
      'Effective Health': 1,
      'Effective Healing': 1,
      'Critical Damage': 1
    },
    flat: {},
    buff: {},
    convert: {}
  };
  let addEffectiveConditionDamage = 0;
  let addEffectivePower = 0;
  let targetEffectiveConditionDamage = 0;
  let targetEffectivePower = 0;

  const validMultiplierStats = [
    ...Attributes.EFFECTIVE,
    'Effective Condition Damage',

    // Additive mods e.g. force sigil + frost spirit are additive with each other
    'add: Effective Condition Damage',
    'add: Effective Power',

    // Vulnerability and exposed are additive with each other
    'target: Effective Condition Damage',
    'target: Effective Power',
    'Critical Damage',
    ...Attributes.CONDITION_DAMAGE
  ];
  const validFlatStats = [
    ...Attributes.PRIMARY,
    ...Attributes.SECONDARY,
    ...Attributes.DERIVED,
    ...Attributes.BOON_DURATION,
    ...Attributes.CONDITION_DURATION
  ];
  const validBuffStats = [
    ...Attributes.PRIMARY,
    ...Attributes.SECONDARY,
    ...Attributes.DERIVED,
    ...Attributes.BOON_DURATION,
    ...Attributes.CONDITION_DURATION
  ];
  const validConvertStats = [
    ...Attributes.PRIMARY,
    ...Attributes.SECONDARY
  ];

  $.each(modifiersInput, function (index, modifiers) {
    if (!modifiers) {
      return;
    }
    $.each(modifiers, function (type, modifier) {
      if (type && modifier !== undefined) {
        if (type === 'bountiful-maintenance-oil') {
          settings.modifiers[type] = modifier;
        } else {
          $.each(modifier, function (attribute, value) {
            if (attribute && value) {
              switch (type) {
                case 'multiplier':
                  if (validMultiplierStats.includes(attribute)) {
                    if (attribute === 'add: Effective Condition Damage') {
                      addEffectiveConditionDamage += value;
                    } else if (attribute === 'add: Effective Power') {
                      addEffectivePower += value;
                    } else if (attribute === 'target: Effective Condition Damage') {
                      targetEffectiveConditionDamage += value;
                    } else if (attribute === 'target: Effective Power') {
                      targetEffectivePower += value;
                    } else if (!settings.modifiers[type][attribute]) {
                      settings.modifiers['multiplier'][attribute] = 1 + value;
                    } else {
                      settings.modifiers['multiplier'][attribute] *= (1 + value);
                    }
                  } else {
                    throw new Error(
                      'Multipliers can only modify primary, secondary or '
                      + 'effective attributes, not ' + attribute
                    );
                  }
                  break;
                case 'flat':
                  if (validFlatStats.includes(attribute)) {
                    settings.baseAttributes[attribute]
                    = (settings.baseAttributes[attribute] || 0) + value;
                  } else {
                    throw new Error(
                      'Flat modifiers can only increase primary, secondary or '
                      + 'derived attributes, not ' + attribute
                    );
                  }
                  break;
                case 'buff':
                  if (validBuffStats.includes(attribute)) {
                    settings.modifiers['buff'][attribute]
                    = (settings.modifiers['buff'][attribute] || 0) + value;
                  } else {
                    throw new Error(
                      'Buff modifiers can only increase primary, secondary or '
                      + 'derived attributes, not ' + attribute
                    );
                  }
                  break;
                case 'convert':
                  if (validConvertStats.includes(attribute)) {
                    if (!settings.modifiers['convert'][attribute]) {
                      settings.modifiers['convert'][attribute] = {};
                    }

                    $.each(value, function (source, conversion) {
                      settings.modifiers['convert'][attribute][source]
                        = (settings.modifiers['convert'][attribute][source] || 0) + conversion;
                    });
                  } else {
                    throw new Error(
                      'Conversions can only modify primary or secondary attributes, not '
                      + attribute);
                  }
                  break;
                // no default
              }
            }
          });
        }
      }
    });
  });
  settings.modifiers['multiplier']['Effective Condition Damage']
    *= (1 + addEffectiveConditionDamage);
  settings.modifiers['multiplier']['Effective Power']
    *= (1 + addEffectivePower);
  settings.modifiers['multiplier']['Effective Condition Damage']
    *= (1 + targetEffectiveConditionDamage);
  settings.modifiers['multiplier']['Effective Power']
    *= (1 + targetEffectivePower);

  /* Infusions */

  const validInfusionStats = [
    ...Attributes.PRIMARY,
    ...Attributes.SECONDARY,
    ...Attributes.DERIVED
  ];

  let activeInfusions = 0;
  if (primaryInfusionInput !== 'None') {
    if (validInfusionStats.includes(primaryInfusionInput)) {
      activeInfusions++;
      settings.primaryInfusion = primaryInfusionInput;
      settings.primaryMaxInfusions = primaryMaxInfusionsInput;
    } else {
      throw new Error(
        'Primary infusion can only increase primary, secondary or derived attributes, not '
        + primaryInfusionInput);
    }
  }
  if (secondaryInfusionInput !== 'None' && secondaryInfusionInput !== primaryInfusionInput) {
    if (validInfusionStats.includes(secondaryInfusionInput)) {
      activeInfusions++;
      if (activeInfusions === 2) {
        settings.secondaryInfusion = secondaryInfusionInput;
        settings.secondaryMaxInfusions = secondaryMaxInfusionsInput;
      } else {
        // only secondary is selected; pretend secondary is primary
        settings.primaryInfusion = secondaryInfusionInput;
        settings.primaryMaxInfusions = secondaryMaxInfusionsInput;
      }
    } else {
      throw new Error('Secondary infusion can only increase '
        + 'primary, secondary or derived attributes, not '
        + secondaryInfusionInput);
    }
  }

  let infusionMode;
  switch (activeInfusions) {
    case 0:
      infusionMode = 'None';
      break;
    case 1:
      infusionMode = 'Primary';
      break;
    case 2:
      if (settings.primaryMaxInfusions + settings.secondaryMaxInfusions <= MAX_INFUSIONS) {
        infusionMode = 'Few';
      } else {
        infusionMode = infusionNoDuplicates
          ? 'SecondaryNoDuplicates'
          : 'Secondary';
      }
    // no default
  }
  if (applyInfusions[infusionMode] === undefined) {
    throw new Error(
      'Error: optimizer selected invalid infusion calculation mode: ' + infusionMode
    );
  }
  applyInfusionsFunction = applyInfusions[infusionMode];

  /* Equipment */

  settings.slots = Slots[settings.weapontype];

  // affixesArray: valid affixes for each slot, taking forced slots into account
  // e.g. [[Berserker, Assassin], [Assassin], [Berserker, Assassin]...]
  settings.affixesArray = new Array(settings.slots.length).fill(settings.affixes);

  settings.forcedArmor = false;
  settings.forcedRing = false;
  settings.forcedAcc = false;
  settings.forcedWep = false;
  for (let i = 0; i < settings.forcedAffixes.length; i++) {
    const inputValue = settings.forcedAffixes[i];
    if (!inputValue) {
      continue;
    }
    for (const affix of settings.affixes) {
      if (affix.toLowerCase().startsWith(inputValue.toLowerCase())) {
        settings.affixesArray[i] = [affix];
        if (['shld', 'glov', 'boot'].includes(ForcedSlots[i])) {
          settings.forcedArmor = true;
        } else if (['rng1', 'rng2'].includes(ForcedSlots[i])) {
          settings.forcedRing = true;
        } else if (['acc1', 'acc2'].includes(ForcedSlots[i])) {
          settings.forcedAcc = true;
        } else if (['wep1', 'wep2'].includes(ForcedSlots[i])) {
          settings.forcedWep = true;
        }
        break;
      }
    }
  }

  // rearrange affixes so you don't always start with e.g. full berserker. Example:
  // [vipe sini grie] helm
  // [grie vipe sini] shld
  // [sini grie vipe] coat
  // [vipe]           glov (forced to viper)
  // [grie vipe sini] legs
  // ...
  settings.affixesArray = settings.affixesArray.map((affixes, slotindex) => {
    if (affixes.length === 1) return affixes;
    return affixes.reduce((newAffixes, affix, i) => {
      newAffixes[(i + slotindex) % affixes.length] = affix;
      return newAffixes;
    }, []);
  });
  // console.log(settings.affixesArray.map(item => item.toString()));

  // like affixesArray, but each entry is an array of arrays of stats given by that piece with
  // that affix
  // e.g. berserker helm -> [[Power, 63],[Precision, 45],[Ferocity, 45]]
  settings.affixStatsArray = settings.affixesArray.map((possibleAffixes, slotindex) => {
    return possibleAffixes.map(affix => {
      const statTotals = {};
      $.each(
        settings.slots[slotindex].item[Affix[affix].type],
        function (type, bonus) {
          for (const stat of Affix[affix].bonuses[type]) {
            statTotals[stat] = (statTotals[stat] || 0) + bonus;
          }
        }
      );
      return Object.entries(statTotals);
    });
  });

  // used to keep the progress counter in sync when skipping identical gear combinations.
  settings.runsAfterThisSlot = [];
  for (let i = 0; i < settings.affixesArray.length; i++) {
    let counter = 1;
    for (let j = i; j < settings.affixesArray.length; j++) {
      counter *= settings.affixesArray[j].length;
    }
    settings.runsAfterThisSlot.push(counter);
  }
  settings.runsAfterThisSlot.push(1);

  /* Set up optimizer */

  // const freeSlots = settings.weapontype === 'Dual wield' ? 5 : 6;
  // const pairs = settings.weapontype === 'Dual wield' ? 3 : 2;
  // const triplets = 1;
  // calculationTotal
  //   = Math.pow(settings.affixes.length, freeSlots)
  //   * Math.pow(settings.affixes.length + _choose(settings.affixes.length, 2), pairs)
  //   * (settings.affixes.length
  //     + settings.affixes.length * (settings.affixes.length - triplets)
  //     + _choose(settings.affixes.length, 3));

  // function _choose (n, k) {
  //   let num = 1;
  //   let denom = 1;

  //   for (let i = 0; i < k; i++) {
  //     num *= (n - i);
  //     denom *= (i + 1);
  //   }

  //   return num / denom;
  // }

  let calculationTotal = 1;
  for (let i = 0; i < settings.affixesArray.length; i++) {
    calculationTotal *= settings.affixesArray[i].length;
  }
  let calculationRuns = 0;

  settings.condiResultCache = new Map();
  const calculationQueue = [];
  calculationQueue.push([]);
  const calculationStatsQueue = [];
  calculationStatsQueue.push({});

  yield settings;

  let iterationTimer = Date.now();
  let UPDATE_MS = 90;
  let cycles = 0;
  while (calculationQueue.length) {
    cycles++;

    // pause to update UI at around 15 frames per second
    if ((cycles % 1000 === 0) && Date.now() - iterationTimer > UPDATE_MS) {
      yield Math.floor((calculationRuns * 100) / calculationTotal);
      UPDATE_MS = 55;
      iterationTimer = Date.now();
    }

    const gear = calculationQueue.pop();
    const gearStats = calculationStatsQueue.pop();
    const nextSlot = gear.length;

    /**
     * Deduplicate identical combinations.
     *
     * This prevents calculating both e.g.
     *    berserker ring + assassin ring
     *    assassin ring + berserker ring
     * by skipping combinations in which identical-stat items are out of order.
     *
     * Each check is disabled if forcing one or more of those slots to a specific gear type.
     */
    if (
      (!settings.forcedRing && nextSlot === 9 && gear[nextSlot - 2] > gear[nextSlot - 1])
      || (!settings.forcedAcc && nextSlot === 11 && gear[nextSlot - 2] > gear[nextSlot - 1])
      || (!settings.forcedWep && nextSlot === 14 && gear[nextSlot - 2] > gear[nextSlot - 1])
      || (!settings.forcedArmor && nextSlot === 6 && (gear[1] > gear[3] || gear[3] > gear[5]))
    ) {
      // bump calculationRuns by the number of runs we just skipped
      calculationRuns += settings.runsAfterThisSlot[nextSlot];
      continue;
    }

    if (nextSlot >= settings.slots.length) {
      calculationRuns++;
      testCharacter(gear, gearStats, settings);
      continue;
    }

    // Recycle for Affix 0, clone for 1+
    for (let i = 1; i < settings.affixesArray[nextSlot].length; i++) {
      const newGear = gear.slice();
      const newGearStats = Object.assign({}, gearStats);

      const currentAffix = settings.affixesArray[nextSlot][i];
      newGear[nextSlot] = currentAffix;

      // add gear stats
      for (const [stat, bonus] of settings.affixStatsArray[nextSlot][i]) {
        newGearStats[stat] = (newGearStats[stat] || 0) + bonus;
      }

      calculationQueue.push(newGear);
      calculationStatsQueue.push(newGearStats);
    }
    const currentAffix = settings.affixesArray[nextSlot][0];
    gear[nextSlot] = currentAffix;

    // add gear stats
    for (const [stat, bonus] of settings.affixStatsArray[nextSlot][0]) {
      gearStats[stat] = (gearStats[stat] || 0) + bonus;
    }

    calculationQueue.push(gear);
    calculationStatsQueue.push(gearStats);
  }
  return Math.floor((calculationRuns * 100) / calculationTotal);
}

function testCharacter (gear, gearStats, settings) {
  if (!gear) {
    return;
  }

  const character = {
    gear, // passed by reference
    settings, // passed by reference
    gearStats, // passed by reference
    attributes: null,
    valid: true,
    baseAttributes: Object.assign({}, settings.baseAttributes)
  };

  // apply gear
  // eslint-disable-next-line guard-for-in
  for (const stat in gearStats) {
    character.baseAttributes[stat] += gearStats[stat];
  }

  // applyInfusionsFunction is aliased to the correct applyInfusions[mode] function during setup
  applyInfusionsFunction(character);
}

function addBaseStats (character, stat, amount) {
  character.baseAttributes[stat] = (character.baseAttributes[stat] || 0) + amount;
}

const applyInfusions = {};

// Applies no infusions
applyInfusions['None'] = function (character) {
  updateAttributesFast(character);
  insertCharacter(character);
};

// Just applies the primary infusion
applyInfusions['Primary'] = function (character) {
  const { settings } = character;
  character.infusions = { [settings.primaryInfusion]: settings.primaryMaxInfusions };
  addBaseStats(
    character,
    settings.primaryInfusion,
    settings.primaryMaxInfusions * INFUSION_BONUS
  );
  updateAttributesFast(character);
  insertCharacter(character);
};

// Just applies the maximum number of primary/secondary infusions, since the total is ≤18
applyInfusions['Few'] = function (character) {
  const { settings } = character;

  character.infusions = {
    [settings.primaryInfusion]: settings.primaryMaxInfusions,
    [settings.secondaryInfusion]: settings.secondaryMaxInfusions
  };
  addBaseStats(
    character,
    settings.primaryInfusion,
    settings.primaryMaxInfusions * INFUSION_BONUS
  );
  addBaseStats(
    character,
    settings.secondaryInfusion,
    settings.secondaryMaxInfusions * INFUSION_BONUS
  );
  updateAttributesFast(character);
  insertCharacter(character);
};

// Inserts every valid combination of 18 infusions
applyInfusions['Secondary'] = function (character) {
  const { settings } = character;

  const testInfusionUsefulness = function () {
    const temp = clone(character);
    addBaseStats(temp, settings.primaryInfusion, MAX_INFUSIONS * INFUSION_BONUS);
    addBaseStats(temp, settings.secondaryInfusion, MAX_INFUSIONS * INFUSION_BONUS);
    updateAttributesFast(temp, true);
    return temp.attributes[settings.rankby] > worstScoreContainer.value;
  };

  if (!worstScoreContainer.value || testInfusionUsefulness()) {
    let previousResult;

    let primaryCount = settings.primaryMaxInfusions;
    let secondaryCount = MAX_INFUSIONS - primaryCount;
    while (secondaryCount <= settings.secondaryMaxInfusions) {
      const temp = clone(character);
      addBaseStats(
        temp,
        settings.primaryInfusion,
        primaryCount * INFUSION_BONUS);
      addBaseStats(
        temp,
        settings.secondaryInfusion,
        secondaryCount * INFUSION_BONUS
      );
      updateAttributesFast(temp);
      if (temp.valid && temp.attributes[settings.rankby] !== previousResult) {
        temp.infusions = {
          [settings.primaryInfusion]: primaryCount,
          [settings.secondaryInfusion]: secondaryCount
        };
        insertCharacter(temp);
        previousResult = temp.attributes[settings.rankby];
      }
      primaryCount--;
      secondaryCount++;
    }
  }
};

// Tests every valid combination of 18 infusions and inserts the best result
applyInfusions['SecondaryNoDuplicates'] = function (character) {
  const { settings } = character;

  const testInfusionUsefulness = function () {
    const temp = clone(character);
    addBaseStats(temp, settings.primaryInfusion, MAX_INFUSIONS * INFUSION_BONUS);
    addBaseStats(temp, settings.secondaryInfusion, MAX_INFUSIONS * INFUSION_BONUS);
    updateAttributesFast(temp, true);
    return temp.attributes[settings.rankby] > worstScoreContainer.value;
  };

  if (!worstScoreContainer.value || testInfusionUsefulness()) {
    let best = null;

    let primaryCount = settings.primaryMaxInfusions;
    let secondaryCount = MAX_INFUSIONS - primaryCount;
    while (secondaryCount <= settings.secondaryMaxInfusions) {
      const temp = clone(character);
      addBaseStats(
        temp,
        settings.primaryInfusion,
        primaryCount * INFUSION_BONUS
      );
      addBaseStats(
        temp,
        settings.secondaryInfusion,
        secondaryCount * INFUSION_BONUS
      );
      updateAttributesFast(temp);
      if (temp.valid) {
        temp.infusions = {
          [settings.primaryInfusion]: primaryCount,
          [settings.secondaryInfusion]: secondaryCount
        };
        if (!best || characterLT(best, temp)) {
          best = temp;
        }
      }
      primaryCount--;
      secondaryCount++;
    }
    if (best) {
      insertCharacter(best);
    }
  }
};

// returns true if B is better than A
export function characterLT (a, b) {
  const { settings } = a;

  // if (!a.valid && b.valid) {
  //     // A is invalid, B is valid -> replace A
  //     return true;
  // } else if (!b.valid) {
  //     // B is invalid -> do not replace A
  //     return false;
  // }

  if (a.attributes[settings.rankby] === b.attributes[settings.rankby]) {
    let sumA = 0;
    let sumB = 0;
    for (const attribute of Attributes.PRIMARY.concat(Attributes.SECONDARY)) {
      sumA += a.attributes[attribute] || 0;
      sumB += b.attributes[attribute] || 0;
    }

    return sumA < sumB;
  }

  return a.attributes[settings.rankby] < b.attributes[settings.rankby];
}

/**
 * Rounds, tie-breaking exact halves to the nearest even integer. Apparently used by GW2
 * conversions according to ingame testing by Cat.
 * https://discord.com/channels/301270513093967872/842629146857177098/864564894128275468
 *
 * @param {number} any number
 * @returns {number} the input number rounded to the nearest integer
 */
const roundEven = number => {
  if (number % 1 === 0.5) {
    const floor = Math.floor(number);
    if (floor % 2 === 0) {
      return floor;
    }
    return floor + 1;
  }
  return Math.round(number);
};

/**
 * Creates an {attributes} object parameter in the given character object and fills it with
 * calculated stats and damage/healing/survivability scores.
 *
 * @param {Object} _character
 */
export function updateAttributes (_character) {
  const multipliers = _character.settings.modifiers['multiplier'];
  _character.valid = true;

  calcStats(_character);

  const powerDamageScore = calcPower(_character, multipliers);
  const condiDamageScore = calcCondi(_character, multipliers, Attributes.CONDITION);
  _character.attributes['Damage'] = powerDamageScore + condiDamageScore;

  calcSurvivability(_character, multipliers);
  calcHealing(_character, multipliers);
}

/**
 * Creates an {attributes} object parameter in the given character object and does the minimum
 * calculation to find the optimal build, including cancelling itself early if the character's
 * boon duration/toughness/healing power are not valid according to the optimizer settings.
 *
 * @param {Object} _character
 * @param {boolean} [skipValidation] - skips the validation check if true
 */
function updateAttributesFast (_character, skipValidation = false) {
  const { settings } = _character;
  const multipliers = settings.modifiers['multiplier'];
  _character.valid = true;

  calcStats(_character);
  const { attributes } = _character;

  if (!skipValidation && checkInvalid(_character)) {
    return false;
  }

  switch (settings.rankby) {
    case 'Damage':
      const powerDamageScore = calcPower(_character, multipliers);

      // cache condi result based on cdmg and expertise
      let condiDamageScore = 0;
      if (settings.relevantConditions.length) {
        const CONDI_CACHE_ID = attributes['Expertise'] + attributes['Condition Damage'] * 10000;
        condiDamageScore
          = settings.condiResultCache.get(CONDI_CACHE_ID)
            || calcCondi(_character, multipliers, settings.relevantConditions);
        settings.condiResultCache.set(CONDI_CACHE_ID, condiDamageScore);
      }
      attributes['Damage'] = powerDamageScore + condiDamageScore;
      break;
    case 'Survivability':
      calcSurvivability(_character, multipliers);
      break;
    case 'Healing':
      calcHealing(_character, multipliers);
      break;
      // no default
  }
  return true;
}

function calcStats (_character) {
  _character.attributes = Object.assign({}, _character.baseAttributes);
  const { attributes } = _character;

  $.each(_character.settings.modifiers['convert'], function (attribute, conversion) {
    $.each(conversion, function (source, percent) {
      attributes[attribute] += roundEven(
        _character.baseAttributes[source] * percent
      );
    });
  });

  $.each(_character.settings.modifiers['buff'], function (attribute, bonus) {
    attributes[attribute] = (attributes[attribute] || 0) + bonus;
  });

  attributes['Boon Duration'] += attributes['Concentration'] / 15;
}

function checkInvalid (_character) {
  const { settings, attributes } = _character;

  const invalid
    = (settings.minBoonDuration && attributes['Boon Duration'] < settings.minBoonDuration)
      || (settings.minHealingPower && attributes['Healing Power'] < settings.minHealingPower)
      || (settings.minToughness && attributes['Toughness'] < settings.minToughness)
      || (settings.maxToughness && attributes['Toughness'] > settings.maxToughness);
  if (invalid) {
    _character.valid = false;
  }
  return invalid;
}

function calcPower (_character, multipliers) {
  const { attributes } = _character;

  attributes['Critical Chance'] += (attributes['Precision'] - 1000) / 21;
  attributes['Critical Damage'] += attributes['Ferocity'] / 15;

  const critDmg = attributes['Critical Damage'] / 100 * multipliers['Critical Damage'];
  const critChance = Math.min(attributes['Critical Chance'] / 100, 1);

  attributes['Effective Power'] = attributes['Power'] * (1 + critChance * (critDmg - 1))
    * multipliers['Effective Power'];

  return _character.settings.distribution['Power']
    * (attributes['Effective Power'] / 1025);
}

function calcCondi (_character, multipliers, relevantConditions) {
  const { attributes } = _character;

  attributes['Condition Duration'] += attributes['Expertise'] / 15;
  let condiDamageScore = 0;
  for (const condition of relevantConditions) {
    attributes[`${condition} Damage`]
      = ((Condition[condition].factor * attributes['Condition Damage'])
      + Condition[condition].baseDamage)
        * multipliers['Effective Condition Damage']
        * (multipliers[`${condition} Damage`] || 1);

    const duration = 1 + Math.min(((attributes[`${condition} Duration`] || 0)
        + attributes['Condition Duration']) / 100, 1);

    condiDamageScore += _character.settings.distribution[condition]
      * duration
      * (attributes[`${condition} Damage`] || 1)
      / Condition[condition].baseDamage;
  }
  return condiDamageScore;
}

function calcSurvivability (_character, multipliers) {
  const { attributes } = _character;

  attributes['Armor'] += attributes['Toughness'];
  attributes['Health'] += attributes['Vitality'] * 10;

  attributes['Effective Health'] = attributes['Health'] * attributes['Armor']
      * multipliers['Effective Health'];
  attributes['Survivability'] = attributes['Effective Health'] / 1967;
}

function calcHealing (_character, multipliers) {
  const { attributes } = _character;

  // reasonably representative skill: druid celestial avatar 4 pulse
  // 390 base, 0.3 coefficient
  attributes['Effective Healing'] = (attributes['Healing Power'] * 0.3 + 390)
      * multipliers['Effective Healing'];
  if (
    Object.prototype.hasOwnProperty.call(
      _character.settings.modifiers,
      'bountiful-maintenance-oil'
    )
  ) {
    const bonus
      = ((attributes['Healing Power'] || 0) * 0.6) / 10000
      + ((attributes['Concentration'] || 0) * 0.8) / 10000;
    if (bonus) {
      attributes['Effective Healing'] *= 1.0 + bonus;
    }
  }
  attributes['Healing'] = attributes['Effective Healing'];
}

/**
 * Clones a character. baseAttributes is cloned by value, so it can be mutated. Please
 * don't directly mutate character.attributes; it's passed by reference so the clone shares
 * the old one until upateAttributes is called on it.
 *
 * @param {Object} character
 * @returns {Object} character
 */
export function clone (character) {
  return {
    settings: character.settings, // passed by reference
    attributes: character.attributes, // passed by reference
    gear: character.gear, // passed by reference
    gearStats: character.gearStats, // passed by reference
    valid: character.valid,

    baseAttributes: Object.assign({}, character.baseAttributes),
    infusions: Object.assign({}, character.infusions)
  };
}
