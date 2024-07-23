import { NextResponse } from 'next/server';

export function middleware(req) {
  const userAgent = req.headers.get('user-agent') || '';

  if (userAgent.includes('curl') || userAgent.includes('wget')) {
    return NextResponse.redirect('/api/terminal');
  }

  return NextResponse.next();
}
