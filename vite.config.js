import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, new URL('.', import.meta.url).pathname, '');

  return {
    plugins: [react()],
    base: env.VITE_BASE_PATH || "/",
    server: { fs: { allow: [".."] } },
  };
});
