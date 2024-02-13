import babel from '@babel/core';

function requireFromString(code) {
  // This is a rudimentary implementation of commonjs, but it's enough for the code that babel produces from esm sources.
  // eslint-disable-next-line no-new-func
  const wrapper = new Function('exports', code);
  const exports = {};
  wrapper(exports);
  return exports;
}

// Does what it says on the tin.
// The downside is that the given ts file must not import/require other files. Babel is not a bundler.
// If we need to use this on something more complex, we could try using esbuild or vite here.
// Note: the path is always relative to the pwd, not the file from which requireTS() was called.
// Note: this can also require plain js esm.
export default function requireTS(path) {
  const { code } = babel.transformFileSync(path, {
    presets: ['@babel/preset-typescript'],
    plugins: ['@babel/plugin-transform-modules-commonjs'],
  });
  return requireFromString(code);
}
