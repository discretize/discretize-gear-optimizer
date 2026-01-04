use enum_iterator::{all, Sequence};
use serde_repr::{Deserialize_repr, Serialize_repr};

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
    BerserkerValkyrie = 39,
    RabidApothecary = 40,
    DireRabid = 41,
    Demolisher = 42,
    Captain = 43,
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
            Affix::BerserkerValkyrie => "BerserkerValkyrie".to_string(),
            Affix::RabidApothecary => "RabidApothecary".to_string(),
            Affix::DireRabid => "DireRabid".to_string(),
            Affix::Demolisher => "Demolisher".to_string(),
            Affix::Captain => "Captain".to_string(),
            Affix::None => "".to_string(),
        }
    }

    pub fn from_number(num: i8) -> Option<Affix> {
        all::<Affix>()
            .collect::<Vec<_>>()
            .into_iter()
            .find(|&variant| variant as i8 == num)
    }

    // implement copy trait
    pub fn to_number(&self) -> i8 {
        *self as i8
    }
}

impl std::fmt::Display for Affix {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        write!(f, "{}", Affix::to_string(self))
    }
}
