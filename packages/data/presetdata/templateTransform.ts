import type data from 'data/presetdata';
import type { ProfessionName } from '../../../src/utils/gw2-data';
import type { TemplateEntry } from './metadata';

const defaultBoonTemplates = {
  fractal: {
    Power: 'Realistic',
    Condi: 'Realistic',
  },
  raid: {
    Power: 'Realistic',
    Condi: 'Realistic',
  },
};

export function templateTransform(templateData: TemplateEntry, isFractals: boolean) {
  const { boonType, fractal = {}, raid = {}, ...rest } = templateData;
  const mode = isFractals ? 'fractal' : 'raid';

  const boons = defaultBoonTemplates[mode]?.[boonType] ?? boonType;

  return isFractals
    ? { boons, ...rest, ...raid, ...fractal }
    : { boons, ...rest, ...fractal, ...raid };
}

interface getBuildTemplateDataProps {
  selectedTemplate: string;
  isFractals: boolean;
  profession: ProfessionName | '';
  data: typeof data;
}

export function getBuildTemplateData({
  selectedTemplate,
  isFractals,
  profession,
  data,
}: getBuildTemplateDataProps) {
  const templateData = data.templates.list
    .flatMap((section) => section.builds)
    .find((build) => build.name === selectedTemplate);

  if (!templateData) throw new Error(`No data for template ${selectedTemplate}!`);

  const build = templateTransform(templateData, isFractals);

  const {
    presetBuffs,
    presetDistribution,
    presetExtras,
    presetTraits,
    presetAffixes: prioritiesPresets,
  } = data;

  return {
    build,
    specialization: build.specialization,
    profession,
    buffPreset: presetBuffs.list.find((pre) => pre.name === build.boons)?.value,
    selectedDistribution: build.distribution,
    distributionPreset: presetDistribution.list.find((pre) => pre.name === build.distribution)
      ?.value,
    prioritiesPreset: prioritiesPresets.list.find((pre) => pre.name === build.priority)?.value,
    extrasPreset: presetExtras.list.find((pre) => pre.name === build.extras)?.value,
    traitsPreset: presetTraits.list.find((pre) => pre.name === build.traits)?.traits,
    skillsPreset: presetTraits.list.find((pre) => pre.name === build.traits)?.skills,
  };
}
