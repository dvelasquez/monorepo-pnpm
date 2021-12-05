import resolve from "@rollup/plugin-node-resolve";
import swc from "rollup-plugin-swc";

export default function config({
  name,
  input,
  cwd,
  outputESM,
  outputCJS,
  external,
}) {
  const swcConfig = {
    jsc: {
      parser: {
        syntax: "typescript",
        tsx: false,
        decorators: false,
        dynamicImport: false,
      },
      target: "es5",
      loose: false,
      externalHelpers: false,
    },
    env: {
      targets: {
        chrome: "79",
      },
      mode: "entry",
      coreJs: 3,
    },
    sourceMaps: true,
  };
  const esmConfig = {
    input: `${cwd}/${input}`,
    external,
    output: {
      dir: outputESM,
      format: "es",
    },
    plugins: [
      resolve({
        extensions: [".ts", ".tsx", ".js", ".jsx"],
      }),
      swc(swcConfig),
    ],
  };

  const cjsConfig = {
    input: `${cwd}/${input}`,
    external,
    output: {
      dir: outputCJS,
      format: "cjs",
    },
    plugins: [
      resolve({
        extensions: [".ts", ".tsx", ".js", ".jsx"],
      }),
      swc(swcConfig),
    ],
  };

  return [esmConfig, cjsConfig];
}
