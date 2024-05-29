#![allow(dead_code)]

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
