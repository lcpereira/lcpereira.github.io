'use client';

import { useLocale } from '@/hooks/useLocale';
import Link from 'next/link';

export default function RecentPosts({ posts }: { posts: Post[] }) {
  const locale = useLocale();

  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Últimos Posts</h2>
      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/${locale}/blog/${post.slug}`} prefetch={false}>
              <h3 className="text-xl font-semibold hover:underline">{post.title}</h3>
            </Link>
            <p className="text-gray-600">{post.excerpt}</p>
          </li>
        ))}
      </ul>

      <div className="text-center mt-8">
        <Link href={`/${locale}/blog`} className="text-primary-600 font-semibold hover:underline">
          Ver todos os posts →
        </Link>
      </div>
    </section>
  );
}
