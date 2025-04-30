import { getSiteUrl } from '@/lib/getSiteUrl';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function fetchApi<T = any>(path: string): Promise<T> {
  const res = await fetch(`${getSiteUrl()}${path}`, {});

  if (!res.ok) {
    throw new Error(`Erro ao buscar ${path}: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();
  return data;
}
