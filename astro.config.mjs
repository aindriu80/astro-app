import { defineConfig, z } from 'astro/config'

import tailwind from '@astrojs/tailwind'

// Defining some collections
const postsCollection = defineCollection({
  schema: z.object({
    author: z.string(),
    date: z.string(),
    image: z.string(),
    title: z.string(),
  }),
})

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  posts: postsCollection,
})
