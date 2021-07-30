export const PROFESSIONS = [
  { profession: "Warrior", eliteSpecializations: ["Spellbreaker", "Berserker"] },
  { profession: "Revenant", eliteSpecializations: ["Herald", "Renegade"] },
  { profession: "Guardian", eliteSpecializations: ["Dragonhunter", "Firebrand"] },
  { profession: "Ranger", eliteSpecializations: ["Druid", "Soulbeast"] },
  { profession: "Engineer", eliteSpecializations: ["Scrapper", "Holosmith"] },
  { profession: "Elementalist", eliteSpecializations: ["Tempest", "Weaver"] },
  { profession: "Mesmer", eliteSpecializations: ["Chronomancer", "Mirage"] }
];

export const GEAR_SLOTS = [
  {
    name: "Helm",
    short: "Helm"
  },
  {
    name: "Shoulders",
    short: "Shld"
  },
  {
    name: "Coat",
    short: "Coat"
  },
  {
    name: "Gloves",
    short: "Glov"
  },
  {
    name: "Leggings",
    short: "Legs"
  },
  {
    name: "Boots",
    short: "Boot"
  },
  {
    name: "Amulet",
    short: "Amul"
  },
  {
    name: "Ring 1",
    short: "Rng1"
  },
  {
    name: "Ring 2",
    short: "Rng2"
  },
  {
    name: "Accessory 1",
    short: "Acc1"
  },
  {
    name: "Accessory 2",
    short: "Acc2"
  },
  {
    name: "Back Item",
    short: "Back"
  },
  {
    name: "Weapon 1",
    short: "Wep1"
  },
  {
    name: "Weapon 2",
    short: "Wep2"
  }
];

export const INFUSIONS = [
  37131, // power
  37132, // precision
  37130, // condi
  86113, // expertise
  86180, // concentration
  37125, // healing power
  37135, // toughness
  37136 // vitality
];
export const TRAITS = [
  {
    profession: "Warrior",
    traits: [
      {
        id: 4,
        name: "Strength",
        minors: [
          {
            gw2_id: 1453,
            id: "pinnacle-of-strength",
            modifiers: '{ "buff": { "Power": 250 }}'
          }
        ]
      },
      {
        id: 11,
        name: "Tactics",
        minors: [
          {
            gw2_id: 1485,
            id: "empowered-6",
            subText: "6x",
            modifiers: '{ "multiplier": { "Effective Power": 0.06 }}'
          },
          {
            gw2_id: 1485,
            id: "empowered-9",
            subText: "9x",
            modifiers: '{ "multiplier": { "Effective Power": 0.09 }}'
          },
          {
            gw2_id: 1485,
            id: "empowered-11",
            subText: "11x",
            modifiers: '{ "multiplier": { "Effective Power": 0.11 }}'
          }
        ]
      },
      {
        id: 22,
        name: "Defense",
        minors: [
          {
            gw2_id: 1350,
            id: "thick-skin",
            modifiers: '{"multiplier": { "Effective Health": 0.05 }}'
          },
          {
            gw2_id: 1380,
            id: "hardened-armor",
            modifiers: '{"multiplier": { "Effective Health": 0.1 }}'
          }
        ]
      },
      {
        id: 36,
        name: "Arms",
        minors: [
          { gw2_id: 1343, id: "deep-strikes", modifiers: '{"buff": { "Condition Damage": 180 }}' },
          { gw2_id: 1337, id: "bloodlust", modifiers: '{"flat": { "Bleeding Duration": 33 }}' }
        ]
      },
      { id: 51, name: "Discipline", minors: [] },
      {
        id: 18,
        name: "Berserker",
        minors: [
          {
            gw2_id: 2046,
            id: "fatal-frenzy",
            modifiers: '{"buff": { "Power": 300, "Condition Damage": 300, "Toughness": -300 }}'
          }
        ]
      },
      {
        id: 61,
        name: "Spellbreaker",
        minors: [
          {
            gw2_id: 2130,
            id: "attackers-insight",
            modifiers: '{"buff": { "Ferocity": 250, "Power": 250, "Precision": 250 }}'
          }
        ]
      }
    ]
  },
  {
    profession: "Revenant",
    traits: [3, 9, 12, 14, 15, 52, 63]
  },
  {
    profession: "Guardian",
    traits: [13, 16, 42, 46, 49, 27, 62]
  },
  {
    profession: "Ranger",
    traits: [8, 25, 30, 32, 33, 5, 55]
  },
  {
    profession: "Engineer",
    traits: [6, 21, 29, 38, 47, 43, 57]
  },
  {
    profession: "Elementalist",
    traits: [17, 26, 31, 37, 41, 48, 56]
  },
  {
    profession: "Mesmer",
    traits: [1, 10, 23, 24, 45, 40, 59]
  }
];
