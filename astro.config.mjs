// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://hsv25ai.github.io',
  base: '/zanema-web-agent-letta',
  vite: {
    plugins: [tailwindcss()]
  }
});