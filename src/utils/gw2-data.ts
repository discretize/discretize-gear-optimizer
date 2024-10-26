/**
 * ------------------------------------------------------------------------
 * GW2 Data
 * ------------------------------------------------------------------------
 */

const objectKeys = Object.keys as <Type extends object>(value: Type) => (keyof Type)[];

export type AffixName =
  | 'Berserker'
  | 'Assassin'
  | 'Harrier'
  | 'Commander'
  | 'Minstrel'
  | 'Magi'
  | 'Marauder'
  | 'Cleric'
  | 'Nomad'
  | 'Zealot'
  | 'Viper'
  | 'Sinister'
  | 'Grieving'
  | 'Seraph'
  | 'Marshal'
  | 'Giver'
  | 'Knight'
  | 'Trailblazer'
  | 'Plaguedoctor'
  | 'Carrion'
  | 'Rabid'
  | 'Dire'
  | 'Vigilant'
  | 'Valkyrie'
  | 'Cavalier'
  | 'Celestial'
  | 'Diviner'
  | 'Soldier'
  | 'Sentinel'
  | 'Wanderer'
  | 'Apothecary'
  | 'Shaman'
  | 'Crusader'
  | 'Rampager'
  | 'Settler'
  | 'Bringer'
  | 'Ritualist'
  | 'Dragon'
  | 'BerserkerValkyrie'
  | 'RabidApothecary'
  | 'DireRabid'
  | 'Custom';

export type AffixDataEntry =
  | {
      type: 'triple' | 'quadruple';
      category: string;
      bonuses: {
        major: GearAttributeName[];
        minor: GearAttributeName[];
      };
      wvwBonuses?: {
        major: GearAttributeName[];
        minor: GearAttributeName[];
      };
    }
  | {
      type: 'celestial';
      category: string;
      bonuses: {
        minor: GearAttributeName[];
        exoticJewel: GearAttributeName[];
      };
      wvwBonuses?: {
        minor: GearAttributeName[];
        exoticJewel: GearAttributeName[];
      };
    }
  | {
      type: 'ascendedMismatchedTrinket';
      category: string;
      bonuses: {
        major: GearAttributeName[];
        minor: GearAttributeName[];
        jewelMajor: GearAttributeName[];
        jewelMinor: GearAttributeName[];
      };
      wvwBonuses?: {
        major: GearAttributeName[];
        minor: GearAttributeName[];
        jewelMajor: GearAttributeName[];
        jewelMinor: GearAttributeName[];
      };
    };

/*
type Stats = Record<
  string,
  {
    triple: {
      major: number;
      minor: number;
    };
    quadruple: {
      major: number;
      minor: number;
    };
    celestial: {
      minor: number;
      exoticJewel: number;
    };
    ascendedMismatchedTrinket: {
      major: number;
      minor: number;
      jewelMajor: number;
      jewelMinor: number;
    };
  }
>;
*/

