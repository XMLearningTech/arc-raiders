import type { Metadata } from "next"
import EnPrivacy from "../[lang]/privacy/page"

export async function generateMetadata(): Promise<Metadata> {
  return {
    alternates: {
      canonical: 'https://arc-raiders.net/privacy',
      languages: {
        'en': 'https://arc-raiders.net/privacy',
        'zh': 'https://arc-raiders.net/zh/privacy',
        'ja': 'https://arc-raiders.net/ja/privacy',
      },
    },
  }
}

export default function RootPrivacy() {
  return (EnPrivacy as any)({ params: Promise.resolve({ lang: 'en' }) })
}


