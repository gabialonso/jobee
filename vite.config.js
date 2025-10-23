import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./", // 👈 Cambiado a ruta relativa
  server: { fs: { allow: [".."] } },
});
