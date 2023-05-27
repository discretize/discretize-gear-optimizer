use std::cell::RefCell;

use serde_json::Value;
use wasm_bindgen::prelude::*;
use web_sys::console;

mod gw2data;

use gw2data::Affix;

fn parse_string_to_vector(input: &str) -> Option<Vec<Vec<i8>>> {
    let json_value: Value = serde_json::from_str(input).ok()?;
    let outer_vec = json_value.as_array()?;

    let mut result = Vec::new();

    for inner_value in outer_vec {
        let inner_vec = inner_value.as_array()?;
        let mut parsed_inner_vec = Vec::new();

        for value in inner_vec {
            let parsed_value = value.as_i64()? as i8;
            parsed_inner_vec.push(parsed_value);
        }

        result.push(parsed_inner_vec);
    }

    Some(result)
}

pub fn pretty_print_vector(vector: Vec<Vec<i8>>) {
    let formatted_string = vector
        .iter()
        .map(|inner_vec| {
            let inner_string = inner_vec
                .iter()
                .map(|value| value.to_string())
                .collect::<Vec<String>>()
                .join(", ");
            format!("[{}]", inner_string)
        })
        .collect::<Vec<String>>()
        .join(", ");

    console::log_1(&JsValue::from_str(&format!("[{}]", formatted_string)));
}

pub fn descend_subtree_dfs(affix_array: &[Vec<i8>], subtree: &[i8], leaf_callback: &dyn Fn(&[i8])) {
    let current_layer = subtree.len();

    if current_layer == affix_array.len() {
        // if we reached leafs of the tree, call the function
        leaf_callback(subtree);
    } else {
        let permutation_options = &affix_array[current_layer];

        let mut new_subtree: Vec<i8> = Vec::with_capacity(subtree.len() + 1);
        new_subtree.clear();
        new_subtree.extend_from_slice(subtree);

        for &option in permutation_options {
            new_subtree.push(option);
            descend_subtree_dfs(affix_array, &new_subtree, leaf_callback);
            new_subtree.pop();
        }
    }
}

pub fn start(chunks: &Vec<Vec<i8>>, affix_array: &Vec<Vec<i8>>) -> i32 {
    let counter = RefCell::new(0);

    for chunk in chunks {
        // start dfs into tree
        descend_subtree_dfs(&affix_array, &chunk, &|_subtree: &[i8]| {
            // Leaf callback implementation
            *counter.borrow_mut() += 1;
        });
    }

    return counter.into_inner();
}

#[wasm_bindgen]
pub fn calculate(js_chunks: String, js_affix_array: String) -> i32 {
    let chunks = parse_string_to_vector(&js_chunks).unwrap();
    // pretty_print_vector(chunks.clone());
    // console::log_1(&JsValue::from_str(&js_chunks));

    let affix_array = parse_string_to_vector(&js_affix_array).unwrap();
    //pretty_print_vector(affix_array.clone());
    // console::log_1(&JsValue::from_str(&js_affix_array));

    // -- done with parsing --
    let counter = start(&chunks, &affix_array);

    return counter;
}
