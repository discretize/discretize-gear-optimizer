use std::fmt;

use serde::{Deserialize, Serialize};
use serde_json::Value;
use serde_repr::{Deserialize_repr, Serialize_repr};

use super::{affix::Affix, attribute::Attribute};

#[allow(non_snake_case)] // must allow since this comes from JS
#[derive(Debug, Serialize, Deserialize)]
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
    pub primaryInfusion: String,   // todo
    pub secondaryInfusion: String, // todo
    pub primaryMaxInfusions: u32,
    pub secondaryMaxInfusions: u32,
    pub maxInfusions: u32,
    pub distribution: Distribution,
    pub attackRate: f32,
    pub movementUptime: f32,
    pub gameMode: String,

    pub infusionMode: String,
    pub identicalRing: bool,
    pub identicalAcc: bool,
    pub identicalWep: bool,
    pub identicalArmor: bool,
    pub slots: u8, // amount of occupied slots. typically, 13 for two-handed weapons, 14 for dual wield
    pub runsAfterThisSlot: Vec<u32>,
    pub affixesArray: [Vec<Affix>; 14],
    pub affixStatsArray: [Vec<Vec<(Attribute, f32)>>; 14],
    pub baseAttributes: Vec<(Attribute, f32)>,
    pub modifiers: Modifiers,
    pub disableCondiResultCache: bool,
    pub relevantConditions: Vec<Condition>,
}

impl Settings {
    pub fn is_wvw(&self) -> bool {
        self.gameMode.eq("wvw")
    }
}

#[derive(Debug, Deserialize_repr, Serialize_repr)]
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
#[derive(Debug, Serialize, Deserialize)]
pub struct Distribution {
    pub Bleeding: f32,
    pub Burning: f32,
    pub Confusion: f32,
    pub Poison: f32,
    pub Power: f32,
    pub Power2: f32,
    pub Torment: f32,
}

#[allow(non_snake_case)]
#[derive(Debug, Serialize, Deserialize)]
pub struct Modifiers {
    pub damageMultiplier: [(String, f32); 14],
    pub damageMultiplierBreakdown: Value,
    pub buff: Vec<(Attribute, f32)>, // todo fix these String typings, they are supposed to be Attributes
    pub convert: Vec<(Attribute, Vec<(Attribute, f32)>)>, // todo fix these String typings
    pub convertAfterBuffs: Vec<(Attribute, Vec<(Attribute, f32)>)>, // todo fix these String typings
}

impl Modifiers {
    pub fn get_dmg_multiplier(&self, attr: Attribute) -> f32 {
        match attr {
            Attribute::StrikeDamage => return self.damageMultiplier[0].1,
            Attribute::ConditionDamage => return self.damageMultiplier[1].1,
            Attribute::SiphonDamage => return self.damageMultiplier[2].1,
            Attribute::DamageTaken => return self.damageMultiplier[3].1,
            Attribute::CriticalDamage => return self.damageMultiplier[4].1,
            Attribute::BleedingDamage => return self.damageMultiplier[5].1,
            Attribute::BurningDamage => return self.damageMultiplier[6].1,
            Attribute::ConfusionDamage => return self.damageMultiplier[7].1,
            Attribute::PoisonDamage => return self.damageMultiplier[8].1,
            Attribute::TormentDamage => return self.damageMultiplier[9].1,
            Attribute::AltDamage => return self.damageMultiplier[10].1,
            Attribute::AltCriticalDamage => return self.damageMultiplier[11].1,
            Attribute::PhantasmDamage => return self.damageMultiplier[12].1,
            Attribute::PhantasmCriticalDamage => return self.damageMultiplier[13].1,
            // we will likely notice it in case our result is negative
            _ => -1.0,
        }
    }
}

#[derive(Debug, Deserialize_repr, Serialize_repr)]
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
    pub fn get_damage_attribute(&self) -> Attribute {
        match self {
            Condition::Bleeding => Attribute::BleedingDamage,
            Condition::Burning => Attribute::BurningDamage,
            Condition::Confusion => Attribute::ConfusionDamage,
            Condition::Poison => Attribute::PoisonDamage,
            Condition::Torment => Attribute::TormentDamage,
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
                    49.5
                } else {
                    11.0
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
                } else {
                    if is_special {
                        22.0
                    } else {
                        31.8
                    }
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
                    0.0975
                } else {
                    0.03
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
                } else {
                    if is_special {
                        0.06
                    } else {
                        0.09
                    }
                }
            }
        }
    }
}
