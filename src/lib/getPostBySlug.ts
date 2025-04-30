import { fetchApi } from './fetchApi';

export async function getPostBySlug(slug: string, locale: string) {
  return fetchApi<{ data: Post; content: string }>(`/api/posts/${slug}?locale=${locale}`);
}
