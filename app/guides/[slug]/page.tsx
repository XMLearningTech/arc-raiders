import type { Metadata } from "next"
import EnGuide from "../../[lang]/guides/[slug]/page"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  return {
    alternates: {
      canonical: `https://arc-raiders.net/guides/${slug}`,
      languages: {
        'en': `https://arc-raiders.net/guides/${slug}`,
        'zh': `https://arc-raiders.net/zh/guides/${slug}`,
        'ja': `https://arc-raiders.net/ja/guides/${slug}`,
      },
    },
  }
}

export default function RootGuide({ params }: { params: Promise<{ slug: string }> }) {
  return (EnGuide as any)({ params: (async () => ({ lang: 'en', slug: (await params).slug }))() })
}


