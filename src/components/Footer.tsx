import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">BlogFolio</h3>
            <p className="text-gray-600">
              Modern teknoloji ve yazılım geliştirme üzerine güncel içerikler.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Kategoriler</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-indigo-600">Frontend</a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-600">Backend</a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-600">DevOps</a></li>
              <li><a href="#" className="text-gray-600 hover:text-indigo-600">Mimari</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Sosyal Medya</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-indigo-600">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-indigo-600">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-indigo-600">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-gray-600">
          <p>© 2024 BlogFolio. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}