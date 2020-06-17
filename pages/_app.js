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
							<Flex justify="center">
								<Box w={{ _: 'full', md: 'containers.md', lg: 'containers.md' }} p={4}>
									<Component {...pageProps} />
								</Box>
							</Flex>
						</Box>
					</Flex>
				</Flex>
			</ColorModeProvider>
		</ThemeProvider>
	);
}