// referenced in discretize.eu-rewrite
export const Affix: Record<AffixName, AffixDataEntry> = {
  Custom: {
    type: 'triple',
    category: 'Custom',
    bonuses: {
      major: [],
      minor: [],
    },
  },
  Berserker: {
    type: 'triple',
    category: 'Power DPS',
    bonuses: {
      major: ['Power'],
      minor: ['Precision', 'Ferocity'],
    },
  },
  Assassin: {
    type: 'triple',
    category: 'Power DPS',
    bonuses: {
      major: ['Precision'],
      minor: ['Power', 'Ferocity'],
    },
  },
  Harrier: {
    type: 'triple',
    category: 'Support',
    bonuses: {
      major: ['Power'],
      minor: ['Concentration', 'Healing Power'],
    },
  },
  Commander: {
    type: 'quadruple',
    category: 'Support',
    bonuses: {
      major: ['Power', 'Precision'],
      minor: ['Toughness', 'Concentration'],
    },
  },
  Minstrel: {
    type: 'quadruple',
    category: 'Support',
    bonuses: {
      major: ['Toughness', 'Healing Power'],
      minor: ['Vitality', 'Concentration'],
    },
  },
  Magi: {
    type: 'triple',
    category: 'Support',
    bonuses: {
      major: ['Healing Power'],
      minor: ['Vitality', 'Precision'],
    },
  },
  Marauder: {
    type: 'quadruple',
    category: 'Open World',
    bonuses: {
      major: ['Power', 'Precision'],
      minor: ['Vitality', 'Ferocity'],
    },
  },
  Cleric: {
    type: 'triple',
    category: 'Support',
    bonuses: {
      major: ['Healing Power'],
      minor: ['Power', 'Toughness'],
    },
  },
  Nomad: {
    type: 'triple',
    category: 'Open World',
    bonuses: {
      major: ['Toughness'],
      minor: ['Vitality', 'Healing Power'],
    },
  },
  Zealot: {
    type: 'triple',
    category: 'Hybrid',
    bonuses: {
      major: ['Power'],
      minor: ['Precision', 'Healing Power'],
    },
  },
  Viper: {
    type: 'quadruple',
    category: 'Condi DPS',
    bonuses: {
      major: ['Power', 'Condition Damage'],
      minor: ['Precision', 'Expertise'],
    },
  },
  Sinister: {
    type: 'triple',
    category: 'Condi DPS',
    bonuses: {
      major: ['Condition Damage'],
      minor: ['Power', 'Precision'],
    },
  },
  Grieving: {
    type: 'quadruple',
    category: 'Condi DPS',
    bonuses: {
      major: ['Power', 'Condition Damage'],
      minor: ['Precision', 'Ferocity'],
    },
  },
  Seraph: {
    type: 'quadruple',
    category: 'Hybrid',
    bonuses: {
      major: ['Precision', 'Condition Damage'],
      minor: ['Healing Power', 'Concentration'],
    },
  },
  Marshal: {
    type: 'quadruple',
    category: 'Open World',
    bonuses: {
      major: ['Power', 'Healing Power'],
      minor: ['Precision', 'Condition Damage'],
    },
  },
  Giver: {
    type: 'triple',
    category: 'Open World',
    bonuses: {
      major: ['Toughness'],
      minor: ['Healing Power', 'Concentration'],
    },
  },
  Knight: {
    type: 'triple',
    category: 'Open World',
    bonuses: {
      major: ['Toughness'],
      minor: ['Power', 'Precision'],
    },
  },
  Trailblazer: {
    type: 'quadruple',
    category: 'Open World',
    bonuses: {
      major: ['Toughness', 'Condition Damage'],
      minor: ['Vitality', 'Expertise'],
    },
  },
  Plaguedoctor: {
    type: 'quadruple',
    category: 'Open World',
    bonuses: {
      major: ['Vitality', 'Condition Damage'],
      minor: ['Healing Power', 'Concentration'],
    },
  },
  Carrion: {
    type: 'triple',
    category: 'Open World',
    bonuses: {
      major: ['Condition Damage'],
      minor: ['Power', 'Vitality'],
    },
  },
  Rabid: {
    type: 'triple',
    category: 'Open World',
    bonuses: {
      major: ['Condition Damage'],
      minor: ['Toughness', 'Precision'],
    },
  },
  Dire: {
    type: 'triple',
    category: 'Open World',
    bonuses: {
      major: ['Condition Damage'],
      minor: ['Toughness', 'Vitality'],
    },
  },
  Vigilant: {
    type: 'quadruple',
    category: 'Open World',
    bonuses: {
      major: ['Power', 'Toughness'],
      minor: ['Concentration', 'Expertise'],
    },
  },
  Valkyrie: {
    type: 'triple',
    category: 'Open World',
    bonuses: {
      major: ['Power'],
      minor: ['Vitality', 'Ferocity'],
    },
  },
  Cavalier: {
    type: 'triple',
    category: 'Open World',
    bonuses: {
      major: ['Toughness'],
      minor: ['Power', 'Ferocity'],
    },
  },
  Celestial: {
    type: 'celestial',
    category: 'Hybrid',
    bonuses: {
      minor: [
        'Power',
        'Precision',
        'Toughness',
        'Vitality',
        'Ferocity',
        'Condition Damage',
        'Expertise',
        'Concentration',
        'Healing Power',
      ],
      exoticJewel: [
        'Power',
        'Precision',
        'Toughness',
        'Vitality',
        'Ferocity',
        'Condition Damage',
        'Healing Power',
        // Exquisite Charged Quartz Jewel missing stats
      ],
    },
    wvwBonuses: {
      minor: [
        'Power',
        'Precision',
        'Toughness',
        'Vitality',
        'Ferocity',
        'Condition Damage',
        'Healing Power',
      ],
      exoticJewel: [
        'Power',
        'Precision',
        'Toughness',
        'Vitality',
        'Ferocity',
        'Condition Damage',
        'Healing Power',
      ],
    },
  },
  Diviner: {
    type: 'quadruple',
    category: 'Support',
    bonuses: {
      major: ['Power', 'Concentration'],
      minor: ['Precision', 'Ferocity'],
    },
  },
  Soldier: {
    type: 'triple',
    category: 'Open World',
    bonuses: {
      major: ['Power'],
      minor: ['Toughness', 'Vitality'],
    },
  },
  Sentinel: {
    type: 'triple',
    category: 'Open World',
    bonuses: {
      major: ['Vitality'],
      minor: ['Power', 'Toughness'],
    },
  },
  Wanderer: {
    type: 'quadruple',
    category: 'Open World',
    bonuses: {
      major: ['Power', 'Vitality'],
      minor: ['Toughness', 'Concentration'],
    },
  },
  Apothecary: {
    type: 'triple',
    category: 'Open World',
    bonuses: {
      major: ['Healing Power'],
      minor: ['Condition Damage', 'Toughness'],
    },
  },
  Shaman: {
    type: 'triple',
    category: 'Open World',
    bonuses: {
      major: ['Vitality'],
      minor: ['Condition Damage', 'Healing Power'],
    },
  },
  Crusader: {
    type: 'quadruple',
    category: 'Open World',
    bonuses: {
      major: ['Power', 'Toughness'],
      minor: ['Ferocity', 'Healing Power'],
    },
  },
  Rampager: {
    type: 'triple',
    category: 'Condi DPS',
    bonuses: {
      major: ['Precision'],
      minor: ['Condition Damage', 'Power'],
    },
  },
  Settler: {
    type: 'triple',
    category: 'Open World',
    bonuses: {
      major: ['Toughness'],
      minor: ['Condition Damage', 'Healing Power'],
    },
  },
  Bringer: {
    type: 'triple',
    category: 'Open World',
    bonuses: {
      major: ['Expertise'],
      minor: ['Precision', 'Vitality'],
    },
  },
  Ritualist: {
    type: 'quadruple',
    category: 'Hybrid',
    bonuses: {
      major: ['Condition Damage', 'Vitality'],
      minor: ['Concentration', 'Expertise'],
    },
  },
  Dragon: {
    type: 'quadruple',
    category: 'Power DPS',
    bonuses: {
      major: ['Power', 'Ferocity'],
      minor: ['Precision', 'Vitality'],
    },
  },
  BerserkerValkyrie: {
    type: 'ascendedMismatchedTrinket',
    category: 'Open World',
    bonuses: {
      major: ['Power'],
      minor: ['Precision', 'Ferocity'],
      jewelMajor: ['Power'],
      jewelMinor: ['Vitality', 'Ferocity'],
    },
  },
  RabidApothecary: {
    type: 'ascendedMismatchedTrinket',
    category: 'Open World',
    bonuses: {
      major: ['Condition Damage'],
      minor: ['Toughness', 'Precision'],
      jewelMajor: ['Healing Power'],
      jewelMinor: ['Condition Damage', 'Toughness'],
    },
  },
  DireRabid: {
    type: 'ascendedMismatchedTrinket',
    category: 'Open World',
    bonuses: {
      major: ['Condition Damage'],
      minor: ['Toughness', 'Vitality'],
      jewelMajor: ['Condition Damage'],
      jewelMinor: ['Toughness', 'Precision'],
    },
  },
};

