import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';

const path = require('path');
const _pathResolve = dir => path.resolve(__dirname, dir);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': _pathResolve('src/'),
      '@assets': _pathResolve('src/assets'),
      '@theme': _pathResolve('src/theme'),
      '@components': _pathResolve('src/components'),
      '@tools': _pathResolve('src/tools'),
      '@constants': _pathResolve('src/constants'),
      '@services': _pathResolve('src/services'),
      '@apis': _pathResolve('src/services/apis'),
      '@store': _pathResolve('src/store'),
      '@hooks': _pathResolve('src/hooks'),
      '@types': _pathResolve('src/types'),
      '@layouts': _pathResolve('src/layouts'),
      '@views': _pathResolve('src/views'),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  }
})
