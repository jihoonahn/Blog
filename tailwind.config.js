/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./Sources/*/*.swift"
  ],
  theme: {
    fontFamily: {
      'sans': ['Open Sans', 'sans-serif']
    },
    extend: {
      fontSize: {
        'heading-1': '3rem',
        'heading-2': '2rem',
        'heading-3': '1.5rem',
        'heading-4': '1.25rem',
        'heading-5': '1rem',
        'heading-6': '0.75rem'
      },
      colors: {
        'blog-c-bg': '#FFFFFF',
        'blog-c-nav': 'rgba(255,255,255,0.7)',
        'blog-c-nav-text': '#1d1d1f',
        'blog-c-tag-text': '#8e8e93',
        'blog-c-time-text': '#6e6e73',
        'blog-c-card': '#FFFFFF',
        'blog-c-footer': '#1E1E1E',
        'blog-c-brand': '#5364FF',
        'blog-c-divider': 'rgba(60, 60, 60, .12)'
      },
      height: {
        'blog-nav': '55px',
      },
      lineHeight: {
        'calc-blog-nav': 'calc(55px)'
      },
      spacing: {
        'calc-blog-nav': 'calc(56px)'
      },
      borderRadius: {
        'sm': '0.125rem',
        'md': '0.375rem',
        'lg': '0.75rem',
        'xl': '1.5rem',
      },
      zindex: {
        '10': 10,
        '20': 20,
        '30': 30,
        '40': 40,
        '50': 50
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
