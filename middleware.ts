import { NextResponse } from 'next/server'
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

  // Keep non-English locales as-is
  if (pathname.startsWith('/zh') || pathname.startsWith('/ja')) {
    return
  }

  // Rewrite root and any non-prefixed path to English content without changing the URL
  const url = req.nextUrl.clone()
  url.pathname = `/en${pathname === '/' ? '' : pathname}`
  return NextResponse.rewrite(url)
}

export const config = {
  matcher: ['/((?!_next|api|.*\\..*).*)'],
}

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { i18n } from './i18n/config'

function getLocale(request: NextRequest): string {
  const pathname = request.nextUrl.pathname
  
  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  // Redirect to default locale if there is no locale
  if (pathnameIsMissingLocale) {
    return i18n.defaultLocale
  }

  // Get the locale from pathname
  const locale = i18n.locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  return locale || i18n.defaultLocale
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Check if pathname is missing locale
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)
    
    // e.g. incoming request is /guides
    // The new URL is now /en/guides
    return NextResponse.redirect(
      new URL(`/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`, request.url)
    )
  }
}

export const config = {
  // Matcher ignoring `/_next/`, `/api/`, `/favicon.ico`, `/robots.txt`, `/sitemap.xml`, etc.
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|txt|xml)$).*)'],
}
