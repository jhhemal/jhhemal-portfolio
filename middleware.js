import { NextResponse } from 'next/server';

export function middleware(req) {
  const userAgent = req.headers.get('user-agent') || '';

  if (userAgent.includes('curl') || userAgent.includes('wget')) {
    const url = req.nextUrl.clone();
    url.pathname = '/api/terminal';
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}
