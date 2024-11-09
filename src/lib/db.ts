import { createClient } from '@libsql/client';

export const db = createClient({
  url: 'file:blog.db',
});

export async function initializeDatabase() {
  await db.execute(`
    CREATE TABLE IF NOT EXISTS posts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      slug TEXT NOT NULL UNIQUE,
      excerpt TEXT NOT NULL,
      content TEXT NOT NULL,
      image_url TEXT NOT NULL,
      published_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
}

export async function getPosts(page: number = 1, limit: number = 10) {
  const offset = (page - 1) * limit;
  const { rows: posts } = await db.execute({
    sql: `SELECT * FROM posts ORDER BY published_at DESC LIMIT ? OFFSET ?`,
    args: [limit, offset]
  });
  
  const { rows: [{ count }] } = await db.execute('SELECT COUNT(*) as count FROM posts');
  
  return {
    posts,
    total: count as number,
    totalPages: Math.ceil(count as number / limit)
  };
}

export async function getPostBySlug(slug: string) {
  const { rows: [post] } = await db.execute({
    sql: `SELECT * FROM posts WHERE slug = ?`,
    args: [slug]
  });
  
  return post;
}