'use client';

import { useLocale } from '@/hooks/useLocale';
import Link from 'next/link';

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
};

type PostListProps = {
  posts: Post[];
};

export default function PostList({ posts }: PostListProps) {
  const locale = useLocale();

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>
      <ul className="space-y-8">
        {posts.map((post) => (
          <li key={post.slug} className="border-b pb-4">
            <Link href={`/blog/${post.slug}`} locale={locale}>
              <h2 className="text-2xl font-semibold hover:underline">{post.title}</h2>
            </Link>
            <p className="text-gray-600 mt-2">{post.excerpt}</p>
            <small className="text-gray-400">{new Date(post.date).toLocaleDateString('pt-BR')}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}
