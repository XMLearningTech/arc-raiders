import type { Metadata } from "next"
import EnGuides from "../[lang]/guides/page"

export async function generateMetadata(): Promise<Metadata> {
  return {
    alternates: {
      canonical: 'https://arc-raiders.net/guides',
      languages: {
        'en': 'https://arc-raiders.net/guides',
        'zh': 'https://arc-raiders.net/zh/guides',
        'ja': 'https://arc-raiders.net/ja/guides',
      },
    },
  }
}

export default function RootGuides() {
  return (EnGuides as any)({ params: Promise.resolve({ lang: 'en' }) })
}


