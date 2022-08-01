/* eslint-disable no-alert */
/* eslint-disable dot-notation */
/* eslint-disable import/prefer-default-export */

import { traitSectionsById } from '../../../assets/modifierdata/index';
import { damagingConditions } from '../../../assets/modifierdata/metadata';

const formatCharacterData = async (character) => {
  const {
    settings: { profession, cachedFormState, extrasCombination },
    attributes,
  } = character;

  const {
    traits: { selectedLines, selectedTraits },
  } = cachedFormState;

  const traitData = await fetch(
    `https://api.guildwars2.com/v2/traits?ids=${selectedTraits.flat().join(',')}`,
  ).then((response) => response.json());

  const formattedTraits = (selectedLines ?? []).map((line, i) => ({
    traitlineId: Number(line),
    traitline: traitSectionsById[line]?.section,

    selectedIds: selectedTraits[i],
    selected: selectedTraits[i].map((traitId) => traitData.find(({ id }) => traitId === id)?.name),
  }));

  const { Runes, Nourishment, Enhancement } = extrasCombination;

  const specificConditionDurations = Object.fromEntries(
    damagingConditions.map((name) => {
      const conditionDuration = attributes['Condition Duration'] ?? 0;
      const specificDuration = attributes[`${name} Duration`] ?? 0;
      const realDuration = Math.min(1, conditionDuration + specificDuration);
      return [`${name.toLowerCase()}_duration_pct`, realDuration * 100];
    }),
  );

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
      ...specificConditionDurations,
    },
    traits: formattedTraits,
    solve_sigils_later: {},
    rune: Runes,
    nourishment: Nourishment,
    enhancement: Enhancement,
  };

  return JSON.stringify(result, null, 2);
};

export const copyCharacterData = (character) => {
  const dataPromise = formatCharacterData(character);

  // iOS browsers and desktop Safari require the use of the async clipboard API, calling
  // navigator.clipboard.write synchronously and passing it a Promise
  // (see: https://web.dev/async-clipboard/).
  // Firefox does not support this API but allows writing to the clipboard in a callback.
  // Chrome doesn't care.
  const dataBlobPromise = dataPromise.then((data) => new Blob([data], { type: 'text/plain' }));
  const clipboardPromise =
    typeof ClipboardItem !== 'undefined'
      ? // eslint-disable-next-line no-undef
        navigator.clipboard.write([new ClipboardItem({ 'text/plain': dataBlobPromise })])
      : dataPromise.then((data) => navigator.clipboard.writeText(data));

  clipboardPromise
    .then(() => alert('Copied data to clipboard!'))
    .catch(() => alert('Failed to copy data to clipboard!'));
};
