import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    category: z.string(),
    isFlagship: z.boolean().default(false),
    inDevelopment: z.boolean().default(false),
    role: z.string(),
    tools: z.array(z.string()),
    metrics: z.array(z.string()),
    githubUrl: z.string(),
    liveUrl: z.string().optional(),
    presentationUrl: z.string().optional(),
    publishDate: z.string().optional()
  })
});

export const collections = { projects };
