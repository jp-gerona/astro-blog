import { defineCollection, z } from "astro:content";

// Define collection of blog posts with schema
// Can be seperated into a different file called schema.ts
const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    author: z.string(),
    image: z.string(),
    tags: z.array(z.string()),
  }),
});

// Export collections
export const collections = {
  blog: blogCollection,
};