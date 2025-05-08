import { getSiteUrl } from '@/lib/getSiteUrl';
import PostContent from '@/components/PostContent';
import { Metadata } from 'next';
import { getPostBySlug } from '@/lib/getPostBySlug';
import { getTranslations } from 'next-intl/server';

type Props = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;

  try {
    const { data } = await getPostBySlug(slug, locale);
    const url = `${getSiteUrl()}/${locale}/blog/${slug}`;
    const title = `${data.title} | Leandro Carlos Pereira`;

    return {
      title,
      description: data.excerpt,
      alternates: {
        canonical: url,
      },
      openGraph: {
        title,
        description: data.excerpt,
        url,
        siteName: 'Leandro Carlos Pereira',
        type: 'article',
        publishedTime: data.date,
        tags: data.tags,
        locale,
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description: data.excerpt,
      },
    };
  } catch (error) {
    console.error('Erro ao gerar metadata:', error);
    return {};
  }
}

export default async function PostPage({ params }: Props) {
  const { slug, locale } = await params;
  const t = await getTranslations({ locale, namespace: 'post' });

  try {
    const { data, content } = await getPostBySlug(slug, locale);

    return (
      <main className="max-w-3xl mx-auto px-4 py-8">
        <PostContent title={data.title} date={data.date} content={content} />
      </main>
    );
  } catch (error) {
    console.error('Erro ao buscar post:', error);
    return (
      <main className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">{t('notFoundTitle')}</h1>
        <p>{t('notFoundDescription')}</p>
      </main>
    );
  }
}

export const revalidate = 600;
