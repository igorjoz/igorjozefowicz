import { defineConfig, configDefaults } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    exclude: [...configDefaults.exclude, 'tests/browser/**'],
    environment: 'jsdom',
    setupFiles: './tests/setup.js',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './resources/js'),
    },
  },
});
