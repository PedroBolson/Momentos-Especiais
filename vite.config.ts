import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Momentos-Especiais/', // Atualizado para o novo nome do repositório
  optimizeDeps: {
    include: ['react-multi-carousel']
  },
})
