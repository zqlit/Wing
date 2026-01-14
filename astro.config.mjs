// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "http://localhost:4321/",

  integrations: [
    sitemap(),
  ],

  // ✅ 关键：不声明 output，不用 adapter
  // Astro 默认就是 static

  vite: {
    plugins: [tailwindcss()],

    // ✅ 只 exclude 真实存在、官方声明的 native 包
    optimizeDeps: {
      exclude: [
        "@resvg/resvg-js",
      ],
    },
  },
});
