/* eslint-disable camelcase */
/* eslint-disable no-use-before-define */
/* eslint-disable no-await-in-loop */
import yaml from 'js-yaml';
import fs from 'node:fs/promises';
import path from 'node:path';

import { templateTransform } from './presetdata/templateTransform';

import {
  buffsDict,
  enhancementDict,
  nourishmentDict,
  relicsDict,
  runesDict,
  sigilDict,
} from '../components/url-state/schema/SchemaDicts';

// import specializationData from '../utils/mapping/specializations.json' assert { type: 'json' };
import {
  allAttributeCoefficientKeys,
  allAttributePercentKeys,
  allAttributePointKeys,
  allAttributePointModes,
  allConversionAfterBuffsDestinationKeys,
  allConversionAfterBuffsSourceKeys,
  allConversionDestinationKeys,
  allConversionSourceKeys,
  allDamageKeys,
  allDamageModes,
  alternateStats,
  attributePercentKeysBlacklist,
  attributePointKeysBlacklist,
  damageKeysBlacklist,
} from './modifierdata/metadata';

// causes the script to fail if condition is false, but does not stop execution
const gentleAssert = (condition, message) => {
  if (!condition) {
    console.error(`❌ ${message} ❌`);
    process.exitCode = 1;
  }
};

/**
 * test modifiers
 */

const schemaKeys = {
  'runes.yaml': runesDict,
  'relics.yaml': relicsDict,
  'sigils.yaml': sigilDict,
  'food.yaml': nourishmentDict,
  'utility.yaml': enhancementDict,
  'buffs.yaml': buffsDict,
};

const modifierDirectory = './src/assets/modifierdata/';

const allTraitIds = new Set();
const allExtrasIds = new Set();

