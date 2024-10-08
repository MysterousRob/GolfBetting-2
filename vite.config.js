import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@state": path.resolve(__dirname, './src/state'),
      "@components": path.resolve(__dirname, './src/components')
    }
  },
});
