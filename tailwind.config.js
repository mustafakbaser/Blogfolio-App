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
            color: '#9ca3af',
            '[class~="lead"]': {
              color: '#9ca3af',
            },
            a: {
              color: '#60a5fa',
            },
            strong: {
              color: '#f3f4f6',
            },
            'ol > li::before': {
              color: '#9ca3af',
            },
            'ul > li::before': {
              backgroundColor: '#4b5563',
            },
            hr: {
              borderColor: '#374151',
            },
            blockquote: {
              color: '#9ca3af',
              borderLeftColor: '#4b5563',
            },
            h1: {
              color: '#f3f4f6',
            },
            h2: {
              color: '#f3f4f6',
            },
            h3: {
              color: '#f3f4f6',
            },
            h4: {
              color: '#f3f4f6',
            },
            'figure figcaption': {
              color: '#9ca3af',
            },
            code: {
              color: '#f3f4f6',
            },
            'a code': {
              color: '#60a5fa',
            },
            pre: {
              color: '#e5e7eb',
              backgroundColor: '#1f2937',
            },
            thead: {
              color: '#f3f4f6',
              borderBottomColor: '#4b5563',
            },
            'tbody tr': {
              borderBottomColor: '#374151',
            },
          },
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};