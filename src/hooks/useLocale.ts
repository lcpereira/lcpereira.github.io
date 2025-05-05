'use client';

import { routing } from '@/i18n/routing';
import { useParams } from 'next/navigation';

export function useLocale(): string {
  const params = useParams();

  return typeof params?.locale === 'string' ? params.locale : routing.defaultLocale;
}
