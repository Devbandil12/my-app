/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		animation: {
			twinkle: 'twinkle 1.5s ease-in-out infinite',
		  },
		  keyframes: {
			twinkle: {
			  '0%, 100%': { opacity: '0.4' },
			  '50%': { opacity: '1' },
			},
		  },
		
		keyframes: {
			wave: {
			  '0%': { backgroundPosition: '0% 0%' },
			  '100%': { backgroundPosition: '100% 0%' },
			},
			slide: {
			  '0%': { width: '0%' },
			  '100%': { width: '100%' },
			},
		  },
		  animation: {
			wave: 'wave 2s linear infinite',
			slide: 'slide 0.3s ease-in-out',
		  },
		gradientColorStops: {
            'black-1': '#0a0a0a', // Deep Black
            'black-2': '#1c1c1e', // Dark Gray
            'black-3': '#2e2e30', // Charcoal
          },
		boxShadow: {
			'tiny-green-glow': '0 0 2px 1px rgba(34, 197, 94, 0.8), 0 0 4px 2px rgba(34, 197, 94, 0.6), 0 0 6px 3px rgba(34, 197, 94, 0.4)',
		  },
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
		
  	}
  },
  plugins: [require("tailwindcss-animate"),
    function ({ addUtilities }) {
      addUtilities({
        '.underline-slide': {
          position: 'relative',
          display: 'inline-block',
          '&::after': {
            content: '""',
            position: 'absolute',
            left: '0',
            bottom: '0',
            width: '0',
            height: '2px',
            backgroundColor: 'currentColor',
            transition: 'width 0.3s ease-in-out',
          },
          '&:hover::after': {
            width: '100%',
          },
        },
        '.underline-wave': {
          position: 'relative',
          display: 'inline-block',
          '&::after': {
            content: '""',
            position: 'absolute',
            left: '0',
            bottom: '0',
            width: '100%',
            height: '2px',
            background: 'linear-gradient(90deg, #34d399, #60a5fa, #a78bfa)',
            backgroundSize: '200%',
            animation: 'wave 2s linear infinite',
          },
        },
      });
    },
  ],
};
