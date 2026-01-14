// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "http://localhost:4321/",

  integrations: [sitemap()],

  // 静态站点（不走 SSR）
  output: "static",

  vite: {
    plugins: [tailwindcss()],

    build: {
      rollupOptions: {
        // ⭐ 关键：macOS-only 依赖
        external: ["fsevents"],
      },
    },
  },
});
