pub mod affix;
pub mod attribute;
pub mod character;
pub mod combination;
pub mod misc;
pub mod resultcharacter;
pub mod settings;

/// how frequently (in calculation runs) should progress updates be sent to the main thread
pub const PROGRESS_UPDATE_INTERVALL: u128 = 1000000;
/// How many iterations should be run in the heuristics / benchmark mode before running the actual calculation with settings that are likely to be good
pub const BENCHMARK_ITERATIONS_PER_SETTING: u128 = 1000;