export const exoticStats = {
  HELM: {
    triple: {
      major: 60,
      minor: 43,
    },
    quadruple: {
      major: 51,
      minor: 28,
    },
    celestial: {
      minor: 28,
      exoticJewel: 0,
    },
    ascendedMismatchedTrinket: {
      major: 0,
      minor: 0,
      jewelMajor: 0,
      jewelMinor: 0,
    },
  },
  SHOULDERS: {
    triple: {
      major: 45,
      minor: 32,
    },
    quadruple: {
      major: 38,
      minor: 21,
    },
    celestial: {
      minor: 21,
      exoticJewel: 0,
    },
    ascendedMismatchedTrinket: {
      major: 0,
      minor: 0,
      jewelMajor: 0,
      jewelMinor: 0,
    },
  },
  CHEST: {
    triple: {
      major: 134,
      minor: 96,
    },
    quadruple: {
      major: 115,
      minor: 63,
    },
    celestial: {
      minor: 63,
      exoticJewel: 0,
    },
    ascendedMismatchedTrinket: {
      major: 0,
      minor: 0,
      jewelMajor: 0,
      jewelMinor: 0,
    },
  },
  GLOVES: {
    triple: {
      major: 45,
      minor: 32,
    },
    quadruple: {
      major: 38,
      minor: 21,
    },
    celestial: {
      minor: 21,
      exoticJewel: 0,
    },
    ascendedMismatchedTrinket: {
      major: 0,
      minor: 0,
      jewelMajor: 0,
      jewelMinor: 0,
    },
  },
  LEGGINGS: {
    triple: {
      major: 90,
      minor: 64,
    },
    quadruple: {
      major: 77,
      minor: 42,
    },
    celestial: {
      minor: 42,
      exoticJewel: 0,
    },
    ascendedMismatchedTrinket: {
      major: 0,
      minor: 0,
      jewelMajor: 0,
      jewelMinor: 0,
    },
  },
  BOOTS: {
    triple: {
      major: 45,
      minor: 32,
    },
    quadruple: {
      major: 38,
      minor: 21,
    },
    celestial: {
      minor: 21,
      exoticJewel: 0,
    },
    ascendedMismatchedTrinket: {
      major: 0,
      minor: 0,
      jewelMajor: 0,
      jewelMinor: 0,
    },
  },
  AMULET: {
    triple: {
      major: 145,
      minor: 100,
    },
    quadruple: {
      major: 122,
      minor: 66,
    },
    celestial: {
      minor: 56,
      exoticJewel: 12,
    },
    ascendedMismatchedTrinket: {
      major: 0,
      minor: 0,
      jewelMajor: 0,
      jewelMinor: 0,
    },
  },
  RING: {
    triple: {
      major: 115,
      minor: 79,
    },
    quadruple: {
      major: 97,
      minor: 52,
    },
    celestial: {
      minor: 42,
      exoticJewel: 12,
    },
    ascendedMismatchedTrinket: {
      major: 0,
      minor: 0,
      jewelMajor: 0,
      jewelMinor: 0,
    },
  },
  ACCESSORY: {
    triple: {
      major: 100,
      minor: 68,
    },
    quadruple: {
      major: 84,
      minor: 45,
    },
    celestial: {
      minor: 35,
      exoticJewel: 12,
    },
    ascendedMismatchedTrinket: {
      major: 0,
      minor: 0,
      jewelMajor: 0,
      jewelMinor: 0,
    },
  },
  BACK_ITEM: {
    triple: {
      major: 55,
      minor: 36,
    },
    quadruple: {
      major: 46,
      minor: 24,
    },
    celestial: {
      minor: 14,
      exoticJewel: 12,
    },
    ascendedMismatchedTrinket: {
      major: 0,
      minor: 0,
      jewelMajor: 0,
      jewelMinor: 0,
    },
  },
  ONEHANDED_WEAPON: {
    triple: {
      major: 120,
      minor: 85,
    },
    quadruple: {
      major: 102,
      minor: 56,
    },
    celestial: {
      minor: 56,
      exoticJewel: 0,
    },
    ascendedMismatchedTrinket: {
      major: 0,
      minor: 0,
      jewelMajor: 0,
      jewelMinor: 0,
    },
  },
  TWOHANDED_WEAPON: {
    triple: {
      major: 239,
      minor: 171,
    },
    quadruple: {
      major: 205,
      minor: 113,
    },
    celestial: {
      minor: 113,
      exoticJewel: 0,
    },
    ascendedMismatchedTrinket: {
      major: 0,
      minor: 0,
      jewelMajor: 0,
      jewelMinor: 0,
    },
  },
};

