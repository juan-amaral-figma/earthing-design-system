import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'
import { cpSync } from 'node:fs'

function copyEarthingAssets() {
  return {
    name: 'copy-earthing-assets',
    closeBundle() {
      cpSync(
        resolve(import.meta.dirname, 'public/earthing'),
        resolve(import.meta.dirname, 'dist/earthing'),
        { recursive: true },
      )
    },
  }
}

export default defineConfig({
  publicDir: false,
  plugins: [react(), copyEarthingAssets()],
  build: {
    emptyOutDir: true,
    lib: {
      entry: resolve(import.meta.dirname, 'src/index.ts'),
      name: 'EarthingDesignSystem',
      cssFileName: 'earthing-design-system',
      fileName: () => 'earthing-design-system.js',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
    },
  },
})
