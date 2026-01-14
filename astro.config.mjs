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

    // ⚠️ SSR 构建阶段 external Node 内置模块
    ssr: {
      external: [
        "stream",
        "util",
        "fs",
        "path",
        "crypto",
        "buffer",
        "node:stream",
        "node:util",
        "node:fs",
        "node:path",
        "node:crypto",
        "node:buffer",
      ],
    },

    build: {
      rollupOptions: {
        // fsevents 可以保持 external
        external: ["fsevents"],
      },
    },
  },
});
