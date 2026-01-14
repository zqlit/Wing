// @ts-check
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import node from "@astrojs/node";

export default defineConfig({
  site: "http://localhost:4321/",
  integrations: [mdx(), sitemap()],

  output: "server",
  adapter: node({ mode: "standalone" }),

  vite: {
    plugins: [tailwindcss()],

    // ⚠️ SSR 核心配置（关键）
    ssr: {
      external: [
        "node:stream",
        "node:util",
        "node:fs",
        "node:path",
        "node:crypto",
        "node:buffer",
        "stream",
        "util",
        "fs",
        "path",
        "crypto",
        "buffer",
      ],
    },

    optimizeDeps: {
      exclude: ["../pkg"],
    },

    build: {
      rollupOptions: {
        external: ["fsevents"],
      },
    },
  },
});
