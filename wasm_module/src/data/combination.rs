use super::{attribute::Attribute, settings::Condition};
use serde::{Deserialize, Serialize};

#[allow(non_snake_case)] // must allow since this comes from JS
#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct Combination {
    pub baseAttributes: Vec<(Attribute, f32)>,
    pub modifiers: Modifiers,
    pub relevantConditions: Vec<Condition>,
    pub disableCondiResultCache: bool,
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
    pub fn get_dmg_multiplier(&self, attr: Attribute) -> f32 {
        match attr {
            Attribute::OutgoingStrikeDamage => self.damageMultiplier[0].1,
            Attribute::OutgoingConditionDamage => self.damageMultiplier[1].1,
            Attribute::OutgoingSiphonDamage => self.damageMultiplier[2].1,
            Attribute::IncomingStrikeDamage => self.damageMultiplier[3].1,
            Attribute::OutgoingCriticalDamage => self.damageMultiplier[4].1,
            Attribute::OutgoingBleedingDamage => self.damageMultiplier[5].1,
            Attribute::OutgoingBurningDamage => self.damageMultiplier[6].1,
            Attribute::OutgoingConfusionDamage => self.damageMultiplier[7].1,
            Attribute::OutgoingPoisonDamage => self.damageMultiplier[8].1,
            Attribute::OutgoingTormentDamage => self.damageMultiplier[9].1,
            Attribute::OutgoingAltDamage => self.damageMultiplier[10].1,
            Attribute::OutgoingAltCriticalDamage => self.damageMultiplier[11].1,
            Attribute::OutgoingPhantasmDamage => self.damageMultiplier[12].1,
            Attribute::OutgoingPhantasmCriticalDamage => self.damageMultiplier[13].1,
            // we will likely notice it in case our result is negative
            _ => -1.0,
        }
    }
}
