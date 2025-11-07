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

  // Redirect any '/en' prefixed URL to root equivalent to avoid duplicate paths
  if (pathname === '/en' || pathname === '/en/') {
    const url = req.nextUrl.clone()
    url.pathname = '/'
    return NextRes.redirect(url, 308)
  }
  if (pathname.startsWith('/en/')) {
    const url = req.nextUrl.clone()
    url.pathname = pathname.replace(/^\/en/, '') || '/'
    return NextRes.redirect(url, 308)
  }

  // Keep non-English locales as-is
  if (pathname.startsWith('/zh') || pathname.startsWith('/ja')) {
    return
  }

  // Serve root and non-prefixed paths directly (English as default) — no rewrite
  return
}

export const config = {
  matcher: ['/((?!_next|api|.*\\..*).*)'],
}
