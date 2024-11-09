import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

export default function AuthorCard() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 my-12">
      <div className="flex items-start gap-6">
        <img
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200&h=200"
          alt="Yazar"
          className="w-24 h-24 rounded-lg object-cover"
        />
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Yazar Adı</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Yazılım Mühendisi. Okumaktan, yazmaktan; öğrendiğini paylaşmaktan büyük keyif duyar. 
            Yazılım geliştirme dışında; tarih, sanat ve insan psikolojisine dair okuma yapmak 
            en rafine tutkularından.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}