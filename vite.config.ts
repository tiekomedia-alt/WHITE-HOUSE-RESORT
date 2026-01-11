
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, (process as any).cwd(), '');
  return {
    plugins: [react()],
    define: {
      // This is critical: It allows 'process.env.API_KEY' to work in the browser
      'process.env.API_KEY': JSON.stringify(env.API_KEY),
      // If you have other env vars (like Supabase keys), add them here:
      // 'process.env.SUPABASE_URL': JSON.stringify(env.SUPABASE_URL),
    }
  };
});
