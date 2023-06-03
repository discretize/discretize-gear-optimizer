use optimizer_core::start;

use wasm_bindgen::prelude::*;
use web_sys::console;

mod gw2data;
mod optimizer_core;
mod result;
mod utils;

use gw2data::Combination;

/// entry point from JS
///
/// # Arguments
/// - `js_chunks` - a stringified JSON array of arrays of i8
/// - `js_combinations` - a stringified JSON array of combination objects
///
#[wasm_bindgen]
pub fn calculate(
    js_chunks: String,
    js_combinations: String,
    _total_threads: u8,
    _thread_num: u8,
) -> Option<String> {
    let opt_chunks = utils::parse_string_to_vector(&js_chunks);
    let chunks = match opt_chunks {
        Some(chunks) => chunks,
        None => {
            console::log_1(&JsValue::from_str("Error parsing chunks"));
            return None;
        }
    };
    let chunks = utils::vec_i8_to_affix(chunks);

    let combinations: Vec<Combination> = serde_json::from_str(&js_combinations).unwrap();

    // calculate the result (maxResult best characters) for the given chunks
    let mut result = start(&chunks, &combinations);
    result.on_complete(&combinations);

    // parse to string
    let result_str = serde_json::to_string(&result.best_characters);

    match result_str {
        Ok(result_str) => return Some(result_str),
        Err(_) => None,
    }
}
