// vite.config.js
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"), // Your main entry point (e.g., home page)
        about_1: resolve(__dirname, "about_1.html"), // Additional HTML pages
        contact_1: resolve(__dirname, "contact_1.html"),
        products_1: resolve(__dirname, "products_1.html"),
        blog_1: resolve(__dirname, "blog_1.html"),
        cart_1: resolve(__dirname, "cart_1.html"),
        shop_1: resolve(__dirname, "shop_1.html"),
        // Add more entry points for other HTML files as needed
      },
    },
  },
});