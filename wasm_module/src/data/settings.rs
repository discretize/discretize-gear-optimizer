use serde::{Deserialize, Serialize};
use serde_repr::{Deserialize_repr, Serialize_repr};
use std::fmt;

use super::{affix::Affix, attribute::Attribute};

#[allow(non_snake_case)] // must allow since this comes from JS
#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct Settings {
    pub profession: String,
    pub specialization: String,
    pub weaponType: WeaponHandednessType,
    pub forcedAffixes: [Option<u8>; 14],
    pub rankby: Attribute,
    pub minBoonDuration: Option<f32>,
    pub minHealingPower: Option<f32>,
    pub minToughness: Option<f32>,
    pub maxToughness: Option<f32>,
    pub minHealth: Option<f32>,
    pub minCritChance: Option<f32>,
    pub minDamage: Option<f32>,
    pub minHealing: Option<f32>,
    pub minOutgoingHealing: Option<f32>,
    pub minQuicknessDuration: Option<f32>,
    pub minSurviability: Option<f32>,
    pub maxResults: u32,
    pub infusionOptions: Vec<InfusionOption>, // todo
    pub maxInfusions: u8,                     // max 18
    pub distribution: Distribution,
    pub attackRate: f32,
    pub movementUptime: f32,
    pub gameMode: String,
    pub infusionNoDuplicates: bool, // currently unused
    pub identicalRing: bool,
    pub identicalAcc: bool,
    pub identicalWep: bool,
    pub identicalArmor: bool,
    pub slots: u8, // amount of occupied slots. typically, 13 for two-handed weapons, 14 for dual wield
    pub affixesArray: [Vec<Affix>; 14],
    pub affixStatsArray: [Vec<Vec<(Attribute, f32)>>; 14],
    // pub extras: Extras, // TODO pass extras to wasm and calculate combinations here
}

impl Settings {
    pub fn is_wvw(&self) -> bool {
        false // self.gameMode.eq("wvw")
    }
}

#[derive(Debug, Deserialize_repr, Serialize_repr, Clone)]
#[repr(u8)]
pub enum WeaponHandednessType {
    DualWield,
    TwoHanded,
}
impl fmt::Display for WeaponHandednessType {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        match self {
            WeaponHandednessType::DualWield => write!(f, "DualWield"),
            WeaponHandednessType::TwoHanded => write!(f, "TwoHanded"),
        }
    }
}

#[allow(non_snake_case)]
#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct InfusionOption {
    pub r#type: String,
    pub count: u8,
}

#[allow(non_snake_case)]
#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct Distribution {
    pub Bleeding: f32,
    pub Burning: f32,
    pub Confusion: f32,
    pub Poison: f32,
    pub Power: f32,
    pub Power2: f32,
    pub Torment: f32,
}

#[derive(Debug, Deserialize_repr, Serialize_repr, Clone)]
#[repr(u8)]
pub enum Condition {
    Bleeding,
    Burning,
    Confusion,
    Poison,
    Torment,
}

impl Condition {
    /// returns the index for the coefficient attribute the Attributes array in Character
    pub fn get_coefficient_attribute(&self) -> Attribute {
        match self {
            Condition::Bleeding => Attribute::BleedingCoefficient,
            Condition::Burning => Attribute::BurningCoefficient,
            Condition::Confusion => Attribute::ConfusionCoefficient,
            Condition::Poison => Attribute::PoisonCoefficient,
            Condition::Torment => Attribute::TormentCoefficient,
        }
    }
    /// returns the index for the damage attribute the Attributes array in Character
    pub fn get_damage_mod_attribute(&self) -> Attribute {
        match self {
            Condition::Bleeding => Attribute::OutgoingBleedingDamage,
            Condition::Burning => Attribute::OutgoingBurningDamage,
            Condition::Confusion => Attribute::OutgoingConfusionDamage,
            Condition::Poison => Attribute::OutgoingPoisonDamage,
            Condition::Torment => Attribute::OutgoingTormentDamage,
        }
    }

