use optimizer_core::start;

use wasm_bindgen::prelude::*;
use web_sys::console;

mod gw2data;
mod optimizer_core;
mod utils;

use gw2data::Combination;

/// entry point from JS
///
/// # Arguments
/// - `js_chunks` - a stringified JSON array of arrays of i8
/// - `js_combinations` - a stringified JSON array of combination objects
///
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
