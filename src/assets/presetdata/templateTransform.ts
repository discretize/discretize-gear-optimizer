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

export function templateTransform(templateData, isFractals) {
  const { boonType, fractal = {}, raid = {}, ...rest } = templateData;
  const mode = isFractals ? 'fractal' : 'raid';

  const boons = defaultBoonTemplates[mode]?.[boonType] ?? boonType;

  return isFractals
    ? { boons, ...rest, ...raid, ...fractal }
    : { boons, ...rest, ...fractal, ...raid };
}

export function getBuildTemplateData({ selectedTemplate, isFractals, profession, data }) {
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
    buffPreset: JSON.parse(presetBuffs.list.find((pre) => pre.name === build.boons).value),
    selectedDistribution: build.distribution,
    distributionPreset: JSON.parse(
      presetDistribution.list.find((pre) => pre.name === build.distribution)?.value || 'null',
    ),
    prioritiesPreset: JSON.parse(
      prioritiesPresets.list.find((pre) => pre.name === build.priority)?.value,
    ),
    extrasPreset: JSON.parse(presetExtras.list.find((pre) => pre.name === build.extras)?.value),
    traitsPreset: JSON.parse(presetTraits.list.find((pre) => pre.name === build.traits)?.traits),
    skillsPreset: JSON.parse(presetTraits.list.find((pre) => pre.name === build.traits)?.skills),
  };
}
