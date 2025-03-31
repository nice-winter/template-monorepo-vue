import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

import ui from '@nuxt/ui/vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    strictPort: true,
    proxy: {
      '/api/v1': {
        target: 'http://localhost:5183',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/v1/, '')
      }
    }
  },
  plugins: [
    vue(),
    vueJsx(),
    ui({
      autoImport: {
        dts: 'src/types/auto-imports.d.ts',
        imports: ['vue', 'vue-router', 'pinia']
      },
      components: {
        dts: 'src/types/components.d.ts'
        // resolvers: []
      }
    }),
    vueDevTools()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@utils': fileURLToPath(new URL('../../packages/utils/src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  }
})
