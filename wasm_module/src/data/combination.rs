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
            Attribute::StrikeDamage => return self.damageMultiplier[0].1,
            Attribute::ConditionDamage => return self.damageMultiplier[1].1,
            Attribute::SiphonDamage => return self.damageMultiplier[2].1,
            Attribute::DamageTaken => return self.damageMultiplier[3].1,
            Attribute::CriticalDamage => return self.damageMultiplier[4].1,
            Attribute::BleedingDamage => return self.damageMultiplier[5].1,
            Attribute::BurningDamage => return self.damageMultiplier[6].1,
            Attribute::ConfusionDamage => return self.damageMultiplier[7].1,
            Attribute::PoisonDamage => return self.damageMultiplier[8].1,
            Attribute::TormentDamage => return self.damageMultiplier[9].1,
            Attribute::AltDamage => return self.damageMultiplier[10].1,
            Attribute::AltCriticalDamage => return self.damageMultiplier[11].1,
            Attribute::PhantasmDamage => return self.damageMultiplier[12].1,
            Attribute::PhantasmCriticalDamage => return self.damageMultiplier[13].1,
            // we will likely notice it in case our result is negative
            _ => -1.0,
        }
    }
}
