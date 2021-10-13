/* eslint-disable camelcase */
/* eslint-disable no-use-before-define */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-console */
import fs from 'fs/promises';
import path from 'path';
import assert from 'assert';
// eslint-disable-next-line import/no-extraneous-dependencies
import yaml from 'js-yaml';
import {
  allDamageKeys,
  allDamageModes,
  allAttributePointKeys,
  allAttributePointModes,
  allAttributePercentKeys,
  allConversionSourceKeys,
  allConversionDestinationKeys,
  damageKeysBlacklist,
  attributePointKeysBlacklist,
  attributePercentKeysBlacklist,
  // eslint-disable-next-line import/extensions
} from './metadata.js';
import specializationData from '../../utils/mapping/specializations.json';

const directory = './src/assets/modifierdata/';

const testModifiers = async () => {
  const files = (await fs.readdir(directory)).filter(
    (filename) => path.extname(filename) === '.yaml',
  );

  const allTraitIds = new Set();
  const allExtrasIds = new Set();

  for (const fileName of files) {
    console.log(`  - ${fileName}`);
    const fileData = await fs.readFile(`${directory}${fileName}`);

    let data;
    try {
      data = yaml.load(fileData);
    } catch (e) {
      assert(false, `err: ${fileName} is invalid YAML`);
    }

    assert(Array.isArray(data), `err: ${fileName} is not an array (use dashes for sections!)`);

    const fileIds = new Set();
    const allGw2ids = new Set();

    const fileIsExtra = ['food', 'utility', 'runes', 'sigils'].some((name) =>
      fileName.includes(name),
    );

    for (const section of data) {
      const sectionName = section.section;
      if (!sectionName) console.log(`❓ empty section name`);

      let major_traits = null;
      let minor_traits = null;
      if (section.id) {
        const traitlineData = specializationData.find((entry) => entry.id === section.id);
        ({ major_traits, minor_traits } = traitlineData);
      }

      const { items } = section;
      assert(items, `err: items in ${sectionName} is missing (make it [])`);
      assert(
        Array.isArray(items),
        `err: items in ${sectionName} is not an array (use dashes for sections!)`,
      );

      for (const item of items) {
        const {
          id,
          // eslint-disable-next-line no-unused-vars
          text,
          subText,
          modifiers,
          gw2id,
          type,
          minor,
          amountData,
          defaultEnabled,
          ...otherKeys
        } = item;

        if (Object.keys(otherKeys).length)
          console.log('❓ this script is missing validation for', otherKeys);

        const checkNullRecursively = (obj) => {
          for (const value of Object.values(obj)) {
            if (value === null || value === undefined) {
              console.log(`❓ ${id} has a null or undefined value!`);
            } else if (typeof value === 'object') {
              checkNullRecursively(value);
            }
          }
        };
        checkNullRecursively(item);

        if (amountData) {
          assert(typeof amountData.label === 'string', `err: missing amount label in ${id}`);
          assert(typeof amountData.default === 'number', `err: missing amount default in ${id}`);
          assert(
            typeof amountData.quantityEntered === 'number',
            `err: missing amount quantityEntered in ${id}`,
          );
        }

        if (major_traits) {
          if (major_traits.includes(gw2id)) {
            assert(!minor, `err: ${id} is mistakenly labelled minor!`);
          } else if (minor_traits.includes(gw2id)) {
            assert(minor, `err: ${id} should be labelled minor!`);
          } else {
            // eslint-disable-next-line no-lonely-if
            if (gw2id && sectionName !== 'Soulbeast')
              console.log(`❓ ${id} isn't a trait in this line`);
          }
        }

        if (minor && !subText && !amountData) {
          assert(defaultEnabled, `err: minor ${id} should be defaultEnabled!`);
        }

        if (section.id && gw2id) {
          assert(
            !allGw2ids.has(gw2id) || subText || amountData,
            `missing subtext for same gw2id in ${id}`,
          );
          allGw2ids.add(gw2id);
        }

        assert(
          typeof id === 'string' && id !== '',
          `err: invalid or missing item id in ${sectionName}`,
        );

        assert(!fileIds.has(id), `err:file has duplicate id ${id}`);
        fileIds.add(id);

        // duplicate ids within all the extras or within all the traits will be merged
        const allIds = fileIsExtra ? allExtrasIds : allTraitIds;
        assert(!allIds.has(id), `duplicate id ${id} from different file`);
        allIds.add(id);

        // if (fileName !== 'buffs.yaml' && typeof gw2id !== 'number') {
        //   console.log(`note: no gw2id in ${id}`);
        // }

        if (fileName === 'buffs.yaml' && typeof type !== 'string')
          console.log(`❓ ${id} doesn't have a type`);

        assert(typeof modifiers === 'object', `err: invalid or missing modifiers in ${id}`);

        const { damage, attributes, conversion, effect, ...otherModifiers } = modifiers;
        assert(
          Object.keys(otherModifiers).length === 0,
          `err: invalid modifier type(s): ${Object.keys(otherModifiers)}`,
        );

        if (damage) {
          parseDamage(damage, id);
        }

        if (attributes) {
          parseAttributes(attributes, id, amountData);
        }

        if (conversion) {
          parseConversion(conversion, id, amountData);
        }

        if (effect) {
          console.log('note: this script is missing validation for effects right now');
        }
      }
    }
  }

  console.log('🎉 looks like no major errors 🎉');
};

