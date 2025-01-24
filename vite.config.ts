import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Unfonts from "unplugin-fonts/vite";

export default defineConfig({
  plugins: [
    react(),
    Unfonts({
      google: {
        preconnect: false,
        preconnectUrl: "https://fonts.gstatic.com",
        fontBaseUrl: "https://fonts.googleapis.com/css2",
        display: "block",
        text: "ViteAwsom",
        injectTo: "head-prepend",
        families: [
          {
            name: "Space Grotesk",
            styles: "wght@300;400;500;700",
          },
        ],
      },
    }),
  ],
});
