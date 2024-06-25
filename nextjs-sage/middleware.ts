import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
    console.log(request.cookies)
  const currentUser = request.cookies.get('currentUser')?.value

  if (!currentUser) {
    return Response.error();
  }
}
 