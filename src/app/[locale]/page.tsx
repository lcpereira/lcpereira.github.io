import HeroSection from '@/components/HeroSection';
import RecentPosts from '@/components/RecentPosts';
import { getPosts } from '@/lib/getPosts';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  const posts = await getPosts(locale);

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <HeroSection />
        <AboutSection />
        <SkillsSection />
        <RecentPosts posts={posts.slice(0, 3)} />
    </main>
  );
}
