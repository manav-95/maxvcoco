import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react()],
  build: {
    outDir: "dist", // Output directory
    assetsDir: "assets", // Ensures assets are correctly organized
  }
})
