import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";

// reads the local .env variables and uses them in the config
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, new URL('.', import.meta.url).pathname, '');

  return {
    plugins: [react()],
    base: env.VITE_BASE_PATH || "/", // ← uses your variable, or "/" if it doesn't exist
    server: { fs: { allow: [".."] } },
  };
});
