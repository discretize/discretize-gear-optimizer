use std::{default, fmt, vec};

use enum_iterator::{all, Sequence};
use web_sys::console;

#[derive(Debug, Default)]
pub struct Stats {
    major: u32,
    minor: u32,
}

#[derive(Debug, Default)]
pub struct Slot {
    pub affix: Affix,
}

#[derive(Debug, Default)]
pub struct Character {
    pub stats: CharacterStats,
    pub slots: [Slot; 14],
}

impl Character {
    pub fn clear(&mut self) {
        self.stats.clear();
        self.slots.iter_mut().for_each(|slot| {
            slot.affix = Affix::default();
        });
    }

    pub fn set_affix(&mut self, index: usize, affix: Affix) {
        self.slots[index].affix = affix;
    }
}

#[derive(Default, Debug)] // init with 0
pub struct CharacterStats {
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
impl CharacterStats {
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
            Attribute::None => {}
        }
    }
}

impl fmt::Display for CharacterStats {
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
    Ascended = 0,
    Exotic = 1,
}

#[derive(Debug, Default)]
pub enum Slots {
    Helm = 0,
    Shoulders = 1,
    Chest = 2,
    Gloves = 3,
    Leggings = 4,
    Boots = 5,
    Amulet = 6,
    Ring = 7,
    Accessory = 8,
    BackItem = 9,
    OneHandedWeapon = 10,
    TwoHandedWeapon = 11,
    #[default]
    None = -1,
}

pub fn slot_from_indexed_array(index: usize) -> Slots {
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
        12 => Slots::OneHandedWeapon,
        13 => Slots::TwoHandedWeapon,
        _ => panic!("Invalid index for Slots enum"),
    }
}

pub enum AffixTypes {
    Triple,
    Quadruple,
    Celestial,
}
impl AffixTypes {
    pub fn get_affix(&self, slot: Slots, _rarity: Rarity) -> Stats {
        // todo implement match for rarity
        match self {
            AffixTypes::Triple => match slot {
                Slots::None => Stats { major: 0, minor: 0 },
                Slots::Helm => Stats {
                    major: 60,
                    minor: 43,
                },
                Slots::Shoulders => Stats {
                    major: 45,
                    minor: 32,
                },
                Slots::Chest => Stats {
                    major: 134,
                    minor: 96,
                },
                Slots::Gloves => Stats {
                    major: 45,
                    minor: 32,
                },
                Slots::Leggings => Stats {
                    major: 90,
                    minor: 64,
                },
                Slots::Boots => Stats {
                    major: 45,
                    minor: 32,
                },
                Slots::Amulet => Stats {
                    major: 145,
                    minor: 100,
                },
                Slots::Ring => Stats {
                    major: 115,
                    minor: 79,
                },
                Slots::Accessory => Stats {
                    major: 100,
                    minor: 68,
                },
                Slots::BackItem => Stats {
                    major: 55,
                    minor: 36,
                },
                Slots::OneHandedWeapon => Stats {
                    major: 120,
                    minor: 85,
                },
                Slots::TwoHandedWeapon => Stats {
                    major: 239,
                    minor: 171,
                },
            },
            AffixTypes::Quadruple => match slot {
                Slots::None => Stats { major: 0, minor: 0 },
                Slots::Helm => Stats {
                    major: 51,
                    minor: 28,
                },
                Slots::Shoulders => Stats {
                    major: 38,
                    minor: 21,
                },
                Slots::Chest => Stats {
                    major: 114,
                    minor: 63,
                },
                Slots::Gloves => Stats {
                    major: 38,
                    minor: 21,
                },
                Slots::Leggings => Stats {
                    major: 77,
                    minor: 42,
                },
                Slots::Boots => Stats {
                    major: 38,
                    minor: 21,
                },
                Slots::Amulet => Stats {
                    major: 122,
                    minor: 66,
                },
                Slots::Ring => Stats {
                    major: 97,
                    minor: 52,
                },
                Slots::Accessory => Stats {
                    major: 84,
                    minor: 45,
                },
                Slots::BackItem => Stats {
                    major: 46,
                    minor: 24,
                },
                Slots::OneHandedWeapon => Stats {
                    major: 102,
                    minor: 56,
                },
                Slots::TwoHandedWeapon => Stats {
                    major: 205,
                    minor: 113,
                },
            },
            AffixTypes::Celestial => match slot {
                Slots::None => Stats { major: 0, minor: 0 },
                Slots::Helm => Stats {
                    major: 28,
                    minor: 28,
                },
                Slots::Shoulders => Stats {
                    major: 21,
                    minor: 21,
                },
                Slots::Chest => Stats {
                    major: 63,
                    minor: 63,
                },
                Slots::Gloves => Stats {
                    major: 21,
                    minor: 21,
                },
                Slots::Leggings => Stats {
                    major: 42,
                    minor: 42,
                },
                Slots::Boots => Stats {
                    major: 21,
                    minor: 21,
                },
                Slots::Amulet => Stats {
                    major: 66,
                    minor: 66,
                },
                Slots::Ring => Stats {
                    major: 54,
                    minor: 54,
                },
                Slots::Accessory => Stats {
                    major: 47,
                    minor: 47,
                },
                Slots::BackItem => Stats {
                    major: 26,
                    minor: 26,
                },
                Slots::OneHandedWeapon => Stats {
                    major: 56,
                    minor: 56,
                },
                Slots::TwoHandedWeapon => Stats {
                    major: 113,
                    minor: 113,
                },
            },
        }
    }
}

