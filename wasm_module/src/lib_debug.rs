use data::{affix::Affix, combination::Combination, settings::Settings};
use serde_json::Value;
use wasm_bindgen::prelude::*;
use web_sys::console;

// public so that the benches can access it
pub mod data;

pub fn parse_string_to_vector(input: &str) -> Option<Vec<Vec<i8>>> {
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

pub fn vec_i8_to_affix(vec: Vec<Vec<i8>>) -> Vec<Vec<Affix>> {
    vec.into_iter()
        .map(|inner_vec| {
            inner_vec
                .into_iter()
                .map(|value| Affix::from_number(value).unwrap())
                .collect::<Vec<Affix>>()
        })
        .collect::<Vec<Vec<Affix>>>()
}

fn parse_args(
    js_chunks: String,
    js_settings: String,
    js_combinations: String,
) -> Option<(Vec<Vec<Affix>>, Settings, Vec<Combination>)> {
    let chunks = match parse_string_to_vector(&js_chunks) {
        Some(chunks) => vec_i8_to_affix(chunks),
        None => {
            console::log_1(&JsValue::from_str("Error parsing chunks"));
            return None;
        }
    };

    let combinations: Vec<Combination> = match serde_json::from_str(&js_combinations) {
        Ok(combinations) => combinations,
        Err(_) => {
            console::log_1(&JsValue::from_str("Error parsing combinations"));
            return None;
        }
    };

    let settings = match serde_json::from_str(&js_settings) {
        Ok(settings) => settings,
        Err(_) => {
            console::log_1(&JsValue::from_str("Error parsing settings"));
            return None;
        }
    };

    Some((chunks, settings, combinations))
}

#[wasm_bindgen]
pub fn calculate_with_heuristics(
    js_chunks: String,
    js_settings: String,
    js_combinations: String,
) -> Option<String> {
    let args = parse_args(js_chunks, js_settings, js_combinations);
    let (chunks, settings, combinations) = match args {
        Some(args) => args,
        None => return None,
    };

    None
}
