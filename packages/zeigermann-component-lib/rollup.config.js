// import typescript from "@rollup/plugin-typescript";
// creates d.ts files for everthing
import typescript from 'rollup-plugin-typescript2';
import external from "rollup-plugin-peer-deps-external";
// we probably want full sources
import { terser } from 'rollup-plugin-terser';
import del from "rollup-plugin-delete";
import pkg from "./package.json";

export default {
  input: pkg.source,
  output: [
    { file: pkg.main, format: "cjs", sourcemap: true },
    { file: pkg.module, format: "esm", sourcemap: true },
  ],
  plugins: [
    external(),
    typescript({
      exclude: "node_modules/**",
    }),
    del({ targets: ["dist/*"] }),
    // terser()
  ],
  external: Object.keys(pkg.peerDependencies || {}),
};
