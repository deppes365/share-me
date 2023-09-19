/** @type {import('tailwindcss').Config} */

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		
		extend: {
      colors: {
        'indianRed': '#B4656F',
        'cerulean': '#0C7489',
        'icterine': '#F0F465',
        'aquamarine': '#00F5D4',
        'tomato': '#F15946',
      }
    },
	},
	plugins: [],
};
