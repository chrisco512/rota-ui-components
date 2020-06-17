import Link from 'next/link';
import { Box, Stack, Heading, PseudoBox, useColorMode, Text } from '@chakra-ui/core';

const menuBgColor = { light: 'gray.100', dark: 'gray.900' };
const linkBgColor = { light: 'secondary.500', dark: 'dark2' };

export function MenuList() {
	const { colorMode } = useColorMode();

	return (
		<Stack>
			<Heading fontSize={1} textTransform="uppercase" letterSpacing="wide" fontFamily="slab" textAlign="center">
				Components
			</Heading>
			<Link href="/thread-clip-summary">
				<PseudoBox as="button" variant="link" lineHeight="2" _hover={{ bg: linkBgColor[colorMode] }}>
					<Text fontFamily="book">ThreadClipSummary</Text>
				</PseudoBox>
			</Link>
		</Stack>
	);
}

export default function Menu() {
	const { colorMode } = useColorMode();

	return (
		<Box w={64} h="100%" bg={menuBgColor[colorMode]} display={{ _: 'none', lg: 'block' }} overflow="auto" pt={8}>
			<MenuList />
		</Box>
	);
}
