/* eslint-disable dot-notation */
/* eslint-disable import/prefer-default-export */

import { traitSectionsById } from '../../../assets/modifierdata/index';

export const formatCharacterData = (character) => {
  const {
    settings: { profession, cachedFormState, extrasCombination },
    attributes,
  } = character;

  const {
    traits: { selectedLines, selectedTraits },
  } = cachedFormState;

  console.log('selectedLines', selectedLines);

  const formattedTraits = (selectedLines ?? []).map((line, i) => ({
    name: traitSectionsById[line]?.section,
    traitlineId: line,
    selectedIds: selectedTraits[i],
  }));

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { Runes, Nourishment, Enhancement } = extrasCombination;

  const result = {
    base_class: profession.toLowerCase(),
    attributes: {
      power: attributes['Power'],
      precision: attributes['Precision'],
      toughness: attributes['Toughness'],
      vitality: attributes['Vitality'],
      concentration: attributes['Concentration'],
      condition_damage: attributes['Condition Damage'],
      expertise: attributes['Expertise'],
      ferocity: attributes['Ferocity'],
      healing_power: attributes['Healing Power'],
      armor: attributes['Armor'],
      boon_duration_pct: attributes['Boon Duration'] * 100,
      critical_chance_pct: attributes['Critical Chance'] * 100,
      critical_damage_pct_missing_bonuses: attributes['Critical Damage'] * 100,
      condition_duration_pct: attributes['Condition Duration'] * 100,
      max_health: attributes['Health'],
    },
    traits: formattedTraits,
    solve_sigils_later: {},
    rune: Runes,
    nourishment: Nourishment,
    enhancement: Enhancement,
  };

  return result;
};
