pub mod affix;
pub mod attribute;
pub mod character;
pub mod misc;
pub mod settings;

/// how frequently (in calculation runs) should progress updates be sent to the main thread
pub const PROGRESS_UPDATE_INTERVALL: u128 = 1000000;