const testModifiers = async () => {
  const specializationDataJSON = await fs.readFile('./src/utils/mapping/specializations.json');
  const specializationData = JSON.parse(specializationDataJSON.toString());

  const files = (await fs.readdir(modifierDirectory)).filter(
    (filename) => path.extname(filename) === '.yaml',
  );

  for (const fileName of files) {
    console.log(`  - ${fileName}`);
    const fileData = await fs.readFile(`${modifierDirectory}${fileName}`);

    let data;
    try {
      data = yaml.load(fileData.toString());
    } catch {
      gentleAssert(false, `err: ${fileName} is invalid YAML`);
      continue;
    }

    gentleAssert(
      Array.isArray(data),
      `err: ${fileName} is not an array (use dashes for sections!)`,
    );

    const fileIds = new Set();
    const allDataByGw2id = new Map();

    const fileIsExtra = ['food', 'utility', 'runes', 'relics', 'sigils'].some((name) =>
      fileName.includes(name),
    );

    for (const section of data) {
      const sectionName = section.section;
      gentleAssert(sectionName, `err: empty section name`);

      let major_traits = null;
      let minor_traits = null;
      if (section.id) {
        const traitlineData = specializationData.find((entry) => entry.id === section.id);
        if (traitlineData) {
          ({ major_traits, minor_traits } = traitlineData);
        }
      }

      const { items } = section;
      gentleAssert(items, `err: items in ${sectionName} is missing (make it [])`);
      gentleAssert(
        Array.isArray(items),
        `err: items in ${sectionName} is not an array (use dashes for sections!)`,
      );

      for (const item of items) {
        const {
          id,
          text,
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          textOverride,
          subText,
          modifiers,
          wvwModifiers,
          gw2id,
          type,
          minor,
          amountData,
          defaultEnabled,
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          hasLifesteal,
          displayIds,
          priceIds,
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          temporaryBuff,
          ...otherKeys
        } = item;

        if (fileIsExtra) {
          if (!text) {
            console.log(`❓ no text for ${id}!`);
          } else if (displayIds?.length > 1 && !text.includes('/')) {
            console.log(`❓ single text for multiple ids in ${id}!`);
          }
        }

        gentleAssert(
          !Object.keys(otherKeys).length,
          `err: this script is missing validation for ${JSON.stringify(otherKeys)} in ${id}`,
        );

        if (schemaKeys[fileName]) {
          gentleAssert(
            schemaKeys[fileName].includes(id),
            `err: ${id} is missing from ${fileName} schema! (src/components/url-state/schema/SchemaDicts.js)`,
          );
        }

        const checkNullRecursively = (obj) => {
          for (const value of Object.values(obj)) {
            if (value === null || value === undefined) {
              gentleAssert(false, `err: ${id} has a null or undefined value!`);
            } else if (typeof value === 'object') {
              checkNullRecursively(value);
            }
          }
        };
        checkNullRecursively(item);

        gentleAssert(
          displayIds === undefined || Array.isArray(displayIds),
          `err: invalid displayIds value ${displayIds} in ${id}!`,
        );

        gentleAssert(
          priceIds === undefined || Array.isArray(priceIds),
          `err: invalid priceIds value ${priceIds} in ${id}!`,
        );

        if (amountData) {
          const {
            label,
            default: amountDefault,
            quantityEntered,
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            disableBlacklist,
            defaultInput,
            ...otherAmountKeys
          } = amountData;

          gentleAssert(
            !Object.keys(otherAmountKeys).length,
            `err: this script is missing validation for ${JSON.stringify(
              otherAmountKeys,
            )} in ${id}'s amountData`,
          );
          gentleAssert(typeof label === 'string', `err: missing amount label in ${id}`);
          gentleAssert(typeof amountDefault === 'number', `err: missing amount default in ${id}`);
          gentleAssert(
            typeof quantityEntered === 'number',
            `err: missing amount quantityEntered in ${id}`,
          );
          if (quantityEntered === 100 && label?.[0] !== '%') {
            gentleAssert(false, `err: did you forget a percent sign in ${id}'s amount label?`);
          }
          if (defaultInput) {
            gentleAssert(
              !amountDefault,
              `err: ${id}'s defaultInput overrides a nonzero default amount`,
            );
          }
        }

        if (major_traits) {
          if (major_traits.includes(gw2id)) {
            gentleAssert(!minor, `err: ${id} is mistakenly labelled minor!`);
          } else if (minor_traits.includes(gw2id)) {
            gentleAssert(minor, `err: ${id} should be labelled minor!`);
          } else {
            // eslint-disable-next-line no-lonely-if
            if (gw2id && sectionName !== 'Soulbeast')
              gentleAssert(false, `err: ${id} isn't a trait in this line`);
          }
        }

        if (!fileIsExtra && !fileName.includes('buffs') && sectionName !== 'Skills') {
          gentleAssert(
            [true, false].includes(defaultEnabled),
            `err: ${id} is missing defaultEnabled!`,
          );
        }

        if (minor && !subText && !amountData) {
          gentleAssert(
            defaultEnabled,
            `err: minor ${id} should be defaultEnabled! add subText if it's optional`,
          );
        }

        if (section.id && gw2id) {
          if (allDataByGw2id.has(gw2id)) {
            // more than one item for this gw2id; make sure they are easy to distinguish
            const otherItem = allDataByGw2id.get(gw2id);

            gentleAssert(
              (subText || amountData) && (otherItem.subText || otherItem.amountData),
              `missing subtext/amountData for same gw2id in ${id} - label one e.g. "base!"`,
            );
          }

          allDataByGw2id.set(gw2id, item);
        }

        gentleAssert(
          typeof id === 'string' && id !== '',
          `err: invalid or missing item id in ${sectionName}`,
        );

        gentleAssert(!fileIds.has(id), `err:file has duplicate id ${id}`);
        fileIds.add(id);

        // duplicate ids within all the extras or within all the traits will be merged
        const allIds = fileIsExtra ? allExtrasIds : allTraitIds;
        gentleAssert(!allIds.has(id), `duplicate id ${id} from different file`);
        allIds.add(id);

        // if (fileName !== 'buffs.yaml' && typeof gw2id !== 'number') {
        //   console.log(`note: no gw2id in ${id}`);
        // }

        if (fileName === 'buffs.yaml' && typeof type !== 'string')
          gentleAssert(false, `err: ${id} doesn't have a type`);

        gentleAssert(typeof modifiers === 'object', `err: invalid or missing modifiers in ${id}`);
        gentleAssert(
          wvwModifiers === undefined || typeof wvwModifiers === 'object',
          `err: invalid wvwModifiers in ${id}`,
        );

        [modifiers, wvwModifiers].forEach((modifierData) => {
          if (!modifierData) return;

          const { damage, attributes, conversion, conversionAfterBuffs, ...otherModifiers } =
            modifierData;
          gentleAssert(
            Object.keys(otherModifiers).length === 0,
            `err: invalid modifier type(s): ${Object.keys(otherModifiers)}`,
          );

          if (damage) {
            parseDamage(damage, id, amountData);
          }

          if (attributes) {
            parseAttributes(attributes, id, amountData);
          }

          if (conversion) {
            parseConversion(conversion, id, amountData);
          }

          if (conversionAfterBuffs) {
            parseConversionAfterBuffs(conversionAfterBuffs, id, amountData);
          }
        });
      }
    }
  }
};