#[derive(Debug)]
pub enum Attribute {
    Primary(PrimaryAttributeName),
    Secondary(SecondaryAttributeName),
    None,
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

    pub fn type_name(&self) -> AffixTypes {
        match self {
            Affix::Berserker => AffixTypes::Triple,
            Affix::Assassin => AffixTypes::Triple,
            // ... match other variants
            default => AffixTypes::Triple,
        }
    }

    pub fn category(&self) -> &'static str {
        match self {
            Affix::Berserker => "Power DPS",
            Affix::Assassin => "Power DPS",
            // ... match other variants
            default => "Unknown",
        }
    }

    pub fn major_bonuses(&self) -> Vec<Attribute> {
        match self {
            Affix::None => vec![],
            Affix::Custom => vec![],
            Affix::Berserker => vec![Attribute::Primary(PrimaryAttributeName::Power)],
            Affix::Assassin => vec![Attribute::Primary(PrimaryAttributeName::Precision)],
            Affix::Harrier => vec![Attribute::Primary(PrimaryAttributeName::Power)],
            Affix::Commander => vec![
                Attribute::Primary(PrimaryAttributeName::Power),
                Attribute::Primary(PrimaryAttributeName::Precision),
            ],
            Affix::Minstrel => vec![
                Attribute::Primary(PrimaryAttributeName::Toughness),
                Attribute::Secondary(SecondaryAttributeName::HealingPower),
            ],
            Affix::Magi => vec![Attribute::Primary(PrimaryAttributeName::Precision)],
            Affix::Marauder => vec![
                Attribute::Primary(PrimaryAttributeName::Power),
                Attribute::Primary(PrimaryAttributeName::Precision),
            ],
            Affix::Cleric => vec![Attribute::Secondary(SecondaryAttributeName::HealingPower)],
            Affix::Nomad => vec![Attribute::Primary(PrimaryAttributeName::Toughness)],
            Affix::Zealot => vec![Attribute::Primary(PrimaryAttributeName::Power)],
            Affix::Viper => vec![
                Attribute::Secondary(SecondaryAttributeName::ConditionDamage),
                Attribute::Primary(PrimaryAttributeName::Power),
            ],
            Affix::Sinister => vec![Attribute::Secondary(
                SecondaryAttributeName::ConditionDamage,
            )],
            Affix::Grieving => vec![
                Attribute::Primary(PrimaryAttributeName::Power),
                Attribute::Secondary(SecondaryAttributeName::ConditionDamage),
            ],
            Affix::Seraph => vec![
                Attribute::Primary(PrimaryAttributeName::Precision),
                Attribute::Secondary(SecondaryAttributeName::ConditionDamage),
            ],
            Affix::Marshal => vec![
                Attribute::Primary(PrimaryAttributeName::Power),
                Attribute::Secondary(SecondaryAttributeName::HealingPower),
            ],
            Affix::Giver => vec![Attribute::Primary(PrimaryAttributeName::Toughness)],
            Affix::Knight => vec![Attribute::Primary(PrimaryAttributeName::Toughness)],
            Affix::Trailblazer => vec![
                Attribute::Secondary(SecondaryAttributeName::ConditionDamage),
                Attribute::Primary(PrimaryAttributeName::Toughness),
            ],
            Affix::Plaguedoctor => vec![
                Attribute::Primary(PrimaryAttributeName::Vitality),
                Attribute::Secondary(SecondaryAttributeName::ConditionDamage),
            ],
            Affix::Carrion => vec![Attribute::Secondary(
                SecondaryAttributeName::ConditionDamage,
            )],
            Affix::Rabid => vec![Attribute::Secondary(
                SecondaryAttributeName::ConditionDamage,
            )],
            Affix::Dire => vec![Attribute::Secondary(
                SecondaryAttributeName::ConditionDamage,
            )],
            Affix::Vigilant => vec![
                Attribute::Primary(PrimaryAttributeName::Toughness),
                Attribute::Primary(PrimaryAttributeName::Power),
            ],
            Affix::Valkyrie => vec![Attribute::Primary(PrimaryAttributeName::Power)],
            Affix::Cavalier => vec![Attribute::Primary(PrimaryAttributeName::Toughness)],
            Affix::Celestial => vec![
                Attribute::Primary(PrimaryAttributeName::Power),
                Attribute::Primary(PrimaryAttributeName::Precision),
                Attribute::Primary(PrimaryAttributeName::Toughness),
                Attribute::Primary(PrimaryAttributeName::Vitality),
            ],
            Affix::Diviner => vec![
                Attribute::Primary(PrimaryAttributeName::Power),
                Attribute::Secondary(SecondaryAttributeName::Concentration),
            ],
            Affix::Soldier => vec![Attribute::Primary(PrimaryAttributeName::Power)],
            Affix::Sentinel => vec![Attribute::Primary(PrimaryAttributeName::Vitality)],
            Affix::Wanderer => vec![
                Attribute::Primary(PrimaryAttributeName::Power),
                Attribute::Primary(PrimaryAttributeName::Vitality),
            ],
            Affix::Apothecary => vec![Attribute::Secondary(SecondaryAttributeName::HealingPower)],
            Affix::Shaman => vec![Attribute::Primary(PrimaryAttributeName::Vitality)],
            Affix::Crusader => vec![
                Attribute::Primary(PrimaryAttributeName::Power),
                Attribute::Primary(PrimaryAttributeName::Toughness),
            ],
            Affix::Rampager => vec![Attribute::Primary(PrimaryAttributeName::Precision)],
            Affix::Settler => vec![Attribute::Primary(PrimaryAttributeName::Toughness)],
            Affix::Bringer => vec![Attribute::Secondary(SecondaryAttributeName::Expertise)],
            Affix::Ritualist => vec![
                Attribute::Primary(PrimaryAttributeName::Vitality),
                Attribute::Secondary(SecondaryAttributeName::ConditionDamage),
            ],
            Affix::Dragon => vec![
                Attribute::Primary(PrimaryAttributeName::Power),
                Attribute::Secondary(SecondaryAttributeName::Ferocity),
            ],
        }
    }

    pub fn minor_bonuses(&self) -> Vec<Attribute> {
        match self {
            Affix::None => vec![],
            Affix::Custom => vec![],
            Affix::Berserker => vec![
                Attribute::Primary(PrimaryAttributeName::Precision),
                Attribute::Secondary(SecondaryAttributeName::Ferocity),
            ],
            Affix::Assassin => vec![
                Attribute::Primary(PrimaryAttributeName::Power),
                Attribute::Secondary(SecondaryAttributeName::Ferocity),
            ],
            Affix::Harrier => vec![
                Attribute::Secondary(SecondaryAttributeName::HealingPower),
                Attribute::Secondary(SecondaryAttributeName::Concentration),
            ],
            Affix::Commander => vec![
                Attribute::Primary(PrimaryAttributeName::Toughness),
                Attribute::Secondary(SecondaryAttributeName::Concentration),
            ],
            Affix::Minstrel => vec![
                Attribute::Primary(PrimaryAttributeName::Vitality),
                Attribute::Secondary(SecondaryAttributeName::Concentration),
            ],
            Affix::Magi => vec![
                Attribute::Primary(PrimaryAttributeName::Vitality),
                Attribute::Primary(PrimaryAttributeName::Precision),
            ],
            Affix::Marauder => vec![
                Attribute::Primary(PrimaryAttributeName::Vitality),
                Attribute::Secondary(SecondaryAttributeName::Ferocity),
            ],
            Affix::Cleric => vec![
                Attribute::Primary(PrimaryAttributeName::Power),
                Attribute::Primary(PrimaryAttributeName::Toughness),
            ],
            Affix::Nomad => vec![
                Attribute::Primary(PrimaryAttributeName::Vitality),
                Attribute::Secondary(SecondaryAttributeName::HealingPower),
            ],
            Affix::Zealot => vec![
                Attribute::Primary(PrimaryAttributeName::Precision),
                Attribute::Secondary(SecondaryAttributeName::HealingPower),
            ],
            Affix::Viper => vec![
                Attribute::Primary(PrimaryAttributeName::Precision),
                Attribute::Secondary(SecondaryAttributeName::Expertise),
            ],
            Affix::Sinister => vec![
                Attribute::Primary(PrimaryAttributeName::Power),
                Attribute::Primary(PrimaryAttributeName::Precision),
            ],
            Affix::Grieving => vec![
                Attribute::Primary(PrimaryAttributeName::Precision),
                Attribute::Secondary(SecondaryAttributeName::Ferocity),
            ],
            Affix::Seraph => vec![
                Attribute::Secondary(SecondaryAttributeName::Concentration),
                Attribute::Secondary(SecondaryAttributeName::HealingPower),
            ],
            Affix::Marshal => vec![
                Attribute::Primary(PrimaryAttributeName::Precision),
                Attribute::Secondary(SecondaryAttributeName::ConditionDamage),
            ],
            Affix::Giver => vec![
                Attribute::Secondary(SecondaryAttributeName::Concentration),
                Attribute::Secondary(SecondaryAttributeName::HealingPower),
            ],
            Affix::Knight => vec![
                Attribute::Primary(PrimaryAttributeName::Power),
                Attribute::Primary(PrimaryAttributeName::Precision),
            ],
            Affix::Trailblazer => vec![
                Attribute::Primary(PrimaryAttributeName::Vitality),
                Attribute::Secondary(SecondaryAttributeName::Expertise),
            ],
            Affix::Plaguedoctor => vec![
                Attribute::Secondary(SecondaryAttributeName::Concentration),
                Attribute::Secondary(SecondaryAttributeName::HealingPower),
            ],
            Affix::Carrion => vec![
                Attribute::Primary(PrimaryAttributeName::Power),
                Attribute::Primary(PrimaryAttributeName::Vitality),
            ],
            Affix::Rabid => vec![
                Attribute::Primary(PrimaryAttributeName::Precision),
                Attribute::Secondary(SecondaryAttributeName::ConditionDamage),
            ],
            Affix::Dire => vec![
                Attribute::Primary(PrimaryAttributeName::Vitality),
                Attribute::Primary(PrimaryAttributeName::Toughness),
            ],
            Affix::Vigilant => vec![
                Attribute::Secondary(SecondaryAttributeName::Expertise),
                Attribute::Secondary(SecondaryAttributeName::Concentration),
            ],
            Affix::Valkyrie => vec![
                Attribute::Primary(PrimaryAttributeName::Vitality),
                Attribute::Secondary(SecondaryAttributeName::Ferocity),
            ],
            Affix::Cavalier => vec![
                Attribute::Primary(PrimaryAttributeName::Power),
                Attribute::Secondary(SecondaryAttributeName::Ferocity),
            ],
            Affix::Celestial => vec![
                Attribute::Secondary(SecondaryAttributeName::Ferocity),
                Attribute::Secondary(SecondaryAttributeName::ConditionDamage),
                Attribute::Secondary(SecondaryAttributeName::HealingPower),
                Attribute::Secondary(SecondaryAttributeName::Concentration),
                Attribute::Secondary(SecondaryAttributeName::Expertise),
            ],
            Affix::Diviner => vec![
                Attribute::Secondary(SecondaryAttributeName::Ferocity),
                Attribute::Secondary(SecondaryAttributeName::Ferocity),
            ],
            Affix::Soldier => vec![
                Attribute::Primary(PrimaryAttributeName::Vitality),
                Attribute::Primary(PrimaryAttributeName::Toughness),
            ],
            Affix::Sentinel => vec![
                Attribute::Primary(PrimaryAttributeName::Power),
                Attribute::Primary(PrimaryAttributeName::Toughness),
            ],
            Affix::Wanderer => vec![
                Attribute::Primary(PrimaryAttributeName::Toughness),
                Attribute::Secondary(SecondaryAttributeName::Concentration),
            ],
            Affix::Apothecary => vec![
                Attribute::Primary(PrimaryAttributeName::Toughness),
                Attribute::Secondary(SecondaryAttributeName::ConditionDamage),
            ],
            Affix::Shaman => vec![
                Attribute::Secondary(SecondaryAttributeName::HealingPower),
                Attribute::Secondary(SecondaryAttributeName::ConditionDamage),
            ],
            Affix::Crusader => vec![
                Attribute::Secondary(SecondaryAttributeName::Ferocity),
                Attribute::Secondary(SecondaryAttributeName::HealingPower),
            ],
            Affix::Rampager => vec![
                Attribute::Primary(PrimaryAttributeName::Power),
                Attribute::Secondary(SecondaryAttributeName::ConditionDamage),
            ],
            Affix::Settler => vec![
                Attribute::Secondary(SecondaryAttributeName::ConditionDamage),
                Attribute::Secondary(SecondaryAttributeName::HealingPower),
            ],
            Affix::Bringer => vec![
                Attribute::Primary(PrimaryAttributeName::Precision),
                Attribute::Primary(PrimaryAttributeName::Vitality),
            ],
            Affix::Ritualist => vec![
                Attribute::Primary(PrimaryAttributeName::Precision),
                Attribute::Secondary(SecondaryAttributeName::Expertise),
                Attribute::Secondary(SecondaryAttributeName::Concentration),
            ],
            Affix::Dragon => vec![
                Attribute::Primary(PrimaryAttributeName::Precision),
                Attribute::Primary(PrimaryAttributeName::Vitality),
            ],
        }
    }
}

