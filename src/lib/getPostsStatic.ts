import path from 'path';
import fs from 'fs/promises';
import matter from 'gray-matter';
import { routing } from '@/i18n/routing';

export async function getPostsStatic(locale: string = routing.defaultLocale) {
  const postsRoot = path.join(process.cwd(), 'posts');

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

  return posts
    .filter(Boolean)
    .sort((a, b) => new Date(b!.date).getTime() - new Date(a!.date).getTime()) as {
      slug: string;
      title: string;
      excerpt: string;
      date: string;
      tags: string[];
    }[];
}
