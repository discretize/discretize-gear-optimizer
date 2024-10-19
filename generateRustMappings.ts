/* eslint-disable */
// @ts-nocheck
import { writeFileSync } from 'node:fs';
import { allAffixData, AffixName, ascendedStats, exoticStats } from './src/utils/gw2-data.ts';

/*
WARNING

it is uncertain if we will use this file in the future.

*/

const OUTPUT_PATH = 'wasm_module/src/mappings.rs';

const SLOTS_MAPPING = [
  { rust: 'Helm', js: 'HELM' },
  { rust: 'Shoulders', js: 'SHOULDERS' },
  { rust: 'Chest', js: 'CHEST' },
  { rust: 'Gloves', js: 'GLOVES' },
  { rust: 'Leggings', js: 'LEGGINGS' },
  { rust: 'Boots', js: 'BOOTS' },
  { rust: 'Amulet', js: 'AMULET' },
  { rust: 'Ring', js: 'RING' },
  { rust: 'Accessory', js: 'ACCESSORY' },
  { rust: 'BackItem', js: 'BACK_ITEM' },
  { rust: 'TwoHandedWeapon', js: 'TWOHANDED_WEAPON' },
  { rust: 'OneHandedWeapon', js: 'ONEHANDED_WEAPON' },
];
const RARITY_MAPPING = [
  {
    rust: 'Ascended',
  },
  {
    rust: 'Exotic',
  },
];

function getRustAttribute(str) {
  const adjustedStr = str.replaceAll(' ', '');
  return `Attribute::${adjustedStr})`;
}

function findStats(slot: string, affix: AffixName, rarity: string) {
  let slotStats = null;
  // eslint-disable-next-line default-case
  switch (rarity) {
    case 'Ascended':
      slotStats = ascendedStats[slot];
      break;
    case 'Exotic':
      slotStats = exoticStats[slot];
      break;
  }

  // find out affix type
  const affixType = allAffixData[affix].type;

  return slotStats[affixType];
}

let output = '// AUTOMATICALLY GENERATED FILE\n';
output += '// DO NOT EDIT\n\n';
// todo imports adjustment
output +=
  '\nuse crate::gw2data::{Affix, AttributesCollection, Rarity, Slots, Attribute, PrimaryAttributeName, SecondaryAttributeName};\n\n';
output +=
  'pub fn add_stats(stats: &mut AttributesCollection, affix: Affix, slot: Slots, rarity: Rarity) {';

output += '\n';
output += 'match slot {';

output += '\n\tSlots::None => {},';
SLOTS_MAPPING.forEach((slot) => {
  output += `\n\tSlots::${slot.rust} => match affix {`;

  output += '\n\t\tAffix::None => {},';
  // match affixes now
  Object.keys(allAffixData).forEach((affix) => {
    output += `\n\t\tAffix::${affix} => match rarity {`;

    // match rarity now
    RARITY_MAPPING.forEach((rarity) => {
      output += `\n\t\t\tRarity::${rarity.rust} => {`;
      // add stats here
      const stats = findStats(slot.js, affix, rarity.rust);
      allAffixData[affix].bonuses.major.forEach((bonus) => {
        output += `\n\t\t\t\tstats.add_attribute_value(&${getRustAttribute(bonus)}, ${
          stats.major
        });`;
      });

      allAffixData[affix].bonuses.minor.forEach((bonus) => {
        output += `\n\t\t\t\tstats.add_attribute_value(&${getRustAttribute(bonus)}, ${
          stats.minor
        });`;
      });

      output += '\n\t\t\t},';
    });

    output += '\n\t\t},';
  });

  output += '}\n\t';
});

output += '}\n}';

writeFileSync(OUTPUT_PATH, output);
