import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import * as dotenv from 'dotenv';

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': JSON.stringify(dotenv.config().parsed),
  },
});
