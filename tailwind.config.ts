import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'ui-sans-serif', 'system-ui']
      },
      colors: {
        picaverde: 'rgb(var(--verde) / <alpha-value>)',
        'picaverde-deep': 'rgb(var(--verde-profundo) / <alpha-value>)',
        picadorado: 'rgb(var(--dorado) / <alpha-value>)',
        picaplata: 'rgb(var(--plata) / <alpha-value>)',
        picgrape: 'rgb(var(--dusty-grape) / <alpha-value>)'
      },
      boxShadow: {
        soft: '0 6px 18px rgba(4, 83, 43, 0.12)'
      }
    }
  },
  plugins: []
}

export default config
