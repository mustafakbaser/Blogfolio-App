import React from 'react';
import { Facebook, Twitter, Linkedin, Link2 } from 'lucide-react';

interface SocialShareProps {
  url: string;
  title: string;
  description: string;
}

export default function SocialShare({ url, title, description }: SocialShareProps) {
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
      alert('Link kopyalandı!');
    } catch (err) {
      console.error('Link kopyalanamadı:', err);
    }
  };

  return (
    <div className="border-t border-b border-gray-100 py-6 my-8">
      <div className="flex flex-col items-center gap-4">
        <h3 className="text-gray-900 font-medium">Bu yazıyı paylaş</h3>
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
            className="p-3 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
            title="Linki kopyala"
          >
            <Link2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}