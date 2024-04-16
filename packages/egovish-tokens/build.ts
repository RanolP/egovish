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
    scss: {
      transformGroup: "scss",
      buildPath: "build/scss/",
      files: [
        {
          format: "scss/map-deep",
          destination: "map-deep.scss",
          outputReferences: true,
        },
        {
          format: "scss/variables",
          destination: "variables.scss",
          outputReferences: true,
        },
      ],
    },
    less: {
      transformGroup: "less",
      buildPath: "build/less/",
      files: [
        {
          format: "less/variables",
          destination: "variables.less",
          outputReferences: true,
        },
      ],
    },
    stylus: {
      transformGroup: "css",
      buildPath: "build/stylus/",
      files: [
        {
          format: "stylus/variables",
          destination: "variables.stylus",
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
    android: {
      transformGroup: "js",
      buildPath: "build/android/",
      files: [
        {
          format: "android/resources",
          destination: "resources.xml",
          outputReferences: true,
        },
        {
          format: "android/colors",
          destination: "colors.xml",
        },
        {
          format: "android/dimens",
          destination: "dimens.xml",
        },
        {
          format: "android/fontDimens",
          destination: "fontDimens.xml",
        },
        {
          format: "android/integers",
          destination: "integers.xml",
        },
        {
          format: "android/strings",
          destination: "strings.xml",
        },
      ],
    },
    compose: {
      transformGroup: "js",
      buildPath: "build/compose/",
      files: [
        {
          format: "compose/object",
          destination: "EgovishTokens.kt",
          outputReferences: true,
          packageName: "dev.ranolp.egovishtokens",
          className: "EgovishTokens",
        },
      ],
    },
    ios: {
      transformGroup: "js",
      buildPath: "build/ios/",
      files: [
        {
          format: "ios/macros",
          destination: "macros.h",
        },
      ],
    },
    "ios-swift": {
      transformGroup: "js",
      buildPath: "build/ios-swift/",
      files: [
        {
          format: "ios-swift/enum.swift",
          destination: "EgovishTokens.swift",
          outputReferences: true,
          className: "EgovishTokens",
        },
      ],
    },
    sketch: {
      transformGroup: "js",
      buildPath: "build/sketch/",
      files: [
        {
          format: "sketch/palette",
          destination: "egovish-tokens.sketchpalette",
        },
      ],
    },
    flutter: {
      transformGroup: "js",
      buildPath: "build/flutter/",
      files: [
        {
          format: "flutter/class.dart",
          destination: "EgovishTokens.dart",
          outputReferences: true,
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
