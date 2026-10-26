import { DEFAULT_LANG, LANGS, LOCALES, type Lang } from '../config';
import { ui, type UiKey } from './ui';

export function isLang(value: string | undefined): value is Lang {
	return LANGS.includes(value as Lang);
}

export function useTranslations(lang: Lang) {
	return (key: UiKey) => ui[lang][key] ?? ui[DEFAULT_LANG][key];
}

export function otherLang(lang: Lang): Lang {
	return lang === 'en' ? 'de' : 'en';
}

/** Prefix a site-relative path with the configured base, e.g. url('en/about/'). */
export function url(path = ''): string {
	const base = import.meta.env.BASE_URL.replace(/\/$/, '');
	const clean = path.replace(/^\//, '');
	return `${base}/${clean}`;
}

export function formatDate(date: Date, lang: Lang): string {
	return date.toLocaleDateString(LOCALES[lang], { year: 'numeric', month: 'long', day: 'numeric' });
}
