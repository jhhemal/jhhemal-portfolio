import { NextResponse } from 'next/server';

export function middleware(req) {
  const url = req.nextUrl.clone();
  url.pathname = '/api/terminal';
  return NextResponse.rewrite(url);
}
