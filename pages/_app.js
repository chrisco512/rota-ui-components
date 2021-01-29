import { ChakraProvider, Flex, Box, ColorModeScript } from '@chakra-ui/react';
import Head from 'next/head';

import 'video.js/dist/video-js.min.css';
import 'videojs-wavesurfer/dist/css/videojs.wavesurfer.css';
import '../styles/videojs-theme-rota.css';

import { customTheme } from '../styles/theme';
import Header from '../components/Header';
import Menu from '../components/Menu';
import { MenuProvider, useMenu } from '../lib';

import '../styles/global.css';

function MenuContainer() {
	const { showMenu } = useMenu();

	return showMenu ? <Menu /> : null;
}

export default function ThemedHome({ Component, pageProps }) {
	return (
		<ChakraProvider theme={customTheme}>
			<MenuProvider>
				<Head>
					<title>Rota.chat UI</title>
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<ColorModeScript initialColorMode="light" />
				<Flex flexDirection="column" className="app-container">
					<Header />
					<Flex flex="1" overflow="auto">
						<MenuContainer />
						<Box flex="1" height="100%" overflow="auto">
							<Flex justify="center" height="100%">
								<Component {...pageProps} />
							</Flex>
						</Box>
					</Flex>
				</Flex>
			</MenuProvider>
		</ChakraProvider>
	);
}
