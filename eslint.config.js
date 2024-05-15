import pluginJs from "@eslint/js";
import pluginAstro from "eslint-plugin-astro";
import pluginPrettier from "eslint-plugin-prettier";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginPrettier.configs.recommended,
  ...pluginAstro.configs.recommended,
];
