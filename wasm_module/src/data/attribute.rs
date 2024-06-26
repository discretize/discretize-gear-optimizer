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
    SiphonCoefficient,
    SiphonBaseCoefficient,
    SiphonDPS,

    // misc
    MaxHealth,
    OutgoingHealing,
    DamageReduction,
    PowerCoefficient,
    NonCritPowerCoefficient,
    Power2DPS,
    Power2Coefficient,
    FlatDPS,
    PowerDPS,

    // damage
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

    // display only
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
            Attribute::BleedingDamageTick => "Bleeding Damage Tick",
            Attribute::BurningDamageTick => "Burning Damage Tick",
            Attribute::ConfusionDamageTick => "Confusion Damage Tick",
            Attribute::PoisonDamageTick => "Poison Damage Tick",
            Attribute::TormentDamageTick => "Torment Damage Tick",
            Attribute::EffectivePower => "Effective Power",
            Attribute::EffectiveHealth => "Effective Health",
            Attribute::EffectiveHealing => "Effective Healing",
            Attribute::AltPower => "Alt Power",
            Attribute::AltPrecision => "Alt Precision",
            Attribute::AltFerocity => "Alt Ferocity",
            Attribute::AltCriticalChance => "Alt Critical Chance",
            Attribute::AltEffectivePower => "Alt Effective Power",
            Attribute::AltCriticalDamage => "Alt Critical Damage",
            Attribute::CloneCriticalChance => "Clone Critical Chance",
            Attribute::PhantasmCriticalChance => "Phantasm Critical Chance",
            Attribute::PhantasmCriticalDamage => "Phantasm Critical Damage",
            Attribute::SiphonCoefficient => "Siphon Coefficient",
            Attribute::SiphonBaseCoefficient => "Siphon Base Coefficient",
            Attribute::SiphonDPS => "Siphon DPS",
            Attribute::MaxHealth => "Max Health",
            Attribute::OutgoingHealing => "Outgoing Healing",
            Attribute::DamageReduction => "Damage Reduction",
            Attribute::PowerCoefficient => "Power Coefficient",
            Attribute::NonCritPowerCoefficient => "Non Crit Power Coefficient",
            Attribute::Power2DPS => "Power2 DPS",
            Attribute::Power2Coefficient => "Power2 Coefficient",
            Attribute::FlatDPS => "Flat DPS",
            Attribute::None => "None",
            Attribute::Damage => "Damage",
            Attribute::Survivability => "Survivability",
            Attribute::Healing => "Healing",
            Attribute::PowerDPS => "Power DPS",
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
            Attribute::PhantasmEffectivePower => "Phantasm Effective Power",

            Attribute::OutgoingStrikeDamage => "Outgoing Strike Damage",
            Attribute::OutgoingConditionDamage => "Outgoing Condition Damage",
            Attribute::OutgoingSiphonDamage => "Outgoing Siphon Damage",
            Attribute::IncomingStrikeDamage => "Incoming Strike Damage",
            Attribute::OutgoingCriticalDamage => "Outgoing Critical Damage",
            Attribute::OutgoingBleedingDamage => "Outgoing Bleeding Damage",
            Attribute::OutgoingBurningDamage => "Outgoing Burning Damage",
            Attribute::OutgoingConfusionDamage => "Outgoing Confusion Damage",
            Attribute::OutgoingPoisonDamage => "Outgoing Poison Damage",
            Attribute::OutgoingTormentDamage => "Outgoing Torment Damage",
            Attribute::OutgoingAltDamage => "Outgoing Alt Damage",
            Attribute::OutgoingAltCriticalDamage => "Outgoing Alt Critical Damage",
            Attribute::OutgoingPhantasmDamage => "Outgoing Phantasm Damage",
            Attribute::OutgoingPhantasmCriticalDamage => "Outgoing Phantasm Critical Damage",
            Attribute::OutgoingAllDamage => "Outgoing All Damage",

            Attribute::PlayerCriticalDamage => "Player Critical Damage",
        }
    }

    // other methods for derived attributes
}

impl fmt::Display for Attribute {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "{}", self.to_stringg())
    }
}
