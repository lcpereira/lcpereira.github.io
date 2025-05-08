import { getPosts } from '@/lib/getPosts';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  const posts = await getPosts(locale);

  return (
    <section className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      {posts.map((post) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}`}
          locale={locale}
          prefetch={true}
          className="flex flex-col md:flex-row bg-primary-100 dark:bg-dark-800 rounded-md overflow-hidden shadow hover:shadow-md transition border border-gray-200 dark:border-dark-700"
        >
          <div className="relative w-full md:w-1/3 h-48 md:h-auto">
            <Image
              src={`/posts/${post.slug}.png`}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="p-5 flex flex-col justify-between md:w-2/3">
            <div>
              <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-2">
                {post.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm line-clamp-3">
                {post.excerpt}
              </p>
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">{post.date}</p>
          </div>
        </Link>
      ))}
    </section>
  );
}
