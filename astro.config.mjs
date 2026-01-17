// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://5b2.cn",
  output: "static",
  trailingSlash: "never",
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [
      //@ts-ignore
      tailwindcss()
    ],
  },
});
