/* eslint-disable no-await-in-loop */
import Ajv from 'ajv';
import yaml from 'js-yaml';
import fs from 'node:fs/promises';
import path from 'node:path';
// import * as Codegen from '@sinclair/typebox-codegen';
import { modiferDataSchema } from './modifierdata/types';

/**
 * Write JSON schema to file
 */
/*
fs.writeFile('src/assets/modifierdata/schema.json', JSON.stringify(modiferDataSchema, null, 2), {
  flag: 'w+',
});
*/

/*
const model: Codegen.TypeBoxModel = {
  exports: new Map(),
  types: [modiferDataSchema],
};
fs.writeFile(
  'src/assets/modifierdata/schema_typescript_example.ts',
  Codegen.ModelToTypeScript.Generate(model),
  {
    flag: 'w+',
  },
);
*/

/**
 * Verify schema
 */

// causes the script to fail if condition is false, but does not stop execution
const gentleAssert = (condition: boolean, message: string) => {
  if (!condition) {
    console.error(`❌ ${message} ❌`);
    process.exitCode = 1;
  }
};

const ajv = new Ajv();
const validateModifierData = ajv.compile(modiferDataSchema);

const modifierDirectory = './src/assets/modifierdata/';

const testModifiers = async () => {
  const files = (await fs.readdir(modifierDirectory)).filter(
    (filename) => path.extname(filename) === '.yaml',
  );

  for (const fileName of files) {
    const fileData = await fs.readFile(`${modifierDirectory}${fileName}`);

    let data;
    try {
      data = yaml.load(fileData.toString());
    } catch (e) {
      gentleAssert(false, `err: ${fileName} is invalid YAML`);
      continue;
    }

    if (validateModifierData(data)) {
      console.log(fileName, 'matches schema');
    } else {
      console.log(validateModifierData.errors);
      process.exitCode = 1;
    }
  }
};

(async () => {
  console.log('testing modifier data:');
  await testModifiers().catch((e) => gentleAssert(false, e.message));

  if (!process.exitCode) {
    console.log('🎉 no major errors 🎉');
  }
})();
