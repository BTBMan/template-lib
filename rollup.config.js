import pkg from './package.json';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import sourcemaps from 'rollup-plugin-sourcemaps';

export default {
  input: 'src/index.ts',
  plugins: [resolve(), commonjs(), typescript(), sourcemaps()],
  output: [
    {
      format: 'cjs',
      file: pkg.main,
      sourcemap: true,
    },
    {
      name: 'vue',
      format: 'esm',
      file: pkg.module,
      sourcemap: true,
    },
  ],
};
