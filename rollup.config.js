import swc from "rollup-plugin-swc";

export default function config({
  name,
  input,
  cwd,
  outputESM,
  outputCJS,
  external,
}) {
  const esmConfig = {
    input: `${cwd}/${input}`,
    output: {
      dir: outputESM,
      format: "es",
      external,
    },
    plugins: [
      swc({
        jsc: {
          parser: {
            syntax: "typescript",
          },
          target: "es2018",
        },
      }),
    ],
  };

  const cjsConfig = {
    input: `${cwd}/${input}`,
    output: {
      dir: outputCJS,
      format: "cjs",
      external,
    },
    plugins: [
      swc({
        jsc: {
          parser: {
            syntax: "typescript",
          },
          target: "es2018",
        },
      }),
    ],
  };

  return [esmConfig, cjsConfig];
}
