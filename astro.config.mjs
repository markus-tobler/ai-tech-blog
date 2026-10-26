// @ts-check
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://markus-tobler.github.io',
	base: '/ai-tech-blog',
	trailingSlash: 'always',
	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'de'],
		routing: { prefixDefaultLocale: true, redirectToDefaultLocale: false },
	},
	integrations: [
		mdx(),
		sitemap({
			i18n: { defaultLocale: 'en', locales: { en: 'en-GB', de: 'de-CH' } },
		}),
	],
	markdown: {
		shikiConfig: { themes: { light: 'github-light', dark: 'github-dark' } },
	},
	fonts: [
		{
			provider: fontProviders.google(),
			name: 'Familjen Grotesk',
			cssVariable: '--font-sans',
			weights: [400, 600, 700],
			styles: ['normal'],
			fallbacks: ['system-ui', 'sans-serif'],
		},
		{
			provider: fontProviders.google(),
			name: 'Source Serif 4',
			cssVariable: '--font-serif',
			weights: [400, 600],
			styles: ['normal', 'italic'],
			fallbacks: ['Georgia', 'serif'],
		},
	],
});
