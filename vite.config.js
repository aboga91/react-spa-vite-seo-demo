import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  base: "/react-spa-vite-seo-demo/",
  plugins: [react()],
  css: {
    postcss: "./postcss.config.js",
  },
})
