import { Text, Flex, Heading, Box, Button, Switch, Stack, IconButton, useColorMode, Link } from '@chakra-ui/core';
import { useState } from 'react';
import NextLink from 'next/link';
import { motion } from 'framer-motion';
import { FaMoon, FaSun } from 'react-icons/fa';

import Logo from './Logo';
import RotaLink from './RotaLink';

const MotionBox = motion.custom(Box);

const MenuItems = ({ children }) => (
	<Text mt={{ _: 4, md: 0 }} mr={6} display="block">
		{children}
	</Text>
);

export default function Header({}) {
	const [ show, setShow ] = useState(false);
	const handleToggle = () => setShow(!show);
	const { colorMode, toggleColorMode } = useColorMode();

	const colorModeIcon = { light: FaMoon, dark: FaSun };

	return (
		<Flex
			as="nav"
			align="center"
			justify="space-between"
			wrap="wrap"
			padding={{ _: 4, md: 5 }}
			bg="outline.500"
			color="white"
		>
			<RotaLink href="/">
				<Flex align="center" mr={5} cursor="pointer" style={{ userSelect: 'none', WebkitTouchCallout: 'none' }}>
					<MotionBox
						animate={{ rotate: 360 }}
						transition={{
							duration: 32,
							loop: Infinity,
						}}
					>
						<Logo h={{ _: 12, md: 16 }} w={{ _: 12, md: 16 }} />
					</MotionBox>
					<Heading as="h1" fontSize={{ _: 6, md: 7 }} fontFamily="rust" ml={4}>
						R<Text as="span" fontSize={{ _: 5, md: 6 }} fontFamily="rust">
							ota<Text as="span" fontSize={{ _: 5, md: 6 }} fontFamily="rust">
								.chat
							</Text>
						</Text>
					</Heading>
				</Flex>
			</RotaLink>

			<Box display={{ _: 'block', md: 'none' }} onClick={handleToggle}>
				<svg fill="white" width="12px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<title>Menu</title>
					<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
				</svg>
			</Box>

			<Box
				display={{ _: show ? 'block' : 'none', md: 'flex' }}
				width={{ _: 'full', md: 'auto' }}
				alignItems="center"
				flexGrow={1}
			>
				<MenuItems>Docs</MenuItems>
				<MenuItems>Examples</MenuItems>
				<MenuItems>Blog</MenuItems>
			</Box>

			<Stack isInline alignItems="center" mr={2}>
				<IconButton
					aria-label="Toggle dark mode"
					icon={colorModeIcon[colorMode]}
					size="lg"
					variant="ghost"
					onClick={toggleColorMode}
				/>
			</Stack>

			<Box display={{ _: show ? 'block' : 'none', md: 'block' }} mt={{ _: 4, md: 0 }}>
				<Button bg="transparent" border="1px">
					Create Account
				</Button>
			</Box>
		</Flex>
	);
}
