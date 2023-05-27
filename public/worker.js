importScripts("https://unpkg.com/comlink/dist/umd/comlink.js");
importScripts("/pkg/wasm_module.js");

// comes from imported script
const { calculate } = wasm_bindgen;


let chunks = []
let affixArray = []


const worker = {
  setup: (_chunks, _affixArray) => {
    chunks = _chunks
    affixArray = _affixArray
  },

  start: async () => {
    const start = performance.now();
    await wasm_bindgen("/pkg/wasm_module_bg.wasm");
    const data = calculate(JSON.stringify(chunks), JSON.stringify(affixArray));
    const time = performance.now() - start;
    return { time, data };
  }
};

Comlink.expose(worker);