import { getSiteUrl } from '@/lib/getSiteUrl';
import { getPostsStatic } from '@/lib/getPostsStatic';

const supportedLocales = ['pt-BR', 'en-US', 'es-ES'];

export const revalidate = 600;

export async function GET() {
  const siteUrl = getSiteUrl();

  const postsByLocale = await Promise.all(
    supportedLocales.map(async (locale) => {
      const posts = await getPostsStatic(locale);
      return posts.map(
        (post) => `
          <url>
            <loc>${siteUrl}/${locale}/blog/${post.slug}</loc>
            <lastmod>${post.date}</lastmod>
          </url>
        `
      );
    })
  );

  const urls = postsByLocale.flat().join('');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${siteUrl}</loc>
      </url>
      ${urls}
    </urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
