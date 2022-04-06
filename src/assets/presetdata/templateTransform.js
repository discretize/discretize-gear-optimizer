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
