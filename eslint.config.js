import js from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

const sourceFiles = ["src/**/*.{ts,tsx}"];
const gameFiles = ["src/game/**/*.{ts,tsx}"];

const tsRecommendedConfigs = tsPlugin.configs["flat/recommended"].map((config) => ({
  ...config,
  files: sourceFiles,
}));

export default [
  {
    ignores: ["node_modules/**", "dist/**", "coverage/**", "public/**"],
  },
  {
    ...js.configs.recommended,
    files: sourceFiles,
  },
  ...tsRecommendedConfigs,
  {
    files: sourceFiles,
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2022,
      sourceType: "module",
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
  {
    files: gameFiles,
    rules: {
      "@typescript-eslint/no-explicit-any": "error",
    },
  },
];
