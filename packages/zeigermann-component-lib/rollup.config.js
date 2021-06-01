// import typescript from "@rollup/plugin-typescript";
// creates d.ts files for everthing
import typescript from 'rollup-plugin-typescript2';
import external from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
// we probably want full sources
import { terser } from 'rollup-plugin-terser';
import autoprefixer from 'autoprefixer';
// import postcss from "rollup-plugin-postcss";
import postcss from 'rollup-plugin-postcss-modules';
import del from "rollup-plugin-delete";
import pkg from "./package.json";

export default {
  // preserveModules: true,
  input: pkg.source,
  output: [
    { file: pkg.main, format: "cjs", sourcemap: true },
    { file: pkg.module, format: "esm", sourcemap: true },
  ],
  plugins: [
    postcss({
      // plugins: [autoprefixer()],
      writeDefinitions: true,
      modules: true,
      sourceMap: true,
        extract: true,
            minimize: true,
      // Or with custom options for `postcss-modules`
      // modules: {}
    }),
    external(),
    resolve(),
    commonjs(),
    typescript(),
    del({ targets: ["dist/*"] }),
    // terser()
  ],
  external: Object.keys(pkg.peerDependencies || {}),
};
