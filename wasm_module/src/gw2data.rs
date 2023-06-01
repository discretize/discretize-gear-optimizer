#![allow(dead_code)]
use std::fmt;

use enum_iterator::{all, Sequence};
use serde::{Deserialize, Serialize};
use serde_json::Value;
use serde_repr::{Deserialize_repr, Serialize_repr};
use web_sys::console;

// BEGIN combination related

#[allow(non_snake_case)] // must allow since this comes from JS
#[derive(Debug, Serialize, Deserialize)]
pub struct Combination {
    pub profession: String,
    pub specialization: String,
    pub weaponType: WeaponHandednessType,
    pub forcedAffixes: [Option<u8>; 14],
    pub rankby: Indicator,
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
    pub affixStatsArray: [Vec<Vec<(Attribute, u32)>>; 14],
    pub baseAttributes: Value, // generic type
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

#[derive(Debug, Deserialize_repr, Serialize_repr)]
#[repr(u8)]
pub enum Indicator {
    Damage,
    Survivability,
    Healing,
}

impl fmt::Display for Indicator {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        match self {
            Indicator::Damage => write!(f, "Damage"),
            Indicator::Survivability => write!(f, "Survivability"),
            Indicator::Healing => write!(f, "Healing"),
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
    damageMultiplier: Value,
    damageMultiplierBreakdown: Value,
    buff: Vec<(String, f32)>, // todo fix these String typings, they are supposed to be Attributes
    convert: Vec<(String, Vec<(String, f32)>)>, // todo fix these String typings
    convertAfterBuffs: Vec<(String, Vec<(String, f32)>)>, // todo fix these String typings
}

// END combination related

// BEGIN character related

#[derive(Debug)]
pub struct Character {
    // attributes indexed by Attribute enum
    // array instead of struct since this is muuuuuuuuch faster than matching with enum
    pub base_attributes: [u32; 57],
    pub slots: [Affix; 14],
}

impl Character {
    pub fn clear(&mut self) {
        //self.base_attributes.clear();

        self.base_attributes.iter_mut().for_each(|attr| {
            *attr = 0;
        });

        // clear slots
        self.slots.iter_mut().for_each(|slot| {
            *slot = Affix::default();
        });
    }

    pub fn set_affix(&mut self, index: usize, affix: Affix) {
        self.slots[index] = affix;
    }

    pub fn add_attributes(&mut self, attributes: &Vec<(Attribute, u32)>) {
        attributes.iter().for_each(|(attr, value)| {
            self.base_attributes[*attr as usize] += value;
        });
    }

    pub fn get_attribute(&self, attr: Attribute) -> u32 {
        self.base_attributes[attr as usize]
    }
}

impl Default for Character {
    fn default() -> Self {
        Self {
            base_attributes: [0; 57],
            slots: [Affix::default(); 14],
        }
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

#[derive(Debug, Serialize_repr, Deserialize_repr, Default, Clone, Copy)]
#[repr(u8)]
pub enum Attribute {
    Power,
    Precision,
    Toughness,
    Vitality,
    Ferocity,
    ConditionDamage,
    Expertise,
    Concentration,
    HealingPower,
    AgonyResistance,
    CriticalChance,
    CriticalDamage,
    ConditionDuration,
    BoonDuration,
    Health,
    Armor,
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
    Bleeding,
    Burning,
    Confusion,
    Poison,
    Torment,
    BleedingDamage,
    BurningDamage,
    ConfusionDamage,
    PoisonDamage,
    TormentDamage,
    EffectivePower,
    EffectiveHealth,
    EffectiveHealing,
    Damage,
    Survivability,
    Healing,
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

    pub fn get_indicators() -> Vec<Attribute> {
        vec![
            Attribute::Damage,
            Attribute::Survivability,
            Attribute::Healing,
        ]
    }

    pub fn count() -> usize {
        return 57;
    }

    // other methods for derived attributes
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
