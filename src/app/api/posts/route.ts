import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';
import matter from 'gray-matter';
import { defaultLocale } from '@/i18n';

export async function GET(req: NextRequest) {
  const locale = req.nextUrl.searchParams.get('locale') || defaultLocale;
  const postsDirectory = path.join(process.cwd(), 'posts', locale);

  try {
    const files = await fs.readdir(postsDirectory);

    const posts = await Promise.all(
      files
        .filter((filename) => filename.endsWith('.md'))
        .map(async (filename) => {
          const filePath = path.join(postsDirectory, filename);
          const fileContent = await fs.readFile(filePath, 'utf8');
          const { data } = matter(fileContent);

          return {
            slug: filename.replace('.md', ''),
            title: data.title,
            excerpt: data.excerpt,
            date: data.date,
            tags: data.tags || [],
          };
        })
    );

    posts.sort((a, b) => (a.date < b.date ? 1 : -1));

    return NextResponse.json(posts);
  } catch (err) {
    console.error('❌ Failed to load posts:', err);
    return NextResponse.json({ message: 'Failed to load posts.' }, { status: 500 });
  }
}
