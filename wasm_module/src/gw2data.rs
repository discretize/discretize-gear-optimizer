#![allow(dead_code)]
use std::fmt;

use enum_iterator::{all, Sequence};
use serde::{Deserialize, Serialize};
use serde_json::Value;
use serde_repr::{Deserialize_repr, Serialize_repr};

// BEGIN combination related

#[allow(non_snake_case)] // must allow since this comes from JS
#[derive(Debug, Serialize, Deserialize)]
pub struct Combination {
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
    pub relevantConditions: Vec<String>,
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
            Attribute::SiphonDPS => return self.damageMultiplier[2].1,
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
            _ => -1.0,
        }
    }
}

// END combination related

// BEGIN character related

pub trait AttributesArray {
    fn get(&self, attr: Attribute) -> f32;
    fn set(&mut self, attr: Attribute, value: f32);
    fn add(&mut self, attr: Attribute, value: f32);
}

pub type Attributes = [f32; ATTRIBUTE_COUNT];
impl AttributesArray for Attributes {
    #[inline(always)]
    fn get(&self, attr: Attribute) -> f32 {
        self[attr as usize]
    }

    #[inline(always)]
    fn set(&mut self, attr: Attribute, value: f32) {
        self[attr as usize] = value;
    }

    #[inline(always)]
    fn add(&mut self, attr: Attribute, value: f32) {
        self[attr as usize] += value;
    }
}

#[derive(Debug, Copy, Clone, Serialize)]
#[repr(align(64))] // cache line alignment
pub struct Character {
    // attributes indexed by Attribute enum
    // array instead of struct since this is muuuuuuuuch faster than matching with enum
    #[serde(with = "serde_arrays")]
    pub base_attributes: Attributes,
    #[serde(with = "serde_arrays")]
    pub attributes: Attributes,
    pub rankby: Attribute,
    pub gear: [Affix; 14],
}
mod serde_arrays {
    use serde::Serialize;

    pub fn serialize<S, T>(array: &[T; 84], serializer: S) -> Result<S::Ok, S::Error>
    where
        S: serde::Serializer,
        T: Serialize,
    {
        array[..].serialize(serializer)
    }
}

impl Character {
    pub fn new(rankby: Attribute) -> Self {
        Character {
            base_attributes: [0.0; ATTRIBUTE_COUNT],
            attributes: [0.0; ATTRIBUTE_COUNT],
            rankby,
            gear: [Affix::None; 14],
        }
    }

    pub fn clear(&mut self) {
        self.base_attributes.iter_mut().for_each(|attr| {
            *attr = 0.0;
        });

        self.attributes.iter_mut().for_each(|attr| {
            *attr = 0.0;
        });
    }

    pub fn score(&self) -> f32 {
        return self.attributes.get(self.rankby);
    }
    pub fn copy_to(&self, other: &mut Character) {
        other
            .base_attributes
            .iter_mut()
            .zip(self.base_attributes.iter())
            .for_each(|(a, b)| *a = *b);
        other
            .attributes
            .iter_mut()
            .zip(self.attributes.iter())
            .for_each(|(a, b)| *a = *b);
        other.rankby = self.rankby;
        other
            .gear
            .iter_mut()
            .zip(self.gear.iter())
            .for_each(|(a, b)| *a = *b);
    }
}

// END character related

pub enum Rarity {
    Ascended,
    Exotic,
}

#[derive(Debug, Default)]
pub enum Slots {
    Helm,
    Shoulders,
    Chest,
    Gloves,
    Leggings,
    Boots,
    Amulet,
    Ring,
    Accessory,
    BackItem,
    OneHandedWeapon,
    TwoHandedWeapon,
    #[default]
    None = -1,
}

pub fn slot_from_indexed_array(index: usize, twohanded: bool) -> Slots {
    match index {
        0 => Slots::Helm,
        1 => Slots::Shoulders,
        2 => Slots::Chest,
        3 => Slots::Gloves,
        4 => Slots::Leggings,
        5 => Slots::Boots,
        6 => Slots::Amulet,
        7 => Slots::Ring,
        8 => Slots::Ring,
        9 => Slots::Accessory,
        10 => Slots::Accessory,
        11 => Slots::BackItem,
        12 if twohanded => Slots::TwoHandedWeapon,
        12 if !twohanded => Slots::OneHandedWeapon,
        13 if !twohanded => Slots::OneHandedWeapon,
        _ => Slots::None,
    }
}

