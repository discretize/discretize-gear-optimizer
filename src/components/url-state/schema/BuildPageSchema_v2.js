import {
  enhancementDict,
  gearDict,
  nourishmentDict,
  professionDict,
  runesDict,
  sigilDict,
  specializationDict,
  weaponTypeDict,
} from './SchemaDicts';

export const version = 2;
// eslint-disable-next-line import/prefer-default-export
export const BuildPageSchema = {
  character: {
    attributes: {
      Power: null,
      Precision: null,
      Toughness: null,
      Vitality: null,
      Ferocity: null,
      'Condition Damage': null,
      Expertise: null,
      Concentration: null,
      'Healing Power': null,
      'Agony Resistance': null,
      'Condition Duration': null,
      'Boon Duration': null,
      'Critical Chance': null,
      'Critical Damage': null,
      'Health': null,
      'Armor': null,
    },
    gear: { type: 'array', dict: gearDict },
    infusions: null,
    settings: {
      cachedFormState: {
        extras: {
          extras: {
            Enhancement: { type: 'value', dict: enhancementDict },
            Nourishment: { type: 'value', dict: nourishmentDict },
            Runes: { type: 'value', dict: runesDict },
            Sigil1: { type: 'value', dict: sigilDict },
            Sigil2: { type: 'value', dict: sigilDict },
          },
        },
      },
      profession: { type: 'value', dict: professionDict },
      specialization: { type: 'value', dict: specializationDict },
      weaponType: { type: 'value', dict: weaponTypeDict },
    },
  },
  skills: {
    healId: null,
    utility1Id: null,
    utility2Id: null,
    utility3Id: null,
    eliteId: null,
  },
  traits: {
    lines: null,
    selected: null,
  },
  weapons: {
    mainhand1: null,
    mainhand2: null,
    offhand1: null,
    offhand2: null,
  },
  buffs: null,
};
