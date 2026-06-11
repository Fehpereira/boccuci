import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'boc-orange': '#F4511E',
        'boc-orange-hover': '#FF6333',
        'boc-orange-muted': '#C83A14',
        'boc-black': '#101010',
        'boc-black-soft': '#151515',
        'boc-charcoal': '#242424',
        'boc-graphite': '#3F3F3F',
        'boc-gray-dark': '#666666',
        'boc-gray': '#9A9A9A',
        'boc-gray-light': '#CFCFCF',
        'boc-silver': '#E8E8E8',
        'boc-white': '#F5F5F5',
        'boc-card-dark': '#1C1C1C',
        'boc-card-light': '#E2E2E2',
      },
      fontFamily: {
        display: ['Orbitron', 'Rajdhani', 'Eurostile', 'sans-serif'],
        heading: ['Rajdhani', 'Orbitron', 'sans-serif'],
        body: ['Inter', 'Sora', 'Arial', 'sans-serif'],
        technical: ['Orbitron', 'monospace'],
      },
      letterSpacing: {
        'boc-tight': '-0.02em',
        'boc-wide': '0.08em',
        'boc-wider': '0.14em',
        'boc-ultra': '0.28em',
      },
      borderRadius: {
        'boc-sm': '2px',
        'boc-md': '6px',
        'boc-lg': '10px',
        'boc-xl': '16px',
      },
      boxShadow: {
        'boc-soft': '0 20px 60px rgba(0, 0, 0, 0.28)',
        'boc-strong': '0 28px 90px rgba(0, 0, 0, 0.45)',
        'boc-orange-glow': '0 0 32px rgba(244, 81, 30, 0.38)',
        'boc-inset': 'inset 0 1px 0 rgba(255, 255, 255, 0.08)',
      },
      backgroundImage: {
        'boc-hero': 'linear-gradient(135deg, #101010 0%, #1A1A1A 45%, #2A2A2A 100%)',
        'boc-orange-accent': 'linear-gradient(135deg, #F4511E 0%, #FF6A2A 100%)',
        'boc-metal': 'linear-gradient(135deg, #F5F5F5 0%, #CFCFCF 50%, #AFAFAF 100%)',
        'boc-card-dark': 'linear-gradient(145deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)',
        'boc-dark-to-transparent': 'linear-gradient(90deg, rgba(16,16,16,0.96) 0%, rgba(16,16,16,0.58) 55%, rgba(16,16,16,0.12) 100%)',
      },
    },
  },
  plugins: [],
} satisfies Config