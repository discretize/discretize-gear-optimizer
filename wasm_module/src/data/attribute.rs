use enum_iterator::Sequence;
use serde_repr::{Deserialize_repr, Serialize_repr};
use std::fmt;

// align to 64 bytes = 2 attributes per cache line
pub const ATTRIBUTE_COUNT: usize = 108;

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
    ConditionDurationUncapped,
    BoonDuration,
    Health,
    Armor,
    // boon duration
    AegisDuration,
    FuryDuration,
    MightDuration,
    ProtectionDuration,
    QuicknessDuration,
    AlacrityDuration,
    RegenerationDuration,
    ResistanceDuration,
    ResolutionDuration,
    StabilityDuration,
    SwiftnessDuration,
    VigorDuration,
    // condition duration
    BleedingDuration,
    BurningDuration,
    ConfusionDuration,
    PoisonDuration,
    TormentDuration,
    // conditions stuff
    BleedingCoefficient,
    BurningCoefficient,
    ConfusionCoefficient,
    PoisonCoefficient,
    TormentCoefficient,
    // condition damage tick
    BleedingDamageTick,
    BurningDamageTick,
    ConfusionDamageTick,
    PoisonDamageTick,
    TormentDamageTick,
    // effective attributes
    EffectivePower,
    EffectiveHealth,
    EffectiveHealing,
    // indicators
    Damage,
    Survivability,
    Healing,
    // condition stacks
    BleedingStacks,
    BurningStacks,
    ConfusionStacks,
    PoisonStacks,
    TormentStacks,
    //condition dps
    BleedingDPS,
    BurningDPS,
    ConfusionDPS,
    PoisonDPS,
    TormentDPS,
    // alternative power, no idea whats that for
    AltPower,
    AltPrecision,
    AltFerocity,
    AltCriticalChance,
    AltEffectivePower,
    AltCriticalDamage,
    // profession specific
    CloneCriticalChance,
    PhantasmCriticalChance,
    PhantasmCriticalDamage,
    PhantasmEffectivePower,
    // siphon
    SiphonCoefficient,
    SiphonBaseCoefficient,
    SiphonDPS,

    // misc
    MaxHealth,
    OutgoingHealing,
    PowerCoefficient,
    NonCritPowerCoefficient,
    Power2DPS,
    Power2Coefficient,
    FlatDPS,
    PowerDPS,
    PlayerCriticalDamage,

    #[default]
    None = 255,
}

impl Attribute {
    pub fn is_primary(&self) -> bool {
        matches!(
            self,
            Attribute::Power | Attribute::Precision | Attribute::Toughness | Attribute::Vitality
        )
    }

    pub fn is_secondary(&self) -> bool {
        matches!(
            self,
            Attribute::Ferocity
                | Attribute::ConditionDamage
                | Attribute::Expertise
                | Attribute::Concentration
                | Attribute::HealingPower
                | Attribute::AgonyResistance
                | Attribute::Armor
        )
    }

    pub fn is_alternative_point(&self) -> bool {
        matches!(
            self,
            Attribute::AltPower | Attribute::AltPrecision | Attribute::AltFerocity
        )
    }

