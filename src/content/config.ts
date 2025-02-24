import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.string().transform((str) => new Date(str)), // Convert string to Date
    description: z.string().optional(),
    image: z.string().url(), // Ensure image is a valid URL
  }),
});

export const collections = {
  blog: blogCollection,
};
