use criterion::{criterion_group, criterion_main, Criterion};

use wasm_module::data::affix::Affix;
use wasm_module::data::settings::Settings;
use wasm_module::optimizer_core::start;

const SMALL_DATA: &str = include_str!("smalldata.json");
const MEDIUM_DATA: &str = include_str!("mediumdata.json");

fn core(c: &mut Criterion) {
    let combinations_small: Vec<Settings> = serde_json::from_str(SMALL_DATA).unwrap();
    let combinations_medium: Vec<Settings> = serde_json::from_str(MEDIUM_DATA).unwrap();
    let chunks = vec![vec![Affix::Berserker]];

    c.bench_function("power bers 2x affix", |b| {
        b.iter(|| {
            let mut result = start(&chunks, &combinations_small, None);
            result.on_complete(&combinations_small);
        });
    });

    c.bench_function("power bers 3x affix", |b| {
        b.iter(|| {
            let mut result = start(&chunks, &combinations_medium, None);
            result.on_complete(&combinations_medium);
        });
    });
}

criterion_group!(benches, core);
criterion_main!(benches);
