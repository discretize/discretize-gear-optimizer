/* eslint-disable padded-blocks */
(function ($) {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const Prefix = Object.freeze({
    GEAR_OPTIMIZER: '#go-',
    CHECKBOX: 'checkbox-',
    INPUT: 'input-',
    SELECT: 'select-'
  });

  const Selector = Object.freeze({
    TOTAL: '#gear-optimizer',

    CHECKBOX: {
      AFFIX: {
        BERSERKER: Prefix.GEAR_OPTIMIZER + Prefix.CHECKBOX + 'affix-berserker',
        ASSASSIN: Prefix.GEAR_OPTIMIZER + Prefix.CHECKBOX + 'affix-assassin',
        COMMANDER: Prefix.GEAR_OPTIMIZER + Prefix.CHECKBOX + 'affix-commander',
        HARRIER: Prefix.GEAR_OPTIMIZER + Prefix.CHECKBOX + 'affix-harrier',
        DIVINER: Prefix.GEAR_OPTIMIZER + Prefix.CHECKBOX + 'affix-diviner',
        VIPER: Prefix.GEAR_OPTIMIZER + Prefix.CHECKBOX + 'affix-viper',
        GRIEVING: Prefix.GEAR_OPTIMIZER + Prefix.CHECKBOX + 'affix-grieving',
        SINISTER: Prefix.GEAR_OPTIMIZER + Prefix.CHECKBOX + 'affix-sinister',
        MINSTREL: Prefix.GEAR_OPTIMIZER + Prefix.CHECKBOX + 'affix-minstrel',
        MAGI: Prefix.GEAR_OPTIMIZER + Prefix.CHECKBOX + 'affix-magi',
        SERAPH: Prefix.GEAR_OPTIMIZER + Prefix.CHECKBOX + 'affix-seraph',
        CELESTIAL: Prefix.GEAR_OPTIMIZER + Prefix.CHECKBOX + 'affix-celestial'
      },

      BUFF: {
        MIGHT: Prefix.GEAR_OPTIMIZER + Prefix.CHECKBOX + 'buff-might',
        FURY: Prefix.GEAR_OPTIMIZER + Prefix.CHECKBOX + 'buff-fury',
        VULNERABILITY: Prefix.GEAR_OPTIMIZER + Prefix.CHECKBOX + 'buff-vulnerability',
        BANNER_OF_STRENGTH: Prefix.GEAR_OPTIMIZER + Prefix.CHECKBOX + 'buff-banner-of-strength',
        BANNER_OF_DISCIPLINE: Prefix.GEAR_OPTIMIZER + Prefix.CHECKBOX + 'buff-banner-of-discipline',
        EMPOWER_ALLIES: Prefix.GEAR_OPTIMIZER + Prefix.CHECKBOX + 'buff-empower-allies',
        BANE_SIGNET: Prefix.GEAR_OPTIMIZER + Prefix.CHECKBOX + 'buff-bane-signet',
        SPOTTER: Prefix.GEAR_OPTIMIZER + Prefix.CHECKBOX + 'buff-spotter',
        FROST_SPIRIT: Prefix.GEAR_OPTIMIZER + Prefix.CHECKBOX + 'buff-frost-spirit',
        ASSASSINS_PRESENCE: Prefix.GEAR_OPTIMIZER + Prefix.CHECKBOX + 'buff-assassins-presence'
      },

      OMNIPOTION: Prefix.GEAR_OPTIMIZER + Prefix.CHECKBOX + 'omnipotion'
    },

    CHECKBOXES: 'input[type="checkbox"]',
    CHECKBOXES_CHECKED: 'input[type="checkbox"]:checked',

    INPUT: {
      OPTIMIZER: Prefix.GEAR_OPTIMIZER + 'input',

      CLASS: Prefix.GEAR_OPTIMIZER + Prefix.INPUT + 'class',
      TAB_PANE_ACTIVE: '.tab-pane.active',
      AFFIXES: Prefix.GEAR_OPTIMIZER + Prefix.INPUT + 'affixes',
      BUFFS: Prefix.GEAR_OPTIMIZER + Prefix.INPUT + 'buffs',

      MIN_BOON_DURATION: Prefix.GEAR_OPTIMIZER + Prefix.INPUT + 'min-boon-duration',
      MIN_TOUGHNESS: Prefix.GEAR_OPTIMIZER + Prefix.INPUT + 'min-toughness',
      MIN_HEALING_POWER: Prefix.GEAR_OPTIMIZER + Prefix.INPUT + 'min-healing-power',
      MAX_TOUGHNESS: Prefix.GEAR_OPTIMIZER + Prefix.INPUT + 'max-toughness',
      AGONY_RESISTANCE: Prefix.GEAR_OPTIMIZER + Prefix.INPUT + 'agony-resistance',

      MAX_RESULTS: Prefix.GEAR_OPTIMIZER + Prefix.INPUT + 'max-results',

      FORCE: Prefix.GEAR_OPTIMIZER + Prefix.INPUT + 'force-'
    },

    SELECT: {
      RANKBY: Prefix.GEAR_OPTIMIZER + Prefix.SELECT + 'rank-by',
      WEAPON_TYPE: Prefix.GEAR_OPTIMIZER + Prefix.SELECT + 'weapon-type',
      RUNES: Prefix.GEAR_OPTIMIZER + Prefix.SELECT + 'runes',
      SIGIL_1: Prefix.GEAR_OPTIMIZER + Prefix.SELECT + 'sigils-1',
      SIGIL_2: Prefix.GEAR_OPTIMIZER + Prefix.SELECT + 'sigils-2',
      FOOD: Prefix.GEAR_OPTIMIZER + Prefix.SELECT + 'food',
      UTILITY: Prefix.GEAR_OPTIMIZER + Prefix.SELECT + 'utility',
      INFUSION: Prefix.GEAR_OPTIMIZER + Prefix.SELECT + 'infusion'
    },

    OUTPUT: {
      LIST: Prefix.GEAR_OPTIMIZER + 'output',
      PROGRESS_BAR: Prefix.GEAR_OPTIMIZER + 'progress-bar',
      HEADER: Prefix.GEAR_OPTIMIZER + 'output-header'
    },

    LABEL: 'label',
    SPAN: 'span',

    DROPDOWN_SELECT: '.dropdown-select',
    DROPDOWN_TOGGLE: '.dropdown-toggle',
    DROPDOWN_MENU: '.dropdown-menu',
    DROPDOWN_ITEM: '.dropdown-item',

    START: 'button' + Prefix.GEAR_OPTIMIZER + 'start',
    STOP: 'button' + Prefix.GEAR_OPTIMIZER + 'stop'
  });

  const ClassName = Object.freeze({
    ACTIVE: 'active',
    DISABLED: 'disabled'
  });

  const PropertyName = Object.freeze({
    CHECKED: 'checked',
    DISABLED: 'disabled'
  });

  const DataAttribute = Object.freeze({
    PRIORITIES: 'go-priorities',
    BUFFS: 'go-buffs',
    MODIFIER: 'go-modifier',
    CLASS: 'go-class',
    PRESELECTION: 'go-preselection',
    DISTRIBUTION: 'go-distribution'
  });

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

  const Omnipotion = Object.freeze({
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
  });

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

  // Globals

  let startTime;
  let STOP_SIGNAL = false;
  const list = $(Selector.OUTPUT.LIST);

  /**
   * ------------------------------------------------------------------------
   * Core Optimizer Logic
   * ------------------------------------------------------------------------
   */

  const OptimizerCore = function () {
    let applyInfusionsFunction;
    let worstScore;

    this.run = run; // export
    /**
     * Run the calculation.
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
     */
    async function run (input) {
      startTime = new Date();
      worstScore = 0;

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
      let addEffectiveConditionDamage = 1;
      let addEffectivePower = 1;

      const validMultiplierStats = [
        'Effective Condition Damage',
        'Critical Damage',
        'add: Effective Condition Damage',
        'add: Effective Power',
        ...Attributes.EFFECTIVE,
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
      settings.modifiers['multiplier']['Effective Condition Damage'] *= addEffectiveConditionDamage;
      settings.modifiers['multiplier']['Effective Power'] *= addEffectivePower;

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

      // the next time the DOM updates after this is after ≥1 iteration loop;
      // if the calculation is really really fast the main UI won't even flicker 😎
      list.children().css('visibility', 'hidden');
      await new Promise(resolve => setTimeout(resolve, 0));

      list.empty();
      lockUI(settings);
      STOP_SIGNAL = false;

      let iterationTimer = Date.now();
      let UPDATE_MS = 90;
      let cycles = 0;
      while (calculationQueue.length) {
        cycles++;

        if ((cycles % 1000 === 0) && Date.now() - iterationTimer > UPDATE_MS) {
          // pause to let UI update and register a stop button press
          updateProgressBar(Math.floor((calculationRuns * 100) / calculationTotal), false);
          // eslint-disable-next-line no-await-in-loop
          await new Promise(resolve => setTimeout(resolve, 0));

          iterationTimer = Date.now();
          if (STOP_SIGNAL) {
            unlockUI();
            return;
          }
          // only update UI at around 15 frames per second
          UPDATE_MS = 55;
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

      // we are done
      const percent = Math.floor(
        (calculationRuns * 100) / calculationTotal
      );
      updateProgressBar(percent, true);
      unlockUI();
    }

    function testCharacter (gear, gearStats, settings) {
      if (!gear) {
        return;
      }

      const character = {
        gear, // passed by reference
        settings, // passed by reference
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
      insertCharacterDOM(character);
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
      insertCharacterDOM(character);
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
      insertCharacterDOM(character);
    };

    // Inserts every valid combination of 18 infusions
    applyInfusions['Secondary'] = function (character) {
      const { settings } = character;

      const testInfusionUsefulness = function () {
        const temp = clone(character);
        addBaseStats(temp, settings.primaryInfusion, MAX_INFUSIONS * INFUSION_BONUS);
        addBaseStats(temp, settings.secondaryInfusion, MAX_INFUSIONS * INFUSION_BONUS);
        updateAttributesFast(temp, true);
        return temp.attributes[settings.rankby] > worstScore;
      };

      if (!worstScore || testInfusionUsefulness()) {
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
            insertCharacterDOM(temp);
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
        return temp.attributes[settings.rankby] > worstScore;
      };

      if (!worstScore || testInfusionUsefulness()) {
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
          insertCharacterDOM(best);
        }
      }
    };

    function insertCharacterDOM (character) {
      const { settings } = character;

      if (
        !character.valid
        || (worstScore && worstScore > character.attributes[settings.rankby])
      ) {
        return;
      }

      if (list.children().length === 0) {
        list.append(characterToRow(character));
      } else {
        let position = list.children().length + 1;
        while (position > 1 && characterLT(
          list.children().eq(position - 2).data('character'), character)) {
          position--;
        }

        if (position > settings.maxResults) {
          return;
        }

        if (position <= list.children().length) {
          characterToRow(character)
            .insertBefore(list.children().eq(position - 1));

          if (list.children().length > settings.maxResults) {
            list.children().last().remove();
          }
        } else {
          list.append(characterToRow(character));
        }

        if (list.children().length === settings.maxResults) {
          worstScore = list.children().last()
            .data('character').attributes[settings.rankby];
        }
      }
    }

    // returns true if B is better than A
    function characterLT (a, b) {
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

    this.updateAttributes = updateAttributes; // export
    /**
     * Creates an {attributes} object parameter in the given character object and fills it with
     * calculated stats and damage/healing/survivability scores.
     *
     * @param {Object} _character
     */
    function updateAttributes (_character) {
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

    this.clone = clone; // export
    /**
     * Clones a character. baseAttributes is cloned by value, so it can be mutated. Please
     * don't directly mutate character.attributes; it's passed by reference so the clone shares
     * the old one until upateAttributes is called on it.
     *
     * @param {Object} character
     * @returns {Object} character
     */
    function clone (character) {
      return {
        settings: character.settings, // passed by reference
        attributes: character.attributes, // passed by reference
        gear: character.gear, // passed by reference
        valid: character.valid,

        baseAttributes: Object.assign({}, character.baseAttributes),
        infusions: Object.assign({}, character.infusions)
      };
    }
  };

  const optimizer = new OptimizerCore();

  /**
   * ------------------------------------------------------------------------
   * DOM-handling functions
   * ------------------------------------------------------------------------
   */

  /**
   * Fetches values from the html file, selected checkboxes and optimization goals, then calls
   * optimizer.run to run the calculation.
   */
  function start () {
    const input = {};
    input.modifiers = [];
    input.tags = [];

    // Checkbox modifiers
    $.each($([`${Selector.INPUT.CLASS} ${Selector.INPUT.TAB_PANE_ACTIVE}`,
      Selector.INPUT.BUFFS].join(',')).find(`${Selector.CHECKBOXES_CHECKED}[data-${
          DataAttribute.MODIFIER}]`), function () {
      input.modifiers.push($(this).data(DataAttribute.MODIFIER));
      const span = $(this).siblings(Selector.LABEL).children(Selector.SPAN);
      if (span.is('[data-armory-ids]')) {
        const type = span.children('div').attr('class').split(' ')[1];
        input.tags.push(
          `<div
            data-armory-size="40"
            data-armory-embed="${type.substring(5, type.length - 6)}"
            data-armory-ids="${span.data('armory-ids')}"
          ></div>`
        );
      } else if (span.hasClass('icon')) {
        input.tags.push(
          `<div class="icon icon-lg ${span.attr('class').split(' ')[1]}"></div>`
        );
      }
    });

    // Select modifiers
    $.each($([Selector.SELECT.RUNES, Selector.SELECT.SIGIL_1, Selector.SELECT.SIGIL_2,
      Selector.SELECT.FOOD, Selector.SELECT.UTILITY].join(','))
      .children(Selector.DROPDOWN_MENU).children(`${Selector.DROPDOWN_ITEM}.${ClassName.ACTIVE
         }[data-${DataAttribute.MODIFIER}]`), function () {
      input.modifiers.push($(this).data(DataAttribute.MODIFIER));
      input.tags.push(
        `<div
          data-armory-size="40"
          data-armory-embed="items"
          data-armory-ids="${$(this).children(Selector.SPAN).data('armory-ids')}"
        ></div>`
      );
    });

    // Omnipotion
    if ($(Selector.CHECKBOX.OMNIPOTION).prop(PropertyName.CHECKED)) {
      input.modifiers.push(Omnipotion);
      input.tags.push(
        '<div data-armory-size="40" data-armory-embed="items" data-armory-ids="79722"></div>'
      );
    }

    input.modifiers.push({
      flat: { 'Agony Resistance': parseInt($(Selector.INPUT.AGONY_RESISTANCE).val(), 10) || 0 }
    });

    input.profession = $(Selector.TOTAL)
      .find(`a.nav-link[data-${DataAttribute.CLASS}].${ClassName.ACTIVE}`)
      .data(DataAttribute.CLASS);

    input.weapontype = $(Selector.SELECT.WEAPON_TYPE)
      .children(Selector.DROPDOWN_MENU)
      .children(`${Selector.DROPDOWN_ITEM}.${ClassName.ACTIVE}`)
      .text()
      .trim();

    input.affixes = $(Selector.INPUT.AFFIXES)
      .find(Selector.CHECKBOXES_CHECKED)
      .map(function () {
        return $(this).siblings(Selector.LABEL).text().trim();
      })
      .get();

    input.forcedAffixes = [];
    for (let i = 0; i < ForcedSlots.length; i++) {
      const inputValue = $(Selector.INPUT.FORCE + ForcedSlots[i]).val();
      input.forcedAffixes.push(inputValue || '');
    }

    input.rankby = $(Selector.SELECT.RANKBY)
      .children(Selector.DROPDOWN_MENU)
      .children(`${Selector.DROPDOWN_ITEM}.${ClassName.ACTIVE}`)
      .text()
      .trim();

    input.minBoonDuration = parseFloat($(Selector.INPUT.MIN_BOON_DURATION).val());
    input.minHealingPower = parseInt($(Selector.INPUT.MIN_HEALING_POWER).val(), 10);
    input.minToughness = parseInt($(Selector.INPUT.MIN_TOUGHNESS).val(), 10);
    input.maxToughness = parseInt($(Selector.INPUT.MAX_TOUGHNESS).val(), 10);
    input.maxResults = parseInt($(Selector.INPUT.MAX_RESULTS).val(), 10) || 10;

    input.primaryInfusion = $(`${Selector.SELECT.INFUSION}-primary`)
      .children(Selector.DROPDOWN_MENU)
      .children(`${Selector.DROPDOWN_ITEM}.${ClassName.ACTIVE}`)
      .text()
      .trim();
    input.secondaryInfusion = $(`${Selector.SELECT.INFUSION}-secondary`)
      .children(Selector.DROPDOWN_MENU)
      .children(`${Selector.DROPDOWN_ITEM}.${ClassName.ACTIVE}`)
      .text()
      .trim();
    input.primaryMaxInfusions = Math.max(
      parseInt($(`${Selector.SELECT.INFUSION}-primary-max`).val(), 10) || MAX_INFUSIONS,
      0
    );
    input.secondaryMaxInfusions = Math.max(
      parseInt($(`${Selector.SELECT.INFUSION}-secondary-max`).val(), 10) || MAX_INFUSIONS,
      0
    );
    input.infusionNoDuplicates = $('#go-select-infusion-duplicates').prop('checked');

    input.distribution = {
      Power: 0,
      ...Object.fromEntries(Attributes.CONDITION.map((condition) => [condition, 0]))
    };
    input.relevantConditions = [];
    $.each(
      $('#go-condition-distribution-input').find('input[data-go-distribution]'),
      function () {
        const percentage = parseInt($(this).val(), 10);
        if (percentage) {
          input.distribution[$(this).data('go-distribution')] = percentage;
          if ($(this).data('go-distribution') !== 'Power') {
            input.relevantConditions.push($(this).data('go-distribution'));
          }
        }
      }
    );

    optimizer.run(input).catch(e => {
      alert('There was an error in the calculation!\n\n' + e);
      console.log('Caught error in calculation:');
      throw e;
    });
  }

  function characterToRow (character) {
    const { settings } = character;

    return $(
      `<tr>
        <td><strong>
          ${Number(character.attributes[settings.rankby].toFixed(2)).toLocaleString('en-US')}
        </strong></td>
        ${$.map(character.gear, attribute =>
          `<td><samp>${attribute.substring(0, 4)}</samp></td>`
        ).join('')}
        ${$.map(character.infusions, count =>
          `<td><samp>${count}</samp></td>`
        ).join('')}
      </tr>`
    ).data('character', character);
  }

  // Generates the card, that shows up when one clicks on the result.
  function toModal (_character) {
    const toCard = (title, items) =>
      `<div class="card card-${_character.settings.profession} mb-3">
        <div class="card-header card-header-small">${title}</div>
        <div class="card-body p-0">
          <table class="table table-sm table-hover">
            ${items
              ? Object.entries(items).map(([key, value]) =>
                  `<tr><th>${key}</th><td>${value}</td></tr>`
                ).join('')
              : ''}
          </table>
        </div>
      </div>`;

    optimizer.updateAttributes(_character);
    console.debug('character:', _character);

    let modal = '<div class="modal">';
    modal += '<div class="modal-dialog modal-lg">';
    modal += '<div class="modal-content">';

    // Header
    modal += '<div class="modal-header">';
    modal += '<h5 class="modal-title">Character Overview</h5>';
    modal += '<button type="button" class="close" data-dismiss="modal">'
      + '<span class="fa fa-times"></span></button>';
    modal += '</div>';

    // Body
    modal += '<div class="modal-body">';
    modal += '<div class="container-fluid">';
    modal += '<div class="row">';

    // Tags
    modal += `<div class="col-12 text-center">
        <div class="card card-${_character.settings.profession} mb-3">
          <div class="card-header card-header-small">
            Modifiers
          </div>
          <div class="card-body character-tags">
            ${_character.settings.tags.join('')}
          </div>
        </div>
      </div>`;

    // First column
    modal += '<div class="col-12 col-lg-6">';

    const indicators = {};
    $.each(Attributes.INDICATORS, function (index, attribute) {
      indicators[attribute] = Number(_character.attributes[attribute].toFixed(4))
        .toLocaleString('en-US');
    });
    modal += toCard('Indicators', indicators);

    const gear = {};
    $.each(_character.gear, function (index, value) {
      gear[Slots[_character.settings.weapontype][index].name] = value;
    });
    modal += toCard('Gear', gear);

    modal += toCard('Stat Infusions', _character.infusions);

    if (_character.settings.distribution['Power'] !== 100) {
      // effective damage distribution
      const effectiveDamageDistribution = {};
      const totalDamage = _character.attributes['Damage'];
      $.each(_character.settings.distribution, function (key, percentage) {
        if (key === 'Power') {
          const damage = (percentage * _character.attributes['Effective Power']) / 1025;
          effectiveDamageDistribution['Power'] = `${((damage / totalDamage) * 100).toFixed(1)}%`;
        } else {
          const duration = 1 + Math.min(((_character.attributes[`${key} Duration`] || 0)
            + _character.attributes['Condition Duration']) / 100, 1);
          const damage = percentage * duration
            * (_character.attributes[`${key} Damage`] / Condition[key].baseDamage);
          effectiveDamageDistribution[`${key} Damage`]
            = `${((damage / totalDamage) * 100).toFixed(1)}%`;
        }
      });
      modal += toCard('Effective Damage Distribution', effectiveDamageDistribution);

      // damage indicator breakdown
      const damageIndicatorBreakdown = {};
      $.each(_character.settings.distribution, function (key, percentage) {
        if (key === 'Power') {
          const damage = percentage * _character.attributes['Effective Power'] / 1025;
          damageIndicatorBreakdown['Power'] = Number(damage).toFixed(2).toLocaleString('en-US');
        } else {
          const duration = 1 + Math.min(((_character.attributes[`${key} Duration`] || 0)
            + _character.attributes['Condition Duration']) / 100, 1);
          const damage = percentage * duration
            * (_character.attributes[`${key} Damage`] / Condition[key].baseDamage);
          damageIndicatorBreakdown[`${key} Damage`] = Number(damage)
            .toFixed(2)
            .toLocaleString('en-US');
        }
      });
      modal += toCard('Damage indicator breakdown', damageIndicatorBreakdown);
    }

    // effective gain from adding +5 infusions
    const effectiveValues = {};
    $.each(
      ['Power', 'Precision', 'Ferocity', 'Condition Damage', 'Expertise'],
      function (index, value) {
        const temp = optimizer.clone(_character);
        temp.baseAttributes[value] += 5;
        optimizer.updateAttributes(temp);
        effectiveValues[value] = Number(
          (temp.attributes['Damage'] - _character.attributes['Damage']).toFixed(5)
        ).toLocaleString('en-US');
      }
    );
    modal += toCard('Damage increase from +5 of attribute', effectiveValues);

    // effective loss by not having +5 infusions
    const effectiveNegativeValues = {};
    $.each(
      ['Power', 'Precision', 'Ferocity', 'Condition Damage', 'Expertise'],
      function (index, value) {
        const temp = optimizer.clone(_character);
        temp.baseAttributes[value] = Math.max(temp.baseAttributes[value] - 5, 0);
        optimizer.updateAttributes(temp);
        effectiveNegativeValues[value] = Number(
          (temp.attributes['Damage'] - _character.attributes['Damage']).toFixed(5)
        ).toLocaleString('en-US');
      }
    );
    modal += toCard('Damage loss from -5 of attribute', effectiveNegativeValues);

    modal += '</div>';
    // End of first column

    // Second column
    modal += '<div class="col-12 col-lg-6">';

    const primaryAttributes = {};
    $.each(Attributes.PRIMARY, function (index, attribute) {
      primaryAttributes[attribute] = _character.attributes[attribute] || 0;
    });
    modal += toCard('Primary Attributes', primaryAttributes);

    const secondaryAttributes = {};
    $.each(Attributes.SECONDARY, function (index, attribute) {
      secondaryAttributes[attribute] = _character.attributes[attribute] || 0;
    });
    modal += toCard('Secondary Attributes', secondaryAttributes);

    const derivedAttributes = {};
    $.each(Attributes.DERIVED, function (index, attribute) {
      switch (attribute) {
        case 'Critical Chance':
        case 'Boon Duration':
        case 'Condition Duration':
          derivedAttributes[attribute]
            = _character.attributes[attribute] > 100
              ? `100.00% (${_character.attributes[attribute].toFixed(2)})`
              : `${_character.attributes[attribute].toFixed(2)}%`;
          break;
        case 'Critical Damage':
          derivedAttributes[attribute] = `${_character.attributes[attribute].toFixed(2)}%`;
          break;
        default:
          derivedAttributes[attribute] = _character.attributes[attribute];
          break;
      }
    });
    modal += toCard('Derived Attributes', derivedAttributes);

    const effectiveAttributes = {};
    $.each(Attributes.EFFECTIVE, function (index, attribute) {
      const value = _character.attributes[attribute] || 0;
      effectiveAttributes[attribute] = Number(value.toFixed(5)).toLocaleString('en-US');
    });
    modal += toCard('Effective Attributes', effectiveAttributes);

    const durationAttributes = {};
    let showDurations = false;
    $.each(Attributes.BOON_DURATION, function (index, attribute) {
      let value = _character.attributes[attribute];
      if (value) {
        showDurations = true;
        value += _character.attributes['Boon Duration'];
        durationAttributes[attribute] = value > 100
          ? `100.00% (${value.toFixed(2)})`
          : `${value.toFixed(2)}`;
      }
    });
    $.each(Attributes.CONDITION_DURATION, function (index, attribute) {
      let value = _character.attributes[attribute] || 0;
      if (value) {
        showDurations = true;
        value += _character.attributes['Condition Duration'];
        durationAttributes[attribute] = value > 100
          ? `100.00% (${value.toFixed(2)})`
          : `${value.toFixed(2)}`;
      }
    });
    if (showDurations) {
      modal += toCard('Special Durations', durationAttributes);
    }

    const conditionAttributes = {};
    $.each(Attributes.CONDITION_DAMAGE, function (index, attribute) {
      conditionAttributes[attribute] = (_character.attributes[attribute] || 0).toFixed(2);
    });
    modal += toCard('Condition Damage Ticks', conditionAttributes);

    modal += '</div>';
    // End of second column

    modal += '</div>';
    modal += '</div>';
    modal += '</div>';
    // End of Body

    modal += '</div>';
    modal += '</div>';
    modal += '</div>';

    return $(modal);
  }

  function updateProgressBar (percent, done) {
    $(Selector.OUTPUT.PROGRESS_BAR)
      .css('width', `${percent}%`);

    if (!done) {
      $(Selector.OUTPUT.PROGRESS_BAR)
        .find(Selector.SPAN)
        .text(`${percent}%`);
    }
  }

  function lockUI (settings) {
    const locked = true;
    $('body').css('cursor', locked ? 'progress' : 'default');
    $(Selector.INPUT.OPTIMIZER).css('opacity', locked ? 0.5 : 1);
    $(Selector.INPUT.CLASS).css('opacity', locked ? 0.5 : 1);
    $(Selector.START).prop(PropertyName.DISABLED, locked);
    $(Selector.START).find('.fa').toggleClass('fa-spin', locked);
    $(Selector.STOP).prop(PropertyName.DISABLED, !locked);

    $(Selector.OUTPUT.PROGRESS_BAR)
      .closest('td')
      .attr(
        'colspan',
        Slots[settings.weapontype].length + 1
          + !!settings.primaryInfusion + !!settings.secondaryInfusion
      );
    $(Selector.OUTPUT.PROGRESS_BAR)
      .css('width', `${0}%`)
      .children(Selector.SPAN)
      .text('0%');
    $(Selector.OUTPUT.PROGRESS_BAR).parent().show();

    $(Selector.OUTPUT.HEADER).html(
      `<th>
      ${settings.rankby}
      </th>`
        + $.map(Slots[settings.weapontype], slot =>
          `<th title="${slot.name}">
          ${slot.short}
          </th>`
        ).join('')
        + (settings.primaryInfusion
          ? `<th title="${settings.primaryInfusion}">
              ${settings.primaryInfusion.substring(0, 4)}
            </th>`
          : '')
        + (settings.secondaryInfusion
          ? `<th title="${settings.secondaryInfusion}">
              ${settings.secondaryInfusion.substring(0, 4)}
            </th>`
          : '')
    );
  }

  function unlockUI () {
    const locked = false;
    $('body').css('cursor', locked ? 'progress' : 'default');
    $(Selector.INPUT.OPTIMIZER).css('opacity', locked ? 0.5 : 1);
    $(Selector.INPUT.CLASS).css('opacity', locked ? 0.5 : 1);
    $(Selector.START).prop(PropertyName.DISABLED, locked);
    $(Selector.START).find('.fa').toggleClass('fa-spin', locked);
    $(Selector.STOP).prop(PropertyName.DISABLED, !locked);

    if (STOP_SIGNAL) {
      $(Selector.OUTPUT.PROGRESS_BAR).children('span')
        .text(`Cancelled after ${new Date() - startTime}ms (${
            $(Selector.OUTPUT.PROGRESS_BAR).children('span').text()})`);
    } else {
      $(Selector.OUTPUT.PROGRESS_BAR)
        .children('span')
        .text(`Completed in ${new Date() - startTime}ms`);
    }
    if (list.children().length) {
      prettyResults();
    }
  }

  function prettyResults () {
    const getSortValue = character => character.attributes[character.settings.rankby];

    // display indicator line under the results identical to the best
    const bestValue = getSortValue(list.children().eq(0).data('character'));
    // eslint-disable-next-line consistent-return
    list.children().each(function (i, element) {
      if (getSortValue($(element).data('character')) !== bestValue) {
        $(element).prev().css('border-bottom', '4px solid #2f3238');
        return false; // jquery loop break
      }
    });

    // slightly fade the most common affix
    const attrCount = {};
    $('#go-output samp').each(function (i, element) {
      const attr = $(element).text();
      attrCount[attr] = (attrCount[attr] || 0) + 1;
    });
    const max = Math.max.apply(null, Object.values(attrCount));
    let mostFrequent = '';
    Object.entries(attrCount).forEach(([attr, count]) => {
      if (count === max) {
        mostFrequent = attr;
      }
    });
    $('#go-output samp').each(function (i, element) {
      if ($(element).text() === mostFrequent) {
        $(element).css('opacity', '0.7');
      } else {
        $(element).css('color', '#ddd');
      }
    });
  }

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  // Dropdown select
  $(Selector.DROPDOWN_SELECT)
    .children(Selector.DROPDOWN_MENU)
    .children(Selector.DROPDOWN_ITEM)
    .on(Event.CLICK, function (e) {
      if ($(this).hasClass(ClassName.DISABLED)) {
        e.stopPropagation();
        return;
      }

      $(this).siblings(Selector.DROPDOWN_ITEM).removeClass(ClassName.ACTIVE);
      $(this).addClass(ClassName.ACTIVE);
      $(this).parent().siblings(Selector.DROPDOWN_TOGGLE).html($(this).html());
    });

  // Priorities presets
  $(`[data-${DataAttribute.PRIORITIES}]`).on(Event.CLICK, function () {
    if ($(this).data(DataAttribute.PRIORITIES) === 'power-dps') {
      $('[id^=go-checkbox-affix-]').prop(PropertyName.CHECKED, false);
      $(Selector.CHECKBOX.AFFIX.BERSERKER).prop(PropertyName.CHECKED, true);
      $(Selector.CHECKBOX.AFFIX.ASSASSIN).prop(PropertyName.CHECKED, true);
      $(Selector.INPUT.MIN_BOON_DURATION).val(0);
    } else if ($(this).data(DataAttribute.PRIORITIES) === 'power-boon') {
      $('[id^=go-checkbox-affix-]').prop(PropertyName.CHECKED, false);
      $(Selector.CHECKBOX.AFFIX.BERSERKER).prop(PropertyName.CHECKED, true);
      $(Selector.CHECKBOX.AFFIX.ASSASSIN).prop(PropertyName.CHECKED, true);
      $(Selector.CHECKBOX.AFFIX.DIVINER).prop(PropertyName.CHECKED, true);
      $(Selector.INPUT.MIN_BOON_DURATION).val(100);
    } else if ($(this).data(DataAttribute.PRIORITIES) === 'condi-dps') {
      $('[id^=go-checkbox-affix-]').prop(PropertyName.CHECKED, false);
      $(Selector.CHECKBOX.AFFIX.VIPER).prop(PropertyName.CHECKED, true);
      $(Selector.CHECKBOX.AFFIX.SINISTER).prop(PropertyName.CHECKED, true);
      $(Selector.CHECKBOX.AFFIX.GRIEVING).prop(PropertyName.CHECKED, true);
      $(Selector.INPUT.MIN_BOON_DURATION).val(0);
    } else if ($(this).data(DataAttribute.PRIORITIES) === 'heal') {
      $('[id^=go-checkbox-affix-]').prop(PropertyName.CHECKED, false);
      $(Selector.CHECKBOX.AFFIX.HARRIER).prop(PropertyName.CHECKED, true);
      $(Selector.CHECKBOX.AFFIX.MINSTREL).prop(PropertyName.CHECKED, true);
      $(Selector.CHECKBOX.AFFIX.MAGI).prop(PropertyName.CHECKED, true);
      $(Selector.INPUT.MIN_BOON_DURATION).val(100);
    } else if ($(this).data(DataAttribute.PRIORITIES) === 'condi-boon') {
      $('[id^=go-checkbox-affix-]').prop(PropertyName.CHECKED, false);
      $(Selector.CHECKBOX.AFFIX.VIPER).prop(PropertyName.CHECKED, true);
      $(Selector.CHECKBOX.AFFIX.SERAPH).prop(PropertyName.CHECKED, true);
      $(Selector.CHECKBOX.AFFIX.CELESTIAL).prop(PropertyName.CHECKED, true);
      $(Selector.INPUT.MIN_BOON_DURATION).val(79);
    }
  });

  $(`[data-${DataAttribute.PRESELECTION}]`).on(Event.CLICK, function () {

    if ($(this).data(DataAttribute.PRESELECTION) === 'pchrono') {
      $('[id^="go-checkbox-mesmer-"]').prop(PropertyName.CHECKED, false);
      $('#go-checkbox-mesmer-fragility').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-mesmer-egotism').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-mesmer-vicious-expression').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-mesmer-fencers-finesse').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-mesmer-superiority-complex').prop(PropertyName.CHECKED, true);

    } else if ($(this).data(DataAttribute.PRESELECTION) === 'staffmirage') {
      $('[id^="go-checkbox-mesmer-"]').prop(PropertyName.CHECKED, false);
      $('#go-checkbox-mesmer-signet-of-domination').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-mesmer-signet-of-midnight').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-mesmer-illusionary-membrane').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-mesmer-chaotic-potency').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-mesmer-chaotic-potency-2').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-mesmer-chaotic-persistence').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-mesmer-nomads-endurance').prop(PropertyName.CHECKED, true);

    } else if (
      $(this).data(DataAttribute.PRESELECTION) === 'dh'
      || $(this).data(DataAttribute.PRESELECTION) === 'pqfb'
    ) {
      $('[id^="go-checkbox-guardian-"]').prop(PropertyName.CHECKED, false);
      $('#go-checkbox-guardian-fiery-wrath').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-guardian-symbolic-avenger').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-guardian-symbolic-exposure').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-guardian-zealous-blade').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-guardian-retribution').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-guardian-radiant-power').prop(PropertyName.CHECKED, true);

      if ($(this).data(DataAttribute.PRESELECTION) === 'dh') {
        $('#go-checkbox-guardian-zealots-aggression').prop(PropertyName.CHECKED, true);
        $('#go-checkbox-guardian-pure-of-sight').prop(PropertyName.CHECKED, true);
        $('#go-checkbox-guardian-big-game-hunter').prop(PropertyName.CHECKED, true);
      } else {
        $('#go-checkbox-guardian-imbued-haste').prop(PropertyName.CHECKED, true);
      }

    } else if ($(this).data(DataAttribute.PRESELECTION) === 'cfb') {
      $('[id^="go-checkbox-guardian-"]').prop(PropertyName.CHECKED, false);
      $('#go-checkbox-guardian-signet-of-wrath').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-guardian-right-hand-strength').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-guardian-right-hand-strength-3').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-guardian-radiant-fire').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-guardian-radiant-power').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-guardian-amplified-wrath').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-guardian-inspired-virtue-9').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-guardian-virtue-of-retribution').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-guardian-power-of-the-virtuous').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-guardian-imbued-haste').prop(PropertyName.CHECKED, true);

    } else if ($(this).data(DataAttribute.PRESELECTION) === 'cfb2') {
      $('[id^="go-checkbox-guardian-"]').prop(PropertyName.CHECKED, false);
      $('#go-checkbox-guardian-signet-of-wrath').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-guardian-fiery-wrath').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-guardian-symbolic-exposure').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-guardian-kindled-zeal').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-guardian-right-hand-strength').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-guardian-right-hand-strength-3').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-guardian-radiant-fire').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-guardian-radiant-power').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-guardian-amplified-wrath').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-guardian-imbued-haste').prop(PropertyName.CHECKED, true);

    } else if ($(this).data(DataAttribute.PRESELECTION) === 'pbers') {
      $('[id^="go-checkbox-warrior-"]').prop(PropertyName.CHECKED, false);
      $('#go-checkbox-warrior-peak-performance').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-warrior-signet-of-might').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-warrior-great-fortitude').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-warrior-pinnacle-of-strength').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-warrior-berserkers-power').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-warrior-warriors-sprint').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-warrior-double-standards').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-warrior-axe-mastery-one').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-warrior-axe-mastery-two').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-warrior-blood-reaction-with').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-warrior-fatal-frenzy').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-warrior-bloody-roar').prop(PropertyName.CHECKED, true);

    } else if ($(this).data(DataAttribute.PRESELECTION) === 'cbers') {
      $('[id^="go-checkbox-warrior-"]').prop(PropertyName.CHECKED, false);
      $('#go-checkbox-warrior-wounding-precision').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-warrior-deep-strikes').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-warrior-blade-master').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-warrior-blade-master-2').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-warrior-bloodlust').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-warrior-furious').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-warrior-double-standards').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-warrior-heat-the-soul').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-warrior-heat-the-soul-with').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-warrior-fatal-frenzy').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-warrior-king-of-fires').prop(PropertyName.CHECKED, true);

    } else if ($(this).data(DataAttribute.PRESELECTION) === 'pwea') {
      $('[id^="go-checkbox-elementalist-"]').prop(PropertyName.CHECKED, false);
      $('#go-checkbox-elementalist-empowering-flame').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-elementalist-burning-precision').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-elementalist-power-overwhelming').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-elementalist-power-overwhelming-2').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-elementalist-pyromancers-training').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-elementalist-ferocious-winds').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-elementalist-stormsoul').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-elementalist-aeromancers-training').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-elementalist-bolt-to-the-heart').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-elementalist-masters-fortitude').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-elementalist-elements-of-rage').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-elementalist-swift-revenge').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-elementalist-elemental-polyphony-fire').prop(PropertyName.CHECKED, true);

    } else if ($(this).data(DataAttribute.PRESELECTION) === 'cwea') {
      $('[id^="go-checkbox-elementalist-"]').prop(PropertyName.CHECKED, false);
      $('#go-checkbox-elementalist-empowering-flame').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-elementalist-burning-precision').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-elementalist-burning-rage').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-elementalist-pyromancers-training').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-elementalist-stone-flesh').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-elementalist-serrated-stones').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-elementalist-strength-of-stone').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-elementalist-geomancers-defense').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-elementalist-superior-elements').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-elementalist-weavers-prowess').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-elementalist-elemental-polyphony-fire').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-elementalist-elements-of-rage').prop(PropertyName.CHECKED, true);

    } else if ($(this).data(DataAttribute.PRESELECTION) === 'pslb') {
      $('[id^="go-checkbox-ranger-"]').prop(PropertyName.CHECKED, false);
      $('#go-checkbox-ranger-farsighted').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-ranger-predators-onslaught').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-ranger-honed-axes').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-ranger-honed-axes-2').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-ranger-furious-strength').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-ranger-twice-as-vicious').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-ranger-signet-of-the-wild').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-ranger-archetype-ferocious').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-ranger-sb-1').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-ranger-sb-2').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-ranger-sb-3').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-ranger-sb-4').prop(PropertyName.CHECKED, true);

    } else if ($(this).data(DataAttribute.PRESELECTION) === 'cslb') {
      $('[id^="go-checkbox-ranger-"]').prop(PropertyName.CHECKED, false);
      $('#go-checkbox-ranger-hidden-barbs').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-ranger-hunters-tactics').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-ranger-light-on-your-feet').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-ranger-taste-for-danger').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-ranger-ambidexterity').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-ranger-ambidexterity-2').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-ranger-poison-master').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-ranger-furious-strength').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-ranger-twice-as-vicious').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-ranger-archetype-deadly').prop(PropertyName.CHECKED, true);

    } else if ($(this).data(DataAttribute.PRESELECTION) === 'cslb2') {
      $('[id^="go-checkbox-ranger-"]').prop(PropertyName.CHECKED, false);
      $('#go-checkbox-ranger-hidden-barbs').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-ranger-hunters-tactics').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-ranger-taste-for-danger').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-ranger-ambidexterity').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-ranger-ambidexterity-2').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-ranger-poison-master').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-ranger-furious-strength').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-ranger-twice-as-vicious').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-ranger-archetype-deadly').prop(PropertyName.CHECKED, true);

    } else if ($(this).data(DataAttribute.PRESELECTION) === 'hslb') {
      $('[id^="go-checkbox-ranger-"]').prop(PropertyName.CHECKED, false);
      $('#go-checkbox-ranger-hidden-barbs').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-ranger-hunters-tactics').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-ranger-vicious-quarry').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-ranger-honed-axes').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-ranger-honed-axes-3').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-ranger-furious-strength').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-ranger-twice-as-vicious').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-ranger-archetype-deadly').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-ranger-sb-1').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-ranger-sb-2').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-ranger-sb-3').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-ranger-sb-4').prop(PropertyName.CHECKED, true);

    } else if ($(this).data(DataAttribute.PRESELECTION) === 'pren') {
      $('[id^="go-checkbox-revenant-"]').prop(PropertyName.CHECKED, false);
      $('#go-checkbox-revenant-rising-tide').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-revenant-ferocious-aggression').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-revenant-unsuspecting-strikes').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-revenant-destructive-impulses-dual').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-revenant-targeted-destruction').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-revenant-swift-termination').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-revenant-ambush-commander').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-revenant-brutal-momentum').prop(PropertyName.CHECKED, true);

    } else if ($(this).data(DataAttribute.PRESELECTION) === 'cren-deva') {
      $('[id^="go-checkbox-revenant-"]').prop(PropertyName.CHECKED, false);
      $('#go-checkbox-revenant-acolyte-of-torment').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-revenant-seething-malice').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-revenant-pact-of-pain').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-revenant-yearning-empowerment').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-revenant-unsuspecting-strikes').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-revenant-destructive-impulses-mix').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-revenant-targeted-destruction').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-revenant-ambush-commander').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-revenant-blood-fury').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-revenant-heartpiercer').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-revenant-brutal-momentum').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-revenant-lasting-legacy').prop(PropertyName.CHECKED, true);

    } else if ($(this).data(DataAttribute.PRESELECTION) === 'pholo') {
      $('[id^="go-checkbox-engineer-"]').prop(PropertyName.CHECKED, false);
      $('#go-checkbox-engineer-glass-cannon').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-engineer-explosive-temper').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-engineer-shaped-charge').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-engineer-big-boomer').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-engineer-high-caliber').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-engineer-hematic-focus').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-engineer-no-scope').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-engineer-serrated-steel').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-engineer-modified-ammunition-10').prop(PropertyName.CHECKED, true);

    } else if ($(this).data(DataAttribute.PRESELECTION) === 'pscrap') {
      $('[id^="go-checkbox-engineer-"]').prop(PropertyName.CHECKED, false);
      $('#go-checkbox-engineer-glass-cannon').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-engineer-explosive-temper').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-engineer-shaped-charge').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-engineer-big-boomer').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-engineer-high-caliber').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-engineer-hematic-focus').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-engineer-no-scope').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-engineer-serrated-steel').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-engineer-modified-ammunition-10').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-engineer-object-in-motion-2').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-engineer-impact-savant').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-engineer-applied-force').prop(PropertyName.CHECKED, true);

    } else if ($(this).data(DataAttribute.PRESELECTION) === 'cholo') {
      $('[id^="go-checkbox-engineer-"]').prop(PropertyName.CHECKED, false);
      $('#go-checkbox-engineer-glass-cannon').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-engineer-explosive-temper').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-engineer-shaped-charge').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-engineer-chemical-rounds').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-engineer-hematic-focus').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-engineer-thermal-vision').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-engineer-serrated-steel').prop(PropertyName.CHECKED, true);
      $('#go-checkbox-engineer-incendiary-powder').prop(PropertyName.CHECKED, true);
    }
  });

  // Infusion presets
  $(`${Selector.SELECT.INFUSION}-presets button`).click(function () {
    const infusions = $(this).text() === 'None'
      ? ['None', 'None']
      : $(this).text().split(' + ');
    $('#go-select-infusion-primary .dropdown-item').each(function () {
      if ($(this).text().trim() === infusions[0]) {
        $(this).click();
      }
    });
    $('#go-select-infusion-secondary .dropdown-item').each(function () {
      if ($(this).text().trim() === infusions[1]) {
        $(this).click();
      }
    });
  });

  // Buff presets
  $(`[data-${DataAttribute.BUFFS}]`).on(Event.CLICK, function () {
    if ($(this).data(DataAttribute.BUFFS) === 'none') {
      $(Selector.INPUT.BUFFS).find(Selector.CHECKBOXES).prop(PropertyName.CHECKED, false);
    } else if ($(this).data(DataAttribute.BUFFS) === 'fractal') {
      $(Selector.INPUT.BUFFS).find(Selector.CHECKBOXES).prop(PropertyName.CHECKED, false);
      $(Selector.CHECKBOX.BUFF.MIGHT).prop(PropertyName.CHECKED, true);
      $(Selector.CHECKBOX.BUFF.FURY).prop(PropertyName.CHECKED, true);
      $(Selector.CHECKBOX.BUFF.VULNERABILITY).prop(PropertyName.CHECKED, true);
      $(Selector.CHECKBOX.BUFF.BANNER_OF_STRENGTH).prop(PropertyName.CHECKED, true);
      $(Selector.CHECKBOX.BUFF.BANNER_OF_DISCIPLINE).prop(PropertyName.CHECKED, true);
      $(Selector.CHECKBOX.BUFF.EMPOWER_ALLIES).prop(PropertyName.CHECKED, false);
      $(Selector.CHECKBOX.BUFF.SPOTTER).prop(PropertyName.CHECKED, false);
      $(Selector.CHECKBOX.BUFF.BANE_SIGNET).prop(PropertyName.CHECKED, true);
      $(Selector.CHECKBOX.BUFF.FROST_SPIRIT).prop(PropertyName.CHECKED, true);
      $(Selector.CHECKBOX.BUFF.ASSASSINS_PRESENCE).prop(PropertyName.CHECKED, true);
    } else if ($(this).data(DataAttribute.BUFFS) === 'benchmark') {
      $(Selector.INPUT.BUFFS).find(Selector.CHECKBOXES).prop(PropertyName.CHECKED, false);
      $(Selector.CHECKBOX.BUFF.MIGHT).prop(PropertyName.CHECKED, true);
      $(Selector.CHECKBOX.BUFF.FURY).prop(PropertyName.CHECKED, true);
      $(Selector.CHECKBOX.BUFF.VULNERABILITY).prop(PropertyName.CHECKED, true);
      $(Selector.CHECKBOX.BUFF.BANNER_OF_STRENGTH).prop(PropertyName.CHECKED, true);
      $(Selector.CHECKBOX.BUFF.BANNER_OF_DISCIPLINE).prop(PropertyName.CHECKED, true);
      $(Selector.CHECKBOX.BUFF.EMPOWER_ALLIES).prop(PropertyName.CHECKED, true);
      $(Selector.CHECKBOX.BUFF.SPOTTER).prop(PropertyName.CHECKED, true);
      $(Selector.CHECKBOX.BUFF.BANE_SIGNET).prop(PropertyName.CHECKED, false);
      $(Selector.CHECKBOX.BUFF.FROST_SPIRIT).prop(PropertyName.CHECKED, true);
      $(Selector.CHECKBOX.BUFF.ASSASSINS_PRESENCE).prop(PropertyName.CHECKED, false);
    } else if ($(this).data(DataAttribute.BUFFS) === 'all') {
      $(Selector.INPUT.BUFFS).find(Selector.CHECKBOXES).prop(PropertyName.CHECKED, true);
    }
  });

  // Distribution presets
  $(`[data-${DataAttribute.DISTRIBUTION}]`).on(Event.CLICK, function () {
    switch ($(this).data(DataAttribute.DISTRIBUTION)) {
      case 'power':
        $('#go-condition-distribution-slider')[0].noUiSlider.set([100, 100, 100, 100, 100]);
        break;
      case 'cwarr':
        $('#go-condition-distribution-slider')[0].noUiSlider.set([27, 81, 96, 99, 100]);
        break;
      case 'cfb':
        $('#go-condition-distribution-slider')[0].noUiSlider.set([31, 96, 99, 99, 100]);
        break;
      case 'cfb2':
        $('#go-condition-distribution-slider')[0].noUiSlider.set([24, 96, 99, 99, 100]);
        break;
      case 'cweasw':
        $('#go-condition-distribution-slider')[0].noUiSlider.set([36, 89, 100, 100, 100]);
        break;
      case 'cweadagg':
        $('#go-condition-distribution-slider')[0].noUiSlider.set([29, 84, 100, 100, 100]);
        break;
      case 'cren-deva':
        $('#go-condition-distribution-slider')[0].noUiSlider.set([44, 64, 75, 80, 100]);
        break;
      case 'cren-invo':
        $('#go-condition-distribution-slider')[0].noUiSlider.set([42, 64, 75, 80, 100]);
        break;
      case 'cslb':
        $('#go-condition-distribution-slider')[0].noUiSlider.set([30, 45, 75, 100, 100]);
        break;
      case 'cslb2':
        $('#go-condition-distribution-slider')[0].noUiSlider.set([30, 52, 78, 100, 100]);
        break;
      case 'hslb':
        $('#go-condition-distribution-slider')[0].noUiSlider.set([43, 61, 89, 100, 100]);
        break;
      case 'cholo':
        $('#go-condition-distribution-slider')[0].noUiSlider.set([31, 77, 86, 95, 95]);
        break;
      default:
        throw new Error(`Error: unimplemented button: ${$(this).data(DataAttribute.DISTRIBUTION)}`);
    }
  });

  // Calculate button
  $(Selector.START).on(Event.CLICK, start);
  $(Selector.STOP).on(Event.CLICK, function () {
    STOP_SIGNAL = true;
  });

  // Modal window
  $(Selector.OUTPUT.LIST).on(Event.CLICK, 'tr', function () {
    toModal($(this).data('character')).modal('show');
    $.getScript('https://unpkg.com/armory-embeds/armory-embeds.js');
  });

  // After class select
  $('#gear-optimizer')
    .find('> .card-nav > .nav-tabs')
    .on('shown.bs.tab', 'a.nav-link', function () {
      $('#go-input-class').siblings().removeClass('d-none');
    });

  /* global noUiSlider */
  noUiSlider.create($('#go-condition-distribution-slider')[0], {
    range: {
      min: [0],
      max: [100]
    },
    start: [100, 100, 100, 100, 100],
    connect: [true, true, true, true, true, true],
    step: 1,
    pips: {
      mode: 'values',
      values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
      density: 1
    }
  });

  for (let i = 0; i < 6; i++) {
    $('#go-condition-distribution-slider')[0]
      .querySelectorAll('.noUi-connect')[i]
      .classList.add(`slider-bar-${i}`);
  }

  $('#go-condition-distribution-slider')[0].noUiSlider.on('update', function (values, handle) {
    switch (handle) {
      case 0:
        $('#go-input-power-percentage').val(parseInt(values[0], 10));
        $('#go-input-burning-percentage').val(values[1] - values[0]);
        break;
      case 1:
        $('#go-input-burning-percentage').val(values[1] - values[0]);
        $('#go-input-bleeding-percentage').val(values[2] - values[1]);
        break;
      case 2:
        $('#go-input-bleeding-percentage').val(values[2] - values[1]);
        $('#go-input-poison-percentage').val(values[3] - values[2]);
        break;
      case 3:
        $('#go-input-poison-percentage').val(values[3] - values[2]);
        $('#go-input-torment-percentage').val(values[4] - values[3]);
        break;
      case 4:
        $('#go-input-torment-percentage').val(values[4] - values[3]);
        $('#go-input-confusion-percentage').val(100 - values[4]);
        break;
      // no default
    }
  });

  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

  $('#debug-additive').click(function () {
    if (!$('.debug-legend').length) {
      $('#go-input-class .card-body').prepend($('<div class="debug-legend"></div>'));
    } else {
      $('#debug-legend').empty();
    }

    $('.debug-legend').html(`
      Damage bonus stacks:
      <span style="color: green">multiplicatively (normal)</span> ///
      <span style="color: blue">additively with other additive mods</span>
    `);

    $('#go-input-class .input').css('color', 'inherit');

    $('#go-input-class .input').each((index, inputElement) => {
      const modifier = $(inputElement).find('input').attr('data-go-modifier');
      if (!modifier) {
        return;
      }
      if (modifier.includes('add: ')) {
        $(inputElement).css('color', 'blue');
      }
      if (modifier.includes('"Effective Power')) {
        $(inputElement).css('color', 'green');
      }
      if (modifier.includes('"Effective Condition Damage')) {
        $(inputElement).css('color', 'green');
      }
      if (
        modifier.includes('add: ')
        && (modifier.includes('"Effective Power')
          || modifier.includes('"Effective Condition Damage'))
      ) {
        $(inputElement).css('color', 'purple');
      }
    });
  });

  $('#debug-converted').click(function () {
    if (!$('.debug-legend').length) {
      $('#go-input-class .card-body').prepend($('<div class="debug-legend"></div>'));
    } else {
      $('#debug-legend').empty();
    }

    $('.debug-legend').html(`
      Added buff stats will be:
      <span style="color: yellow">converted by e.g. sharpening stones</span> ///
      <span style="color: orange">not converted by e.g. sharpening stones</span>
    `);

    $('#go-input-class .input').css('color', 'inherit');

    $('#go-input-class .input').each((index, inputElement) => {
      const modifier = $(inputElement).find('input').attr('data-go-modifier');
      if (!modifier) {
        return;
      }
      if (modifier.includes('flat')) {
        $(inputElement).css('color', 'yellow');
      }
      if (modifier.includes('buff')) {
        $(inputElement).css('color', 'orange');
      }
      if (modifier.includes('flat') && modifier.includes('buff')) {
        $(inputElement).css('color', 'purple');
      }
    });
  });
})(jQuery);
