import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import glsl from 'vite-plugin-glsl';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    glsl() // Add the glsl plugin here
  ],
  assetsInclude: ['**/*.glb'], // Include .glb files as assets
  optimizeDeps: {
    include: ['axios']
  }
});