export const ascendedStats = {
  HELM: {
    triple: {
      major: 63,
      minor: 45,
    },
    quadruple: {
      major: 54,
      minor: 30,
    },
    celestial: {
      minor: 30,
      exoticJewel: 0,
    },
    ascendedMismatchedTrinket: {
      major: 0,
      minor: 0,
      jewelMajor: 0,
      jewelMinor: 0,
    },
  },
  SHOULDERS: {
    triple: {
      major: 47,
      minor: 34,
    },
    quadruple: {
      major: 40,
      minor: 22,
    },
    celestial: {
      minor: 22,
      exoticJewel: 0,
    },
    ascendedMismatchedTrinket: {
      major: 0,
      minor: 0,
      jewelMajor: 0,
      jewelMinor: 0,
    },
  },
  CHEST: {
    triple: {
      major: 141,
      minor: 101,
    },
    quadruple: {
      major: 121,
      minor: 67,
    },
    celestial: {
      minor: 67,
      exoticJewel: 0,
    },
    ascendedMismatchedTrinket: {
      major: 0,
      minor: 0,
      jewelMajor: 0,
      jewelMinor: 0,
    },
  },
  GLOVES: {
    triple: {
      major: 47,
      minor: 34,
    },
    quadruple: {
      major: 40,
      minor: 22,
    },
    celestial: {
      minor: 22,
      exoticJewel: 0,
    },
    ascendedMismatchedTrinket: {
      major: 0,
      minor: 0,
      jewelMajor: 0,
      jewelMinor: 0,
    },
  },
  LEGGINGS: {
    triple: {
      major: 94,
      minor: 67,
    },
    quadruple: {
      major: 81,
      minor: 44,
    },
    celestial: {
      minor: 44,
      exoticJewel: 0,
    },
    ascendedMismatchedTrinket: {
      major: 0,
      minor: 0,
      jewelMajor: 0,
      jewelMinor: 0,
    },
  },
  BOOTS: {
    triple: {
      major: 47,
      minor: 34,
    },
    quadruple: {
      major: 40,
      minor: 22,
    },
    celestial: {
      minor: 22,
      exoticJewel: 0,
    },
    ascendedMismatchedTrinket: {
      major: 0,
      minor: 0,
      jewelMajor: 0,
      jewelMinor: 0,
    },
  },
  AMULET: {
    triple: {
      major: 157,
      minor: 108,
    },
    quadruple: {
      major: 133,
      minor: 71,
    },
    celestial: {
      minor: 72,
      exoticJewel: 0,
    },
    ascendedMismatchedTrinket: {
      major: 157 - 32,
      minor: 108 - 18,
      jewelMajor: 32,
      jewelMinor: 18,
    },
  },
  RING: {
    triple: {
      major: 126,
      minor: 85,
    },
    quadruple: {
      major: 106,
      minor: 56,
    },
    celestial: {
      minor: 57,
      exoticJewel: 0,
    },
    ascendedMismatchedTrinket: {
      major: 126 - 32,
      minor: 85 - 18,
      jewelMajor: 32,
      jewelMinor: 18,
    },
  },
  ACCESSORY: {
    triple: {
      major: 110,
      minor: 74,
    },
    quadruple: {
      major: 92,
      minor: 49,
    },
    celestial: {
      minor: 50,
      exoticJewel: 0,
    },
    ascendedMismatchedTrinket: {
      major: 110 - 32,
      minor: 74 - 18,
      jewelMajor: 32,
      jewelMinor: 18,
    },
  },
  BACK_ITEM: {
    triple: {
      major: 63,
      minor: 40,
    },
    quadruple: {
      major: 52,
      minor: 27,
    },
    celestial: {
      minor: 28,
      exoticJewel: 0,
    },
    ascendedMismatchedTrinket: {
      major: 0,
      minor: 0,
      jewelMajor: 0,
      jewelMinor: 0,
    },
  },
  ONEHANDED_WEAPON: {
    triple: {
      major: 125,
      minor: 90,
    },
    quadruple: {
      major: 108,
      minor: 59,
    },
    celestial: {
      minor: 59,
      exoticJewel: 0,
    },
    ascendedMismatchedTrinket: {
      major: 0,
      minor: 0,
      jewelMajor: 0,
      jewelMinor: 0,
    },
  },
  TWOHANDED_WEAPON: {
    triple: {
      major: 251,
      minor: 179,
    },
    quadruple: {
      major: 215,
      minor: 118,
    },
    celestial: {
      minor: 118,
      exoticJewel: 0,
    },
    ascendedMismatchedTrinket: {
      major: 0,
      minor: 0,
      jewelMajor: 0,
      jewelMinor: 0,
    },
  },
};

export type ItemSlot = keyof typeof ascendedStats;

// referenced in discretize.eu-rewrite
export const WeaponTypes = {
  dualWield: 'Dual wield',
  twoHanded: 'Two-handed',
} as const;

