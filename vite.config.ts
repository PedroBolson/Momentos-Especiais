import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Momentos-Especiais/',
  build: {
    // Força a limpeza do diretório de saída antes do build
    emptyOutDir: true,
  },
  optimizeDeps: {
    include: ['react-multi-carousel']
  },
})