function parseDamage(damage, id, amountData) {
  for (const [key, allPairs] of Object.entries(damage)) {
    gentleAssert(allDamageKeys.includes(key), `invalid damage key ${key} in ${id}`);
    gentleAssert(
      Array.isArray(allPairs),
      `invalid value for ${key} in ${id} (use 'unknown' if you don't know add/mult!)`,
    );

    if (amountData && !amountData.disableBlacklist && damageKeysBlacklist.includes(key))
      gentleAssert(false, `err: ${key} is a bad idea in an entry with an amount like ${id}`);

    // handle more than 2 pairs i.e. Outgoing Strike Damage: [3%, add, 7%, mult]
    const allPairsMut = [...allPairs];
    while (allPairsMut.length) {
      const [amount, mode] = allPairsMut.splice(0, 2);

      parsePercent(amount, key, id);
      gentleAssert(allDamageModes.includes(mode), `invalid val ${allPairs} for ${key} in ${id}`);
      gentleAssert(
        key !== 'Outgoing Critical Damage' || mode !== 'add',
        `if ${id} is an additive increase of a single bonus, use mode mult and calculate the addition; see GitHub PR #612. (change this to a warning if an additive critical damage bonus is found!)`,
      );

      // so far (mid 2023), every +condition damage output bonus that's been tested has been additive
      gentleAssert(
        key !== 'Outgoing Condition Damage' || mode === 'add' || mode === 'target',
        `set mode add for condition damage in ${id} and comment that it's unconfirmed (remove this test if anyone finds a multiplicative one!)`,
      );

      // so far (mid 2023), only one specific +condition damage output bonus can be used at a time
      // the mode for these only applies to multiple, so it has no effect
      // to avoid confusion let's call it mult until proven otherwise
      gentleAssert(
        ![
          'Outgoing Burning Damage',
          'Outgoing Bleeding Damage',
          'Outgoing Confusion Damage',
          'Outgoing Poison Damage',
          'Outgoing Torment Damage',
        ].includes(key) ||
          mode === 'mult' ||
          mode === 'target',
        `set mode mult for ${key} in ${id} and comment that it's unconfirmed (remove this test if anyone tests multiple at once!)`,
      );

      gentleAssert(
        key !== 'Outgoing All Damage' || mode === 'add' || mode === 'target',
        `set mode add for all damage in ${id} and comment that it's unconfirmed (remove this test if anyone finds a multiplicative one!)`,
      );

      if (mode === 'target') {
        gentleAssert(
          damage['Outgoing Phantasm Damage'] !== undefined,
          `${id} is missing phantasm damage`,
        );
      }
    }
  }
}

