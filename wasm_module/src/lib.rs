use data::settings::Settings;
use optimizer_core::start;

use wasm_bindgen::prelude::*;
use web_sys::console;

// public so that the benches can access it
pub mod data;
pub mod optimizer_core;
mod result;
mod utils;

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
    let combinations: Vec<Settings> = serde_json::from_str(&js_combinations).unwrap();

    // needed to post messages to js. this is done via the global scope
    // since we might also want to execute the core on another target (x86, ... ) where wasm-bindgen
    // is not available, we pass through an optional global scope
    let workerglobal = js_sys::global()
        .dyn_into::<web_sys::DedicatedWorkerGlobalScope>()
        .unwrap();

    // calculate the result (maxResult best characters) for the given chunks
    let mut result = start(&chunks, &combinations, Some(&workerglobal));
    result.on_complete(&combinations);

    // parse to string
    let result_str = serde_json::to_string(&result.best_characters);

    match result_str {
        Ok(result_str) => return Some(result_str),
        Err(_) => None,
    }
}

#[wasm_bindgen]
pub fn calculate_threaded(
    js_chunks: String,
    js_combinations: String,
    _num_threads: u32,
) -> Option<String> {
    let opt_chunks = utils::parse_string_to_vector(&js_chunks);
    let chunks = match opt_chunks {
        Some(chunks) => chunks,
        None => {
            console::log_1(&JsValue::from_str("Error parsing chunks"));
            return None;
        }
    };
    let _chunks = utils::vec_i8_to_affix(chunks);
    let _combinations: Vec<Settings> = serde_json::from_str(&js_combinations).unwrap();
    // todo
    None
}
