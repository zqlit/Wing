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

    resolve: {
      alias: {
        util: "node:util",
        stream: "node:stream",
        fs: "node:fs",
        path: "node:path",
        crypto: "node:crypto",
        buffer: "node:buffer",
      },
    },

    optimizeDeps: {
      exclude: ["../pkg"],
    },

    build: {
      rollupOptions: {
        external: ["fsevents", /^\.\.\/pkg$/],
      },
    },
  },
});
