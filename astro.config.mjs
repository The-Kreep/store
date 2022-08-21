import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import tailwind from '@astrojs/tailwind';
import image from '@astrojs/image';
import prefetch from '@astrojs/prefetch';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), tailwind(), image(), prefetch()],
  output: 'server',
  adapter: vercel(),
});
