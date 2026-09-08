// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: swap in the client's real domain once purchased/confirmed.
  site: 'https://www.markinsdevelopmentgroup.com',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});