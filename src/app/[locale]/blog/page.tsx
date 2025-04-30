import { getPosts } from '@/lib/getPosts';
import PostList from '@/components/PostList';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  const posts = await getPosts(locale);

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      <PostList posts={posts} />
    </main>
  );
}
