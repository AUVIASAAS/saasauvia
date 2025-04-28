/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'hsl(221, 100%, 96%)',
          100: 'hsl(221, 94%, 93%)',
          200: 'hsl(221, 92%, 86%)',
          300: 'hsl(221, 90%, 76%)',
          400: 'hsl(221, 86%, 65%)',
          500: 'hsl(221, 83%, 53%)',
          600: 'hsl(221, 90%, 48%)',
          700: 'hsl(221, 92%, 42%)',
          800: 'hsl(221, 87%, 35%)',
          900: 'hsl(221, 79%, 29%)',
          950: 'hsl(224, 76%, 20%)',
        },
        secondary: {
          50: 'hsl(174, 100%, 95%)',
          100: 'hsl(174, 94%, 87%)',
          200: 'hsl(174, 94%, 75%)',
          300: 'hsl(174, 92%, 60%)',
          400: 'hsl(174, 89%, 44%)',
          500: 'hsl(174, 84%, 38%)',
          600: 'hsl(174, 84%, 32%)',
          700: 'hsl(174, 84%, 25%)',
          800: 'hsl(174, 84%, 21%)',
          900: 'hsl(174, 84%, 18%)',
          950: 'hsl(175, 96%, 11%)',
        },
      },
      boxShadow: {
        'soft-lg': '0 10px 25px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.025)',
        'soft-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-in-out',
        'slide-down': 'slideDown 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};