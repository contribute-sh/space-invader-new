module.exports = {
  root: true,
  env: {
    es2022: true,
    node: true,
  },
  extends: ["eslint:recommended"],
  ignorePatterns: ["coverage", "dist", "node_modules"],
  overrides: [
    {
      files: ["**/*.ts"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
      plugins: ["@typescript-eslint"],
      extends: ["plugin:@typescript-eslint/recommended"],
    },
    {
      files: ["src/game/**/*.ts"],
      rules: {
        "@typescript-eslint/no-explicit-any": "error",
      },
    },
  ],
};
