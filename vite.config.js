import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Provide a function for manualChunks (rolldown expects a function).
        // Map certain node_modules packages into named chunks.
        manualChunks(id) {
          if (!id) return;
          // normalize path checks for node_modules
          if (id.includes('node_modules')) {
            // put react family into vendor
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
              return 'vendor';
            }
            // put axios in a separate ui chunk
            if (id.includes('axios')) {
              return 'ui';
            }
          }
        },
      },
    },
    // Optimize images
    assetsInlineLimit: 4096,
    // Enable source maps for debugging
    sourcemap: false,
  },
  server: {
    headers: {
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  },
})
