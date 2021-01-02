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
		//...theme.colors,
		white: '#FCFCFC',
		black: '#333333',
		dark: '#444140',
		dark2: '#052f5f',
		primary: {
			'300': '#FC9F5B',
			'500': '#ED640B',
		},
		secondary: {
			'300': '#FBD1A2',
			'500': '#FFC15E',
		},
		neutral: {
			'1': '#ECE4B7',
			'2': '#EBEBD3',
			'3': '#FFEAD0',
		},
		outline: {
			'300': '#B86428',
			'500': '#5B3214',
			'700': '#43240F',
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
		//...theme.sizes,
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
