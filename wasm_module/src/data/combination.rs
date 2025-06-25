use super::{attribute::Attribute, attribute::DamageMultiplier, settings::Condition};
use serde::{Deserialize, Serialize};

#[allow(non_snake_case)] // must allow since this comes from JS
#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct Combination {
    pub baseAttributes: Vec<(Attribute, f32)>,
    pub modifiers: Modifiers,
    pub relevantConditions: Vec<Condition>,
    pub disableCondiResultCache: bool,
    pub calculationTweaks: CalculationTweaks,
}

#[allow(non_snake_case)]
#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct Modifiers {
    pub damageMultiplier: [(String, f32); 14],
    pub buff: Vec<(Attribute, f32)>,
    pub convert: Vec<(Attribute, Vec<(Attribute, f32)>)>,
    pub convertAfterBuffs: Vec<(Attribute, Vec<(Attribute, f32)>)>,
}

impl Modifiers {
    pub fn get_dmg_multiplier(&self, attr: DamageMultiplier) -> f32 {
        match attr {
            DamageMultiplier::OutgoingStrikeDamage => self.damageMultiplier[0].1,
            DamageMultiplier::OutgoingConditionDamage => self.damageMultiplier[1].1,
            DamageMultiplier::OutgoingSiphonDamage => self.damageMultiplier[2].1,
            DamageMultiplier::IncomingStrikeDamage => self.damageMultiplier[3].1,
            DamageMultiplier::OutgoingCriticalDamage => self.damageMultiplier[4].1,
            DamageMultiplier::OutgoingBleedingDamage => self.damageMultiplier[5].1,
            DamageMultiplier::OutgoingBurningDamage => self.damageMultiplier[6].1,
            DamageMultiplier::OutgoingConfusionDamage => self.damageMultiplier[7].1,
            DamageMultiplier::OutgoingPoisonDamage => self.damageMultiplier[8].1,
            DamageMultiplier::OutgoingTormentDamage => self.damageMultiplier[9].1,
            DamageMultiplier::OutgoingAltDamage => self.damageMultiplier[10].1,
            DamageMultiplier::OutgoingAltCriticalDamage => self.damageMultiplier[11].1,
            DamageMultiplier::OutgoingPhantasmDamage => self.damageMultiplier[12].1,
            DamageMultiplier::OutgoingPhantasmCriticalDamage => self.damageMultiplier[13].1,
            // we will likely notice it in case our result is negative
            _ => -1.0,
        }
    }
}

#[allow(non_snake_case)]
#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct CalculationTweaks {
    pub infernoBurningDamage: bool,
}
