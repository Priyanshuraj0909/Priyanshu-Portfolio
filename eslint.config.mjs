import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTypescript,
  { files: ["src/features/**/*.{ts,tsx}", "src/foundation/**/*.{ts,tsx}"], rules: { "@next/next/no-img-element": "off" } },
  globalIgnores([".next/**", "out/**", "dist/**", "next-env.d.ts"]),
]);
