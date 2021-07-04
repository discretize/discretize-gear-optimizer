/**
 * --------------------------------------------------------------------------
 * Gear Optimizer
 * --------------------------------------------------------------------------
 */
const Optimizer = function ($) {

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
        VULNERABILITY: Prefix.GEAR_OPTIMIZER + Prefix.CHECKBOX + 'condition-vulnerability',
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

      MAX_RESULTS: Prefix.GEAR_OPTIMIZER + Prefix.INPUT + 'max-results'
    },

    SELECT: {
      RANKBY: Prefix.GEAR_OPTIMIZER + Prefix.SELECT + 'rank-by',
      WEAPON_TYPE: Prefix.GEAR_OPTIMIZER + Prefix.SELECT + 'weapon-type',
      RUNES: Prefix.GEAR_OPTIMIZER + Prefix.SELECT + 'runes',
      SIGIL_1: Prefix.GEAR_OPTIMIZER + Prefix.SELECT + 'sigil-1',
      SIGIL_2: Prefix.GEAR_OPTIMIZER + Prefix.SELECT + 'sigil-2',
      FOOD: Prefix.GEAR_OPTIMIZER + Prefix.SELECT + 'food',
      UTILITY: Prefix.GEAR_OPTIMIZER + Prefix.SELECT + 'utility',
      INFUSIONS: Prefix.GEAR_OPTIMIZER + Prefix.SELECT + 'infusions'
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

  let STOP_SIGNAL = false;

  /**
   * ------------------------------------------------------------------------
   * GW2 Data
   * ------------------------------------------------------------------------
   */

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

    EFFECTIVE: [
      'Effective Power',
      'Effective Health',
      'Effective Healing'
    ],

    CONDITION_DAMAGE: [
      'Bleeding Damage',
      'Burning Damage',
      'Confusion Damage',
      'Poison Damage',
      'Torment Damage'
    ],

    INDICATORS: [
      'Damage',
      'Survivability',
      'Healing'
    ]
  });

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

  const INFUSION_AMOUNT = 18;
  const INFUSION_BONUS = 5;
  const INFUSION_TOTAL = INFUSION_AMOUNT * INFUSION_BONUS;

  /**
   * ------------------------------------------------------------------------
   * Optimizer definition
   * ------------------------------------------------------------------------
   */

  const Optimizer = function () {

    // Constructor.
    // Fetches values from the html file, selected checkboxes and optimization goals.
    function Optimizer () {
      const _optimizer = this;

      _optimizer.startTime = new Date();

      const _modifiers = [];
      const _tags = [];

      // Checkbox modifiers
      $.each($([Selector.INPUT.CLASS + ' ' + Selector.INPUT.TAB_PANE_ACTIVE,
        Selector.INPUT.BUFFS].join(',')).find(Selector.CHECKBOXES_CHECKED + '[data-'
          + DataAttribute.MODIFIER + ']'), function () {
        _modifiers.push($(this).data(DataAttribute.MODIFIER));
        const span = $(this).siblings(Selector.LABEL).children(Selector.SPAN);
        if (span.is('[data-armory-ids]')) {
          const type = span.children('div').attr('class').split(' ')[1];
          _tags.push('<div data-armory-size="40" data-armory-embed="' + type.substring(
            5, type.length - 6) + '" data-armory-ids="' + span.data('armory-ids') + '"></div>');
        } else if (span.hasClass('icon')) {
          _tags.push('<div class="icon icon-lg ' + span.attr('class').split(' ')[1] + '"></div>');
        }
      });

      // Select modifiers
      $.each($([Selector.SELECT.RUNES, Selector.SELECT.SIGIL_1, Selector.SELECT.SIGIL_2,
        Selector.SELECT.FOOD, Selector.SELECT.UTILITY].join(','))
        .children(Selector.DROPDOWN_MENU).children(Selector.DROPDOWN_ITEM + '.' + ClassName.ACTIVE
          + '[data-' + DataAttribute.MODIFIER + ']'), function () {
        _modifiers.push($(this).data(DataAttribute.MODIFIER));
        _tags.push('<div data-armory-size="40" data-armory-embed="items" data-armory-ids="' + $(
          this).children(Selector.SPAN).data('armory-ids') + '"></div>');
      });

      // Omnipotion
      if ($(Selector.CHECKBOX.OMNIPOTION).prop(PropertyName.CHECKED)) {
        _modifiers.push(Omnipotion);
        _tags.push(
          '<div data-armory-size="40" data-armory-embed="items" data-armory-ids="79722"></div>'
        );
      }

      _modifiers.push({
        flat: { 'Agony Resistance': parseInt($(Selector.INPUT.AGONY_RESISTANCE).val()) }
      });

      _optimizer.settings = {};
      const { settings } = _optimizer;

      settings.profession = $(Selector.TOTAL)
        .find('a.nav-link[data-' + DataAttribute.CLASS + '].' + ClassName.ACTIVE)
        .data(DataAttribute.CLASS);
      settings.weapontype = $(Selector.SELECT.WEAPON_TYPE)
        .children(Selector.DROPDOWN_MENU)
        .children(Selector.DROPDOWN_ITEM + '.' + ClassName.ACTIVE)
        .text()
        .trim();

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

      const addModifiers = function (modifiers) {
        if (!modifiers) {
          return;
        }

        if (!settings.modifiers) {
          settings.modifiers = {};
        }

        $.each(modifiers, function (type, modifier) {
          if (type && modifier !== undefined) {
            if (!settings.modifiers[type]) {
              settings.modifiers[type] = {};
            }

            // eslint-disable-next-line no-empty
            if (!type) {
            } else if (type === 'bountiful-maintenance-oil') {
              settings.modifiers[type] = modifier;
            } else {
              $.each(modifier, function (attribute, value) {
                if (attribute && value) {
                  switch (type) {
                    case 'multiplier':
                      if (
                        attribute !== 'Effective Condition Damage'
                        && attribute !== 'Critical Damage'
                        && !Attributes.EFFECTIVE.includes(attribute)
                        && !Attributes.CONDITION_DAMAGE.includes(attribute)
                        && attribute !== 'add: Effective Condition Damage'
                        && attribute !== 'add: Effective Power'
                      ) {
                        console.error(modifier);
                        throw (
                          'Multipliers can only modify primary, secondary or'
                          + 'effective attributes, not '
                          + attribute
                        );
                      }
                      if (!settings.modifiers[type][attribute]) {
                        settings.modifiers[type][attribute] = [];
                        settings.modifiers[type][attribute].push(value);
                      } else if (attribute.startsWith('add: ')) {
                        settings.modifiers[type][attribute][0] += value;
                      } else {
                        // combine multiplicative modifiers
                        settings.modifiers[type][attribute][0]
                            = (settings.modifiers[type][attribute][0] + 1.0) * (value + 1.0) - 1;
                      }
                      break;
                    case 'flat':
                    case 'buff':
                      if (
                        !Attributes.PRIMARY.includes(attribute)
                        && !Attributes.SECONDARY.includes(attribute)
                        && !Attributes.DERIVED.includes(attribute)
                        && !Attributes.BOON_DURATION.includes(attribute)
                        && !Attributes.CONDITION_DURATION.includes(attribute)
                      ) {
                        console.error(modifier);
                        throw (
                          'Flat or buff modifiers can only increase primary, secondary or'
                          + 'derived attributes, not '
                          + attribute
                        );
                      }

                      settings.modifiers[type][attribute]
                        = (settings.modifiers[type][attribute] || 0) + value;
                      break;
                    case 'convert':
                      if (
                        !Attributes.PRIMARY.includes(attribute)
                        && !Attributes.SECONDARY.includes(attribute)
                      ) {
                        console.error(modifier);
                        throw 'Conversions can only modify primary or secondary attributes, not '
                          + attribute;
                      }

                      if (!settings.modifiers[type][attribute]) {
                        settings.modifiers[type][attribute] = {};
                      }

                      $.each(value, function (source, conversion) {
                        settings.modifiers[type][attribute][source]
                          = (settings.modifiers[type][attribute][source] || 0) + conversion;
                      });
                      break;
                  }
                }
              });
            }
          }
        });
      };

      $.each(_modifiers, function (index, modifier) {
        addModifiers(modifier);
      });

      settings.tags = _tags;

      settings.affixes = $(Selector.INPUT.AFFIXES)
        .find(Selector.CHECKBOXES_CHECKED)
        .map(function () {
          return $(this).siblings(Selector.LABEL).text().trim();
        })
        .get();

      settings.rankby = $(Selector.SELECT.RANKBY)
        .children(Selector.DROPDOWN_MENU)
        .children(Selector.DROPDOWN_ITEM + '.' + ClassName.ACTIVE)
        .text()
        .trim();

      settings.minBoonDuration = parseFloat($(Selector.INPUT.MIN_BOON_DURATION).val());
      settings.minHealingPower = parseInt($(Selector.INPUT.MIN_HEALING_POWER).val());
      settings.minToughness = parseInt($(Selector.INPUT.MIN_TOUGHNESS).val());
      settings.maxToughness = parseInt($(Selector.INPUT.MAX_TOUGHNESS).val());
      settings.maxResults = parseInt($(Selector.INPUT.MAX_RESULTS).val());

      settings.statInfusions = $(Selector.SELECT.INFUSIONS)
        .children(Selector.DROPDOWN_MENU)
        .children(Selector.DROPDOWN_ITEM + '.' + ClassName.ACTIVE)
        .text()
        .trim();

      if (settings.statInfusions !== 'None') {
        settings.primaryInfusion = settings.statInfusions.split('+')[0].trim();
        settings.secondaryInfusion
          = settings.statInfusions.indexOf('+') !== -1
            ? settings.statInfusions.split('+')[1].trim()
            : null;

        if (
          !Attributes.PRIMARY.includes(settings.primaryInfusion)
          && !Attributes.SECONDARY.includes(settings.primaryInfusion)
          && !Attributes.DERIVED.includes(settings.primaryInfusion)
          && !Attributes.BOON_DURATION.includes(settings.primaryInfusion)
          && !Attributes.CONDITION_DURATION.includes(settings.primaryInfusion)
        ) {
          throw 'Infusions can only increase primary, secondary or derived attributes, not '
            + settings.primaryInfusion;
        }
        if (
          settings.secondaryInfusion
          && !Attributes.PRIMARY.includes(settings.secondaryInfusion)
          && !Attributes.SECONDARY.includes(settings.secondaryInfusion)
          && !Attributes.DERIVED.includes(settings.secondaryInfusion)
          && !Attributes.BOON_DURATION.includes(settings.secondaryInfusion)
          && !Attributes.CONDITION_DURATION.includes(settings.secondaryInfusion)
        ) {
          throw 'Infusions can only increase primary, secondary or derived attributes, not '
            + settings.secondaryInfusion;
        }
      }

      settings.distribution = {};
      settings.relevantConditions = [];
      $.each(
        $('#go-condition-distribution-input').find('input[data-go-distribution]'),
        function () {
          const percentage = parseInt($(this).val());
          if (percentage) {
            settings.distribution[$(this).data('go-distribution')] = percentage;
            if ($(this).data('go-distribution') !== 'Power') {
              settings.relevantConditions.push($(this).data('go-distribution'));
            }
          }
        }
      );

      Object.freeze(_optimizer.settings);
    }

    Optimizer.prototype.calculate = function () {
      const _optimizer = this;
      const { settings } = _optimizer;

      const freeSlots = settings.weapontype === 'Dual wield' ? 5 : 6;
      const pairs = settings.weapontype === 'Dual wield' ? 3 : 2;
      const triplets = 1;
      _optimizer.calculationTotal
        = Math.pow(settings.affixes.length, freeSlots)
        * Math.pow(settings.affixes.length + _optimizer._choose(settings.affixes.length, 2), pairs)
        * (settings.affixes.length
          + settings.affixes.length * (settings.affixes.length - triplets)
          + _optimizer._choose(settings.affixes.length, 3));

      STOP_SIGNAL = false;
      _optimizer.calculationRuns = 0;
      _optimizer.list = $(Selector.OUTPUT.LIST);
      _optimizer.list.empty();

      $(Selector.OUTPUT.PROGRESS_BAR)
        .closest('td')
        .attr(
          'colspan',
          Slots[settings.weapontype].length + 1
            + !!settings.primaryInfusion + !!settings.secondaryInfusion
        );
      $(Selector.OUTPUT.PROGRESS_BAR)
        .css('width', 0 + '%')
        .children(Selector.SPAN)
        .text('0%');
      $(Selector.OUTPUT.PROGRESS_BAR).parent().show();

      $(Selector.OUTPUT.HEADER).html(
        '<th>'
          + settings.rankby
          + '</th>'
          + $.map(Slots[settings.weapontype], function (index) {
            return '<th title="' + index.name + '">' + index.short + '</th>';
          }).join('')
          + (settings.primaryInfusion
            ? '<th title="'
              + settings.primaryInfusion
              + '">'
              + settings.primaryInfusion.substring(0, 4)
              + '</th>'
            : '')
          + (settings.secondaryInfusion
            ? '<th title="'
              + settings.secondaryInfusion
              + '">'
              + settings.secondaryInfusion.substring(0, 4)
              + '</th>'
            : '')
      );

      _optimizer._lock(true);

      _optimizer.calculationQueue = [];
      _optimizer.calculationQueue.push([]);
      _optimizer.calculationStatsQueue = [];
      _optimizer.calculationStatsQueue.push({});

      _optimizer.timer = _optimizer.startTime;
      setTimeout(_optimizer._advanceCalculation.bind(_optimizer), 0);
    };

    Optimizer.prototype._lock = function (lock) {
      $('body').css('cursor', lock ? 'progress' : 'default');
      $(Selector.INPUT.OPTIMIZER).css('opacity', lock ? 0.5 : 1);
      $(Selector.INPUT.CLASS).css('opacity', lock ? 0.5 : 1);
      $(Selector.START).prop(PropertyName.DISABLED, lock);
      $(Selector.START).find('.fa').toggleClass('fa-spin', lock);
      $(Selector.STOP).prop(PropertyName.DISABLED, !lock);

      if (!lock) {
        if (STOP_SIGNAL) {
          $(Selector.OUTPUT.PROGRESS_BAR).children('span')
            .text('Cancelled after ' + (new Date() - this.startTime) + 'ms ('
              + $(Selector.OUTPUT.PROGRESS_BAR).children('span').text() + ')');
        } else {
          $(Selector.OUTPUT.PROGRESS_BAR)
            .children('span')
            .text('Completed in ' + (new Date() - this.startTime) + 'ms');
        }
      }
    };

    Optimizer.prototype._advanceCalculation = function () {
      const _optimizer = this;
      const { settings } = _optimizer;

      try {
        let cycles = 1000;
        while (_optimizer.calculationQueue.length && cycles--) {
          if (STOP_SIGNAL) {
            throw 0;
          }

          // only update UI at around 15fps
          if (cycles === 1 && new Date() - _optimizer.timer < 55) {
            cycles = 1000;
          }

          const gear = _optimizer.calculationQueue.pop();
          const gearStats = _optimizer.calculationStatsQueue.pop();
          const nextSlot = gear.length;

          if (
            // Rings/Accs/Weapons
            ((nextSlot === 9 || nextSlot === 11 || nextSlot === 14)
              && gear[nextSlot - 2] > gear[nextSlot - 1])
            // Shoulders/Gloves/Boots
            || (nextSlot === 6 && (gear[1] > gear[3] || gear[3] > gear[5]))
          ) {
            continue;
          }

          if (nextSlot >= Slots[settings.weapontype].length) {
            _optimizer.calculationRuns++;
            _optimizer._testCharacter(gear, gearStats);
            continue;
          }

          // Recycle for Affix 0, clone for 1+
          for (let i = 1; i < settings.affixes.length; i++) {
            const newGear = gear.slice();
            const newGearStats = Object.assign({}, gearStats);

            const currentAffix = settings.affixes[i];
            newGear[nextSlot] = currentAffix;

            // add gear stats
            $.each(
              Slots[settings.weapontype][nextSlot].item[Affix[currentAffix].type],
              function (type, bonus) {
                for (const stat of Affix[currentAffix].bonuses[type]) {
                  newGearStats[stat] = (newGearStats[stat] || 0) + bonus;
                }
              }
            );

            _optimizer.calculationQueue.push(newGear);
            _optimizer.calculationStatsQueue.push(newGearStats);
          }
          const currentAffix = settings.affixes[0];
          gear[nextSlot] = currentAffix;

          // add gear stats
          $.each(
            Slots[settings.weapontype][nextSlot].item[Affix[currentAffix].type],
            function (type, bonus) {
              for (const stat of Affix[currentAffix].bonuses[type]) {
                gearStats[stat] = (gearStats[stat] || 0) + bonus;
              }
            }
          );

          _optimizer.calculationQueue.push(gear);
          _optimizer.calculationStatsQueue.push(gearStats);
        }

        if (_optimizer.calculationQueue.length) {
          const percent = Math.floor(
            (_optimizer.calculationRuns * 100) / _optimizer.calculationTotal
          );
          $(Selector.OUTPUT.PROGRESS_BAR)
            .css('width', percent + '%')
            .find(Selector.SPAN)
            .text(percent + '%');

          _optimizer.timer = new Date();
          setTimeout(_optimizer._advanceCalculation.bind(_optimizer), 0);
        } else {
          const percent = Math.floor(
            (_optimizer.calculationRuns * 100) / _optimizer.calculationTotal
          );
          $(Selector.OUTPUT.PROGRESS_BAR).css('width', percent + '%');

          _optimizer._lock(false);
        }
      } catch (e) {
        _optimizer._lock(false);
        if (e !== 0) {
          throw e;
        }
      }
    };

    Optimizer.prototype._testCharacter = function (gear, gearStats) {
      const _optimizer = this;
      const { settings } = _optimizer;

      if (!gear) {
        return;
      }

      const character = {
        gear: gear, // passed by reference
        settings: _optimizer.settings, // passed by reference
        attributes: null,
        valid: true,
        baseAttributes: Object.assign({}, settings.baseAttributes)
      };

      // apply gear
      for (const stat in gearStats) {
        character.baseAttributes[stat] += gearStats[stat];
      }
      // $.each(gear, function (index, affix) {
      //     $.each(Slots[character.settings.weapontype][index].item[Affix[affix].type], function (type, bonus) {
      //         $.each(Affix[affix].bonuses[type], function (index, stat) {
      //         for (let stat of Affix[affix].bonuses[type]) {
      //             character.baseAttributes[stat] = (character.baseAttributes[stat] || 0) + bonus;
      //         }
      //     });
      // });

      // used to skip calculating infusions if they don't contribute at all
      const testInfusionUsefulness = function () {
        const temp = clone(character);
        addBaseStats(temp, settings.primaryInfusion, INFUSION_TOTAL);
        addBaseStats(temp, settings.secondaryInfusion, INFUSION_TOTAL);
        updateAttributes(temp, true);
        return temp.attributes[settings.rankby] > _optimizer.worstScore;
      };

      if (!settings.primaryInfusion) {
        updateAttributes(character);
        _optimizer._insertCharacter(character);
      } else if (!settings.secondaryInfusion) {
        character.infusions = { [settings.primaryInfusion]: INFUSION_AMOUNT };
        addBaseStats(character, settings.primaryInfusion, INFUSION_TOTAL);
        updateAttributes(character);
        _optimizer._insertCharacter(character);
      } else if (!_optimizer.worstScore || testInfusionUsefulness()) {
        _optimizer._applySecondaryInfusions(character);
      }
    };

    Optimizer.prototype._insertCharacter = function (character) {
      const _optimizer = this;
      const { settings } = _optimizer;

      if (
        !character.valid
        || (_optimizer.worstScore && _optimizer.worstScore > character.attributes[settings.rankby])
      ) {
        return;
      }

      if (_optimizer.list.children().length === 0) {
        _optimizer.list.append(_optimizer._characterToRow(character));
      } else {
        let position = _optimizer.list.children().length + 1;
        while (position > 1 && _optimizer._characterLT(
          _optimizer.list.children().eq(position - 2).data('character'), character)) {
          position--;
        }

        if (position > settings.maxResults) {
          return;
        }

        if (position <= _optimizer.list.children().length) {
          _optimizer
            ._characterToRow(character)
            .insertBefore(_optimizer.list.children().eq(position - 1));

          if (_optimizer.list.children().length > settings.maxResults) {
            _optimizer.list.children().last().remove();
          }
        } else {
          _optimizer.list.append(_optimizer._characterToRow(character));
        }

        if (_optimizer.list.children().length === settings.maxResults) {
          _optimizer.worstScore = _optimizer.list.children().last()
            .data('character').attributes[settings.rankby];
        }
      }
    };

    const addBaseStats = function (character, stat, amount) {
      character.baseAttributes[stat] = (character.baseAttributes[stat] || 0) + amount;
    };
    Optimizer.prototype._applySecondaryInfusions = function (character) {
      const _optimizer = this;
      const { settings } = _optimizer;

      let best = null;
      for (let primaryBonus = INFUSION_TOTAL; primaryBonus >= 0; primaryBonus -= INFUSION_BONUS) {
        const temp = clone(character);
        addBaseStats(temp, settings.primaryInfusion, primaryBonus);
        addBaseStats(temp, settings.secondaryInfusion, INFUSION_TOTAL - primaryBonus);
        updateAttributes(temp);
        if (!temp.valid) {
          continue;
        }
        temp.infusions = {
          [settings.primaryInfusion]: primaryBonus / INFUSION_BONUS,
          [settings.secondaryInfusion]: (INFUSION_TOTAL - primaryBonus) / INFUSION_BONUS
        };
        if (!best || _optimizer._characterLT(best, temp)) {
          best = temp;
        }
      }
      if (best) {
        _optimizer._insertCharacter(best);
      }
    };

    Optimizer.prototype._characterToRow = function (character) {
      const { settings } = character;
      return $(
        '<tr><td><strong>'
          + Number(character.attributes[settings.rankby].toFixed(2)).toLocaleString('en-US')
          + '</strong></td>'
          + $.map(character.gear, function (value) {
            return '<td><samp>' + value.substring(0, 4) + '</samp></td>';
          }).join('')
          + $.map(character.infusions, function (value) {
            return '<td><samp>' + value + '</samp></td>';
          }).join('')
          + '</tr>'
      ).data('character', character);
    };

    // returns true if B is better than A
    Optimizer.prototype._characterLT = function (a, b) {
      const _optimizer = this;
      const { settings } = _optimizer;

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
          sumA += a.attributes.hasOwnProperty(attribute) ? a.attributes[attribute] : 0;
          sumB += b.attributes.hasOwnProperty(attribute) ? b.attributes[attribute] : 0;
        }

        return sumA < sumB;
      }

      return a.attributes[settings.rankby] < b.attributes[settings.rankby];
    };

    Optimizer.prototype._choose = function (n, k) {
      let num = 1;
      let denom = 1;

      for (let i = 0; i < k; i++) {
        num *= (n - i);
        denom *= (i + 1);
      }

      return num / denom;
    };

    return Optimizer;
  }();

  /**
   * Creates an {attributes} object parameter in the given character object and calculates stats
   * and damage/healing/survivability scores.
   *
   * If alwaysCalculateAll is not set, this function will cancel itself early if the character's
   * boon duration/toughness/healing power are not valid according to the optimizer settings.
   */
  const updateAttributes = function (_character, alwaysCalculateAll = false) {
    const { settings } = _character;

    _character.attributes = Object.assign({}, _character.baseAttributes);

    _character.valid = true;

    $.each(settings.modifiers['flat'], function (attribute, bonus) {
      _character.attributes[attribute] = (_character.attributes[attribute] || 0) + bonus;
    });

    const preConversionAttributes = Object.assign({}, _character.attributes);
    $.each(settings.modifiers['convert'], function (attribute, conversion) {
      $.each(conversion, function (source, percent) {
        _character.attributes[attribute]
          = (_character.attributes[attribute] || 0)
          + Math.round(preConversionAttributes[source] * percent);
      });
    });

    $.each(settings.modifiers['buff'], function (attribute, bonus) {
      _character.attributes[attribute] = (_character.attributes[attribute] || 0) + bonus;
    });

    // durations are stored uncapped; be sure to cap at 100% when using
    _character.attributes['Boon Duration'] += _character.attributes['Concentration'] / 15;

    // Check if build is valid
    if (!alwaysCalculateAll) {
      const invalid
        = (settings.minBoonDuration
          && _character.attributes['Boon Duration'] < settings.minBoonDuration)
        || (settings.minHealingPower
          && _character.attributes['Healing Power'] < settings.minHealingPower)
        || (settings.minToughness
          && _character.attributes['Toughness'] < settings.minToughness)
        || (settings.maxToughness
          && _character.attributes['Toughness'] > settings.maxToughness);

      if (invalid) {
        _character.valid = false;
        return false;
      }
    }

    // durations are stored uncapped; be sure to cap at 100% when using
    _character.attributes['Condition Duration'] += _character.attributes['Expertise'] / 15;

    // base critical chance is already set to 5
    _character.attributes['Critical Chance']
      = (_character.attributes['Precision'] - 1000) / 21 + _character.attributes['Critical Chance'];

    _character.attributes['Critical Damage'] += _character.attributes['Ferocity'] / 15;

    _character.attributes['Health'] += _character.attributes['Vitality'] * 10;
    _character.attributes['Armor'] += _character.attributes['Toughness'];

    let critDmg = _character.attributes['Critical Damage'];
    if (
      critDmg
      && settings.modifiers['multiplier']
      && settings.modifiers['multiplier']['Critical Damage']
    ) {
      // Applies multiplicative
      for (const multiplier of settings.modifiers['multiplier']['Critical Damage']) {
        critDmg = critDmg * (1.0 + multiplier);
      }
    }

    // Effective attributes
    _character.attributes['Effective Power']
      = _character.attributes['Power']
      + _character.attributes['Power']
        * Math.min(_character.attributes['Critical Chance'] / 100, 1)
        * ((critDmg - 100) / 100);
    _character.attributes['Effective Health']
      = _character.attributes['Health'] * _character.attributes['Armor'];
    _character.attributes['Effective Healing'] = _character.attributes['Healing Power'] || 0;

    const _multipliers = settings.modifiers['multiplier'];

    if (settings.modifiers.hasOwnProperty('bountiful-maintenance-oil')) {
      const bonus
        = ((_character.attributes['Healing Power'] || 0) * 0.6) / 10000
        + ((_character.attributes['Concentration'] || 0) * 0.8) / 10000;
      if (bonus) {
        _character.attributes['Effective Healing'] *= 1.0 + bonus;
      }
    }

    // Power multipliers
    // Respect additive modifiers. Sums all additive ones and multiply the sum with
    // the previously calculated multiplicative multipliers
    let additivePowerModis = 1.0;
    $.each(_multipliers, function (attribute, multipliers) {
      if (Attributes.EFFECTIVE.includes(attribute) && _character.attributes[attribute]) {
        for (const multiplier of multipliers) {
          _character.attributes[attribute] *= 1.0 + multiplier;
        }
      } else if (attribute === 'add: Effective Power') {
        for (const multiplier of multipliers) {
          additivePowerModis += multiplier;
        }
      }
    });
    _character.attributes['Effective Power'] *= additivePowerModis;

    // Conditions (skipped if there are no relevant conditions)
    if (alwaysCalculateAll || settings.relevantConditions.length) {

      for (const condition of alwaysCalculateAll
        ? Object.keys(Condition)
        : settings.relevantConditions) {

        _character.attributes[condition + ' Damage']
          = (Condition[condition].factor * _character.attributes['Condition Damage'])
          + Condition[condition].baseDamage;
      }

      if (
        _multipliers
        && (_multipliers['Effective Condition Damage']
          || _multipliers['add: Effective Condition Damage'])
      ) {
        if (_multipliers['add: Effective Condition Damage']) {
          // Sums up all additive condition damage modifiers
          let additiveCondiDmg = 1.0;
          for (const multiplier of _multipliers['add: Effective Condition Damage']) {
            additiveCondiDmg += multiplier;
          }
          // multiply the sum of all additive modifiers on the characters condition ticks
          for (const conditionDamage of Attributes.CONDITION_DAMAGE) {
            _character.attributes[conditionDamage] *= additiveCondiDmg;
          }
        }

        if (_multipliers['Effective Condition Damage']) {
          for (const multiplier of _multipliers['Effective Condition Damage']) {
            for (const conditionDamage of Attributes.CONDITION_DAMAGE) {
              _character.attributes[conditionDamage] *= 1.0 + multiplier;
            }
          }
        }
      }
      $.each(_multipliers, function (attribute, multipliers) {
        if (Attributes.CONDITION_DAMAGE.includes(attribute) && _character.attributes[attribute]) {
          for (const multiplier of multipliers) {
            _character.attributes[attribute] *= 1.0 + multiplier;
          }
        }
      });
    }

    // Calculate scores
    _character.attributes['Damage'] = 0;
    $.each(settings.distribution, function (key, percentage) {
      if (key === 'Power') {
        _character.attributes['Damage']
          += percentage * (_character.attributes['Effective Power'] / 1025);
      } else {
        const duration = 1 + Math.min(((_character.attributes[key + ' Duration'] || 0)
          + _character.attributes['Condition Duration']) / 100, 1);
        _character.attributes['Damage']
          += percentage * duration
          * (_character.attributes[key + ' Damage'] / Condition[key].baseDamage);
      }
    });

    _character.attributes['Survivability'] = _character.attributes['Effective Health'] / 1967;
    _character.attributes['Healing'] = _character.attributes['Effective Healing'];

    return true;
  };

  const clone = function (character) {
    return {
      settings: character.settings, // passed by reference
      attributes: character.attributes, // passed by reference
      gear: character.gear, // passed by reference
      valid: character.valid,

      baseAttributes: Object.assign({}, character.baseAttributes),
      infusions: Object.assign({}, character.infusions)
    };
  };

  // Generates the card, that shows up when one clicks on the result.
  const toModal = function (_character) {
    const _toCard = function (title, items) {
      let card
        = '<div class="card card-'
        + _character.settings.profession
        + ' mb-3"><div class="card-header card-header-small">'
        + title
        + '</div><div class="card-body p-0"><table'
        + ' class="table table-sm table-hover">';
      $.each(items, function (key, value) {
        card += '<tr><th>' + key + '</th><td>' + value + '</td></tr>';
      });
      card += '</table></div></div>';
      return card;
    };

    updateAttributes(_character, true);
    console.debug(_character);

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
    modal += '<div class="col-12 text-center"><div class="card card-'
      + _character.settings.profession
      + ' mb-3"><div class="card-header card-header-small">Modifiers</div><div'
      + ' class="card-body character-tags">'
      + _character.settings.tags.join('')
      + '</div></div></div>';

    // First column
    modal += '<div class="col-12 col-lg-6">';

    const indicators = {};
    $.each(Attributes.INDICATORS, function (index, attribute) {
      indicators[attribute] = Number(_character.attributes[attribute].toFixed(4))
        .toLocaleString('en-US');
    });
    modal += _toCard('Indicators', indicators);

    const gear = {};
    $.each(_character.gear, function (index, value) {
      gear[Slots[_character.settings.weapontype][index].name] = value;
    });
    modal += _toCard('Gear', gear);

    modal += _toCard('Stat Infusions', _character.infusions);

    if (_character.settings.distribution['Power'] !== 100) {
      // effective damage distribution
      const effectiveDamageDistribution = {};
      const totalDamage = _character.attributes['Damage'];
      $.each(_character.settings.distribution, function (key, percentage) {
        if (key === 'Power') {
          const damage = (percentage * _character.attributes['Effective Power']) / 1025;
          effectiveDamageDistribution['Power'] = ((damage / totalDamage) * 100).toFixed(1) + '%';
        } else {
          const duration = 1 + Math.min(((_character.attributes[key + ' Duration'] || 0)
            + _character.attributes['Condition Duration']) / 100, 1);
          const damage = percentage * duration
            * (_character.attributes[key + ' Damage'] / Condition[key].baseDamage);
          effectiveDamageDistribution[key + ' Damage']
            = ((damage / totalDamage) * 100).toFixed(1) + '%';
        }
      });
      modal += _toCard('Effective Damage Distribution', effectiveDamageDistribution);

      // damage indicator breakdown
      const damageIndicatorBreakdown = {};
      $.each(_character.settings.distribution, function (key, percentage) {
        if (key === 'Power') {
          const damage = percentage * _character.attributes['Effective Power'] / 1025;
          damageIndicatorBreakdown['Power'] = Number(damage).toFixed(2).toLocaleString('en-US');
        } else {
          const duration = 1 + Math.min(((_character.attributes[key + ' Duration'] || 0)
            + _character.attributes['Condition Duration']) / 100, 1);
          const damage = percentage * duration
            * (_character.attributes[key + ' Damage'] / Condition[key].baseDamage);
          damageIndicatorBreakdown[key + ' Damage'] = Number(damage)
            .toFixed(2)
            .toLocaleString('en-US');
        }
      });
      modal += _toCard('Damage indicator breakdown', damageIndicatorBreakdown);
    }

    // effective gain from adding +5 infusions
    const effectiveValues = {};
    $.each(
      ['Power', 'Precision', 'Ferocity', 'Condition Damage', 'Expertise'],
      function (index, value) {
        const temp = clone(_character);
        temp.baseAttributes[value] += 5;
        updateAttributes(temp, true);
        effectiveValues[value] = Number(
          (temp.attributes['Damage'] - _character.attributes['Damage']).toFixed(5)
        ).toLocaleString('en-US');
      }
    );
    modal += _toCard('Damage increase from +5 of attribute', effectiveValues);

    // effective loss by not having +5 infusions
    const effectiveNegativeValues = {};
    $.each(
      ['Power', 'Precision', 'Ferocity', 'Condition Damage', 'Expertise'],
      function (index, value) {
        const temp = clone(_character);
        temp.baseAttributes[value] = Math.max(temp.baseAttributes[value] - 5, 0);
        updateAttributes(temp, true);
        effectiveNegativeValues[value] = Number(
          (temp.attributes['Damage'] - _character.attributes['Damage']).toFixed(5)
        ).toLocaleString('en-US');
      }
    );
    modal += _toCard('Damage loss from -5 of attribute', effectiveNegativeValues);

    modal += '</div>';
    // End of first column

    // Second column
    modal += '<div class="col-12 col-lg-6">';

    const primaryAttributes = {};
    $.each(Attributes.PRIMARY, function (index, attribute) {
      primaryAttributes[attribute] = _character.attributes[attribute] || 0;
    });
    modal += _toCard('Primary Attributes', primaryAttributes);

    const secondaryAttributes = {};
    $.each(Attributes.SECONDARY, function (index, attribute) {
      secondaryAttributes[attribute] = _character.attributes[attribute] || 0;
    });
    modal += _toCard('Secondary Attributes', secondaryAttributes);

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
    modal += _toCard('Derived Attributes', derivedAttributes);

    const effectiveAttributes = {};
    $.each(Attributes.EFFECTIVE, function (index, attribute) {
      const value = _character.attributes[attribute] || 0;
      effectiveAttributes[attribute] = Number(value.toFixed(5)).toLocaleString('en-US');
    });
    modal += _toCard('Effective Attributes', effectiveAttributes);

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
      modal += _toCard('Special Durations', durationAttributes);
    }

    const conditionAttributes = {};
    $.each(Attributes.CONDITION_DAMAGE, function (index, attribute) {
      conditionAttributes[attribute] = (_character.attributes[attribute] || 0).toFixed(2);
    });
    modal += _toCard('Condition Damage Ticks', conditionAttributes);

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
  };

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
  $('[data-' + DataAttribute.PRIORITIES + ']').on(Event.CLICK, function () {
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

  $('[data-' + DataAttribute.PRESELECTION + ']').on(Event.CLICK, function () {

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

  // Buff presets
  $('[data-' + DataAttribute.BUFFS + ']').on(Event.CLICK, function () {
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
  $('[data-' + DataAttribute.DISTRIBUTION + ']').on(Event.CLICK, function () {
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
    }
  });

  // Calculate button
  $(Selector.START).on(Event.CLICK, function () {
    new Optimizer().calculate();
  });

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
      .classList.add('slider-bar-' + i);
  }

  $('#go-condition-distribution-slider')[0].noUiSlider.on('update', function (values, handle) {
    switch (handle) {
      case 0:
        $('#go-input-power-percentage').val(parseInt(values[0]));
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

  return Optimizer;
}(jQuery);
