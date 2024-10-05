import { z, defineCollection } from "astro:content";

const thoughtsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
  }),
});

export const collections = {
  thoughts: thoughtsCollection,
};
