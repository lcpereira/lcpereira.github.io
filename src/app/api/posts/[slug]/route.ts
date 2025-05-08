import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';
import matter from 'gray-matter';
import { routing } from '@/i18n/routing';

export async function GET(
  req: NextRequest,
  { params } : { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const locale = req.nextUrl.searchParams.get('locale') || routing.defaultLocale;
  const postPath = path.join(process.cwd(), 'posts', slug, `${locale}.md`);

  try {
    const file = await fs.readFile(postPath, 'utf8');
    const { data, content } = matter(file);
    const formattedDate = new Date(data.date).toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });

    return NextResponse.json({
      data: {
        slug,
        title: data.title,
        excerpt: data.excerpt,
        date: formattedDate,
        tags: data.tags || [],
      },
      content,
    });
  } catch {
    console.error('❌ Post not found:', postPath);
    return NextResponse.json({ message: 'Post not found.' }, { status: 404 });
  }
}
