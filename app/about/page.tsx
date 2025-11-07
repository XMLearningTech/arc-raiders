import type { Metadata } from "next"
import EnAbout from "../[lang]/about/page"

export async function generateMetadata(): Promise<Metadata> {
  return {
    alternates: {
      canonical: 'https://arc-raiders.net/about',
      languages: {
        'en': 'https://arc-raiders.net/about',
        'zh': 'https://arc-raiders.net/zh/about',
        'ja': 'https://arc-raiders.net/ja/about',
      },
    },
  }
}

export default function RootAbout() {
  return (EnAbout as any)({ params: Promise.resolve({ lang: 'en' }) })
}


