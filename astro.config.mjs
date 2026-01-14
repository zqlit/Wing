import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  output: "server",
  adapter: vercel(),

  integrations: [sitemap()],

  vite: {
    plugins: [tailwindcss()],
    ssr: {
      noExternal: false
    }
  }
});
