import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        sans: 'var(--font-outfit), sans-serif',
        display: 'var(--font-sabana-black)',
      },
      backgroundImage: {
        'hero-image-no-shadows': "url('/images/hero-image.jpg')",
        'hero-image-with-shadows': "url('/images/hero-image.png')",
      },
    },
  },
  plugins: [],
};
export default config;
