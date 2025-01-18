/** @type {import('tailwindcss').Config} */
export default {
	content: [
	  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
	  "./components/**/*.{js,ts,jsx,tsx,mdx}",
	  "./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
	  extend: {
		maxWidth: {
		  'custom-xl': '1450px',
		},
		colors: {
		  primary: '#00BBAE',
		  light: '#F7F7F7',
		  grey: '#919191',
		  red: '#ED3237',
		  activecolor: '#0075cee9',
		  secondary: '#22577A',
		  accent: '#38A3A5',
		  success: '#57CC99',
		  softgreen: '#80ED99',
		  lightgreen: '#C7F9CC',
		  
		  // Added culturally significant colors
		  golden: '#FFD700', // Golden color for temple-like accents
		  maroon: '#800000', // Rich maroon for traditional elements
		  orange: '#FF7F00', // Bright orange for festival elements
		  earth: '#6F4F1A', // Earthy brown for background or footer
		  templeRed: '#D32F2F', // Traditional temple red for vibrant accents
		},
		boxShadow: {
		  'custom-light': 'rgba(149, 157, 165, 0.1) 0px 8px 10px', // Custom light shadow as requested
		  'custom-medium': '0 4px 15px rgba(0, 0, 0, 0.2)', // Medium shadow for moderate elevation
		  'custom-dark': '0 6px 20px rgba(0, 0, 0, 0.3)', // Stronger shadow for high elevation
		  'custom-glow': '0 0 15px rgba(0, 186, 174, 0.5)', // Glowing effect with primary color
		},
	  },
	},
	plugins: [],
  };
  