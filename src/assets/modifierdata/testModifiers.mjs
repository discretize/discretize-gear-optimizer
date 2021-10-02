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
  allConversionKeys,
} from './metadata.mjs';
import specializationData from '../../utils/mapping/specializations.json';

const directory = './src/assets/modifierdata/';

const testModifiers = async () => {
  const files = (await fs.readdir(directory)).filter(
    (filename) => path.extname(filename) === '.yaml',
  );

  const allIds = new Set();

  for (const fileName of files) {
    console.log(`- ${fileName}`);
    const fileData = await fs.readFile(`${directory}${fileName}`);

    let data;
    try {
      data = yaml.load(fileData);
    } catch (e) {
      assert(false, `ERROR: ${fileName} is invalid YAML`);
      // continue;
    }

    assert(Array.isArray(data), `ERROR: ${fileName} is not an array (use dashes for sections!)`);

    const fileIds = new Set();

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
      assert(items, `ERROR: items in ${sectionName} is missing (make it [])`);
      assert(
        Array.isArray(items),
        `ERROR: items in ${sectionName} is not an array (use dashes for sections!)`,
      );

      for (const item of items) {
        // eslint-disable-next-line no-unused-vars
        const { id, text, subText, modifiers, gw2id, type, minor, ...otherKeys } = item;
        if (Object.keys(otherKeys).length)
          console.log('note: this script is missing validation for', otherKeys);

        if (major_traits) {
          if (major_traits.includes(gw2id)) {
            assert(!minor, `ERROR: ${id} is mistakenly labelled minor!`);
          } else if (minor_traits.includes(gw2id)) {
            assert(minor, `ERROR: ${id} should be labelled minor!`);
          } else {
            // eslint-disable-next-line no-lonely-if
            if (gw2id) console.log(`note: ${id} isn't a trait in this line`);
          }
        }

        assert(
          typeof id === 'string' && id !== '',
          `ERROR: invalid or missing item id in ${sectionName}`,
        );

        if (fileIds.has(id)) {
          console.log(`note: file has duplicate id ${id}`);
        } else if (allIds.has(id)) {
          console.log(`note: duplicate id ${id} from different file`);
        }
        fileIds.add(id);
        allIds.add(id);

        if (fileName !== 'buffs.yaml' && typeof gw2id !== 'number') {
          console.log(`note: no gw2id in ${id}`);
        } else if (typeof type !== 'string') console.log(`note: ${id} doesn't have a type`);

        assert(typeof modifiers === 'object', `ERROR: invalid or missing modifiers in ${id}`);

        // eslint-disable-next-line no-unused-vars
        const { damage, attributes, conversion, effect, note, ...otherModifiers } = modifiers;
        assert(
          Object.keys(otherModifiers).length === 0,
          `ERROR: invalid modifier type(s): ${Object.keys(otherModifiers)}`,
        );

        if (damage) {
          parseDamage(damage, id);
        }

        if (attributes) {
          parseAttributes(attributes, id);
        }

        if (conversion) {
          parseConversion(conversion, id);
        }

        if (effect) {
          console.log('note: this script is missing validation for effects right now');
        }
      }
    }
  }

  console.log('🎉 looks like no major errors 🎉');
};

function parseDamage(damage, id) {
  for (const [key, allPairs] of Object.entries(damage)) {
    assert(allDamageKeys.includes(key), `invalid damage key ${key} in ${id}`);
    assert(
      Array.isArray(allPairs),
      `invalid value for ${key} in ${id} (use 'unknown' if you don't know add/mult!)`,
    );

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

function parseAttributes(attributes, id) {
  for (const [key, allPairs] of Object.entries(attributes)) {
    if (allAttributePointKeys.includes(key)) {
      assert(
        Array.isArray(allPairs),
        `invalid value for ${key} in ${id} (use 'unknown' if you don't know if it's converted!)`,
      );

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
      parsePercent(allPairs, key, id);
    } else {
      assert(false, `invalid attribute key ${key} in ${id}`);
    }
  }
}

function parseConversion(conversion, id) {
  for (const [key, value] of Object.entries(conversion)) {
    assert(allConversionKeys.includes(key), `invalid conversion destination ${key} in ${id}`);

    for (const [source, amount] of Object.entries(value)) {
      assert(allConversionKeys.includes(source), `invalid conversion source ${source} in ${id}`);
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
    if (num < 1) console.log(`note: value ${num} in ${id} doesn't look like a percent`);
  }
}

function parseNumber(value, key, id) {
  assert(
    typeof value === 'number' && !Number.isNaN(value),
    `invalid number ${value} for ${key} in ${id}`,
  );
}

testModifiers().catch((e) => console.error(`❌ ${e.message} ❌`));
