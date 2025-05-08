import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Layout from '@/components/Layout';
import '@/styles/globals.css';
import '@/styles/prism.css';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { routing } from '@/i18n/routing';

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

const metadataContent = {
  'en-US': {
    title: 'Leandro Carlos Pereira',
    description:
      'Personal website of Leandro Carlos Pereira — Software Developer specialized in frontend, mobile and fullstack projects. Sharing knowledge, ideas and experiences.',
  },
  'pt-BR': {
    title: 'Leandro Carlos Pereira',
    description:
      'Site pessoal de Leandro Carlos Pereira — Desenvolvedor de Software com experiência em frontend, mobile e projetos fullstack. Compartilhando conhecimento, ideias e experiências.',
  },
  'es-ES': {
    title: 'Leandro Carlos Pereira',
    description:
      'Sitio personal de Leandro Carlos Pereira — Desarrollador de Software con experiencia en frontend, móvil y proyectos fullstack. Compartiendo conocimientos, ideas y experiencias.',
  },
};


export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) notFound();

  const content = metadataContent[locale as keyof typeof metadataContent];

  return {
    title: content.title,
    description: content.description,
    openGraph: {
      title: content.title,
      description: content.description,
      images: [
        {
          url: '/apple-touch-icon.png',
          width: 1200,
          height: 630,
          alt: 'Preview lcpereira.dev',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: content.title,
      description: content.description,
      images: ['/apple-touch-icon.png'],
    },
    metadataBase: new URL('https://www.lcpereira.dev'),
  };
}

export const revalidate = 600;
export const fetchCache = 'default-cache';

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) notFound();

  const messages = await getMessages({ locale });

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#7c3aed" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (theme === 'dark' || (!theme && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (_) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Layout>{children}</Layout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
