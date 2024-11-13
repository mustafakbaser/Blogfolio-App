import { calculateReadingTime } from '../utils/readingTime';

export interface CodeSection {
  type: 'code';
  content: string;
  language: string;
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: (string | CodeSection)[];
  imageUrl: string;
  publishedAt: string;
  category: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'React Server Components: Yeni Nesil Web Uygulamaları',
    slug: 'nesne-yonelimli-programlama-rehberi',
    category: 'Frontend',
    excerpt:
      'Yazılımın gerçek dünyadaki nesne modelleri üzerinden tasarlamak ve bu nesneler arasındaki etkileşim...',
    content: [
      'Nesne Yönelimli Programlama (OOP) ya da Nesne Odaklı Programlama, ismini çok sık duyduğumuz modern bilgisayar sistemlerinin temel taşlarından biridir. Nesne yönelimli programlamanın esas amacı, yazılımı gerçek dünyadaki nesnelerin modelleri üzerinden tasarlamak ve bu nesneler arasındaki etkileşimleri yönetmektir. Bu yaklaşım, karmaşık sistemleri daha yönetilebilir parçalara böler ve tekrar kullanılabilirlik, esneklik ve sürdürülebilirlik gibi avantajlar sağlar.',
      'Nesne yönelimli programlamada, veri ve işlevsellik birlikte gruplanır ve "nesne" adı verilen yapılar oluşturulur. Bu nesnelerin içinde bulunan verilerin ve işlevlerin birbirleriyle ilişkisi belirli kurallarla tanımlanır. Bu sayede, bir nesne üzerinde yapılan değişiklikler diğer nesneleri etkileyebilir, bu da yazılımın daha tutarlı ve güvenilir olmasını sağlar.',
      'Şöyle düşünelim, bir araba, bir müşteri veya bir kitap gibi herhangi bir nesneyi ele alalım. Her biri bir sınıfın örneği olabilir. Bu sınıflar, nesnelerin özelliklerini (örneğin, bir arabanın markası, rengi veya bir müşterinin adı) ve davranışlarını (örneğin, bir arabanın çalıştırılması veya bir müşteriye sipariş verilmesi) tanımlar.',
      'Konuya daha derinden bakmak için, OOP`yi anlamak için sadece nesne, sınıf, kalıtım gibi kavramlara değil, büyük resme bakmak gerektir. Dr. Alan Kay, bu konunun ana odağının nesneler değil, haberleşme / mesajlaşma olduğunu belirtir. Sistemlerin birbiriyle mesajlaşması. En basit şekilde, Bir kodun, bir başka kod ile iletişime geçip yanıt alması şeklinde basitleştirebiliriz. Yani bütün bilgisayar sistemlerinin, birbirlerini etkilemeden haberleşebilmesini sağlamaktır.',
      {
        type: 'code',
        language: 'java',
        content: `public class Araba {
    // Alanlar (Özellikler)
    String marka;
    String model;
    String renk;

    // Metodlar
    public void calis() {
      System.out.println("Araba çalıştırıldı.");
    }
  }`,
},
      'Server Components ile veri çekme işlemleri çok daha basit hale gelir. Async/await kullanarak doğrudan component içinde veri çekebilirsiniz:',
      {
        type: 'code',
        language: 'typescript',
        content: `// lib/api.ts
export async function getPosts() {
  const res = await fetch('https://api.example.com/posts');
  if (!res.ok) throw new Error('Failed to fetch posts');
  return res.json();
}`,
      },
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=2070',
    publishedAt: '2024-03-10T10:00:00Z',
    get readTime() {
      return calculateReadingTime(this.content);
    },
  },
  {
    id: 2,
    title: 'TypeScript 5.0: Gelişmiş Tip Güvenliği',
    slug: 'typescript-5-gelistirmeler',
    category: 'Frontend',
    excerpt:
      'TypeScript 5.0 ile gelen yeni özellikler ve tip sistemi geliştirmeleri.',
    content: [
      'TypeScript 5.0, JavaScript geliştiricileri için güçlü tip güvenliği ve geliştirici deneyimi sunmaya devam ediyor. Bu yazıda yeni özellikleri inceleyeceğiz.',
      'Const Type Parameters özelliği ile daha güvenli generic tipler oluşturabilirsiniz:',
      {
        type: 'code',
        language: 'typescript',
        content: `function createSet<const T extends string[]>(values: T) {
  return new Set(values);
}

// Type: Set<"a" | "b" | "c">
const set = createSet(['a', 'b', 'c']);`,
      },
      'Decorators artık daha esnek ve güçlü. İşte bir örnek:',
      {
        type: 'code',
        language: 'typescript',
        content: `function logged(target: any, context: ClassMethodDecoratorContext) {
  return function replacementMethod(this: any, ...args: any[]) {
    console.log(\`Calling \${context.name} with args:\`, args);
    return target.call(this, ...args);
  }
}

class Calculator {
  @logged
  add(a: number, b: number) {
    return a + b;
  }
}`,
      },
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=2128',
    publishedAt: '2024-03-05T15:30:00Z',
    get readTime() {
      return calculateReadingTime(this.content);
    },
  },
  {
    id: 3,
    title: 'Microservices Mimarisi: En İyi Pratikler',
    slug: 'microservices-mimarisi',
    category: 'Backend',
    excerpt:
      'Microservices mimarisinde en iyi pratikler ve yaygın hatalardan kaçınma yöntemleri.',
    content: [
      "Microservices mimarisi, büyük ölçekli uygulamaları yönetilebilir parçalara ayırmamızı sağlar. Bu yazıda, microservices mimarisinin temel prensiplerini ve best practice'lerini inceleyeceğiz.",
      'İşte basit bir microservice örneği:',
      {
        type: 'code',
        language: 'typescript',
        content: `// user-service/src/index.ts
import express from 'express';
import { validateUser } from './middleware';

const app = express();

app.post('/api/users', validateUser, async (req, res) => {
  try {
    const user = await createUser(req.body);
    await publishEvent('USER_CREATED', user);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log('User service running on port 3000');
});`,
      },
      'Event-driven mimari ile microserviceler arası iletişim:',
      {
        type: 'code',
        language: 'typescript',
        content: `// lib/events.ts
import { kafka } from './kafka';

export async function publishEvent(type: string, data: any) {
  await kafka.produce({
    topic: 'user-events',
    messages: [{
      key: type,
      value: JSON.stringify(data)
    }]
  });
}`,
      },
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072',
    publishedAt: '2024-03-01T09:00:00Z',
    get readTime() {
      return calculateReadingTime(this.content);
    },
  },
  {
    id: 4,
    title: 'Docker ve Kubernetes: Container Orchestration',
    slug: 'docker-kubernetes-rehberi',
    category: 'DevOps',
    excerpt:
      'Docker ve Kubernetes ile modern uygulama dağıtımı ve ölçeklendirme stratejileri.',
    content: [
      "Container teknolojileri, modern uygulama geliştirme ve dağıtım süreçlerinin vazgeçilmez bir parçası haline geldi. Bu yazıda Docker ve Kubernetes'in temel kavramlarını inceleyeceğiz.",
      'Örnek bir Dockerfile:',
      {
        type: 'code',
        language: 'dockerfile',
        content: `FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]`,
      },
      'Kubernetes deployment yapılandırması:',
      {
        type: 'code',
        language: 'yaml',
        content: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: web-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: web
  template:
    metadata:
      labels:
        app: web
    spec:
      containers:
      - name: web
        image: web-app:1.0.0
        ports:
        - containerPort: 3000
        resources:
          limits:
            memory: "512Mi"
            cpu: "500m"`,
      },
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&q=80&w=2071',
    publishedAt: '2024-02-25T14:00:00Z',
    get readTime() {
      return calculateReadingTime(this.content);
    },
  },
  {
    id: 5,
    title: 'Temiz Kod Yazma Sanatı',
    slug: 'temiz-kod-yazma-sanati',
    category: 'Best Practices',
    excerpt: 'Clean Code prensipleri ve yazılım geliştirmede en iyi pratikler.',
    content: [
      'Temiz kod yazmak, sürdürülebilir ve okunaklı uygulamalar geliştirmenin temelidir. Bu yazıda, clean code prensiplerini ve pratik örneklerini inceleyeceğiz.',
      'SOLID prensiplerini uygulayan bir örnek:',
      {
        type: 'code',
        language: 'typescript',
        content: `// Kötü örnek
class UserService {
  async createUser(userData: any) {
    // Validation
    if (!userData.email || !userData.password) {
      throw new Error('Invalid user data');
    }
    
    // Database operation
    const user = await db.users.create(userData);
    
    // Send email
    await sendWelcomeEmail(user.email);
    
    return user;
  }
}

// İyi örnek
interface UserValidator {
  validate(userData: UserDTO): boolean;
}

interface UserRepository {
  create(userData: UserDTO): Promise<User>;
}

interface EmailService {
  sendWelcomeEmail(email: string): Promise<void>;
}

class UserService {
  constructor(
    private validator: UserValidator,
    private repository: UserRepository,
    private emailService: EmailService
  ) {}

  async createUser(userData: UserDTO): Promise<User> {
    if (!this.validator.validate(userData)) {
      throw new Error('Invalid user data');
    }
    
    const user = await this.repository.create(userData);
    await this.emailService.sendWelcomeEmail(user.email);
    
    return user;
  }
}`,
      },
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2070',
    publishedAt: '2024-02-20T11:00:00Z',
    get readTime() {
      return calculateReadingTime(this.content);
    },
  },
  {
    id: 6,
    title: 'GraphQL ve Modern API Tasarımı',
    slug: 'graphql-modern-api',
    category: 'Backend',
    excerpt: "GraphQL ile esnek ve verimli API'ler nasıl tasarlanır?",
    content: [
      "GraphQL, modern API tasarımında devrim yaratan bir sorgu dili ve runtime'dır. REST API'lerin yaşadığı over-fetching ve under-fetching problemlerine elegant bir çözüm sunar.",
      'Temel bir GraphQL schema tanımı:',
      {
        type: 'code',
        language: 'graphql',
        content: `type User {
  id: ID!
  name: String!
  email: String!
  posts: [Post!]!
}

type Post {
  id: ID!
  title: String!
  content: String!
  author: User!
  comments: [Comment!]!
}

type Comment {
  id: ID!
  content: String!
  author: User!
}

type Query {
  user(id: ID!): User
  posts: [Post!]!
}

type Mutation {
  createPost(title: String!, content: String!): Post!
  addComment(postId: ID!, content: String!): Comment!
}`,
      },
      'TypeScript ile resolver implementasyonu:',
      {
        type: 'code',
        language: 'typescript',
        content: `const resolvers = {
  Query: {
    user: async (_, { id }, context) => {
      return await context.prisma.user.findUnique({
        where: { id },
        include: { posts: true }
      });
    },
    posts: async (_, __, context) => {
      return await context.prisma.post.findMany({
        include: { author: true, comments: true }
      });
    }
  },
  
  Mutation: {
    createPost: async (_, { title, content }, context) => {
      const userId = context.getCurrentUserId();
      return await context.prisma.post.create({
        data: {
          title,
          content,
          authorId: userId
        }
      });
    }
  }
};`,
      },
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=2034',
    publishedAt: '2024-02-15T08:30:00Z',
    get readTime() {
      return calculateReadingTime(this.content);
    },
  },
];