function parseAttributes(attributes, id, amountData) {
  for (const [key, allPairs] of Object.entries(attributes)) {
    if (allAttributePointKeys.includes(key)) {
      gentleAssert(
        Array.isArray(allPairs),
        `invalid value for ${key} in ${id} (use 'unknown' if you don't know if it's converted!)`,
      );

      if (amountData && !amountData.disableBlacklist && attributePointKeysBlacklist.includes(key))
        gentleAssert(false, `err: ${key} is a bad idea in an entry with an amount like ${id}`);

      // if (mayBeConvertedToBlacklist.includes(key) && amountData && allPairs.includes('converted'))
      //   console.log(`❓ careful, ${id} may convert ${key} to a blacklisted amount`);

      // handle more than 2 pairs i.e. Concentration: [70, converted, 100, buff]
      const allPairsMut = [...allPairs];
      while (allPairsMut.length) {
        const [amount, mode] = allPairsMut.splice(0, 2);

        parseNumber(amount, key, id);
        gentleAssert(
          allAttributePointModes.includes(mode),
          `invalid val ${allPairs} for ${key} in ${id}`,
        );

        gentleAssert(
          mode === 'buff' || !alternateStats.includes(key),
          `cannot convert stat ${key} in ${id}`,
        );
      }
    } else if (allAttributeCoefficientKeys.includes(key)) {
      parseNumber(allPairs, key, id);
    } else if (allAttributePercentKeys.includes(key)) {
      if (amountData && !amountData.disableBlacklist && attributePercentKeysBlacklist.includes(key))
        gentleAssert(false, `err: ${key} is a bad idea in an entry with an amount like ${id}`);

      parsePercent(allPairs, key, id);
    } else {
      gentleAssert(false, `invalid attribute key ${key} in ${id}`);
    }
  }
}

function parseConversion(conversion, id, amountData) {
  for (const [key, value] of Object.entries(conversion)) {
    gentleAssert(
      allConversionDestinationKeys.includes(key),
      `invalid conversion destination ${key} in ${id}`,
    );

    if (amountData && !amountData.disableBlacklist && attributePointKeysBlacklist.includes(key))
      gentleAssert(false, `err: ${key} is a bad idea in an entry with an amount like ${id}`);

    for (const [source, amount] of Object.entries(value)) {
      gentleAssert(
        allConversionSourceKeys.includes(source),
        `invalid conversion source ${source} in ${id}`,
      );
      parsePercent(amount, key, id);
    }
  }
}

function parseConversionAfterBuffs(conversion, id, amountData) {
  for (const [key, value] of Object.entries(conversion)) {
    gentleAssert(
      allConversionAfterBuffsDestinationKeys.includes(key),
      `invalid conversion destination ${key} in ${id}`,
    );

    if (amountData && !amountData.disableBlacklist && attributePointKeysBlacklist.includes(key))
      gentleAssert(false, `err: ${key} is a bad idea in an entry with an amount like ${id}`);

    for (const [source, amount] of Object.entries(value)) {
      gentleAssert(
        allConversionAfterBuffsSourceKeys.includes(source),
        `invalid conversion source ${source} in ${id}`,
      );
      parsePercent(amount, key, id);
    }
  }
}

function parsePercent(value, key, id) {
  let num = null;
  try {
    num = Number(value.replace('%', ''));
  } finally {
    gentleAssert(
      typeof num === 'number' && !Number.isNaN(num),
      `invalid number ${value} for ${key} in ${id}`,
    );
    if (num < 1 && num > -1 && key !== 'Outgoing Healing')
      console.log(`note: value ${num} in ${id} doesn't look like a percent`);
  }
}

function parseNumber(value, key, id) {
  gentleAssert(
    typeof value === 'number' && !Number.isNaN(value),
    `invalid number ${value} for ${key} in ${id}`,
  );
}

/**
 * test presets
 */

const presetDirectory = './src/assets/presetdata/';

