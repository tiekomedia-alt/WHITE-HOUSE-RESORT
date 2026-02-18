
import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',
  plugins: [react()],
  define: {
    'import.meta.env.VITE_GEMINI_API_KEY': JSON.stringify('AIzaSyDSIL3Rje2ukKoxHTY-tXbFJqwRNrG2flM'),
    'process.env.API_KEY': JSON.stringify('AIzaSyDSIL3Rje2ukKoxHTY-tXbFJqwRNrG2flM'),
  },
  build: {
    chunkSizeWarningLimit: 1000,
  },
  resolve: {
    alias: {
      // Fixed: process.cwd() type error by using path.resolve('.') which defaults to CWD
      '@': path.resolve('.'),
    }
  }
});
