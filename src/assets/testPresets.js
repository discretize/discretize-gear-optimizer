/* eslint-disable import/extensions */
/* eslint-disable camelcase */
/* eslint-disable no-use-before-define */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-console */
const fs = require('fs/promises');
const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const yaml = require('js-yaml');
const { requireTS } = require('../utils/require-ts.js');

const { templateTransform } = requireTS(path.join(__dirname, './presetdata/templateTransform.js'));

const directory = './src/assets/presetdata/';

// causes the script to fail if condition is false, but does not stop execution
const gentleAssert = (condition, message) => {
  if (!condition) {
    console.error(`❌ ${message} ❌`);
    process.exitCode = 1;
  }
};

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

const testModifiers = async () => {
  // const files = (await fs.readdir(directory)).filter(
  //   (filename) => path.extname(filename) === '.yaml',
  // );

  // const allTraitIds = new Set();
  // const allExtrasIds = new Set();

  const fileData = await fs.readFile(`${directory}templates.yaml`);

  let templates;
  try {
    templates = yaml.load(fileData);
    gentleAssert(templates, `err: templates.yaml is missing`);
  } catch (e) {
    gentleAssert(false, `err: templates.yaml is invalid YAML`);
    return;
  }

  const data = {};
  for (const [type, fileName] of Object.entries(types)) {
    try {
      // eslint-disable-next-line no-shadow
      const fileData = await fs.readFile(`${directory}${fileName}.yaml`);
      data[type] = yaml.load(fileData).list;
      gentleAssert(data[type], `err: ${fileName}.yaml is missing`);
    } catch (e) {
      gentleAssert(false, `err: ${fileName}.yaml is invalid YAML`);
      return;
    }
  }

  const creditData = await fs.readFile(`${directory}credit.yaml`);

  let credit;
  try {
    credit = yaml.load(creditData);
    gentleAssert(templates, `err: credit.yaml is missing`);
  } catch (e) {
    gentleAssert(false, `err: credit.yaml is invalid YAML`);
    return;
  }

  for (const [type, entries] of Object.entries(data)) {
    for (const entry of entries) {
      try {
        if (type === 'traits') {
          JSON.parse(entry.traits);
          JSON.parse(entry.skills);
        } else {
          JSON.parse(entry.value);
        }
      } catch (e) {
        gentleAssert(false, `err: the ${entry.name} ${type} entry is invalid JSON`);
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
      const entryValue = value || traits + skills;

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
      } = item;

      if (id) {
        gentleAssert(!ids.has(id), `err: templates has duplicate id ${id}`);
        ids.add(id);
      }

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
            const extrasData = JSON.parse(match.value);
            ['Sigil1', 'Sigil2', 'Runes', 'Relics', 'Nourishment', 'Enhancement'].forEach(
              (extrasType) => {
                gentleAssert(
                  typeof extrasData.extras[extrasType] === 'object',
                  `${extrasType} missing in ${name}`,
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

testModifiers()
  .catch((e) => gentleAssert(false, e.message))
  .then(() => {
    if (!process.exitCode) {
      console.log('🎉 no major errors 🎉');
    }
  });
