import React, { useState } from 'react';
import { Check, Copy, FileCode, FileJson, FileType, FileText } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language: string;
}

export default function CodeBlock({ code, language }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getLanguageIcon = () => {
    switch (language.toLowerCase()) {
      case 'typescript':
      case 'tsx':
        return <FileType className="w-4 h-4" />;
      case 'javascript':
      case 'jsx':
        return <FileCode className="w-4 h-4" />;
      case 'json':
        return <FileJson className="w-4 h-4" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };

  return (
    <div className="relative group my-8">
      <div className="bg-[#1a1b26] rounded-xl overflow-hidden shadow-lg ring-1 ring-white/10">
        <div className="px-4 py-3 bg-[#1f2937] border-b border-gray-700/50 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-gray-400">{getLanguageIcon()}</span>
            <span className="text-sm font-medium text-gray-300 capitalize">
              {language.toLowerCase()}
            </span>
          </div>
          <button
            onClick={copyToClipboard}
            className="p-1.5 rounded-md bg-gray-800/50 text-gray-400 hover:text-gray-300 transition-colors"
            title={copied ? 'Copied!' : 'Copy code'}
          >
            {copied ? (
              <Check className="w-4 h-4 text-emerald-400" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>
        </div>
        <div className="relative">
          <pre className="p-4 overflow-x-auto">
            <code className="font-mono text-sm leading-relaxed text-gray-300">
              {code.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  <span className="select-none inline-block w-8 mr-4 text-gray-600 text-right">
                    {i + 1}
                  </span>
                  {line}
                  {i < code.split('\n').length - 1 && '\n'}
                </React.Fragment>
              ))}
            </code>
          </pre>
          {copied && (
            <div className="absolute top-2 right-2 px-3 py-1.5 bg-emerald-500/10 text-emerald-400 text-sm rounded-md border border-emerald-500/20 animate-fade-in-out">
              Copied!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}