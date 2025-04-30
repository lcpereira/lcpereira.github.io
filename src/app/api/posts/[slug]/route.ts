import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';
import matter from 'gray-matter';
import { defaultLocale } from '@/i18n';

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  const { slug } = await context.params;
  const locale = req.nextUrl.searchParams.get('locale') || defaultLocale;
  const postPath = path.join(process.cwd(), 'posts', locale, `${slug}.md`);

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
  } catch (error) {
    console.error('Error reading post file:', error);
    return NextResponse.json(
      { message: 'Post not found.' },
      { status: 404 }
    );
  }
}
