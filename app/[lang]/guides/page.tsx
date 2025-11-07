import type { Metadata } from "next"
import type { Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'
import Link from "next/link"

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  const { lang } = await params
  const dict = await getDictionary(lang)
  
  return {
    title: dict.guides.title,
    description: dict.guides.description,
    alternates: {
      canonical: `https://arc-raiders.net/${lang}/guides`,
    },
  }
}

const guideCategories = [
  { id: 'beginner', icon: '🎮', color: 'cyan' },
  { id: 'combat', icon: '⚔️', color: 'purple' },
  { id: 'extraction', icon: '🚁', color: 'orange' },
  { id: 'loadout', icon: '🎯', color: 'cyan' },
  { id: 'map', icon: '🗺️', color: 'purple' },
  { id: 'advanced', icon: '🏆', color: 'orange' },
]

export default async function GuidesPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            {dict.guides.title}
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            {dict.guides.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {guideCategories.map((category) => {
            const categoryKey = category.id as keyof typeof dict.guides.categories
            const categoryData = dict.guides.categories[categoryKey]
            
            return (
              <Link
                key={category.id}
                href={`/${lang}/guides/${category.id}`}
                className="group glass rounded-xl p-6 card-hover"
              >
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h2 className="text-xl font-bold mb-3 text-white">
                  {categoryData.title}
                </h2>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {categoryData.description}
                </p>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
