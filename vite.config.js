import{defineConfig}from"vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ command }) => {
  return {
    base: command === 'serve' ? '/' : '/portfolio-template/',
    plugins: [tailwindcss()],
  }
})
