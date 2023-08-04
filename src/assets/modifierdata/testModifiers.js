/* eslint-disable import/extensions */
/* eslint-disable camelcase */
/* eslint-disable no-use-before-define */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-console */
const fs = require('fs/promises');
// eslint-disable-next-line import/no-extraneous-dependencies
const yaml = require('js-yaml');
const path = require('path');
const { requireTS } = require('../../utils/require-ts.js');

const { buffsDict, enhancementDict, nourishmentDict, runesDict, sigilDict } = requireTS(
  path.join(__dirname, '../../components/url-state/schema/SchemaDicts.js'),
);
// import specializationData from '../../utils/mapping/specializations.json' assert { type: 'json' };
const {
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
  attributePercentKeysBlacklist,
  attributePointKeysBlacklist,
  damageKeysBlacklist,
  alternateStats,
  // mayBeConvertedToBlacklist,
} = requireTS(path.join(__dirname, './metadata.ts'));

const schemaKeys = {
  'runes.yaml': runesDict,
  'sigils.yaml': sigilDict,
  'food.yaml': nourishmentDict,
  'utility.yaml': enhancementDict,
  'buffs.yaml': buffsDict,
};

const directory = './src/assets/modifierdata/';

// causes the script to fail if condition is false, but does not stop execution
const gentleAssert = (condition, message) => {
  if (!condition) {
    console.error(`❌ ${message} ❌`);
    process.exitCode = 1;
  }
};

const testModifiers = async () => {
  const specializationDataJSON = await fs.readFile('./src/utils/mapping/specializations.json');
  const specializationData = JSON.parse(specializationDataJSON.toString());

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
      data = yaml.load(fileData.toString());
    } catch (e) {
      gentleAssert(false, `err: ${fileName} is invalid YAML`);
      continue;
    }

    gentleAssert(
      Array.isArray(data),
      `err: ${fileName} is not an array (use dashes for sections!)`,
    );

    const fileIds = new Set();
    const allDataByGw2id = new Map();

    const fileIsExtra = ['food', 'utility', 'runes', 'sigils'].some((name) =>
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
            `err: schema for ${fileName} doesn't include ${id}!`,
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

    // handle more than 2 pairs i.e. Strike Damage: [3%, add, 7%, mult]
    const allPairsMut = [...allPairs];
    while (allPairsMut.length) {
      const [amount, mode] = allPairsMut.splice(0, 2);

      parsePercent(amount, key, id);
      gentleAssert(allDamageModes.includes(mode), `invalid val ${allPairs} for ${key} in ${id}`);
      gentleAssert(
        key !== 'Critical Damage' || mode === 'unknown',
        `set mode unknown for critical damage for now`,
      );

      if (mode === 'target') {
        gentleAssert(damage['Phantasm Damage'] !== undefined, `${id} is missing phantasm damage`);
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

testModifiers()
  .catch((e) => gentleAssert(false, e.message))
  .then(() => {
    if (!process.exitCode) {
      console.log('🎉 no major errors 🎉');
    }
  });
