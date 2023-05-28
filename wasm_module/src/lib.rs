use std::{borrow::BorrowMut, cell::RefCell, char};

use wasm_bindgen::prelude::*;
use web_sys::console;

mod gw2data;
mod utils;

use gw2data::{add_stats, slot_from_indexed_array, Affix, Character, CharacterStats, Rarity};

pub fn descend_subtree_dfs<F>(affix_array: &[Vec<Affix>], subtree: &[Affix], leaf_callback: &mut F)
where
    F: FnMut(&[Affix]),
{
    let current_layer = subtree.len();

    if current_layer == affix_array.len() {
        // if we reached leafs of the tree, call the function
        leaf_callback(subtree);
    } else {
        let permutation_options = &affix_array[current_layer];

        let mut new_subtree: Vec<Affix> = Vec::with_capacity(subtree.len() + 1);
        new_subtree.clear();
        new_subtree.extend_from_slice(subtree);

        for &option in permutation_options {
            new_subtree.push(option);
            descend_subtree_dfs(affix_array, &new_subtree, leaf_callback);
            new_subtree.pop();
        }
    }
}

/**
 * This function calculates the stats for a given character.
 *
 * absolutely critical, it gets called for every single affix permutation
 */
pub fn calculate_stats(character: &mut Character) {
    character.clear();

    for (index, slot) in character.slots.iter().enumerate() {
        // get the slot's affixes
        add_stats(
            character,
            slot.affix,
            slot_from_indexed_array(index),
            Rarity::Ascended,
        )
    }
}

/**
 * Starts the calculation.
 */
pub fn start(chunks: &Vec<Vec<Affix>>, affix_array: &Vec<Vec<Affix>>) -> i32 {
    let counter = RefCell::new(0);
    let mut character = Character::default();

    let mut callback = |subtree: &[Affix]| {
        // Leaf callback implementation

        // set stats of character slots to subtree affixes
        for (index, affix) in subtree.iter().enumerate() {
            character.set_affix(index, *affix)
        }

        // calculate stats for character
        calculate_stats(&mut character);

        *counter.borrow_mut() += 1;
    };

    for chunk in chunks {
        // start dfs into tree
        descend_subtree_dfs(&affix_array, &chunk, &mut callback);
    }

    return counter.into_inner();
}

#[wasm_bindgen]
pub fn calculate(js_chunks: String, js_affix_array: String) -> i32 {
    let opt_chunks = utils::parse_string_to_vector(&js_chunks);
    let chunks = match opt_chunks {
        Some(chunks) => chunks,
        None => {
            console::log_1(&JsValue::from_str("Error parsing chunks"));
            return -1;
        }
    };
    let chunks = utils::vec_i8_to_affix(chunks);

    // utils::pretty_print_vector(chunks.clone());
    // console::log_1(&JsValue::from_str(&js_chunks));

    let affix_array = utils::parse_string_to_vector(&js_affix_array);
    let affix_array = match affix_array {
        Some(affix_array) => affix_array,
        None => {
            console::log_1(&JsValue::from_str("Error parsing affix array"));
            return -1;
        }
    };
    let affix_array = utils::vec_i8_to_affix(affix_array);

    //pretty_print_vector(affix_array.clone());
    // console::log_1(&JsValue::from_str(&js_affix_array));

    // -- done with parsing --
    let counter = start(&chunks, &affix_array);

    return counter;
}
