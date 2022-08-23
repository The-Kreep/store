import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import image from '@astrojs/image'
import prefetch from '@astrojs/prefetch' // import vercel from '@astrojs/vercel/serverless'

// import firebase from 'astro-firebase';
import preact from '@astrojs/preact'

import cloudflare from '@astrojs/cloudflare'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), prefetch(), preact()],
  output: 'server',
  adapter: cloudflare(),
})
