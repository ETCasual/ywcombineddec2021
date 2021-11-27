import path from 'path';

import reactRefresh from '@vitejs/plugin-react-refresh';
import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';
import WindiCSS from 'vite-plugin-windicss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // https://github.com/vitejs/vite/tree/main/packages/plugin-react-refresh
    reactRefresh(),
    WindiCSS(),
    eslintPlugin({ cache: false }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
