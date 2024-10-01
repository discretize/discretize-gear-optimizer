import type {
  PresetAffixes,
  PresetBuffs,
  PresetDistribution,
  PresetExtras,
  PresetInfusions,
  PresetTraits,
  Templates,
} from '../assets/presetdata/metadata';
import presetAffixes from '../assets/presetdata/preset-affixes.yaml';
import presetBuffs from '../assets/presetdata/preset-buffs.yaml';
import presetDistribution from '../assets/presetdata/preset-distribution.yaml';
import presetExtras from '../assets/presetdata/preset-extras.yaml';
import presetInfusions from '../assets/presetdata/preset-infusions.yaml';
import presetTraits from '../assets/presetdata/preset-traits.yaml';
import templates from '../assets/presetdata/templates.yaml';

export default {
  templates,
  presetBuffs,
  presetAffixes,
  presetDistribution,
  presetExtras,
  presetInfusions,
  presetTraits,
} as {
  templates: Templates;
  presetBuffs: PresetBuffs;
  presetAffixes: PresetAffixes;
  presetDistribution: PresetDistribution;
  presetExtras: PresetExtras;
  presetInfusions: PresetInfusions;
  presetTraits: PresetTraits;
};
