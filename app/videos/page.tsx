import type { Metadata } from "next"
import EnVideos from "../[lang]/videos/page"

export async function generateMetadata(): Promise<Metadata> {
  return {
    alternates: {
      canonical: 'https://arc-raiders.net/videos',
      languages: {
        'en': 'https://arc-raiders.net/videos',
        'zh': 'https://arc-raiders.net/zh/videos',
        'ja': 'https://arc-raiders.net/ja/videos',
      },
    },
  }
}

export default function RootVideos() {
  return (EnVideos as any)({ params: Promise.resolve({ lang: 'en' }) })
}


