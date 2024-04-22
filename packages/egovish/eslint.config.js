import mitosisPlugin from '@builder.io/eslint-plugin-mitosis';
import * as mdx from 'eslint-plugin-mdx';
import eslintPluginSimpleImportSort from 'eslint-plugin-simple-import-sort';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default tseslint.config(
  {
    ignores: ['lib', 'output'],
  },
  tseslint.configs.base,
  {
    ignores: ['**/*.mdx'],
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/consistent-type-exports': 'error',
    },
  },
  {
    plugins: {
      '@builder.io/mitosis': mitosisPlugin,
    },
    rules: mitosisPlugin.configs.recommended.rules,
  },
  {
    plugins: { 'simple-import-sort': eslintPluginSimpleImportSort },
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
  },
  {
    ...mdx.flat,
    processor: mdx.createRemarkProcessor({
      lintCodeBlocks: true,
    }),
  },
  {
    ...mdx.flatCodeBlocks,
    rules: {
      ...mdx.flatCodeBlocks.rules,
    },
  },
);
