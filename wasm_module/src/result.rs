use std::vec;

use serde::Serialize;

use crate::gw2data::Character;

#[derive(Debug, Serialize)]
pub struct Result {
    pub best_characters: Vec<Character>,

    max_results: usize,
    worst_score: f32,
}

impl Result {
    pub fn new(max_results: usize) -> Result {
        Result {
            best_characters: vec![],
            worst_score: f32::MIN,
            max_results: max_results,
        }
    }

    pub fn insert(&mut self, character: &Character) {
        let score = character.score();

        // if the score is worse than the worst score we already have found, we can skip it
        if self.worst_score > score && self.best_characters.len() >= self.max_results {
            return;
        }

        // figure out the position in the vector where we should insert the new character
        let mut insert_position = self.best_characters.len();
        for (i, c) in self.best_characters.iter().enumerate() {
            if c.score() < score {
                insert_position = i;
                break;
            }
        }

        // insert the new character
        // self.best_characters.push(character.clone());
        // self.best_characters
        //     .sort_by(|a, b| b.score().partial_cmp(&a.score()).unwrap());

        self.best_characters
            .splice(insert_position..insert_position, [character.clone()]);
        if self.best_characters.len() > self.max_results {
            self.best_characters.pop();
        }

        self.worst_score = self.best_characters.last().unwrap().score();
    }
}
