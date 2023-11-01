import { defineConfig } from 'astro/config';
import denoAdapter from '@astrojs/deno';
import react from "@astrojs/react";
import nodejs from '@astrojs/node';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: nodejs(),
  integrations: [react(), tailwind()],
});