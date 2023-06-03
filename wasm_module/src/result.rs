use crate::gw2data::{Character, Combination, ResultCharacter};
use serde::Serialize;
use std::vec;

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

    pub fn on_complete(&mut self, combinations: &Vec<Combination>) {
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
        }
    }
}