    /// returns the index for the damage tick attribute the Attributes array in Character
    pub fn get_damage_tick_attribute(&self) -> Attribute {
        match self {
            Condition::Bleeding => Attribute::BleedingDamageTick,
            Condition::Burning => Attribute::BurningDamageTick,
            Condition::Confusion => Attribute::ConfusionDamageTick,
            Condition::Poison => Attribute::PoisonDamageTick,
            Condition::Torment => Attribute::TormentDamageTick,
        }
    }

    pub fn get_duration_attribute(&self) -> Attribute {
        match self {
            Condition::Bleeding => Attribute::BleedingDuration,
            Condition::Burning => Attribute::BurningDuration,
            Condition::Confusion => Attribute::ConfusionDuration,
            Condition::Poison => Attribute::PoisonDuration,
            Condition::Torment => Attribute::TormentDuration,
        }
    }

    pub fn get_stacks_attribute(&self) -> Attribute {
        match self {
            Condition::Bleeding => Attribute::BleedingStacks,
            Condition::Burning => Attribute::BurningStacks,
            Condition::Confusion => Attribute::ConfusionStacks,
            Condition::Poison => Attribute::PoisonStacks,
            Condition::Torment => Attribute::TormentStacks,
        }
    }

    pub fn get_dps_attribute(&self) -> Attribute {
        match self {
            Condition::Bleeding => Attribute::BleedingDPS,
            Condition::Burning => Attribute::BurningDPS,
            Condition::Confusion => Attribute::ConfusionDPS,
            Condition::Poison => Attribute::PoisonDPS,
            Condition::Torment => Attribute::TormentDPS,
        }
    }

    /// Returns the base damage of a condition
    ///
    /// # Arguments
    /// - `is_wvw` - whether the calculation is for wvw or not, by default assumes pve
    /// - `is_special` - whether the calculation is for special/actions conditions or not, by default assumes not. Only Torment and Confusion have special variants
    pub fn get_base_damage(&self, is_wvw: bool, is_special: bool) -> f32 {
        match self {
            Condition::Bleeding => 22.0,
            Condition::Burning => 131.0,
            Condition::Confusion => {
                if is_special {
                    16.34
                } else {
                    18.25
                }
            }
            Condition::Poison => 33.5,
            Condition::Torment => {
                if is_wvw {
                    if is_special {
                        19.8
                    } else {
                        26.0
                    }
                } else if is_special {
                    22.0
                } else {
                    31.8
                }
            }
        }
    }

    pub fn get_factor(&self, is_wvw: bool, is_special: bool) -> f32 {
        match self {
            Condition::Bleeding => 0.06,
            Condition::Burning => 0.155,
            Condition::Confusion => {
                if is_special {
                    0.0325
                } else {
                    0.05
                }
            }
            Condition::Poison => 0.06,
            Condition::Torment => {
                if is_wvw {
                    if is_special {
                        0.054
                    } else {
                        0.07
                    }
                } else if is_special {
                    0.06
                } else {
                    0.09
                }
            }
        }
    }
}

// #[derive(Debug, Serialize, Deserialize, Clone)]
// pub struct Extras {
//     pub ids: [Vec<u32>; 5], // 5 extras types
//     pub modifiers: Vec<ExtrasModifiers>,
// }

// #[derive(Debug, Serialize, Deserialize, Clone)]
// pub struct ExtrasModifiers {
//     pub id: u32,
//     pub modifiers: Modifiers,
// }

// #[derive(Debug, Deserialize_repr, Serialize_repr, Clone)]
// #[repr(u8)]
// pub enum ModifierType {
//     Mult,
//     Add,
//     Target,
//     Unknown,
//     Converted,
//     Buff,
// }

// #[derive(Debug, Serialize, Deserialize, Clone)]
// pub struct Modifiers {
//     pub attributes: Option<Vec<(Attribute, (f32, ModifierType))>>,
//     pub damage
// }
