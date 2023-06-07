use serde::Serialize;
use std::vec;

use crate::{
    data::{
        attribute::Attribute,
        character::{Character, ResultCharacter},
        settings::Settings,
    },
    optimizer_core::update_attributes,
};

#[derive(Debug, Serialize)]
pub struct Result {
    // this holds the finalized characters that will be returned to js
    // only computed after calling on_complete
    pub best_characters: Vec<ResultCharacter>,

    // only used for local calculations; not returned to js
    characters: Vec<Character>,

    max_results: usize,
    worst_score: f32,
}

impl Result {
    pub fn new(max_results: usize) -> Result {
        Result {
            best_characters: vec![],
            worst_score: f32::MIN,
            max_results: max_results,
            characters: vec![],
        }
    }

    pub fn insert(&mut self, character: &Character) {
        let score = character.score();

        // if the score is worse than the worst score we already have found, we can skip it
        if self.worst_score > score && self.characters.len() >= self.max_results {
            return;
        }

        // figure out the position in the vector where we should insert the new character
        let mut insert_position = self.characters.len();
        for (i, c) in self.characters.iter().enumerate() {
            if c.score() < score {
                insert_position = i;
                break;
            }
        }

        // insert the new character
        self.characters
            .splice(insert_position..insert_position, [character.clone()]);
        if self.characters.len() > self.max_results {
            self.characters.pop();
        }

        self.worst_score = self.characters.last().unwrap().score();
    }

    pub fn on_complete(&mut self, combinations: &Vec<Settings>) {
        // convert the characters to ResultCharacters
        self.characters
            .iter()
            .for_each(|c| self.best_characters.push(ResultCharacter::from(c)));

        for character in self.best_characters.iter_mut() {
            // find the combination that this character belongs to
            let settings = combinations.get(character.combination_id as usize).unwrap();

            // add gear stats to the character
            for (index, affix) in character.gear.iter().enumerate() {
                let index_in_affix_array = settings.affixesArray[index]
                    .iter()
                    .position(|&r| r.to_number() == affix.to_number());

                if index_in_affix_array.is_none() {
                    continue;
                }

                let attributes_to_add =
                    &settings.affixStatsArray[index][index_in_affix_array.unwrap()];

                // add attribtues to gear stats
                attributes_to_add
                    .iter()
                    .for_each(|a| character.gear_stats[a.0 as usize] += a.1);
            }

            calc_results(character, settings);
        }
    }
}

fn calc_results(character: &mut ResultCharacter, settings: &Settings) {
    let attributes = character.attributes;
    // results.value is assigned when calling ResultCharacter::from
    // we skip indicators in rust to avoid redundancy

    // baseline for comparing adding/subtracting +5 infusions
    let mut baseline = character.clone().to_character();
    update_attributes(&mut baseline, settings, true);

    // effective gain/loss from +5 attributes
    for (index, attribute) in [
        Attribute::Power,
        Attribute::Precision,
        Attribute::Ferocity,
        Attribute::ConditionDamage,
        Attribute::Expertise,
    ]
    .iter()
    .enumerate()
    {
        let mut copy = character.clone().to_character();
        // add +5 infusions
        copy.base_attributes[*attribute as usize] = copy.base_attributes[*attribute as usize] + 5.0;

        update_attributes(&mut copy, settings, true);
        character.results.effectivePositiveValues[index] = copy.attributes
            [Attribute::Damage as usize]
            - baseline.attributes[Attribute::Damage as usize];

        // subtract -5 infusions
        copy = character.clone().to_character();
        copy.base_attributes[*attribute as usize] =
            f32::max(copy.base_attributes[*attribute as usize] - 5.0, 0.0);

        update_attributes(&mut copy, settings, true);
        character.results.effectiveNegativeValues[index] = copy.attributes
            [Attribute::Damage as usize]
            - baseline.attributes[Attribute::Damage as usize];
    }

    for (index, attribute) in [
        Attribute::PowerDPS,
        Attribute::Power2DPS,
        Attribute::BleedingDPS,
        Attribute::BurningDPS,
        Attribute::ConfusionDPS,
        Attribute::PoisonDPS,
        Attribute::TormentDPS,
    ]
    .iter()
    .enumerate()
    {
        // effective damage distribution
        character.results.effectiveDamageDistribution[index] =
            character.attributes[*attribute as usize] / attributes[Attribute::Damage as usize]
                * 100.0;

        // damage breakdown
        character.results.damageBreakdown[index] = character.attributes[*attribute as usize];
    }
}
