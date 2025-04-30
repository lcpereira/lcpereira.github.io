import { getSiteUrl } from '@/lib/getSiteUrl';
import PostContent from '@/components/PostContent';
import { Metadata } from 'next';
import { getPostBySlug } from '@/lib/getPostBySlug';

type Props = {
  params: {
    locale: string;
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { locale, slug } = await params;
    const { data } = await getPostBySlug(slug, locale);

    return {
      title: `${data.title} | Leandro Carlos Pereira`,
      description: data.excerpt,
      alternates: {
        canonical: `${getSiteUrl()}/${locale}/blog/${slug}`,
      },
      openGraph: {
        title: `${data.title} | Leandro Carlos Pereira`,
        description: data.excerpt,
        url: `${getSiteUrl()}/${locale}/blog/${slug}`,
        siteName: 'Leandro Carlos Pereira',
        type: 'article',
        publishedTime: data.date,
        tags: data.tags,
        locale: locale,
      },
      twitter: {
        card: 'summary_large_image',
        title: `${data.title} | Leandro Carlos Pereira`,
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
        <h1 className="text-3xl font-bold mb-4">Post não encontrado</h1>
        <p>Desculpe, não conseguimos encontrar o post solicitado.</p>
      </main>
    );
  }
}
