import { z } from 'zod';

const createBlogsValidation = z.object({
  body: z.object({
    title: z.string(),
    content: z.string(),
    isPublished: z.boolean().optional(),
  }),
});

const updateBlogsValidation = z.object({
  body: z.object({
    title: z.string().optional(),
    content: z.string().optional(),
    isPublished: z.boolean().optional(),
  }),
});

export const blogValidation = {
  createBlogsValidation,
  updateBlogsValidation,
};
