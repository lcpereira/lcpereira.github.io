'use client';

import { IntlProvider, Messages } from 'next-intl';
import { ReactNode } from 'react';

type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export default function I18nProvider({ children, locale, messages, timeZone }: { children: ReactNode; locale: string; messages: DeepPartial<Messages> | null; timeZone: string; }) {
  return (
    <IntlProvider
      locale={locale}
      messages={messages}
      timeZone={timeZone}
      onError={(error) => {
        console.error('Intl Error:', error);
      }}
    >
      {children}
    </IntlProvider>
  );
}
