// @ts-check
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// ⚡ 静态输出版本（推荐最稳）
export default defineConfig({
  site: "http://localhost:4321/",
  integrations: [mdx(), sitemap()],

  output: "static", // 完全静态 HTML，免疫 Node SSR 问题

  vite: {
    plugins: [tailwindcss()],

    build: {
      rollupOptions: {
        external: ["fsevents"], // harmless external
      },
    },
  },
});
