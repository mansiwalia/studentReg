import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // Change output directory to 'build'
    chunkSizeWarningLimit: 1000, // Adjust chunk size warning limit
  },
});
