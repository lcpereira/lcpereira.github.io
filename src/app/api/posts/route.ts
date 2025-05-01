import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';
import matter from 'gray-matter';
import { defaultLocale } from '@/i18n';

export async function GET(req: NextRequest) {
  const locale = req.nextUrl.searchParams.get('locale') || defaultLocale;
  const postsRoot = path.join(process.cwd(), 'posts');

  try {
    const slugs = await fs.readdir(postsRoot);

    const posts = await Promise.all(
      slugs.map(async (slug) => {
        const filePath = path.join(postsRoot, slug, `${locale}.md`);
        try {
          const fileContent = await fs.readFile(filePath, 'utf8');
          const { data } = matter(fileContent);

          return {
            slug,
            title: data.title,
            excerpt: data.excerpt,
            date: data.date,
            tags: data.tags || [],
          };
        } catch {
          return null;
        }
      })
    );

    const validPosts = posts.filter(Boolean);

    validPosts.sort((a, b) => new Date(b!.date).getTime() - new Date(a!.date).getTime());

    return NextResponse.json(validPosts);
  } catch {
    return NextResponse.json({ message: 'Failed to load posts.' }, { status: 500 });
  }
}
