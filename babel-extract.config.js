/* eslint-disable import/extensions */
import fs from 'fs';
import YAML from 'js-yaml';
import requireTS from './src/utils/require-ts.js';

const { GEAR_SLOTS, Affix } = requireTS('./src/utils/gw2-data.ts');

const templates = YAML.load(fs.readFileSync('./src/assets/presetdata/templates.yaml', 'utf8'));
const presets = {
  trait: YAML.load(fs.readFileSync('./src/assets/presetdata/preset-traits.yaml', 'utf8')),
  affix: YAML.load(fs.readFileSync('./src/assets/presetdata/preset-affixes.yaml', 'utf8')),
  distribution: YAML.load(
    fs.readFileSync('./src/assets/presetdata/preset-distribution.yaml', 'utf8'),
  ),
  buff: YAML.load(fs.readFileSync('./src/assets/presetdata/preset-buffs.yaml', 'utf8')),
  infusion: YAML.load(fs.readFileSync('./src/assets/presetdata/preset-infusions.yaml', 'utf8')),
  extra: YAML.load(fs.readFileSync('./src/assets/presetdata/preset-extras.yaml', 'utf8')),
};
const buffs = YAML.load(fs.readFileSync('./src/assets/modifierdata/buffs.yaml', 'utf8'));
const professions = {
  elementalist: YAML.load(fs.readFileSync('./src/assets/modifierdata/elementalist.yaml', 'utf8')),
  engineer: YAML.load(fs.readFileSync('./src/assets/modifierdata/engineer.yaml', 'utf8')),
  guardian: YAML.load(fs.readFileSync('./src/assets/modifierdata/guardian.yaml', 'utf8')),
  mesmer: YAML.load(fs.readFileSync('./src/assets/modifierdata/mesmer.yaml', 'utf8')),
  necromancer: YAML.load(fs.readFileSync('./src/assets/modifierdata/necromancer.yaml', 'utf8')),
  ranger: YAML.load(fs.readFileSync('./src/assets/modifierdata/ranger.yaml', 'utf8')),
  revenant: YAML.load(fs.readFileSync('./src/assets/modifierdata/revenant.yaml', 'utf8')),
  thief: YAML.load(fs.readFileSync('./src/assets/modifierdata/thief.yaml', 'utf8')),
  warrior: YAML.load(fs.readFileSync('./src/assets/modifierdata/warrior.yaml', 'utf8')),
};
const extra = {
  sigils: YAML.load(fs.readFileSync('./src/assets/modifierdata/sigils.yaml', 'utf8')),
  runes: YAML.load(fs.readFileSync('./src/assets/modifierdata/runes.yaml', 'utf8')),
  relics: YAML.load(fs.readFileSync('./src/assets/modifierdata/relics.yaml', 'utf8')),
  food: YAML.load(fs.readFileSync('./src/assets/modifierdata/food.yaml', 'utf8')),
  utility: YAML.load(fs.readFileSync('./src/assets/modifierdata/utility.yaml', 'utf8')),
};
export default {
  presets: ['@babel/preset-typescript', '@babel/preset-react'],
  plugins: [
    [
      './extract_context_injection/index.js',
      {
        buildTemplateName: [
          ...new Set(templates.list.flatMap((item) => item.builds).map((item) => item.name)),
        ],
        presetName: [
          ...new Set(
            Object.entries(presets).flatMap((entry) =>
              entry[1].list.map((item) => `${entry[0]}_${item.name}`),
            ),
          ),
        ],
        buffSection: [...new Set(buffs.map((item) => item.section))],
        buffText: [...new Set(buffs.flatMap((item) => item.items).map((item) => item.text))],
        amountLabel: [
          ...new Set([
            ...Object.values(professions)
              .flat()
              .flatMap((item) => item.items)
              .map((item) => item?.amountData?.label)
              .filter((item) => item),
            ...Object.values(extra)
              .flat()
              .flatMap((section) => section.items)
              .map((item) => item?.amountData?.label)
              .filter((item) => item),
          ]),
          'x',
        ],
        skillSubText: [
          ...new Set(
            Object.values(professions)
              .flat()
              .filter((item) => item.section === 'Skills')
              .flatMap((item) => item.items)
              .filter((item) => item.subText)
              .map((item) => item.subText),
          ),
        ],
        extraSection: [
          ...new Set(
            Object.values(extra)
              .flat()
              .flatMap((item) => item.section),
          ),
        ],
        extraSubText: [
          ...new Set(
            Object.values(extra)
              .flat()
              .flatMap((section) => section.items)
              .map((item) => item.subText)
              .filter((item) => item),
          ),
          '',
        ],
        traitSubText: [
          ...new Set(
            Object.values(professions)
              .flat()
              .filter((item) => item.section !== 'Skills')
              .flatMap((item) => item.items)
              .filter((item) => item.subText)
              .map((item) => item.subText),
          ),
          '',
        ],
        traitNote: [
          ...new Set(
            Object.values(professions)
              .flat()
              .flatMap((item) => item.note)
              .filter(Boolean),
          ),
          '',
        ],
        slotName: [...new Set(Object.values(GEAR_SLOTS).map((item) => item.name))],
        affix: Object.keys(Affix),
      },
    ],
    [
      'i18next-extract',
      {
        locales: ['en', 'zh', 'de'],
        keySeparator: null,
        nsSeparator: null,
        keyAsDefaultValue: ['en'],
        useI18nextDefaultValue: ['en'],
        discardOldKeys: true,
        outputPath: 'locales/{{locale}}/{{ns}}.json',
        customTransComponents: [['react-i18next', 'Trans']],
      },
    ],
  ],
};
