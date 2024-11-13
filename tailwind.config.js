/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
      },
      keyframes: {
        'fade-in-out': {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '5%': { opacity: '1', transform: 'translateY(0)' },
          '95%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'fade-in-out': 'fade-in-out 2s ease-in-out',
      },
      typography: {
        DEFAULT: {
          css: {
            'code::before': {
              content: '""'
            },
            'code::after': {
              content: '""'
            },
            'pre code': {
              fontFamily: 'JetBrains Mono, monospace',
            }
          }
        },
        dark: {
          css: {
            color: '#e5e7eb',
            '[class~="lead"]': {
              color: '#e5e7eb',
            },
            a: {
              color: '#93c5fd',
            },
            strong: {
              color: '#f9fafb',
            },
            'ol > li::before': {
              color: '#d1d5db',
            },
            'ul > li::before': {
              backgroundColor: '#6b7280',
            },
            hr: {
              borderColor: '#374151',
            },
            blockquote: {
              color: '#e5e7eb',
              borderLeftColor: '#4b5563',
            },
            h1: {
              color: '#f9fafb',
            },
            h2: {
              color: '#f9fafb',
            },
            h3: {
              color: '#f9fafb',
            },
            h4: {
              color: '#f9fafb',
            },
            'figure figcaption': {
              color: '#d1d5db',
            },
            code: {
              color: '#f9fafb',
            },
            'a code': {
              color: '#93c5fd',
            },
            pre: {
              color: '#f3f4f6',
              backgroundColor: '#1f2937',
            },
            thead: {
              color: '#f9fafb',
              borderBottomColor: '#4b5563',
            },
            'tbody tr': {
              borderBottomColor: '#374151',
            },
            p: {
              color: '#e5e7eb',
            },
            li: {
              color: '#e5e7eb',
            }
          },
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};