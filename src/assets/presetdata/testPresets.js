/* eslint-disable camelcase */
/* eslint-disable no-use-before-define */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-console */
import fs from 'fs/promises';
// import assert from 'assert';
// eslint-disable-next-line import/no-extraneous-dependencies
import yaml from 'js-yaml';

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

  for (const section of templates.list) {
    for (const item of section.builds) {
      const {
        name = 'missing name',
        // id,
        specialization,
        // boons,
        // priority,
        // distribution,
        // traits,
        // extras,
      } = item;

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

      for (const type of testTypes) {
        const match = data[type].find((pre) => pre.name === item[type]);
        gentleAssert(match, `err: ${name}'s ${type} is not found!`);
        const profIsFine = !match.profession || match?.profession === specialization;
        if (!profIsFine) console.log(`❓ ${name}'s ${type}'s profession is wrong!`);
      }
    }
  }
};

testModifiers()
  .catch((e) => gentleAssert(false, e.message))
  .then(() => {
    if (!process.exitCode) {
      console.log('🎉 no major errors 🎉');
    }
  });
