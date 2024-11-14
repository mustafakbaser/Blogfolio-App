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
    {
      id: 7,
      title: 'REST API Tasarım İlkeleri',
      slug: 'rest-api-tasarim-ilkeleri',
      category: 'Backend',
      excerpt: 'RESTful API tasarımında en iyi uygulamaları öğrenin.',
      content: [
        "REST, API tasarımında yaygın olarak kullanılan bir mimari stildir. Kaynak temelli yapısı ile veri paylaşımı ve sistemler arası etkileşimi kolaylaştırır.",
        'Örnek bir RESTful kaynak yapısı:',
        {
          type: 'code',
          language: 'javascript',
          content: `GET /users/{id}
  PUT /users/{id}
  DELETE /users/{id}
  POST /users`
        },
        'Express ile basit bir REST API oluşturma:',
        {
          type: 'code',
          language: 'javascript',
          content: `const express = require('express');
  const app = express();
  app.use(express.json());
  
  app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id === req.params.id);
    res.send(user);
  });`
        }
      ],
      imageUrl: 'https://dummyimage.com/600x400/000/fff&text=REST+API+Tasarım+İlkeleri',
      publishedAt: '2024-03-10T10:00:00Z',
      get readTime() {
        return calculateReadingTime(this.content);
      }
    },
  
    {
      id: 8,
      title: 'JavaScript ile Fonksiyonel Programlama',
      slug: 'javascript-fonksiyonel-programlama',
      category: 'Frontend',
      excerpt: 'Fonksiyonel programlama prensiplerini JavaScript ile uygulayın.',
      content: [
        "Fonksiyonel programlama, yan etkisiz fonksiyonlar ve değiştirilemez verilerle yazılım geliştirmeye odaklanır.",
        'Kapsamlı bir örnek:',
        {
          type: 'code',
          language: 'javascript',
          content: `const add = (a) => (b) => a + b;
  const increment = add(1);
  console.log(increment(2)); // 3`
        }
      ],
      imageUrl: 'https://dummyimage.com/600x400/000/fff&text=Fonksiyonel+Programlama',
      publishedAt: '2024-03-15T09:30:00Z',
      get readTime() {
        return calculateReadingTime(this.content);
      }
    },
  
    {
      id: 9,
      title: 'TypeScript ile Güçlü Tip Kontrolü',
      slug: 'typescript-guclu-tip-kontrolu',
      category: 'Backend',
      excerpt: 'TypeScript ile güçlü ve güvenli kod nasıl yazılır?',
      content: [
        "TypeScript, JavaScript'in tür güvenliği sağlamayan yapısına çözüm sunarak daha güvenli bir kod yazımını mümkün kılar.",
        'TypeScript ile basit bir fonksiyon tanımı:',
        {
          type: 'code',
          language: 'typescript',
          content: `function add(a: number, b: number): number {
    return a + b;
  }`
        }
      ],
      imageUrl: 'https://dummyimage.com/600x400/000/fff&text=TypeScript+Tip+Kontrolü',
      publishedAt: '2024-03-20T11:15:00Z',
      get readTime() {
        return calculateReadingTime(this.content);
      }
    },
  
    {
      id: 10,
      title: 'Kapsülleme ve Nesne Tabanlı Programlama',
      slug: 'kapsulleme-ntp',
      category: 'Backend',
      excerpt: 'Nesne tabanlı programlamada kapsülleme prensipleri.',
      content: [
        "Kapsülleme, verileri ve işlevleri bir arada tutarak dış erişimi sınırlar ve veri gizliliğini sağlar.",
        'Kapsülleme örneği:',
        {
          type: 'code',
          language: 'javascript',
          content: `class Person {
    #name;
    
    constructor(name) {
      this.#name = name;
    }
    
    getName() {
      return this.#name;
    }
  }`
        }
      ],
      imageUrl: 'https://dummyimage.com/600x400/000/fff&text=Kapsülleme',
      publishedAt: '2024-04-01T14:00:00Z',
      get readTime() {
        return calculateReadingTime(this.content);
      }
    },
  
    {
      id: 11,
      title: 'MongoDB ile NoSQL Veritabanı Tasarımı',
      slug: 'mongodb-nosql-tasarim',
      category: 'Database',
      excerpt: 'MongoDB ile esnek ve ölçeklenebilir NoSQL veritabanı nasıl tasarlanır?',
      content: [
        "MongoDB, ilişkisel olmayan yapısı ile esnek veri saklama imkanları sunar ve büyük veri setleri ile hızlı çalışır.",
        'MongoDB veri modeli örneği:',
        {
          type: 'code',
          language: 'javascript',
          content: `const userSchema = {
    name: String,
    email: String,
    posts: [{ title: String, content: String }]
  };`
        }
      ],
      imageUrl: 'https://dummyimage.com/600x400/000/fff&text=MongoDB+NoSQL+Veritabanı',
      publishedAt: '2024-04-12T09:45:00Z',
      get readTime() {
        return calculateReadingTime(this.content);
      }
    },
  
    {
      id: 12,
      title: 'Docker ile Uygulama Konteynerleştirme',
      slug: 'docker-uygulama-konteynerlestirme',
      category: 'DevOps',
      excerpt: 'Docker ile uygulamalarınızı izole bir şekilde çalıştırın.',
      content: [
        "Docker, uygulama ve bağımlılıklarını bir konteyner içinde izole bir şekilde çalıştırarak taşınabilirlik sağlar.",
        'Dockerfile örneği:',
        {
          type: 'code',
          language: 'dockerfile',
          content: `FROM node:14
  WORKDIR /app
  COPY . .
  RUN npm install
  CMD ["npm", "start"]`
        }
      ],
      imageUrl: 'https://dummyimage.com/600x400/000/fff&text=Docker+Konteynerleştirme',
      publishedAt: '2024-04-20T10:30:00Z',
      get readTime() {
        return calculateReadingTime(this.content);
      }
    },
  
    {
      id: 13,
      title: 'Kubernetes ile Mikroservis Yönetimi',
      slug: 'kubernetes-mikroservis-yonetimi',
      category: 'DevOps',
      excerpt: 'Kubernetes ile mikroservisleri ölçeklenebilir ve yönetilebilir bir şekilde çalıştırma.',
      content: [
        "Kubernetes, mikroservisleri orkestrasyon ile yönetmek için popüler bir platformdur.",
        'Basit bir deployment.yaml dosyası:',
        {
          type: 'code',
          language: 'yaml',
          content: `apiVersion: apps/v1
  kind: Deployment
  metadata:
    name: myapp
  spec:
    replicas: 2
    selector:
      matchLabels:
        app: myapp
    template:
      metadata:
        labels:
          app: myapp
      spec:
        containers:
        - name: myapp
          image: myapp:1.0.0`
        }
      ],
      imageUrl: 'https://dummyimage.com/600x400/000/fff&text=Kubernetes+Mikroservis+Yönetimi',
      publishedAt: '2024-04-25T12:10:00Z',
      get readTime() {
        return calculateReadingTime(this.content);
      }
    },
  
    {
      id: 14,
      title: 'Vue.js ile SPA Geliştirme',
      slug: 'vue-spa-gelistirme',
      category: 'Frontend',
      excerpt: 'Vue.js ile modern, dinamik tek sayfa uygulamaları nasıl geliştirilir?',
      content: [
        "Vue.js, komponent tabanlı yapısı ile dinamik ve hızlı tek sayfa uygulamaları geliştirmeyi sağlar.",
        'Vue bileşen örneği:',
        {
          type: 'code',
          language: 'javascript',
          content: `<template>
    <div>{{ message }}</div>
  </template>
  <script>
  export default {
    data() {
      return { message: 'Merhaba Vue!' };
    }
  };
  </script>`
        }
      ],
      imageUrl: 'https://dummyimage.com/600x400/000/fff&text=Vue.js+SPA+Geliştirme',
      publishedAt: '2024-05-05T11:20:00Z',
      get readTime() {
        return calculateReadingTime(this.content);
      }
    },
  
    {
      id: 15,
      title: 'Git ile Versiyon Kontrolü',
      slug: 'git-versiyon-kontrolu',
      category: 'DevOps',
      excerpt: 'Git ile sürüm kontrolünün temellerini öğrenin.',
      content: [
        "Git, yazılım geliştirme projelerinde versiyon kontrolü sağlamak için yaygın olarak kullanılan bir sistemdir.",
        'Git komut örneği:',
        {
          type: 'code',
          language: 'bash',
          content: `git init
  git add .
  git commit -m "İlk commit"
  git push origin main`
        }
      ],
      imageUrl: 'https://dummyimage.com/600x400/000/fff&text=Git+Versiyon+Kontrolü',
      publishedAt: '2024-05-10T09:50:00Z',
      get readTime() {
        return calculateReadingTime(this.content);
      }
    },
  
    {
      id: 16,
      title: 'React ile Redux Kullanımı',
      slug: 'react-redux-kullanimi',
      category: 'Frontend',
      excerpt: 'React projelerinde merkezi durum yönetimi için Redux kullanımı.',
      content: [
        "Redux, büyük React uygulamalarında durumu yönetmek için kullanılan popüler bir kütüphanedir.",
        'Redux ile basit bir store yapısı:',
        {
          type: 'code',
          language: 'javascript',
          content: `import { createStore } from 'redux';
  const reducer = (state = {}, action) => {
    switch(action.type) {
      case 'SET_VALUE':
        return { ...state, value: action.payload };
      default:
        return state;
    }
  };
  const store = createStore(reducer);`
        }
      ],
      imageUrl: 'https://dummyimage.com/600x400/000/fff&text=React+Redux+Kullanımı',
      publishedAt: '2024-05-15T14:30:00Z',
      get readTime() {
        return calculateReadingTime(this.content);
      }
    }  
];
