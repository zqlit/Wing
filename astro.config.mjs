// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import Deno from '@astrojs/deno';


export default defineConfig({
  site: 'http://localhost:4321/',
  integrations: [mdx(), sitemap()],

  output: 'server',
  adapter: Deno({
    // @ts-ignore
    port: Number(Deno.env.get("PORT")) || 8000,
    hostname: "0.0.0.0",
  }),
  
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      // 强制别名：把无法解析的 ../pkg 指向一个空模块，避免解析失败
      alias: [
        // @ts-ignore
        { find: /^\.\.\/pkg$/, replacement: () => null }
      ]
    },
    optimizeDeps: {
      // 排除 ../pkg 模块，不让Vite去预构建它
      exclude: ['../pkg']
    },
    build: {
      rollupOptions: {
        external: ['fsevents']
      },
      // 关键：对Deno兼容，禁止Vite将该模块识别为commonjs-external
      commonjsOptions: {
        ignore: ['../pkg']
      }
    }
  },
});