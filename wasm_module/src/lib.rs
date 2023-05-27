use wasm_bindgen::prelude::*;
use web_sys::console;

#[wasm_bindgen]
pub fn calculate(chunks: String, affixArray: String) -> u32 {
    // print to js console
    let message = "Hello from Rust!";
    console::log_1(&JsValue::from_str(message));

    // print parameters
    console::log_1(&JsValue::from_str(&chunks));
    console::log_1(&JsValue::from_str(&affixArray));

    return 123893838;
}
