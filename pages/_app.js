import {
	ThemeProvider,
	ChakraProvider,
	CSSReset,
	ColorModeProvider,
	Text,
	Flex,
	Stack,
	Heading,
	Box,
	ColorModeScript,
} from '@chakra-ui/react';
import Head from 'next/head';
import Link from 'next/link';
import { useCallback } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import 'video.js/dist/video-js.min.css';
import 'videojs-wavesurfer/dist/css/videojs.wavesurfer.css';
import '../styles/videojs-theme-rota.css';

import { customTheme } from '../styles/theme';
import Header from '../components/Header';
import Menu from '../components/Menu';

import '../styles/global.css';

export default function ThemedHome({ Component, pageProps }) {
	return (
		<ChakraProvider theme={customTheme}>
			<Head>
				<title>Rota.chat UI</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<ColorModeScript initialColorMode="light" />
			<Flex flexDirection="column" height="100vh">
				<Header />
				<Flex flex="1" overflow="auto">
					<Menu />
					<Box flex="1" height="100%" overflow="auto">
						<Flex justify="center" height="100%">
							<Component {...pageProps} />
						</Flex>
					</Box>
				</Flex>
			</Flex>
		</ChakraProvider>
	);
}
