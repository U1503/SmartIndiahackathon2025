import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
    port: process.env.PORT || 5173,

    // ✅ allowedHosts is not officially needed unless using `vite preview` behind a proxy
    // If you still want to use it, use the **hostname only** (no https:// or trailing slash)
    allowedHosts: ['http://smartindiahackathon2025-production.up.railway.app']
  },
  preview: {
    host: true,
    port: process.env.PORT || 4173
  }
})
