import js from "@eslint/js";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";

export default [
  js.configs.recommended,
  {
    files: ["src/**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        browser: true,
        es2021: true,
      },
      parser: tsparser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        project: "./tsconfig.json",
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "@typescript-eslint/no-unused-vars": "warn",
      "no-undef": "off", // TypeScript handles this
    },
  },
];
