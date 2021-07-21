/**
 * ------------------------------------------------------------------------
 * GW2 Data
 * ------------------------------------------------------------------------
 */

export const Affix = {
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
};

export const Item = {
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
};

export const Slots = {
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
};

// used for forcing slots to a certain affix
export const ForcedSlots = [
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

export const Omnipotion = {
  // Re: condi dmg from omnipot
  // https://discordapp.com/channels/301270513093967872/370538919118503947/716949463423516713
  multiplier: {
    'Effective Power': 0.15,
    'add: Effective Condition Damage': 0.15, // stacks additively
    'Effective Health': 0.25
  },
  convert: {
    Precision: {
      'Agony Resistance': 1.5
    },
    Toughness: {
      'Agony Resistance': 1.5
    },
    Concentration: {
      'Agony Resistance': 1.5
    },
    'Condition Damage': {
      'Condition Damage': 0.15 // undocumented condition damage stat bonus
    }
  }
};

export const Health = {
  LOW: 1645,
  MEDIUM: 5922,
  HIGH: 9212
};

export const Defense = {
  LIGHT: 967,
  MEDIUM: 1118,
  HEAVY: 1271
};

// eslint-disable-next-line no-unused-vars
export const Classes = {
  warrior: { health: Health.HIGH, defense: Defense.HEAVY },
  necromancer: { health: Health.HIGH, defense: Defense.LIGHT },
  revenant: { health: Health.MEDIUM, defense: Defense.HEAVY },
  engineer: { health: Health.MEDIUM, defense: Defense.MEDIUM },
  ranger: { health: Health.MEDIUM, defense: Defense.MEDIUM },
  mesmer: { health: Health.MEDIUM, defense: Defense.LIGHT },
  guardian: { health: Health.LOW, defense: Defense.HEAVY },
  thief: { health: Health.LOW, defense: Defense.MEDIUM },
  elementalist: { health: Health.LOW, defense: Defense.LIGHT }
};

export const Condition = {
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
};

export const Attributes = {
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
};

export const MAX_INFUSIONS = 18;
export const INFUSION_BONUS = 5;
