import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// ─────────────────────────────────────────────────────────────────────────────
//  CONTENT COLLECTIONS
//  Each list on the home page (and its full page) is driven by markdown files.
//  To add an item: drop a new .md file in the matching folder under src/content/.
//  The `date` field controls ordering — newest first everywhere.
//  Only `title` and `date` are required; the rest are optional.
// ─────────────────────────────────────────────────────────────────────────────

const itemSchema = z.object({
  title: z.string(),
  date: z.coerce.date(),
  authors: z.string().optional(), // e.g. "with Jason DeBacker"
  venue: z.string().optional(), // journal / outlet / publisher
  note: z.string().optional(), // status, e.g. "revise and resubmit", "forthcoming"
  url: z.string().url().optional(), // link to the item (leave out if none yet)
  featured: z.boolean().optional(), // pin to top of the home-page preview
});

const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
  schema: itemSchema,
});

const worksInProgress = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/works-in-progress' }),
  schema: itemSchema,
});

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: itemSchema,
});

export const collections = { publications, worksInProgress, news };
