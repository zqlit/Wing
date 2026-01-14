// @ts-check
// ✅ 核心修复：手动声明Deno全局对象的类型，告诉TS编译器Deno是合法的
declare global {
  const Deno: {
    env: {
      get: (key: string) => string | undefined;
    };
  };
}

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import deno from '@astrojs/deno';


export default defineConfig({
  site: 'http://localhost:4321/',
  integrations: [mdx(), sitemap()],

  output: 'server',
  adapter: deno({
    // 必须配置：适配Deno Deploy的云端环境，缺一不可
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