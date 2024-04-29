const { build } = require("esbuild");

const config = {
  entryPoints: ["src/index.tsx"],
  bundle: true,
  minify: true,
  outfile: "dist/bundle.js",
  target: "es2015",
  define: {
    "process.env.NODE_ENV": '"production"',
  },
};

build(config).catch((err) => {
  console.error(err);
  process.exit(1);
});
