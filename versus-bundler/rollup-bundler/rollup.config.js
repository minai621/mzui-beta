import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import typescript from "@rollup/plugin-typescript";
import babel from "rollup-plugin-babel";
import postcss from "rollup-plugin-postcss";
import serve from "rollup-plugin-serve";
import { terser } from "rollup-plugin-terser";

const isProduction = process.env.NODE_ENV === "production";

export default {
  input: "src/index.tsx",
  output: [
    {
      file: "dist/bundle.js",
      format: "iife",
      sourcemap: !isProduction,
    },
    {
      file: "dist/myLibrary.esm.js",
      format: "es",
      sourcemap: true,
    },
    {
      file: "dist/myLibrary.cjs.js",
      format: "cjs",
      sourcemap: true,
    },
  ],
  plugins: [
    resolve({
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    }),
    typescript(),
    babel({
      exclude: "node_modules/**",
      extensions: [".js", ".jsx", ".ts", ".tsx"],
      presets: ["@babel/preset-react"],
    }),
    serve({
      open: true,
      verbose: true,
      contentBase: ["dist"],
      host: "localhost",
      port: 3000,
    }),
    commonjs(),
    replace({
      preventAssignment: true,
      "process.env.NODE_ENV": JSON.stringify(
        isProduction ? "production" : "development"
      ),
    }),
    postcss(),
    isProduction && terser(),
  ],
  // external: ["react", "react-dom"],
};
