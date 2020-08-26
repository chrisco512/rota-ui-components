import {
	ThemeProvider,
	CSSReset,
	ColorModeProvider,
	Box,
	Text,
	Flex,
	Stack,
	Heading,
	PseudoBox,
} from '@chakra-ui/core';
import Head from 'next/head';
import Link from 'next/link';

import 'video.js/dist/video-js.min.css';
import 'videojs-wavesurfer/dist/css/videojs.wavesurfer.css';

import { customTheme } from '../styles/theme';
import Header from '../components/Header';
import Menu from '../components/Menu';

import '../styles/global.css';

export default function ThemedHome({ Component, pageProps }) {
	return (
		<ThemeProvider theme={customTheme}>
			<ColorModeProvider>
				<CSSReset />

				<Head>
					<title>Rota.chat UI</title>
					<link rel="icon" href="/favicon.ico" />
				</Head>

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
			</ColorModeProvider>
		</ThemeProvider>
	);
}
