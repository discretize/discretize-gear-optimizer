const babel = require('@babel/core');

function require_from_string(code) {
  // This is a rudimentary implementation of commonjs, but it's enough for the code that babel produces from esm sources.
  let wrapper = new Function('exports', code);
  let exports = {};
  wrapper(exports);
  return exports;
}

// Does what it says on the tin.
// The downside is that the given ts file must not import/require other files. Babel is not a bundler.
// If we need to use this on something more complex, we could try using esbuild or vite here.
function require_ts(path) {
  let { code } = babel.transformFileSync(path, {
    presets: ['@babel/preset-typescript'],
    plugins: ['@babel/plugin-transform-modules-commonjs'],
  });
  return require_from_string(code);
}

exports['require_ts'] = require_ts;
