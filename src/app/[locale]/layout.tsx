import { defaultTimeZone, Locale, locales } from '@/i18n';
import I18nProvider from '@/I18nProvider';
import { notFound } from 'next/navigation';

import "@/styles/globals.css";
import '@/styles/prism.css';
import Layout from '@/components/Layout';

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = (await import(`@/messages/${locale}.json`)).default;

  return (
    <html lang={locale}>
      <link rel="manifest" href="/manifest.json" />
      <link rel="icon" href="/favicon.ico" />
      <body>
        <I18nProvider locale={locale} messages={messages} timeZone={defaultTimeZone}>
          <Layout>
            {children}
          </Layout>
        </I18nProvider>
      </body>
    </html>
  );
}
