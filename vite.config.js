import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { federation } from "@module-federation/vite";

export default defineConfig({
  server: {
    port: 3002,
    // Ensure CORS is allowed so app1 can fetch the assets
    cors: true,
  },
  plugins: [
    react(),
    tailwindcss(),
    federation({
      name: "flipcard",
      filename: "remoteEntry.js",
      exposes: {
        // NOTE: In Vite, you must specify the exact file extension (.jsx or .tsx)
        "./FlashCardMain": "./src/components/FlashCardMain.jsx",
      },
      shared: {
        react: { singleton: true },
        "react-dom": { singleton: true },
      },
      dts: false,
    }),
  ],
  optimizeDeps: {
    exclude: ["react", "react-dom"],
  },
  build: {
    target: "chrome89",
  },
});
