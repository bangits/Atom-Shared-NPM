import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'styled-system': path.resolve(__dirname, './styled-system')
    }
  },
  plugins: [react()],
  preview: {
    port: 6001
  },
  build: {
    cssCodeSplit: true,
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, 'src/atom-common.ts'),
      formats: ['system'],
      fileName: () => 'atom-common.js'
    },
    rollupOptions: {
      external: [ 
        "@atom/design-system",
        '@atom/cms-management',
        "@automapper/classes",
        "@automapper/core",
        "formik",
        "react",
        "query-string"
      ],
      output: {
        intro: `const process = {env: ${JSON.stringify(process.env)}}`
      }
    }
  }
});
