import 'server-only'
import type { Locale } from './config'

const dictionaries = {
  en: () => import('./locales/en.json').then((module) => module.default),
  zh: () => import('./locales/zh.json').then((module) => module.default),
  ja: () => import('./locales/ja.json').then((module) => module.default),
}

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries.en()
