import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// @ts-ignore
import path from "node:path";
import { fileURLToPath } from "node:url";

// @ts-ignore
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
    plugins: [react()],
    base: '/',
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
    },
});