import type { Metadata } from "next"
import EnHome from "./[lang]/page"

export async function generateMetadata(): Promise<Metadata> {
  return {
    alternates: {
      canonical: 'https://arc-raiders.net',
      languages: {
        'en': 'https://arc-raiders.net',
        'zh': 'https://arc-raiders.net/zh',
        'ja': 'https://arc-raiders.net/ja',
      },
    },
  }
}

export default function RootHome() {
  return (EnHome as any)({ params: Promise.resolve({ lang: 'en' }) })
}

