import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@app": fileURLToPath(new URL("./app", import.meta.url)),
      "@pages-segments": fileURLToPath(new URL("./pages-segments", import.meta.url)),
      "@widgets": fileURLToPath(new URL("./widgets", import.meta.url)),
      "@features": fileURLToPath(new URL("./features", import.meta.url)),
      "@entities": fileURLToPath(new URL("./entities", import.meta.url)),
      "@shared": fileURLToPath(new URL("./shared", import.meta.url)),
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./vitest.setup.ts"],
    include: ["**/*.{test,spec}.{ts,tsx}"],
    exclude: ["node_modules", ".next", "out"],
  },
});
