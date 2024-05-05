import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.tsx"],
  splitting: false,
  minify: true,
  format: ["esm", "cjs"],
  noExternal: ["react", "react-dom"],
});
