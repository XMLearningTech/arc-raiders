import type { Metadata } from "next"
import type { Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'
import { BreadcrumbSchema } from '@/components/StructuredData'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const resolvedParams = await params
  const lang = resolvedParams.lang as Locale
  const dict = await getDictionary(lang)
  
  return {
    title: dict.videos.title,
    description: dict.videos.description,
    alternates: {
      canonical: lang === 'en' ? 'https://arc-raiders.net/videos' : `https://arc-raiders.net/${lang}/videos`,
      languages: {
        'en': 'https://arc-raiders.net/videos',
        'zh': 'https://arc-raiders.net/zh/videos',
        'ja': 'https://arc-raiders.net/ja/videos',
      },
    },
  }
}

export default async function VideosPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const resolvedParams = await params
  const lang = resolvedParams.lang as Locale
  const dict = await getDictionary(lang)

  return (
    <div className="min-h-screen pt-24 pb-16">
      <BreadcrumbSchema
        items={[
          { name: dict.navigation.home, url: 'https://arc-raiders.net' },
          { name: dict.videos.title, url: lang === 'en' ? 'https://arc-raiders.net/videos' : `https://arc-raiders.net/${lang}/videos` },
        ]}
      />
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 neon-text text-neon-purple">
            {dict.videos.title}
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            {dict.videos.description}
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Video 1 - Official Trailer */}
          <div className="glass rounded-2xl p-6 border border-neon-purple/30">
            <h2 className="text-2xl font-bold mb-4 text-neon-cyan">
              ARC Raiders Official Gameplay Trailer
            </h2>
            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/IpeJjQDXNAE"
                title="ARC Raiders Official Trailer"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* Video 2 - Ultimate Guide */}
          <div className="glass rounded-2xl p-6 border border-neon-cyan/30">
            <h2 className="text-2xl font-bold mb-4 text-neon-purple">
              ARC Raiders Ultimate Guide
            </h2>
            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/TxDZ21XUJW8"
                title="ARC Raiders Ultimate Guide"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* Video 3 - Arc Raiders Review */}
          <div className="glass rounded-2xl p-6 border border-neon-orange/30">
            <h2 className="text-2xl font-bold mb-4 text-neon-orange">
              Arc Raiders Review
            </h2>
            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/U_uABoP8gRM"
                title="Arc Raiders Review"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* Video 4 - Arc Raiders - Before You Buy */}
          <div className="glass rounded-2xl p-6 border border-neon-cyan/30">
            <h2 className="text-2xl font-bold mb-4 text-neon-pink">
              Arc Raiders - Before You Buy
            </h2>
            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/Vg4NKUu0OrM"
                title="Arc Raiders - Before You Buy"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* Video 5 - ARC Raiders WTF & Funny Moments */}
          <div className="glass rounded-2xl p-6 border border-neon-purple/30">
            <h2 className="text-2xl font-bold mb-4 text-neon-cyan">
              ARC Raiders WTF &amp; Funny Moments! Ep #15
            </h2>
            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/V1Zil_uFgJQ"
                title="ARC Raiders WTF &amp; Funny Moments! Ep #15"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* Video 6 - Solo ARC Raiders is a Masterpiece */}
          <div className="glass rounded-2xl p-6 border border-neon-orange/30">
            <h2 className="text-2xl font-bold mb-4 text-neon-purple">
              Solo ARC Raiders is a Masterpiece...
            </h2>
            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/IhOw2HHpm64"
                title="Solo ARC Raiders is a Masterpiece..."
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* Video 7 - 27 Arc Raiders Tips & Tricks */}
          <div className="glass rounded-2xl p-6 border border-neon-cyan/30">
            <h2 className="text-2xl font-bold mb-4 text-neon-orange">
              27 Arc Raiders Tips &amp; Tricks to Immediately Play Better
            </h2>
            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/TX_lFbSJr_g"
                title="27 Arc Raiders Tips &amp; Tricks to Immediately Play Better"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