function parseDamage(damage, id, amountData) {
  for (const [key, allPairs] of Object.entries(damage)) {
    assert(allDamageKeys.includes(key), `invalid damage key ${key} in ${id}`);
    assert(
      Array.isArray(allPairs),
      `invalid value for ${key} in ${id} (use 'unknown' if you don't know add/mult!)`,
    );

    if (amountData && !amountData.disableBlacklist && damageKeysBlacklist.includes(key))
      console.log(`❓ ${key} is a bad idea in an entry with an amount like ${id}`);

    // handle more than 2 pairs i.e. Strike Damage: [3%, add, 7%, mult]
    const allPairsMut = [...allPairs];
    while (allPairsMut.length) {
      const [amount, mode] = allPairsMut.splice(0, 2);

      parsePercent(amount, key, id);
      assert(allDamageModes.includes(mode), `invalid val ${allPairs} for ${key} in ${id}`);
      assert(
        key !== 'Critical Damage' || mode === 'unknown',
        `set mode unknown for critical damage for now`,
      );
    }
  }
}

function parseAttributes(attributes, id, amountData) {
  for (const [key, allPairs] of Object.entries(attributes)) {
    if (allAttributePointKeys.includes(key)) {
      assert(
        Array.isArray(allPairs),
        `invalid value for ${key} in ${id} (use 'unknown' if you don't know if it's converted!)`,
      );

      if (amountData && !amountData.disableBlacklist && attributePointKeysBlacklist.includes(key))
        console.log(`❓ ${key} is a bad idea in an entry with an amount like ${id}`);

      // handle more than 2 pairs i.e. Concentration: [70, converted, 100, buff]
      const allPairsMut = [...allPairs];
      while (allPairsMut.length) {
        const [amount, mode] = allPairsMut.splice(0, 2);

        parseNumber(amount, key, id);
        assert(
          allAttributePointModes.includes(mode),
          `invalid val ${allPairs} for ${key} in ${id}`,
        );
      }
    } else if (allAttributePercentKeys.includes(key)) {
      if (amountData && !amountData.disableBlacklist && attributePercentKeysBlacklist.includes(key))
        console.log(`❓ ${key} is a bad idea in an entry with an amount like ${id}`);

      parsePercent(allPairs, key, id);
    } else {
      assert(false, `invalid attribute key ${key} in ${id}`);
    }
  }
}

function parseConversion(conversion, id, amountData) {
  for (const [key, value] of Object.entries(conversion)) {
    assert(
      allConversionDestinationKeys.includes(key),
      `invalid conversion destination ${key} in ${id}`,
    );

    if (amountData && !amountData.disableBlacklist && attributePointKeysBlacklist.includes(key))
      console.log(`❓ ${key} is a bad idea in an entry with an amount like ${id}`);

    for (const [source, amount] of Object.entries(value)) {
      assert(
        allConversionSourceKeys.includes(source),
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
    assert(
      typeof num === 'number' && !Number.isNaN(num),
      `invalid number ${value} for ${key} in ${id}`,
    );
    if (num < 1 && key !== 'Outgoing Healing')
      console.log(`note: value ${num} in ${id} doesn't look like a percent`);
  }
}

function parseNumber(value, key, id) {
  assert(
    typeof value === 'number' && !Number.isNaN(value),
    `invalid number ${value} for ${key} in ${id}`,
  );
}

testModifiers().catch((e) => console.error(`❌ ${e.message} ❌`));
