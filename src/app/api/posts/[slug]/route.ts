import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';
import matter from 'gray-matter';
import { defaultLocale } from '@/i18n';

export async function GET(
  req: NextRequest,
  { params } : { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const locale = req.nextUrl.searchParams.get('locale') || defaultLocale;

  const postPath = path.join(process.cwd(), 'posts', slug, `${locale}.md`);

  try {
    const file = await fs.readFile(postPath, 'utf8');
    const { data, content } = matter(file);

    return NextResponse.json({
      data: {
        slug,
        title: data.title,
        excerpt: data.excerpt,
        date: data.date,
        tags: data.tags || [],
      },
      content,
    });
  } catch {
    console.error('❌ Post not found:', postPath);
    return NextResponse.json({ message: 'Post not found.' }, { status: 404 });
  }
}
