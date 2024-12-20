import React from 'react';
import { Github, Twitter, Linkedin, Mail, Terminal, Code2, Cpu, Globe, Database, Layout } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const skills = [
  { name: 'Frontend Development', icon: Layout, level: 85 },
  { name: 'Backend Development', icon: Database, level: 95 },
  { name: 'System Architecture', icon: Cpu, level: 80 },
  { name: 'Web Technologies', icon: Globe, level: 95 },
  { name: 'Clean Code', icon: Code2, level: 88 },
  { name: 'DevOps', icon: Terminal, level: 75 },
];

const experiences = [
  {
    title: 'Senior Software Engineer',
    company: 'Tech Company',
    period: '2020 - Present',
    description: 'Developing modern web applications, designing microservice architectures, and providing technical leadership',
  },
  {
    title: 'Full Stack Developer',
    company: 'Digital Agency',
    period: '2018 - 2020',
    description: 'Building enterprise web projects, e-commerce systems, and mobile applications.',
  },
  {
    title: 'Frontend Developer',
    company: 'Startup',
    period: '2016 - 2018',
    description: 'Creating user experience-focused interfaces with modern frontend technologies.',
  },
];

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Hakkımda"
        description="Yazılım geliştirici olarak deneyimlerim, yeteneklerim ve tutkularım."
      />
      <Header />
      
      <main className="flex-grow bg-gray-50 dark:bg-gray-900 pt-28 md:pt-32">
        <div className="max-w-5xl mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="relative inline-block mb-8">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200&h=200"
                alt="Profile"
                className="w-40 h-40 rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-lg"
              />
              <div className="absolute -bottom-2 -right-2 bg-indigo-600 text-white p-2 rounded-full shadow-lg">
                <Code2 className="w-5 h-5" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-50 mb-4">Mustafa Kürşad Başer</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            As a passionate software developer, I enjoy creating solutions focused on modern web technologies and user experience.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="p-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="p-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="p-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:iletisim@mustafabaser.net" className="p-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Skills Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-8 text-center">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <skill.icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mr-3" />
                    <h3 className="font-semibold text-gray-900 dark:text-gray-50">{skill.name}</h3>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div 
                      className="bg-gradient-to-r from-indigo-600 to-indigo-400 dark:from-indigo-500 dark:to-indigo-300 h-2.5 rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-8 text-center">Experiences</h2>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-wrap items-start justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">{exp.title}</h3>
                      <p className="text-indigo-600 dark:text-indigo-400">{exp.company}</p>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Section */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-50 mb-8 text-center">Technology Stack</h2>
            <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-sm">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  'React', 'TypeScript', 'Node.js', 'Next.js',
                  'GraphQL', 'Docker', 'AWS', 'MongoDB'
                ].map((tech, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-center p-4 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    <span className="font-medium text-gray-900 dark:text-gray-50">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}