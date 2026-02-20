import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function proxy(request: NextRequest) {
  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect('https://github.com/thaisonzdx');
  }
  return NextResponse.next();
}
 
export const config = {
  matcher: '/:path*',
}