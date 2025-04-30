import { fetchApi } from './fetchApi';

export async function getPosts(locale: string) {
  return fetchApi<Post[]>(`/api/posts?locale=${locale}`);
}