export const allSlotData = {
  'Dual wield': [
    {
      name: 'Helm',
      short: 'Helm',
      asc: ascendedStats.HELM,
      exo: exoticStats.HELM,
    },
    {
      name: 'Shoulders',
      short: 'Shld',
      asc: ascendedStats.SHOULDERS,
      exo: exoticStats.SHOULDERS,
    },
    {
      name: 'Coat',
      short: 'Coat',
      asc: ascendedStats.CHEST,
      exo: exoticStats.CHEST,
    },
    {
      name: 'Gloves',
      short: 'Glov',
      asc: ascendedStats.GLOVES,
      exo: exoticStats.GLOVES,
    },
    {
      name: 'Leggings',
      short: 'Legs',
      asc: ascendedStats.LEGGINGS,
      exo: exoticStats.LEGGINGS,
    },
    {
      name: 'Boots',
      short: 'Boot',
      asc: ascendedStats.BOOTS,
      exo: exoticStats.BOOTS,
    },
    {
      name: 'Amulet',
      short: 'Amul',
      asc: ascendedStats.AMULET,
      exo: exoticStats.AMULET,
    },
    {
      name: 'Ring 1',
      short: 'Rng1',
      asc: ascendedStats.RING,
      exo: exoticStats.RING,
    },
    {
      name: 'Ring 2',
      short: 'Rng2',
      asc: ascendedStats.RING,
      exo: exoticStats.RING,
    },
    {
      name: 'Accessory 1',
      short: 'Acc1',
      asc: ascendedStats.ACCESSORY,
      exo: exoticStats.ACCESSORY,
    },
    {
      name: 'Accessory 2',
      short: 'Acc2',
      asc: ascendedStats.ACCESSORY,
      exo: exoticStats.ACCESSORY,
    },
    {
      name: 'Back Item',
      short: 'Back',
      asc: ascendedStats.BACK_ITEM,
      exo: exoticStats.BACK_ITEM,
    },
    {
      name: 'Mainhand',
      short: 'Wep1',
      asc: ascendedStats.ONEHANDED_WEAPON,
      exo: exoticStats.ONEHANDED_WEAPON,
    },
    {
      name: 'Offhand',
      short: 'Wep2',
      asc: ascendedStats.ONEHANDED_WEAPON,
      exo: exoticStats.ONEHANDED_WEAPON,
    },
  ],
  'Two-handed': [
    {
      name: 'Helm',
      short: 'Helm',
      asc: ascendedStats.HELM,
      exo: exoticStats.HELM,
    },
    {
      name: 'Shoulders',
      short: 'Shld',
      asc: ascendedStats.SHOULDERS,
      exo: exoticStats.SHOULDERS,
    },
    {
      name: 'Coat',
      short: 'Coat',
      asc: ascendedStats.CHEST,
      exo: exoticStats.CHEST,
    },
    {
      name: 'Gloves',
      short: 'Glov',
      asc: ascendedStats.GLOVES,
      exo: exoticStats.GLOVES,
    },
    {
      name: 'Leggings',
      short: 'Legs',
      asc: ascendedStats.LEGGINGS,
      exo: exoticStats.LEGGINGS,
    },
    {
      name: 'Boots',
      short: 'Boot',
      asc: ascendedStats.BOOTS,
      exo: exoticStats.BOOTS,
    },
    {
      name: 'Amulet',
      short: 'Amul',
      asc: ascendedStats.AMULET,
      exo: exoticStats.AMULET,
    },
    {
      name: 'Ring 1',
      short: 'Rng1',
      asc: ascendedStats.RING,
      exo: exoticStats.RING,
    },
    {
      name: 'Ring 2',
      short: 'Rng2',
      asc: ascendedStats.RING,
      exo: exoticStats.RING,
    },
    {
      name: 'Accessory 1',
      short: 'Acc1',
      asc: ascendedStats.ACCESSORY,
      exo: exoticStats.ACCESSORY,
    },
    {
      name: 'Accessory 2',
      short: 'Acc2',
      asc: ascendedStats.ACCESSORY,
      exo: exoticStats.ACCESSORY,
    },
    {
      name: 'Back Item',
      short: 'Back',
      asc: ascendedStats.BACK_ITEM,
      exo: exoticStats.BACK_ITEM,
    },
    {
      name: 'Weapon',
      short: 'Weap',
      asc: ascendedStats.TWOHANDED_WEAPON,
      exo: exoticStats.TWOHANDED_WEAPON,
    },
  ],
};
export type WeaponHandednessType = keyof typeof allSlotData;

export const maxSlotsLength = Math.max(...Object.values(allSlotData).map((arr) => arr.length));

// used for forcing slots to a certain affix
export const forcedSlotNames = [
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
  'wep2', // 13
] as const;

export type ForcedSlotName = (typeof forcedSlotNames)[number];

export const omnipotionModifiers = {
  // Condi dmg from omnipot has been removed
  'damage': {
    'Outgoing Strike Damage': ['15%', 'add'] as [string, 'add'],
    'Outgoing Condition Damage': ['15%', 'add'] as [string, 'add'],
    'Damage Reduction': ['25%', 'add'] as [string, 'add'],
  },
  'conversion': {
    'Vitality': { 'Agony Resistance': '150%' },
    'Toughness': { 'Agony Resistance': '150%' },
    'Concentration': { 'Agony Resistance': '150%' },
  },
};

const healthValues = {
  LOW: 1645,
  MEDIUM: 5922,
  HIGH: 9212,
};

const defenseValues = {
  LIGHT: 967,
  MEDIUM: 1118,
  HEAVY: 1271,
};

export const WEAPONS = {
  GREATSWORD: { name: 'Greatsword', type: 'two-handed', gw2id: 30689 },
  HAMMER: { name: 'Hammer', type: 'two-handed', gw2id: 30690 },
  STAFF: { name: 'Staff', type: 'two-handed', gw2id: 30698 },
  RIFLE: { name: 'Rifle', type: 'two-handed', gw2id: 30694 },
  LONGBOW: { name: 'Longbow', type: 'two-handed', gw2id: 30685 },
  SHORTBOW: { name: 'Short Bow', type: 'two-handed', gw2id: 30686 },

  SCEPTER: { name: 'Scepter', type: 'mainHand', gw2id: 30695 },

  AXE: { name: 'Axe', type: 'one-handed', gw2id: 76158 },
  DAGGER: { name: 'Dagger', type: 'one-handed', gw2id: 30687 },
  PISTOL: { name: 'Pistol', type: 'one-handed', gw2id: 30693 },
  MACE: { name: 'Mace', type: 'one-handed', gw2id: 30692 },
  SWORD: { name: 'Sword', type: 'one-handed', gw2id: 30699 },

  FOCUS: { name: 'Focus', type: 'offHand', gw2id: 86098 },
  SHIELD: { name: 'Shield', type: 'offHand', gw2id: 30696 },
  TORCH: { name: 'Torch', type: 'offHand', gw2id: 30700 },
  WARHORN: { name: 'Warhorn', type: 'offHand', gw2id: 30702 },
};
export type WeaponType = keyof typeof WEAPONS;

