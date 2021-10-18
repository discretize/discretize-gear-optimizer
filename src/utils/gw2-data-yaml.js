/* eslint-disable no-console */
/**
 * ------------------------------------------------------------------------
 * GW2 Data
 * ------------------------------------------------------------------------
 */
// TODO integrate gw2-ui data
// import { itemStats } from "gw2-ui-bulk";

import yaml from 'js-yaml';
import fs from 'fs/promises';

import {
  Affix,
  Item,
  Slots,
  // used for forcing slots to a certain affix
  ForcedSlots,
  omnipotionModifiers,
  Health,
  Defense,
  WEAPONS,
  Classes,
  Condition,
  Attributes,
  MAX_INFUSIONS,
  INFUSION_BONUS,
  PROFESSIONS,
  GEAR_SLOTS,
  INFUSIONS,
  ARMOR_IDS,
} from './gw2-data.js';

const data = {
  Affix,
  Item,
  Slots,
  // used for forcing slots to a certain affix
  ForcedSlots,
  omnipotionModifiers,
  Health,
  Defense,
  WEAPONS,
  Classes,
  Condition,
  Attributes,
  MAX_INFUSIONS,
  INFUSION_BONUS,
  PROFESSIONS,
  GEAR_SLOTS,
  INFUSIONS,
  ARMOR_IDS,
};

const jsonData = JSON.stringify(data, null, 2)

console.log(jsonData);

fs.writeFile(`src/utils/gw2-data-json.json`, jsonData, { encoding: 'utf8', flag: 'w+' });

const yamlData = yaml.dump(data, {
  // forceQuotes: true,
  lineWidth: 80,
  flowLevel: 4,
});

console.log(yamlData);

fs.writeFile(`src/utils/gw2-data-yaml.yaml`, yamlData, { encoding: 'utf8', flag: 'w+' });
