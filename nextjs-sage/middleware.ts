import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get('StaticWebAppsAuthCookie')?.value
  if (currentUser && !request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/dashboard', request.url))

  }
  if(!currentUser && request.nextUrl.pathname !== '/') {
    return NextResponse.redirect(new URL('/', request.url))
  }

}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/dashboard', '/'],
}