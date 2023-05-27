use enum_iterator::{all, Sequence};

/**
 * EXPERIMENTAL STRCUCTS
 */
pub struct StatCollection {
    helm: ItemStats,
    shoulders: ItemStats,
    chest: ItemStats,
    gloves: ItemStats,
    leggings: ItemStats,
    boots: ItemStats,
    amulet: ItemStats,
    ring: ItemStats,
    accessory: ItemStats,
    back_item: ItemStats,
    one_handed_weapon: ItemStats,
    two_handed_weapon: ItemStats,
}

pub struct ItemStats {
    triple: Stats,
    quadruple: Stats,
    celestial: Stats,
}

pub struct Stats {
    major: i32,
    minor: i32,
}
pub fn ascended_item() -> StatCollection {
    return StatCollection {
        helm: ItemStats {
            triple: Stats {
                major: 63,
                minor: 45,
            },
            quadruple: Stats {
                major: 54,
                minor: 30,
            },
            celestial: Stats {
                major: 30,
                minor: 30,
            },
        },
        shoulders: ItemStats {
            triple: Stats {
                major: 47,
                minor: 34,
            },
            quadruple: Stats {
                major: 40,
                minor: 22,
            },
            celestial: Stats {
                major: 22,
                minor: 22,
            },
        },
        chest: ItemStats {
            triple: Stats {
                major: 141,
                minor: 101,
            },
            quadruple: Stats {
                major: 121,
                minor: 67,
            },
            celestial: Stats {
                major: 67,
                minor: 67,
            },
        },
        gloves: ItemStats {
            triple: Stats {
                major: 47,
                minor: 34,
            },
            quadruple: Stats {
                major: 40,
                minor: 22,
            },
            celestial: Stats {
                major: 22,
                minor: 22,
            },
        },
        leggings: ItemStats {
            triple: Stats {
                major: 94,
                minor: 67,
            },
            quadruple: Stats {
                major: 81,
                minor: 44,
            },
            celestial: Stats {
                major: 44,
                minor: 44,
            },
        },
        boots: ItemStats {
            triple: Stats {
                major: 47,
                minor: 34,
            },
            quadruple: Stats {
                major: 40,
                minor: 22,
            },
            celestial: Stats {
                major: 22,
                minor: 22,
            },
        },
        amulet: ItemStats {
            triple: Stats {
                major: 157,
                minor: 108,
            },
            quadruple: Stats {
                major: 133,
                minor: 71,
            },
            celestial: Stats {
                major: 72,
                minor: 72,
            },
        },
        ring: ItemStats {
            triple: Stats {
                major: 126,
                minor: 85,
            },
            quadruple: Stats {
                major: 106,
                minor: 56,
            },
            celestial: Stats {
                major: 57,
                minor: 57,
            },
        },
        accessory: ItemStats {
            triple: Stats {
                major: 110,
                minor: 74,
            },
            quadruple: Stats {
                major: 92,
                minor: 49,
            },
            celestial: Stats {
                major: 50,
                minor: 50,
            },
        },
        back_item: ItemStats {
            triple: Stats {
                major: 63,
                minor: 40,
            },
            quadruple: Stats {
                major: 52,
                minor: 27,
            },
            celestial: Stats {
                major: 28,
                minor: 28,
            },
        },
        one_handed_weapon: ItemStats {
            triple: Stats {
                major: 125,
                minor: 90,
            },
            quadruple: Stats {
                major: 108,
                minor: 59,
            },
            celestial: Stats {
                major: 59,
                minor: 59,
            },
        },
        two_handed_weapon: ItemStats {
            triple: Stats {
                major: 251,
                minor: 179,
            },
            quadruple: Stats {
                major: 215,
                minor: 118,
            },
            celestial: Stats {
                major: 118,
                minor: 118,
            },
        },
    };
}

