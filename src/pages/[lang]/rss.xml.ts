import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { LANGS, LOCALES, type Lang } from '../../config';
import { url, useTranslations } from '../../i18n/utils';
import { getPosts, isLive, postUrl } from '../../lib/posts';

export function getStaticPaths() {
	return LANGS.map((lang) => ({ params: { lang } }));
}

export async function GET(context: APIContext) {
	const lang = context.params.lang as Lang;
	const t = useTranslations(lang);
	const posts = (await getPosts(lang)).filter((p) => isLive(p));
	return rss({
		title: `${t('site.title')}: ${t('site.tagline')}`,
		description: t('site.description'),
		site: context.site!,
		customData: `<language>${LOCALES[lang]}</language>`,
		items: posts.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.pubDate,
			categories: [post.data.topic, ...post.data.tags],
			link: url(postUrl(post)),
		})),
	});
}