// align to 64 bytes = 4 attributes per cache line
const ATTRIBUTE_COUNT: usize = 84; // actually only 81 attributes, but we need to align to 64 bytes;

#[derive(Debug, Sequence, Serialize_repr, Deserialize_repr, Default, Clone, Copy)]
#[repr(u8)]
pub enum Attribute {
    // primary
    Power,
    Precision,
    Toughness,
    Vitality,
    // secondary
    Ferocity,
    ConditionDamage,
    Expertise,
    Concentration,
    HealingPower,
    AgonyResistance,
    // derived
    CriticalChance,
    CriticalDamage,
    ConditionDuration,
    BoonDuration,
    Health,
    Armor,
    // boon duration
    AegisDuration,
    FuryDuration,
    MightDuration,
    ProtectionDuration,
    QuicknessDuration,
    RegenerationDuration,
    ResistanceDuration,
    ResolutionDuration,
    StabilityDuration,
    SwiftnessDuration,
    VigorDuration,
    // condition duration
    BleedingDuration,
    BlindDuration,
    BurningDuration,
    ChilledDuration,
    ConfusionDuration,
    CrippledDuration,
    FearDuration,
    ImmobileDuration,
    PoisonDuration,
    SlowDuration,
    TauntDuration,
    TormentDuration,
    VulnerabilityDuration,
    WeaknessDuration,
    // conditions ????
    BleedingCoefficient,
    BurningCoefficient,
    ConfusionCoefficient,
    PoisonCoefficient,
    TormentCoefficient,
    // condition damage
    BleedingDamage,
    BurningDamage,
    ConfusionDamage,
    PoisonDamage,
    TormentDamage,
    // effective attributes
    EffectivePower,
    EffectiveHealth,
    EffectiveHealing,
    // indicators
    Damage,
    Survivability,
    Healing,
    // alternative power, no idea whats that for
    AltPower,
    AltPrecision,
    AltFerocity,
    AltCriticalChance,
    AltEffectivePower,
    AltCriticalDamage,
    AltDamage,
    // profession specific
    CloneCriticalChance,
    PhantasmCriticalChance,
    PhantasmDamage,
    PhantasmCriticalDamage,
    SiphonBaseCoefficient,
    SiphonDPS,
    SiphonDamage,

    // misc
    StrikeDamage,
    MaxHealth,
    OutgoingHealing,
    AllDamage,
    DamageTaken,
    DamageReduction,
    PowerCoefficient,
    NonCritPowerCoefficient,
    NonCritEffectivePower,
    Power2DPS,
    Power2Coefficient,
    FlatDPS,
    #[default]
    None = 255,
}

impl Attribute {
    pub fn is_primary(&self) -> bool {
        match self {
            Attribute::Power => true,
            Attribute::Precision => true,
            Attribute::Toughness => true,
            Attribute::Vitality => true,
            _ => false,
        }
    }

    pub fn is_secondary(&self) -> bool {
        match self {
            Attribute::Ferocity => true,
            Attribute::ConditionDamage => true,
            Attribute::Expertise => true,
            Attribute::Concentration => true,
            Attribute::HealingPower => true,
            Attribute::AgonyResistance => true,
            _ => false,
        }
    }

    pub fn is_alternative(&self) -> bool {
        match self {
            Attribute::AltPower => true,
            Attribute::AltPrecision => true,
            Attribute::AltFerocity => true,
            Attribute::AltCriticalChance => true,
            Attribute::AltEffectivePower => true,
            Attribute::AltCriticalDamage => true,
            _ => false,
        }
    }

    pub fn is_point_key(&self) -> bool {
        return self.is_primary() || self.is_secondary() || self.is_alternative();
    }

    pub fn get_indicators() -> Vec<Attribute> {
        vec![
            Attribute::Damage,
            Attribute::Survivability,
            Attribute::Healing,
        ]
    }

