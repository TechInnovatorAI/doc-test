import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
  },
  server: {
    open: true // This will open the browser automatically
  }
});
