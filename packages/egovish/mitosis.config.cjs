/** @type {import('@builder.io/mitosis'.MitosisConfig)} */
module.exports = {
  files: 'src/**/*.(ts|tsx)',
  commonOptions: {
    typescript: true,
  },
  options: {},
  targets: ['vue', 'solid', 'svelte', 'react', 'qwik', 'webcomponent', 'rsc'],
};