    pub fn to_stringg(&self) -> &str {
        match self {
            Attribute::Power => "Power",
            Attribute::Precision => "Precision",
            Attribute::Toughness => "Toughness",
            Attribute::Vitality => "Vitality",
            Attribute::Ferocity => "Ferocity",
            Attribute::ConditionDamage => "Condition Damage",
            Attribute::Expertise => "Expertise",
            Attribute::Concentration => "Concentration",
            Attribute::HealingPower => "Healing Power",
            Attribute::AgonyResistance => "Agony Resistance",
            Attribute::CriticalChance => "Critical Chance",
            Attribute::CriticalDamage => "Critical Damage",
            Attribute::ConditionDuration => "Condition Duration",
            Attribute::BoonDuration => "Boon Duration",
            Attribute::Health => "Health",
            Attribute::Armor => "Armor",
            Attribute::AegisDuration => "Aegis Duration",
            Attribute::FuryDuration => "Fury Duration",
            Attribute::MightDuration => "Might Duration",
            Attribute::ProtectionDuration => "Protection Duration",
            Attribute::QuicknessDuration => "Quickness Duration",
            Attribute::RegenerationDuration => "Regeneration Duration",
            Attribute::ResistanceDuration => "Resistance Duration",
            Attribute::ResolutionDuration => "Resolution Duration",
            Attribute::StabilityDuration => "Stability Duration",
            Attribute::SwiftnessDuration => "Swiftness Duration",
            Attribute::VigorDuration => "Vigor Duration",
            Attribute::BleedingDuration => "Bleeding Duration",
            Attribute::BlindDuration => "Blind Duration",
            Attribute::BurningDuration => "Burning Duration",
            Attribute::ChilledDuration => "Chilled Duration",
            Attribute::ConfusionDuration => "Confusion Duration",
            Attribute::CrippledDuration => "Crippled Duration",
            Attribute::FearDuration => "Fear Duration",
            Attribute::ImmobileDuration => "Immobile Duration",
            Attribute::PoisonDuration => "Poison Duration",
            Attribute::SlowDuration => "Slow Duration",
            Attribute::TauntDuration => "Taunt Duration",
            Attribute::TormentDuration => "Torment Duration",
            Attribute::VulnerabilityDuration => "Vulnerability Duration",
            Attribute::WeaknessDuration => "Weakness Duration",
            Attribute::BleedingCoefficient => "Bleeding Coefficient",
            Attribute::BurningCoefficient => "Burning Coefficient",
            Attribute::ConfusionCoefficient => "Confusion Coefficient",
            Attribute::PoisonCoefficient => "Poison Coefficient",
            Attribute::TormentCoefficient => "Torment Coefficient",
            Attribute::BleedingDamage => "Bleeding Damage",
            Attribute::BurningDamage => "Burning Damage",
            Attribute::ConfusionDamage => "Confusion Damage",
            Attribute::PoisonDamage => "Poison Damage",
            Attribute::TormentDamage => "Torment Damage",
            Attribute::EffectivePower => "Effective Power",
            Attribute::EffectiveHealth => "Effective Health",
            Attribute::EffectiveHealing => "Effective Healing",
            Attribute::AltPower => "Alt Power",
            Attribute::AltPrecision => "Alt Precision",
            Attribute::AltFerocity => "Alt Ferocity",
            Attribute::AltCriticalChance => "Alt Critical Chance",
            Attribute::AltEffectivePower => "Alt Effective Power",
            Attribute::AltCriticalDamage => "Alt Critical Damage",
            Attribute::AltDamage => "Alt Damage",
            Attribute::CloneCriticalChance => "Clone Critical Chance",
            Attribute::PhantasmCriticalChance => "Phantasm Critical Chance",
            Attribute::PhantasmDamage => "Phantasm Damage",
            Attribute::PhantasmCriticalDamage => "Phantasm Critical Damage",
            Attribute::SiphonBaseCoefficient => "Siphon Base Coefficient",
            Attribute::SiphonDPS => "Siphon DPS",
            Attribute::SiphonDamage => "Siphon Damage",
            Attribute::StrikeDamage => "Strike Damage",
            Attribute::MaxHealth => "Max Health",
            Attribute::OutgoingHealing => "Outgoing Healing",
            Attribute::AllDamage => "All Damage",
            Attribute::DamageTaken => "Damage Taken",
            Attribute::DamageReduction => "Damage Reduction",
            Attribute::PowerCoefficient => "Power Coefficient",
            Attribute::NonCritPowerCoefficient => "Non Crit Power Coefficient",
            Attribute::NonCritEffectivePower => "Non Crit Effective Power",
            Attribute::Power2DPS => "Power2 DPS",
            Attribute::Power2Coefficient => "Power2 Coefficient",
            Attribute::FlatDPS => "Flat DPS",
            Attribute::None => "None",
            Attribute::Damage => "Damage",
            Attribute::Survivability => "Survivability",
            Attribute::Healing => "Healing",
        }
    }

