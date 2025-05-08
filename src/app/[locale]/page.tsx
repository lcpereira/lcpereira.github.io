import dynamic from 'next/dynamic';
import { getPosts } from '@/lib/getPosts';

const HeroSection = dynamic(() => import('@/components/HeroSection'));
const AboutSection = dynamic(() => import('@/components/AboutSection'));
const SkillsSection = dynamic(() => import('@/components/SkillsSection'));
const RecentPosts = dynamic(() => import('@/components/RecentPosts'));

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