pub fn exotic_item() -> StatCollection {
    return StatCollection {
        helm: ItemStats {
            triple: Stats {
                major: 60,
                minor: 43,
            },
            quadruple: Stats {
                major: 51,
                minor: 28,
            },
            celestial: Stats {
                major: 28,
                minor: 28,
            },
        },
        shoulders: ItemStats {
            triple: Stats {
                major: 45,
                minor: 32,
            },
            quadruple: Stats {
                major: 38,
                minor: 21,
            },
            celestial: Stats {
                major: 21,
                minor: 21,
            },
        },
        chest: ItemStats {
            triple: Stats {
                major: 134,
                minor: 96,
            },
            quadruple: Stats {
                major: 115,
                minor: 63,
            },
            celestial: Stats {
                major: 63,
                minor: 63,
            },
        },
        gloves: ItemStats {
            triple: Stats {
                major: 45,
                minor: 32,
            },
            quadruple: Stats {
                major: 38,
                minor: 21,
            },
            celestial: Stats {
                major: 21,
                minor: 21,
            },
        },
        leggings: ItemStats {
            triple: Stats {
                major: 90,
                minor: 64,
            },
            quadruple: Stats {
                major: 77,
                minor: 42,
            },
            celestial: Stats {
                major: 42,
                minor: 42,
            },
        },
        boots: ItemStats {
            triple: Stats {
                major: 45,
                minor: 32,
            },
            quadruple: Stats {
                major: 38,
                minor: 21,
            },
            celestial: Stats {
                major: 21,
                minor: 21,
            },
        },
        amulet: ItemStats {
            triple: Stats {
                major: 145,
                minor: 100,
            },
            quadruple: Stats {
                major: 122,
                minor: 66,
            },
            celestial: Stats {
                major: 68,
                minor: 68,
            },
        },
        ring: ItemStats {
            triple: Stats {
                major: 115,
                minor: 79,
            },
            quadruple: Stats {
                major: 97,
                minor: 52,
            },
            celestial: Stats {
                major: 54,
                minor: 54,
            },
        },
        accessory: ItemStats {
            triple: Stats {
                major: 100,
                minor: 68,
            },
            quadruple: Stats {
                major: 84,
                minor: 45,
            },
            celestial: Stats {
                major: 47,
                minor: 47,
            },
        },
        back_item: ItemStats {
            triple: Stats {
                major: 55,
                minor: 36,
            },
            quadruple: Stats {
                major: 46,
                minor: 24,
            },
            celestial: Stats {
                major: 26,
                minor: 26,
            },
        },
        one_handed_weapon: ItemStats {
            triple: Stats {
                major: 120,
                minor: 85,
            },
            quadruple: Stats {
                major: 102,
                minor: 56,
            },
            celestial: Stats {
                major: 56,
                minor: 56,
            },
        },
        two_handed_weapon: ItemStats {
            triple: Stats {
                major: 239,
                minor: 171,
            },
            quadruple: Stats {
                major: 205,
                minor: 113,
            },
            celestial: Stats {
                major: 113,
                minor: 113,
            },
        },
    };
}

/**
 * BEGIN ENUMS
 */

pub enum AffixTypes {
    Triple,
    Quadruple,
    Celestial,
}
impl AffixTypes {
    pub fn get_affixes(&self) -> Vec<Stats> {
        match self {
            AffixTypes::Triple => vec![],
            AffixTypes::Quadruple => vec![],
            AffixTypes::Celestial => vec![],
        }
    }

    pub fn get_affix(&self, slot: usize) -> Stats {
        match self {
            AffixTypes::Triple => vec![],
            AffixTypes::Quadruple => vec![],
            AffixTypes::Celestial => vec![],
        }
    }
}

pub enum Attribute {
    Primary(PrimaryAttributeName),
    Secondary(SecondaryAttributeName),
}

pub enum PrimaryAttributeName {
    Power,
    Precision,
    Toughness,
    Vitality,
}

pub enum SecondaryAttributeName {
    Ferocity,
    ConditionDamage,
    Expertise,
    Concentration,
    HealingPower,
    AgonyResistance,
}

#[derive(Sequence, Debug, Clone, Copy)]
pub enum Affix {
    Berserker = 0,
    Assassin = 1,
    Harrier = 2,
    Commander = 3,
    Minstrel = 4,
    Magi = 5,
    Marauder = 6,
    Cleric = 7,
    Nomad = 8,
    Zealot = 9,
    Viper = 10,
    Sinister = 11,
    Grieving = 12,
    Seraph = 13,
    Marshal = 14,
    Giver = 15,
    Knight = 16,
    Trailblazer = 17,
    Plaguedoctor = 18,
    Carrion = 19,
    Rabid = 20,
    Dire = 21,
    Vigilant = 22,
    Valkyrie = 23,
    Cavalier = 24,
    Celestial = 25,
    Diviner = 26,
    Soldier = 27,
    Sentinel = 28,
    Wanderer = 29,
    Apothecary = 30,
    Shaman = 31,
    Crusader = 32,
    Rampager = 33,
    Settler = 34,
    Bringer = 35,
    Ritualist = 36,
    Dragon = 37,
}

impl Affix {
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
