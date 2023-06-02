use serde::Serialize;
use wasm_bindgen::JsValue;
use web_sys::console;

use crate::gw2data::{Attribute, Character};

#[derive(Debug, Serialize)]
pub struct Result {
    pub best_characters: Vec<Character>,

    worst_score: f32,
}

impl Result {
    pub fn new(rankby: Attribute, max_results: usize) -> Result {
        Result {
            best_characters: vec![Character::new(rankby); max_results],
            worst_score: f32::MIN,
        }
    }

    pub fn insert(&mut self, character: &Character) {
        let score = character.score();

        // if the score is worse than the worst score we already have found, we can skip it
        if self.worst_score > score {
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

        self.best_characters
            .splice(insert_position..insert_position, [character.clone()]);

        self.best_characters.pop();

        self.worst_score = self.best_characters.last().unwrap().score();
    }
}
