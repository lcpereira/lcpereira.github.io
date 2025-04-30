'use client';

import { defaultLocale } from '@/i18n';
import { useParams } from 'next/navigation';

export function useLocale(): string {
  const params = useParams();

  return typeof params?.locale === 'string' ? params.locale : defaultLocale;
}
