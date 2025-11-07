import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'ARC Raiders Wiki',
    short_name: 'ARC Wiki',
    description: 'ARC Raiders 攻略、资讯与社区资源',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      { src: '/icon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' },
    ],
    lang: 'en',
    dir: 'ltr',
  }
}


