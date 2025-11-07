import type { Metadata } from "next"
import type { Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  const { lang } = await params
  const dict = await getDictionary(lang)
  
  return {
    title: dict.about.title,
    description: dict.about.mission.content,
    alternates: {
      canonical: `https://arc-raiders.net/${lang}/about`,
    },
  }
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-12 text-center neon-text text-neon-orange">
            {dict.about.title}
          </h1>

          <div className="space-y-12">
            <div className="glass rounded-2xl p-8 border border-neon-orange/20">
              <h2 className="text-3xl font-bold mb-6 text-neon-cyan">
                {dict.about.mission.title}
              </h2>
              <p className="text-lg text-white/80 leading-relaxed">
                {dict.about.mission.content}
              </p>
            </div>

            <div className="glass rounded-2xl p-8 border border-neon-orange/20">
              <h2 className="text-3xl font-bold mb-6 text-neon-purple">
                {dict.about.coverage.title}
              </h2>
              <p className="text-lg text-white/80 leading-relaxed">
                {dict.about.coverage.content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
