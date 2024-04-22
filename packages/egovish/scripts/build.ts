import esbuild, { BuildOptions } from 'esbuild';
import { glob, $ } from 'zx';
import path from 'node:path';

await $`rm -rf output`;
await $`rm -rf lib`;
await $`mitosis build`;

const commonOptions = {
  outbase: 'output',
  jsx: 'preserve',
  loader: {
    '.vue': 'empty',
    '.svelte': 'empty',
  },
  tsconfig: 'tsconfig.esbuild.json',
} satisfies BuildOptions;
const cjsOptions = {
  ...commonOptions,
  format: 'cjs',
} satisfies BuildOptions;
const esmOptions = {
  ...commonOptions,
  format: 'esm',
} satisfies BuildOptions;

const files = await glob('output/**/*');
await Promise.all(
  files.map(async file => {
    const { dir, name, ext } = path.parse(file);
    const isTsx = ext === '.tsx';
    await esbuild.build({
      ...cjsOptions,
      entryPoints: [file],
      outfile: `lib/cjs/${dir.replace(/output\/([^/]+)\/src/, '$1')}/${name}${isTsx ? '.jsx' : '.cjs'}`,
    });
    await esbuild.build({
      ...esmOptions,
      entryPoints: [file],
      outfile: `lib/esm/${dir.replace(/output\/([^/]+)\/src/, '$1')}/${name}${isTsx ? '.jsx' : '.js'}`,
    });
  }),
);

await $`tsc -p tsconfig.dts.json`.nothrow();
