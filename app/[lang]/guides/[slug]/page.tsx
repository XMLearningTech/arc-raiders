import type { Metadata } from "next"
import type { Locale } from '@/i18n/config'
import { i18n } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'
import { BreadcrumbSchema, ArticleSchema } from '@/components/StructuredData'

const allSlugs = ["beginner", "combat", "extraction", "loadout", "map", "advanced"] as const
type GuideSlug = typeof allSlugs[number]

export async function generateStaticParams(): Promise<{ lang: Locale; slug: GuideSlug }[]> {
  const locales = i18n.locales
  const params: { lang: Locale; slug: GuideSlug }[] = []
  for (const lang of locales) {
    for (const slug of allSlugs) {
      params.push({ lang, slug })
    }
  }
  return params
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
  const resolved = await params
  const lang = resolved.lang as Locale
  const slug = resolved.slug as GuideSlug
  const dict = await getDictionary(lang)
  const title = dict.guides.categories[slug]?.title ?? 'Guide'
  const description = dict.guides.categories[slug]?.description ?? dict.guides.description

  const base = 'https://arc-raiders.net'
  const path = `/guides/${slug}`

  return {
    title,
    description,
    alternates: {
      canonical: lang === 'en' ? `${base}${path}` : `${base}/${lang}${path}`,
      languages: {
        'en': `${base}${path}`,
        'zh': `${base}/zh${path}`,
        'ja': `${base}/ja${path}`,
      },
    },
  }
}

const englishDefaults: Record<GuideSlug, { title: string; body: { h: string; p: string }[] }> = {
  beginner: {
    title: 'Beginner Roadmap',
    body: [
      { h: 'Core Goals (First 10 Hours)', p: 'Learn movement, resource loop, safe extraction routes, and basic combat. Prioritize survival and consistent extractions over high-value fights.' },
      { h: 'Essential Settings', p: 'Tune sensitivity/ADS, enable performance mode, clear motion blur, adjust audio for directional awareness.' },
      { h: 'Progression Loop', p: 'Enter → loot safely → avoid third-parties → extract; reinvest into utility (stims, armor plates, throwables) before chasing weapon upgrades.' },
      { h: 'Common Mistakes', p: 'Over-looting, tunnel vision on fights, extracting late, ignoring audio/verticality, not resetting when out-positioned.' },
    ],
  },
  combat: {
    title: 'Combat Fundamentals & Micro',
    body: [
      { h: 'Positioning', p: 'Hold headshot angles, use off-angles, avoid crossing open sightlines without utility. Always anchor to cover with multiple exits.' },
      { h: 'Peeking & Trading', p: 'Jiggle to info-gather, shoulder bait utility, wide-swing only with man-advantage or pre-utility.' },
      { h: 'TTK & Recoil', p: 'Burst-fire for mid-range. Control first-shot kick, reset crosshair between bursts, favor chest-to-head drag.' },
      { h: 'Squad Fights', p: 'Call targets, swing together, isolate 2v1s, stagger utilities rather than dumping at once.' },
    ],
  },
  extraction: {
    title: 'Extraction Decision-Making',
    body: [
      { h: 'Route Planning', p: 'Plan two extracts per raid (primary/backup). Rotate early when fights cluster near your path.' },
      { h: 'Risk Management', p: 'Bank early wins. If you secure high-value loot, reduce exposure and reroute to the nearest safe extract.' },
      { h: 'Third-Party Awareness', p: 'Assume every gunfight draws attention. Reposition immediately after shots; never loot under fresh audio.' },
      { h: 'Timer Pressure', p: 'Do not contest extracts when low on resources—rotate and reset.' },
    ],
  },
  loadout: {
    title: 'Efficient Loadout Builds',
    body: [
      { h: 'Budget Kit', p: 'Reliable AR + 1x optic, basic armor, stims x2, smokes x2. Focus on survival and route learning.' },
      { h: 'Balanced Kit', p: 'DMR/AR mid optic, armor II, stims x3, smokes x2, frag x1. Flexible for mid-game pushes.' },
      { h: 'High-Risk High-Reward', p: 'Meta rifle, armor III, full utility. Only when squad economy is healthy.' },
      { h: 'Utility Priority', p: 'Smokes save more lives than frags. Always bring at least one disengage tool.' },
    ],
  },
  map: {
    title: 'Map Mastery & Rotations',
    body: [
      { h: 'Landmarks', p: 'Memorize high-traffic POIs, ziplines, sound zones, and common sniper nests.' },
      { h: 'Spawn Heuristics', p: 'Predict enemy spawns by mirroring your position. Expect early contests on loot chokes and high-grounds.' },
      { h: 'Sound & Elevation', p: 'Use verticality to break audio lines. Mask movement with environmental noise when possible.' },
      { h: 'Extract Chokes', p: 'Clear angles sequentially; smoke long sights; pre-aim rat corners before committing.' },
    ],
  },
  advanced: {
    title: 'Advanced Tactics & Macro',
    body: [
      { h: 'Tempo Control', p: 'Swap between fast execs and slow defaults. Create noise elsewhere to mask the real plan.' },
      { h: 'Economy & Reset', p: 'Track squad economy. Take eco-raid after two fails; protect momentum.' },
      { h: 'Information Game', p: 'Bait utility, force rotates, fake retreat then re-hit. Convert info into map control.' },
      { h: 'Endgame Discipline', p: 'Do not ego-challenge the final hold. Play numbers and secure safe extract.' },
    ],
  },
}

export default async function GuideDetail({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const resolved = await params
  const lang = resolved.lang as Locale
  const slug = resolved.slug as GuideSlug
  const dict = await getDictionary(lang)
  const category = dict.guides.categories[slug]
  const localized = (dict as any).guides?.guideDetails?.[slug] as { title?: string; body?: { h: string; p: string }[] } | undefined
  const data = localized && localized.body?.length
    ? { title: localized.title || category?.title || englishDefaults[slug].title, body: localized.body }
    : englishDefaults[slug]

  return (
    <div className="min-h-screen pt-24 pb-16">
      <BreadcrumbSchema
        items={[
          { name: dict.navigation.home, url: 'https://arc-raiders.net' },
          { name: dict.guides.title, url: lang === 'en' ? 'https://arc-raiders.net/guides' : `https://arc-raiders.net/${lang}/guides` },
          { name: category?.title ?? 'Guide', url: (lang === 'en' ? `https://arc-raiders.net/guides/${slug}` : `https://arc-raiders.net/${lang}/guides/${slug}`) },
        ]}
      />

      <ArticleSchema
        title={category?.title ?? 'Guide'}
        description={category?.description ?? dict.guides.description}
        datePublished={new Date().toISOString()}
        dateModified={new Date().toISOString()}
        authorName="ARC Raiders Wiki Team"
      />

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 heading-white">{category?.title ?? data.title}</h1>
          <p className="text-white/70 mb-10">{category?.description ?? dict.guides.description}</p>

          <div className="space-y-6">
            {data.body.map((sec, idx) => (
              <div key={idx} className="glass rounded-xl p-6 border border-neon-cyan/20">
                <h2 className="text-2xl font-bold mb-3 text-neon-cyan">{sec.h}</h2>
                <p className="text-white/80 leading-relaxed">{sec.p}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}


