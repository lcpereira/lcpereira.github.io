'use client';

import { useLocale } from '@/hooks/useLocale';
import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@iconify/react';

export default function RecentPosts({ posts }: { posts: Post[] }) {
  const locale = useLocale();

  return (
    <section className="bg-primary-600 dark:bg-dark-700 text-white py-8 px-4 rounded-2xl">
      <h2 className="text-3xl font-bold mb-5 text-center">Blog</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/${locale}/blog/${post.slug}`}
            prefetch={false}
            className="bg-white dark:bg-dark-800 rounded-2xl overflow-hidden shadow-md group transition transform hover:scale-[1.02]"
          >
            <div className="relative h-48 w-full">
              <Image
                src={`/posts/${post.slug}.png`}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute top-4 right-4 bg-primary-600 text-white rounded-full p-2">
              <Icon icon="mdi:arrow-top-right" className="w-4 h-4" />
            </div>

            <div className="p-5 text-dark-900 dark:text-white">
              <h3 className="text-lg font-bold mb-2 group-hover:underline">{post.title}</h3>
              <p className="text-sm mb-3">{post.excerpt}</p>
              <p className="text-sm font-medium">
                {new Date(post.date).toLocaleDateString(locale, {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          href={`/${locale}/blog`}
          className="inline-block px-5 py-2 bg-white text-primary-600 font-semibold rounded-md transition hover:bg-gray-100"
        >
          Ver todos os posts
        </Link>
      </div>
    </section>
  );
}
