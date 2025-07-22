#![allow(non_snake_case)]
use super::{
    affix::Affix,
    attribute::Attribute,
    character::{Attributes, Character},
    combination::Combination,
    settings::Settings,
};
use crate::{optimizer_core::update_attributes, utils::serde_arrays};
use serde::Serialize;

#[derive(Debug, Clone, Serialize)]
#[repr(align(64))] // cache line alignment
pub struct ResultCharacter {
    // attributes indexed by Attribute enum
    // array instead of struct since this is muuuuuuuuch faster than matching with enum
    #[serde(with = "serde_arrays")]
    pub base_attributes: Attributes,
    #[serde(with = "serde_arrays")]
    pub attributes: Attributes,

    pub gear: [Affix; 14],
    pub gear_stats: [f32; 10],
    pub combination_id: u32,

    pub results: Results,
}
impl ResultCharacter {
    pub fn to_character(&self) -> Character {
        Character {
            base_attributes: self.base_attributes,
            attributes: self.attributes,
            rankby: Attribute::Power,
            gear: self.gear,
            combination_id: self.combination_id,
        }
    }
    pub fn from(character: &Character) -> Self {
        ResultCharacter {
            base_attributes: character.base_attributes,
            attributes: character.attributes,
            gear: character.gear,
            gear_stats: [0.0; 10],
            combination_id: character.combination_id,
            results: Results {
                value: character.score(),
                coefficientHelper: CoefficientHelper {
                    Bleeding: CoefficientDetails {
                        slope: 0.0,
                        intercept: 0.0,
                    },
                    Burning: CoefficientDetails {
                        slope: 0.0,
                        intercept: 0.0,
                    },
                    Confusion: CoefficientDetails {
                        slope: 0.0,
                        intercept: 0.0,
                    },
                    Poison: CoefficientDetails {
                        slope: 0.0,
                        intercept: 0.0,
                    },
                    Power: CoefficientDetails {
                        slope: 0.0,
                        intercept: 0.0,
                    },
                    Power2: CoefficientDetails {
                        slope: 0.0,
                        intercept: 0.0,
                    },
                    Torment: CoefficientDetails {
                        slope: 0.0,
                        intercept: 0.0,
                    },
                },
                damageBreakdown: [0.0; 9],
                effectiveDamageDistribution: [0.0; 9],
                effectiveNegativeValues: [0.0; 5],
                effectivePositiveValues: [0.0; 5],
            },
        }
    }
}
#[derive(Debug, Clone, Copy, Serialize)]
pub struct Results {
    pub coefficientHelper: CoefficientHelper,
    pub damageBreakdown: [f32; 9],
    pub effectiveDamageDistribution: [f32; 9],
    pub effectiveNegativeValues: [f32; 5],
    pub effectivePositiveValues: [f32; 5],
    pub value: f32,
}

#[derive(Debug, Clone, Copy, Serialize)]
pub struct CoefficientHelper {
    pub Bleeding: CoefficientDetails,
    pub Burning: CoefficientDetails,
    pub Confusion: CoefficientDetails,
    pub Poison: CoefficientDetails,
    pub Power: CoefficientDetails,
    pub Power2: CoefficientDetails,
    pub Torment: CoefficientDetails,
}

#[derive(Debug, Clone, Copy, Serialize)]
pub struct CoefficientDetails {
    pub slope: f32,
    pub intercept: f32,
}

impl ResultCharacter {
    pub fn calc_results(&mut self, settings: &Settings, combination: &Combination) {
        let attributes = self.attributes;
        // results.value is assigned when calling ResultCharacter::from
        // we skip indicators in rust to avoid redundancy

        // baseline for comparing adding/subtracting +5 infusions
        let mut baseline = self.clone().to_character();
        update_attributes(&mut baseline, settings, combination, true);

        // effective gain/loss from +5 attributes
        for (index, attribute) in [
            Attribute::Power,
            Attribute::Precision,
            Attribute::Ferocity,
            Attribute::ConditionDamage,
            Attribute::Expertise,
        ]
        .iter()
        .enumerate()
        {
            let mut copy = self.clone().to_character();
            // add +5 infusions
            copy.base_attributes[*attribute as usize] += 5.0;

            update_attributes(&mut copy, settings, combination, true);
            self.results.effectivePositiveValues[index] = copy.attributes
                [Attribute::Damage as usize]
                - baseline.attributes[Attribute::Damage as usize];

            // subtract -5 infusions
            copy = self.clone().to_character();
            copy.base_attributes[*attribute as usize] =
                f32::max(copy.base_attributes[*attribute as usize] - 5.0, 0.0);

            update_attributes(&mut copy, settings, combination, true);
            self.results.effectiveNegativeValues[index] = copy.attributes
                [Attribute::Damage as usize]
                - baseline.attributes[Attribute::Damage as usize];
        }

        for (index, attribute) in [
            Attribute::PowerDPS,
            Attribute::Power2DPS,
            Attribute::BleedingDPS,
            Attribute::BurningDPS,
            Attribute::ConfusionDPS,
            Attribute::PoisonDPS,
            Attribute::TormentDPS,
            Attribute::SiphonDPS,
            Attribute::FlatDPS,
        ]
        .iter()
        .enumerate()
        {
            // effective damage distribution
            self.results.effectiveDamageDistribution[index] = self.attributes[*attribute as usize]
                / attributes[Attribute::Damage as usize]
                * 100.0;

            // damage breakdown
            self.results.damageBreakdown[index] = self.attributes[*attribute as usize];
        }
    }
}
