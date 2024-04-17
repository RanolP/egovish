import StyleDictionary from "style-dictionary-utils";
import { $ } from "zx";

const myStyleDictionary = StyleDictionary.extend({
  source: ["src/**/*.json"],
  platforms: {
    css: {
      transformGroup: "css",
      buildPath: "build/css/",
      files: [
        {
          format: "css/variables",
          destination: "variables.css",
          outputReferences: true,
        },
      ],
    },
    javascript: {
      transformGroup: "js",
      buildPath: "build/javascript/",
      files: [
        {
          format: "javascript/esm",
          destination: "index.ts",
        },
      ],
    },
  },
});

myStyleDictionary.buildAllPlatforms();

await $`cp build/javascript/index.ts build/javascript/index.cts`;
await $`tsc`;
await $`rm build/javascript/index.cts`;
await $`tsc -p tsconfig.dts.json`;
await $`rm build/javascript/index.ts`;
