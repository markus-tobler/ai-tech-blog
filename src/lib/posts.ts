import { type CollectionEntry, getCollection } from 'astro:content';
import type { Lang } from '../config';

export type Post = CollectionEntry<'blog'>;

/** Slug without the language folder: "en/my-post" -> "my-post". */
export function postSlug(post: Post): string {
	return post.id.split('/').slice(1).join('/');
}

export function postUrl(post: Post): string {
	return `${post.data.lang}/blog/${postSlug(post)}/`;
}

/** Live means not a draft and pubDate reached. Dev server shows everything for previewing. */
export function isLive(post: Post, now = new Date()): boolean {
	return !post.data.draft && post.data.pubDate <= now;
}

export async function getPosts(lang?: Lang): Promise<Post[]> {
	const posts = await getCollection(
		'blog',
		(p) => (import.meta.env.DEV || isLive(p)) && (!lang || p.data.lang === lang),
	);
	return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

/**
 * Posts to list for a language. German readers also see English posts that have
 * no German translation yet, since English is the primary language.
 */
export async function getListing(lang: Lang): Promise<Post[]> {
	const all = await getPosts();
	if (lang === 'en') return all.filter((p) => p.data.lang === 'en');
	const translated = new Set(all.filter((p) => p.data.lang === lang).map((p) => p.data.translationKey));
	return all.filter((p) => p.data.lang === lang || !translated.has(p.data.translationKey));
}

export async function getTranslation(post: Post, lang: Lang): Promise<Post | undefined> {
	const posts = await getPosts(lang);
	return posts.find((p) => p.data.translationKey === post.data.translationKey);
}

export function readingMinutes(post: Post): number {
	const words = (post.body ?? '').split(/\s+/).filter(Boolean).length;
	return Math.max(1, Math.round(words / 220));
}
