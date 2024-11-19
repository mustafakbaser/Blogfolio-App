import React, { useState } from 'react';
import { Facebook, Twitter, Linkedin, Link2, Check } from 'lucide-react';

interface SocialShareProps {
  url: string;
  title: string;
  description: string;
}

export default function SocialShare({ url, title, description }: SocialShareProps) {
  const [showToast, setShowToast] = useState(false);
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    } catch (err) {
      console.error('Link kopyalanamadı:', err);
    }
  };

  return (
    <div className="border-t border-b border-gray-100 dark:border-gray-800 py-6 my-8">
      <div className="flex flex-col items-center gap-4">
        <h3 className="text-gray-900 dark:text-gray-100 font-medium">Bu yazıyı paylaş</h3>
        <div className="flex items-center gap-3">
          <a
            href={shareLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors"
            title="Facebook'ta paylaş"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href={shareLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-sky-500 text-white hover:bg-sky-600 transition-colors"
            title="Twitter'da paylaş"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href={shareLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-blue-700 text-white hover:bg-blue-800 transition-colors"
            title="LinkedIn'de paylaş"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <button
            onClick={copyToClipboard}
            className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors relative"
            title="Linki kopyala"
          >
            <Link2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Toast Notification */}
      <div
        className={`fixed bottom-4 left-1/2 -translate-x-1/2 transform transition-all duration-300 ${
          showToast ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'
        }`}
      >
        <div className="bg-gray-900 dark:bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
          <Check className="w-4 h-4 text-emerald-400" />
          <span className="text-sm">Link kopyalandı!</span>
        </div>
      </div>
    </div>
  );
}