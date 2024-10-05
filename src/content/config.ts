import { z, defineCollection } from "astro:content";

const notesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
  }),
});

export const collections = {
  notes: notesCollection,
};
