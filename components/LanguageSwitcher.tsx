'use client'

import { usePathname, useRouter } from 'next/navigation'
import { i18n, type Locale } from '@/i18n/config'

const languages = {
  en: { name: 'English', flag: '🇺🇸' },
  zh: { name: '中文', flag: '🇨🇳' },
  ja: { name: '日本語', flag: '🇯🇵' },
}

export default function LanguageSwitcher() {
  const pathname = usePathname()
  const router = useRouter()

  const currentLang = pathname.split('/')[1] as Locale || i18n.defaultLocale

  const switchLanguage = (newLang: Locale) => {
    if (!pathname) return
    
    const segments = pathname.split('/')
    segments[1] = newLang
    router.push(segments.join('/'))
  }

  return (
    <div className="relative group">
      <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-black/30 backdrop-blur-sm border border-cyan-500/30 hover:border-cyan-500/60 transition-all">
        <span className="text-xl">{languages[currentLang]?.flag || languages.en.flag}</span>
        <span className="text-sm font-medium text-cyan-400">{languages[currentLang]?.name || languages.en.name}</span>
        <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      <div className="absolute right-0 mt-2 w-48 rounded-lg bg-black/90 backdrop-blur-md border border-cyan-500/30 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        {i18n.locales.map((lang) => (
          <button
            key={lang}
            onClick={() => switchLanguage(lang)}
            className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-cyan-500/10 transition-colors first:rounded-t-lg last:rounded-b-lg ${
              currentLang === lang ? 'bg-cyan-500/20 text-cyan-400' : 'text-gray-300'
            }`}
          >
            <span className="text-xl">{languages[lang].flag}</span>
            <span className="text-sm font-medium">{languages[lang].name}</span>
            {currentLang === lang && (
              <svg className="w-4 h-4 ml-auto text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}
