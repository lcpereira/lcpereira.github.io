'use client';

import { useLocale } from '@/hooks/useLocale';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import arrowTopRightIcon from '@iconify-icons/mdi/arrow-top-right';

type Props = {
  posts: Post[];
};

export default function RecentPosts({ posts }: Props) {
  const locale = useLocale();
  console.log(locale, posts[0].date)
  const t = useTranslations('recentPosts');

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-dark-900 dark:text-white mb-5">
        {t('title')}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post) => {
          const formattedDate = new Date(post.date).toLocaleDateString(locale, {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          });

          return (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              locale={locale}
              prefetch={true}
              className="bg-primary-100 dark:bg-dark-800 rounded-md overflow-hidden shadow-sm group transition transform hover:scale-[1.02] border border-gray-200 dark:border-dark-700"
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
                <Icon icon={arrowTopRightIcon} className="w-4 h-4" />
              </div>

              <div className="p-5 text-dark-900 dark:text-white">
                <h3 className="text-lg font-bold mb-2 group-hover:underline">
                  {post.title}
                </h3>
                <p className="text-sm mb-3">{post.excerpt}</p>
                <p className="text-sm font-medium">{formattedDate}</p>
              </div>
            </Link>
          )
        })}
      </div>

      <div className="text-center mt-10">
        <Link
          href="/blog"
          prefetch={true}
          locale={locale}
          className="ml-2 bg-primary-600 hover:bg-primary-700 text-white px-5 py-2 rounded-md transition-colors text-sm font-medium"
        >
          {t('seeAll')}
        </Link>
      </div>
    </section>
  );
}
