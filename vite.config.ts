import {defineConfig} from 'vite';
import {resolve} from 'path';
import typescript2 from "rollup-plugin-typescript2"

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'Github',
      formats: ['cjs'],
      fileName: (format) => `main.js`,
    },
  },
  plugins: [
    typescript2()
  ]
});
