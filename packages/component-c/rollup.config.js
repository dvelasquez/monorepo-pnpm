import rollupBase from "../../rollup.config.js";
import pkg from "./package.json";
import path from "path";

// eslint-disable-next-line no-undef
const cwd = path.resolve(__dirname);

const config = rollupBase({
  input: "src/index.tsx",
  outputESM: pkg.exports.import,
  outputCJS: pkg.exports.require,
  name: "ComponentA",
  cwd,
  external: ["react"],
});

export default config;