// referenced in discretize.eu-rewrite
export const Classes = {
  Warrior: {
    health: healthValues.HIGH,
    defense: defenseValues.HEAVY,
    weapons: {
      mainHand: [
        WEAPONS.AXE,
        WEAPONS.DAGGER,
        WEAPONS.MACE,
        WEAPONS.SWORD,
        WEAPONS.GREATSWORD,
        WEAPONS.HAMMER,
        WEAPONS.LONGBOW,
        WEAPONS.RIFLE,
        WEAPONS.STAFF,
      ],
      offHand: [
        WEAPONS.AXE,
        WEAPONS.DAGGER,
        WEAPONS.MACE,
        WEAPONS.PISTOL,
        WEAPONS.SWORD,
        WEAPONS.SHIELD,
        WEAPONS.TORCH,
        WEAPONS.WARHORN,
      ],
    },
  },
  Necromancer: {
    health: healthValues.HIGH,
    defense: defenseValues.LIGHT,
    weapons: {
      mainHand: [
        WEAPONS.AXE,
        WEAPONS.DAGGER,
        WEAPONS.PISTOL,
        WEAPONS.SCEPTER,
        WEAPONS.GREATSWORD,
        WEAPONS.STAFF,
        WEAPONS.SWORD,
      ],
      offHand: [WEAPONS.FOCUS, WEAPONS.WARHORN, WEAPONS.TORCH, WEAPONS.DAGGER, WEAPONS.SWORD],
    },
  },
  Revenant: {
    health: healthValues.MEDIUM,
    defense: defenseValues.HEAVY,
    weapons: {
      mainHand: [
        WEAPONS.GREATSWORD,
        WEAPONS.MACE,
        WEAPONS.SWORD,
        WEAPONS.HAMMER,
        WEAPONS.SHORTBOW,
        WEAPONS.STAFF,
        WEAPONS.SCEPTER,
      ],
      offHand: [WEAPONS.AXE, WEAPONS.SWORD, WEAPONS.SHIELD],
    },
  },
  Engineer: {
    health: healthValues.MEDIUM,
    defense: defenseValues.MEDIUM,
    weapons: {
      mainHand: [
        WEAPONS.MACE,
        WEAPONS.PISTOL,
        WEAPONS.SWORD,
        WEAPONS.RIFLE,
        WEAPONS.HAMMER,
        WEAPONS.SHORTBOW,
      ],
      offHand: [WEAPONS.PISTOL, WEAPONS.SHIELD],
    },
  },
  Ranger: {
    health: healthValues.MEDIUM,
    defense: defenseValues.MEDIUM,
    weapons: {
      mainHand: [
        WEAPONS.AXE,
        WEAPONS.DAGGER,
        WEAPONS.HAMMER,
        WEAPONS.SWORD,
        WEAPONS.GREATSWORD,
        WEAPONS.LONGBOW,
        WEAPONS.SHORTBOW,
        WEAPONS.STAFF,
        WEAPONS.MACE,
      ],
      offHand: [WEAPONS.AXE, WEAPONS.DAGGER, WEAPONS.TORCH, WEAPONS.WARHORN, WEAPONS.MACE],
    },
  },
  Mesmer: {
    health: healthValues.MEDIUM,
    defense: defenseValues.LIGHT,
    weapons: {
      mainHand: [
        WEAPONS.AXE,
        WEAPONS.DAGGER,
        WEAPONS.SWORD,
        WEAPONS.SCEPTER,
        WEAPONS.GREATSWORD,
        WEAPONS.STAFF,
        WEAPONS.RIFLE,
      ],
      offHand: [WEAPONS.PISTOL, WEAPONS.SWORD, WEAPONS.FOCUS, WEAPONS.SHIELD, WEAPONS.TORCH],
    },
  },
  Guardian: {
    health: healthValues.LOW,
    defense: defenseValues.HEAVY,
    weapons: {
      mainHand: [
        WEAPONS.AXE,
        WEAPONS.MACE,
        WEAPONS.SWORD,
        WEAPONS.SCEPTER,
        WEAPONS.GREATSWORD,
        WEAPONS.HAMMER,
        WEAPONS.LONGBOW,
        WEAPONS.STAFF,
        WEAPONS.PISTOL,
      ],
      offHand: [WEAPONS.FOCUS, WEAPONS.SHIELD, WEAPONS.SWORD, WEAPONS.TORCH, WEAPONS.PISTOL],
    },
  },
  Thief: {
    health: healthValues.LOW,
    defense: defenseValues.MEDIUM,
    weapons: {
      mainHand: [
        WEAPONS.DAGGER,
        WEAPONS.PISTOL,
        WEAPONS.SCEPTER,
        WEAPONS.SWORD,
        WEAPONS.RIFLE,
        WEAPONS.SHORTBOW,
        WEAPONS.STAFF,
        WEAPONS.AXE,
      ],
      offHand: [WEAPONS.DAGGER, WEAPONS.PISTOL],
    },
  },
  Elementalist: {
    health: healthValues.LOW,
    defense: defenseValues.LIGHT,
    weapons: {
      mainHand: [
        WEAPONS.DAGGER,
        WEAPONS.HAMMER,
        WEAPONS.SWORD,
        WEAPONS.SCEPTER,
        WEAPONS.STAFF,
        WEAPONS.PISTOL,
      ],
      offHand: [WEAPONS.FOCUS, WEAPONS.DAGGER, WEAPONS.WARHORN],
    },
  },
};
export type ProfessionName = keyof typeof Classes;

function firstUppercase(text: string | undefined | null): string {
  if (typeof text === 'undefined' || text === null || text === '') return '';

  const toUpper = (str: string) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  return text.split(' ').map(toUpper).join(' ').trim();
}

// referenced in discretize.eu-rewrite
export const getWeight = (profession: ProfessionName) => {
  // Calculate weight class
  const { defense } = Classes[firstUppercase(profession) as ProfessionName];
  if (defense === defenseValues.HEAVY) {
    return 'Heavy';
  }
  if (defense === defenseValues.MEDIUM) {
    return 'Medium';
  }
  return 'Light';
};

export const conditionData = {
  Burning: {
    baseDamage: 131,
    factor: 0.155,
  },
  Bleeding: {
    baseDamage: 22,
    factor: 0.06,
  },
  Poison: {
    baseDamage: 33.5,
    factor: 0.06,
  },
  Torment: {
    baseDamage: 31.8,
    factor: 0.09,
  },
  TormentMoving: {
    baseDamage: 22,
    factor: 0.06,
  },
  Confusion: {
    baseDamage: 18.25,
    factor: 0.05,
  },
  ConfusionActive: {
    baseDamage: 16.34,
    factor: 0.0325,
  },
};
export const conditionDataWvW = {
  Burning: {
    baseDamage: 131,
    factor: 0.155,
  },
  Bleeding: {
    baseDamage: 22,
    factor: 0.06,
  },
  Poison: {
    baseDamage: 33.5,
    factor: 0.06,
  },
  Torment: {
    baseDamage: 26,
    factor: 0.07,
  },
  TormentMoving: {
    baseDamage: 19.8,
    factor: 0.054,
  },
  Confusion: {
    baseDamage: 11,
    factor: 0.03,
  },
  ConfusionActive: {
    baseDamage: 49.5,
    factor: 0.0975,
  },
};
export type ConditionName = keyof typeof conditionData;

