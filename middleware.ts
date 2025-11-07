import { NextResponse as NextRes } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // Skip Next internal, API and files with extensions
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    /\.[^/]+$/.test(pathname)
  ) {
    return
  }

  // Keep already-prefixed locales as-is (en/zh/ja)
  if (pathname.startsWith('/en') || pathname.startsWith('/zh') || pathname.startsWith('/ja')) {
    return
  }

  // Rewrite root and any non-prefixed path to English content without changing the URL
  const url = req.nextUrl.clone()
  url.pathname = `/en${pathname === '/' ? '' : pathname}`
  return NextRes.rewrite(url)
}

export const config = {
  matcher: ['/((?!_next|api|.*\\..*).*)'],
}
