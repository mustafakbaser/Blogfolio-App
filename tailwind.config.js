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
        'glitch-1': {
          '0%': { 
            clipPath: 'inset(40% 0 61% 0)',
            transform: 'translate(-2px, 2px)'
          },
          '20%': { 
            clipPath: 'inset(92% 0 1% 0)',
            transform: 'translate(1px, -1px)'
          },
          '40%': { 
            clipPath: 'inset(43% 0 1% 0)',
            transform: 'translate(-1px, 1px)'
          },
          '60%': { 
            clipPath: 'inset(25% 0 58% 0)',
            transform: 'translate(2px, -2px)'
          },
          '80%': { 
            clipPath: 'inset(54% 0 7% 0)',
            transform: 'translate(-2px, 2px)'
          },
          '100%': { 
            clipPath: 'inset(58% 0 43% 0)',
            transform: 'translate(2px, -2px)'
          }
        },
        'glitch-2': {
          '0%': { 
            clipPath: 'inset(25% 0 58% 0)',
            transform: 'translate(2px, -2px)'
          },
          '20%': { 
            clipPath: 'inset(54% 0 7% 0)',
            transform: 'translate(-2px, 2px)'
          },
          '40%': { 
            clipPath: 'inset(58% 0 43% 0)',
            transform: 'translate(2px, -2px)'
          },
          '60%': { 
            clipPath: 'inset(40% 0 61% 0)',
            transform: 'translate(-2px, 2px)'
          },
          '80%': { 
            clipPath: 'inset(92% 0 1% 0)',
            transform: 'translate(1px, -1px)'
          },
          '100%': { 
            clipPath: 'inset(43% 0 1% 0)',
            transform: 'translate(-1px, 1px)'
          }
        }
      },
      animation: {
        'fade-in-out': 'fade-in-out 2s ease-in-out',
        'glitch-1': 'glitch-1 0.9s infinite linear alternate-reverse',
        'glitch-2': 'glitch-2 0.9s infinite linear alternate-reverse'
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
            color: '#f3f4f6', // gray-100
            '[class~="lead"]': {
              color: '#f3f4f6',
            },
            a: {
              color: '#93c5fd',
            },
            strong: {
              color: '#f9fafb',
            },
            'ol > li::before': {
              color: '#e5e7eb',
            },
            'ul > li::before': {
              backgroundColor: '#9ca3af',
            },
            hr: {
              borderColor: '#374151',
            },
            blockquote: {
              color: '#f3f4f6',
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
              color: '#e5e7eb',
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
              color: '#f3f4f6', // Daha parlak bir gri
            },
            li: {
              color: '#f3f4f6', // Daha parlak bir gri
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