    pub fn is_point_key(&self) -> bool {
        self.is_primary() || self.is_secondary() || self.is_alternative_point()
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
            Attribute::ConditionDurationUncapped => "Condition Duration Uncapped",
            Attribute::BoonDuration => "Boon Duration",
            Attribute::Health => "Health",
            Attribute::Armor => "Armor",

            Attribute::AegisDuration => "Aegis Duration",
            Attribute::FuryDuration => "Fury Duration",
            Attribute::MightDuration => "Might Duration",
            Attribute::ProtectionDuration => "Protection Duration",
            Attribute::QuicknessDuration => "Quickness Duration",
            Attribute::AlacrityDuration => "Alacrity Duration",
            Attribute::RegenerationDuration => "Regeneration Duration",
            Attribute::ResistanceDuration => "Resistance Duration",
            Attribute::ResolutionDuration => "Resolution Duration",
            Attribute::StabilityDuration => "Stability Duration",
            Attribute::SwiftnessDuration => "Swiftness Duration",
            Attribute::VigorDuration => "Vigor Duration",

            Attribute::BleedingDuration => "Bleeding Duration",
            Attribute::BurningDuration => "Burning Duration",
            Attribute::ConfusionDuration => "Confusion Duration",
            Attribute::PoisonDuration => "Poison Duration",
            Attribute::TormentDuration => "Torment Duration",

            Attribute::BleedingCoefficient => "Bleeding Coefficient",
            Attribute::BurningCoefficient => "Burning Coefficient",
            Attribute::ConfusionCoefficient => "Confusion Coefficient",
            Attribute::PoisonCoefficient => "Poison Coefficient",
            Attribute::TormentCoefficient => "Torment Coefficient",

            Attribute::BleedingDamageTick => "Bleeding Damage Tick",
            Attribute::BurningDamageTick => "Burning Damage Tick",
            Attribute::ConfusionDamageTick => "Confusion Damage Tick",
            Attribute::PoisonDamageTick => "Poison Damage Tick",
            Attribute::TormentDamageTick => "Torment Damage Tick",

            Attribute::EffectivePower => "Effective Power",
            Attribute::EffectiveHealth => "Effective Health",
            Attribute::EffectiveHealing => "Effective Healing",

            Attribute::Damage => "Damage",
            Attribute::Survivability => "Survivability",
            Attribute::Healing => "Healing",

            Attribute::BleedingStacks => "Bleeding Stacks",
            Attribute::BurningStacks => "Burning Stacks",
            Attribute::ConfusionStacks => "Confusion Stacks",
            Attribute::PoisonStacks => "Poison Stacks",
            Attribute::TormentStacks => "Torment Stacks",

            Attribute::BleedingDPS => "Bleeding DPS",
            Attribute::BurningDPS => "Burning DPS",
            Attribute::ConfusionDPS => "Confusion DPS",
            Attribute::PoisonDPS => "Poison DPS",
            Attribute::TormentDPS => "Torment DPS",

            Attribute::AltPower => "Alt Power",
            Attribute::AltPrecision => "Alt Precision",
            Attribute::AltFerocity => "Alt Ferocity",
            Attribute::AltCriticalChance => "Alt Critical Chance",
            Attribute::AltEffectivePower => "Alt Effective Power",
            Attribute::AltCriticalDamage => "Alt Critical Damage",

            Attribute::CloneCriticalChance => "Clone Critical Chance",
            Attribute::PhantasmCriticalChance => "Phantasm Critical Chance",
            Attribute::PhantasmCriticalDamage => "Phantasm Critical Damage",
            Attribute::PhantasmEffectivePower => "Phantasm Effective Power",

            Attribute::SiphonCoefficient => "Siphon Coefficient",
            Attribute::SiphonBaseCoefficient => "Siphon Base Coefficient",
            Attribute::SiphonDPS => "Siphon DPS",

            Attribute::MaxHealth => "Max Health",
            Attribute::OutgoingHealing => "Outgoing Healing",
            Attribute::PowerCoefficient => "Power Coefficient",
            Attribute::NonCritPowerCoefficient => "Non Crit Power Coefficient",
            Attribute::Power2DPS => "Power2 DPS",
            Attribute::Power2Coefficient => "Power2 Coefficient",
            Attribute::FlatDPS => "Flat DPS",
            Attribute::PowerDPS => "Power DPS",
            Attribute::PlayerCriticalDamage => "Player Critical Damage",

            Attribute::None => "None",
        }
    }

    // other methods for derived attributes
}

impl fmt::Display for Attribute {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "{}", self.to_stringg())
    }
}

pub enum DamageMultiplier {
    OutgoingStrikeDamage,
    OutgoingConditionDamage,
    OutgoingSiphonDamage,
    IncomingStrikeDamage,
    OutgoingCriticalDamage,
    OutgoingBleedingDamage,
    OutgoingBurningDamage,
    OutgoingConfusionDamage,
    OutgoingPoisonDamage,
    OutgoingTormentDamage,
    OutgoingAltDamage,
    OutgoingAltCriticalDamage,
    OutgoingPhantasmDamage,
    OutgoingPhantasmCriticalDamage,
    OutgoingAllDamage,
}
