import HeroSection from '@/components/HeroSection';
import SocialLinks from '@/components/SocialLinks';
import DownloadCVButton from '@/components/DownloadCVButton';
import RecentPosts from '@/components/RecentPosts';
import { getPosts } from '@/lib/getPosts';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  const posts = await getPosts(locale);

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <HeroSection />
      <SocialLinks />
      <DownloadCVButton />
      <RecentPosts posts={posts.slice(0, 3)} />
    </main>
  );
}
