import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

export const breakpoints = [ '544px', '768px', '1012px', '1280px' ];

const customBreakpoints = createBreakpoints({
	sm: breakpoints[0],
	md: breakpoints[1],
	lg: breakpoints[2],
	xl: breakpoints[3],
});

const overrides = {
	breakpoints,
	fonts: {
		heading: '"Avenir Next", sans-serif',
		body: 'system-ui, sans-serif',
		mono: 'Menlo, monospace',
		slab: 'NexaSlab-Bold',
		book: 'NexaText-Book',
		slabBlack: 'NexaSlabBlack',
		bold: 'Nexa-Bold',
		rust: 'NexaRustSans-Black',
	},
	fontSizes: [
		'0.75rem',
		'0.875rem',
		'1rem',
		'1.125rem',
		'1.25rem',
		'1.5rem',
		'1.875rem',
		'2.25rem',
		'3rem',
		'4rem',
	],
	colors: {
		white: '#FCFCFC',
		black: '#333333',
		dark: '#444140',
		dark2: '#052f5f',
		primary: {
			'50': '#FCDBC5',
			'100': '#FAC39E',
			'200': '#F9AB77',
			'300': '#F79250',
			'400': '#F57A29',
			'500': '#ED640B',
			'600': '#C35309',
			'700': '#9C4307',
			'800': '#753206',
			'900': '#4E2104',
		},
		secondary: {
			'50': '#FFF7EB',
			'100': '#FFE8C2',
			'200': '#FFE0AD',
			'300': '#FFD899',
			'400': '#FFD085',
			'500': '#FFC15E',
			'600': '#FFA91F',
			'700': '#CC7E00',
			'800': '#784B00',
			'900': '#3D2600',
		},
		neutral: {
			'1': '#ECE4B7',
			'2': '#EBEBD3',
			'3': '#FFEAD0',
		},
		outline: {
			'50': '#EDC7AB',
			'100': '#DE9968',
			'200': '#D78347',
			'300': '#B86428',
			'400': '#975221',
			'500': '#5B3214',
			'600': '#542E12',
			'700': '#43240F',
			'800': '#211207',
			'900': '#110904',
		},
		green: {
			'500': '#D8F793',
			'700': '#A0CA92',
			'900': '#737335',
		},
		blue: {
			'300': '#A8DCD1',
			'500': '#65DEF1',
		},
	},
	sizes: {
		containers: {
			sm: '544px',
			md: '768px',
			lg: '1012px',
			xl: '1280px',
		},
	},
};

export const customTheme = extendTheme(overrides);

export const bgColor = { light: 'white', dark: 'dark' };
export const textColor = { light: 'outline.500', dark: 'white' };
