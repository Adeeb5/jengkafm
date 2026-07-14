import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import legacy from '@vitejs/plugin-legacy'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
    legacy({
      targets: ['defaults', 'Chrome >= 49'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime']
    }),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'robots.txt', 'pwa-icon.png'],
      manifest: {
        name: 'JengkaFM',
        short_name: 'JengkaFM',
        description: 'Dengar JengkaFM - Radio Pilihan Anda',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        icons: [
          {
            src: 'pwa-icon.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-icon.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'pwa-icon.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
