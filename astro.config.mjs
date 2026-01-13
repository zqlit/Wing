// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';


export default defineConfig({
  site: 'http://localhost:4321/',
  integrations: [mdx(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
    build: {
      rollupOptions: {
        external: ['fsevents']
      }
    }
  },
});