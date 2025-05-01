// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    outDir: "/build/project",
  },
  server: {
    host: true,
    port: 3000, // Change this to your desired port
  },
  assetsInclude: ["/*.PNG"],
});
