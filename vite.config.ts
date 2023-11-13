import path from 'path'

import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: { enabled: true },
      // workbox: {
      //   maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
      // },
    }),
  ],

  // shadcn-ui
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
