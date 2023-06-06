use criterion::{criterion_group, criterion_main, Criterion};

use wasm_module::data::affix::Affix;
use wasm_module::data::settings::Settings;
use wasm_module::optimizer_core::start;

const SMALL_DATA: &str = include_str!("smalldata.json");

fn berserker_small(c: &mut Criterion) {
    let combinations: Vec<Settings> = serde_json::from_str(SMALL_DATA).unwrap();
    let chunks = vec![vec![Affix::Berserker, Affix::Berserker]];

    c.bench_function("power bers (outdated)", |b| {
        b.iter(|| {
            let mut result = start(&chunks, &combinations, None);
            result.on_complete(&combinations);
        });
    });
}

criterion_group!(benches, berserker_small);
criterion_main!(benches);
