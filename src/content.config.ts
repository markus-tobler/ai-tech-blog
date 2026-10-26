import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { AI_ASSISTANCE, AUDIENCES, LANGS, TOPICS } from './config';

// Articles live in src/content/blog/<lang>/<slug>.md(x).
// A translation shares the same `translationKey` (and normally the same slug).
const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z
			.object({
				title: z.string().max(90),
				description: z.string().min(50).max(180),
				pubDate: z.coerce.date(),
				updatedDate: z.coerce.date().optional(),
				draft: z.boolean().default(true),
				lang: z.enum(LANGS),
				translationKey: z.string().regex(/^[a-z0-9-]+$/),
				topic: z.enum(TOPICS),
				tags: z.array(z.string().regex(/^[a-z0-9-]+$/)).max(6).default([]),
				audience: z.array(z.enum(AUDIENCES)).min(1),
				heroImage: image().optional(),
				heroAlt: z.string().optional(),
				aiAssistance: z.enum(AI_ASSISTANCE),
			})
			.refine((d) => !d.heroImage || d.heroAlt, {
				message: 'heroAlt is required when heroImage is set',
				path: ['heroAlt'],
			}),
});

// Static pages (about, privacy) per language: src/content/pages/<lang>/<page>.md
const pages = defineCollection({
	loader: glob({ base: './src/content/pages', pattern: '**/*.md' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		lang: z.enum(LANGS),
		updatedDate: z.coerce.date().optional(),
	}),
});

export const collections = { blog, pages };
