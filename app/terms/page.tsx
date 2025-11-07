import type { Metadata } from "next"
import EnTerms from "../[lang]/terms/page"

export async function generateMetadata(): Promise<Metadata> {
  return {
    alternates: {
      canonical: 'https://arc-raiders.net/terms',
      languages: {
        'en': 'https://arc-raiders.net/terms',
        'zh': 'https://arc-raiders.net/zh/terms',
        'ja': 'https://arc-raiders.net/ja/terms',
      },
    },
  }
}

export default function RootTerms() {
  return (EnTerms as any)({ params: Promise.resolve({ lang: 'en' }) })
}


