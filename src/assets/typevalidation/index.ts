/* eslint-disable no-await-in-loop */
import yaml from 'js-yaml';
import fs from 'node:fs/promises';
import path from 'node:path';

import typia from 'typia';
import type { ModifierData } from '../modifierdata/metadata';
import type {
  CreditData,
  PresetAffixes,
  PresetBuffs,
  PresetDistribution,
  PresetExtras,
  PresetInfusions,
  PresetTraits,
  Templates,
} from '../presetdata/metadata';

const assertValidModifierData = typia.createAssertEquals<ModifierData>();

// causes the script to fail if condition is false, but does not stop execution
const gentleAssert = (condition: boolean, message: string) => {
  if (!condition) {
    console.error(`❌ ${message} ❌`);
    process.exitCode = 1;
  }
};

const modifierDirectory = './src/assets/modifierdata/';
const presetDirectory = './src/assets/presetdata/';

const testModifiers = async () => {
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

    try {
      assertValidModifierData(data);
    } catch (e) {
      gentleAssert(false, `Typescript validation ${e}`);
      process.exitCode = 1;
    }
  }
};

const assertValidPresetData = {
  'templates.yaml': typia.createAssertEquals<Templates>(),
  'preset-buffs.yaml': typia.createAssertEquals<PresetBuffs>(),
  'preset-affixes.yaml': typia.createAssertEquals<PresetAffixes>(),
  'preset-distribution.yaml': typia.createAssertEquals<PresetDistribution>(),
  'preset-extras.yaml': typia.createAssertEquals<PresetExtras>(),
  'preset-infusions.yaml': typia.createAssertEquals<PresetInfusions>(),
  'preset-traits.yaml': typia.createAssertEquals<PresetTraits>(),
  'credit.yaml': typia.createAssertEquals<CreditData>(),
} as Record<string, (data: any) => void>;

const testPresets = async () => {
  const files = (await fs.readdir(presetDirectory)).filter(
    (filename) => path.extname(filename) === '.yaml',
  );

  for (const fileName of files) {
    console.log(`  - ${fileName}`);
    const fileData = await fs.readFile(`${presetDirectory}${fileName}`);

    let data;
    try {
      data = yaml.load(fileData.toString());
    } catch {
      gentleAssert(false, `err: ${fileName} is invalid YAML`);
      continue;
    }

    if (assertValidPresetData[fileName]) {
      try {
        assertValidPresetData[fileName](data);
      } catch (e) {
        gentleAssert(false, `Typescript validation ${e}`);
        process.exitCode = 1;
      }
    }
  }
};

(async () => {
  console.log('testing modifier data:');
  await testModifiers().catch((e: Error) => gentleAssert(false, e.message));

  console.log('testing preset data:');
  await testPresets().catch((e: Error) => gentleAssert(false, e.message));

  console.log('');

  // console.log('testing preset data:');
  // await testPresets().catch((e) => gentleAssert(false, e.message));

  if (!process.exitCode) {
    console.log('🎉 no major errors 🎉');
  }
})();
