import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import path from 'path' // Add this import at the top
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

})