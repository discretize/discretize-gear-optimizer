import { setBuildTemplate } from '../../state/slices/controlsSlice';
import data from '../../utils/data';

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

export function changeTemplate(dispatch, { build, profession }) {
  const {
    presetBuffs,
    presetDistribution,
    presetExtras,
    presetTraits,
    presetAffixes: prioritiesPresets,
  } = data;

  dispatch(
    setBuildTemplate({
      build,
      specialization: build.specialization,
      profession,
      buffPreset: JSON.parse(presetBuffs.list.find((pre) => pre.name === build.boons).value),
      distributionPreset: JSON.parse(
        presetDistribution.list.find((pre) => pre.name === build.distribution)?.value || 'null',
      ),
      prioritiesPreset: JSON.parse(
        prioritiesPresets.list.find((pre) => pre.name === build.priority)?.value,
      ),
      extrasPreset: JSON.parse(presetExtras.list.find((pre) => pre.name === build.extras)?.value),
      traitsPreset: JSON.parse(presetTraits.list.find((pre) => pre.name === build.traits)?.traits),
      skillsPreset: JSON.parse(presetTraits.list.find((pre) => pre.name === build.traits)?.skills),
    }),
  );
}
