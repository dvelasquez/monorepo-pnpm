export default function config({ name, input, cwd, outputESM, outputCJS, external, }: {
    name: any;
    input: any;
    cwd: any;
    outputESM: any;
    outputCJS: any;
    external: any;
}): {
    input: string;
    output: {
        dir: any;
        format: string;
        external: any;
    };
    plugins: import(".pnpm/rollup@2.60.2/node_modules/rollup").Plugin[];
}[];
