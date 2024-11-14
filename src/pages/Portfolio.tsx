import React from 'react';
import { Github, ExternalLink, Code2, Cpu, Globe, Layout } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "Modern bir e-ticaret platformu. React, Node.js ve MongoDB kullanılarak geliştirildi. Gerçek zamanlı stok takibi, gelişmiş arama ve filtreleme özellikleri içeriyor.",
    tags: ["React", "Node.js", "MongoDB", "Redux", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=2089",
    githubUrl: "https://github.com/username/ecommerce",
    liveUrl: "https://ecommerce-demo.com"
  },
  {
    title: "Task Management System",
    description: "Ekipler için geliştirilmiş proje ve görev yönetim sistemi. Gerçek zamanlı işbirliği, dosya paylaşımı ve otomatik raporlama özellikleri mevcut.",
    tags: ["TypeScript", "Next.js", "PostgreSQL", "WebSocket"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2070",
    githubUrl: "https://github.com/username/task-manager",
    liveUrl: "https://task-manager-demo.com"
  },
  {
    title: "AI-Powered Analytics Dashboard",
    description: "Yapay zeka destekli veri analiz platformu. Kullanıcı davranışlarını analiz ederek öngörülerde bulunuyor ve otomatik raporlar oluşturuyor.",
    tags: ["Python", "React", "TensorFlow", "D3.js"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070",
    githubUrl: "https://github.com/username/analytics"
  }
];

const technologies = [
  { name: 'Frontend', icon: Layout, items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
  { name: 'Backend', icon: Code2, items: ['Node.js', 'Express', 'NestJS', 'PostgreSQL'] },
  { name: 'DevOps', icon: Cpu, items: ['Docker', 'Kubernetes', 'AWS', 'CI/CD'] },
  { name: 'Other', icon: Globe, items: ['Git', 'REST APIs', 'GraphQL', 'Microservices'] }
];

export default function Portfolio() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Portfolyo"
        description="Geliştirdiğim projeler ve teknik yeteneklerim"
      />
      <Header />
      
      <main className="flex-grow pt-28 md:pt-32 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 mb-6">
              Projelerim
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Modern teknolojiler kullanarak geliştirdiğim projeler ve çalışmalar
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700/50"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-3 py-1 text-sm font-medium bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                        title="GitHub Repository"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Technologies Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 text-center mb-12">
              Teknoloji Yığını
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {technologies.map((tech, index) => (
                <div 
                  key={index}
                  className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] border border-gray-100 dark:border-gray-700/50"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg">
                      <tech.icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      {tech.name}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {tech.items.map((item, itemIndex) => (
                      <span 
                        key={itemIndex}
                        className="px-3 py-1 text-sm bg-gray-50 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center p-1 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600">
              <a 
                href="mailto:contact@example.com"
                className="px-8 py-3 bg-white dark:bg-gray-900 rounded-full text-lg font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                Birlikte Çalışalım
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}