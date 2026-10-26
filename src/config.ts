// Central site configuration. Change identity, integrations and taxonomies here.

export const LANGS = ['en', 'de'] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = 'en';

// BCP 47 tags used for <html lang>, hreflang, dates and RSS.
export const LOCALES: Record<Lang, string> = { en: 'en-GB', de: 'de-CH' };

export const TOPICS = [
	'ai-technology',
	'ai-transformation',
	'citizen-development',
	'ai-enablement',
] as const;
export type Topic = (typeof TOPICS)[number];

export const AUDIENCES = ['leaders', 'citizen-devs', 'pro-devs'] as const;
export const AI_ASSISTANCE = ['none', 'editing', 'drafting', 'translation'] as const;

export const SITE = {
	author: 'Markus Tobler',
	repo: 'markus-tobler/ai-tech-blog',
	repoUrl: 'https://github.com/markus-tobler/ai-tech-blog',
	// Optional profile link shown in the footer, e.g. LinkedIn. Empty hides it.
	profileUrl: '',
	// Set as repository variable GOATCOUNTER_CODE (CI) or PUBLIC_GOATCOUNTER_CODE in .env.
	goatcounterCode: import.meta.env.PUBLIC_GOATCOUNTER_CODE as string | undefined,
	// Values from https://giscus.app. Comments stay hidden while repoId or categoryId is empty.
	giscus: {
		repo: 'markus-tobler/ai-tech-blog',
		repoId: 'R_kgDOVXzDNg',
		category: 'Announcements',
		categoryId: 'DIC_kwDOVXzDNs4DJppY',
	},
};
