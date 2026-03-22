/* eslint-disable no-await-in-loop */
import fs from 'node:fs/promises';
import path from 'node:path';
import yaml from 'yaml';

const files = await Array.fromAsync(fs.glob(`${process.cwd()}/src/assets/modifierdata/*.yaml`));

for (const file of files) {
  const document = yaml.parseDocument(await fs.readFile(file, 'utf-8'), {});

  // yaml.visit(document, {
  //   Map(key, node) {
  //     const gw2id = node.get('gw2id');
  //     if (gw2id && !node.get('test')) {
  //       node.set('test', gw2id + 1);
  //       return node;
  //     }
  //   },
  // });

  await fs.writeFile(
    file,
    document.toString({ flowCollectionPadding: false, lineWidth: 100 }),
    'utf-8',
  );
  console.log('processed', path.basename(file));
}
