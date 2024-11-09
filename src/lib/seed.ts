import { db } from './db';

const samplePosts = [
  {
    title: "Modern Web Teknolojileri",
    slug: "modern-web-teknolojileri",
    excerpt: "Günümüz web teknolojilerinin gelişimi ve geleceği hakkında detaylı bir inceleme.",
    content: `Web teknolojileri her geçen gün gelişmeye ve değişmeye devam ediyor. Modern web uygulamaları artık daha hızlı, daha güvenli ve daha kullanıcı dostu.

    Mikroservis mimarileri, modern web uygulamalarının ölçeklenebilirliğini artırırken, Progressive Web Apps (PWA) teknolojisi mobil uygulama deneyimini web üzerinden sunmamızı sağlıyor.

    WebAssembly gibi teknolojiler, web uygulamalarının performansını native uygulamalara yaklaştırırken, yeni JavaScript özellikleri geliştirici deneyimini iyileştiriyor.

    Modern frontend framework'leri, component tabanlı geliştirme yaklaşımıyla kod tekrarını azaltıp, bakımı kolaylaştırıyor. Virtual DOM implementasyonları sayesinde uygulama performansı optimize ediliyor.`,
    image_url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072",
    published_at: "2024-03-01T10:00:00Z"
  },
  {
    title: "React'in Yeni Özellikleri",
    slug: "reactin-yeni-ozellikleri",
    excerpt: "React 18 ile gelen yeni özellikler ve performans iyileştirmeleri.",
    content: `React 18, modern web uygulamaları için çığır açan yenilikler getiriyor. Concurrent Mode ile kullanıcı deneyimi önemli ölçüde iyileşiyor.

    Server Components, büyük JavaScript bundle'larının önüne geçerken, Suspense for Data Fetching veri yükleme süreçlerini daha yönetilebilir hale getiriyor.

    Automatic batching özelliği sayesinde gereksiz render'ların önüne geçiliyor ve uygulama performansı artıyor.

    Transition API ile kullanıcı arayüzü güncellemeleri daha akıcı hale geliyor.`,
    image_url: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=2070",
    published_at: "2024-02-28T15:30:00Z"
  }
];

export async function seedDatabase() {
  try {
    for (const post of samplePosts) {
      await db.execute({
        sql: `INSERT INTO posts (title, slug, excerpt, content, image_url, published_at)
              VALUES (?, ?, ?, ?, ?, ?)
              ON CONFLICT(slug) DO NOTHING`,
        args: [post.title, post.slug, post.excerpt, post.content, post.image_url, post.published_at]
      });
    }
    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
}