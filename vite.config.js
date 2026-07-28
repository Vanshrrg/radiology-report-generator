import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Must match the GitHub repo name — GitHub Pages serves the site from
  // https://<user>.github.io/<repo>/, so assets 404 if these drift apart.
  base: '/radiology-report-generator/',
  plugins: [react(), tailwindcss()],
});