    // other methods for derived attributes
}

impl fmt::Display for Attribute {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "{}", self.to_stringg())
    }
}

#[derive(Sequence, Debug, Clone, Copy, Default, Serialize_repr, Deserialize_repr)]
#[repr(u8)]
pub enum Affix {
    Custom = 0,
    Berserker = 1,
    Assassin = 2,
    Harrier = 3,
    Commander = 4,
    Minstrel = 5,
    Magi = 6,
    Marauder = 7,
    Cleric = 8,
    Nomad = 9,
    Zealot = 10,
    Viper = 11,
    Sinister = 12,
    Grieving = 13,
    Seraph = 14,
    Marshal = 15,
    Giver = 16,
    Knight = 17,
    Trailblazer = 18,
    Plaguedoctor = 19,
    Carrion = 20,
    Rabid = 21,
    Dire = 22,
    Vigilant = 23,
    Valkyrie = 24,
    Cavalier = 25,
    Celestial = 26,
    Diviner = 27,
    Soldier = 28,
    Sentinel = 29,
    Wanderer = 30,
    Apothecary = 31,
    Shaman = 32,
    Crusader = 33,
    Rampager = 34,
    Settler = 35,
    Bringer = 36,
    Ritualist = 37,
    Dragon = 38,
    #[default]
    None = 255,
}

impl Affix {
    pub fn to_string(&self) -> String {
        match self {
            Affix::Custom => "Custom".to_string(),
            Affix::Berserker => "Berserker".to_string(),
            Affix::Assassin => "Assassin".to_string(),
            Affix::Harrier => "Harrier".to_string(),
            Affix::Commander => "Commander".to_string(),
            Affix::Minstrel => "Minstrel".to_string(),
            Affix::Magi => "Magi".to_string(),
            Affix::Marauder => "Marauder".to_string(),
            Affix::Cleric => "Cleric".to_string(),
            Affix::Nomad => "Nomad".to_string(),
            Affix::Zealot => "Zealot".to_string(),
            Affix::Viper => "Viper".to_string(),
            Affix::Sinister => "Sinister".to_string(),
            Affix::Grieving => "Grieving".to_string(),
            Affix::Seraph => "Seraph".to_string(),
            Affix::Marshal => "Marshal".to_string(),
            Affix::Giver => "Giver".to_string(),
            Affix::Knight => "Knight".to_string(),
            Affix::Trailblazer => "Trailblazer".to_string(),
            Affix::Plaguedoctor => "Plaguedoctor".to_string(),
            Affix::Carrion => "Carrion".to_string(),
            Affix::Rabid => "Rabid".to_string(),
            Affix::Dire => "Dire".to_string(),
            Affix::Vigilant => "Vigilant".to_string(),
            Affix::Valkyrie => "Valkyrie".to_string(),
            Affix::Cavalier => "Cavalier".to_string(),
            Affix::Celestial => "Celestial".to_string(),
            Affix::Diviner => "Diviner".to_string(),
            Affix::Soldier => "Soldier".to_string(),
            Affix::Sentinel => "Sentinel".to_string(),
            Affix::Wanderer => "Wanderer".to_string(),
            Affix::Apothecary => "Apothecary".to_string(),
            Affix::Shaman => "Shaman".to_string(),
            Affix::Crusader => "Crusader".to_string(),
            Affix::Rampager => "Rampager".to_string(),
            Affix::Settler => "Settler".to_string(),
            Affix::Bringer => "Bringer".to_string(),
            Affix::Ritualist => "Ritualist".to_string(),
            Affix::Dragon => "Dragon".to_string(),
            Affix::None => "".to_string(),
        }
    }

    pub fn from_number(num: i8) -> Option<Affix> {
        for variant in all::<Affix>().collect::<Vec<_>>() {
            if variant as i8 == num {
                return Some(variant);
            }
        }
        None
    }

    // implement copy trait
    pub fn to_number(&self) -> i8 {
        *self as i8
    }
}
