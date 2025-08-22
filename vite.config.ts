import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// @ts-ignore
import path from "path"; // normal Node path

export default defineConfig({
    plugins: [react()],
    base: "./",
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"), // __dirname works in TS with Node
        },
    },
});