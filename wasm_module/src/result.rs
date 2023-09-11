use crate::data::{
    character::Character, combination::Combination, resultcharacter::ResultCharacter,
    settings::Settings,
};
use serde::Serialize;
use std::vec;
#[derive(Debug, Serialize)]
pub struct Result {
    /// this holds the finalized characters that will be returned to js
    /// only computed after calling on_complete
    pub best_characters: Vec<ResultCharacter>,

    /// only used for local calculations; not returned to js
    characters: Vec<Character>,

    max_results: usize,

    /// current worst score
    worst_score: f32,
}

impl Result {
    pub fn new(max_results: usize) -> Result {
        Result {
            best_characters: vec![],
            worst_score: f32::MIN,
            max_results,
            characters: vec![],
        }
    }

    /// Inserts a character into the result list.
    /// Will only insert the character if it is better than the worst character we already have found
    ///
    /// # Arguments
    /// - `character` - the character to insert
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

    /// This function should be called after the calculation is complete.
    /// It will fill the best_characters array with the characters and enhance them with additional information
    /// needed for a clean display in the UI
    ///
    /// # Arguments
    /// - `settings` - the settings array that is used to calculate the results
    /// - `combinations` - the combinations array that is used to calculate the results
    pub fn on_complete(&mut self, settings: &Settings, combinations: &[Combination]) {
        self.best_characters.clear();

        // convert the characters to ResultCharacters
        self.characters
            .iter()
            .for_each(|c| self.best_characters.push(ResultCharacter::from(c)));

        for character in self.best_characters.iter_mut() {
            // find the combination that this character belongs to
            let combination = combinations.get(character.combination_id as usize).unwrap();

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

            // fills the character.results object with additional details about the character
            character.calc_results(settings, combination);
        }
    }

    /// Returns an array of length combinations.len() that contains the weighted percentage of characters that belong to each combination
    /// Weighted means that a character that is ranked higher in the result list will have a higher weight.
    /// The results are multiplied by 100. So if the result is 50, it means that likely 50% of the good characters will belong to this combination
    ///
    /// # Arguments
    /// - `settings` - the settings array that is used to calculate the results
    ///
    /// # Returns
    /// An array of length combinations.len() that contains the weighted percentage of characters that belong to each combination
    pub fn get_weighted_combinations(&self, combinations: &Vec<Combination>) -> Vec<u32> {
        let mut combination_count = vec![0; combinations.len()];

        for (rank, character) in self.characters.iter().enumerate() {
            let combination_id = character.combination_id as usize;
            combination_count[combination_id] += (self.characters.len() - rank) as u32;
        }

        // convert to percentage
        let sum: u32 = combination_count.iter().sum();
        combination_count
            .iter_mut()
            .for_each(|c| *c = (*c as f32 / sum as f32 * 100.0) as u32);

        combination_count
    }
}
