import type {
  Attributes,
  Character,
  OptimizerCoreMinimalSettings,
  OptimizerCoreSettings,
} from '../optimizer/optimizerCore';
import type { AppliedModifier } from '../optimizer/optimizerSetup';
import { getBuffsModifiers } from '../slices/buffs';
import { getExtraModifiersModifiers } from '../slices/extraModifiers';
import type { ExtrasCombination } from '../slices/extras';
import { getInfusionsModifiers } from '../slices/infusions';
import { getSkillsModifiers } from '../slices/skills';
import { getTraitsModifiers } from '../slices/traits';
import type { RootState } from '../store';
import type { Combination, ResultData, Settings } from './optimizerSetup';
import { getAffixName, getAttributeId, getAttributeName } from './utils';

export interface ResultProperties {
  cachedFormState: OptimizerCoreSettings['cachedFormState'];
  sharedModifiers: AppliedModifier[];
  allExtrasData: {
    extrasModifiers: AppliedModifier[];
    extrasCombination: ExtrasCombination;
  }[];
}

export const getResultProperties: (
  reduxState: RootState,
  resultData: ResultData[],
) => ResultProperties = (reduxState: RootState, resultData) => {
  const state = reduxState.optimizer;

  const sharedModifiers = [
    ...(getBuffsModifiers(reduxState) || []),
    ...(getExtraModifiersModifiers(reduxState) || []),
    ...(getInfusionsModifiers(reduxState) || []),
    ...(getSkillsModifiers(reduxState) || []),
    ...(getTraitsModifiers(reduxState) || []),
  ];

  return {
    cachedFormState: {
      traits: state.form.traits,
      skills: state.form.skills,
      extras: state.form.extras,
      buffs: state.form.buffs, // buffs are also needed to share a build and display the assumed buffs for the result
      priorities: state.form.priorities,
      boss: state.form.boss,
    },
    sharedModifiers,
    allExtrasData: resultData,
  };
};

const arrayToObject = <T>(array: [string | number, T][]): Record<string | number, T> => {
  const map: Record<string | number, T> = {};
  array.forEach(([key, value]) => {
    map[key] = value;
  });
  return map;
};

export function enhanceResults(
  results: any[], // from wasm, by "shape" a Character[], but with c-like enum indices instead of strings for attribtues and such
  settings: Settings,
  combinations: Combination[],
  resultProperties: ResultProperties,
): Character[] {
  const resultList: Character[] = [];

  results.forEach((character: any, index: number) => {
    character.attributes = character.attributes.map((attribute: any, indexInner: number) => {
      return [getAttributeName(indexInner), attribute];
    });
    // remove all entries with 0 value
    // character.attributes = character.attributes.filter((attribute: any) => attribute[1] !== 0);

    character.base_attributes = character.base_attributes.map(
      (attribute: any, indexInner: number) => {
        return [getAttributeName(indexInner), attribute];
      },
    );
    // remove all entries with 0 value
    character.base_attributes = character.base_attributes.filter(
      (attribute: any) => attribute[1] !== 0,
    );

    if (!combinations[character.combination_id]) {
      throw new Error(`Combination ${character.combination_id} not found`);
    }

    const convAttr = (values: string[], arr: number[]) =>
      Object.fromEntries(values.map((attr, i) => [attr, arr[i] || 0]));

    const { profession, specialization, weaponType, rankby, shouldDisplayExtras, gameMode, slots } =
      settings;

    const { cachedFormState, sharedModifiers, allExtrasData } = resultProperties;
    const { modifiers } = combinations[character.combination_id];

    const appliedModifiers = [
      ...sharedModifiers,
      ...allExtrasData[character.combination_id].extrasModifiers,
    ];

    const characterSettings: OptimizerCoreMinimalSettings = {
      cachedFormState,
      profession,
      specialization,
      weaponType,
      appliedModifiers,
      rankby,
      shouldDisplayExtras,
      extrasCombination: allExtrasData[character.combination_id].extrasCombination,
      modifiers,
      gameMode,
    };

    const indicators = {
      Damage: character.attributes[getAttributeId('Damage')][1],
      Survivability: character.attributes[getAttributeId('Survivability')][1],
      Healing: character.attributes[getAttributeId('Healing')][1],
    };

    const charResults = {
      ...character.results,
      effectivePositiveValues: convAttr(
        ['Power', 'Precision', 'Ferocity', 'Condition Damage', 'Expertise'],
        character.results.effectivePositiveValues,
      ),
      effectiveNegativeValues: convAttr(
        ['Power', 'Precision', 'Ferocity', 'Condition Damage', 'Expertise'],
        character.results.effectiveNegativeValues,
      ),
      damageBreakdown: convAttr(
        ['Power', 'Power2', 'Bleeding', 'Burning', 'Confusion', 'Poison', 'Torment', 'Siphon'],
        character.results.damageBreakdown,
      ),
      effectiveDamageDistribution: convAttr(
        ['Power', 'Power2', 'Bleeding', 'Burning', 'Confusion', 'Poison', 'Torment', 'Siphon'],
        character.results.effectiveDamageDistribution,
      ),
      indicators,
    };

    resultList.push({
      baseAttributes: arrayToObject(character.base_attributes) as Attributes,
      attributes: arrayToObject(character.attributes) as Attributes,
      gear: character.gear.map(getAffixName).slice(0, slots),
      gearStats: arrayToObject(
        character.gear_stats
          .map((stat: number, index1: number) => {
            return [getAttributeName(index1), stat];
          })
          .filter(([_, stat]: [any, number]) => stat > 0),
      ),
      infusions: {},
      id: `${index}_${character.combination_id}_${Math.random()}`,
      settings: characterSettings,
      results: charResults,
      valid: true,
    });
  });

  return resultList;
}
