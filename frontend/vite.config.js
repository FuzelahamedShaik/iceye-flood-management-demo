import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/iceye-flood-management-demo/",
  server: {
    port: 5173
  }
});