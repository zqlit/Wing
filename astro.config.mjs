import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  output: "static",

  integrations: [sitemap()],

  vite: {
    plugins: [tailwindcss()],

    optimizeDeps: {
      // ⭐ 防止 Vite 预构建 resvg
      exclude: ["@resvg/resvg-js"],
    },

    build: {
      rollupOptions: {
        // ⭐ 关键：全部 external
        external: [
          "fsevents",
          "@resvg/resvg-js",
          "../pkg",
        ],
      },
    },
  },

  image: {
    // ⭐ 非常重要：强制走 SSG 安全路径
    serviceEntryPoint: "@astrojs/image/sharp",
  },
});
