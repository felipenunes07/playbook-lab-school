import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { sites } from "@openai/sites-vite-plugin";

export default defineConfig({
  plugins: [react(), sites()],
  server: {
    port: Number(process.env.PORT) || 3010,
    host: "0.0.0.0",
  },
});