// new function - should be efficient, no memory is allocated
pub fn add_stats(character: &mut Character, affix: Affix, slot: Slots, rarity: Rarity) {
    let affix_type = affix.type_name();
    // let stats = affix_type.get_affix(slot, rarity);

    match affix_type {
        AffixTypes::Triple => match slot {
            Slots::Helm => match affix {
                Affix::Custom => {}
                Affix::Berserker => match rarity {
                    Rarity::Ascended => {
                        character.stats.add_attribute_value(
                            &Attribute::Primary(PrimaryAttributeName::Power),
                            60,
                        );
                        character.stats.add_attribute_value(
                            &Attribute::Primary(PrimaryAttributeName::Precision),
                            43,
                        );
                        character.stats.add_attribute_value(
                            &Attribute::Secondary(SecondaryAttributeName::Ferocity),
                            43,
                        );
                    }
                    Rarity::Exotic => todo!(),
                },
                Affix::Assassin => match rarity {
                    Rarity::Ascended => {
                        character.stats.add_attribute_value(
                            &Attribute::Primary(PrimaryAttributeName::Precision),
                            60,
                        );
                        character.stats.add_attribute_value(
                            &Attribute::Primary(PrimaryAttributeName::Power),
                            43,
                        );
                        character.stats.add_attribute_value(
                            &Attribute::Secondary(SecondaryAttributeName::Ferocity),
                            43,
                        );
                    }
                    Rarity::Exotic => todo!(),
                },
                Affix::Harrier => todo!(),
                Affix::Commander => todo!(),
                Affix::Minstrel => todo!(),
                Affix::Magi => todo!(),
                Affix::Marauder => todo!(),
                Affix::Cleric => todo!(),
                Affix::Nomad => todo!(),
                Affix::Zealot => todo!(),
                Affix::Viper => todo!(),
                Affix::Sinister => todo!(),
                Affix::Grieving => todo!(),
                Affix::Seraph => todo!(),
                Affix::Marshal => todo!(),
                Affix::Giver => todo!(),
                Affix::Knight => todo!(),
                Affix::Trailblazer => todo!(),
                Affix::Plaguedoctor => todo!(),
                Affix::Carrion => todo!(),
                Affix::Rabid => todo!(),
                Affix::Dire => todo!(),
                Affix::Vigilant => todo!(),
                Affix::Valkyrie => todo!(),
                Affix::Cavalier => todo!(),
                Affix::Celestial => todo!(),
                Affix::Diviner => todo!(),
                Affix::Soldier => todo!(),
                Affix::Sentinel => todo!(),
                Affix::Wanderer => todo!(),
                Affix::Apothecary => todo!(),
                Affix::Shaman => todo!(),
                Affix::Crusader => todo!(),
                Affix::Rampager => todo!(),
                Affix::Settler => todo!(),
                Affix::Bringer => todo!(),
                Affix::Ritualist => todo!(),
                Affix::Dragon => todo!(),
                Affix::None => todo!(),
            },
            Slots::Shoulders => todo!(),
            Slots::Chest => todo!(),
            Slots::Gloves => todo!(),
            Slots::Leggings => todo!(),
            Slots::Boots => todo!(),
            Slots::Amulet => todo!(),
            Slots::Ring => todo!(),
            Slots::Accessory => todo!(),
            Slots::BackItem => todo!(),
            Slots::OneHandedWeapon => todo!(),
            Slots::TwoHandedWeapon => todo!(),
            Slots::None => todo!(),
        },
        AffixTypes::Quadruple => todo!(),
        AffixTypes::Celestial => todo!(),
    }
}
