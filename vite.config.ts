import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" so the build works under any GitHub Pages sub-path
export default defineConfig({
  base: "./",
  plugins: [react()],
  build: { rollupOptions: { input: ["index.html", "cv.html"] } },
  server: {
    port: 3000
  }
});
