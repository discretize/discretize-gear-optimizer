use serde_json::Value;
use wasm_bindgen::JsValue;
use web_sys::console;

use crate::gw2data::Affix;

/**
 * Parses a string into a vector of vectors of i8.
 *
 * The passed input from JS is a string - wasm_bindgen does not yet
 * support passing arrays. This methods parses the string into a
 * vector of vectors of i8.
 */
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

pub fn _pretty_print_vector(vector: Vec<Vec<Affix>>) {
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

pub fn round_even(number: f32) -> f32 {
    if (number % 1.0) == 0.5 {
        let floor = number.floor();
        if (floor % 2.0) == 0.0 {
            return floor;
        }
        return floor + 1.0;
    }
    number.round()
}

pub fn clamp(input: f32, min: f32, max: f32) -> f32 {
    if input < min {
        return min;
    }
    if input > max {
        return max;
    }
    input
}
