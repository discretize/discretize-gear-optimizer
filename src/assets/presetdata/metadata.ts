import type { BuffsSlice } from '../../state/slices/buffs';
import type { PrioritiesSlice } from '../../state/slices/priorities';
import type {
  InfusionName,
  ProfessionName,
  ProfessionOrSpecializationName,
  WeaponHandednessType,
} from '../../utils/gw2-data';

type JSON = string;

interface TemplateEntryBase {
  name: string;
  id: string;
  specialization: ProfessionOrSpecializationName;
  boonType: 'Power' | 'Condi';
  priority?: string;
  distribution?: string;
  traits?: string;
  extras?: string;
  weaponType: WeaponHandednessType;
  outdated: boolean;
}
export type TemplateEntry = TemplateEntryBase & {
  fractal?: Partial<TemplateEntryBase>;
  raid?: Partial<TemplateEntryBase>;
};
export interface Templates {
  'GraphQL ID': string;
  list: {
    class: ProfessionName;
    builds: TemplateEntry[];
  }[];
}

export interface PresetEntry {
  name: string;
  profession?: ProfessionOrSpecializationName;
  hidden?: true;
}

export type PresetBuffsEntry = PresetEntry & {
  value: Partial<BuffsSlice['buffs']>;
};
export interface PresetBuffs {
  'GraphQL ID': string;
  list: PresetBuffsEntry[];
}

export type PresetAffixesEntry = Exclude<PresetEntry, 'profession'> & {
  value: Partial<PrioritiesSlice>;
};
export interface PresetAffixes {
  'GraphQL ID': string;
  list: PresetAffixesEntry[];
}

export interface Credit {
  author: string;
  url?: string;
  log?: string;
}
export type PresetDistributionEntry = PresetEntry & {
  value: JSON;
  noCreditOkay?: true;
  credit?: Credit[];
};
export interface PresetDistribution {
  'GraphQL ID': string;
  list: PresetDistributionEntry[];
}

export type PresetExtrasEntry = PresetEntry & {
  value: JSON;
};
export interface PresetExtras {
  'GraphQL ID': string;
  list: PresetExtrasEntry[];
}

export type PresetInfusionsEntry = Exclude<PresetEntry, 'profession'> & {
  value: { type: InfusionName | ''; count: string }[];
};
export interface PresetInfusions {
  'GraphQL ID': string;
  list: PresetInfusionsEntry[];
}

export type PresetTraitsEntry = PresetEntry & {
  traits: JSON;
  skills: JSON;
};
export interface PresetTraits {
  'GraphQL ID': string;
  list: PresetTraitsEntry[];
}
