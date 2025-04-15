import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// nome do seu repositório GitHub Pages
const repoName = 'Momentos-Especiais'

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base:
    mode === 'production'
      ? process.env.CI === 'true'
        ? '/' // AWS Amplify (ou qualquer CI padrão)
        : `/${repoName}/` // GitHub Pages (build local/forçada com CI=false)
      : '/', // dev local
  build: {
    emptyOutDir: true
  },
  optimizeDeps: {
    include: ['react-multi-carousel']
  }
}))
