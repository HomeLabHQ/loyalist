import reactScan from '@react-scan/vite-plugin-react-scan';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths(), reactScan({})],
  server: {
    host: '0.0.0.0',
    port: 3000,
    proxy: {
      '/attachments/': {
        changeOrigin: true,
        target: 'http://localhost:8000/',
      },
    },
  },
  resolve: {
    alias: {
      // /esm/icons/index.mjs only exports the icons statically, so no separate chunks are created
      '@tabler/icons-react': '@tabler/icons-react/dist/esm/icons/index.mjs',
    },
  },
  define: {
    'process.env': process.env,
  },
});
