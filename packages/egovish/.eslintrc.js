import typescriptEslintParser from "@typescript-eslint/parser";
import eslintPluginSimpleImportSort from "eslint-plugin-simple-import-sort";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  { languageOptions: { parser: typescriptEslintParser } },
  {
    plugins: ["@builder.io/mitosis"],
    extends: ["plugin:@builder.io/mitosis/recommended"],
  },
  {
    plugins: { "simple-import-sort": eslintPluginSimpleImportSort },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  },
];
