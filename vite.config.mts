import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "node:url";
import { existsSync } from "node:fs";

const staticDossiers: Plugin = {
  name: "preview-static-dossiers",
  configurePreviewServer(server) {
    server.middlewares.use((req, _res, next) => {
      const path = req.url?.split("?")[0] ?? "";
      if (/^\/systems\/[a-z0-9-]+\/?$/.test(path)) {
        const destination = path.replace(/\/$/, "") + "/index.html";
        if (existsSync(fileURLToPath(new URL("./dist" + destination, import.meta.url)))) req.url = destination;
      }
      next();
    });
  },
};

export default defineConfig({
  plugins: [react(), tailwindcss(), staticDossiers],
  resolve: { alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) } },
  // Keep the legacy Next.js PostCSS pipeline separate from Vite's Tailwind plugin.
  css: { postcss: { plugins: [] } },
  server: { host: "127.0.0.1" },
  preview: { host: "127.0.0.1" },
});