export const damagingConditions = [
  'Bleeding',
  'Burning',
  'Confusion',
  'Poison',
  'Torment',
] as const;
export type DamagingConditionName = (typeof damagingConditions)[number];

// #region attribute types

export const primaryAttributes = ['Power', 'Precision', 'Toughness', 'Vitality'] as const;
export type PrimaryAttributeName = (typeof primaryAttributes)[number];

export const secondaryAttributes = [
  'Ferocity',
  'Condition Damage',
  'Expertise',
  'Concentration',
  'Healing Power',
  'Agony Resistance',
] as const;
export type SecondaryAttributeName = (typeof secondaryAttributes)[number];

export const derivedAttributes = [
  'Critical Chance',
  'Critical Damage',
  'Condition Duration',
  'Condition Duration Uncapped',
  'Boon Duration',
  'Health',
  'Armor',
] as const;
export type DerivedAttributeName = (typeof derivedAttributes)[number];

export const boonDurationAttributes = [
  'Aegis Duration',
  'Fury Duration',
  'Might Duration',
  'Protection Duration',
  'Quickness Duration',
  'Alacrity Duration',
  'Regeneration Duration',
  'Resistance Duration',
  'Resolution Duration',
  'Stability Duration',
  'Swiftness Duration',
  'Vigor Duration',
] as const;
export type BoonDurationAttributeName = (typeof boonDurationAttributes)[number];

export const conditionDurationAttributes = [
  'Bleeding Duration',
  'Burning Duration',
  'Confusion Duration',
  'Poison Duration',
  'Torment Duration',
] as const;
export type ConditionDurationAttributeName = (typeof conditionDurationAttributes)[number];

export type ConditionCoefficientAttributeName = `${DamagingConditionName} Coefficient`;
export const conditionCoefficientAttributes: readonly ConditionCoefficientAttributeName[] = [
  'Bleeding Coefficient',
  'Burning Coefficient',
  'Confusion Coefficient',
  'Poison Coefficient',
  'Torment Coefficient',
] as const;

export type ConditionTickAttributeName = `${DamagingConditionName} Damage Tick`;
export const conditionTickAttributes: readonly ConditionTickAttributeName[] = [
  'Bleeding Damage Tick',
  'Burning Damage Tick',
  'Confusion Damage Tick',
  'Poison Damage Tick',
  'Torment Damage Tick',
] as const;

export const effectiveAttributes = [
  'Effective Power',
  'Effective Health',
  'Effective Healing',
] as const;
export type EffectiveAttributeName = (typeof effectiveAttributes)[number];

export const indicatorAttributes = ['Damage', 'Survivability', 'Healing'] as const;
export type IndicatorName = (typeof indicatorAttributes)[number];

export type ConditionStackAttributeName = `${DamagingConditionName} Stacks`;
export const conditionStackAttributes: readonly ConditionStackAttributeName[] = [
  'Bleeding Stacks',
  'Burning Stacks',
  'Confusion Stacks',
  'Poison Stacks',
  'Torment Stacks',
] as const;

export type ConditionDpsAttributeName = `${DamagingConditionName} DPS`;
export const conditionDpsAttributes: readonly ConditionDpsAttributeName[] = [
  'Bleeding DPS',
  'Burning DPS',
  'Confusion DPS',
  'Poison DPS',
  'Torment DPS',
] as const;

export const alternativeAttributes = [
  'Alternative Power',
  'Alternative Precision',
  'Alternative Ferocity',
  'Alternative Critical Chance',
  'Alternative Effective Power',
  'Alternative Critical Damage',
] as const;
export type AlternativeAttributeName = (typeof alternativeAttributes)[number];

export const professionAttributes = [
  'Clone Critical Chance',
  'Phantasm Critical Chance',
  'Phantasm Critical Damage',
  'Phantasm Effective Power',
] as const;
export type ProfessionAttributeName = (typeof professionAttributes)[number];

export const siphonAttributes = [
  'Siphon Coefficient',
  'Siphon Base Coefficient',
  'Siphon DPS',
] as const;
export type SiphonAttributeName = (typeof siphonAttributes)[number];

export const miscAttributes = [
  'Maximum Health',
  'Outgoing Healing',
  'Power Coefficient',
  'NonCrit Power Coefficient',
  'Power2 DPS',
  'Power2 Coefficient',
  'Flat DPS',
  'Power DPS',
  'Player Critical Damage',
] as const;
type MiscAttributeName = (typeof miscAttributes)[number];

export type AttributeName =
  | PrimaryAttributeName
  | SecondaryAttributeName
  | DerivedAttributeName
  | BoonDurationAttributeName
  | ConditionDurationAttributeName
  | ConditionCoefficientAttributeName
  | ConditionTickAttributeName
  | EffectiveAttributeName
  | IndicatorName
  | ConditionStackAttributeName
  | ConditionDpsAttributeName
  | AlternativeAttributeName
  | ProfessionAttributeName
  | SiphonAttributeName
  | MiscAttributeName;

export type GearAttributeName = PrimaryAttributeName | SecondaryAttributeName;

// #endregion

// export const damageAttributes = [
//   'Outgoing Strike Damage',
//   'Outgoing Condition Damage',
//   'Outgoing Siphon Damage',
//   'Incoming Strike Damage',
//   'Outgoing Critical Damage',
//   'Outgoing Bleeding Damage',
//   'Outgoing Burning Damage',
//   'Outgoing Confusion Damage',
//   'Outgoing Poison Damage',
//   'Outgoing Torment Damage',
//   'Outgoing Alternative Damage',
//   'Outgoing Alternative Critical Damage',
//   'Outgoing Phantasm Damage',
//   'Outgoing Phantasm Critical Damage',
//   'Outgoing All Damage',
// ] as const;
// export type DamageAttributeName = (typeof damageAttributes)[number];

