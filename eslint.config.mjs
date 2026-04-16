import js from "@eslint/js";
import globals from "globals";
// import { defineConfig } from "eslint/config";
import jest from "eslint-plugin-jest";

export default [
  {
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
  {
    ignores: ["dist/*", "coverage/*"],
  },
  js.configs.recommended,
  {
    files: ["**/*.test.js"],
    ...jest.configs["flat/recommended"],
    rules: {
      ...jest.configs["flat/recommended"].rules,
      "jest/prefer-expect-assertions": "off",
      "jest/expect-expect": "error",
    },
  },
  {
    files: ['src/**/*.js'],
    rules: {
      indent: ['error', 4],
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      'no-unused-vars': 'off',
      'no-console': 'off',
      'no-var': 'error', 
    }
  },
];
