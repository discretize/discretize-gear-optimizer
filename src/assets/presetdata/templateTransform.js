import { setBuildTemplate } from '../../state/slices/controlsSlice';

const defaultBoonTemplates = {
  fractal: {
    Power: 'Power (spotter)',
    Condi: 'Condi',
  },
  raid: {
    Power: 'Benchmark',
    Condi: 'Benchmark',
  },
};

export default function (buildData, isFractals) {
  const { boonType, fractal = {}, raid = {}, ...rest } = buildData;
  const mode = isFractals ? 'fractal' : 'raid';

  const boons = defaultBoonTemplates[mode]?.[boonType] ?? boonType;

  return isFractals
    ? { boons, ...rest, ...raid, ...fractal }
    : { boons, ...rest, ...fractal, ...raid };
}

export function changeTemplate(
  dispatch,
  {
    build,
    profession,
    buffPresets,
    distributionPresets,
    prioritiesPresets,
    extrasPresets,
    traitPresets,
  },
) {
  dispatch(
    setBuildTemplate({
      build,
      specialization: build.specialization,
      profession,
      buffPreset: JSON.parse(buffPresets.find((pre) => pre.name === build.boons).value),
      distributionPreset: JSON.parse(
        distributionPresets.find((pre) => pre.name === build.distribution)?.value || 'null',
      ),
      prioritiesPreset: JSON.parse(
        prioritiesPresets.find((pre) => pre.name === build.priority)?.value,
      ),
      extrasPreset: JSON.parse(extrasPresets.find((pre) => pre.name === build.extras)?.value),
      traitsPreset: JSON.parse(traitPresets.find((pre) => pre.name === build.traits)?.traits),
      skillsPreset: JSON.parse(traitPresets.find((pre) => pre.name === build.traits)?.skills),
    }),
  );
}
