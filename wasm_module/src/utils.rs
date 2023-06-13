use crate::data::{
    affix::Affix, attribute::Attribute, character::Attributes, combination::Combination,
    settings::Settings,
};
use rand::Rng;
use serde_json::Value;
use wasm_bindgen::JsValue;
use web_sys::console;

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

pub fn parse_args(
    js_chunks: String,
    js_settings: String,
    js_combinations: Option<String>,
) -> Option<(Vec<Vec<Affix>>, Settings, Option<Vec<Combination>>)> {
    let chunks = match parse_string_to_vector(&js_chunks) {
        Some(chunks) => vec_i8_to_affix(chunks),
        None => {
            console::log_1(&JsValue::from_str("Error parsing chunks"));
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

    console::log_1(&JsValue::from_str(
        format!("Settings: {:?}", js_combinations).as_str(),
    ));

    let combinations: Option<Vec<Combination>> = match js_combinations {
        Some(js_combinations) => match serde_json::from_str(&js_combinations) {
            Ok(combinations) => Some(combinations),
            Err(_) => {
                console::log_1(&JsValue::from_str("Error parsing combinations"));
                return None;
            }
        },
        None => None,
    };

    Some((chunks, settings, combinations))
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

pub fn _print_attr(attr: &Attributes) {
    for i in 0..attr.len() {
        let attribute: Attribute = unsafe { ::std::mem::transmute(i as u8) };

        console::log_1(&JsValue::from_str(&format!("{}: {}\n", attribute, attr[i])));
    }
}

/// Returns a random combination of affixes
///
/// # Arguments
/// - `affixes_array` - The array of affixes from which to choose
/// - `slots` - The number of slots to pick from the affixes_array
pub fn get_random_affix_combination(affixes_array: &[Vec<Affix>; 14], slots: usize) -> [Affix; 14] {
    let mut rng = rand::thread_rng();

    let mut result: [Affix; 14] = [Affix::None; 14];
    for i in 0..slots {
        let affixes = &affixes_array[i];

        let random_index = rng.gen_range(0..affixes.len()) as usize;
        result[i] = affixes[random_index];
    }
    result
}

/// Returns the total number of combinations that the given settings will produce
///
/// # Arguments
/// - `settings` - The settings list
pub fn get_total_combinations(settings: &Settings, extras_combination_count: usize) -> u128 {
    let mut result = extras_combination_count as u128;
    let affixes_array = &settings.affixesArray;
    let slots = settings.slots;

    for i in 0..slots {
        result *= affixes_array[i as usize].len() as u128;
    }

    result
}

pub mod serde_arrays {
    use serde::Serialize;

    use crate::data::attribute::ATTRIBUTE_COUNT;

    pub fn serialize<S, T>(array: &[T; ATTRIBUTE_COUNT], serializer: S) -> Result<S::Ok, S::Error>
    where
        S: serde::Serializer,
        T: Serialize,
    {
        array[..].serialize(serializer)
    }
}
