import type { Metadata } from "next";
import { i18n, type Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "../globals.css";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  const { lang } = await params
  
  const titles = {
    en: "ARC Raiders Wiki - Complete Strategy Guide & Tips",
    zh: "ARC Raiders 攻略百科 - 完整指南",
    ja: "ARC Raiders 攻略Wiki - 完全ガイド"
  }
  
  const descriptions = {
    en: "Your complete ARC Raiders guide: master extraction shooter strategies, discover powerful weapons, explore detailed maps, and dominate PvPvE battles in Embark Studios' sci-fi game.",
    zh: "ARC Raiders 完整攻略指南：掌握提取射击策略、发现强力武器装备、探索详细地图、在 Embark Studios 科幻世界中主导 PvPvE 战斗，成为顶尖玩家。",
    ja: "ARC Raiders 完全攻略ガイド：抽出シューター戦略をマスターし、強力な武器を発見し、詳細なマップを探索、Embark Studios の SF ゲームで PvPvE バトルを制覇しましょう。"
  }

  const locales = {
    en: 'en_US',
    zh: 'zh_CN',
    ja: 'ja_JP'
  }

  return {
    metadataBase: new URL('https://arc-raiders.net'),
    title: {
      default: titles[lang],
      template: `%s | ${titles[lang]}`
    },
    description: descriptions[lang],
    keywords: lang === 'en' 
      ? ["ARC Raiders", "game guide", "extraction shooter", "Embark Studios", "beginner guide", "weapons", "maps", "PvPvE"]
      : lang === 'zh'
      ? ["ARC Raiders", "游戏攻略", "提取射击", "Embark Studios", "新手指南", "武器装备", "地图攻略", "PvPvE"]
      : ["ARC Raiders", "ゲームガイド", "抽出シューター", "Embark Studios", "初心者ガイド", "武器", "マップ", "PvPvE"],
    authors: [{ name: "ARC Raiders Wiki Team" }],
    creator: "ARC Raiders Wiki",
    publisher: "ARC Raiders Wiki",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: locales[lang],
      url: `https://arc-raiders.net/${lang}`,
      siteName: 'ARC Raiders Wiki',
      title: titles[lang],
      description: descriptions[lang],
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'ARC Raiders Wiki',
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: titles[lang],
      description: descriptions[lang],
      images: ['/twitter-image.jpg'],
    },
    alternates: {
      canonical: `https://arc-raiders.net/${lang}`,
      languages: {
        'en': 'https://arc-raiders.net/en',
        'zh': 'https://arc-raiders.net/zh',
        'ja': 'https://arc-raiders.net/ja',
      }
    },
  }
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return (
    <html lang={lang}>
      <body className="bg-dark-bg text-white font-sans antialiased">
        <Navigation lang={lang} dict={dict} />
        <main className="min-h-screen">{children}</main>
        <Footer lang={lang} dict={dict} />
      </body>
    </html>
  );
}
