import { defineConfig } from "vite";

export default defineConfig({
  publicDir: false,
  build: {
    ssr: "server/index.ts",
    outDir: "dist/server",
    emptyOutDir: true,
  },
});
