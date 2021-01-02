import { Box, Stack, Heading, PseudoBox, useColorMode, Text } from '@chakra-ui/core';

import RotaLink from './RotaLink';

const menuBgColor = { light: 'gray.100', dark: 'gray.900' };
const linkBgColor = { light: 'secondary.500', dark: 'dark2' };

function MenuComponentItem({ href, text, ...props }) {
	const { colorMode } = useColorMode();

	return (
		<PseudoBox
			as="button"
			variant="link"
			lineHeight="2"
			_hover={{ bg: linkBgColor[colorMode] }}
			w="100%"
			{...props}
		>
			<RotaLink href={href}>
				<Text fontFamily="book">{text}</Text>
			</RotaLink>
		</PseudoBox>
	);
}

function MenuSubHeading({ text, ...props }) {
	return (
		<Heading
			fontSize={1}
			textTransform="uppercase"
			letterSpacing="wide"
			fontFamily="slab"
			textAlign="center"
			{...props}
		>
			{text}
		</Heading>
	);
}

export function MenuList() {
	return (
		<Stack justify="center" align="center">
			<MenuSubHeading text="Components" />
			<MenuComponentItem href="/current-thread-clip-item" text="CurrentThreadClipItem" />
			<MenuComponentItem href="/avatar" text="Avatar" />
			<MenuComponentItem href="/site-content-layout" text="SiteContentLayout" />
			<MenuComponentItem href="/room-view" text="RoomView" />
			<MenuComponentItem href="/current-clip-player" text="CurrentClipPlayer" />
			<MenuComponentItem href="/current-clip-bar" text="CurrentClipBar" />
			<MenuComponentItem href="/motion" text="Motion" />
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
