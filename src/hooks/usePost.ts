import { useState, useEffect } from 'react';
import { getPostBySlug } from '../lib/db';

interface Post {
  id: number;
  title: string;
  slug: string;
  content: string;
  image_url: string;
  published_at: string;
  updated_at: string;
}

export function usePost(slug: string) {
  const [post, setPost] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchPost() {
      try {
        setIsLoading(true);
        const data = await getPostBySlug(slug);
        setPost(data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPost();
  }, [slug]);

  return { post, isLoading, error };
}