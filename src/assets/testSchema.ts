/* eslint-disable no-await-in-loop */
import yaml from 'js-yaml';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fromZodIssue } from 'zod-validation-error';
import { modiferDataSchema } from './modifierdata/types';

// causes the script to fail if condition is false, but does not stop execution
const gentleAssert = (condition: boolean, message: string) => {
  if (!condition) {
    console.error(`❌ ${message} ❌`);
    process.exitCode = 1;
  }
};

const modifierDirectory = './src/assets/modifierdata/';

const testModifiers = async () => {
  const files = (await fs.readdir(modifierDirectory)).filter(
    (filename) => path.extname(filename) === '.yaml',
  );

  for (const fileName of files) {
    console.log('\n', `  - ${fileName}: - `, '\n');
    const fileData = await fs.readFile(`${modifierDirectory}${fileName}`);

    let data;
    try {
      data = yaml.load(fileData.toString());
    } catch (e) {
      gentleAssert(false, `err: ${fileName} is invalid YAML`);
      continue;
    }

    const result = modiferDataSchema.safeParse(data);

    if (result.success) {
      console.log(fileName, 'matches schema');
    } else {
      result.error.issues.forEach((issue) => console.log(fromZodIssue(issue).toString(), '\n'));
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
