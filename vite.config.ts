import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

function figmaAssetResolver() {
  return {
    name: "figma-asset-resolver",

    resolveId(id: string) {
      if (id.startsWith("figma:asset/")) {
        const filename = id.replace("figma:asset/", "");

        return fileURLToPath(
          new URL(`./src/assets/${filename}`, import.meta.url),
        );
      }
    },
  };
}

export default defineConfig(({ command }) => ({
  base: command === "build" ? "/school-sound-make/" : "/",

  plugins: [figmaAssetResolver(), react(), tailwindcss()],

  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },

  assetsInclude: ["**/*.svg", "**/*.csv"],
}));