export const MAX_INFUSIONS = 18;
export const INFUSION_BONUS = 5;

export const SPECIALIZATIONS = {
  Warrior: ['Spellbreaker', 'Berserker', 'Bladesworn'],
  Revenant: ['Herald', 'Renegade', 'Vindicator'],
  Guardian: ['Dragonhunter', 'Firebrand', 'Willbender'],
  Ranger: ['Druid', 'Soulbeast', 'Untamed'],
  Engineer: ['Scrapper', 'Holosmith', 'Mechanist'],
  Elementalist: ['Tempest', 'Weaver', 'Catalyst'],
  Mesmer: ['Chronomancer', 'Mirage', 'Virtuoso'],
  Necromancer: ['Scourge', 'Reaper', 'Harbinger'],
  Thief: ['Daredevil', 'Deadeye', 'Specter'],
} as const;

export const PROFESSIONS = objectKeys(SPECIALIZATIONS);

export type ProfessionOrSpecializationName =
  | keyof typeof SPECIALIZATIONS
  | (typeof SPECIALIZATIONS)[keyof typeof SPECIALIZATIONS][number];

// referenced in discretize.eu-rewrite
export const GEAR_SLOTS = [
  {
    name: 'Helm',
    short: 'Helm',
  },
  {
    name: 'Shoulders',
    short: 'Shld',
  },
  {
    name: 'Coat',
    short: 'Coat',
  },
  {
    name: 'Gloves',
    short: 'Glov',
  },
  {
    name: 'Leggings',
    short: 'Legs',
  },
  {
    name: 'Boots',
    short: 'Boot',
  },
  {
    name: 'Amulet',
    short: 'Amul',
  },
  {
    name: 'Ring 1',
    short: 'Rng1',
  },
  {
    name: 'Ring 2',
    short: 'Rng2',
  },
  {
    name: 'Accessory 1',
    short: 'Acc1',
  },
  {
    name: 'Accessory 2',
    short: 'Acc2',
  },
  {
    name: 'Back Item',
    short: 'Back',
  },
  {
    name: 'Weapon 1',
    short: 'Wep1',
  },
  {
    name: 'Weapon 2',
    short: 'Wep2',
  },
];

// referenced in discretize.eu-rewrite
export const INFUSION_IDS = {
  'Power': 37131,
  'Precision': 37132,
  'Condition Damage': 37130,
  'Expertise': 86113,
  'Concentration': 86180,
  'Healing Power': 37125,
  'Toughness': 37135,
  'Vitality': 37136,
};

export type InfusionName = keyof typeof INFUSION_IDS;

export const agonyInfusionIds: Record<string, { id: number; cost?: number }> = {
  '+1 Agony Infusion': { id: 49424, cost: 7 },
  '+2 Agony Infusion': { id: 49425, cost: 164 },
  '+3 Agony Infusion': { id: 49426, cost: 478 },
  '+4 Agony Infusion': { id: 49427, cost: 1106 },
  '+5 Agony Infusion': { id: 49428, cost: 2632 },
  '+6 Agony Infusion': { id: 49429, cost: 4878 },
  '+7 Agony Infusion': { id: 49430 },
  '+8 Agony Infusion': { id: 49431 },
  '+9 Agony Infusion': { id: 49432 },
  '+10 Agony Infusion': { id: 49433 },
  '+11 Agony Infusion': { id: 49434 },
  '+12 Agony Infusion': { id: 49435 },
  '+13 Agony Infusion': { id: 49436 },
  '+14 Agony Infusion': { id: 49437 },
  '+15 Agony Infusion': { id: 49438 },
  '+16 Agony Infusion': { id: 49439 },
  '+17 Agony Infusion': { id: 49440 },
  '+18 Agony Infusion': { id: 49441 },
  '+19 Agony Infusion': { id: 49442 },
  '+20 Agony Infusion': { id: 49443 },
  '+21 Agony Infusion': { id: 49444 },
  '+22 Agony Infusion': { id: 49445 },
  '+23 Agony Infusion': { id: 49446 },
  '+24 Agony Infusion': { id: 49447 },
};

export const statInfusionIds = {
  '+9 Stat Infusion': {
    'Power': { id: 37131 },
    'Precision': { id: 37132 },
    'Condition Damage': { id: 37130 },
    'Expertise': { id: 86113 },
    'Concentration': { id: 86180 },
    'Healing Power': { id: 37125 },
    'Toughness': { id: 37135 },
    'Vitality': { id: 37136 },
  },

  '+7 Stat Infusion': {
    'Power': { id: 37127 },
    'Precision': { id: 37128 },
    'Condition Damage': { id: 37129 },
    'Expertise': { id: 86150 },
    'Concentration': { id: 85881 },
    'Healing Power': { id: 37123 },
    'Toughness': { id: 37133 },
    'Vitality': { id: 37134 },
  },

  '+5 Stat Infusion': {
    'Power': { id: 39620 },
    'Precision': { id: 39621 },
    'Condition Damage': { id: 39619 },
    'Expertise': { id: 85971 },
    'Concentration': { id: 86338 },
    'Healing Power': { id: 39616 },
    'Toughness': { id: 39617 },
    'Vitality': { id: 39618 },
  },

  'WvW Stat Infusion': {
    'Power': { id: 43254 },
    'Precision': { id: 43255 },
    'Condition Damage': { id: 43253 },
    'Expertise': { id: 87218 },
    'Concentration': { id: 86986 },
    'Healing Power': { id: 43250 },
    'Toughness': { id: 43251 },
    'Vitality': { id: 43252 },
  },
};

export const JADE_BOT_CORE_IDS = [
  97339, 97041, 97284, 96628, 95864, 96467, 97020, 96299, 96070, 96613,
];
