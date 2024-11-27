import react from "@vitejs/plugin-react";
import { copyFileSync, existsSync } from "node:fs";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import path from "node:path";
// import { defineConfig, loadEnv } from 'vite';
import { defineConfig } from "vite";

export default defineConfig(({ command }) => {
  const isServeMode = command === "serve";
  if (isServeMode) {
    const dotenvFile = ".env";
    const isEnvSetup = existsSync(dotenvFile);
    if (!isEnvSetup) {
      console.log(".env is not setup setting up");
      copyFileSync(`${dotenvFile}.example`, dotenvFile);
    }
  }
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  // const env = loadEnv(mode, process.cwd(), '');
  return {
    // vite config
    define: {},
    build: {
      rollupOptions: {
        output: {
          entryFileNames: "[name].[hash].js",
          chunkFileNames: "[name].[hash].js",
          assetFileNames: "[name].[hash][extname]",
        },
      },
    },
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@ui": path.resolve(__dirname, "../../packages/ui/src"),
        "@models": path.resolve(__dirname, "../../packages/models/src"),
        "@constants": path.resolve(__dirname, "../../packages/constants/src"),
        "@utils": path.resolve(__dirname, "../../packages/utils/src"),
        "@data": path.resolve(__dirname, "../../packages/data/src"),
      },
    },
    server: {
      watch: {
        usePolling: true,
      },
      host: true,
      strictPort: true,
      port: 4000,
    },
  };
});
