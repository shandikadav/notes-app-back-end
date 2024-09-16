import globals from "globals";
import pluginJs from "@eslint/js";
import daSyle from "eslint-config-dicodingacademy";

export default [
  daSyle,
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
];
