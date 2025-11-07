import type { Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'
import Link from "next/link"
import { WebsiteSchema } from "@/components/StructuredData"

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const resolvedParams = await params
  const lang = resolvedParams.lang as Locale
  const dict = await getDictionary(lang)

  return (
    <>
      <WebsiteSchema />
      
      {/* Hero Section - 仿照官网风格 */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* 背景图片叠加层 */}
        <div className="absolute inset-0 hero-bg"></div>
        
        {/* 左侧彩虹条纹 - 仿照官网 */}
        <div className="absolute left-0 top-0 bottom-0 w-2 md:w-3 rainbow-stripes"></div>
        
        <div className="container mx-auto px-4 relative z-10 pt-20">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 heading-white animate-fade-in leading-tight">
              {dict.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-light mb-10 leading-relaxed max-w-3xl mx-auto">
              {dict.hero.subtitle}
            </p>
            <Link
              href={`/${lang}/guides`}
              className="btn-primary inline-block text-lg"
            >
              {dict.hero.cta}
            </Link>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-black/40">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border border-neon-cyan/30">
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
        </div>
      </section>

      {/* Enlist & Resist Section with Video */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary">
                  {dict.sections.enlist.title}
                </h2>
                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-secondary/80">
                  {lang === 'en' ? 'Join the Resistance' : lang === 'zh' ? '加入抵抗组织' : 'レジスタンスに参加'}
                </h3>
                <p className="text-base md:text-lg text-light leading-relaxed">
                  {dict.sections.enlist.content}
                </p>
              </div>
              <div className="aspect-video rounded-xl overflow-hidden shadow-2xl border border-secondary/30">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/TxDZ21XUJW8"
                  title="ARC Raiders Ultimate Guide"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Extraction Adventure Section with Video */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="aspect-video rounded-xl overflow-hidden shadow-2xl border border-accent/30 order-2 md:order-1">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/U_uABoP8gRM"
                  title="Arc Raiders Review"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-accent">
                  {dict.sections.extraction.title}
                </h2>
                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-accent/80">
                  {lang === 'en' ? 'High-Stakes Missions' : lang === 'zh' ? '高风险任务' : 'ハイリスクミッション'}
                </h3>
                <p className="text-base md:text-lg text-light leading-relaxed">
                  {dict.sections.extraction.content}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Immersive World Section with Video */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-warning">
                  {dict.sections.immersive.title}
                </h2>
                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-warning/80">
                  {lang === 'en' ? 'Explore the Future' : lang === 'zh' ? '探索未来世界' : '未来を探索'}
                </h3>
                <p className="text-base md:text-lg text-light leading-relaxed">
                  {dict.sections.immersive.content}
                </p>
              </div>
              <div className="aspect-video rounded-xl overflow-hidden shadow-2xl border border-warning/30">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/Vg4NKUu0OrM"
                  title="Arc Raiders - Before You Buy"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shape Your Raider Section with Video */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="aspect-video rounded-xl overflow-hidden shadow-2xl border border-secondary/30 order-2 md:order-1">
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
              <div className="order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary">
                  {dict.sections.customization.title}
                </h2>
                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-secondary/80">
                  {lang === 'en' ? 'Create Your Playstyle' : lang === 'zh' ? '打造你的游戏风格' : 'プレイスタイルを作成'}
                </h3>
                <p className="text-base md:text-lg text-light leading-relaxed">
                  {dict.sections.customization.content}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-platform Section with Video */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-accent">
                  {dict.sections.crossplay.title}
                </h2>
                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-accent/80">
                  {lang === 'en' ? 'Play Anywhere' : lang === 'zh' ? '随时随地畅玩' : 'どこでもプレイ'}
                </h3>
                <p className="text-base md:text-lg text-light leading-relaxed">
                  {dict.sections.crossplay.content}
                </p>
              </div>
              <div className="aspect-video rounded-xl overflow-hidden shadow-2xl border border-accent/30">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/V1Zil_uFgJQ"
                  title="ARC Raiders WTF &amp; Funny Moments"
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
      </section>

      {/* Latest News Section with Video */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="aspect-video rounded-xl overflow-hidden shadow-2xl border border-accent/30 order-2 md:order-1">
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
              <div className="order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-accent">
                  {dict.sections.news.title}
                </h2>
                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-accent/80">
                  {lang === 'en' ? 'Stay Updated' : lang === 'zh' ? '保持更新' : '最新情報'}
                </h3>
                <p className="text-base md:text-lg text-light leading-relaxed">
                  {dict.sections.news.content}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-warning">
              {dict.sections.features.title}
            </h2>
            <p className="text-base md:text-lg text-light leading-relaxed text-center">
              {dict.sections.features.content}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center heading-gradient">
              {dict.faq.title}
            </h2>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => {
                const key = `q${num}` as keyof typeof dict.faq
                const faq = dict.faq[key] as { question: string; answer: string }
                return (
                  <div key={num} className="glass rounded-lg p-6 card-hover">
                    <h3 className="text-lg font-bold mb-3 text-secondary">
                      {faq.question}
                    </h3>
                    <p className="text-muted leading-relaxed text-sm md:text-base">
                      {faq.answer}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Game Info Section */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center heading-white">
              {dict.sections.gameInfo.title}
            </h2>
            <p className="text-base md:text-lg text-light leading-relaxed mb-12">
              {dict.sections.gameInfo.content}
            </p>
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-secondary">
              {dict.sections.platforms.title}
            </h3>
            <p className="text-base md:text-lg text-light leading-relaxed">
              {dict.sections.platforms.content}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 heading-white">
              {dict.cta.title}
            </h2>
            <p className="text-base md:text-lg text-light mb-8 leading-relaxed">
              {dict.cta.description}
            </p>
            <Link
              href={`/${lang}/guides`}
              className="btn-primary inline-block text-lg"
            >
              {dict.cta.button}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
