import js from "@eslint/js";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";

export default [
  js.configs.recommended,
  {
    ignores: ["dist/**", "node_modules/**"],
  },
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
      // Disable or downgrade all common lint rules
      ...Object.fromEntries(
        Object.entries(tseslint.configs.recommended.rules || {}).map(
          ([rule, _]) => [rule, "off"]
        )
      ),
      ...Object.fromEntries(
        Object.entries(reactHooks.configs.recommended.rules || {}).map(
          ([rule, _]) => [rule, "off"]
        )
      ),
      "react-refresh/only-export-components": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "no-undef": "off",
      "no-unused-vars": "off",
      "no-console": "off",
      "no-debugger": "off",
    },
  },
];
