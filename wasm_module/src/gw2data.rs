use std::fmt;

use enum_iterator::{all, Sequence};
use web_sys::console;

#[derive(Debug, Default)]
pub struct Slot {
    pub affix: Affix,
}

#[derive(Debug, Default)]
pub struct Character {
    pub attributes: AttributesCollection,
    pub slots: [Slot; 14],
}

impl Character {
    pub fn clear(&mut self) {
        self.attributes.clear();
        self.slots.iter_mut().for_each(|slot| {
            slot.affix = Affix::default();
        });
    }

    pub fn set_affix(&mut self, index: usize, affix: Affix) {
        self.slots[index].affix = affix;
    }
}

#[derive(Default, Debug)] // init with 0
pub struct AttributesCollection {
    pub power: u32,
    pub precision: u32,
    pub toughness: u32,
    pub vitality: u32,
    pub condition_damage: u32,
    pub healing_power: u32,
    pub boon_duration: u32,
    pub ferocity: u32,
    pub expertise: u32,
    pub concentration: u32,
}
impl AttributesCollection {
    pub fn clear(&mut self) {
        self.power = 0;
        self.precision = 0;
        self.toughness = 0;
        self.vitality = 0;
        self.condition_damage = 0;
        self.healing_power = 0;
        self.boon_duration = 0;
        self.ferocity = 0;
        self.expertise = 0;
        self.concentration = 0;
    }

    pub fn add_attribute_value(&mut self, attribute: &Attribute, value: u32) {
        match attribute {
            Attribute::Primary(primary_attr) => match primary_attr {
                PrimaryAttributeName::Power => self.power += value,
                PrimaryAttributeName::Precision => self.precision += value,
                PrimaryAttributeName::Toughness => self.toughness += value,
                PrimaryAttributeName::Vitality => self.vitality += value,
            },
            Attribute::Secondary(secondary_attr) => match secondary_attr {
                SecondaryAttributeName::Ferocity => self.ferocity += value,
                SecondaryAttributeName::ConditionDamage => self.condition_damage += value,
                SecondaryAttributeName::Expertise => self.expertise += value,
                SecondaryAttributeName::Concentration => self.concentration += value,
                SecondaryAttributeName::HealingPower => self.healing_power += value,
                SecondaryAttributeName::AgonyResistance => {
                    // Handle the case when AgonyResistance is requested
                    // You can either return a default value or handle it separately
                    // depending on your use case.
                    // For now, let's return 0 as a default value.
                    console::log_1(&"AgonyResistance is not implemented yet".into());
                }
            },
        }
    }
}

impl fmt::Display for AttributesCollection {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(
            f,
            "CharacterStats:\n\
            Power: {}\n\
            Precision: {}\n\
            Toughness: {}\n\
            Vitality: {}\n\
            Condition Damage: {}\n\
            Healing Power: {}\n\
            Boon Duration: {}\n\
            Ferocity: {}\n\
            Expertise: {}\n\
            Concentration: {}",
            self.power,
            self.precision,
            self.toughness,
            self.vitality,
            self.condition_damage,
            self.healing_power,
            self.boon_duration,
            self.ferocity,
            self.expertise,
            self.concentration,
        )
    }
}

/**
 * BEGIN ENUMS
 */
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

#[derive(Debug)]
pub enum Attribute {
    Primary(PrimaryAttributeName),
    Secondary(SecondaryAttributeName),
}

#[derive(Debug)]
pub enum PrimaryAttributeName {
    Power,
    Precision,
    Toughness,
    Vitality,
}

#[derive(Debug)]
pub enum SecondaryAttributeName {
    Ferocity,
    ConditionDamage,
    Expertise,
    Concentration,
    HealingPower,
    AgonyResistance,
}

#[derive(Sequence, Debug, Clone, Copy, Default)]
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
    None = -1,
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
