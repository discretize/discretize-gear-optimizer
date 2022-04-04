import type { data } from './metadata';

const test: data = {
  'buffs': [
    {
      'section': 'Boons',
      'items': [
        {
          'id': 'might',
          'text': 'Might',
          'amountData': {
            'label': 'x',
            'default': 25,
            'quantityEntered': 1,
          },
          'modifiers': {
            'attributes': {
              'Power': [30, 'buff'],
              'Condition Damage': [30, 'buff'],
            },
          },
          'type': 'Boon',
        },
        {
          'id': 'fury',
          'text': 'Fury',
          'modifiers': {
            'attributes': {
              'Critical Chance': '20%',
            },
          },
          'type': 'Boon',
        },
        {
          'id': 'protection',
          'text': 'Protection',
          'modifiers': {
            'damage': {
              'Damage Reduction': ['33%', 'unknown'],
            },
          },
          'type': 'Boon',
        },
        {
          'id': 'vulnerability',
          'text': 'Vulnerability',
          'amountData': {
            'label': 'x',
            'default': 25,
            'quantityEntered': 1,
          },
          'modifiers': {
            'damage': {
              'Strike Damage': ['1%', 'target'],
              'Condition Damage': ['1%', 'target'],
            },
          },
          'type': 'Condition',
        },
      ],
    },
    {
      'section': 'Warrior buffs',
      'items': [
        {
          'id': 'bannerOfStrength',
          'text': 'Banner of Strength',
          'modifiers': {
            'attributes': {
              'Power': [100, 'buff'],
              'Condition Damage': [100, 'buff'],
            },
          },
          'type': 'Skill',
          'gw2id': 14405,
        },
        {
          'id': 'bannerOfDiscipline',
          'text': 'Banner of Discipline',
          'modifiers': {
            'attributes': {
              'Precision': [100, 'buff'],
              'Ferocity': [100, 'buff'],
            },
          },
          'type': 'Skill',
          'gw2id': 14407,
        },
        {
          'id': 'bannerOfTactics',
          'text': 'Banner of Tactics',
          'modifiers': {
            'attributes': {
              'Healing Power': [100, 'buff'],
              'Boon Duration': '10%',
            },
          },
          'type': 'Skill',
          'gw2id': 14408,
        },
        {
          'id': 'bannerOfDefense',
          'text': 'Banner of Defense',
          'modifiers': {
            'attributes': {
              'Toughness': [100, 'buff'],
              'Vitality': [100, 'buff'],
            },
          },
          'type': 'Skill',
          'gw2id': 14528,
        },
        {
          'id': 'empowerAllies',
          'text': 'Empower Allies',
          'modifiers': {
            'attributes': {
              'Power': [100, 'buff'],
            },
          },
          'type': 'Trait',
          'gw2id': 1482,
        },
      ],
    },
    {
      'section': 'Other buffs',
      'items': [
        {
          'id': 'spotter',
          'text': 'Spotter',
          'modifiers': {
            'attributes': {
              'Precision': [100, 'buff'],
            },
          },
          'type': 'Trait',
          'gw2id': 1016,
        },
        {
          'id': 'frostSpirit',
          'text': 'Frost Spirit',
          'modifiers': {
            'damage': {
              'Strike Damage': ['5%', 'add'],
            },
          },
          'type': 'Skill',
          'gw2id': 12497,
        },
        {
          'id': 'pinpointDistribution',
          'text': 'Pinpoint Distribution',
          'modifiers': {
            'attributes': {
              'Condition Damage': [100, 'buff'],
            },
          },
          'type': 'Trait',
          'gw2id': 1984,
        },
        {
          'id': 'strengthInNumbers',
          'text': 'Strength in Numbers',
          'modifiers': {
            'attributes': {
              'Toughness': [100, 'buff'],
            },
          },
          'type': 'Trait',
          'gw2id': 584,
        },
        {
          'id': 'jade-bot-base',
          'text': 'Jade Bot',
          'subText': '(select both boxes)',
          'modifiers': {
            'attributes': {
              'Vitality': [85, 'converted'],
            },
          },
          'type': 'Text',
        },
        {
          'id': 'jade-bot-per-tier',
          'text': 'Jade Bot Tier',
          'amountData': {
            'label': '',
            'default': 10,
            'quantityEntered': 1,
          },
          'modifiers': {
            'attributes': {
              'Vitality': [15, 'converted'],
            },
          },
          'type': 'Text',
        },
      ],
    },
    {
      'section': 'Guardian - Perfect Inscriptions (100% uptime)',
      'items': [
        {
          'id': 'baneSignet',
          'text': 'Bane Signet',
          'modifiers': {
            'attributes': {
              'Power': [216, 'buff'],
            },
          },
          'type': 'Skill',
          'gw2id': 9093,
        },
        {
          'id': 'signetOfJudgement',
          'text': 'Signet of Judgement',
          'modifiers': {
            'damage': {
              'Damage Reduction': ['12%', 'unknown'],
            },
          },
          'type': 'Skill',
          'gw2id': 9150,
        },
        {
          'id': 'signetOfMercy',
          'text': 'Signet of Mercy',
          'modifiers': {
            'attributes': {
              'Boon Duration': '10%',
            },
          },
          'type': 'Skill',
          'gw2id': 9163,
        },
        {
          'id': 'signetOfWrath',
          'text': 'Signet of Wrath',
          'modifiers': {
            'attributes': {
              'Condition Damage': [216, 'buff'],
            },
          },
          'type': 'Skill',
          'gw2id': 9151,
        },
      ],
    },
    {
      'section': 'Revenant buffs',
      'items': [
        {
          'id': 'assassinsPresence',
          'text': "Assassin's Presence",
          'modifiers': {
            'attributes': {
              'Ferocity': [150, 'buff'],
            },
          },
          'type': 'Trait',
          'gw2id': 1786,
        },
        {
          'id': 'riteDwarf',
          'text': 'Rite of the Great Dwarf',
          'modifiers': {
            'damage': {
              'Damage Reduction': ['50%', 'unknown'],
            },
          },
          'type': 'Skill',
          'gw2id': 27975,
        },
      ],
    },
    {
      'section': 'Effects',
      'items': [
        {
          'id': 'exposed',
          'text': 'Exposed',
          'amountData': {
            'label': '%',
            'default': 100,
            'quantityEntered': 100,
          },
          'modifiers': {
            'damage': {
              'Strike Damage': ['30%', 'target'],
              'Condition Damage': ['100%', 'target'],
            },
          },
          'type': 'CommonEffect',
        },
        {
          'id': 'lightArmor',
          'text': 'Low Boss Armor (VG, KC)',
          'subText': '1910 vs 2597',
          'modifiers': {
            'damage': {
              'Strike Damage': ['35.9686%', 'mult'],
            },
          },
          'type': 'Text',
        },
      ],
    },
  ],
  'Elementalist': [
    {
      'section': 'Skills',
      'items': [
        {
          'id': 'signet-of-fire',
          'text': 'Signet of Fire',
          'modifiers': {
            'attributes': {
              'Precision': [180, 'buff'],
            },
          },
          'gw2id': 5542,
        },
        {
          'id': 'signet-of-earth',
          'text': 'Signet of Earth',
          'modifiers': {
            'attributes': {
              'Toughness': [180, 'buff'],
            },
          },
          'gw2id': 5571,
        },
        {
          'id': 'flame-wheel',
          'text': 'Flame Wheel',
          'amountData': {
            'label': '% uptime',
            'default': 100,
            'quantityEntered': 100,
          },
          'modifiers': {
            'damage': {
              'Strike Damage': ['10%', 'unknown'],
              'Condition Damage': ['10%', 'unknown'],
            },
          },
          'gw2id': 62758,
        },
        {
          'id': 'crescent-wind',
          'text': 'Crescent Wind',
          'subText': '100% uptime',
          'modifiers': {
            'attributes': {
              'Critical Chance': '10%',
            },
          },
          'gw2id': 62887,
        },
        {
          'id': 'relentless-fire',
          'text': 'Relentless Fire',
          'amountData': {
            'label': '% uptime',
            'default': 100,
            'quantityEntered': 100,
          },
          'modifiers': {
            'damage': {
              'Strike Damage': ['10%', 'unknown'],
              'Condition Damage': ['10%', 'unknown'],
            },
          },
          'gw2id': 62965,
        },
      ],
    },
    {
      'section': 'Fire',
      'id': 31,
      'items': [
        {
          'id': 'empowering-flame',
          'text': 'Empowering Flame',
          'minor': true,
          'amountData': {
            'label': '% fire attunement',
            'default': 50,
            'quantityEntered': 100,
          },
          'modifiers': {
            'attributes': {
              'Power': [150, 'buff'],
            },
          },
          'gw2id': 320,
          'defaultEnabled': true,
        },
        {
          'id': 'burning-precision',
          'text': 'Burning Precision',
          'subText': 'base',
          'modifiers': {
            'attributes': {
              'Burning Duration': '20%',
            },
          },
          'gw2id': 296,
          'defaultEnabled': true,
        },
        {
          'id': 'burning-precision-on-crit',
          'text': 'Burning Precision',
          'subText': 'per hit (including non critical)',
          'amountData': {
            'label': 'hit/s',
            'default': 0,
            'quantityEntered': 1,
          },
          'modifiers': {
            'conversionAfterBuffs': {
              'Burning Coefficient': {
                'Critical Chance': '100%',
              },
            },
          },
          'gw2id': 296,
          'defaultEnabled': false,
        },
        {
          'id': 'burning-rage',
          'text': 'Burning Rage',
          'modifiers': {
            'attributes': {
              'Condition Damage': [180, 'buff'],
            },
          },
          'gw2id': 325,
          'defaultEnabled': true,
        },
        {
          'id': 'power-overwhelming',
          'text': 'Power Overwhelming',
          'subText': 'permanent',
          'modifiers': {
            'attributes': {
              'Power': [150, 'buff'],
            },
          },
          'gw2id': 334,
          'defaultEnabled': true,
        },
        {
          'id': 'power-overwhelming-2',
          'text': 'Power Overwhelming',
          'amountData': {
            'label': '% fire attunement',
            'default': 50,
            'quantityEntered': 100,
          },
          'modifiers': {
            'attributes': {
              'Power': [150, 'buff'],
            },
          },
          'gw2id': 334,
          'defaultEnabled': true,
        },
        {
          'id': 'pyromancers-training',
          'text': "Pyromancer's Training",
          'minor': true,
          'modifiers': {
            'damage': {
              'Strike Damage': ['10%', 'mult'],
            },
          },
          'gw2id': 319,
          'defaultEnabled': true,
        },
        {
          'id': 'persisting-flames',
          'text': 'Persisting Flames',
          'amountData': {
            'label': 'stacks',
            'default': 9,
            'quantityEntered': 1,
          },
          'modifiers': {
            'damage': {
              'Strike Damage': ['1%', 'add'],
            },
          },
          'gw2id': 1510,
          'defaultEnabled': true,
        },
      ],
    },
    {
      'section': 'Air',
      'id': 41,
      'items': [
        {
          'id': 'ferocious-winds',
          'text': 'Ferocious Winds',
          'modifiers': {
            'conversion': {
              'Ferocity': {
                'Precision': '7%',
              },
            },
          },
          'gw2id': 232,
          'defaultEnabled': true,
        },
        {
          'id': 'raging-storm',
          'text': 'Raging Storm',
          'amountData': {
            'label': '% fury',
            'default': 100,
            'quantityEntered': 100,
          },
          'modifiers': {
            'attributes': {
              'Ferocity': [180, 'buff'],
            },
          },
          'gw2id': 214,
          'defaultEnabled': true,
        },
        {
          'id': 'stormsoul',
          'text': 'Stormsoul',
          'amountData': {
            'label': '% disabled',
            'default': 100,
            'quantityEntered': 100,
          },
          'modifiers': {
            'damage': {
              'Strike Damage': ['10%', 'mult'],
            },
          },
          'gw2id': 1502,
          'defaultEnabled': true,
        },
        {
          'id': 'aeromancers-training',
          'text': "Aeromancer's Training",
          'subText': 'permanent',
          'minor': true,
          'modifiers': {
            'attributes': {
              'Ferocity': [150, 'buff'],
            },
          },
          'gw2id': 223,
          'defaultEnabled': true,
        },
        {
          'id': 'aeromancers-training-2',
          'text': "Aeromancer's Training",
          'amountData': {
            'label': '% air attunement',
            'default': 50,
            'quantityEntered': 100,
          },
          'minor': true,
          'modifiers': {
            'attributes': {
              'Ferocity': [150, 'buff'],
            },
          },
          'gw2id': 223,
          'defaultEnabled': true,
        },
        {
          'id': 'bolt-to-the-heart',
          'text': 'Bolt to the Heart',
          'amountData': {
            'label': '% below 50',
            'default': 50,
            'quantityEntered': 100,
          },
          'modifiers': {
            'damage': {
              'Strike Damage': ['20%', 'mult'],
            },
          },
          'gw2id': 226,
          'defaultEnabled': true,
        },
        {
          'id': 'fresh-air',
          'text': 'Fresh Air',
          'amountData': {
            'label': '% uptime',
            'default': 50,
            'quantityEntered': 100,
          },
          'modifiers': {
            'attributes': {
              'Ferocity': [250, 'buff'],
            },
          },
          'gw2id': 1503,
          'defaultEnabled': true,
        },
      ],
    },
    {
      'section': 'Earth',
      'id': 26,
      'items': [
        {
          'id': 'stone-flesh',
          'text': 'Stone Flesh',
          'minor': true,
          'subText': '100% earth attunement',
          'modifiers': {
            'damage': {
              'Damage Reduction': ['7%', 'unknown'],
            },
          },
          'gw2id': 278,
        },
        {
          'id': 'serrated-stones',
          'text': 'Serrated Stones',
          'modifiers': {
            'damage': {
              'Strike Damage': ['5%', 'mult'],
            },
            'attributes': {
              'Bleeding Duration': '20%',
            },
          },
          'gw2id': 1507,
          'defaultEnabled': true,
        },
        {
          'id': 'strength-of-stone',
          'text': 'Strength of Stone',
          'modifiers': {
            'conversion': {
              'Condition Damage': {
                'Toughness': '10%',
              },
            },
          },
          'gw2id': 275,
          'defaultEnabled': true,
        },
        {
          'id': 'geomancers-training',
          'text': "Geomancer's Training",
          'minor': true,
          'modifiers': {
            'damage': {
              'Damage Reduction': ['10%', 'unknown'],
            },
          },
          'gw2id': 280,
          'defaultEnabled': true,
        },
      ],
    },
    {
      'section': 'Water',
      'id': 17,
      'items': [
        {
          'id': 'piercing-blades',
          'text': 'Piercing Shards',
          'subText': 'base',
          'modifiers': {
            'damage': {
              'Strike Damage': ['10%', 'mult'],
            },
          },
          'gw2id': 363,
          'defaultEnabled': true,
        },
        {
          'id': 'piercing-blades-2',
          'text': 'Piercing Shards',
          'amountData': {
            'label': '% water attunement',
            'default': 5,
            'quantityEntered': 100,
          },
          'modifiers': {
            'damage': {
              'Strike Damage': ['10%', 'mult'],
            },
          },
          'gw2id': 363,
          'defaultEnabled': true,
        },
        {
          'id': 'flow-like-water',
          'text': 'Flow like Water',
          'amountData': {
            'label': '% scholar',
            'default': 100,
            'quantityEntered': 100,
          },
          'modifiers': {
            'damage': {
              'Strike Damage': ['10%', 'mult'],
            },
          },
          'gw2id': 349,
          'defaultEnabled': true,
        },
        {
          'id': 'aquamancers-training',
          'text': "Aquamancer's Training",
          'modifiers': {
            'attributes': {
              'Outgoing Healing': '15%',
            },
          },
          'minor': true,
          'gw2id': 1676,
          'defaultEnabled': true,
        },
      ],
    },
    {
      'section': 'Arcane',
      'id': 37,
      'items': [
        {
          'id': 'elemental-enchantment',
          'text': 'Elemental Enchantment',
          'modifiers': {
            'attributes': {
              'Concentration': [180, 'buff'],
            },
          },
          'minor': true,
          'gw2id': 2004,
          'defaultEnabled': true,
        },
        {
          'id': 'elemental-surge',
          'text': 'Elemental Surge',
          'amountData': {
            'label': '% uptime',
            'default': 100,
            'quantityEntered': 100,
          },
          'modifiers': {
            'attributes': {
              'Ferocity': [150, 'converted'],
            },
          },
          'gw2id': 263,
          'defaultEnabled': true,
        },
        {
          'id': 'bountiful-power',
          'text': 'Bountiful Power',
          'amountData': {
            'label': 'boons',
            'default': 8,
            'quantityEntered': 1,
          },
          'modifiers': {
            'damage': {
              'Strike Damage': ['2%', 'mult'],
            },
          },
          'gw2id': 1511,
          'defaultEnabled': true,
        },
      ],
    },
    {
      'section': 'Tempest',
      'id': 48,
      'items': [
        {
          'id': 'gathered-focus',
          'text': 'Gathered Focus',
          'modifiers': {
            'attributes': {
              'Concentration': [240, 'buff'],
            },
          },
          'minor': true,
          'gw2id': 1938,
          'defaultEnabled': true,
        },
        {
          'id': 'hardy-conduit',
          'text': 'Hardy Conduit',
          'minor': true,
          'modifiers': {
            'damage': {
              'Damage Reduction': ['6.6%', 'unknown'],
            },
          },
          'gw2id': 1948,
          'defaultEnabled': true,
        },
        {
          'id': 'transcendent-tempest',
          'text': 'Transcendent Tempest',
          'amountData': {
            'label': '% uptime',
            'default': 100,
            'quantityEntered': 100,
          },
          'modifiers': {
            'damage': {
              'Strike Damage': ['7%', 'add'],
              'Condition Damage': ['7%', 'add'],
            },
          },
          'gw2id': 1839,
          'defaultEnabled': true,
        },
      ],
    },
    {
      'section': 'Weaver',
      'id': 56,
      'items': [
        {
          'id': 'superior-elements',
          'text': 'Superior Elements',
          'subText': '100% uptime',
          'modifiers': {
            'attributes': {
              'Critical Chance': '10%',
            },
          },
          'gw2id': 2177,
          'defaultEnabled': true,
        },
        {
          'id': 'masters-fortitude',
          'text': "Master's Fortitude",
          'subText': 'base',
          'modifiers': {
            'conversion': {
              'Vitality': {
                'Power': '5%',
                'Condition Damage': '5%',
              },
            },
          },
          'gw2id': 2115,
          'defaultEnabled': true,
        },
        {
          'id': 'masters-fortitude-sword',
          'text': "Master's Fortitude",
          'subText': 'with sword',
          'modifiers': {
            'attributes': {
              'Vitality': [120, 'converted'],
            },
          },
          'gw2id': 2115,
          'defaultEnabled': true,
        },
        {
          'id': 'weavers-prowess',
          'text': "Weaver's Prowess",
          'subText': '100% uptime',
          'modifiers': {
            'damage': {
              'Condition Damage': ['10%', 'add'],
            },
            'attributes': {
              'Condition Duration': '20%',
            },
          },
          'gw2id': 2180,
          'defaultEnabled': true,
        },
        {
          'id': 'swift-revenge',
          'text': 'Swift Revenge',
          'amountData': {
            'label': '% swiftness',
            'default': 100,
            'quantityEntered': 100,
          },
          'modifiers': {
            'damage': {
              'Strike Damage': ['10%', 'add'],
            },
          },
          'gw2id': 2061,
          'defaultEnabled': true,
        },
        {
          'id': 'elemental-polyphony-fire',
          'text': 'Elemental Polyphony',
          'minor': true,
          'amountData': {
            'label': '% fire attunement',
            'default': 50,
            'quantityEntered': 100,
          },
          'modifiers': {
            'attributes': {
              'Power': [120, 'buff'],
            },
          },
          'gw2id': 2081,
          'defaultEnabled': true,
        },
        {
          'id': 'elemental-polyphony-air',
          'text': 'Elemental Polyphony',
          'minor': true,
          'amountData': {
            'label': '% air attunement',
            'default': 50,
            'quantityEntered': 100,
          },
          'modifiers': {
            'attributes': {
              'Ferocity': [120, 'buff'],
            },
          },
          'gw2id': 2081,
          'defaultEnabled': true,
        },
        {
          'id': 'elements-of-rage-base',
          'text': 'Elements of Rage',
          'subText': 'base',
          'modifiers': {
            'conversion': {
              'Precision': {
                'Vitality': '13%',
              },
            },
          },
          'gw2id': 2131,
          'defaultEnabled': true,
        },
        {
          'id': 'elements-of-rage-buff',
          'text': 'Elements of Rage',
          'amountData': {
            'label': '% uptime',
            'default': 100,
            'quantityEntered': 100,
          },
          'modifiers': {
            'damage': {
              'Condition Damage': ['5%', 'add'],
            },
          },
          'gw2id': 2131,
          'defaultEnabled': true,
        },
      ],
    },
    {
      'section': 'Catalyst',
      'id': 67,
      'note':
        'Non-constant critical chance is not currently simulated. Using dragon gear to take advantage of >100% critical chance with full berserker may be a DPS loss in reality.',
      'items': [
        {
          'id': 'hardened-auras',
          'text': 'Hardened Auras',
          'amountData': {
            'label': 'stacks',
            'default': 5,
            'quantityEntered': 1,
            'disableBlacklist': true,
          },
          'modifiers': {
            'damage': {
              'Damage Reduction': ['2%', 'unknown'],
            },
          },
          'gw2id': 2230,
          'defaultEnabled': true,
        },
        {
          'id': 'elemental-empowerment',
          'text': 'Elemental Empowerment',
          'subText': '10x',
          'minor': true,
          'modifiers': {
            'conversion': {
              'Power': {
                'Power': '10%',
              },
              'Precision': {
                'Precision': '10%',
              },
              'Toughness': {
                'Toughness': '10%',
              },
              'Vitality': {
                'Vitality': '10%',
              },
              'Concentration': {
                'Concentration': '10%',
              },
              'Condition Damage': {
                'Condition Damage': '10%',
              },
              'Expertise': {
                'Expertise': '10%',
              },
              'Ferocity': {
                'Ferocity': '10%',
              },
              'Healing Power': {
                'Healing Power': '10%',
              },
            },
          },
          'gw2id': 2250,
          'defaultEnabled': true,
        },
        {
          'id': 'empowering-auras',
          'text': 'Empowering Auras',
          'amountData': {
            'label': 'stacks',
            'default': 2,
            'quantityEntered': 1,
          },
          'modifiers': {
            'damage': {
              'Strike Damage': ['2%', 'unknown'],
              'Condition Damage': ['2%', 'unknown'],
            },
          },
          'gw2id': 2247,
          'defaultEnabled': true,
        },
        {
          'id': 'empowered-empowerment',
          'text': 'Empowered Empowerment',
          'subText': 'bonus, while active',
          'modifiers': {
            'conversion': {
              'Power': {
                'Power': '10%',
              },
              'Precision': {
                'Precision': '10%',
              },
              'Toughness': {
                'Toughness': '10%',
              },
              'Vitality': {
                'Vitality': '10%',
              },
              'Concentration': {
                'Concentration': '10%',
              },
              'Condition Damage': {
                'Condition Damage': '10%',
              },
              'Expertise': {
                'Expertise': '10%',
              },
              'Ferocity': {
                'Ferocity': '10%',
              },
              'Healing Power': {
                'Healing Power': '10%',
              },
            },
          },
          'gw2id': 2241,
          'defaultEnabled': true,
        },
      ],
    },
  ],
  'Engineer': [
    {
      'section': 'Skills',
      'items': [
        {
          'id': 'barrier-signet',
          'text': 'Barrier Signet',
          'modifiers': {
            'damage': {
              'Damage Reduction': ['10%', 'unknown'],
            },
          },
          'gw2id': 63262,
        },
        {
          'id': 'barrier-signet-traited',
          'text': 'Barrier Signet',
          'subText': 'traited',
          'modifiers': {
            'damage': {
              'Damage Reduction': ['12%', 'unknown'],
            },
          },
          'gw2id': 63262,
        },
        {
          'id': 'force-signet',
          'text': 'Force Signet',
          'modifiers': {
            'damage': {
              'Strike Damage': ['10%', 'unknown'],
            },
          },
          'gw2id': 63253,
        },
        {
          'id': 'force-signet-traited',
          'text': 'Force Signet',
          'subText': 'traited',
          'modifiers': {
            'damage': {
              'Strike Damage': ['12%', 'unknown'],
            },
          },
          'gw2id': 63253,
        },
        {
          'id': 'superconducting-signet',
          'text': 'Superconducting Signet',
          'modifiers': {
            'damage': {
              'Condition Damage': ['10%', 'unknown'],
            },
          },
          'gw2id': 63113,
        },
        {
          'id': 'superconducting-signet-traited',
          'text': 'Superconducting Signet',
          'subText': 'traited',
          'modifiers': {
            'damage': {
              'Condition Damage': ['12%', 'unknown'],
            },
          },
          'gw2id': 63113,
        },
      ],
    },
    {
      'section': 'Explosives',
      'id': 6,
      'items': [
        {
          'id': 'glass-cannon',
          'text': 'Glass Cannon',
          'amountData': {
            'label': '% scholar',
            'default': 100,
            'quantityEntered': 100,
          },
          'modifiers': {
            'damage': {
              'Strike Damage': ['10%', 'mult'],
            },
          },
          'gw2id': 1882,
          'defaultEnabled': true,
        },
        {
          'id': 'explosive-temper',
          'text': 'Explosive Temper',
          'amountData': {
            'label': 'stacks',
            'default': 10,
            'quantityEntered': 1,
          },
          'modifiers': {
            'attributes': {
              'Ferocity': [20, 'buff'],
            },
          },
          'gw2id': 1892,
          'defaultEnabled': true,
        },
        {
          'id': 'blast-shield',
          'text': 'Blast Shield',
          'modifiers': {
            'conversion': {
              'Vitality': {
                'Power': '10%',
              },
            },
          },
          'gw2id': 1944,
          'defaultEnabled': true,
        },
        {
          'id': 'shaped-charge',
          'text': 'Shaped Charge',
          'minor': true,
          'amountData': {
            'label': 'vulnerability',
            'default': 25,
            'quantityEntered': 25,
          },
          'modifiers': {
            'damage': {
              'Strike Damage': ['12.5%', 'mult'],
            },
          },
          'gw2id': 429,
          'defaultEnabled': true,
        },
        {
          'id': 'big-boomer',
          'text': 'Big Boomer',
          'subText': '100%',
          'modifiers': {
            'damage': {
              'Strike Damage': ['10%', 'mult'],
            },
          },
          'gw2id': 1947,
          'defaultEnabled': true,
        },
      ],
    },
    {
      'section': 'Firearms',
      'id': 38,
      'items': [
        {
          'id': 'sharpshooter',
          'text': 'Sharpshooter',
          'subText': 'per hit (including non critical)',
          'minor': true,
          'amountData': {
            'label': 'hit/s',
            'default': 0,
            'quantityEntered': 1,
          },
          'modifiers': {
            'conversionAfterBuffs': {
              'Bleeding Coefficient': {
                'Critical Chance': '100%',
              },
            },
          },
          'gw2id': 515,
          'defaultEnabled': false,
        },
        {
          'id': 'chemical-rounds',
          'text': 'Chemical Rounds',
          'modifiers': {
            'attributes': {
              'Condition Damage': [120, 'buff'],
            },
          },
          'gw2id': 1878,
          'defaultEnabled': true,
        },
        {
          'id': 'high-caliber',
          'text': 'High Caliber',
          'modifiers': {
            'attributes': {
              'Critical Chance': '15%',
            },
          },
          'gw2id': 1914,
          'defaultEnabled': true,
        },
        {
          'id': 'hematic-focus',
          'text': 'Hematic Focus',
          'modifiers': {
            'attributes': {
              'Critical Chance': '10%',
            },
          },
          'minor': true,
          'gw2id': 536,
          'defaultEnabled': true,
        },
        {
          'id': 'thermal-vision',
          'text': 'Thermal Vision',
          'modifiers': {
            'damage': {
              'Condition Damage': ['5%', 'add'],
            },
            'attributes': {
              'Expertise': [150, 'converted'],
            },
          },
          'gw2id': 2006,
          'defaultEnabled': true,
        },
        {
          'id': 'no-scope',
          'text': 'No Scope',
          'amountData': {
            'label': '% melee',
            'default': 100,
            'quantityEntered': 100,
          },
          'modifiers': {
            'attributes': {
              'Ferocity': [150, 'buff'],
            },
          },
          'gw2id': 1923,
          'defaultEnabled': true,
        },
        {
          'id': 'serrated-steel',
          'text': 'Serrated Steel',
          'modifiers': {
            'attributes': {
              'Bleeding Duration': '33%',
            },
          },
          'minor': true,
          'gw2id': 516,
          'defaultEnabled': true,
        },
        {
          'id': 'modified-ammunition',
          'text': 'Modified Ammunition',
          'amountData': {
            'label': 'conditions',
            'default': 10,
            'quantityEntered': 1,
          },
          'modifiers': {
            'damage': {
              'Strike Damage': ['2%', 'mult'],
            },
          },
          'gw2id': 526,
          'defaultEnabled': true,
        },
        {
          'id': 'incendiary-powder',
          'text': 'Incendiary Powder',
          'modifiers': {
            'attributes': {
              'Burning Duration': '33%',
            },
          },
          'gw2id': 433,
          'defaultEnabled': true,
        },
      ],
    },
    {
      'section': 'Inventions',
      'id': 47,
      'items': [
        {
          'id': 'over-shield',
          'text': 'Over Shield',
          'modifiers': {
            'damage': {
              'Damage Reduction': ['6.6%', 'unknown'],
            },
          },
          'gw2id': 394,
          'defaultEnabled': true,
        },
        {
          'id': 'energy-amplifier',
          'text': 'Energy Amplifier',
          'modifiers': {
            'attributes': {
              'Healing Power': [120, 'buff'],
            },
          },
          'minor': true,
          'gw2id': 519,
          'defaultEnabled': true,
        },
      ],
    },
    {
      'section': 'Alchemy',
      'id': 29,
      'items': [
        {
          'id': 'health-insurance',
          'text': 'Health Insurance',
          'subText': 'in med kit',
          'modifiers': {
            'attributes': {
              'Outgoing Healing': '20%',
            },
          },
          'gw2id': 521,
        },
        {
          'id': 'compounding-chemicals',
          'text': 'Compounding Chemicals',
          'modifiers': {
            'attributes': {
              'Concentration': [240, 'buff'],
            },
          },
          'minor': true,
          'gw2id': 413,
          'defaultEnabled': true,
        },
        {
          'id': 'iron-blooded',
          'text': 'Iron Blooded',
          'amountData': {
            'label': 'boons',
            'default': 8,
            'quantityEntered': 1,
            'disableBlacklist': true,
          },
          'modifiers': {
            'damage': {
              'Damage Reduction': ['2%', 'unknown'],
            },
          },
          'gw2id': 1854,
          'defaultEnabled': true,
        },
      ],
    },
    {
      'section': 'Tools',
      'id': 21,
      'items': [
        {
          'id': 'excessive-energy',
          'text': 'Excessive Energy',
          'amountData': {
            'label': '% vigor',
            'default': 100,
            'quantityEntered': 100,
          },
          'modifiers': {
            'damage': {
              'Strike Damage': ['10%', 'add'],
            },
          },
          'minor': true,
          'gw2id': 1936,
          'defaultEnabled': true,
        },
      ],
    },
    {
      'section': 'Scrapper',
      'id': 43,
      'items': [
        {
          'id': 'object-in-motion',
          'text': 'Object in Motion',
          'amountData': {
            'label': 'active effects',
            'default': 2,
            'quantityEntered': 1,
          },
          'modifiers': {
            'damage': {
              'Strike Damage': ['5%', 'mult'],
            },
          },
          'gw2id': 1860,
          'defaultEnabled': true,
        },
        {
          'id': 'impact-savant',
          'text': 'Impact Savant',
          'modifiers': {
            'attributes': {
              'Vitality': [-180, 'buff'],
            },
          },
          'minor': true,
          'gw2id': 1877,
          'defaultEnabled': true,
        },
        {
          'id': 'kinetic-accelerators',
          'text': 'Kinetic Accelerators',
          'modifiers': {
            'conversion': {
              'Concentration': {
                'Power': '10%',
              },
            },
          },
          'gw2id': 2052,
          'defaultEnabled': true,
        },
        {
          'id': 'applied-force',
          'text': 'Applied Force',
          'amountData': {
            'label': 'might',
            'default': 25,
            'quantityEntered': 25,
          },
          'modifiers': {
            'attributes': {
              'Power': [375, 'buff'],
              'Condition Damage': [-375, 'buff'],
            },
          },
          'gw2id': 1849,
          'defaultEnabled': true,
        },
      ],
    },
    {
      'section': 'Holosmith',
      'id': 57,
      'items': [
        {
          'id': 'lasers-edge',
          'text': "Laser's Edge",
          'amountData': {
            'label': 'Average Heat',
            'default': 112,
            'quantityEntered': 150,
          },
          'modifiers': {
            'damage': {
              'Strike Damage': ['22.5%', 'mult'],
            },
          },
          'minor': true,
          'gw2id': 2122,
          'defaultEnabled': true,
        },
      ],
    },
    {
      'section': 'Mechanist',
      'id': 70,
      'note':
        'Mech condition damage is only accurate with the conductive alloys trait. Mech power damage is not currently accurate at all. Use this optimizer with condi DPS mechanist only.',
      'items': [],
    },
  ],
  'food': [
    {
      'section': 'Power Food',
      'items': [
        {
          'id': 'cilantro-lime-sous-vide-steak',
          'text': 'Cilantro Lime Sous-Vide Steak',
          'hasLifesteal': true,
          'modifiers': {
            'attributes': {
              'Power': [100, 'converted'],
              'Ferocity': [70, 'converted'],
            },
          },
          'gw2id': 91805,
        },
        {
          'id': 'sweet-and-spicy-butternut-squash-soup',
          'text': 'Bowl of Sweet and Spicy Butternut Squash Soup',
          'modifiers': {
            'attributes': {
              'Power': [100, 'converted'],
              'Ferocity': [70, 'converted'],
            },
          },
          'gw2id': 41569,
        },
        {
          'id': 'plate-of-coq-au-vin-with-salsa',
          'text': 'Plate of Coq Au Vin with Salsa',
          'hasLifesteal': true,
          'modifiers': {
            'attributes': {
              'Power': [100, 'converted'],
              'Precision': [70, 'converted'],
            },
          },
          'gw2id': 91709,
        },
        {
          'id': 'truffle-steak',
          'text': 'Plate of Truffle Steak',
          'modifiers': {
            'attributes': {
              'Power': [100, 'converted'],
              'Precision': [70, 'converted'],
            },
          },
          'gw2id': 12467,
        },
        {
          'id': 'curry-butternut-squash-soup',
          'text': 'Bowl of Curry Butternut Squash Soup',
          'modifiers': {
            'attributes': {
              'Precision': [100, 'converted'],
              'Ferocity': [70, 'converted'],
            },
          },
          'gw2id': 12486,
        },
        {
          'id': "dragon's-breath-bun",
          'text': "Dragon's Breath Bun",
          'subText': '(100% uptime)',
          'modifiers': {
            'attributes': {
              'Power': [200, 'converted'],
              'Ferocity': [70, 'converted'],
            },
          },
          'gw2id': 43360,
        },
        {
          'id': 'block-of-tofu',
          'text': 'Block of Tofu',
          'subText': '(100% uptime)',
          'modifiers': {
            'attributes': {
              'Power': [100, 'converted'],
              'Ferocity': [100, 'converted'],
              'Precision': [70, 'converted'],
            },
          },
          'gw2id': 96793,
        },
        {
          'id': 'seaweed-salad',
          'text': 'Bowl of Seaweed Salad',
          'amountData': {
            'label': '% uptime',
            'default': 90,
            'quantityEntered': 100,
          },
          'modifiers': {
            'damage': {
              'Strike Damage': ['5%', 'mult'],
            },
          },
          'gw2id': 12471,
        },
        {
          'id': 'jerk-poultry',
          'text': 'Plate of Jerk Poultry',
          'modifiers': {
            'attributes': {
              'Power': [150, 'converted'],
            },
          },
          'gw2id': 71797,
        },
        {
          'id': 'sawgill-mushroom-risotto',
          'text': 'Bowl of Sawgill Mushroom Risotto',
          'modifiers': {
            'attributes': {
              'Precision': [150, 'converted'],
            },
          },
          'gw2id': 75010,
        },
        {
          'id': 'roasted-cactus',
          'text': 'Plate of Roasted Cactus',
          'modifiers': {
            'attributes': {
              'Ferocity': [100, 'converted'],
            },
          },
          'gw2id': 66536,
        },
        {
          'id': 'fried-golden-dumpling',
          'text': 'Fried Golden Dumpling / Cheesecake',
          'modifiers': {
            'attributes': {
              'Concentration': [100, 'converted'],
            },
          },
          'gw2id': 68633,
        },
        {
          'id': 'slice-of-candied-dragon-roll',
          'text': 'Slice of Candied Dragon Roll',
          'hasLifesteal': true,
          'modifiers': {
            'attributes': {
              'Precision': [70, 'converted'],
            },
          },
          'gw2id': 43362,
        },
        {
          'id': 'slice-of-allspice-cake',
          'text': 'Slice of Allspice Cake',
          'hasLifesteal': true,
          'modifiers': {
            'attributes': {
              'Power': [70, 'converted'],
            },
          },
          'gw2id': 75126,
        },
      ],
    },
    {
      'section': 'Support Food',
      'items': [
        {
          'id': 'plate-of-beef-carpaccio-with-salsa-garnish',
          'text': 'Plate of Beef Carpaccio with Salsa Garnish',
          'hasLifesteal': true,
          'modifiers': {
            'attributes': {
              'Concentration': [100, 'converted'],
              'Power': [70, 'converted'],
            },
          },
          'gw2id': 91862,
        },
        {
          'id': 'soul-pastry',
          'text': 'Soul Pastry',
          'modifiers': {
            'attributes': {
              'Concentration': [100, 'converted'],
              'Power': [70, 'converted'],
            },
          },
          'gw2id': 89002,
        },
        {
          'id': 'salsa-eggs-benedict',
          'text': 'Salsa Eggs Benedict',
          'hasLifesteal': true,
          'modifiers': {
            'attributes': {
              'Concentration': [100, 'converted'],
              'Expertise': [70, 'converted'],
            },
          },
          'gw2id': 91847,
        },
        {
          'id': 'eggs-benedict',
          'text': 'Plate of Eggs Benedict',
          'modifiers': {
            'attributes': {
              'Concentration': [100, 'converted'],
              'Expertise': [70, 'converted'],
            },
          },
          'gw2id': 91842,
        },
        {
          'id': 'nopalitos-saute',
          'text': 'Bowl of Nopalitos Sauté / Poultry Aspic',
          'modifiers': {
            'attributes': {
              'Concentration': [100, 'converted'],
              'Toughness': [70, 'converted'],
            },
          },
          'gw2id': 66530,
        },
        {
          'id': 'mussels-gnashblade',
          'text': 'Plate of Mussels Gnashblade',
          'modifiers': {
            'damage': {
              'Damage Reduction': ['10%', 'unknown'],
            },
            'attributes': {
              'Concentration': [70, 'converted'],
            },
          },
          'gw2id': 74969,
        },
      ],
    },
    {
      'section': 'Heal Food',
      'items': [
        {
          'id': 'fruit-salad-mint-garnish',
          'text': 'Bowl of Fruit Salad with Mint Garnish',
          'modifiers': {
            'attributes': {
              'Healing Power': [100, 'converted'],
              'Concentration': [70, 'converted'],
              'Outgoing Healing': '10%',
            },
          },
          'gw2id': 91690,
        },
        {
          'id': 'mint-creme-brulee',
          'text': 'Mint Creme Brulee',
          'modifiers': {
            'attributes': {
              'Concentration': [100, 'converted'],
              'Healing Power': [70, 'converted'],
              'Outgoing Healing': '10%',
            },
          },
          'gw2id': 91743,
        },
        {
          'id': 'delicious-rice-ball',
          'text': 'Delicious Rice Ball',
          'modifiers': {
            'attributes': {
              'Healing Power': [100, 'converted'],
              'Outgoing Healing': '10%',
            },
          },
          'gw2id': 68634,
        },
        {
          'id': 'poultry-satay',
          'text': 'Bowl of Poultry Satay',
          'modifiers': {
            'attributes': {
              'Healing Power': [100, 'converted'],
              'Concentration': [70, 'converted'],
            },
          },
          'gw2id': 87076,
        },
      ],
    },
    {
      'section': 'Condition Food',
      'items': [
        {
          'id': 'salsa-topped-veggie-flatbread',
          'text': 'Salsa-Topped Veggie Flatbread',
          'hasLifesteal': true,
          'modifiers': {
            'attributes': {
              'Expertise': [100, 'converted'],
              'Condition Damage': [70, 'converted'],
            },
          },
          'gw2id': 91876,
        },
        {
          'id': 'rare-veggie-pizza',
          'text': 'Rare Veggie Pizza',
          'modifiers': {
            'attributes': {
              'Expertise': [100, 'converted'],
              'Condition Damage': [70, 'converted'],
            },
          },
          'gw2id': 12464,
        },
        {
          'id': 'cilantro-and-cured-meat-flatbread',
          'text': 'Cilantro and Cured Meat Flatbread',
          'hasLifesteal': true,
          'modifiers': {
            'attributes': {
              'Condition Damage': [100, 'converted'],
              'Expertise': [70, 'converted'],
            },
          },
          'gw2id': 91878,
        },
        {
          'id': 'beef-rendang',
          'text': 'Plate of Beef Rendang',
          'modifiers': {
            'attributes': {
              'Condition Damage': [100, 'converted'],
              'Expertise': [70, 'converted'],
            },
          },
          'gw2id': 86997,
        },
        {
          'id': 'fishy-rice-bowl',
          'text': 'Fishy Rice Bowl',
          'modifiers': {
            'attributes': {
              'Burning Duration': '15%',
              'Condition Damage': [70, 'converted'],
            },
          },
          'gw2id': 97767,
        },
        {
          'id': 'plate-of-kimchi-pancakes',
          'text': 'Plate of Kimchi Pancakes',
          'modifiers': {
            'attributes': {
              'Bleeding Duration': '15%',
              'Condition Damage': [70, 'converted'],
            },
          },
          'gw2id': 96578,
        },
        {
          'id': 'bowl-of-kimchi-tofu-stew',
          'text': 'Bowl of Kimchi Tofu Stew',
          'modifiers': {
            'attributes': {
              'Poison Duration': '15%',
              'Condition Damage': [70, 'converted'],
            },
          },
          'gw2id': 97422,
        },
        {
          'id': 'meaty-asparagus-skewer',
          'text': 'Meaty Asparagus Skewer',
          'modifiers': {
            'attributes': {
              'Torment Duration': '15%',
              'Condition Damage': [70, 'converted'],
            },
          },
          'gw2id': 95942,
        },
        {
          'id': 'meaty-rice-bowl',
          'text': 'Meaty Rice Bowl',
          'modifiers': {
            'attributes': {
              'Confusion Duration': '15%',
              'Condition Damage': [70, 'converted'],
            },
          },
          'gw2id': 96916,
        },
        {
          'id': 'fire-meat-chili',
          'text': 'Bowl of Fire Meat Chili',
          'modifiers': {
            'attributes': {
              'Burning Duration': '15%',
              'Precision': [70, 'converted'],
            },
          },
          'gw2id': 12484,
        },
        {
          'id': 'fancy-truffle-burger',
          'text': 'Fancy Truffle Burger',
          'modifiers': {
            'attributes': {
              'Poison Duration': '15%',
              'Precision': [70, 'converted'],
            },
          },
          'gw2id': 12463,
        },
        {
          'id': 'saffron-stuffed-mushroom',
          'text': 'Saffron Stuffed Mushroom',
          'subText': '(100% uptime)',
          'modifiers': {
            'attributes': {
              'Precision': [70, 'converted'],
              'Condition Damage': [200, 'converted'],
            },
          },
          'gw2id': 12476,
        },
        {
          'id': 'steamed-red-dumpling',
          'text': 'Steamed Red Dumpling',
          'subText': '(100% uptime)',
          'modifiers': {
            'attributes': {
              'Power': [200, 'converted'],
              'Condition Damage': [140, 'converted'],
            },
          },
          'gw2id': 68635,
        },
        {
          'id': 'truffle-risotto',
          'text': 'Bowl of Truffle Risotto',
          'modifiers': {
            'attributes': {
              'Condition Damage': [100, 'converted'],
              'Precision': [70, 'converted'],
            },
          },
          'gw2id': 12465,
        },
        {
          'id': 'sweet-and-spicy-beans',
          'text': 'Bowl of Sweet and Spicy Beans',
          'modifiers': {
            'attributes': {
              'Expertise': [100, 'converted'],
              'Power': [70, 'converted'],
            },
          },
          'gw2id': 66528,
        },
        {
          'id': 'fire-flank-steak',
          'text': 'Plate of Fire Flank Steak',
          'modifiers': {
            'attributes': {
              'Power': [100, 'converted'],
              'Condition Damage': [70, 'converted'],
            },
          },
          'gw2id': 12466,
        },
        {
          'id': 'fancy-potato-and-leek-soup',
          'text': 'Bowl of Fancy Potato and Leek Soup',
          'modifiers': {
            'attributes': {
              'Precision': [100, 'converted'],
              'Condition Damage': [70, 'converted'],
            },
          },
          'gw2id': 12485,
        },
        {
          'id': 'prickly-pear-pie',
          'text': 'Prickly Pear Pie',
          'hasLifesteal': true,
          'modifiers': {
            'attributes': {
              'Expertise': [100, 'converted'],
            },
          },
          'gw2id': 66538,
        },
        {
          'id': 'slice-of-allspice-cake-with-ice-cream',
          'text': 'Slice of Allspice Cake with Ice Cream',
          'hasLifesteal': true,
          'modifiers': {
            'attributes': {
              'Condition Damage': [70, 'converted'],
            },
          },
          'gw2id': 76359,
        },
      ],
    },
    {
      'section': 'Hybrid Food',
      'items': [
        {
          'id': 'spherified-cilantro-oyster-soup',
          'text': 'Spherified Cilantro Oyster Soup',
          'hasLifesteal': true,
          'modifiers': {
            'attributes': {
              'Power': [45, 'converted'],
              'Precision': [45, 'converted'],
              'Toughness': [45, 'converted'],
              'Vitality': [45, 'converted'],
              'Concentration': [45, 'converted'],
              'Condition Damage': [45, 'converted'],
              'Expertise': [45, 'converted'],
              'Ferocity': [45, 'converted'],
              'Healing Power': [45, 'converted'],
            },
          },
          'gw2id': 91804,
        },
        {
          'id': "dragon's-revelry-starcake",
          'text': 'Oyster Soup',
          'modifiers': {
            'attributes': {
              'Power': [45, 'converted'],
              'Precision': [45, 'converted'],
              'Toughness': [45, 'converted'],
              'Vitality': [45, 'converted'],
              'Concentration': [45, 'converted'],
              'Condition Damage': [45, 'converted'],
              'Expertise': [45, 'converted'],
              'Ferocity': [45, 'converted'],
              'Healing Power': [45, 'converted'],
            },
          },
          'gw2id': 92471,
        },
        {
          'id': 'dragons-revelry-starcake-bugged',
          'text': "Dragon's Revelry Starcake (slightly bugged!)",
          'modifiers': {
            'attributes': {
              'Power': [45, 'buff'],
              'Precision': [45, 'buff'],
              'Toughness': [45, 'buff'],
              'Vitality': [45, 'buff'],
              'Concentration': [45, 'buff'],
              'Condition Damage': [45, 'buff'],
              'Expertise': [45, 'buff'],
              'Ferocity': [45, 'buff'],
              'Healing Power': [45, 'buff'],
            },
          },
          'gw2id': 43550,
        },
        {
          'id': 'birthday-blaster',
          'text': 'Birthday Blaster',
          'modifiers': {
            'attributes': {
              'Power': [40, 'converted'],
              'Precision': [40, 'converted'],
              'Toughness': [40, 'converted'],
              'Vitality': [40, 'converted'],
              'Concentration': [40, 'converted'],
              'Condition Damage': [40, 'converted'],
              'Expertise': [40, 'converted'],
              'Ferocity': [40, 'converted'],
              'Healing Power': [40, 'converted'],
            },
          },
          'gw2id': 66961,
        },
        {
          'id': 'passion-fruit-tapioca-pudding',
          'text': 'Bowl of Passion Fruit Tapioca Pudding',
          'modifiers': {
            'attributes': {
              'Power': [100, 'converted'],
              'Healing Power': [70, 'converted'],
            },
          },
          'gw2id': 71826,
        },
        {
          'id': 'prickly-pear-tapioca-pudding',
          'text': 'Bowl of Prickly Pear Tapioca Pudding',
          'modifiers': {
            'attributes': {
              'Condition Damage': [100, 'converted'],
              'Healing Power': [70, 'converted'],
            },
          },
          'gw2id': 76135,
        },
        {
          'id': 'tropical-fruit-salad',
          'text': 'Bowl of Tropical Fruit Salad',
          'modifiers': {
            'attributes': {
              'Condition Damage': [70, 'converted'],
              'Healing Power': [100, 'converted'],
            },
          },
          'gw2id': 36793,
        },
        {
          'id': 'spicy-chocolate-cookie',
          'text': 'Spicy Chocolate Cookie',
          'modifiers': {
            'attributes': {
              'Healing Power': [100, 'converted'],
              'Precision': [70, 'converted'],
            },
          },
          'gw2id': 12454,
        },
      ],
    },
    {
      'section': 'Toughness Food',
      'items': [
        {
          'id': 'spicy-marinated-mushroom',
          'text': 'Spicy Marinated Mushroom',
          'modifiers': {
            'attributes': {
              'Power': [100, 'converted'],
              'Toughness': [70, 'converted'],
            },
          },
          'gw2id': 41563,
        },
        {
          'id': 'spicy-herbed-chicken',
          'text': 'Plate of Spicy Herbed Chicken',
          'modifiers': {
            'attributes': {
              'Power': [70, 'converted'],
              'Toughness': [100, 'converted'],
            },
          },
          'gw2id': 41567,
        },
        {
          'id': 'truffle-ravioli',
          'text': 'Bowl of Truffle Ravioli',
          'modifiers': {
            'attributes': {
              'Precision': [70, 'converted'],
              'Toughness': [100, 'converted'],
            },
          },
          'gw2id': 12461,
        },
        {
          'id': 'omnomberry-bread',
          'text': 'Loaf of Omnomberry Bread / Ravioli',
          'modifiers': {
            'attributes': {
              'Vitality': [100, 'converted'],
              'Toughness': [70, 'converted'],
            },
          },
          'gw2id': 12473,
        },
        {
          'id': 'kralkachocolate-bar',
          'text': 'Kralkachocolate Bar',
          'modifiers': {
            'attributes': {
              'Healing Power': [100, 'converted'],
              'Toughness': [70, 'converted'],
            },
          },
          'gw2id': 43358,
        },
        {
          'id': 'chocolate-tapioca-pudding',
          'text': 'Bowl of Chocolate Tapioca Pudding',
          'modifiers': {
            'attributes': {
              'Healing Power': [70, 'converted'],
              'Toughness': [100, 'converted'],
            },
          },
          'gw2id': 76415,
        },
        {
          'id': 'tropical-mousse',
          'text': 'Bowl of Tropical Mousse',
          'modifiers': {
            'attributes': {
              'Condition Damage': [70, 'converted'],
              'Toughness': [100, 'converted'],
            },
          },
          'gw2id': 36841,
        },
        {
          'id': 'elon-red',
          'text': 'Bowl of "Elon Red"',
          'modifiers': {
            'attributes': {
              'Expertise': [100, 'converted'],
              'Toughness': [70, 'converted'],
            },
          },
          'gw2id': 82541,
        },
      ],
    },
  ],
  'Guardian': [
    {
      'section': 'Skills',
      'items': [
        {
          'id': 'bane-signet',
          'text': 'Bane Signet',
          'amountData': {
            'label': '% uptime',
            'default': 100,
            'quantityEntered': 100,
          },
          'modifiers': {
            'attributes': {
              'Power': [180, 'buff'],
            },
          },
          'gw2id': 9093,
        },
        {
          'id': 'bane-signet-2',
          'text': 'Bane Signet',
          'subText': 'traited',
          'amountData': {
            'label': '% uptime',
            'default': 100,
            'quantityEntered': 100,
          },
          'modifiers': {
            'attributes': {
              'Power': [216, 'buff'],
            },
          },
          'gw2id': 9093,
        },
        {
          'id': 'signet-of-judgement',
          'text': 'Signet of Judgement',
          'modifiers': {
            'damage': {
              'Damage Reduction': ['10%', 'unknown'],
            },
          },
          'gw2id': 9150,
        },
        {
          'id': 'signet-of-judgement-2',
          'text': 'Signet of Judgement',
          'subText': 'traited',
          'modifiers': {
            'damage': {
              'Damage Reduction': ['12%', 'unknown'],
            },
          },
          'gw2id': 9150,
        },
        {
          'id': 'signet-of-mercy',
          'text': 'Signet of Mercy',
          'modifiers': {
            'attributes': {
              'Concentration': [120, 'buff'],
            },
          },
          'gw2id': 9163,
        },
        {
          'id': 'signet-of-mercy-2',
          'text': 'Signet of Mercy',
          'subText': 'traited',
          'modifiers': {
            'attributes': {
              'Concentration': [150, 'buff'],
            },
          },
          'gw2id': 9163,
        },
        {
          'id': 'signet-of-wrath',
          'text': 'Signet of Wrath',
          'amountData': {
            'label': '% uptime',
            'default': 100,
            'quantityEntered': 100,
          },
          'modifiers': {
            'attributes': {
              'Condition Damage': [180, 'buff'],
            },
          },
          'gw2id': 9151,
        },
        {
          'id': 'signet-of-wrath-2',
          'text': 'Signet of Wrath',
          'amountData': {
            'label': '% uptime',
            'default': 100,
            'quantityEntered': 100,
          },
          'subText': 'traited',
          'modifiers': {
            'attributes': {
              'Condition Damage': [216, 'buff'],
            },
          },
          'gw2id': 9151,
        },
        {
          'id': 'mantra-of-flame',
          'text': 'Mantra of Flame',
          'subText': '(With passive + permeating + amplified)',
          'amountData': {
            'label': '/10s',
            'default': 1.5,
            'quantityEntered': 10,
          },
          'modifiers': {
            'attributes': {
              'Power Coefficient': 483.3,
              'Burning Coefficient': 4.8,
            },
          },
          'gw2id': 46148,
        },
        {
          'id': 'mantra-of-flame-base',
          'text': 'Mantra of Flame',
          'subText': '(No passive)',
          'amountData': {
            'label': '/10s',
            'default': 1.5,
            'quantityEntered': 10,
          },
          'modifiers': {
            'attributes': {
              'Power Coefficient': 483.3,
              'Burning Coefficient': 4,
            },
          },
          'gw2id': 46148,
        },
      ],
    },
    {
      'section': 'Zeal',
      'id': 42,
      'items': [
        {
          'id': 'fiery-wrath',
          'text': 'Fiery Wrath',
          'modifiers': {
            'damage': {
              'Strike Damage': ['7%', 'mult'],
            },
          },
          'gw2id': 634,
          'defaultEnabled': true,
        },
        {
          'id': 'symbolic-exposure',
          'text': 'Symbolic Exposure',
          'minor': true,
          'modifiers': {
            'damage': {
              'Strike Damage': ['5%', 'mult'],
            },
          },
          'gw2id': 646,
          'defaultEnabled': true,
        },
        {
          'id': 'zealous-blade-base',
          'text': 'Zealous Blade',
          'subText': 'base',
          'modifiers': {
            'attributes': {
              'Power': [120, 'buff'],
            },
          },
          'gw2id': 653,
          'defaultEnabled': true,
        },
        {
          'id': 'zealous-blade-gs',
          'text': 'Zealous Blade',
          'subText': 'with greatsword',
          'amountData': {
            'label': '% uptime',
            'default': 50,
            'quantityEntered': 100,
          },
          'modifiers': {
            'attributes': {
              'Power': [120, 'converted'],
            },
          },
          'gw2id': 653,
          'defaultEnabled': true,
        },
        {
          'id': 'kindled-zeal',
          'text': 'Kindled Zeal',
          'modifiers': {
            'conversion': {
              'Condition Damage': {
                'Power': '10%',
              },
            },
          },
          'gw2id': 1556,
          'defaultEnabled': true,
        },
        {
          'id': 'symbolic-avenger',
          'text': 'Symbolic Avenger',
          'subText': '5x',
          'modifiers': {
            'damage': {
              'Strike Damage': ['10%', 'add'],
            },
          },
          'gw2id': 2017,
          'defaultEnabled': true,
        },
      ],
    },
    {
      'section': 'Radiance',
      'id': 16,
      'items': [
        {
          'id': 'right-hand-strength',
          'text': 'Right-Hand Strength',
          'subText': 'base (+80 prec)',
          'modifiers': {
            'attributes': {
              'Precision': [80, 'buff'],
            },
          },
          'gw2id': 566,
          'defaultEnabled': true,
        },
        {
          'id': 'right-hand-strength-1h',
          'text': 'Right-Hand Strength',
          'subText': 'with 1h weapon',
          'amountData': {
            'label': '% uptime',
            'default': 50,
            'quantityEntered': 100,
          },
          'modifiers': {
            'attributes': {
              'Power': [80, 'converted'],
            },
          },
          'gw2id': 566,
          'defaultEnabled': true,
        },
        {
          'id': 'radiant-fire',
          'text': 'Radiant Fire',
          'modifiers': {
            'attributes': {
              'Burning Duration': '20%',
            },
          },
          'gw2id': 567,
          'defaultEnabled': true,
        },
        {
          'id': 'retribution',
          'text': 'Retribution',
          'amountData': {
            'label': '% resolution',
            'default': 100,
            'quantityEntered': 100,
          },
          'modifiers': {
            'damage': {
              'Strike Damage': ['10%', 'add'],
            },
          },
          'gw2id': 565,
          'defaultEnabled': true,
        },
        {
          'id': 'radiant-power',
          'text': 'Radiant Power',
          'minor': true,
          'modifiers': {
            'attributes': {
              'Critical Chance': '10%',
              'Ferocity': [150, 'buff'],
            },
          },
          'gw2id': 568,
          'defaultEnabled': true,
        },
        {
          'id': 'amplified-wrath',
          'text': 'Amplified Wrath',
          'modifiers': {
            'damage': {
              'Burning Damage': ['15%', 'unknown'],
            },
          },
          'gw2id': 1686,
          'defaultEnabled': true,
        },
        {
          'id': 'righteous-instincts',
          'text': 'Righteous Instincts',
          'subText': '100% resolution',
          'modifiers': {
            'attributes': {
              'Critical Chance': '25%',
            },
          },
          'gw2id': 1683,
          'defaultEnabled': true,
        },
      ],
    },
    {
      'section': 'Valor',
      'id': 13,
      'items': [
        {
          'id': 'stalwart-defender',
          'text': 'Stalwart Defender',
          'subText': 'with shield',
          'modifiers': {
            'attributes': {
              'Toughness': [240, 'buff'],
            },
          },
          'gw2id': 580,
          'defaultEnabled': true,
        },
      ],
    },
    {
      'section': 'Honor',
      'id': 49,
      'items': [
        {
          'id': 'invigorating-bulwark',
          'text': 'Invigorating Bulwark',
          'amountData': {
            'label': 'stacks',
            'default': 5,
            'quantityEntered': 5,
          },
          'modifiers': {
            'attributes': {
              'Outgoing Healing': '25%',
            },
          },
          'gw2id': 1899,
          'defaultEnabled': true,
        },
        {
          'id': 'honorable-staff',
          'text': 'Honorable Staff',
          'subText': 'base',
          'modifiers': {
            'attributes': {
              'Concentration': [120, 'buff'],
            },
          },
          'gw2id': 557,
          'defaultEnabled': true,
        },
        {
          'id': 'honorable-staff-2',
          'text': 'Honorable Staff',
          'subText': 'with staff',
          'modifiers': {
            'attributes': {
              'Concentration': [120, 'buff'],
            },
          },
          'gw2id': 557,
          'defaultEnabled': true,
        },
        {
          'id': 'force-of-will',
          'text': 'Force of Will',
          'modifiers': {
            'attributes': {
              'Vitality': [300, 'buff'],
            },
            'conversion': {
              'Outgoing Healing': {
                'Vitality': '0.01%',
              },
            },
          },
          'gw2id': 1682,
          'defaultEnabled': true,
        },
      ],
    },
    {
      'section': 'Virtues',
      'id': 46,
      'items': [
        {
          'id': 'inspired-virtue',
          'text': 'Inspired Virtue',
          'amountData': {
            'label': 'boons',
            'default': 8,
            'quantityEntered': 1,
          },
          'minor': true,
          'modifiers': {
            'damage': {
              'Strike Damage': ['1%', 'mult'],
            },
          },
          'gw2id': 621,
          'defaultEnabled': true,
        },
        {
          'id': 'unscathed-contender',
          'text': 'Unscathed Contender',
          'amountData': {
            'label': '% aegis',
            'default': 100,
            'quantityEntered': 100,
          },
          'modifiers': {
            'damage': {
              'Strike Damage': ['20%', 'add'],
            },
          },
          'gw2id': 624,
          'defaultEnabled': true,
        },
        {
          'id': 'virtue-of-retribution',
          'text': 'Virtue of Resolution',
          'minor': true,
          'modifiers': {
            'attributes': {
              'Resolution Duration': '25%',
            },
          },
          'gw2id': 604,
          'defaultEnabled': true,
        },
        {
          'id': 'inspiring-virtue',
          'text': 'Inspiring Virtue',
          'amountData': {
            'label': '% uptime',
            'default': 70,
            'quantityEntered': 100,
          },
          'modifiers': {
            'damage': {
              'Strike Damage': ['10%', 'add'],
            },
          },
          'gw2id': 603,
          'defaultEnabled': true,
        },
        {
          'id': 'power-of-the-virtuous',
          'text': 'Power of the Virtuous',
          'minor': true,
          'modifiers': {
            'conversion': {
              'Condition Damage': {
                'Vitality': '13%',
              },
            },
          },
          'gw2id': 620,
          'defaultEnabled': true,
        },
      ],
    },
    {
      'section': 'Dragonhunter',
      'id': 27,
      'items': [
        {
          'id': 'zealots-aggression',
          'text': "Zealot's Aggression",
          'modifiers': {
            'damage': {
              'Strike Damage': ['10%', 'mult'],
            },
          },
          'gw2id': 1835,
          'defaultEnabled': true,
        },
        {
          'id': 'pure-of-sight',
          'text': 'Pure of Sight',
          'subText': 'melee',
          'minor': true,
          'modifiers': {
            'damage': {
              'Strike Damage': ['5%', 'mult'],
            },
          },
          'gw2id': 1926,
          'defaultEnabled': true,
        },
        {
          'id': 'pure-of-sight-ranged',
          'text': 'Pure of Sight',
          'subText': 'ranged',
          'minor': true,
          'modifiers': {
            'damage': {
              'Strike Damage': ['15%', 'mult'],
            },
          },
          'gw2id': 1926,
        },
        {
          'id': 'hunters-fortification',
          'text': "Hunter's Fortification",
          'subText': 'no conditions',
          'modifiers': {
            'damage': {
              'Damage Reduction': ['10%', 'unknown'],
            },
          },
          'gw2id': 1908,
          'defaultEnabled': true,
        },
        {
          'id': 'big-game-hunter',
          'text': 'Big Game Hunter',
          'modifiers': {
            'damage': {
              'Strike Damage': ['15%', 'mult'],
            },
          },
          'gw2id': 1955,
          'defaultEnabled': true,
        },
      ],
    },
    {
      'section': 'Firebrand',
      'id': 62,
      'note':
        'Be sure to change the burning coefficient value below when adding or removing traits without checkboxes like legendary lore.',
      'items': [
        {
          'id': 'imbued-haste',
          'text': 'Imbued Haste',
          'minor': true,
          'amountData': {
            'label': '% quickness',
            'default': 100,
            'quantityEntered': 100,
          },
          'modifiers': {
            'attributes': {
              'Condition Damage': [250, 'converted'],
              'Healing Power': [250, 'converted'],
              'Vitality': [250, 'converted'],
            },
          },
          'gw2id': 2148,
          'defaultEnabled': true,
        },
      ],
    },
    {
      'section': 'Willbender',
      'id': 65,
      'items': [
        {
          'id': 'searing-pact',
          'text': 'Searing Pact',
          'modifiers': {
            'attributes': {
              'Condition Damage': [120, 'unknown'],
            },
          },
          'gw2id': 2191,
          'defaultEnabled': true,
        },
        {
          'id': 'power-for-power',
          'text': 'Power for Power',
          'modifiers': {
            'attributes': {
              'Power': [120, 'unknown'],
            },
          },
          'gw2id': 2190,
        },
        {
          'id': 'conceited-curate',
          'text': 'Conceited Curate',
          'modifiers': {
            'attributes': {
              'Healing Power': [120, 'unknown'],
            },
          },
          'gw2id': 2187,
        },
        {
          'id': 'lethal-tempo',
          'text': 'Lethal Tempo',
          'minor': true,
          'amountData': {
            'label': 'stacks',
            'default': 5,
            'quantityEntered': 1,
          },
          'modifiers': {
            'damage': {
              'Strike Damage': ['1%', 'add'],
              'Condition Damage': ['1%', 'add'],
            },
          },
          'gw2id': 2189,
          'defaultEnabled': true,
        },
        {
          'id': 'tyrants-momentum',
          'text': "Tyrant's Momentum",
          'subText': 'bonus',
          'amountData': {
            'label': 'stacks',
            'default': 5,
            'quantityEntered': 1,
          },
          'modifiers': {
            'damage': {
              'Strike Damage': ['2%', 'add'],
              'Condition Damage': ['2%', 'add'],
            },
          },
          'gw2id': 2201,
          'defaultEnabled': true,
        },
        {
          'id': 'tyrants-momentum-bugged',
          'text': "Tyrant's Momentum",
          'subText': 'bugged 10% chill mod',
          'modifiers': {
            'damage': {
              'Strike Damage': ['10%', 'mult'],
            },
          },
          'gw2id': 2201,
        },
      ],
    },
  ],
  'Mesmer': [
    {
      'section': 'Skills',
      'note':
        'Power damage from illusions is not currently accurate, particularly with accuracy sigil or Phantasmal Force and/or without Phantasmal Fury.',
      'items': [
        {
          'id': 'signet-of-domination',
          'text': 'Signet of Domination',
          'modifiers': {
            'attributes': {
              'Condition Damage': [180, 'buff'],
            },
          },
          'gw2id': 10232,
        },
        {
          'id': 'signet-of-midnight',
          'text': 'Signet of Midnight',
          'modifiers': {
            'attributes': {
              'Expertise': [180, 'buff'],
            },
          },
          'gw2id': 10234,
        },
      ],
    },
    {
      'section': 'Domination',
      'id': 10,
      'items': [
        {
          'id': 'fragility',
          'text': 'Fragility',
          'minor': true,
          'amountData': {
            'label': 'vulnerability',
            'default': 25,
            'quantityEntered': 25,
          },
          'modifiers': {
            'damage': {
              'Strike Damage': ['12.5%', 'mult'],
            },
          },
          'gw2id': 1941,
          'defaultEnabled': true,
        },
        {
          'id': 'egotism',
          'text': 'Egotism',
          'amountData': {
            'label': '% uptime',
            'default': 100,
            'quantityEntered': 100,
          },
          'modifiers': {
            'damage': {
              'Strike Damage': ['10%', 'mult'],
            },
          },
          'gw2id': 713,
          'defaultEnabled': true,
        },
        {
          'id': 'vicious-expression',
          'text': 'Vicious Expression',
          'amountData': {
            'label': '% boonless',
            'default': 100,
            'quantityEntered': 100,
          },
          'modifiers': {
            'damage': {
              'Strike Damage': ['15%', 'mult'],
            },
          },
          'gw2id': 681,
          'defaultEnabled': true,
        },
      ],
    },
    {
      'section': 'Dueling',
      'id': 1,
      'note':
        "For accurate Sharper Images simulation, manually specify how your illusions' critical chance differs from yours. Illusions are not affected by accuracy sigils or by the player's fury.",
      'items': [
        {
          'id': 'sharper-images',
          'text': 'Sharper Images',
          'subText': 'player crit %',
          'minor': true,
          'amountData': {
            'label': 'hit/s',
            'default': 0,
            'quantityEntered': 1,
          },
          'modifiers': {
            'conversionAfterBuffs': {
              'Bleeding Coefficient': {
                'Critical Chance': '500%',
              },
            },
          },
          'gw2id': 710,
          'defaultEnabled': false,
        },
        {
          'id': 'sharper-images-minus-7',
          'text': 'Sharper Images',
          'subText': '-7% crit',
          'minor': true,
          'amountData': {
            'label': 'hit/s',
            'default': 0,
            'quantityEntered': 1,
          },
          'modifiers': {
            'conversionAfterBuffs': {
              'Bleeding Coefficient': {
                'Critical Chance -7': '500%',
              },
            },
          },
          'gw2id': 710,
          'defaultEnabled': false,
        },
        {
          'id': 'sharper-images-minus-fury',
          'text': 'Sharper Images',
          'subText': '-20% crit',
          'minor': true,
          'amountData': {
            'label': 'hit/s',
            'default': 0,
            'quantityEntered': 1,
          },
          'modifiers': {
            'conversionAfterBuffs': {
              'Bleeding Coefficient': {
                'Critical Chance -20': '500%',
              },
            },
          },
          'gw2id': 710,
          'defaultEnabled': false,
        },
        {
          'id': 'sharper-images-minus-27',
          'text': 'Sharper Images',
          'subText': '-27% crit',
          'minor': true,
          'amountData': {
            'label': 'hit/s',
            'default': 0,
            'quantityEntered': 1,
          },
          'modifiers': {
            'conversionAfterBuffs': {
              'Bleeding Coefficient': {
                'Critical Chance -27': '500%',
              },
            },
          },
          'gw2id': 710,
          'defaultEnabled': false,
        },
        {
          'id': 'fencers-finesse',
          'text': "Fencer's Finesse",
          'amountData': {
            'label': 'stacks',
            'default': 10,
            'quantityEntered': 10,
          },
          'modifiers': {
            'attributes': {
              'Ferocity': [150, 'buff'],
            },
          },
          'gw2id': 708,
          'defaultEnabled': true,
        },
        {
          'id': 'superiority-complex-base',
          'text': 'Superiority Complex',
          'subText': 'base',
          'modifiers': {
            'damage': {
              'Critical Damage': ['15%', 'unknown'],
            },
          },
          'gw2id': 692,
          'defaultEnabled': true,
        },
        {
          'id': 'superiority-complex',
          'text': 'Superiority Complex',
          'subText': 'bonus',
          'amountData': {
            'label': '% below 50/disabled',
            'default': 50,
            'quantityEntered': 100,
          },
          'modifiers': {
            'damage': {
              'Critical Damage': ['10%', 'unknown'],
            },
          },
          'gw2id': 692,
          'defaultEnabled': true,
        },
      ],
    },
    {
      'section': 'Chaos',
      'id': 45,
      'items': [
        {
          'id': 'illusionary-defense',
          'text': 'Illusionary Defense',
          'amountData': {
            'label': 'stacks',
            'default': 5,
            'quantityEntered': 1,
            'disableBlacklist': true,
          },
          'modifiers': {
            'damage': {
              'Damage Reduction': ['5%', 'unknown'],
            },
          },
          'gw2id': 675,
          'defaultEnabled': true,
        },
        {
          'id': 'illusionary-membrane',
          'text': 'Illusionary Membrane',
          'minor': true,
          'amountData': {
            'label': '% regeneration',
            'default': 100,
            'quantityEntered': 100,
          },
          'modifiers': {
            'damage': {
              'Condition Damage': ['10%', 'add'],
            },
          },
          'gw2id': 667,
          'defaultEnabled': true,
        },
        {
          'id': 'chaotic-potency',
          'text': 'Chaotic Potency',
          'subText': 'base',
          'modifiers': {
            'attributes': {
              'Condition Damage': [120, 'buff'],
            },
          },
          'gw2id': 669,
          'defaultEnabled': true,
        },
        {
          'id': 'chaotic-potency-2',
          'text': 'Chaotic Potency',
          'subText': 'with staff',
          'amountData': {
            'label': '% uptime',
            'default': 100,
            'quantityEntered': 100,
          },
          'modifiers': {
            'attributes': {
              'Condition Damage': [120, 'buff'],
            },
          },
          'gw2id': 669,
        },
        {
          'id': 'chaotic-persistence',
          'text': 'Chaotic Persistence',
          'minor': true,
          'subText': '100% regeneration',
          'modifiers': {
            'attributes': {
              'Concentration': [250, 'converted'],
              'Expertise': [250, 'converted'],
            },
          },
          'gw2id': 1865,
          'defaultEnabled': true,
        },
      ],
    },
    {
      'section': 'Inspiration',
      'id': 23,
      'items': [
        {
          'id': 'healing-prism',
          'text': 'Healing Prism',
          'modifiers': {
            'conversion': {
              'Healing Power': {
                'Power': '13%',
              },
            },
          },
          'minor': true,
          'gw2id': 1915,
          'defaultEnabled': true,
        },
      ],
    },
    {
      'section': 'Illusions',
      'id': 24,
      'items': [
        {
          'id': 'compounding-power',
          'text': 'Compounding Power',
          'subText': '5x',
          'amountData': {
            'label': 'stacks',
            'default': 5,
            'quantityEntered': 5,
          },
          'modifiers': {
            'damage': {
              'Strike Damage': ['10%', 'add'],
            },
            'attributes': {
              'Condition Damage': [150, 'buff'],
            },
          },
          'minor': true,
          'gw2id': 723,
          'defaultEnabled': true,
        },
      ],
    },
    {
      'section': 'Chronomancer',
      'id': 40,
      'note':
        'Be sure to change the power coefficient value below when adding or removing traits without checkboxes like improved alacrity or chronophantasma.',
      'items': [
        {
          'id': 'danger-time',
          'text': 'Danger Time',
          'subText': '100% slow',
          'modifiers': {
            'attributes': {
              'Critical Chance': '15%',
            },
          },
          'gw2id': 2009,
          'defaultEnabled': true,
        },
      ],
    },
    {
      'section': 'Mirage',
      'id': 59,
      'items': [
        {
          'id': 'nomads-endurance',
          'text': "Nomad's Endurance",
          'amountData': {
            'label': '% vigor',
            'default': 100,
            'quantityEntered': 100,
          },
          'modifiers': {
            'attributes': {
              'Condition Damage': [150, 'buff'],
            },
          },
          'minor': true,
          'gw2id': 2069,
          'defaultEnabled': true,
        },
      ],
    },
    {
      'section': 'Virtuoso',
      'id': 66,
      'items': [
        {
          'id': 'mental-focus',
          'text': 'Mental Focus',
          'amountData': {
            'label': '% melee',
            'default': 100,
            'quantityEntered': 100,
          },
          'modifiers': {
            'damage': {
              'Strike Damage': ['10%', 'mult'],
            },
          },
          'gw2id': 2208,
          'defaultEnabled': true,
        },
        {
          'id': 'jagged-mind',
          'text': 'Jagged Mind',
          'subText': 'per blade hit (including non critical)',
          'amountData': {
            'label': 'hit/s',
            'default': 0,
            'quantityEntered': 1,
          },
          'modifiers': {
            'conversionAfterBuffs': {
              'Bleeding Coefficient': {
                'Critical Chance': '500%',
              },
            },
          },
          'gw2id': 2202,
          'defaultEnabled': false,
        },
        {
          'id': 'deadly-blades',
          'text': 'Deadly Blades',
          'minor': true,
          'amountData': {
            'label': '% uptime',
            'default': 100,
            'quantityEntered': 100,
          },
          'modifiers': {
            'damage': {
              'All Damage': ['5%', 'unknown'],
            },
          },
          'gw2id': 2204,
          'defaultEnabled': true,
        },
        {
          'id': 'sharpening-sorrow',
          'text': 'Sharpening Sorrow',
          'subText': '100% fury',
          'modifiers': {
            'attributes': {
              'Expertise': [150, 'unknown'],
            },
          },
          'gw2id': 2207,
          'defaultEnabled': true,
        },
        {
          'id': 'quiet-intensity',
          'text': 'Quiet Intensity',
          'subText': '100% fury',
          'minor': true,
          'modifiers': {
            'conversion': {
              'Ferocity': {
                'Vitality': '7%',
              },
            },
            'attributes': {
              'Critical Chance': '10%',
            },
          },
          'gw2id': 2193,
          'defaultEnabled': true,
        },
        {
          'id': 'bloodsong',
          'text': 'Bloodsong',
          'modifiers': {
            'damage': {
              'Bleeding Damage': ['25%', 'unknown'],
            },
          },
          'gw2id': 2223,
          'defaultEnabled': true,
        },
      ],
    },
  ],
  'Necromancer': [
    {
      'section': 'Skills',
      'items': [
        {
          'id': 'signet-of-spite',
          'text': 'Signet of Spite',
          'amountData': {
            'label': '% uptime',
            'default': 100,
            'quantityEntered': 100,
          },
          'modifiers': {
            'attributes': {
              'Power': [180, 'buff'],
            },
          },
          'gw2id': 10622,
        },
      ],
    },
    {
      'section': 'Spite',
      'id': 53,
      'items': [
        {
          'id': 'spiteful-talisman',
          'text': 'Spiteful Talisman',
          'amountData': {
            'label': '% boonless',
            'default': 100,
            'quantityEntered': 100,
          },
          'modifiers': {
            'damage': {
              'Strike Damage': ['10%', 'mult'],
            },
          },
          'gw2id': 914,
          'defaultEnabled': true,
        },
        {
          'id': 'awaken-the-pain',
          'text': 'Awaken the Pain',
          'amountData': {
            'label': 'might',
            'default': 25,
            'quantityEntered': 25,
          },
          'modifiers': {
            'attributes': {
              'Power': [250, 'buff'],
              'Condition Damage': [-250, 'buff'],
            },
          },
          'gw2id': 829,
          'defaultEnabled': true,
        },
        {
          'id': 'close-to-death',
          'text': 'Close to Death',
          'amountData': {
            'label': '% below 50',
            'default': 50,
            'quantityEntered': 100,
          },
          'modifiers': {
            'damage': {
              'Strike Damage': ['20%', 'mult'],
            },
          },
          'gw2id': 853,
          'defaultEnabled': true,
        },
      ],
    },
    {
      'section': 'Curses',
      'id': 39,
      'note':
        'Be sure to change the condition coefficient values below when adding or removing traits without checkboxes that implement their full effects like lingering curse.',
      'items': [
        {
          'id': 'barbed-precision',
          'text': 'Barbed Precision',
          'subText': 'base',
          'minor': true,
          'modifiers': {
            'attributes': {
              'Bleeding Duration': '20%',
            },
          },
          'gw2id': 802,
          'defaultEnabled': true,
        },
        {
          'id': 'barbed-precision-on-crit',
          'text': 'Barbed Precision',
          'subText': 'per hit (including non critical)',
          'minor': true,
          'amountData': {
            'label': 'hit/s',
            'default': 0,
            'quantityEntered': 1,
          },
          'modifiers': {
            'conversionAfterBuffs': {
              'Bleeding Coefficient': {
                'Critical Chance': '100%',
              },
            },
          },
          'gw2id': 802,
          'defaultEnabled': false,
        },
        {
          'id': 'furious-demise',
          'text': 'Furious Demise',
          'minor': true,
          'modifiers': {
            'attributes': {
              'Precision': [180, 'buff'],
            },
          },
          'gw2id': 803,
          'defaultEnabled': true,
        },
        {
          'id': 'target-the-weak-base',
          'text': 'Target the Weak',
          'subText': 'base',
          'minor': true,
          'modifiers': {
            'conversion': {
              'Condition Damage': {
                'Precision': '13%',
              },
            },
            'attributes': {
              'Condition Damage': [23, 'buff'],
            },
          },
          'gw2id': 810,
          'defaultEnabled': true,
        },
        {
          'id': 'target-the-weak',
          'text': 'Target the Weak',
          'amountData': {
            'label': 'conditions',
            'default': 10,
            'quantityEntered': 10,
            'disableBlacklist': true,
          },
          'minor': true,
          'modifiers': {
            'attributes': {
              'Critical Chance': '20%',
            },
          },
          'gw2id': 810,
          'defaultEnabled': true,
        },
        {
          'id': 'lingering-curse',
          'text': 'Lingering Curse',
          'subText': 'base only',
          'modifiers': {
            'attributes': {
              'Condition Damage': [200, 'buff'],
            },
          },
          'gw2id': 801,
          'defaultEnabled': true,
        },
      ],
    },
    {
      'section': 'Death Magic',
      'id': 2,
      'items': [
        {
          'id': 'carapace',
          'text': '',
          'subText': 'toughness from carapace',
          'minor': true,
          'amountData': {
            'label': 'carapace',
            'default': 6,
            'quantityEntered': 1,
            'disableBlacklist': true,
          },
          'modifiers': {
            'attributes': {
              'Toughness': [20, 'buff'],
            },
          },
          'defaultEnabled': true,
        },
        {
          'id': 'putrid-defense',
          'text': 'Putrid Defense',
          'modifiers': {
            'damage': {
              'Poison Damage': ['15%', 'unknown'],
            },
          },
          'gw2id': 857,
          'defaultEnabled': true,
        },
        {
          'id': 'deadly-strength-6x',
          'text': 'Deadly Strength',
          'amountData': {
            'label': 'carapace',
            'default': 6,
            'quantityEntered': 1,
          },
          'modifiers': {
            'attributes': {
              'Power': [10, 'buff'],
            },
          },
          'gw2id': 855,
          'defaultEnabled': true,
        },
      ],
    },
    {
      'section': 'Blood Magic',
      'id': 19,
      'items': [],
    },
    {
      'section': 'Soul Reaping',
      'id': 50,
      'items': [
        {
          'id': 'soul-barbs',
          'text': 'Soul Barbs',
          'amountData': {
            'label': '% uptime',
            'default': 100,
            'quantityEntered': 100,
          },
          'modifiers': {
            'damage': {
              'Strike Damage': ['10%', 'add'],
              'Condition Damage': ['10%', 'add'],
            },
          },
          'gw2id': 894,
          'defaultEnabled': true,
        },
        {
          'id': 'vital-persistence',
          'text': 'Vital Persistence',
          'modifiers': {
            'attributes': {
              'Vitality': [180, 'converted'],
            },
          },
          'gw2id': 861,
          'defaultEnabled': true,
        },
        {
          'id': 'death-perception',
          'text': 'Death Perception',
          'subText': 'INACCURATE: 100% in shroud',
          'modifiers': {
            'attributes': {
              'Critical Chance': '33%',
              'Ferocity': [300, 'buff'],
            },
          },
          'gw2id': 893,
          'defaultEnabled': true,
        },
      ],
    },
    {
      'section': 'Scourge',
      'id': 60,
      'note':
        'Be sure to change the condition coefficient values below when adding or removing traits without checkboxes that implement their full effects like demonic lore.',
      'items': [
        {
          'id': 'fell-beacon',
          'text': 'Fell Beacon',
          'modifiers': {
            'conversion': {
              'Expertise': {
                'Condition Damage': '7%',
              },
            },
          },
          'gw2id': 2074,
          'defaultEnabled': true,
        },
        {
          'id': 'sand-sage-2x',
          'text': 'Sand Sage',
          'subText': '2x',
          'minor': true,
          'modifiers': {
            'attributes': {
              'Concentration': [150, 'converted'],
              'Expertise': [150, 'converted'],
            },
          },
          'gw2id': 2121,
        },
        {
          'id': 'sand-sage-3x',
          'text': 'Sand Sage',
          'subText': '3x',
          'minor': true,
          'modifiers': {
            'attributes': {
              'Concentration': [225, 'converted'],
              'Expertise': [225, 'converted'],
            },
          },
          'gw2id': 2121,
          'defaultEnabled': true,
        },
        {
          'id': 'blood-as-sand-2x',
          'text': 'Blood as Sand',
          'subText': '2x',
          'minor': true,
          'modifiers': {
            'damage': {
              'Damage Reduction': ['15%', 'unknown'],
            },
          },
          'gw2id': 2096,
        },
        {
          'id': 'blood-as-sand-3x',
          'text': 'Blood as Sand',
          'subText': '3x',
          'minor': true,
          'modifiers': {
            'damage': {
              'Damage Reduction': ['15%', 'unknown'],
            },
          },
          'gw2id': 2096,
          'defaultEnabled': true,
        },
        {
          'id': 'demonic-lore',
          'text': 'Demonic Lore',
          'subText': 'torment only',
          'modifiers': {
            'damage': {
              'Torment Damage': ['25%', 'unknown'],
            },
          },
          'gw2id': 2164,
          'defaultEnabled': true,
        },
      ],
    },
    {
      'section': 'Reaper',
      'id': 34,
      'items': [
        {
          'id': 'soul-eater',
          'text': 'Soul Eater',
          'amountData': {
            'label': '% melee',
            'default': 100,
            'quantityEntered': 100,
          },
          'modifiers': {
            'damage': {
              'Strike Damage': ['10%', 'mult'],
            },
          },
          'gw2id': 1969,
          'defaultEnabled': true,
        },
        {
          'id': 'decimate-defenses-25x',
          'text': 'Decimate Defenses',
          'subText': '25x',
          'modifiers': {
            'attributes': {
              'Critical Chance': '50%',
            },
          },
          'gw2id': 2031,
          'defaultEnabled': true,
        },
        {
          'id': 'cold-shoulder',
          'text': 'Cold Shoulder',
          'amountData': {
            'label': '% chill',
            'default': 100,
            'quantityEntered': 100,
          },
          'minor': true,
          'modifiers': {
            'damage': {
              'Strike Damage': ['15%', 'mult'],
            },
          },
          'gw2id': 2018,
          'defaultEnabled': true,
        },
        {
          'id': 'reapers-onslaught',
          'text': "Reaper's Onslaught",
          'subText': 'INACCURATE: 100% in shroud',
          'modifiers': {
            'attributes': {
              'Ferocity': [300, 'buff'],
            },
          },
          'gw2id': 2021,
          'defaultEnabled': true,
        },
      ],
    },
    {
      'section': 'Harbinger',
      'id': 64,
      'items': [
        {
          'id': 'wicked-corruption-base',
          'text': 'Wicked Corruption',
          'subText': 'base',
          'modifiers': {
            'damage': {
              'Critical Damage': ['10%', 'unknown'],
            },
          },
          'gw2id': 2188,
          'defaultEnabled': true,
        },
        {
          'id': 'wicked-corruption',
          'text': 'Wicked Corruption',
          'amountData': {
            'label': 'blight stacks',
            'default': 11.6,
            'quantityEntered': 1,
          },
          'modifiers': {
            'damage': {
              'Strike Damage': ['0.5%', 'unknown'],
            },
          },
          'gw2id': 2188,
          'defaultEnabled': true,
        },
        {
          'id': 'septic-corruption',
          'text': 'Septic Corruption',
          'amountData': {
            'label': 'blight stacks',
            'default': 11.6,
            'quantityEntered': 1,
          },
          'modifiers': {
            'damage': {
              'Condition Damage': ['0.5%', 'unknown'],
            },
          },
          'gw2id': 2185,
          'defaultEnabled': true,
        },
        {
          'id': 'alchemic-vigor',
          'text': 'Alchemic Vigor',
          'subText': 'fixed',
          'minor': true,
          'modifiers': {
            'attributes': {
              'Vitality': [240, 'converted'],
            },
          },
          'gw2id': 2186,
          'defaultEnabled': true,
        },
        {
          'id': 'alchemic-vigor-bugged',
          'text': 'Alchemic Vigor',
          'subText': 'bug: converted like 360 vitality',
          'minor': true,
          'modifiers': {
            'attributes': {
              'Vitality': [360, 'converted', -120, 'buff'],
            },
          },
          'gw2id': 2186,
          'defaultEnabled': false,
        },
        {
          'id': 'implacable-foe',
          'text': 'Implacable Foe',
          'modifiers': {
            'conversion': {
              'Ferocity': {
                'Vitality': '13%',
              },
            },
          },
          'gw2id': 2192,
          'defaultEnabled': true,
        },
        {
          'id': 'twisted-medicine',
          'text': 'Twisted Medicine',
          'modifiers': {
            'conversion': {
              'Concentration': {
                'Vitality': '13%',
              },
            },
          },
          'gw2id': 2220,
          'defaultEnabled': true,
        },
        {
          'id': 'dark-gunslinger',
          'text': 'Dark Gunslinger',
          'modifiers': {
            'conversion': {
              'Expertise': {
                'Vitality': '13%',
              },
            },
          },
          'gw2id': 2209,
          'defaultEnabled': true,
        },
        {
          'id': 'cascading-corruption',
          'text': 'Cascading Corruption',
          'modifiers': {
            'attributes': {
              'Power': [240, 'converted'],
            },
          },
          'gw2id': 2218,
          'defaultEnabled': true,
        },
        {
          'id': 'doom-approaches',
          'text': 'Doom Approaches',
          'modifiers': {
            'attributes': {
              'Condition Damage': [240, 'converted'],
            },
          },
          'gw2id': 2203,
          'defaultEnabled': true,
        },
      ],
    },
  ],
  'Ranger': [
    {
      'section': 'Skills',
      'items': [
        {
          'id': 'signet-of-stone',
          'text': 'Signet of Stone',
          'modifiers': {
            'attributes': {
              'Toughness': [180, 'buff'],
            },
          },
          'gw2id': 12500,
        },
        {
          'id': 'signet-of-the-wild',
          'text': 'Signet of the Wild',
          'modifiers': {
            'attributes': {
              'Ferocity': [180, 'buff'],
            },
          },
          'gw2id': 12491,
        },
      ],
    },
    {
      'section': 'Marksmanship',
      'id': 8,
      'items': [
        {
          'id': 'farsighted',
          'text': 'Farsighted',
          'subText': 'melee',
          'modifiers': {
            'damage': {
              'Strike Damage': ['5%', 'mult'],
            },
          },
          'gw2id': 1000,
          'defaultEnabled': true,
        },
        {
          'id': 'farsighted-2',
          'text': 'Farsighted',
          'subText': 'ranged',
          'modifiers': {
            'damage': {
              'Strike Damage': ['15%', 'mult'],
            },
          },
          'gw2id': 1000,
        },
        {
          'id': 'predators-onslaught',
          'text': "Predator's Onslaught",
          'amountData': {
            'label': '% impaired',
            'default': 100,
            'quantityEntered': 100,
          },
          'modifiers': {
            'damage': {
              'Strike Damage': ['15%', 'mult'],
            },
          },
          'gw2id': 996,
          'defaultEnabled': true,
        },
      ],
    },
    {
      'section': 'Skirmishing',
      'id': 30,
      'items': [
        {
          'id': 'sharpened-edges',
          'text': 'Sharpened Edges',
          'subText': 'per hit (including non critical)',
          'amountData': {
            'label': 'hit/s',
            'default': 0,
            'quantityEntered': 1,
          },
          'modifiers': {
            'conversionAfterBuffs': {
              'Bleeding Coefficient': {
                'Critical Chance': '100%',
              },
            },
          },
          'gw2id': 1069,
          'defaultEnabled': false,
        },
        {
          'id': 'hidden-barbs',
          'text': 'Hidden Barbs',
          'modifiers': {
            'damage': {
              'Bleeding Damage': ['33%', 'unknown'],
            },
          },
          'gw2id': 1846,
          'defaultEnabled': true,
        },
        {
          'id': 'hunters-tactics',
          'text': "Hunter's Tactics",
          'subText': '100% flanking',
          'modifiers': {
            'damage': {
              'Strike Damage': ['10%', 'mult'],
            },
            'attributes': {
              'Critical Chance': '10%',
            },
          },
          'minor': true,
          'gw2id': 1068,
          'defaultEnabled': true,
        },
        {
          'id': 'light-on-your-feet',
          'text': 'Light on your Feet',
          'subText': '100% uptime',
          'modifiers': {
            'damage': {
              'Strike Damage': ['10%', 'mult'],
            },
            'attributes': {
              'Condition Duration': '10%',
            },
          },
          'gw2id': 1912,
        },
        {
          'id': 'vicious-quarry',
          'text': 'Vicious Quarry',
          'subText': '100% fury',
          'modifiers': {
            'attributes': {
              'Ferocity': [250, 'buff'],
              'Critical Chance': '10%',
            },
          },
          'gw2id': 1888,
          'defaultEnabled': true,
        },
      ],
    },
    {
      'section': 'Wilderness Survival',
      'id': 33,
      'items': [
        {
          'id': 'oakheart-salve',
          'text': 'Oakheart Salve',
          'subText': '100% regeneration',
          'modifiers': {
            'damage': {
              'Damage Reduction': ['5%', 'unknown'],
            },
          },
          'gw2id': 1086,
          'defaultEnabled': true,
        },
        {
          'id': 'taste-for-danger',
          'text': 'Taste for Danger',
          'modifiers': {
            'attributes': {
              'Vitality': [120, 'buff'],
              'Expertise': [8, 'buff'],
            },
            'conversion': {
              'Expertise': {
                'Vitality': '7%',
              },
            },
          },
          'gw2id': 1099,
          'defaultEnabled': true,
        },
        {
          'id': 'ambidexterity',
          'text': 'Ambidexterity',
          'subText': 'base',
          'modifiers': {
            'attributes': {
              'Condition Damage': [120, 'buff'],
            },
          },
          'gw2id': 1101,
          'defaultEnabled': true,
        },
        {
          'id': 'ambidexterity-2',
          'text': 'Ambidexterity',
          'subText': 'with torch/dagger',
          'amountData': {
            'label': '% uptime',
            'default': 50,
            'quantityEntered': 100,
          },
          'modifiers': {
            'attributes': {
              'Condition Damage': [120, 'buff'],
            },
          },
          'gw2id': 1101,
          'defaultEnabled': true,
        },
        {
          'id': 'poison-master',
          'text': 'Poison Master',
          'modifiers': {
            'damage': {
              'Poison Damage': ['25%', 'unknown'],
            },
          },
          'gw2id': 1701,
          'defaultEnabled': true,
        },
      ],
    },
    {
      'section': 'Nature Magic',
      'id': 25,
      'items': [
        {
          'id': 'bountiful-hunter',
          'text': 'Bountiful Hunter',
          'amountData': {
            'label': 'boons',
            'default': 8,
            'quantityEntered': 1,
          },
          'modifiers': {
            'damage': {
              'Strike Damage': ['1%', 'mult'],
            },
          },
          'gw2id': 1062,
          'defaultEnabled': true,
        },
        {
          'id': 'instinctive-reaction',
          'text': 'Instinctive Reaction',
          'modifiers': {
            'conversion': {
              'Healing Power': {
                'Power': '7%',
              },
            },
          },
          'gw2id': 978,
          'defaultEnabled': true,
        },
        {
          'id': 'lingering-magic',
          'text': 'Lingering Magic',
          'modifiers': {
            'attributes': {
              'Concentration': [240, 'buff'],
            },
          },
          'minor': true,
          'gw2id': 1059,
          'defaultEnabled': true,
        },
      ],
    },
    {
      'section': 'Beastmastery',
      'id': 32,
      'items': [
        {
          'id': 'honed-axes',
          'text': 'Honed Axes',
          'subText': 'base',
          'modifiers': {
            'attributes': {
              'Ferocity': [120, 'buff'],
            },
          },
          'gw2id': 1066,
          'defaultEnabled': true,
        },
        {
          'id': 'honed-axes-axe',
          'text': 'Honed Axes',
          'subText': 'with axe',
          'amountData': {
            'label': '% uptime',
            'default': 50,
            'quantityEntered': 100,
          },
          'modifiers': {
            'attributes': {
              'Ferocity': [120, 'buff'],
            },
          },
          'gw2id': 1066,
          'defaultEnabled': true,
        },
      ],
    },
    {
      'section': 'Druid',
      'id': 5,
      'note': 'Pet damage is not currently simulated.',
      'items': [
        {
          'id': 'natural-mender',
          'text': 'Natural Mender',
          'amountData': {
            'label': 'stacks',
            'default': 10,
            'quantityEntered': 1,
          },
          'modifiers': {
            'attributes': {
              'Outgoing Healing': '2%',
            },
          },
          'minor': true,
          'gw2id': 1992,
          'defaultEnabled': true,
        },
      ],
    },
    {
      'section': 'Soulbeast',
      'id': 55,
      'items': [
        {
          'id': 'furious-strength',
          'text': 'Furious Strength',
          'amountData': {
            'label': '% fury',
            'default': 100,
            'quantityEntered': 100,
          },
          'modifiers': {
            'damage': {
              'Strike Damage': ['15%', 'add'],
            },
          },
          'minor': true,
          'gw2id': 2156,
          'defaultEnabled': true,
        },
        {
          'id': 'twice-as-vicious',
          'text': 'Twice as Vicious',
          'amountData': {
            'label': '% uptime',
            'default': 100,
            'quantityEntered': 100,
          },
          'modifiers': {
            'damage': {
              'Strike Damage': ['10%', 'add'],
              'Condition Damage': ['10%', 'add'],
            },
          },
          'minor': true,
          'gw2id': 2127,
          'defaultEnabled': true,
        },
        {
          'id': 'oppressive-superiority',
          'text': 'Oppressive Superiority',
          'subText': '100% uptime',
          'modifiers': {
            'damage': {
              'Strike Damage': ['10%', 'mult'],
            },
            'attributes': {
              'Condition Duration': '10%',
            },
          },
          'gw2id': 2143,
          'defaultEnabled': true,
        },
        {
          'id': 'archetype-stout',
          'subText': 'Archetype Stout (Tough/Vit)',
          'modifiers': {
            'attributes': {
              'Toughness': [200, 'buff'],
              'Vitality': [100, 'buff'],
            },
          },
          'minor': true,
        },
        {
          'id': 'archetype-deadly',
          'subText': 'Archetype Deadly (ConDmg/Prec)',
          'modifiers': {
            'attributes': {
              'Condition Damage': [150, 'buff'],
              'Precision': [100, 'buff'],
            },
          },
          'minor': true,
        },
        {
          'id': 'archetype-versatile',
          'subText': 'Archetype Versatile (Vit/Conc)',
          'modifiers': {
            'attributes': {
              'Vitality': [200, 'buff'],
              'Concentration': [225, 'buff'],
            },
          },
          'minor': true,
        },
        {
          'id': 'archetype-ferocious',
          'subText': 'Archetype Ferocious (Pwr/Feroc)',
          'modifiers': {
            'attributes': {
              'Power': [150, 'buff'],
              'Ferocity': [100, 'buff'],
            },
          },
          'minor': true,
        },
        {
          'id': 'archetype-supportive',
          'subText': 'Archetype Supportive (Vit/Heal)',
          'modifiers': {
            'attributes': {
              'Vitality': [100, 'buff'],
              'Outgoing Healing': '25%',
            },
          },
          'minor': true,
        },
        {
          'id': 'pack-alpha-merged',
          'subText': 'merged',
          'modifiers': {
            'attributes': {
              'Power': [150, 'buff'],
              'Precision': [150, 'buff'],
              'Condition Damage': [150, 'buff'],
              'Toughness': [150, 'buff'],
              'Vitality': [150, 'buff'],
            },
          },
          'minor': true,
          'gw2id': 1900,
        },
        {
          'id': 'loud-whistle-merged',
          'subText': 'merged',
          'modifiers': {
            'damage': {
              'Strike Damage': ['10%', 'mult'],
            },
          },
          'minor': true,
          'gw2id': 974,
        },
        {
          'id': 'pets-prowess-merged',
          'subText': 'merged',
          'modifiers': {
            'attributes': {
              'Ferocity': [300, 'buff'],
            },
          },
          'minor': true,
          'gw2id': 1065,
        },
        {
          'id': 'honed-axes-merged',
          'subText': 'merged, base',
          'modifiers': {
            'attributes': {
              'Ferocity': [120, 'buff'],
            },
          },
          'minor': true,
          'gw2id': 1066,
        },
      ],
    },
    {
      'section': 'Untamed',
      'id': 72,
      'note': 'Pet damage is not currently simulated.',
      'items': [
        {
          'id': 'natural-fortitude',
          'text': 'Natural Fortitude',
          'modifiers': {
            'attributes': {
              'Vitality': [240, 'unknown'],
            },
          },
          'minor': true,
          'gw2id': 2286,
          'defaultEnabled': true,
        },
        {
          'id': 'vow-of-the-untamed-you',
          'text': 'Vow of the Untamed',
          'subText': 'player unleashed',
          'modifiers': {
            'damage': {
              'All Damage': ['25%', 'unknown'],
            },
          },
          'minor': true,
          'gw2id': 2269,
          'defaultEnabled': true,
        },
        {
          'id': 'vow-of-the-untamed-pet',
          'text': 'Vow of the Untamed',
          'subText': 'pet unleashed',
          'modifiers': {
            'damage': {
              'Damage Reduction': ['25%', 'unknown'],
            },
          },
          'minor': true,
          'gw2id': 2269,
        },
        {
          'id': 'ferocious-symbiosis',
          'text': 'Ferocious Symbiosis',
          'amountData': {
            'label': 'stacks',
            'default': 5,
            'quantityEntered': 1,
          },
          'modifiers': {
            'damage': {
              'All Damage': ['3%', 'unknown'],
            },
          },
          'gw2id': 2274,
          'defaultEnabled': true,
        },
      ],
    },
  ],
  'Revenant': [
    {
      'section': 'Skills',
      'items': [
        {
          'id': 'vengeful-hammers',
          'text': 'Vengeful Hammers',
          'modifiers': {
            'damage': {
              'Damage Reduction': ['20%', 'unknown'],
            },
          },
          'gw2id': 26557,
        },
      ],
    },
    {
      'section': 'Corruption',
      'id': 14,
      'items': [
        {
          'id': 'acolyte-of-torment',
          'text': 'Acolyte of Torment',
          'modifiers': {
            'damage': {
              'Torment Damage': ['10%', 'unknown'],
            },
          },
          'gw2id': 1793,
          'defaultEnabled': true,
        },
        {
          'id': 'seething-malice',
          'text': 'Seething Malice',
          'minor': true,
          'modifiers': {
            'attributes': {
              'Condition Damage': [120, 'buff'],
            },
          },
          'gw2id': 1801,
          'defaultEnabled': true,
        },
        {
          'id': 'demonic-resistance',
          'text': 'Demonic Resistance',
          'subText': '100% resistance',
          'modifiers': {
            'damage': {
              'Damage Reduction': ['20%', 'unknown'],
            },
          },
          'gw2id': 1726,
          'defaultEnabled': true,
        },
        {
          'id': 'pact-of-pain',
          'text': 'Pact of Pain',
          'modifiers': {
            'attributes': {
              'Condition Duration': '15%',
            },
          },
          'gw2id': 1714,
          'defaultEnabled': true,
        },
        {
          'id': 'yearning-empowerment',
          'text': 'Yearning Empowerment',
          'minor': true,
          'modifiers': {
            'attributes': {
              'Condition Duration': '10%',
            },
          },
          'gw2id': 1744,
          'defaultEnabled': true,
        },
      ],
    },
    {
      'section': 'Retribution',
      'id': 9,
      'items': [
        {
          'id': 'close-quarters',
          'text': 'Close Quarters',
          'subText': 'ranged',
          'modifiers': {
            'damage': {
              'Damage Reduction': ['10%', 'unknown'],
            },
          },
          'gw2id': 1728,
        },
        {
          'id': 'dwarven-battle-training',
          'text': 'Dwarven Battle Training',
          'amountData': {
            'label': '% weakness',
            'default': 100,
            'quantityEntered': 100,
          },
          'modifiers': {
            'damage': {
              'Strike Damage': ['10%', 'mult'],
            },
          },
          'gw2id': 1740,
          'defaultEnabled': true,
        },
        {
          'id': 'determined-resolution',
          'text': 'Determined Resolution',
          'subText': '100% resolution',
          'minor': true,
          'modifiers': {
            'damage': {
              'Damage Reduction': ['10%', 'unknown'],
            },
          },
          'gw2id': 1713,
          'defaultEnabled': true,
        },
        {
          'id': 'vicious-reprisal',
          'text': 'Vicious Reprisal',
          'amountData': {
            'label': '% resolution',
            'default': 100,
            'quantityEntered': 100,
          },
          'modifiers': {
            'damage': {
              'All Damage': ['10%', 'add'],
            },
          },
          'gw2id': 1779,
          'defaultEnabled': true,
        },
        {
          'id': 'versed-in-stone',
          'text': 'Versed in Stone',
          'modifiers': {
            'conversion': {
              'Power': {
                'Toughness': '13%',
              },
            },
          },
          'gw2id': 1770,
          'defaultEnabled': true,
        },
      ],
    },
    {
      'section': 'Invocation',
      'id': 3,
      'items': [
        {
          'id': 'rising-tide',
          'text': 'Rising Tide',
          'amountData': {
            'label': '% scholar',
            'default': 100,
            'quantityEntered': 100,
          },
          'modifiers': {
            'damage': {
              'Strike Damage': ['7%', 'mult'],
            },
          },
          'gw2id': 1761,
          'defaultEnabled': true,
        },
        {
          'id': 'ferocious-aggression',
          'text': 'Ferocious Aggression',
          'minor': true,
          'amountData': {
            'label': '% fury',
            'default': 100,
            'quantityEntered': 100,
          },
          'modifiers': {
            'damage': {
              'All Damage': ['7%', 'add'],
            },
          },
          'gw2id': 1758,
          'defaultEnabled': true,
        },
        {
          'id': 'roiling-mists',
          'text': 'Roiling Mists',
          'subText': '100% fury',
          'modifiers': {
            'attributes': {
              'Critical Chance': '20%',
            },
          },
          'gw2id': 1719,
          'defaultEnabled': true,
        },
      ],
    },
    {
      'section': 'Devastation',
      'id': 15,
      'note': 'Battle scars is not currently simulated.',
      'items': [
        {
          'id': 'unsuspecting-strikes',
          'text': 'Unsuspecting Strikes',
          'amountData': {
            'label': '% above 80',
            'default': 20,
            'quantityEntered': 100,
          },
          'modifiers': {
            'damage': {
              'Strike Damage': ['20%', 'mult'],
            },
          },
          'gw2id': 1767,
          'defaultEnabled': true,
        },
        {
          'id': 'destructive-impulses-base',
          'text': 'Destructive Impulses',
          'subText': 'base',
          'minor': true,
          'modifiers': {
            'damage': {
              'All Damage': ['5%', 'add'],
            },
          },
          'gw2id': 1724,
          'defaultEnabled': true,
        },
        {
          'id': 'destructive-impulses-dual',
          'text': 'Destructive Impulses',
          'subText': 'bonus',
          'minor': true,
          'amountData': {
            'label': '% dual wielding',
            'default': 50,
            'quantityEntered': 100,
          },
          'modifiers': {
            'damage': {
              'All Damage': ['2.5%', 'add'],
            },
          },
          'gw2id': 1724,
          'defaultEnabled': true,
        },
        {
          'id': 'notoriety',
          'text': 'Notoriety',
          'amountData': {
            'label': 'might',
            'default': 25,
            'quantityEntered': 25,
          },
          'modifiers': {
            'attributes': {
              'Power': [250, 'buff'],
              'Condition Damage': [-250, 'buff'],
            },
          },
          'gw2id': 1765,
          'defaultEnabled': true,
        },
        {
          'id': 'targeted-destruction',
          'text': 'Targeted Destruction',
          'amountData': {
            'label': 'vulnerability',
            'default': 25,
            'quantityEntered': 25,
          },
          'minor': true,
          'modifiers': {
            'damage': {
              'Strike Damage': ['12.5%', 'mult'],
            },
          },
          'gw2id': 1792,
          'defaultEnabled': true,
        },
        {
          'id': 'swift-termination',
          'text': 'Swift Termination',
          'amountData': {
            'label': '% below 50',
            'default': 50,
            'quantityEntered': 100,
          },
          'modifiers': {
            'damage': {
              'Strike Damage': ['20%', 'mult'],
            },
          },
          'gw2id': 1800,
          'defaultEnabled': true,
        },
      ],
    },
    {
      'section': 'Salvation',
      'id': 12,
      'items': [
        {
          'id': 'tranquil-balance',
          'text': 'Tranquil Balance',
          'amountData': {
            'label': '% scholar',
            'default': 100,
            'quantityEntered': 100,
          },
          'modifiers': {
            'attributes': {
              'Outgoing Healing': '20%',
            },
          },
          'gw2id': 1822,
          'defaultEnabled': true,
        },
        {
          'id': 'life-attunement',
          'text': 'Life Attunement',
          'minor': true,
          'modifiers': {
            'attributes': {
              'Healing Power': [120, 'buff'],
            },
            'conversion': {
              'Concentration': {
                'Healing Power': '7%',
              },
            },
          },
          'gw2id': 1821,
          'defaultEnabled': true,
        },
        {
          'id': 'invoking-harmony',
          'text': 'Invoking Harmony',
          'amountData': {
            'label': '% uptime',
            'default': 100,
            'quantityEntered': 100,
          },
          'modifiers': {
            'attributes': {
              'Outgoing Healing': '20%',
            },
          },
          'gw2id': 1818,
          'defaultEnabled': true,
        },
        {
          'id': 'serene-rejuvenation',
          'text': 'Serene Rejuvenation',
          'minor': true,
          'modifiers': {
            'attributes': {
              'Outgoing Healing': '15%',
            },
          },
          'gw2id': 1814,
          'defaultEnabled': true,
        },
        {
          'id': 'unyielding-devotion',
          'text': 'Unyielding Devotion',
          'subText': '100%',
          'modifiers': {
            'damage': {
              'Damage Reduction': ['15%', 'unknown'],
            },
          },
          'gw2id': 1825,
        },
        {
          'id': 'selfless-amplification',
          'text': 'Selfless Amplification',
          'modifiers': {
            'conversion': {
              'Outgoing Healing': {
                'Healing Power': '0.015%',
              },
            },
          },
          'gw2id': 1820,
          'defaultEnabled': true,
        },
      ],
    },
    {
      'section': 'Herald',
      'id': 52,
      'items': [
        {
          'id': 'draconic-fortitude',
          'text': 'Draconic Fortitude',
          'minor': true,
          'modifiers': {
            'attributes': {
              'Maximum Health': '10%',
            },
          },
          'gw2id': 1737,
          'defaultEnabled': true,
        },
        {
          'id': 'hardening-persistence',
          'text': 'Hardening Persistence',
          'amountData': {
            'label': 'upkeep',
            'default': 10,
            'quantityEntered': 1,
            'disableBlacklist': true,
          },
          'modifiers': {
            'damage': {
              'Damage Reduction': ['1.5%', 'unknown'],
            },
          },
          'gw2id': 1730,
        },
        {
          'id': 'reinforced-potency-base',
          'text': 'Reinforced Potency',
          'subText': 'base',
          'minor': true,
          'modifiers': {
            'attributes': {
              'Concentration': [120, 'unknown'],
            },
          },
          'gw2id': 1788,
          'defaultEnabled': true,
        },
        {
          'id': 'reinforced-potency-boons',
          'text': 'Reinforced Potency',
          'minor': true,
          'amountData': {
            'label': 'boons',
            'default': 8,
            'quantityEntered': 1,
          },
          'modifiers': {
            'damage': {
              'Strike Damage': ['1%', 'unknown'],
            },
          },
          'gw2id': 1788,
          'defaultEnabled': true,
        },
        {
          'id': 'forceful-persistence-nonherald',
          'text': 'Forceful Persistence',
          'subText': 'non herald upkeep',
          'amountData': {
            'label': '% uptime',
            'default': 43,
            'quantityEntered': 100,
          },
          'modifiers': {
            'damage': {
              'Strike Damage': ['13%', 'add'],
            },
          },
          'gw2id': 1803,
          'defaultEnabled': true,
        },
        {
          'id': 'forceful-persistence-herald',
          'text': 'Forceful Persistence',
          'subText': 'per herald upkeep',
          'amountData': {
            'label': 'average stacks',
            'default': 2.4,
            'quantityEntered': 1,
          },
          'modifiers': {
            'damage': {
              'Strike Damage': ['4%', 'add'],
            },
          },
          'gw2id': 1803,
          'defaultEnabled': true,
        },
      ],
    },
    {
      'section': 'Renegade',
      'id': 63,
      'items': [
        {
          'id': 'ambush-commander',
          'text': 'Ambush Commander',
          'minor': true,
          'amountData': {
            'label': "Kalla's fervor",
            'default': 5,
            'quantityEntered': 1,
          },
          'modifiers': {
            'damage': {
              'All Damage': ['2%', 'add'],
            },
          },
          'gw2id': 2181,
          'defaultEnabled': true,
        },
        {
          'id': 'blood-fury',
          'text': 'Blood Fury',
          'subText': '100% fury',
          'modifiers': {
            'attributes': {
              'Bleeding Duration': '25%',
            },
          },
          'gw2id': 2079,
          'defaultEnabled': true,
        },
        {
          'id': 'heartpiercer',
          'text': 'Heartpiercer',
          'modifiers': {
            'damage': {
              'Bleeding Damage': ['25%', 'unknown'],
            },
          },
          'gw2id': 2092,
          'defaultEnabled': true,
        },
        {
          'id': 'brutal-momentum',
          'text': 'Brutal Momentum',
          'subText': 'full endurance',
          'minor': true,
          'modifiers': {
            'attributes': {
              'Critical Chance': '33%',
            },
          },
          'gw2id': 2142,
          'defaultEnabled': true,
        },
        {
          'id': 'lasting-legacy',
          'text': 'Lasting Legacy',
          'amountData': {
            'label': "Kalla's fervor",
            'default': 5,
            'quantityEntered': 1,
          },
          'modifiers': {
            'damage': {
              'All Damage': ['1%', 'add'],
            },
          },
          'gw2id': 2100,
          'defaultEnabled': true,
        },
      ],
    },
    {
      'section': 'Vindicator',
      'id': 69,
      'items': [
        {
          'id': 'leviathan-strength',
          'text': 'Leviathan Strength',
          'amountData': {
            'label': '% uptime',
            'default': 100,
            'quantityEntered': 100,
          },
          'modifiers': {
            'damage': {
              'Strike Damage': ['10%', 'add'],
            },
          },
          'gw2id': 2258,
          'defaultEnabled': true,
        },
        {
          'id': 'empire-divided-above',
          'text': 'Empire Divided',
          'subText': 'above',
          'minor': true,
          'amountData': {
            'label': '% above 50',
            'default': 100,
            'quantityEntered': 100,
          },
          'modifiers': {
            'attributes': {
              'Power': [240, 'unknown'],
            },
          },
          'gw2id': 2229,
          'defaultEnabled': true,
        },
        {
          'id': 'empire-divided-below',
          'text': 'Empire Divided',
          'subText': 'below',
          'minor': true,
          'amountData': {
            'label': '% below 50',
            'default': 0,
            'quantityEntered': 100,
          },
          'modifiers': {
            'attributes': {
              'Healing Power': [240, 'unknown'],
            },
          },
          'gw2id': 2229,
          'defaultEnabled': true,
        },
        {
          'id': 'forerunner-of-death',
          'text': 'Forerunner of Death',
          'amountData': {
            'label': '% uptime',
            'default': 100,
            'quantityEntered': 100,
          },
          'modifiers': {
            'damage': {
              'Strike Damage': ['15%', 'unknown'],
            },
          },
          'gw2id': 2257,
          'defaultEnabled': true,
        },
      ],
    },
  ],
  'runes': [
    {
      'section': 'Power Runes',
      'items': [
        {
          'id': 'scholar',
          'text': 'Superior Rune of the Scholar',
          'subText': '(100% active bonus)',
          'modifiers': {
            'damage': {
              'Strike Damage': ['5%', 'mult'],
            },
            'attributes': {
              'Power': [175, 'converted'],
              'Ferocity': [225, 'converted'],
            },
          },
          'gw2id': 24836,
        },
        {
          'id': 'scholar-without',
          'text': 'Superior Rune of the Scholar',
          'subText': '(without active bonus)',
          'modifiers': {
            'attributes': {
              'Power': [175, 'converted'],
              'Ferocity': [225, 'converted'],
            },
          },
          'gw2id': 24836,
        },
        {
          'id': 'eagle',
          'text': 'Superior Rune of the Eagle',
          'modifiers': {
            'damage': {
              'Strike Damage': ['5%', 'mult'],
            },
            'attributes': {
              'Precision': [175, 'converted'],
              'Ferocity': [225, 'converted'],
            },
          },
          'gw2id': 24723,
        },
        {
          'id': 'eagle-perma',
          'text': 'Superior Rune of the Eagle',
          'subText': '(always below 50)',
          'modifiers': {
            'damage': {
              'Strike Damage': ['10%', 'mult'],
            },
            'attributes': {
              'Precision': [175, 'converted'],
              'Ferocity': [225, 'converted'],
            },
          },
          'gw2id': 24723,
        },
        {
          'id': 'thief',
          'text': 'Superior Rune of the Thief',
          'modifiers': {
            'damage': {
              'Strike Damage': ['10%', 'mult'],
            },
            'attributes': {
              'Precision': [300, 'converted'],
              'Condition Damage': [100, 'converted'],
            },
          },
          'gw2id': 24818,
        },
        {
          'id': 'spellbreaker',
          'text': 'Superior Rune of the Spellbreaker',
          'modifiers': {
            'damage': {
              'Strike Damage': ['7%', 'mult'],
            },
            'attributes': {
              'Power': [175, 'converted'],
              'Precision': [100, 'converted'],
            },
          },
          'gw2id': 84749,
        },
        {
          'id': 'flame-legion',
          'text': 'Superior Rune of the Flame Legion',
          'modifiers': {
            'damage': {
              'Strike Damage': ['7%', 'mult'],
            },
            'attributes': {
              'Power': [175, 'converted'],
              'Burning Duration': '50%',
            },
          },
          'gw2id': 24797,
        },
        {
          'id': 'strength',
          'text': 'Superior Rune of Strength',
          'modifiers': {
            'damage': {
              'Strike Damage': ['5%', 'mult'],
            },
            'attributes': {
              'Power': [175, 'converted'],
              'Might Duration': '50%',
            },
          },
          'gw2id': 24714,
        },
        {
          'id': 'ogre',
          'text': 'Superior Rune of the Ogre',
          'subText': '(Approx.)',
          'modifiers': {
            'damage': {
              'Strike Damage': ['4%', 'add'],
            },
            'attributes': {
              'Power': [175, 'converted'],
              'Ferocity': [100, 'converted'],
              'Flat DPS': 500,
            },
          },
          'gw2id': 24756,
        },
        {
          'id': 'ranger',
          'text': 'Superior Rune of the Ranger',
          'subText': '(with pet)',
          'modifiers': {
            'damage': {
              'Strike Damage': ['7%', 'mult'],
            },
            'attributes': {
              'Precision': [175, 'converted'],
              'Ferocity': [225, 'converted'],
            },
          },
          'gw2id': 24815,
        },
        {
          'id': 'chronomancer',
          'text': 'Superior Rune of the Chronomancer',
          'modifiers': {
            'attributes': {
              'Power': [175, 'converted'],
              'Precision': [100, 'converted'],
            },
          },
          'gw2id': 73399,
        },
        {
          'id': 'fire',
          'text': 'Superior Rune of the Fire',
          'subText': '(100% With Fire Aura)',
          'modifiers': {
            'damage': {
              'Strike Damage': ['10%', 'unknown'],
            },
            'attributes': {
              'Power': [175, 'converted'],
              'Might Duration': '10%',
              'Burning Duration': '10%',
            },
          },
          'gw2id': 24747,
        },
        {
          'id': 'golemancer',
          'text': 'Superior Rune of the Golemancer',
          'subText': '(Approx.)',
          'modifiers': {
            'attributes': {
              'Ferocity': [300, 'converted'],
              'Precision': [100, 'converted'],
              'Flat DPS': 750,
            },
          },
          'gw2id': 24785,
        },
      ],
    },
    {
      'section': 'Support Runes',
      'items': [
        {
          'id': 'pack',
          'text': 'Superior Rune of the Pack',
          'modifiers': {
            'attributes': {
              'Power': [175, 'converted'],
              'Boon Duration': '15%',
              'Precision': [125, 'buff'],
            },
          },
          'gw2id': 24702,
        },
        {
          'id': 'leadership',
          'text': 'Superior Rune of Leadership',
          'modifiers': {
            'attributes': {
              'Power': [36, 'converted'],
              'Precision': [36, 'converted'],
              'Toughness': [36, 'converted'],
              'Vitality': [36, 'converted'],
              'Concentration': [36, 'converted'],
              'Condition Damage': [36, 'converted'],
              'Expertise': [36, 'converted'],
              'Ferocity': [36, 'converted'],
              'Healing Power': [36, 'converted'],
              'Boon Duration': '25%',
            },
          },
          'gw2id': 70600,
        },
        {
          'id': 'firebrand',
          'text': 'Superior Rune of the Firebrand',
          'modifiers': {
            'attributes': {
              'Condition Damage': [175, 'converted'],
              'Boon Duration': '10%',
              'Quickness Duration': '30%',
            },
          },
          'gw2id': 83338,
        },
        {
          'id': 'firebrand-firebrand',
          'text': 'Superior Rune of the Firebrand',
          'subText': '(Virtues CFB)',
          'modifiers': {
            'attributes': {
              'Condition Damage': [175, 'converted'],
              'Boon Duration': '10%',
              'Quickness Duration': '30%',
              'Power Coefficient': 10,
              'Burning Coefficient': 0.0333,
            },
          },
          'gw2id': 83338,
        },
        {
          'id': 'surging-and-ruby-orb',
          'text': 'Superior Rune of Surging (5x) + Ruby Orb',
          'modifiers': {
            'attributes': {
              'Power': [195, 'converted'],
              'Precision': [14, 'converted'],
              'Ferocity': [14, 'converted'],
              'Boon Duration': '15%',
            },
          },
          'gw2id': 76813,
        },
        {
          'id': 'surging',
          'text': 'Superior Rune of Surging',
          'modifiers': {
            'attributes': {
              'Power': [175, 'converted'],
              'Boon Duration': '15%',
            },
          },
          'gw2id': 76813,
        },
        {
          'id': 'radiance',
          'text': 'Superior Rune of Radiance',
          'modifiers': {
            'attributes': {
              'Vitality': [175, 'converted'],
              'Boon Duration': '25%',
            },
          },
          'gw2id': 67342,
        },
        {
          'id': 'privateer',
          'text': 'Superior Rune of the Privateer',
          'subText': '(Approx.)',
          'modifiers': {
            'attributes': {
              'Power': [175, 'converted'],
              'Might Duration': '30%',
              'Flat DPS': 625,
            },
          },
          'gw2id': 67342,
        },
      ],
    },
    {
      'section': 'Defensive Runes',
      'items': [
        {
          'id': 'durability',
          'text': 'Superior Rune of Durability',
          'modifiers': {
            'attributes': {
              'Toughness': [175, 'converted'],
              'Boon Duration': '15%',
              'Maximum Health': '10%',
            },
          },
          'gw2id': 73653,
        },
        {
          'id': 'scrapper',
          'text': 'Superior Rune of the Scrapper',
          'modifiers': {
            'damage': {
              'Damage Reduction': ['7%', 'unknown'],
            },
            'attributes': {
              'Power': [175, 'converted'],
              'Toughness': [100, 'converted'],
            },
          },
          'gw2id': 71276,
        },
        {
          'id': 'vampirism',
          'text': 'Superior Rune of Vampirism',
          'modifiers': {
            'attributes': {
              'Power': [175, 'converted'],
              'Vitality': [100, 'converted'],
              'Maximum Health': '10%',
            },
          },
          'gw2id': 24711,
        },
        {
          'id': 'sanctuary',
          'text': 'Superior Rune of Sanctuary',
          'modifiers': {
            'attributes': {
              'Vitality': [175, 'converted'],
              'Boon Duration': '15%',
            },
          },
          'gw2id': 24857,
        },
        {
          'id': 'herald',
          'text': 'Superior Rune of the Herald',
          'modifiers': {
            'attributes': {
              'Toughness': [175, 'converted'],
              'Boon Duration': '15%',
            },
          },
          'gw2id': 76100,
        },
        {
          'id': 'rebirth',
          'text': 'Superior Rune of the Rebirth',
          'modifiers': {
            'attributes': {
              'Healing Power': [300, 'converted'],
              'Boon Duration': '15%',
            },
          },
          'gw2id': 84171,
        },
      ],
    },
    {
      'section': 'Heal Runes',
      'items': [
        {
          'id': 'monk',
          'text': 'Superior Rune of the Monk',
          'subText': '(10x)',
          'modifiers': {
            'attributes': {
              'Healing Power': [175, 'converted'],
              'Boon Duration': '15%',
              'Outgoing Healing': '20%',
            },
          },
          'gw2id': 24842,
        },
        {
          'id': 'water',
          'text': 'Superior Rune of the Water',
          'modifiers': {
            'attributes': {
              'Healing Power': [175, 'converted'],
              'Boon Duration': '25%',
            },
          },
          'gw2id': 24839,
        },
        {
          'id': 'altruism',
          'text': 'Superior Rune of Altruism',
          'modifiers': {
            'attributes': {
              'Healing Power': [300, 'converted'],
              'Boon Duration': '15%',
            },
          },
          'gw2id': 38206,
        },
        {
          'id': 'rebirth-2',
          'text': 'Superior Rune of the Rebirth',
          'modifiers': {
            'attributes': {
              'Healing Power': [300, 'converted'],
              'Boon Duration': '15%',
            },
          },
          'gw2id': 84171,
        },
        {
          'id': 'flock',
          'text': 'Superior Rune of the Flock',
          'modifiers': {
            'attributes': {
              'Healing Power': [175, 'converted'],
              'Vitality': [100, 'converted'],
              'Maximum Health': '10%',
            },
          },
          'gw2id': 24696,
        },
      ],
    },
    {
      'section': 'Condition Runes',
      'items': [
        {
          'id': 'berserker',
          'text': 'Superior Rune of the Berserker',
          'modifiers': {
            'damage': {
              'Strike Damage': ['5%', 'add'],
              'Condition Damage': ['5%', 'add'],
            },
            'attributes': {
              'Condition Damage': [175, 'converted'],
              'Power': [100, 'converted'],
            },
          },
          'gw2id': 71425,
        },
        {
          'id': 'renegade',
          'text': 'Superior Rune of the Renegade',
          'modifiers': {
            'damage': {
              'Condition Damage': ['7%', 'add'],
            },
            'attributes': {
              'Condition Damage': [175, 'converted'],
              'Ferocity': [100, 'converted'],
            },
          },
          'gw2id': 83502,
        },
        {
          'id': 'elementalist',
          'text': 'Superior Rune of the Elementalist',
          'modifiers': {
            'attributes': {
              'Power': [175, 'converted'],
              'Condition Damage': [225, 'converted'],
              'Condition Duration': '10%',
            },
          },
          'gw2id': 24800,
        },
        {
          'id': 'lich',
          'text': 'Superior Rune of the Lich',
          'modifiers': {
            'damage': {
              'Condition Damage': ['4%', 'add'],
            },
            'attributes': {
              'Vitality': [175, 'converted'],
              'Condition Duration': '15%',
              'Flat DPS': 86,
              'Bleeding Coefficient': 1.33,
            },
          },
          'gw2id': 24688,
        },
        {
          'id': 'trapper',
          'text': 'Superior Rune of the Trapper',
          'modifiers': {
            'attributes': {
              'Condition Damage': [175, 'converted'],
              'Condition Duration': '15%',
            },
          },
          'gw2id': 67339,
        },
        {
          'id': 'trapper-and-black-diamond',
          'text': 'Superior Rune of the Trapper (5x) + Black Diamond',
          'modifiers': {
            'attributes': {
              'Condition Damage': [192, 'converted'],
              'Condition Duration': '15%',
              'Power': [17, 'converted'],
              'Expertise': [9, 'converted'],
              'Precision': [9, 'converted'],
            },
          },
          'gw2id': 67339,
        },
        {
          'id': 'nightmare',
          'text': 'Superior Rune of the Nightmare',
          'modifiers': {
            'attributes': {
              'Condition Damage': [175, 'converted'],
              'Condition Duration': '20%',
            },
          },
          'gw2id': 24848,
        },
        {
          'id': 'tempest',
          'text': 'Superior Rune of the Tempest',
          'modifiers': {
            'attributes': {
              'Power': [36, 'converted'],
              'Precision': [36, 'converted'],
              'Toughness': [36, 'converted'],
              'Vitality': [36, 'converted'],
              'Concentration': [36, 'converted'],
              'Condition Damage': [36, 'converted'],
              'Expertise': [36, 'converted'],
              'Ferocity': [36, 'converted'],
              'Healing Power': [36, 'converted'],
              'Condition Duration': '25%',
            },
          },
          'gw2id': 76166,
        },
        {
          'id': 'undead',
          'text': 'Superior Rune of the Undead',
          'modifiers': {
            'attributes': {
              'Condition Damage': [175, 'converted'],
              'Toughness': [225, 'converted'],
            },
            'conversion': {
              'Condition Damage': {
                'Toughness': '7%',
              },
            },
          },
          'gw2id': 24757,
        },
        {
          'id': 'necromancer',
          'text': 'Superior Rune of the Necromancer',
          'modifiers': {
            'attributes': {
              'Condition Damage': [300, 'converted'],
              'Vitality': [100, 'converted'],
            },
          },
          'gw2id': 24806,
        },
        {
          'id': 'soulbeast',
          'text': 'Superior Rune of the Soulbeast',
          'subText': '(Active Bonus)',
          'modifiers': {
            'attributes': {
              'Condition Damage': [175, 'converted'],
              'Power': [100, 'converted'],
            },
            'conversion': {
              'Condition Damage': {
                'Power': '7%',
              },
            },
          },
          'gw2id': 83964,
        },
        {
          'id': 'aristocracy',
          'text': 'Superior Rune of the Aristocracy',
          'modifiers': {
            'attributes': {
              'Condition Damage': [175, 'converted'],
              'Might Duration': '50%',
            },
          },
          'gw2id': 24845,
        },
      ],
    },
    {
      'section': 'Specific Condition Runes',
      'items': [
        {
          'id': 'balthazar',
          'text': 'Superior Rune of Balthazar',
          'modifiers': {
            'attributes': {
              'Condition Damage': [175, 'converted'],
              'Burning Duration': '50%',
              'Maximum Health': '10%',
            },
          },
          'gw2id': 24765,
        },
        {
          'id': 'flame-legion-2',
          'text': 'Superior Rune of the Flame Legion',
          'modifiers': {
            'damage': {
              'Strike Damage': ['7%', 'mult'],
            },
            'attributes': {
              'Power': [175, 'converted'],
              'Burning Duration': '50%',
            },
          },
          'gw2id': 24797,
        },
        {
          'id': 'baelfire',
          'text': 'Superior Rune of the Baelfire',
          'modifiers': {
            'attributes': {
              'Power': [175, 'converted'],
              'Condition Duration': '10%',
              'Burning Duration': '30%',
            },
            'conversion': {
              'Expertise': {
                'Power': '7%',
              },
            },
          },
          'gw2id': 24854,
        },
        {
          'id': 'krait',
          'text': 'Superior Rune of the Krait',
          'subText': '(elite every 50s)',
          'modifiers': {
            'attributes': {
              'Condition Damage': [175, 'converted'],
              'Bleeding Duration': '50%',
              'Bleeding Coefficient': 0.16,
              'Torment Coefficient': 0.16,
              'Poison Coefficient': 0.16,
            },
          },
          'gw2id': 24762,
        },
        {
          'id': 'krait-no-elite',
          'text': 'Superior Rune of the Krait',
          'subText': '(no elite proc)',
          'modifiers': {
            'attributes': {
              'Condition Damage': [175, 'converted'],
              'Bleeding Duration': '50%',
            },
          },
          'gw2id': 24762,
        },
        {
          'id': 'mad-king',
          'text': 'Superior Rune of the Mad King',
          'subText': '(Not including elite)',
          'modifiers': {
            'attributes': {
              'Condition Duration': '5%',
              'Power': [175, 'converted'],
              'Bleeding Duration': '40%',
            },
          },
          'gw2id': 36044,
        },
        {
          'id': 'afflicted',
          'text': 'Superior Rune of the Afflicted',
          'modifiers': {
            'attributes': {
              'Condition Damage': [175, 'converted'],
              'Bleeding Duration': '20%',
              'Poison Duration': '10%',
              'Condition Duration': '10%',
            },
          },
          'gw2id': 24687,
        },
        {
          'id': 'thorns',
          'text': 'Superior Rune of Thorns',
          'modifiers': {
            'attributes': {
              'Condition Damage': [300, 'converted'],
              'Poison Duration': '50%',
            },
          },
          'gw2id': 72912,
        },
        {
          'id': 'scavenging',
          'text': 'Superior Rune of Scavenging',
          'modifiers': {
            'attributes': {
              'Condition Damage': [175, 'converted'],
              'Vitality': [100, 'converted'],
              'Poison Duration': '20%',
            },
            'conversion': {
              'Condition Damage': {
                'Vitality': '7%',
              },
            },
          },
          'gw2id': 24738,
        },
        {
          'id': 'tormenting',
          'text': 'Superior Rune of Tormenting',
          'modifiers': {
            'attributes': {
              'Condition Damage': [175, 'converted'],
              'Torment Duration': '50%',
            },
          },
          'gw2id': 44956,
        },
        {
          'id': 'perplexity',
          'text': 'Superior Rune of Perplexity',
          'modifiers': {
            'damage': {
              'Damage Reduction': ['10%', 'unknown'],
            },
            'attributes': {
              'Condition Damage': [175, 'converted'],
              'Confusion Duration': '50%',
            },
          },
          'gw2id': 44957,
        },
      ],
    },
    {
      'section': 'Hybrid Runes',
      'items': [
        {
          'id': 'traveler',
          'text': 'Superior Rune of the Traveler',
          'modifiers': {
            'attributes': {
              'Power': [36, 'converted'],
              'Precision': [36, 'converted'],
              'Toughness': [36, 'converted'],
              'Vitality': [36, 'converted'],
              'Concentration': [36, 'converted'],
              'Condition Damage': [36, 'converted'],
              'Expertise': [36, 'converted'],
              'Ferocity': [36, 'converted'],
              'Healing Power': [36, 'converted'],
              'Boon Duration': '15%',
              'Condition Duration': '10%',
            },
          },
          'gw2id': 24691,
        },
        {
          'id': 'divinity',
          'text': 'Superior Rune of Divinity',
          'modifiers': {
            'attributes': {
              'Power': [78, 'converted'],
              'Precision': [78, 'converted'],
              'Toughness': [78, 'converted'],
              'Vitality': [78, 'converted'],
              'Concentration': [78, 'converted'],
              'Condition Damage': [78, 'converted'],
              'Expertise': [78, 'converted'],
              'Ferocity': [78, 'converted'],
              'Healing Power': [78, 'converted'],
              'Maximum Health': '10%',
            },
          },
          'gw2id': 24732,
        },
        {
          'id': 'revenant',
          'text': 'Superior Rune of the Revenant',
          'modifiers': {
            'attributes': {
              'Power': [78, 'converted'],
              'Precision': [78, 'converted'],
              'Toughness': [78, 'converted'],
              'Vitality': [78, 'converted'],
              'Concentration': [78, 'converted'],
              'Condition Damage': [78, 'converted'],
              'Expertise': [78, 'converted'],
              'Ferocity': [78, 'converted'],
              'Healing Power': [78, 'converted'],
            },
          },
          'gw2id': 69370,
        },
        {
          'id': 'exuberance',
          'text': 'Superior Rune of Exuberance',
          'modifiers': {
            'attributes': {
              'Vitality': [175, 'converted'],
            },
            'conversion': {
              'Healing Power': {
                'Vitality': '3%',
              },
              'Precision': {
                'Vitality': '5%',
              },
              'Power': {
                'Vitality': '7%',
              },
            },
          },
          'gw2id': 44951,
        },
      ],
    },
  ],
  'sigils': [
    {
      'section': 'Power Sigils',
      'items': [
        {
          'id': 'force',
          'text': 'Superior Sigil of Force',
          'modifiers': {
            'damage': {
              'Strike Damage': ['5%', 'add'],
            },
          },
          'gw2id': 24615,
        },
        {
          'id': 'accuracy',
          'text': 'Superior Sigil of Accuracy',
          'modifiers': {
            'attributes': {
              'Critical Chance': '7%',
            },
          },
          'gw2id': 24618,
        },
        {
          'id': 'impact/night/slaying-both',
          'text': 'Superior Sigil of Impact/Night/Slaying',
          'subText': '(Both 7%/3%)',
          'modifiers': {
            'damage': {
              'Strike Damage': ['3%', 'add', '7%', 'mult'],
            },
          },
          'gw2id': 24868,
        },
        {
          'id': 'impact/night/slaying-only-3',
          'text': 'Superior Sigil of Impact/Night/Slaying',
          'subText': '(Only 3%)',
          'modifiers': {
            'damage': {
              'Strike Damage': ['3%', 'add'],
            },
          },
          'gw2id': 24868,
        },
        {
          'id': 'severance-perma',
          'text': 'Superior Sigil of Severance',
          'subText': '(While Active)',
          'modifiers': {
            'attributes': {
              'Precision': [250, 'buff'],
              'Ferocity': [250, 'buff'],
            },
          },
          'gw2id': 84505,
        },
        {
          'id': 'hydromancy',
          'text': 'Superior Sigil of Hydromancy',
          'subText': '(Without on-hit/on-crit effects)',
          'amountData': {
            'label': '/10s',
            'default': 1,
            'quantityEntered': 10,
          },
          'modifiers': {
            'attributes': {
              'Power Coefficient': 690.5,
            },
          },
          'gw2id': 24597,
        },
        {
          'id': 'hydromancy-bonus',
          'text': 'Superior Sigil of Hydromancy',
          'subText': '(+12.5%)',
          'amountData': {
            'label': '/10s',
            'default': 1,
            'quantityEntered': 10,
          },
          'modifiers': {
            'attributes': {
              'Power Coefficient': 776.8,
            },
          },
          'gw2id': 24597,
        },
      ],
    },
    {
      'section': 'Support Sigils',
      'items': [
        {
          'id': 'concentration',
          'text': 'Superior Sigil of Concentration',
          'modifiers': {
            'attributes': {
              'Boon Duration': '10%',
            },
          },
          'gw2id': 72339,
        },
      ],
    },
    {
      'section': 'Heal Sigils',
      'items': [
        {
          'id': 'transference',
          'text': 'Superior Sigil of Transference',
          'modifiers': {
            'attributes': {
              'Outgoing Healing': '10%',
            },
          },
          'gw2id': 74326,
        },
      ],
    },
    {
      'section': 'Condition Duration Sigils',
      'items': [
        {
          'id': 'malice',
          'text': 'Superior Sigil of Malice',
          'modifiers': {
            'attributes': {
              'Condition Duration': '10%',
            },
          },
          'gw2id': 44950,
        },
        {
          'id': 'bursting',
          'text': 'Superior Sigil of Bursting',
          'modifiers': {
            'damage': {
              'Condition Damage': ['5%', 'add'],
            },
          },
          'gw2id': 44944,
        },
        {
          'id': 'agony',
          'text': 'Superior Sigil of Agony',
          'modifiers': {
            'attributes': {
              'Bleeding Duration': '20%',
            },
          },
          'gw2id': 24612,
        },
        {
          'id': 'smoldering',
          'text': 'Superior Sigil of Smoldering',
          'modifiers': {
            'attributes': {
              'Burning Duration': '20%',
            },
          },
          'gw2id': 24624,
        },
        {
          'id': 'venom',
          'text': 'Superior Sigil of Venom',
          'modifiers': {
            'attributes': {
              'Poison Duration': '20%',
            },
          },
          'gw2id': 24632,
        },
        {
          'id': 'demons',
          'text': 'Superior Sigil of Demons',
          'modifiers': {
            'attributes': {
              'Torment Duration': '20%',
            },
          },
          'gw2id': 24583,
        },
      ],
    },
    {
      'section': 'Condition Effect Sigils',
      'items': [
        {
          'id': 'geomancy',
          'text': 'Superior Sigil of Geomancy',
          'subText': '(Without on-hit/on-crit effects)',
          'amountData': {
            'label': '/10s',
            'default': 1,
            'quantityEntered': 10,
          },
          'modifiers': {
            'attributes': {
              'Power Coefficient': 172.625,
              'Bleeding Coefficient': 24,
            },
          },
          'gw2id': 24605,
        },
        {
          'id': 'earth',
          'text': 'Superior Sigil of Earth',
          'amountData': {
            'label': '/10s',
            'default': 4.3,
            'quantityEntered': 10,
          },
          'modifiers': {
            'attributes': {
              'Bleeding Coefficient': 6,
            },
          },
          'gw2id': 24560,
        },
        {
          'id': 'doom',
          'text': 'Superior Sigil of Doom',
          'amountData': {
            'label': '/10s',
            'default': 1,
            'quantityEntered': 10,
          },
          'modifiers': {
            'attributes': {
              'Poison Coefficient': 24,
            },
          },
          'gw2id': 24609,
        },
        {
          'id': 'torment',
          'text': 'Superior Sigil of Torment',
          'amountData': {
            'label': '/10s',
            'default': 1.9,
            'quantityEntered': 10,
          },
          'modifiers': {
            'attributes': {
              'Torment Coefficient': 10,
            },
          },
          'gw2id': 48911,
        },
        {
          'id': 'mischief-ineptitude',
          'text': 'Superior Sigil of Mischief',
          'subText': '(With Ineptitide; 1 snowball)',
          'amountData': {
            'label': '/10s',
            'default': 1,
            'quantityEntered': 10,
          },
          'modifiers': {
            'attributes': {
              'Confusion Coefficient': 10,
              'Power Coefficient': 103.58,
            },
          },
          'gw2id': 68436,
        },
      ],
    },
    {
      'section': 'Temporary hard-coded dual sigils',
      'items': [
        {
          'id': 'geomancy-torment-cfb5-virtues',
          'text': 'Geo + Torment CFB 5 page RF',
          'modifiers': {
            'attributes': {
              'Power Coefficient': 6.5,
              'Bleeding Coefficient': 1.44,
              'Torment Coefficient': 0.94,
              'Burning Coefficient': 0.048,
            },
          },
          'gw2id': 24605,
        },
        {
          'id': 'geomancy-torment-cfb8-virtues',
          'text': 'Geo + Torment CFB 8 page',
          'modifiers': {
            'attributes': {
              'Power Coefficient': 11.9,
              'Bleeding Coefficient': 1.65,
              'Torment Coefficient': 1.28,
              'Burning Coefficient': 0.055,
            },
          },
          'gw2id': 24605,
        },
        {
          'id': 'geomancy-torment-cwb',
          'text': 'Geo + Torment CWB',
          'modifiers': {
            'attributes': {
              'Power Coefficient': 8.6,
              'Bleeding Coefficient': 1.2,
              'Torment Coefficient': 1.18,
              'Burning Coefficient': 0.04,
            },
          },
          'gw2id': 24605,
        },
        {
          'id': 'geomancy-torment-cwb-alac',
          'text': 'Geo + Torment CWB Alac',
          'modifiers': {
            'attributes': {
              'Power Coefficient': 7.5,
              'Bleeding Coefficient': 1.04,
              'Torment Coefficient': 1.2,
              'Burning Coefficient': 0.035,
            },
          },
          'gw2id': 24605,
        },
        {
          'id': 'geomancy-torment-harb',
          'text': 'Geo + Torment Harbinger',
          'subText': '(with Barbed Precision)',
          'modifiers': {
            'attributes': {
              'Power Coefficient': 7.5,
              'Bleeding Coefficient': 1.04,
              'Torment Coefficient': 1.2,
              'Burning Coefficient': 0.035,
            },
            'conversionAfterBuffs': {
              'Bleeding Coefficient': {
                'Critical Chance': '4.1%',
              },
            },
          },
          'gw2id': 24605,
        },
      ],
    },
    {
      'section': 'Stacking Sigils',
      'items': [
        {
          'id': 'bloodlust',
          'text': 'Superior Sigil of Bloodlust',
          'amountData': {
            'label': 'stacks',
            'default': 25,
            'quantityEntered': 25,
          },
          'modifiers': {
            'attributes': {
              'Power': [250, 'converted'],
            },
          },
          'gw2id': 24575,
        },
        {
          'id': 'cruelty',
          'text': 'Superior Sigil of Cruelty',
          'amountData': {
            'label': 'stacks',
            'default': 25,
            'quantityEntered': 25,
          },
          'modifiers': {
            'attributes': {
              'Ferocity': [250, 'converted'],
            },
          },
          'gw2id': 67341,
        },
        {
          'id': 'perception',
          'text': 'Superior Sigil of Perception',
          'amountData': {
            'label': 'stacks',
            'default': 25,
            'quantityEntered': 25,
            'disableBlacklist': true,
          },
          'modifiers': {
            'attributes': {
              'Precision': [250, 'converted'],
            },
          },
          'gw2id': 24580,
        },
        {
          'id': 'corruption',
          'text': 'Superior Sigil of Corruption',
          'amountData': {
            'label': 'stacks',
            'default': 25,
            'quantityEntered': 25,
          },
          'modifiers': {
            'attributes': {
              'Condition Damage': [250, 'converted'],
            },
          },
          'gw2id': 24578,
        },
        {
          'id': 'life',
          'text': 'Superior Sigil of Life',
          'amountData': {
            'label': 'stacks',
            'default': 25,
            'quantityEntered': 25,
          },
          'modifiers': {
            'attributes': {
              'Healing Power': [250, 'converted'],
            },
          },
          'gw2id': 24582,
        },
        {
          'id': 'bounty',
          'text': 'Superior Sigil of Bounty',
          'amountData': {
            'label': 'stacks',
            'default': 25,
            'quantityEntered': 25,
            'disableBlacklist': true,
          },
          'modifiers': {
            'attributes': {
              'Concentration': [225, 'converted'],
            },
          },
          'gw2id': 81045,
        },
        {
          'id': 'benevolence',
          'text': 'Superior Sigil of Benevolence',
          'amountData': {
            'label': 'stacks',
            'default': 25,
            'quantityEntered': 25,
          },
          'modifiers': {
            'attributes': {
              'Outgoing Healing': '12.5%',
            },
          },
          'gw2id': 24584,
        },
        {
          'id': 'momentum',
          'text': 'Superior Sigil of Momentum',
          'amountData': {
            'label': 'stacks',
            'default': 25,
            'quantityEntered': 25,
            'disableBlacklist': true,
          },
          'modifiers': {
            'attributes': {
              'Toughness': [125, 'converted'],
            },
          },
          'gw2id': 49457,
        },
        {
          'id': 'stars',
          'text': 'Superior Sigil of the Stars',
          'amountData': {
            'label': 'stacks',
            'default': 25,
            'quantityEntered': 25,
            'disableBlacklist': true,
          },
          'modifiers': {
            'attributes': {
              'Power': [50, 'converted'],
              'Precision': [50, 'converted'],
              'Toughness': [50, 'converted'],
              'Vitality': [50, 'converted'],
              'Concentration': [50, 'converted'],
              'Condition Damage': [50, 'converted'],
              'Expertise': [50, 'converted'],
              'Ferocity': [50, 'converted'],
              'Healing Power': [50, 'converted'],
            },
          },
          'gw2id': 86170,
        },
      ],
    },
    {
      'section': 'Gemstones',
      'items': [
        {
          'id': 'platinum-doubloon',
          'text': 'Platinum Doubloon',
          'modifiers': {
            'attributes': {
              'Concentration': [40, 'converted'],
            },
          },
          'gw2id': 24773,
        },
      ],
    },
  ],
  'Thief': [
    {
      'section': 'Skills',
      'items': [
        {
          'id': 'assassins-signet',
          'text': "Assassin's Signet",
          'subText': 'passive',
          'modifiers': {
            'attributes': {
              'Power': [180, 'buff'],
            },
          },
          'gw2id': 13046,
        },
        {
          'id': 'assassins-signet-active',
          'text': "Assassin's Signet",
          'subText': 'while active',
          'amountData': {
            'label': '% uptime',
            'default': 100,
            'quantityEntered': 100,
          },
          'modifiers': {
            'attributes': {
              'Power': [540, 'buff'],
            },
          },
          'gw2id': 13046,
        },
        {
          'id': 'signet-of-agility',
          'text': 'Signet of Agility',
          'modifiers': {
            'attributes': {
              'Precision': [180, 'buff'],
            },
          },
          'gw2id': 13062,
        },
      ],
    },
    {
      'section': 'Deadly Arts',
      'id': 28,
      'items': [
        {
          'id': 'dagger-training-base',
          'text': 'Dagger Training',
          'subText': 'base',
          'modifiers': {
            'attributes': {
              'Power': [80, 'converted'],
            },
          },
          'gw2id': 1245,
          'defaultEnabled': true,
        },
        {
          'id': 'dagger-training-dagger',
          'text': 'Dagger Training',
          'subText': 'with dagger',
          'modifiers': {
            'attributes': {
              'Power': [80, 'converted'],
            },
          },
          'gw2id': 1245,
        },
        {
          'id': 'deadly-ambition',
          'text': 'Deadly Ambition',
          'modifiers': {
            'attributes': {
              'Condition Damage': [120, 'converted'],
            },
          },
          'gw2id': 1164,
          'defaultEnabled': true,
        },
        {
          'id': 'revealed-training-base',
          'text': 'Revealed Training',
          'subText': 'base',
          'modifiers': {
            'attributes': {
              'Power': [80, 'buff'],
            },
          },
          'gw2id': 1704,
          'defaultEnabled': true,
        },
        {
          'id': 'revealed-training-revealed',
          'text': 'Revealed Training',
          'amountData': {
            'label': '% revealed',
            'default': 100,
            'quantityEntered': 100,
          },
          'modifiers': {
            'attributes': {
              'Power': [120, 'buff'],
            },
          },
          'gw2id': 1704,
        },
        {
          'id': 'exposed-weakness',
          'text': 'Exposed Weakness',
          'minor': true,
          'amountData': {
            'label': 'conditions',
            'default': 10,
            'quantityEntered': 1,
          },
          'modifiers': {
            'damage': {
              'Strike Damage': ['2%', 'mult'],
            },
          },
          'gw2id': 1257,
          'defaultEnabled': true,
        },
        {
          'id': 'potent-poison',
          'text': 'Potent Poison',
          'modifiers': {
            'damage': {
              'Poison Damage': ['33%', 'unknown'],
            },
            'attributes': {
              'Poison Duration': '33%',
            },
          },
          'gw2id': 1291,
          'defaultEnabled': true,
        },
        {
          'id': 'executioner',
          'text': 'Executioner',
          'amountData': {
            'label': '% below 50',
            'default': 50,
            'quantityEntered': 100,
          },
          'modifiers': {
            'damage': {
              'Strike Damage': ['20%', 'mult'],
            },
          },
          'gw2id': 1269,
          'defaultEnabled': true,
        },
      ],
    },
    {
      'section': 'Critical Strikes',
      'id': 35,
      'items': [
        {
          'id': 'keen-observer',
          'text': 'Keen Observer',
          'subText': '100% scholar',
          'minor': true,
          'modifiers': {
            'attributes': {
              'Critical Chance': '10%',
            },
          },
          'gw2id': 1281,
          'defaultEnabled': true,
        },
        {
          'id': 'twin-fangs-scholar',
          'text': 'Twin Fangs',
          'subText': '100% scholar (check both)',
          'modifiers': {
            'damage': {
              'Critical Damage': ['7%', 'unknown'],
            },
          },
          'gw2id': 1268,
          'defaultEnabled': true,
        },
        {
          'id': 'twin-fangs-flank',
          'text': 'Twin Fangs',
          'subText': '100% flanking (check both)',
          'modifiers': {
            'attributes': {
              'Critical Chance': '7%',
            },
          },
          'gw2id': 1268,
          'defaultEnabled': true,
        },
        {
          'id': 'practiced-tolerance',
          'text': 'Practiced Tolerance',
          'modifiers': {
            'conversion': {
              'Ferocity': {
                'Precision': '10%',
              },
            },
          },
          'gw2id': 1272,
          'defaultEnabled': true,
        },
        {
          'id': 'ferocious-strikes',
          'text': 'Ferocious Strikes',
          'minor': true,
          'amountData': {
            'label': '% above 50',
            'default': 50,
            'quantityEntered': 100,
          },
          'modifiers': {
            'damage': {
              'Critical Damage': ['10%', 'unknown'],
            },
          },
          'gw2id': 1282,
          'defaultEnabled': true,
        },
        {
          'id': 'no-quarter',
          'text': 'No Quarter',
          'amountData': {
            'label': '% fury',
            'default': 100,
            'quantityEntered': 100,
          },
          'modifiers': {
            'attributes': {
              'Ferocity': [250, 'buff'],
            },
          },
          'gw2id': 1904,
          'defaultEnabled': true,
        },
      ],
    },
    {
      'section': 'Shadow Arts',
      'id': 20,
      'items': [],
    },
    {
      'section': 'Acrobatics',
      'id': 54,
      'items': [
        {
          'id': 'endless-stamina',
          'text': 'Endless Stamina',
          'minor': true,
          'modifiers': {
            'attributes': {
              'Concentration': [240, 'buff'],
            },
          },
          'gw2id': 1242,
          'defaultEnabled': true,
        },
      ],
    },
    {
      'section': 'Trickery',
      'id': 44,
      'items': [
        {
          'id': 'preparedness',
          'text': 'Preparedness',
          'minor': true,
          'modifiers': {
            'attributes': {
              'Expertise': [150, 'converted'],
            },
          },
          'gw2id': 1232,
          'defaultEnabled': true,
        },
        {
          'id': 'lead-attacks',
          'text': 'Lead Attacks',
          'minor': true,
          'amountData': {
            'label': 'stacks',
            'default': 15,
            'quantityEntered': 1,
          },
          'modifiers': {
            'damage': {
              'All Damage': ['1%', 'add'],
            },
          },
          'gw2id': 1157,
          'defaultEnabled': true,
        },
        {
          'id': 'deadly-ambush',
          'text': 'Deadly Ambush',
          'modifiers': {
            'damage': {
              'Bleeding Damage': ['25%', 'unknown'],
            },
          },
          'gw2id': 1706,
          'defaultEnabled': true,
        },
      ],
    },
    {
      'section': 'Daredevil',
      'id': 7,
      'items': [
        {
          'id': 'marauders-resilience',
          'text': "Marauder's Resilience",
          'subText': 'melee',
          'modifiers': {
            'damage': {
              'Damage Reduction': ['10%', 'unknown'],
            },
            'conversion': {
              'Vitality': {
                'Power': '7%',
              },
            },
          },
          'gw2id': 1933,
          'defaultEnabled': true,
        },
        {
          'id': 'weakening-strikes',
          'text': 'Weakening Strikes',
          'subText': '100% weakness',
          'minor': true,
          'modifiers': {
            'damage': {
              'Strike Damage': ['7%', 'mult'],
              'Damage Reduction': ['10%', 'unknown'],
            },
          },
          'gw2id': 1887,
          'defaultEnabled': true,
        },
        {
          'id': 'staff-master-base',
          'text': 'Staff Master',
          'subText': 'base',
          'modifiers': {
            'attributes': {
              'Power': [120, 'converted'],
            },
          },
          'gw2id': 1884,
          'defaultEnabled': true,
        },
        {
          'id': 'staff-master-staff',
          'text': 'Staff Master',
          'subText': 'with staff',
          'modifiers': {
            'attributes': {
              'Power': [120, 'converted'],
            },
          },
          'gw2id': 1884,
          'defaultEnabled': true,
        },
        {
          'id': 'havoc-specialist',
          'text': 'Havoc Specialist',
          'amountData': {
            'label': 'missing bars',
            'default': 3,
            'quantityEntered': 1,
          },
          'modifiers': {
            'damage': {
              'Strike Damage': ['5%', 'mult'],
            },
          },
          'gw2id': 1893,
          'defaultEnabled': true,
        },
        {
          'id': 'lotus-training',
          'text': 'Lotus Training',
          'subText': '100% uptime',
          'modifiers': {
            'damage': {
              'Condition Damage': ['15%', 'add'],
            },
          },
          'gw2id': 1833,
          'defaultEnabled': true,
        },
        {
          'id': 'unhindered-combatant',
          'text': 'Unhindered Combatant',
          'subText': '100% uptime',
          'modifiers': {
            'damage': {
              'Damage Reduction': ['10%', 'unknown'],
            },
          },
          'gw2id': 1964,
          'defaultEnabled': true,
        },
        {
          'id': 'bounding-dodger',
          'text': 'Bounding Dodger',
          'subText': '100% uptime',
          'modifiers': {
            'damage': {
              'Strike Damage': ['10%', 'add'],
            },
          },
          'gw2id': 2047,
          'defaultEnabled': true,
        },
      ],
    },
    {
      'section': 'Deadeye',
      'id': 58,
      'items': [
        {
          'id': 'silent-scope-base',
          'text': 'Silent Scope',
          'subText': 'base',
          'modifiers': {
            'attributes': {
              'Precision': [120, 'converted'],
            },
          },
          'gw2id': 2118,
          'defaultEnabled': true,
        },
        {
          'id': 'silent-scope-rifle',
          'text': 'Silent Scope',
          'subText': 'with rifle',
          'modifiers': {
            'attributes': {
              'Precision': [120, 'converted'],
            },
          },
          'gw2id': 2118,
          'defaultEnabled': true,
        },
        {
          'id': 'premeditation-base',
          'text': 'Premeditation',
          'subText': 'base',
          'modifiers': {
            'attributes': {
              'Concentration': [180, 'buff'],
            },
          },
          'gw2id': 2160,
          'defaultEnabled': true,
        },
        {
          'id': 'premeditation',
          'text': 'Premeditation',
          'amountData': {
            'label': 'boons',
            'default': 8,
            'quantityEntered': 1,
          },
          'modifiers': {
            'damage': {
              'Strike Damage': ['1%', 'mult'],
            },
          },
          'gw2id': 2160,
          'defaultEnabled': true,
        },
        {
          'id': 'iron-sight',
          'text': 'Iron Sight',
          'minor': true,
          'modifiers': {
            'damage': {
              'Strike Damage': ['10%', 'mult'],
              'Damage Reduction': ['10%', 'unknown'],
            },
          },
          'gw2id': 2084,
          'defaultEnabled': true,
        },
        {
          'id': 'be-quick-or-be-killed',
          'text': 'Be Quick or Be Killed',
          'subText': '100% quickness',
          'modifiers': {
            'attributes': {
              'Power': [200, 'buff'],
              'Precision': [200, 'buff'],
            },
          },
          'gw2id': 2093,
          'defaultEnabled': true,
        },
      ],
    },
    {
      'section': 'Specter',
      'id': 71,
      'items': [
        {
          'id': 'second-opinion-base',
          'text': 'Second Opinion',
          'subText': 'base',
          'modifiers': {
            'conversion': {
              'Healing Power': {
                'Condition Damage': '7%',
              },
            },
            'attributes': {
              'Healing Power': [60, 'unknown'],
            },
          },
          'gw2id': 2284,
          'defaultEnabled': true,
        },
        {
          'id': 'second-opinion-scepter',
          'text': 'Second Opinion',
          'subText': 'with scepter',
          'amountData': {
            'label': '% uptime',
            'default': 100,
            'quantityEntered': 100,
          },
          'modifiers': {
            'attributes': {
              'Healing Power': [60, 'unknown'],
            },
          },
          'gw2id': 2284,
          'defaultEnabled': true,
        },
        {
          'id': 'dark-sentry',
          'text': 'Dark Sentry',
          'minor': true,
          'modifiers': {
            'attributes': {
              'Outgoing Healing': '20%',
            },
          },
          'gw2id': 2272,
          'defaultEnabled': true,
        },
        {
          'id': 'larcenous-torment',
          'text': 'Larcenous Torment',
          'modifiers': {
            'damage': {
              'Torment Damage': ['10%', 'unknown'],
            },
          },
          'gw2id': 2290,
          'defaultEnabled': true,
        },
        {
          'id': 'strength-of-shadows-base',
          'text': 'Strength of Shadows',
          'subText': 'base',
          'modifiers': {
            'conversion': {
              'Expertise': {
                'Vitality': '13%',
              },
            },
          },
          'gw2id': 2264,
          'defaultEnabled': true,
        },
        {
          'id': 'strength-of-shadows-condis',
          'text': 'Strength of Shadows',
          'amountData': {
            'label': 'conditions',
            'default': 10,
            'quantityEntered': 1,
            'disableBlacklist': true,
          },
          'modifiers': {
            'damage': {
              'Damage Reduction': ['2%', 'unknown'],
            },
          },
          'gw2id': 2264,
          'defaultEnabled': true,
        },
      ],
    },
  ],
  'utility': [
    {
      'section': 'Power Utilities',
      'items': [
        {
          'id': 'slaying-potion',
          'text': 'Slaying Potion',
          'modifiers': {
            'damage': {
              'Strike Damage': ['10%', 'mult'],
              'Damage Reduction': ['10%', 'unknown'],
            },
          },
          'gw2id': 50082,
        },
        {
          'id': 'furious-sharpening-stone',
          'text': 'Furious Sharpening Stone',
          'modifiers': {
            'conversion': {
              'Power': {
                'Precision': '3%',
              },
              'Ferocity': {
                'Precision': '3%',
              },
            },
          },
          'gw2id': 67530,
        },
        {
          'id': 'superior-sharpening-stone',
          'text': 'Superior Sharpening Stone',
          'modifiers': {
            'conversion': {
              'Power': {
                'Precision': '3%',
                'Ferocity': '6%',
              },
            },
          },
          'gw2id': 9443,
        },
        {
          'id': 'toxic-sharpening-stone',
          'text': 'Toxic Sharpening Stone',
          'modifiers': {
            'conversion': {
              'Power': {
                'Condition Damage': '6%',
                'Expertise': '8%',
              },
            },
          },
          'gw2id': 48915,
        },
        {
          'id': 'magnanimous-sharpening-stone',
          'text': 'Magnanimous Sharpening Stone',
          'modifiers': {
            'conversion': {
              'Power': {
                'Vitality': '3%',
                'Toughness': '3%',
              },
            },
          },
          'gw2id': 81034,
        },
        {
          'id': 'bountiful-sharpening-stone',
          'text': 'Bountiful Sharpening Stone',
          'modifiers': {
            'conversion': {
              'Power': {
                'Healing Power': '6%',
                'Concentration': '8%',
              },
            },
          },
          'gw2id': 67531,
        },
      ],
    },
    {
      'section': 'Support Utilities',
      'items': [
        {
          'id': 'potent-lucent-oil',
          'text': 'Potent Lucent Oil',
          'modifiers': {
            'conversion': {
              'Concentration': {
                'Power': '3%',
                'Precision': '3%',
              },
            },
          },
          'gw2id': 89203,
        },
        {
          'id': 'toxic-maintenance-oil',
          'text': 'Toxic Maintenance Oil',
          'modifiers': {
            'conversion': {
              'Concentration': {
                'Power': '3%',
                'Condition Damage': '6%',
              },
            },
          },
          'gw2id': 48916,
        },
        {
          'id': 'enhanced-lucent-oil',
          'text': 'Enhanced Lucent Oil',
          'modifiers': {
            'conversion': {
              'Concentration': {
                'Precision': '3%',
                'Condition Damage': '6%',
              },
            },
          },
          'gw2id': 89157,
        },
        {
          'id': 'furious-maintenance-oil',
          'text': 'Furious Maintenance Oil',
          'modifiers': {
            'conversion': {
              'Concentration': {
                'Precision': '3%',
              },
              'Healing Power': {
                'Precision': '3%',
              },
            },
          },
          'gw2id': 67529,
        },
        {
          'id': 'magnanimous-maintenance-oil',
          'text': 'Magnanimous Maintenance Oil',
          'modifiers': {
            'conversion': {
              'Concentration': {
                'Vitality': '3%',
                'Toughness': '3%',
              },
            },
          },
          'gw2id': 81157,
        },
        {
          'id': 'master-maintenance-oil',
          'text': 'Master Maintenance Oil / Peppermint Oil',
          'modifiers': {
            'conversion': {
              'Concentration': {
                'Precision': '3%',
                'Healing Power': '6%',
              },
            },
          },
          'gw2id': 9461,
        },
        {
          'id': 'corsair-maintenance-oil',
          'text': 'Corsair Maintenance Oil',
          'modifiers': {
            'conversion': {
              'Concentration': {
                'Toughness': '3%',
              },
              'Expertise': {
                'Toughness': '3%',
              },
            },
          },
          'gw2id': 86016,
        },
      ],
    },
    {
      'section': 'Heal Utilities',
      'items': [
        {
          'id': 'bountiful-maintenance-oil',
          'text': 'Bountiful Maintenance Oil',
          'modifiers': {
            'conversion': {
              'Outgoing Healing': {
                'Healing Power': '0.006%',
                'Concentration': '0.008%',
              },
            },
          },
          'gw2id': 67528,
        },
      ],
    },
    {
      'section': 'Condition Utilities',
      'items': [
        {
          'id': 'toxic-focusing-crystal',
          'text': 'Toxic Focusing Crystal',
          'modifiers': {
            'conversion': {
              'Condition Damage': {
                'Power': '3%',
                'Precision': '3%',
              },
            },
          },
          'gw2id': 48917,
        },
        {
          'id': 'furious-tuning-crystal',
          'text': 'Furious Tuning Crystal',
          'modifiers': {
            'conversion': {
              'Condition Damage': {
                'Precision': '3%',
              },
              'Expertise': {
                'Precision': '3%',
              },
            },
          },
          'gw2id': 67524,
        },
        {
          'id': 'master-tuning-crystal',
          'text': 'Master Tuning Crystal / Tuning Icicle',
          'modifiers': {
            'conversion': {
              'Condition Damage': {
                'Precision': '3%',
                'Expertise': '8%',
              },
            },
          },
          'gw2id': 9476,
        },
        {
          'id': 'magnanimous-tuning-crystal',
          'text': 'Magnanimous Tuning Crystal',
          'modifiers': {
            'conversion': {
              'Condition Damage': {
                'Vitality': '3%',
                'Toughness': '3%',
              },
            },
          },
          'gw2id': 81079,
        },
        {
          'id': 'bountiful-tuning-crystal',
          'text': 'Bountiful Tuning Crystal',
          'modifiers': {
            'conversion': {
              'Condition Damage': {
                'Healing Power': '6%',
                'Concentration': '8%',
              },
            },
          },
          'gw2id': 67522,
        },
      ],
    },
    {
      'section': 'SAB Utilities',
      'items': [
        {
          'id': 'holographic-super-apple',
          'text': 'Holographic Super Apple',
          'modifiers': {
            'conversion': {
              'Condition Damage': {
                'Concentration': '8%',
              },
              'Concentration': {
                'Precision': '3%',
              },
            },
          },
          'gw2id': 87336,
        },
        {
          'id': 'holographic-super-drumstick',
          'text': 'Holographic Super Drumstick',
          'modifiers': {
            'conversion': {
              'Healing Power': {
                'Concentration': '8%',
              },
              'Concentration': {
                'Precision': '3%',
              },
            },
          },
          'gw2id': 87329,
        },
        {
          'id': 'holographic-super-cheese',
          'text': 'Holographic Super Cheese',
          'modifiers': {
            'conversion': {
              'Power': {
                'Concentration': '8%',
              },
              'Concentration': {
                'Precision': '3%',
              },
            },
          },
          'gw2id': 87358,
        },
      ],
    },
    {
      'section': 'Writs',
      'items': [
        {
          'id': 'writ-of-masterful-accuracy',
          'text': 'Writ of Masterful Accuracy',
          'subText': '(100% uptime)',
          'modifiers': {
            'attributes': {
              'Precision': [200, 'converted'],
            },
          },
          'gw2id': 76833,
        },
        {
          'id': 'writ-of-masterful-malice',
          'text': 'Writ of Masterful Malice',
          'amountData': {
            'label': '% uptime',
            'default': 100,
            'quantityEntered': 100,
          },
          'modifiers': {
            'attributes': {
              'Condition Damage': [200, 'converted'],
            },
          },
          'gw2id': 72510,
        },
        {
          'id': 'writ-of-masterful-strength',
          'text': 'Writ of Masterful Strength',
          'amountData': {
            'label': '% uptime',
            'default': 100,
            'quantityEntered': 100,
          },
          'modifiers': {
            'attributes': {
              'Power': [200, 'converted'],
            },
          },
          'gw2id': 73191,
        },
        {
          'id': 'writ-of-learned-accuracy',
          'text': 'Writ of Learned Accuracy',
          'subText': '(100% uptime)',
          'modifiers': {
            'attributes': {
              'Precision': [160, 'converted'],
            },
          },
          'gw2id': 75610,
        },
        {
          'id': 'writ-of-calculated-accuracy',
          'text': 'Writ of Calculated Accuracy',
          'subText': '(100% uptime)',
          'modifiers': {
            'attributes': {
              'Precision': [120, 'converted'],
            },
          },
          'gw2id': 72821,
        },
        {
          'id': 'writ-of-studied-accuracy',
          'text': 'Writ of Studied Accuracy',
          'subText': '(100% uptime)',
          'modifiers': {
            'attributes': {
              'Precision': [100, 'converted'],
            },
          },
          'gw2id': 71514,
        },
      ],
    },
    {
      'section': 'Misc',
      'items': [
        {
          'id': 'potion-of-karka-toughness',
          'text': 'Potion Of Karka Toughness',
          'modifiers': {
            'attributes': {
              'Toughness': [150, 'converted'],
            },
          },
          'gw2id': 42428,
        },
      ],
    },
  ],
  'Warrior': [
    {
      'section': 'Skills',
      'items': [
        {
          'id': 'signet-of-might',
          'text': 'Signet of Might',
          'modifiers': {
            'attributes': {
              'Power': [180, 'buff'],
            },
          },
          'gw2id': 14404,
        },
        {
          'id': 'signet-of-fury',
          'text': 'Signet of Fury',
          'modifiers': {
            'attributes': {
              'Precision': [180, 'buff'],
            },
          },
          'gw2id': 14410,
        },
        {
          'id': 'dolyak-signet',
          'text': 'Dolyak Signet',
          'modifiers': {
            'attributes': {
              'Toughness': [180, 'buff'],
            },
          },
          'gw2id': 14413,
        },
      ],
    },
    {
      'section': 'Strength',
      'id': 4,
      'items': [
        {
          'id': 'peak-performance',
          'text': 'Peak Performance',
          'subText': 'passive',
          'modifiers': {
            'damage': {
              'Strike Damage': ['5%', 'add'],
            },
          },
          'gw2id': 1444,
          'defaultEnabled': true,
        },
        {
          'id': 'peak-performance-2',
          'text': 'Peak Performance',
          'subText': 'active',
          'amountData': {
            'label': '% uptime',
            'default': 100,
            'quantityEntered': 100,
          },
          'modifiers': {
            'damage': {
              'Strike Damage': ['10%', 'add'],
            },
          },
          'gw2id': 1444,
        },
        {
          'id': 'forceful-greatsword',
          'text': 'Forceful Greatsword',
          'subText': 'base',
          'modifiers': {
            'attributes': {
              'Power': [120, 'converted'],
            },
          },
          'gw2id': 1338,
          'defaultEnabled': true,
        },
        {
          'id': 'forceful-greatsword-2',
          'text': 'Forceful Greatsword',
          'subText': 'with greatsword/spear',
          'amountData': {
            'label': '% uptime',
            'default': 50,
            'quantityEntered': 100,
          },
          'modifiers': {
            'attributes': {
              'Power': [120, 'converted'],
            },
          },
          'gw2id': 1338,
        },
        {
          'id': 'great-fortitude',
          'text': 'Great Fortitude',
          'modifiers': {
            'conversion': {
              'Vitality': {
                'Power': '10%',
              },
              'Ferocity': {
                'Power': '10%',
              },
            },
          },
          'gw2id': 1449,
          'defaultEnabled': true,
        },
        {
          'id': 'pinnacle-of-strength',
          'text': 'Pinnacle Of Strength',
          'minor': true,
          'amountData': {
            'label': 'might',
            'default': 25,
            'quantityEntered': 25,
          },
          'modifiers': {
            'attributes': {
              'Power': [250, 'buff'],
            },
          },
          'gw2id': 1453,
          'defaultEnabled': true,
        },
        {
          'id': 'berserkers-power',
          'text': "Berserker's Power",
          'amountData': {
            'label': 'stacks',
            'default': 3,
            'quantityEntered': 1,
          },
          'modifiers': {
            'damage': {
              'Strike Damage': ['7%', 'add'],
            },
          },
          'gw2id': 1437,
          'defaultEnabled': true,
        },
      ],
    },
    {
      'section': 'Arms',
      'id': 36,
      'items': [
        {
          'id': 'wounding-precision',
          'text': 'Wounding Precision',
          'modifiers': {
            'conversion': {
              'Expertise': {
                'Precision': '7%',
              },
            },
          },
          'gw2id': 1455,
          'defaultEnabled': true,
        },
        {
          'id': 'signet-mastery',
          'text': 'Signet Mastery',
          'amountData': {
            'label': 'stacks',
            'default': 5,
            'quantityEntered': 5,
          },
          'modifiers': {
            'attributes': {
              'Ferocity': [500, 'converted'],
            },
          },
          'gw2id': 1344,
          'defaultEnabled': true,
        },
        {
          'id': 'deep-strikes',
          'text': 'Deep Strikes',
          'minor': true,
          'amountData': {
            'label': '% fury',
            'default': 100,
            'quantityEntered': 100,
          },
          'modifiers': {
            'attributes': {
              'Condition Damage': [180, 'converted'],
            },
          },
          'gw2id': 1343,
          'defaultEnabled': true,
        },
        {
          'id': 'blade-master',
          'text': 'Blademaster',
          'subText': 'base',
          'modifiers': {
            'attributes': {
              'Expertise': [120, 'converted'],
            },
          },
          'gw2id': 1333,
          'defaultEnabled': true,
        },
        {
          'id': 'blade-master-base-bugged',
          'text': 'Blademaster',
          'subText': 'base, BUGGED VERSION',
          'modifiers': {
            'attributes': {
              'Expertise': [160, 'converted'],
            },
          },
          'gw2id': 1333,
        },
        {
          'id': 'blade-master-2',
          'text': 'Blademaster',
          'subText': 'with sword',
          'amountData': {
            'label': '% uptime',
            'default': 50,
            'quantityEntered': 100,
          },
          'modifiers': {
            'attributes': {
              'Condition Damage': [120, 'converted'],
            },
          },
          'gw2id': 1333,
          'defaultEnabled': true,
        },
        {
          'id': 'bloodlust',
          'text': 'Bloodlust',
          'subText': 'base',
          'minor': true,
          'modifiers': {
            'attributes': {
              'Bleeding Duration': '33%',
            },
          },
          'gw2id': 1337,
          'defaultEnabled': true,
        },
        {
          'id': 'bloodlust-on-crit',
          'text': 'Bloodlust',
          'subText': 'per hit (including non critical)',
          'minor': true,
          'amountData': {
            'label': 'hit/s',
            'default': 0,
            'quantityEntered': 1,
          },
          'modifiers': {
            'conversionAfterBuffs': {
              'Bleeding Coefficient': {
                'Critical Chance': '100%',
              },
            },
          },
          'gw2id': 1337,
          'defaultEnabled': false,
        },
        {
          'id': 'furious',
          'text': 'Furious',
          'amountData': {
            'label': 'stacks',
            'default': 25,
            'quantityEntered': 25,
          },
          'modifiers': {
            'attributes': {
              'Condition Damage': [250, 'buff'],
            },
          },
          'gw2id': 1346,
          'defaultEnabled': true,
        },
      ],
    },
    {
      'section': 'Defense',
      'id': 22,
      'items': [
        {
          'id': 'thick-skin',
          'text': 'Thick Skin',
          'subText': '100% scholar',
          'minor': true,
          'modifiers': {
            'damage': {
              'Damage Reduction': ['5%', 'unknown'],
            },
          },
          'gw2id': 1350,
        },
        {
          'id': 'cull-the-weak',
          'text': 'Cull the Weak',
          'amountData': {
            'label': '% weakness',
            'default': 100,
            'quantityEntered': 100,
          },
          'modifiers': {
            'damage': {
              'Strike Damage': ['10%', 'mult'],
            },
          },
          'gw2id': 1372,
          'defaultEnabled': true,
        },
        {
          'id': 'armored-attack',
          'text': 'Armored Attack',
          'modifiers': {
            'conversion': {
              'Power': {
                'Toughness': '10%',
              },
            },
          },
          'gw2id': 1379,
          'defaultEnabled': true,
        },
        {
          'id': 'hardened-armor',
          'text': 'Hardened Armor',
          'subText': '100% resolution',
          'minor': true,
          'modifiers': {
            'damage': {
              'Damage Reduction': ['10%', 'unknown'],
            },
          },
          'gw2id': 1380,
          'defaultEnabled': true,
        },
      ],
    },
    {
      'section': 'Tactics',
      'id': 11,
      'items': [
        {
          'id': 'leg-specialist',
          'text': 'Leg Specialist',
          'amountData': {
            'label': '% impaired',
            'default': 100,
            'quantityEntered': 100,
          },
          'modifiers': {
            'damage': {
              'Strike Damage': ['10%', 'mult'],
            },
          },
          'gw2id': 1469,
          'defaultEnabled': true,
        },
        {
          'id': 'roaring-reveille',
          'text': 'Roaring Reveille',
          'modifiers': {
            'attributes': {
              'Concentration': [120, 'buff'],
            },
          },
          'gw2id': 1471,
          'defaultEnabled': true,
        },
        {
          'id': 'empowered',
          'text': 'Empowered',
          'amountData': {
            'label': 'boons',
            'default': 8,
            'quantityEntered': 1,
          },
          'minor': true,
          'modifiers': {
            'damage': {
              'Strike Damage': ['1%', 'mult'],
            },
          },
          'gw2id': 1485,
          'defaultEnabled': true,
        },
        {
          'id': 'warriors-cunning',
          'text': "Warrior's Cunning",
          'amountData': {
            'label': '% above 80',
            'default': 20,
            'quantityEntered': 100,
          },
          'modifiers': {
            'damage': {
              'Strike Damage': ['25%', 'mult'],
            },
          },
          'gw2id': 1486,
          'defaultEnabled': true,
        },
        {
          'id': 'vigorous-shouts',
          'text': 'Vigorous Shouts',
          'modifiers': {
            'conversion': {
              'Healing Power': {
                'Power': '13%',
              },
            },
          },
          'gw2id': 1470,
          'defaultEnabled': true,
        },
      ],
    },
    {
      'section': 'Discipline',
      'id': 51,
      'items': [
        {
          'id': 'warriors-sprint',
          'text': "Warrior's Sprint",
          'amountData': {
            'label': '% swiftness',
            'default': 100,
            'quantityEntered': 100,
          },
          'modifiers': {
            'damage': {
              'Strike Damage': ['10%', 'add'],
            },
          },
          'gw2id': 1413,
          'defaultEnabled': true,
        },
        {
          'id': 'double-standards-str',
          'text': 'Doubled Standards',
          'subText': '+50 Pwr/Cond',
          'modifiers': {
            'attributes': {
              'Power': [50, 'buff'],
              'Condition Damage': [50, 'buff'],
            },
          },
          'gw2id': 1484,
          'defaultEnabled': true,
        },
        {
          'id': 'double-standards-disc',
          'text': 'Doubled Standards',
          'subText': '+50 Prec/Fero',
          'modifiers': {
            'attributes': {
              'Precision': [50, 'buff'],
              'Ferocity': [50, 'buff'],
            },
          },
          'gw2id': 1484,
          'defaultEnabled': true,
        },
        {
          'id': 'axe-mastery-one',
          'text': 'Axe Mastery',
          'subText': 'base',
          'modifiers': {
            'attributes': {
              'Ferocity': [120, 'converted'],
            },
          },
          'gw2id': 1369,
          'defaultEnabled': true,
        },
        {
          'id': 'axe-mastery-axe',
          'text': 'Axe Mastery',
          'subText': 'with axe',
          'amountData': {
            'label': '% uptime',
            'default': 100,
            'quantityEntered': 100,
          },
          'modifiers': {
            'attributes': {
              'Ferocity': [120, 'converted'],
            },
          },
          'gw2id': 1369,
          'defaultEnabled': true,
        },
      ],
    },
    {
      'section': 'Berserker',
      'id': 18,
      'items': [
        {
          'id': 'blood-reaction-base',
          'text': 'Blood Reaction',
          'subText': 'base',
          'modifiers': {
            'conversion': {
              'Ferocity': {
                'Precision': '7%',
              },
            },
          },
          'gw2id': 2011,
          'defaultEnabled': true,
        },
        {
          'id': 'blood-reaction-with',
          'text': 'Blood Reaction',
          'subText': 'bonus',
          'amountData': {
            'label': '% berserk',
            'default': 70,
            'quantityEntered': 100,
          },
          'modifiers': {
            'conversion': {
              'Ferocity': {
                'Precision': '7%',
              },
            },
          },
          'gw2id': 2011,
          'defaultEnabled': true,
        },
        {
          'id': 'heat-the-soul',
          'text': 'Heat the Soul',
          'subText': 'base',
          'modifiers': {
            'attributes': {
              'Condition Damage': [120, 'converted'],
            },
          },
          'gw2id': 2042,
          'defaultEnabled': true,
        },
        {
          'id': 'heat-the-soul-with',
          'text': 'Heat the Soul',
          'subText': 'with torch',
          'amountData': {
            'label': '% uptime',
            'default': 50,
            'quantityEntered': 100,
          },
          'modifiers': {
            'attributes': {
              'Condition Damage': [120, 'converted'],
            },
          },
          'gw2id': 2042,
          'defaultEnabled': true,
        },
        {
          'id': 'fatal-frenzy-power-condi',
          'text': 'Fatal Frenzy',
          'subText': 'power/condition damage',
          'amountData': {
            'label': '% berserk',
            'default': 70,
            'quantityEntered': 100,
          },
          'minor': true,
          'modifiers': {
            'attributes': {
              'Power': [300, 'buff'],
              'Condition Damage': [300, 'buff'],
            },
          },
          'gw2id': 2046,
          'defaultEnabled': true,
        },
        {
          'id': 'fatal-frenzy-toughness',
          'text': 'Fatal Frenzy',
          'subText': 'toughness during berserk',
          'minor': true,
          'modifiers': {
            'attributes': {
              'Toughness': [-300, 'buff'],
            },
          },
          'gw2id': 2046,
          'defaultEnabled': true,
        },
        {
          'id': 'bloody-roar',
          'text': 'Bloody Roar',
          'amountData': {
            'label': '% berserk',
            'default': 70,
            'quantityEntered': 100,
          },
          'modifiers': {
            'damage': {
              'Strike Damage': ['20%', 'mult'],
            },
          },
          'gw2id': 1928,
          'defaultEnabled': true,
        },
        {
          'id': 'king-of-fires',
          'text': 'King of Fires',
          'modifiers': {
            'attributes': {
              'Burning Duration': '33%',
            },
          },
          'gw2id': 2038,
          'defaultEnabled': true,
        },
        {
          'id': 'eternal-champion',
          'text': 'Eternal Champion',
          'subText': 'toughness during berserk',
          'modifiers': {
            'attributes': {
              'Toughness': [300, 'buff'],
            },
          },
          'gw2id': 2043,
          'defaultEnabled': true,
        },
      ],
    },
    {
      'section': 'Spellbreaker',
      'id': 61,
      'items': [
        {
          'id': 'pure-strike-base',
          'text': 'Pure Strike',
          'subText': 'base',
          'modifiers': {
            'damage': {
              'Critical Damage': ['7%', 'unknown'],
            },
          },
          'gw2id': 2107,
          'defaultEnabled': true,
        },
        {
          'id': 'pure-strike-boonless',
          'text': 'Pure Strike',
          'subText': 'bonus',
          'amountData': {
            'label': '% boonless',
            'default': 100,
            'quantityEntered': 100,
          },
          'modifiers': {
            'damage': {
              'Critical Damage': ['7%', 'unknown'],
            },
          },
          'gw2id': 2107,
          'defaultEnabled': true,
        },
        {
          'id': 'sun-and-moon-style',
          'text': 'Sun and Moon Style',
          'subText': 'mainhand dagger; boonless',
          'amountData': {
            'label': '% uptime',
            'default': 100,
            'quantityEntered': 100,
          },
          'modifiers': {
            'damage': {
              'Strike Damage': ['10%', 'mult'],
            },
          },
          'gw2id': 2095,
        },
        {
          'id': 'attackers-insight',
          'text': "Attacker's Insight",
          'subText': 'be careful not to overcap',
          'minor': true,
          'amountData': {
            'label': 'stacks',
            'default': 5,
            'quantityEntered': 5,
            'disableBlacklist': true,
          },
          'modifiers': {
            'attributes': {
              'Ferocity': [250, 'buff'],
              'Power': [250, 'buff'],
              'Precision': [250, 'buff'],
            },
          },
          'gw2id': 2130,
          'defaultEnabled': true,
        },
        {
          'id': 'magebane-tether',
          'text': 'Magebane Tether',
          'amountData': {
            'label': '% uptime',
            'default': 75,
            'quantityEntered': 100,
          },
          'modifiers': {
            'damage': {
              'Strike Damage': ['10%', 'mult'],
            },
          },
          'gw2id': 2060,
          'defaultEnabled': true,
        },
      ],
    },
    {
      'section': 'Bladesworn',
      'id': 68,
      'items': [
        {
          'id': 'fierce-as-fire',
          'text': 'Fierce as Fire',
          'amountData': {
            'label': 'stacks',
            'default': 10,
            'quantityEntered': 1,
          },
          'modifiers': {
            'damage': {
              'All Damage': ['1%', 'unknown'],
            },
          },
          'gw2id': 2302,
          'defaultEnabled': true,
        },
        {
          'id': 'guns-and-glory',
          'text': 'Guns and Glory',
          'minor': true,
          'amountData': {
            'label': '% uptime',
            'default': 100,
            'quantityEntered': 100,
          },
          'modifiers': {
            'attributes': {
              'Ferocity': [250, 'unknown'],
            },
          },
          'gw2id': 2236,
          'defaultEnabled': true,
        },
      ],
    },
  ],
};
