/**
 * Supported locale codes.
 * @typedef {'en' | 'de' | 'fr'} Lang
 */

/** @type {Lang[]} */
export const LANGUAGES = ['en', 'de', 'fr'];

/** @type {Lang} */
export const DEFAULT_LANG = 'en';

/**
 * Returns the translation object for a given language.
 * Callers must import the locale JSON files statically themselves (Astro pages
 * do this directly), then pass the resulting map here for a safe lookup.
 *
 * @param {{ en: Record<string,any>, de: Record<string,any>, fr: Record<string,any> }} locales
 * @param {Lang} lang
 * @returns {Record<string, any>}
 */
export function useTranslations(locales, lang) {
  return locales[lang] ?? locales[DEFAULT_LANG];
}

/**
 * Returns an object with `getStaticPaths` entries for every supported language.
 * Use this in every `[lang]` page to avoid repeating the array.
 *
 * @returns {{ params: { lang: Lang } }[]}
 */
export function getLanguagePaths() {
  return LANGUAGES.map((lang) => ({ params: { lang } }));
}

/**
 * Builds a canonical URL for a given language and path.
 *
 * @param {Lang}   lang
 * @param {string} [path='']  – path relative to the language root, e.g. 'about/'
 * @param {string} [base='https://birds.family']
 * @returns {string}
 */
export function canonicalUrl(lang, path = '', base = 'https://birds.family') {
  return `${base}/${lang}/${path}`;
}
