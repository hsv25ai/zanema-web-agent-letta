// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

const base = '/zanema-web-agent-letta';

// https://astro.build/config
export default defineConfig({
  site: 'https://hsv25ai.github.io',
  base,
  devToolbar: { enabled: false },

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": "/src",
      },
    },
  },

  integrations: [react()]
});
