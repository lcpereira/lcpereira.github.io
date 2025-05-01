import { NextRequest, NextResponse } from 'next/server';
import { defaultLocale } from '@/i18n';
import { getPostsStatic } from '@/lib/getPostsStatic';

export async function GET(req: NextRequest) {
  try {
    const locale = req.nextUrl.searchParams.get('locale') || defaultLocale;
    const posts = await getPostsStatic(locale);
    return NextResponse.json(posts);
  } catch {
    return NextResponse.json({ message: 'Failed to load posts.' }, { status: 500 });
  }
}
