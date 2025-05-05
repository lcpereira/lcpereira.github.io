import { NextRequest, NextResponse } from 'next/server';
import { getPostsStatic } from '@/lib/getPostsStatic';
import { routing } from '@/i18n/routing';

export async function GET(req: NextRequest) {
  try {
    const locale = req.nextUrl.searchParams.get('locale') || routing.defaultLocale;
    const posts = await getPostsStatic(locale);
    return NextResponse.json(posts);
  } catch {
    return NextResponse.json({ message: 'Failed to load posts.' }, { status: 500 });
  }
}
