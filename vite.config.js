import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
  build: {
    outDir: 'dist', 
  }
=======
    base: './',
>>>>>>> b90eba919a2c01729a5e6f8933990b6e0952a500
})
