use std::cell::RefCell;

use wasm_bindgen::prelude::*;
use web_sys::console;

mod gw2data;
mod utils;

use gw2data::{Affix, Character, Combination};

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
 * Starts the calculation.
 */
pub fn start(chunks: &Vec<Vec<Affix>>, combinations: &Vec<Combination>) -> i32 {
    let counter = RefCell::new(0);
    let mut character = Character::default();
    let affix_array = &combinations[0].affixesArray;
    let affix_stats = &combinations[0].affixStatsArray;

    let mut callback = |subtree: &[Affix]| {
        // Leaf callback implementation
        character.clear();

        for (index, affix) in subtree.iter().enumerate() {
            // all of this is neglible compared to base_attributes.add_attributes
            character.set_affix(index, *affix);

            let index_in_affix_array = affix_array[index]
                .iter()
                .position(|&r| r.to_number() == affix.to_number())
                .unwrap();
            let attributes_to_add = &affix_stats[index][index_in_affix_array];

            // this call is expensive!
            character.add_attributes(attributes_to_add);
        }

        *counter.borrow_mut() += 1;
    };

    for chunk in chunks {
        // start dfs into tree
        descend_subtree_dfs(affix_array, &chunk, &mut callback);
    }

    return counter.into_inner();
}

#[wasm_bindgen]
pub fn calculate(js_chunks: String, js_combinations: String) -> i32 {
    console::log_1(&JsValue::from_str("calculate() called"));

    let opt_chunks = utils::parse_string_to_vector(&js_chunks);
    let chunks = match opt_chunks {
        Some(chunks) => chunks,
        None => {
            console::log_1(&JsValue::from_str("Error parsing chunks"));
            return -1;
        }
    };
    let chunks = utils::vec_i8_to_affix(chunks);

    let combinations: Vec<Combination> = serde_json::from_str(&js_combinations).unwrap();

    // console::log_1(&JsValue::from_str("Parsed combinations"));
    //print parsed combinations from serde_json
    // console::log_1(&JsValue::from_str(&format!("{:?}", combinations)));
    // console::log_1(&JsValue::from_str(&format!(
    //     "{:?}",
    //     combinations[0].baseAttributes
    // )));

    // -- done with parsing --
    let counter = start(&chunks, &combinations);

    return counter;
}
