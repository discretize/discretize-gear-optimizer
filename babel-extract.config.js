const YAML = require('js-yaml');
const fs = require('fs');

const presetTraits = YAML.load(
  fs.readFileSync('./src/assets/presetdata/preset-traits.yaml', 'utf8'),
);
const preset = {
  affixes: YAML.load(fs.readFileSync('./src/assets/presetdata/preset-affixes.yaml', 'utf8')),
  distribution: YAML.load(
    fs.readFileSync('./src/assets/presetdata/preset-distribution.yaml', 'utf8'),
  ),
  buffs: YAML.load(fs.readFileSync('./src/assets/presetdata/preset-buffs.yaml', 'utf8')),
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
  food: YAML.load(fs.readFileSync('./src/assets/modifierdata/food.yaml', 'utf8')),
  utility: YAML.load(fs.readFileSync('./src/assets/modifierdata/utility.yaml', 'utf8')),
};
module.exports = {
  presets: ['babel-preset-gatsby'],
  plugins: [
    [
      './extract_context_injection',
      {
        buildTemplateName: [
          ...new Set([
            ...presetTraits.list.flatMap((item) => item.builds).map((item) => item.name),
          ]),
        ],
        presetName: [
          ...new Set(
            Object.values(preset)
              .flatMap((item) => item.list)
              .map((item) => item.name),
          ),
        ],
        buffSection: [...new Set(buffs.map((item) => item.section))],
        buffText: [...new Set(buffs.flatMap((item) => item.items).map((item) => item.text))],
        amountLabel: [
          ...new Set(
            Object.values(professions)
              .flat()
              .flatMap((item) => item.items)
              .filter((item) => item.amountData)
              .map((item) => item.amountData)
              .filter((item) => item.label)
              .map((item) => item.label),
          ),
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
        traitSubText: [
          ...new Set(
            Object.values(professions)
              .flat()
              .filter((item) => item.section !== 'Skills')
              .flatMap((item) => item.items)
              .filter((item) => item.subText)
              .map((item) => item.subText),
          ),
        ],
      },
    ],
    [
      'i18next-extract',
      {
        locales: ['en', 'zh'],
        keySeparator: null,
        nsSeparator: null,
        keyAsDefaultValue: ['en'],
        useI18nextDefaultValue: ['en'],
        discardOldKeys: true,
        contextSeparator: '',
        outputPath: 'locales/{{locale}}/{{ns}}.json',
        customTransComponents: [['gatsby-plugin-react-i18next', 'Trans']],
      },
    ],
  ],
};