// const types = {
//   name
//   id
//   specialization
//   boons
//   priority
//   distribution
//   traits
//   extras
// };

const types = {
  boons: 'preset-buffs',
  priority: 'preset-affixes',
  distribution: 'preset-distribution',
  traits: 'preset-traits',
  extras: 'preset-extras',
  infusions: 'preset-infusions',
};

const testTypes = ['boons', 'priority', 'distribution', 'traits', 'extras'];

const testPresets = async () => {
  // const files = (await fs.readdir(directory)).filter(
  //   (filename) => path.extname(filename) === '.yaml',
  // );

  // const allTraitIds = new Set();
  // const allExtrasIds = new Set();

  const fileData = await fs.readFile(`${presetDirectory}templates.yaml`);

  let templates;
  try {
    templates = yaml.load(fileData);
    gentleAssert(templates, `err: templates.yaml is missing`);
  } catch {
    gentleAssert(false, `err: templates.yaml is invalid YAML`);
    return;
  }

  const data = {};
  for (const [type, fileName] of Object.entries(types)) {
    try {
      // eslint-disable-next-line no-shadow
      const fileData = await fs.readFile(`${presetDirectory}${fileName}.yaml`);
      data[type] = yaml.load(fileData).list;
      gentleAssert(data[type], `err: ${fileName}.yaml is missing`);
    } catch {
      gentleAssert(false, `err: ${fileName}.yaml is invalid YAML`);
      return;
    }
  }

  const creditData = await fs.readFile(`${presetDirectory}credit.yaml`);

  let credit;
  try {
    credit = yaml.load(creditData);
    gentleAssert(templates, `err: credit.yaml is missing`);
  } catch {
    gentleAssert(false, `err: credit.yaml is invalid YAML`);
    return;
  }

  for (const [type, entries] of Object.entries(data)) {
    for (const entry of entries) {
      if (type === 'traits') {
        // entry.traits.items
        //   .flatMap(Object.keys)
        //   .forEach((id) =>
        //     gentleAssert(allTraitIds.has(id), `${entry.name} has nonexistent trait id: ${id}`),
        //   );
        Object.keys(entry.skills.skills).forEach((id) =>
          gentleAssert(allTraitIds.has(id), `${entry.name} has nonexistent skill id: ${id}`),
        );
      }
      if (type === 'distribution') {
        if (!entry.noCreditOkay) {
          if (entry.credit && Array.isArray(entry.credit)) {
            entry.credit.forEach((creditEntry) => {
              gentleAssert(
                credit[creditEntry.author],
                `err: ${creditEntry.author} is not listed in credit.yaml! (${entry.name})`,
              );
              if (creditEntry.url && credit[creditEntry.author]) {
                gentleAssert(
                  credit[creditEntry.author]?.authorUrl,
                  `err: ${entry.name} has a url, but ${creditEntry.author} in credit.yaml does not! This user may want to be anonymous.`,
                );
              }
            });
          } else {
            gentleAssert(false, `err: the ${entry.name} ${type} entry is missing credit!`);
          }
        }
      }
    }
  }

  for (const type of Object.keys(types)) {
    const potentialDuplicates = {};

    for (const entry of data[type]) {
      const { name, value, traits, skills } = entry;
      const entryValue = traits
        ? JSON.stringify(traits) + JSON.stringify(skills)
        : JSON.stringify(value);

      if (potentialDuplicates[entryValue]) {
        potentialDuplicates[entryValue].push(name);
      } else {
        potentialDuplicates[entryValue] = [name];
      }
    }
    for (const names of Object.values(potentialDuplicates)) {
      if (names.length > 1) {
        console.log(`note: the ${type} ${names.join(' / ')} are duplicates!`);
      }
    }
  }

  const ids = new Set();

  for (const section of templates.list) {
    for (const item of section.builds) {
      const {
        name = 'missing name',
        id,
        // specialization,
        // boons,
        // priority,
        // distribution,
        // traits,
        // extras,
        // weaponType,
        outdated,
      } = item;

      if (id) {
        gentleAssert(!ids.has(id), `err: templates has duplicate id ${id}`);
        ids.add(id);
      }

      gentleAssert(
        typeof outdated === 'boolean',
        `err: template ${name}'s outdated status should be true or false`,
      );

      const checkNullRecursively = (obj) => {
        for (const value of Object.values(obj)) {
          if (value === null || value === undefined) {
            gentleAssert(false, `err: ${name} has a null or undefined value!`);
          } else if (typeof value === 'object') {
            checkNullRecursively(value);
          }
        }
      };
      checkNullRecursively(item);
    }
  }

  // test valid references in both fractal and raid modes
  for (const section of templates.list) {
    for (const isFractals of [true, false]) {
      const mode = isFractals ? 'fractal' : 'raid';
      for (const unmodifiedItem of section.builds) {
        const item = templateTransform(unmodifiedItem, isFractals);
        const {
          name = 'missing name',
          // id,
          specialization,
          // boons,
          // priority,
          // distribution,
          // traits,
          // extras,
          weaponType,
        } = item;

        for (const type of testTypes) {
          const match = data[type].find((pre) => pre.name === item[type]);
          gentleAssert(match, `err: ${name}'s ${type} is not found! (mode: ${mode})`);
          if (match) match.used = true;
          const profIsFine = !match.profession || match?.profession === specialization;
          if (!profIsFine)
            console.log(`❓ ${name}'s ${type}'s profession is wrong! (mode: ${mode})`);

          if (type === 'extras') {
            const extrasData = match.value;
            ['Sigil1', 'Sigil2', 'Runes', 'Relics', 'Nourishment', 'Enhancement'].forEach(
              (extrasType) => {
                gentleAssert(
                  typeof extrasData.extras[extrasType] === 'object',
                  `${extrasType} missing in ${name}`,
                );

                // checks that extras reference valid modifier data entries
                Object.keys(extrasData.extras[extrasType]).forEach((key) =>
                  gentleAssert(allExtrasIds.has(key), `invalid extras key ${key}`),
                );
              },
            );
            if (isFractals) {
              if (
                extrasData.extras.Sigil1?.['impact/night/slaying-only-3'] ||
                extrasData.extras.Sigil2?.['impact/night/slaying-only-3']
              ) {
                gentleAssert(false, `err: ${name} has the wrong impact sigil in ${mode} mode!`);
              }
              if (extrasData.extras.Enhancement?.['superior-sharpening-stone']) {
                gentleAssert(false, `err: ${name} has no slaying potion in ${mode} mode!`);
              }
            } else {
              // eslint-disable-next-line no-lonely-if
              if (
                extrasData.extras.Sigil1?.['impact/night/slaying-both'] ||
                extrasData.extras.Sigil2?.['impact/night/slaying-both']
              ) {
                gentleAssert(false, `err: ${name} has the wrong impact sigil in ${mode} mode!`);
              }
              if (extrasData.extras.Enhancement?.['slaying-potion']) {
                gentleAssert(false, `err: ${name} has a slaying potion in ${mode} mode!`);
              }
            }
          }
        }

        gentleAssert(
          ['Dual wield', 'Two-handed'].includes(weaponType),
          `err: ${name}'s weaponType is not valid! (mode: ${mode})`,
        );
      }
    }
  }

  // for (const [type, entries] of Object.entries(data)) {
  //   if (!testTypes.includes(type)) return;
  //   for (const entry of entries) {
  //     if (!entry.used) {
  //       console.log(`note: the ${type} ${entry.name} is not used in a template!`);
  //     }
  //   }
  // }
};

(async () => {
  console.log('testing modifier data:');
  await testModifiers().catch((e) => gentleAssert(false, e.message));

  console.log('');

  console.log('testing preset data:');
  await testPresets().catch((e) => gentleAssert(false, e.message));

  if (!process.exitCode) {
    console.log('🎉 no major errors 🎉');
  }
})();
