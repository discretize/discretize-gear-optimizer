// AUTOMATICALLY GENERATED FILE
// DO NOT EDIT


use crate::gw2data::{Affix, AttributesCollection, Rarity, Slots, Attribute, PrimaryAttributeName, SecondaryAttributeName};

pub fn add_stats(stats: &mut AttributesCollection, affix: Affix, slot: Slots, rarity: Rarity) {
match slot {
	Slots::None => {},
	Slots::Helm => match affix {
		Affix::None => {},
		Affix::Custom => match rarity {
			Rarity::Ascended => {
			},
			Rarity::Exotic => {
			},
		},
		Affix::Berserker => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 63);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 45);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 45);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 60);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 43);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 43);
			},
		},
		Affix::Assassin => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 63);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 45);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 45);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 60);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 43);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 43);
			},
		},
		Affix::Harrier => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 63);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 45);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 45);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 60);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 43);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 43);
			},
		},
		Affix::Commander => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 54);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 54);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 30);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 30);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 51);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 51);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 28);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 28);
			},
		},
		Affix::Minstrel => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 54);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 54);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 30);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 30);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 51);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 51);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 28);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 28);
			},
		},
		Affix::Magi => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 63);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 45);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 45);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 60);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 43);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 43);
			},
		},
		Affix::Marauder => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 54);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 54);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 30);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 30);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 51);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 51);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 28);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 28);
			},
		},
		Affix::Cleric => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 63);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 45);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 45);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 60);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 43);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 43);
			},
		},
		Affix::Nomad => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 63);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 45);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 45);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 60);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 43);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 43);
			},
		},
		Affix::Zealot => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 63);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 45);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 45);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 60);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 43);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 43);
			},
		},
		Affix::Viper => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 54);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 54);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 30);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 30);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 51);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 51);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 28);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 28);
			},
		},
		Affix::Sinister => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 63);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 45);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 45);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 60);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 43);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 43);
			},
		},
		Affix::Grieving => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 54);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 54);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 30);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 30);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 51);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 51);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 28);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 28);
			},
		},
		Affix::Seraph => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 54);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 54);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 30);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 30);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 51);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 51);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 28);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 28);
			},
		},
		Affix::Marshal => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 54);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 54);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 30);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 30);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 51);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 51);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 28);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 28);
			},
		},
		Affix::Giver => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 63);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 45);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 45);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 60);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 43);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 43);
			},
		},
		Affix::Knight => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 63);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 45);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 45);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 60);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 43);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 43);
			},
		},
		Affix::Trailblazer => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 54);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 54);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 30);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 30);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 51);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 51);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 28);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 28);
			},
		},
		Affix::Plaguedoctor => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 54);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 54);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 30);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 30);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 51);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 51);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 28);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 28);
			},
		},
		Affix::Carrion => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 63);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 45);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 45);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 60);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 43);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 43);
			},
		},
		Affix::Rabid => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 63);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 45);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 45);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 60);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 43);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 43);
			},
		},
		Affix::Dire => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 63);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 45);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 45);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 60);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 43);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 43);
			},
		},
		Affix::Vigilant => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 54);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 54);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 30);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 30);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 51);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 51);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 28);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 28);
			},
		},
		Affix::Valkyrie => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 63);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 45);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 45);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 60);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 43);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 43);
			},
		},
		Affix::Cavalier => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 63);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 45);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 45);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 60);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 43);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 43);
			},
		},
		Affix::Celestial => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 30);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 30);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 30);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 30);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 30);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 30);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 30);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 30);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 30);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 28);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 28);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 28);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 28);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 28);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 28);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 28);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 28);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 28);
			},
		},
		Affix::Diviner => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 54);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 54);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 30);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 30);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 51);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 51);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 28);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 28);
			},
		},
		Affix::Soldier => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 63);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 45);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 45);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 60);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 43);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 43);
			},
		},
		Affix::Sentinel => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 63);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 45);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 45);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 60);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 43);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 43);
			},
		},
		Affix::Wanderer => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 54);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 54);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 30);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 30);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 51);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 51);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 28);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 28);
			},
		},
		Affix::Apothecary => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 63);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 45);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 45);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 60);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 43);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 43);
			},
		},
		Affix::Shaman => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 63);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 45);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 45);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 60);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 43);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 43);
			},
		},
		Affix::Crusader => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 54);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 54);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 30);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 30);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 51);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 51);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 28);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 28);
			},
		},
		Affix::Rampager => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 63);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 45);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 45);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 60);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 43);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 43);
			},
		},
		Affix::Settler => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 63);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 45);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 45);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 60);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 43);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 43);
			},
		},
		Affix::Bringer => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 63);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 45);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 45);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 60);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 43);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 43);
			},
		},
		Affix::Ritualist => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 54);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 54);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 30);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 30);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 51);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 51);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 28);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 28);
			},
		},
		Affix::Dragon => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 54);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 54);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 30);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 30);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 51);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 51);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 28);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 28);
			},
		},}
	
	Slots::Shoulders => match affix {
		Affix::None => {},
		Affix::Custom => match rarity {
			Rarity::Ascended => {
			},
			Rarity::Exotic => {
			},
		},
		Affix::Berserker => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 47);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 34);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 34);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 45);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 32);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 32);
			},
		},
		Affix::Assassin => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 47);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 34);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 34);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 45);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 32);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 32);
			},
		},
		Affix::Harrier => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 47);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 34);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 34);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 45);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 32);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 32);
			},
		},
		Affix::Commander => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 40);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 40);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 22);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 22);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 38);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 38);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 21);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 21);
			},
		},
		Affix::Minstrel => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 40);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 40);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 22);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 22);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 38);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 38);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 21);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 21);
			},
		},
		Affix::Magi => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 47);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 34);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 34);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 45);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 32);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 32);
			},
		},
		Affix::Marauder => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 40);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 40);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 22);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 22);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 38);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 38);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 21);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 21);
			},
		},
		Affix::Cleric => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 47);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 34);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 34);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 45);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 32);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 32);
			},
		},
		Affix::Nomad => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 47);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 34);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 34);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 45);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 32);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 32);
			},
		},
		Affix::Zealot => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 47);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 34);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 34);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 45);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 32);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 32);
			},
		},
		Affix::Viper => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 40);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 40);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 22);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 22);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 38);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 38);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 21);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 21);
			},
		},
		Affix::Sinister => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 47);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 34);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 34);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 45);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 32);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 32);
			},
		},
		Affix::Grieving => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 40);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 40);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 22);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 22);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 38);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 38);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 21);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 21);
			},
		},
		Affix::Seraph => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 40);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 40);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 22);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 22);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 38);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 38);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 21);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 21);
			},
		},
		Affix::Marshal => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 40);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 40);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 22);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 22);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 38);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 38);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 21);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 21);
			},
		},
		Affix::Giver => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 47);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 34);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 34);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 45);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 32);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 32);
			},
		},
		Affix::Knight => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 47);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 34);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 34);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 45);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 32);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 32);
			},
		},
		Affix::Trailblazer => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 40);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 40);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 22);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 22);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 38);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 38);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 21);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 21);
			},
		},
		Affix::Plaguedoctor => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 40);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 40);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 22);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 22);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 38);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 38);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 21);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 21);
			},
		},
		Affix::Carrion => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 47);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 34);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 34);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 45);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 32);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 32);
			},
		},
		Affix::Rabid => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 47);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 34);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 34);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 45);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 32);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 32);
			},
		},
		Affix::Dire => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 47);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 34);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 34);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 45);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 32);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 32);
			},
		},
		Affix::Vigilant => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 40);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 40);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 22);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 22);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 38);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 38);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 21);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 21);
			},
		},
		Affix::Valkyrie => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 47);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 34);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 34);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 45);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 32);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 32);
			},
		},
		Affix::Cavalier => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 47);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 34);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 34);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 45);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 32);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 32);
			},
		},
		Affix::Celestial => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 22);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 22);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 22);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 22);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 22);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 22);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 22);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 22);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 22);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 21);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 21);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 21);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 21);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 21);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 21);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 21);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 21);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 21);
			},
		},
		Affix::Diviner => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 40);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 40);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 22);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 22);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 38);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 38);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 21);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 21);
			},
		},
		Affix::Soldier => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 47);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 34);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 34);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 45);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 32);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 32);
			},
		},
		Affix::Sentinel => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 47);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 34);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 34);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 45);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 32);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 32);
			},
		},
		Affix::Wanderer => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 40);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 40);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 22);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 22);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 38);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 38);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 21);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 21);
			},
		},
		Affix::Apothecary => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 47);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 34);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 34);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 45);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 32);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 32);
			},
		},
		Affix::Shaman => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 47);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 34);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 34);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 45);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 32);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 32);
			},
		},
		Affix::Crusader => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 40);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 40);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 22);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 22);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 38);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 38);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 21);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 21);
			},
		},
		Affix::Rampager => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 47);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 34);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 34);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 45);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 32);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 32);
			},
		},
		Affix::Settler => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 47);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 34);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 34);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 45);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 32);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 32);
			},
		},
		Affix::Bringer => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 47);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 34);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 34);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 45);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 32);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 32);
			},
		},
		Affix::Ritualist => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 40);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 40);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 22);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 22);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 38);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 38);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 21);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 21);
			},
		},
		Affix::Dragon => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 40);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 40);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 22);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 22);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 38);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 38);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 21);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 21);
			},
		},}
	
	Slots::Chest => match affix {
		Affix::None => {},
		Affix::Custom => match rarity {
			Rarity::Ascended => {
			},
			Rarity::Exotic => {
			},
		},
		Affix::Berserker => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 141);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 101);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 101);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 134);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 96);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 96);
			},
		},
		Affix::Assassin => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 141);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 101);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 101);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 134);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 96);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 96);
			},
		},
		Affix::Harrier => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 141);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 101);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 101);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 134);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 96);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 96);
			},
		},
		Affix::Commander => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 121);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 121);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 67);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 67);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 115);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 115);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 63);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 63);
			},
		},
		Affix::Minstrel => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 121);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 121);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 67);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 67);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 115);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 115);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 63);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 63);
			},
		},
		Affix::Magi => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 141);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 101);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 101);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 134);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 96);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 96);
			},
		},
		Affix::Marauder => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 121);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 121);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 67);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 67);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 115);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 115);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 63);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 63);
			},
		},
		Affix::Cleric => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 141);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 101);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 101);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 134);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 96);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 96);
			},
		},
		Affix::Nomad => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 141);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 101);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 101);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 134);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 96);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 96);
			},
		},
		Affix::Zealot => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 141);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 101);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 101);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 134);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 96);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 96);
			},
		},
		Affix::Viper => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 121);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 121);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 67);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 67);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 115);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 115);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 63);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 63);
			},
		},
		Affix::Sinister => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 141);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 101);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 101);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 134);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 96);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 96);
			},
		},
		Affix::Grieving => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 121);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 121);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 67);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 67);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 115);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 115);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 63);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 63);
			},
		},
		Affix::Seraph => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 121);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 121);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 67);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 67);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 115);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 115);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 63);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 63);
			},
		},
		Affix::Marshal => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 121);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 121);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 67);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 67);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 115);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 115);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 63);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 63);
			},
		},
		Affix::Giver => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 141);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 101);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 101);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 134);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 96);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 96);
			},
		},
		Affix::Knight => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 141);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 101);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 101);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 134);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 96);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 96);
			},
		},
		Affix::Trailblazer => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 121);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 121);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 67);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 67);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 115);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 115);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 63);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 63);
			},
		},
		Affix::Plaguedoctor => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 121);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 121);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 67);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 67);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 115);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 115);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 63);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 63);
			},
		},
		Affix::Carrion => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 141);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 101);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 101);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 134);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 96);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 96);
			},
		},
		Affix::Rabid => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 141);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 101);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 101);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 134);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 96);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 96);
			},
		},
		Affix::Dire => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 141);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 101);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 101);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 134);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 96);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 96);
			},
		},
		Affix::Vigilant => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 121);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 121);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 67);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 67);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 115);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 115);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 63);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 63);
			},
		},
		Affix::Valkyrie => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 141);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 101);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 101);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 134);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 96);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 96);
			},
		},
		Affix::Cavalier => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 141);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 101);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 101);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 134);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 96);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 96);
			},
		},
		Affix::Celestial => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 67);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 67);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 67);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 67);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 67);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 67);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 67);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 67);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 67);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 63);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 63);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 63);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 63);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 63);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 63);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 63);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 63);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 63);
			},
		},
		Affix::Diviner => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 121);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 121);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 67);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 67);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 115);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 115);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 63);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 63);
			},
		},
		Affix::Soldier => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 141);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 101);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 101);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 134);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 96);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 96);
			},
		},
		Affix::Sentinel => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 141);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 101);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 101);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 134);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 96);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 96);
			},
		},
		Affix::Wanderer => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 121);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 121);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 67);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 67);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 115);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 115);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 63);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 63);
			},
		},
		Affix::Apothecary => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 141);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 101);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 101);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 134);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 96);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 96);
			},
		},
		Affix::Shaman => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 141);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 101);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 101);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 134);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 96);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 96);
			},
		},
		Affix::Crusader => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 121);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 121);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 67);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 67);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 115);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 115);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 63);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 63);
			},
		},
		Affix::Rampager => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 141);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 101);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 101);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 134);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 96);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 96);
			},
		},
		Affix::Settler => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 141);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 101);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 101);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 134);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 96);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 96);
			},
		},
		Affix::Bringer => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 141);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 101);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 101);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 134);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 96);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 96);
			},
		},
		Affix::Ritualist => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 121);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 121);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 67);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 67);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 115);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 115);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 63);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 63);
			},
		},
		Affix::Dragon => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 121);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 121);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 67);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 67);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 115);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 115);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 63);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 63);
			},
		},}
	
	Slots::Gloves => match affix {
		Affix::None => {},
		Affix::Custom => match rarity {
			Rarity::Ascended => {
			},
			Rarity::Exotic => {
			},
		},
		Affix::Berserker => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 47);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 34);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 34);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 45);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 32);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 32);
			},
		},
		Affix::Assassin => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 47);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 34);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 34);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 45);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 32);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 32);
			},
		},
		Affix::Harrier => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 47);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 34);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 34);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 45);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 32);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 32);
			},
		},
		Affix::Commander => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 40);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 40);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 22);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 22);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 38);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 38);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 21);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 21);
			},
		},
		Affix::Minstrel => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 40);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 40);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 22);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 22);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 38);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 38);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 21);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 21);
			},
		},
		Affix::Magi => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 47);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 34);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 34);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 45);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 32);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 32);
			},
		},
		Affix::Marauder => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 40);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 40);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 22);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 22);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 38);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 38);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 21);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 21);
			},
		},
		Affix::Cleric => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 47);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 34);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 34);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 45);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 32);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 32);
			},
		},
		Affix::Nomad => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 47);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 34);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 34);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 45);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 32);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 32);
			},
		},
		Affix::Zealot => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 47);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 34);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 34);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 45);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 32);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 32);
			},
		},
		Affix::Viper => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 40);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 40);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 22);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 22);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 38);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 38);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 21);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 21);
			},
		},
		Affix::Sinister => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 47);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 34);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 34);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 45);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 32);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 32);
			},
		},
		Affix::Grieving => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 40);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 40);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 22);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 22);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 38);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 38);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 21);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 21);
			},
		},
		Affix::Seraph => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 40);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 40);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 22);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 22);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 38);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 38);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 21);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 21);
			},
		},
		Affix::Marshal => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 40);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 40);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 22);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 22);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 38);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 38);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 21);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 21);
			},
		},
		Affix::Giver => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 47);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 34);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 34);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 45);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 32);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 32);
			},
		},
		Affix::Knight => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 47);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 34);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 34);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 45);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 32);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 32);
			},
		},
		Affix::Trailblazer => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 40);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 40);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 22);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 22);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 38);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 38);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 21);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 21);
			},
		},
		Affix::Plaguedoctor => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 40);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 40);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 22);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 22);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 38);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 38);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 21);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 21);
			},
		},
		Affix::Carrion => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 47);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 34);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 34);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 45);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 32);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 32);
			},
		},
		Affix::Rabid => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 47);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 34);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 34);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 45);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 32);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 32);
			},
		},
		Affix::Dire => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 47);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 34);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 34);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 45);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 32);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 32);
			},
		},
		Affix::Vigilant => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 40);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 40);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 22);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 22);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 38);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 38);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 21);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 21);
			},
		},
		Affix::Valkyrie => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 47);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 34);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 34);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 45);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 32);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 32);
			},
		},
		Affix::Cavalier => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 47);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 34);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 34);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 45);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 32);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 32);
			},
		},
		Affix::Celestial => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 22);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 22);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 22);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 22);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 22);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 22);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 22);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 22);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 22);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 21);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 21);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 21);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 21);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 21);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 21);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 21);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 21);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 21);
			},
		},
		Affix::Diviner => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 40);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 40);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 22);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 22);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 38);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 38);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 21);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 21);
			},
		},
		Affix::Soldier => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 47);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 34);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 34);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 45);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 32);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 32);
			},
		},
		Affix::Sentinel => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 47);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 34);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 34);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 45);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 32);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 32);
			},
		},
		Affix::Wanderer => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 40);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 40);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 22);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 22);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 38);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 38);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 21);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 21);
			},
		},
		Affix::Apothecary => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 47);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 34);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 34);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 45);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 32);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 32);
			},
		},
		Affix::Shaman => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 47);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 34);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 34);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 45);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 32);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 32);
			},
		},
		Affix::Crusader => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 40);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 40);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 22);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 22);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 38);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 38);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 21);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 21);
			},
		},
		Affix::Rampager => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 47);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 34);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 34);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 45);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 32);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 32);
			},
		},
		Affix::Settler => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 47);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 34);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 34);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 45);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 32);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 32);
			},
		},
		Affix::Bringer => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 47);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 34);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 34);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 45);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 32);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 32);
			},
		},
		Affix::Ritualist => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 40);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 40);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 22);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 22);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 38);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 38);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 21);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 21);
			},
		},
		Affix::Dragon => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 40);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 40);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 22);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 22);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 38);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 38);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 21);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 21);
			},
		},}
	
	Slots::Leggings => match affix {
		Affix::None => {},
		Affix::Custom => match rarity {
			Rarity::Ascended => {
			},
			Rarity::Exotic => {
			},
		},
		Affix::Berserker => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 94);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 67);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 67);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 90);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 64);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 64);
			},
		},
		Affix::Assassin => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 94);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 67);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 67);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 90);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 64);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 64);
			},
		},
		Affix::Harrier => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 94);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 67);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 67);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 90);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 64);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 64);
			},
		},
		Affix::Commander => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 81);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 81);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 44);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 44);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 77);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 77);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 42);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 42);
			},
		},
		Affix::Minstrel => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 81);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 81);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 44);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 44);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 77);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 77);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 42);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 42);
			},
		},
		Affix::Magi => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 94);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 67);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 67);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 90);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 64);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 64);
			},
		},
		Affix::Marauder => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 81);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 81);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 44);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 44);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 77);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 77);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 42);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 42);
			},
		},
		Affix::Cleric => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 94);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 67);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 67);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 90);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 64);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 64);
			},
		},
		Affix::Nomad => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 94);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 67);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 67);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 90);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 64);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 64);
			},
		},
		Affix::Zealot => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 94);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 67);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 67);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 90);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 64);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 64);
			},
		},
		Affix::Viper => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 81);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 81);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 44);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 44);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 77);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 77);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 42);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 42);
			},
		},
		Affix::Sinister => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 94);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 67);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 67);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 90);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 64);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 64);
			},
		},
		Affix::Grieving => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 81);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 81);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 44);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 44);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 77);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 77);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 42);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 42);
			},
		},
		Affix::Seraph => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 81);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 81);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 44);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 44);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 77);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 77);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 42);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 42);
			},
		},
		Affix::Marshal => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 81);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 81);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 44);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 44);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 77);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 77);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 42);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 42);
			},
		},
		Affix::Giver => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 94);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 67);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 67);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 90);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 64);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 64);
			},
		},
		Affix::Knight => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 94);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 67);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 67);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 90);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 64);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 64);
			},
		},
		Affix::Trailblazer => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 81);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 81);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 44);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 44);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 77);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 77);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 42);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 42);
			},
		},
		Affix::Plaguedoctor => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 81);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 81);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 44);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 44);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 77);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 77);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 42);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 42);
			},
		},
		Affix::Carrion => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 94);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 67);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 67);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 90);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 64);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 64);
			},
		},
		Affix::Rabid => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 94);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 67);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 67);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 90);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 64);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 64);
			},
		},
		Affix::Dire => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 94);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 67);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 67);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 90);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 64);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 64);
			},
		},
		Affix::Vigilant => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 81);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 81);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 44);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 44);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 77);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 77);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 42);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 42);
			},
		},
		Affix::Valkyrie => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 94);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 67);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 67);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 90);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 64);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 64);
			},
		},
		Affix::Cavalier => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 94);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 67);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 67);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 90);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 64);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 64);
			},
		},
		Affix::Celestial => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 44);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 44);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 44);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 44);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 44);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 44);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 44);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 44);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 44);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 42);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 42);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 42);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 42);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 42);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 42);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 42);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 42);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 42);
			},
		},
		Affix::Diviner => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 81);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 81);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 44);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 44);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 77);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 77);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 42);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 42);
			},
		},
		Affix::Soldier => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 94);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 67);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 67);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 90);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 64);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 64);
			},
		},
		Affix::Sentinel => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 94);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 67);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 67);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 90);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 64);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 64);
			},
		},
		Affix::Wanderer => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 81);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 81);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 44);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 44);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 77);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 77);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 42);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 42);
			},
		},
		Affix::Apothecary => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 94);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 67);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 67);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 90);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 64);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 64);
			},
		},
		Affix::Shaman => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 94);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 67);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 67);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 90);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 64);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 64);
			},
		},
		Affix::Crusader => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 81);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 81);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 44);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 44);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 77);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 77);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 42);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 42);
			},
		},
		Affix::Rampager => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 94);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 67);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 67);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 90);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 64);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 64);
			},
		},
		Affix::Settler => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 94);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 67);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 67);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 90);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 64);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 64);
			},
		},
		Affix::Bringer => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 94);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 67);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 67);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 90);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 64);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 64);
			},
		},
		Affix::Ritualist => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 81);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 81);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 44);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 44);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 77);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 77);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 42);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 42);
			},
		},
		Affix::Dragon => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 81);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 81);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 44);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 44);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 77);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 77);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 42);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 42);
			},
		},}
	
	Slots::Boots => match affix {
		Affix::None => {},
		Affix::Custom => match rarity {
			Rarity::Ascended => {
			},
			Rarity::Exotic => {
			},
		},
		Affix::Berserker => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 47);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 34);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 34);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 45);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 32);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 32);
			},
		},
		Affix::Assassin => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 47);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 34);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 34);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 45);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 32);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 32);
			},
		},
		Affix::Harrier => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 47);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 34);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 34);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 45);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 32);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 32);
			},
		},
		Affix::Commander => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 40);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 40);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 22);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 22);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 38);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 38);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 21);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 21);
			},
		},
		Affix::Minstrel => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 40);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 40);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 22);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 22);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 38);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 38);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 21);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 21);
			},
		},
		Affix::Magi => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 47);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 34);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 34);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 45);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 32);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 32);
			},
		},
		Affix::Marauder => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 40);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 40);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 22);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 22);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 38);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 38);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 21);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 21);
			},
		},
		Affix::Cleric => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 47);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 34);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 34);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 45);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 32);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 32);
			},
		},
		Affix::Nomad => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 47);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 34);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 34);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 45);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 32);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 32);
			},
		},
		Affix::Zealot => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 47);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 34);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 34);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 45);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 32);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 32);
			},
		},
		Affix::Viper => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 40);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 40);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 22);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 22);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 38);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 38);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 21);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 21);
			},
		},
		Affix::Sinister => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 47);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 34);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 34);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 45);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 32);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 32);
			},
		},
		Affix::Grieving => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 40);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 40);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 22);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 22);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 38);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 38);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 21);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 21);
			},
		},
		Affix::Seraph => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 40);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 40);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 22);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 22);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 38);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 38);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 21);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 21);
			},
		},
		Affix::Marshal => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 40);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 40);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 22);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 22);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 38);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 38);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 21);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 21);
			},
		},
		Affix::Giver => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 47);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 34);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 34);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 45);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 32);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 32);
			},
		},
		Affix::Knight => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 47);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 34);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 34);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 45);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 32);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 32);
			},
		},
		Affix::Trailblazer => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 40);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 40);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 22);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 22);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 38);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 38);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 21);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 21);
			},
		},
		Affix::Plaguedoctor => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 40);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 40);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 22);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 22);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 38);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 38);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 21);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 21);
			},
		},
		Affix::Carrion => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 47);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 34);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 34);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 45);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 32);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 32);
			},
		},
		Affix::Rabid => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 47);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 34);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 34);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 45);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 32);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 32);
			},
		},
		Affix::Dire => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 47);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 34);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 34);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 45);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 32);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 32);
			},
		},
		Affix::Vigilant => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 40);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 40);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 22);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 22);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 38);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 38);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 21);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 21);
			},
		},
		Affix::Valkyrie => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 47);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 34);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 34);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 45);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 32);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 32);
			},
		},
		Affix::Cavalier => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 47);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 34);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 34);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 45);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 32);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 32);
			},
		},
		Affix::Celestial => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 22);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 22);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 22);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 22);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 22);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 22);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 22);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 22);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 22);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 21);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 21);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 21);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 21);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 21);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 21);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 21);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 21);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 21);
			},
		},
		Affix::Diviner => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 40);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 40);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 22);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 22);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 38);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 38);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 21);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 21);
			},
		},
		Affix::Soldier => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 47);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 34);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 34);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 45);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 32);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 32);
			},
		},
		Affix::Sentinel => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 47);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 34);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 34);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 45);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 32);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 32);
			},
		},
		Affix::Wanderer => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 40);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 40);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 22);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 22);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 38);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 38);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 21);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 21);
			},
		},
		Affix::Apothecary => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 47);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 34);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 34);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 45);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 32);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 32);
			},
		},
		Affix::Shaman => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 47);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 34);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 34);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 45);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 32);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 32);
			},
		},
		Affix::Crusader => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 40);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 40);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 22);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 22);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 38);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 38);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 21);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 21);
			},
		},
		Affix::Rampager => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 47);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 34);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 34);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 45);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 32);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 32);
			},
		},
		Affix::Settler => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 47);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 34);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 34);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 45);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 32);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 32);
			},
		},
		Affix::Bringer => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 47);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 34);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 34);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 45);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 32);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 32);
			},
		},
		Affix::Ritualist => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 40);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 40);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 22);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 22);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 38);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 38);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 21);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 21);
			},
		},
		Affix::Dragon => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 40);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 40);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 22);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 22);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 38);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 38);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 21);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 21);
			},
		},}
	
	Slots::Amulet => match affix {
		Affix::None => {},
		Affix::Custom => match rarity {
			Rarity::Ascended => {
			},
			Rarity::Exotic => {
			},
		},
		Affix::Berserker => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 157);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 108);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 108);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 145);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 100);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 100);
			},
		},
		Affix::Assassin => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 157);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 108);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 108);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 145);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 100);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 100);
			},
		},
		Affix::Harrier => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 157);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 108);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 108);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 145);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 100);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 100);
			},
		},
		Affix::Commander => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 133);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 133);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 71);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 71);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 122);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 122);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 66);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 66);
			},
		},
		Affix::Minstrel => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 133);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 133);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 71);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 71);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 122);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 122);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 66);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 66);
			},
		},
		Affix::Magi => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 157);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 108);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 108);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 145);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 100);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 100);
			},
		},
		Affix::Marauder => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 133);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 133);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 71);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 71);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 122);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 122);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 66);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 66);
			},
		},
		Affix::Cleric => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 157);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 108);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 108);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 145);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 100);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 100);
			},
		},
		Affix::Nomad => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 157);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 108);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 108);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 145);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 100);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 100);
			},
		},
		Affix::Zealot => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 157);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 108);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 108);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 145);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 100);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 100);
			},
		},
		Affix::Viper => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 133);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 133);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 71);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 71);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 122);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 122);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 66);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 66);
			},
		},
		Affix::Sinister => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 157);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 108);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 108);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 145);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 100);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 100);
			},
		},
		Affix::Grieving => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 133);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 133);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 71);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 71);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 122);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 122);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 66);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 66);
			},
		},
		Affix::Seraph => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 133);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 133);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 71);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 71);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 122);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 122);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 66);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 66);
			},
		},
		Affix::Marshal => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 133);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 133);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 71);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 71);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 122);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 122);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 66);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 66);
			},
		},
		Affix::Giver => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 157);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 108);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 108);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 145);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 100);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 100);
			},
		},
		Affix::Knight => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 157);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 108);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 108);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 145);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 100);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 100);
			},
		},
		Affix::Trailblazer => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 133);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 133);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 71);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 71);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 122);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 122);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 66);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 66);
			},
		},
		Affix::Plaguedoctor => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 133);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 133);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 71);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 71);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 122);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 122);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 66);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 66);
			},
		},
		Affix::Carrion => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 157);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 108);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 108);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 145);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 100);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 100);
			},
		},
		Affix::Rabid => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 157);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 108);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 108);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 145);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 100);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 100);
			},
		},
		Affix::Dire => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 157);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 108);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 108);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 145);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 100);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 100);
			},
		},
		Affix::Vigilant => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 133);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 133);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 71);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 71);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 122);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 122);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 66);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 66);
			},
		},
		Affix::Valkyrie => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 157);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 108);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 108);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 145);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 100);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 100);
			},
		},
		Affix::Cavalier => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 157);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 108);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 108);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 145);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 100);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 100);
			},
		},
		Affix::Celestial => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 72);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 72);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 72);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 72);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 72);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 72);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 72);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 72);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 72);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 68);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 68);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 68);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 68);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 68);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 68);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 68);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 68);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 68);
			},
		},
		Affix::Diviner => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 133);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 133);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 71);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 71);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 122);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 122);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 66);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 66);
			},
		},
		Affix::Soldier => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 157);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 108);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 108);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 145);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 100);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 100);
			},
		},
		Affix::Sentinel => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 157);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 108);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 108);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 145);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 100);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 100);
			},
		},
		Affix::Wanderer => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 133);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 133);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 71);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 71);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 122);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 122);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 66);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 66);
			},
		},
		Affix::Apothecary => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 157);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 108);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 108);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 145);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 100);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 100);
			},
		},
		Affix::Shaman => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 157);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 108);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 108);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 145);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 100);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 100);
			},
		},
		Affix::Crusader => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 133);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 133);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 71);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 71);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 122);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 122);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 66);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 66);
			},
		},
		Affix::Rampager => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 157);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 108);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 108);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 145);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 100);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 100);
			},
		},
		Affix::Settler => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 157);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 108);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 108);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 145);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 100);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 100);
			},
		},
		Affix::Bringer => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 157);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 108);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 108);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 145);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 100);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 100);
			},
		},
		Affix::Ritualist => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 133);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 133);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 71);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 71);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 122);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 122);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 66);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 66);
			},
		},
		Affix::Dragon => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 133);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 133);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 71);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 71);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 122);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 122);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 66);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 66);
			},
		},}
	
	Slots::Ring => match affix {
		Affix::None => {},
		Affix::Custom => match rarity {
			Rarity::Ascended => {
			},
			Rarity::Exotic => {
			},
		},
		Affix::Berserker => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 126);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 85);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 85);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 115);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 79);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 79);
			},
		},
		Affix::Assassin => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 126);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 85);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 85);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 115);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 79);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 79);
			},
		},
		Affix::Harrier => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 126);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 85);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 85);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 115);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 79);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 79);
			},
		},
		Affix::Commander => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 106);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 106);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 56);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 56);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 97);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 97);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 52);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 52);
			},
		},
		Affix::Minstrel => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 106);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 106);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 56);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 56);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 97);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 97);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 52);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 52);
			},
		},
		Affix::Magi => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 126);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 85);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 85);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 115);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 79);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 79);
			},
		},
		Affix::Marauder => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 106);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 106);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 56);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 56);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 97);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 97);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 52);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 52);
			},
		},
		Affix::Cleric => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 126);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 85);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 85);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 115);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 79);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 79);
			},
		},
		Affix::Nomad => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 126);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 85);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 85);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 115);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 79);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 79);
			},
		},
		Affix::Zealot => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 126);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 85);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 85);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 115);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 79);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 79);
			},
		},
		Affix::Viper => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 106);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 106);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 56);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 56);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 97);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 97);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 52);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 52);
			},
		},
		Affix::Sinister => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 126);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 85);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 85);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 115);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 79);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 79);
			},
		},
		Affix::Grieving => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 106);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 106);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 56);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 56);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 97);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 97);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 52);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 52);
			},
		},
		Affix::Seraph => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 106);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 106);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 56);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 56);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 97);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 97);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 52);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 52);
			},
		},
		Affix::Marshal => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 106);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 106);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 56);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 56);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 97);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 97);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 52);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 52);
			},
		},
		Affix::Giver => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 126);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 85);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 85);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 115);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 79);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 79);
			},
		},
		Affix::Knight => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 126);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 85);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 85);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 115);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 79);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 79);
			},
		},
		Affix::Trailblazer => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 106);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 106);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 56);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 56);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 97);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 97);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 52);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 52);
			},
		},
		Affix::Plaguedoctor => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 106);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 106);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 56);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 56);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 97);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 97);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 52);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 52);
			},
		},
		Affix::Carrion => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 126);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 85);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 85);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 115);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 79);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 79);
			},
		},
		Affix::Rabid => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 126);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 85);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 85);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 115);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 79);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 79);
			},
		},
		Affix::Dire => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 126);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 85);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 85);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 115);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 79);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 79);
			},
		},
		Affix::Vigilant => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 106);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 106);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 56);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 56);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 97);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 97);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 52);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 52);
			},
		},
		Affix::Valkyrie => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 126);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 85);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 85);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 115);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 79);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 79);
			},
		},
		Affix::Cavalier => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 126);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 85);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 85);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 115);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 79);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 79);
			},
		},
		Affix::Celestial => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 57);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 57);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 57);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 57);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 57);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 57);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 57);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 57);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 57);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 54);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 54);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 54);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 54);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 54);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 54);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 54);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 54);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 54);
			},
		},
		Affix::Diviner => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 106);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 106);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 56);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 56);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 97);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 97);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 52);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 52);
			},
		},
		Affix::Soldier => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 126);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 85);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 85);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 115);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 79);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 79);
			},
		},
		Affix::Sentinel => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 126);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 85);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 85);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 115);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 79);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 79);
			},
		},
		Affix::Wanderer => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 106);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 106);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 56);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 56);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 97);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 97);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 52);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 52);
			},
		},
		Affix::Apothecary => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 126);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 85);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 85);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 115);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 79);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 79);
			},
		},
		Affix::Shaman => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 126);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 85);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 85);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 115);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 79);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 79);
			},
		},
		Affix::Crusader => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 106);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 106);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 56);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 56);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 97);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 97);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 52);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 52);
			},
		},
		Affix::Rampager => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 126);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 85);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 85);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 115);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 79);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 79);
			},
		},
		Affix::Settler => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 126);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 85);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 85);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 115);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 79);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 79);
			},
		},
		Affix::Bringer => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 126);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 85);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 85);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 115);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 79);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 79);
			},
		},
		Affix::Ritualist => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 106);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 106);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 56);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 56);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 97);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 97);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 52);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 52);
			},
		},
		Affix::Dragon => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 106);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 106);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 56);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 56);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 97);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 97);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 52);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 52);
			},
		},}
	
	Slots::Accessory => match affix {
		Affix::None => {},
		Affix::Custom => match rarity {
			Rarity::Ascended => {
			},
			Rarity::Exotic => {
			},
		},
		Affix::Berserker => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 110);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 74);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 74);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 100);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 68);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 68);
			},
		},
		Affix::Assassin => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 110);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 74);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 74);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 100);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 68);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 68);
			},
		},
		Affix::Harrier => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 110);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 74);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 74);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 100);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 68);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 68);
			},
		},
		Affix::Commander => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 92);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 92);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 49);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 49);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 84);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 84);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 45);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 45);
			},
		},
		Affix::Minstrel => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 92);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 92);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 49);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 49);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 84);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 84);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 45);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 45);
			},
		},
		Affix::Magi => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 110);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 74);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 74);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 100);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 68);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 68);
			},
		},
		Affix::Marauder => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 92);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 92);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 49);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 49);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 84);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 84);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 45);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 45);
			},
		},
		Affix::Cleric => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 110);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 74);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 74);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 100);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 68);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 68);
			},
		},
		Affix::Nomad => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 110);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 74);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 74);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 100);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 68);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 68);
			},
		},
		Affix::Zealot => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 110);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 74);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 74);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 100);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 68);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 68);
			},
		},
		Affix::Viper => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 92);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 92);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 49);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 49);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 84);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 84);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 45);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 45);
			},
		},
		Affix::Sinister => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 110);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 74);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 74);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 100);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 68);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 68);
			},
		},
		Affix::Grieving => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 92);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 92);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 49);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 49);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 84);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 84);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 45);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 45);
			},
		},
		Affix::Seraph => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 92);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 92);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 49);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 49);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 84);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 84);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 45);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 45);
			},
		},
		Affix::Marshal => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 92);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 92);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 49);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 49);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 84);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 84);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 45);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 45);
			},
		},
		Affix::Giver => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 110);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 74);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 74);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 100);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 68);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 68);
			},
		},
		Affix::Knight => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 110);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 74);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 74);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 100);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 68);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 68);
			},
		},
		Affix::Trailblazer => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 92);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 92);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 49);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 49);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 84);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 84);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 45);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 45);
			},
		},
		Affix::Plaguedoctor => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 92);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 92);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 49);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 49);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 84);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 84);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 45);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 45);
			},
		},
		Affix::Carrion => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 110);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 74);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 74);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 100);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 68);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 68);
			},
		},
		Affix::Rabid => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 110);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 74);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 74);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 100);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 68);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 68);
			},
		},
		Affix::Dire => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 110);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 74);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 74);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 100);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 68);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 68);
			},
		},
		Affix::Vigilant => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 92);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 92);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 49);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 49);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 84);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 84);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 45);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 45);
			},
		},
		Affix::Valkyrie => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 110);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 74);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 74);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 100);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 68);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 68);
			},
		},
		Affix::Cavalier => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 110);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 74);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 74);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 100);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 68);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 68);
			},
		},
		Affix::Celestial => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 50);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 50);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 50);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 50);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 50);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 50);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 50);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 50);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 50);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 47);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 47);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 47);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 47);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 47);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 47);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 47);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 47);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 47);
			},
		},
		Affix::Diviner => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 92);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 92);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 49);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 49);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 84);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 84);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 45);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 45);
			},
		},
		Affix::Soldier => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 110);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 74);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 74);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 100);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 68);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 68);
			},
		},
		Affix::Sentinel => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 110);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 74);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 74);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 100);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 68);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 68);
			},
		},
		Affix::Wanderer => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 92);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 92);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 49);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 49);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 84);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 84);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 45);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 45);
			},
		},
		Affix::Apothecary => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 110);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 74);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 74);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 100);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 68);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 68);
			},
		},
		Affix::Shaman => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 110);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 74);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 74);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 100);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 68);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 68);
			},
		},
		Affix::Crusader => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 92);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 92);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 49);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 49);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 84);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 84);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 45);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 45);
			},
		},
		Affix::Rampager => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 110);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 74);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 74);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 100);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 68);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 68);
			},
		},
		Affix::Settler => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 110);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 74);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 74);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 100);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 68);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 68);
			},
		},
		Affix::Bringer => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 110);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 74);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 74);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 100);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 68);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 68);
			},
		},
		Affix::Ritualist => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 92);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 92);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 49);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 49);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 84);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 84);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 45);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 45);
			},
		},
		Affix::Dragon => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 92);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 92);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 49);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 49);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 84);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 84);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 45);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 45);
			},
		},}
	
	Slots::BackItem => match affix {
		Affix::None => {},
		Affix::Custom => match rarity {
			Rarity::Ascended => {
			},
			Rarity::Exotic => {
			},
		},
		Affix::Berserker => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 63);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 40);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 40);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 55);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 36);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 36);
			},
		},
		Affix::Assassin => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 63);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 40);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 40);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 55);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 36);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 36);
			},
		},
		Affix::Harrier => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 63);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 40);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 40);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 55);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 36);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 36);
			},
		},
		Affix::Commander => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 52);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 52);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 27);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 27);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 46);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 46);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 24);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 24);
			},
		},
		Affix::Minstrel => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 52);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 52);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 27);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 27);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 46);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 46);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 24);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 24);
			},
		},
		Affix::Magi => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 63);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 40);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 40);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 55);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 36);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 36);
			},
		},
		Affix::Marauder => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 52);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 52);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 27);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 27);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 46);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 46);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 24);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 24);
			},
		},
		Affix::Cleric => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 63);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 40);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 40);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 55);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 36);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 36);
			},
		},
		Affix::Nomad => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 63);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 40);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 40);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 55);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 36);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 36);
			},
		},
		Affix::Zealot => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 63);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 40);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 40);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 55);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 36);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 36);
			},
		},
		Affix::Viper => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 52);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 52);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 27);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 27);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 46);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 46);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 24);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 24);
			},
		},
		Affix::Sinister => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 63);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 40);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 40);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 55);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 36);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 36);
			},
		},
		Affix::Grieving => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 52);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 52);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 27);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 27);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 46);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 46);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 24);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 24);
			},
		},
		Affix::Seraph => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 52);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 52);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 27);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 27);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 46);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 46);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 24);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 24);
			},
		},
		Affix::Marshal => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 52);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 52);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 27);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 27);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 46);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 46);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 24);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 24);
			},
		},
		Affix::Giver => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 63);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 40);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 40);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 55);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 36);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 36);
			},
		},
		Affix::Knight => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 63);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 40);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 40);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 55);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 36);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 36);
			},
		},
		Affix::Trailblazer => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 52);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 52);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 27);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 27);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 46);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 46);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 24);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 24);
			},
		},
		Affix::Plaguedoctor => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 52);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 52);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 27);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 27);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 46);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 46);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 24);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 24);
			},
		},
		Affix::Carrion => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 63);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 40);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 40);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 55);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 36);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 36);
			},
		},
		Affix::Rabid => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 63);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 40);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 40);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 55);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 36);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 36);
			},
		},
		Affix::Dire => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 63);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 40);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 40);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 55);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 36);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 36);
			},
		},
		Affix::Vigilant => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 52);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 52);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 27);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 27);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 46);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 46);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 24);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 24);
			},
		},
		Affix::Valkyrie => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 63);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 40);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 40);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 55);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 36);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 36);
			},
		},
		Affix::Cavalier => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 63);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 40);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 40);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 55);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 36);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 36);
			},
		},
		Affix::Celestial => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 28);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 28);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 28);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 28);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 28);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 28);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 28);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 28);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 28);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 26);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 26);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 26);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 26);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 26);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 26);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 26);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 26);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 26);
			},
		},
		Affix::Diviner => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 52);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 52);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 27);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 27);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 46);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 46);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 24);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 24);
			},
		},
		Affix::Soldier => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 63);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 40);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 40);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 55);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 36);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 36);
			},
		},
		Affix::Sentinel => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 63);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 40);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 40);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 55);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 36);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 36);
			},
		},
		Affix::Wanderer => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 52);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 52);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 27);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 27);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 46);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 46);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 24);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 24);
			},
		},
		Affix::Apothecary => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 63);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 40);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 40);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 55);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 36);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 36);
			},
		},
		Affix::Shaman => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 63);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 40);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 40);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 55);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 36);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 36);
			},
		},
		Affix::Crusader => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 52);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 52);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 27);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 27);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 46);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 46);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 24);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 24);
			},
		},
		Affix::Rampager => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 63);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 40);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 40);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 55);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 36);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 36);
			},
		},
		Affix::Settler => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 63);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 40);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 40);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 55);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 36);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 36);
			},
		},
		Affix::Bringer => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 63);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 40);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 40);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 55);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 36);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 36);
			},
		},
		Affix::Ritualist => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 52);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 52);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 27);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 27);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 46);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 46);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 24);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 24);
			},
		},
		Affix::Dragon => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 52);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 52);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 27);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 27);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 46);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 46);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 24);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 24);
			},
		},}
	
	Slots::TwoHandedWeapon => match affix {
		Affix::None => {},
		Affix::Custom => match rarity {
			Rarity::Ascended => {
			},
			Rarity::Exotic => {
			},
		},
		Affix::Berserker => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 251);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 179);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 179);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 239);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 171);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 171);
			},
		},
		Affix::Assassin => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 251);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 179);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 179);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 239);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 171);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 171);
			},
		},
		Affix::Harrier => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 251);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 179);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 179);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 239);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 171);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 171);
			},
		},
		Affix::Commander => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 215);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 215);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 118);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 118);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 205);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 205);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 113);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 113);
			},
		},
		Affix::Minstrel => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 215);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 215);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 118);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 118);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 205);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 205);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 113);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 113);
			},
		},
		Affix::Magi => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 251);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 179);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 179);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 239);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 171);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 171);
			},
		},
		Affix::Marauder => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 215);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 215);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 118);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 118);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 205);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 205);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 113);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 113);
			},
		},
		Affix::Cleric => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 251);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 179);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 179);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 239);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 171);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 171);
			},
		},
		Affix::Nomad => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 251);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 179);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 179);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 239);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 171);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 171);
			},
		},
		Affix::Zealot => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 251);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 179);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 179);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 239);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 171);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 171);
			},
		},
		Affix::Viper => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 215);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 215);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 118);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 118);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 205);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 205);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 113);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 113);
			},
		},
		Affix::Sinister => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 251);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 179);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 179);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 239);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 171);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 171);
			},
		},
		Affix::Grieving => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 215);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 215);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 118);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 118);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 205);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 205);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 113);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 113);
			},
		},
		Affix::Seraph => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 215);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 215);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 118);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 118);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 205);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 205);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 113);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 113);
			},
		},
		Affix::Marshal => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 215);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 215);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 118);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 118);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 205);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 205);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 113);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 113);
			},
		},
		Affix::Giver => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 251);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 179);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 179);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 239);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 171);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 171);
			},
		},
		Affix::Knight => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 251);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 179);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 179);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 239);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 171);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 171);
			},
		},
		Affix::Trailblazer => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 215);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 215);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 118);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 118);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 205);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 205);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 113);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 113);
			},
		},
		Affix::Plaguedoctor => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 215);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 215);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 118);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 118);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 205);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 205);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 113);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 113);
			},
		},
		Affix::Carrion => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 251);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 179);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 179);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 239);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 171);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 171);
			},
		},
		Affix::Rabid => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 251);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 179);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 179);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 239);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 171);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 171);
			},
		},
		Affix::Dire => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 251);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 179);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 179);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 239);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 171);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 171);
			},
		},
		Affix::Vigilant => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 215);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 215);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 118);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 118);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 205);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 205);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 113);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 113);
			},
		},
		Affix::Valkyrie => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 251);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 179);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 179);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 239);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 171);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 171);
			},
		},
		Affix::Cavalier => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 251);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 179);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 179);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 239);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 171);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 171);
			},
		},
		Affix::Celestial => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 118);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 118);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 118);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 118);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 118);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 118);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 118);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 118);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 118);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 113);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 113);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 113);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 113);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 113);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 113);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 113);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 113);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 113);
			},
		},
		Affix::Diviner => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 215);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 215);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 118);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 118);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 205);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 205);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 113);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 113);
			},
		},
		Affix::Soldier => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 251);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 179);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 179);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 239);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 171);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 171);
			},
		},
		Affix::Sentinel => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 251);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 179);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 179);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 239);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 171);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 171);
			},
		},
		Affix::Wanderer => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 215);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 215);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 118);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 118);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 205);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 205);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 113);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 113);
			},
		},
		Affix::Apothecary => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 251);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 179);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 179);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 239);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 171);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 171);
			},
		},
		Affix::Shaman => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 251);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 179);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 179);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 239);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 171);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 171);
			},
		},
		Affix::Crusader => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 215);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 215);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 118);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 118);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 205);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 205);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 113);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 113);
			},
		},
		Affix::Rampager => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 251);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 179);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 179);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 239);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 171);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 171);
			},
		},
		Affix::Settler => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 251);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 179);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 179);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 239);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 171);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 171);
			},
		},
		Affix::Bringer => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 251);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 179);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 179);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 239);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 171);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 171);
			},
		},
		Affix::Ritualist => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 215);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 215);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 118);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 118);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 205);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 205);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 113);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 113);
			},
		},
		Affix::Dragon => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 215);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 215);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 118);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 118);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 205);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 205);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 113);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 113);
			},
		},}
	
	Slots::OneHandedWeapon => match affix {
		Affix::None => {},
		Affix::Custom => match rarity {
			Rarity::Ascended => {
			},
			Rarity::Exotic => {
			},
		},
		Affix::Berserker => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 125);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 90);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 90);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 120);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 85);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 85);
			},
		},
		Affix::Assassin => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 125);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 90);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 90);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 120);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 85);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 85);
			},
		},
		Affix::Harrier => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 125);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 90);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 90);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 120);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 85);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 85);
			},
		},
		Affix::Commander => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 108);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 108);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 59);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 59);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 102);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 102);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 56);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 56);
			},
		},
		Affix::Minstrel => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 108);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 108);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 59);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 59);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 102);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 102);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 56);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 56);
			},
		},
		Affix::Magi => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 125);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 90);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 90);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 120);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 85);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 85);
			},
		},
		Affix::Marauder => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 108);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 108);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 59);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 59);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 102);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 102);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 56);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 56);
			},
		},
		Affix::Cleric => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 125);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 90);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 90);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 120);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 85);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 85);
			},
		},
		Affix::Nomad => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 125);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 90);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 90);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 120);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 85);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 85);
			},
		},
		Affix::Zealot => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 125);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 90);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 90);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 120);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 85);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 85);
			},
		},
		Affix::Viper => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 108);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 108);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 59);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 59);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 102);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 102);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 56);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 56);
			},
		},
		Affix::Sinister => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 125);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 90);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 90);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 120);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 85);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 85);
			},
		},
		Affix::Grieving => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 108);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 108);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 59);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 59);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 102);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 102);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 56);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 56);
			},
		},
		Affix::Seraph => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 108);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 108);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 59);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 59);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 102);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 102);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 56);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 56);
			},
		},
		Affix::Marshal => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 108);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 108);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 59);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 59);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 102);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 102);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 56);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 56);
			},
		},
		Affix::Giver => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 125);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 90);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 90);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 120);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 85);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 85);
			},
		},
		Affix::Knight => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 125);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 90);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 90);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 120);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 85);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 85);
			},
		},
		Affix::Trailblazer => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 108);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 108);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 59);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 59);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 102);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 102);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 56);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 56);
			},
		},
		Affix::Plaguedoctor => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 108);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 108);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 59);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 59);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 102);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 102);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 56);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 56);
			},
		},
		Affix::Carrion => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 125);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 90);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 90);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 120);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 85);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 85);
			},
		},
		Affix::Rabid => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 125);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 90);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 90);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 120);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 85);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 85);
			},
		},
		Affix::Dire => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 125);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 90);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 90);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 120);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 85);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 85);
			},
		},
		Affix::Vigilant => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 108);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 108);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 59);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 59);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 102);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 102);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 56);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 56);
			},
		},
		Affix::Valkyrie => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 125);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 90);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 90);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 120);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 85);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 85);
			},
		},
		Affix::Cavalier => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 125);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 90);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 90);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 120);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 85);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 85);
			},
		},
		Affix::Celestial => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 59);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 59);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 59);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 59);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 59);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 59);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 59);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 59);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 59);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 56);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 56);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 56);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 56);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 56);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 56);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 56);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 56);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 56);
			},
		},
		Affix::Diviner => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 108);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 108);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 59);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 59);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 102);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 102);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 56);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 56);
			},
		},
		Affix::Soldier => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 125);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 90);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 90);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 120);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 85);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 85);
			},
		},
		Affix::Sentinel => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 125);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 90);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 90);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 120);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 85);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 85);
			},
		},
		Affix::Wanderer => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 108);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 108);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 59);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 59);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 102);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 102);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 56);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 56);
			},
		},
		Affix::Apothecary => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 125);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 90);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 90);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 120);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 85);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 85);
			},
		},
		Affix::Shaman => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 125);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 90);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 90);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 120);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 85);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 85);
			},
		},
		Affix::Crusader => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 108);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 108);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 59);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 59);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 102);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 102);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 56);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 56);
			},
		},
		Affix::Rampager => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 125);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 90);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 90);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 120);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 85);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 85);
			},
		},
		Affix::Settler => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 125);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 90);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 90);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Toughness), 120);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 85);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::HealingPower), 85);
			},
		},
		Affix::Bringer => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 125);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 90);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 90);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 120);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 85);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 85);
			},
		},
		Affix::Ritualist => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 108);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 108);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 59);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 59);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::ConditionDamage), 102);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 102);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Concentration), 56);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Expertise), 56);
			},
		},
		Affix::Dragon => match rarity {
			Rarity::Ascended => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 108);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 108);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 59);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 59);
			},
			Rarity::Exotic => {
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Power), 102);
				stats.add_attribute_value(&Attribute::Secondary(SecondaryAttributeName::Ferocity), 102);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Precision), 56);
				stats.add_attribute_value(&Attribute::Primary(PrimaryAttributeName::Vitality), 56);
			},
		},}
	}
}