import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "node:url";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: { alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) } },
  // Keep the legacy Next.js PostCSS pipeline separate from Vite's Tailwind plugin.
  css: { postcss: { plugins: [] } },
  server: { host: "127.0.0.1" },
  preview: { host: "127.0.0.1" },
});
